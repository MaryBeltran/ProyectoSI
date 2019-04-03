import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import {Usuario, Producto, Categoria, Favoritos, User, Carrito, Piloto, Filtro1, Filtro2, Filtro3} from 'src/app/Service/models/interfaces'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
 
  
  usuarioActual="";

  usersCollection: AngularFirestoreCollection;
  users:Observable<User[]>
  
  usuariosCollection: AngularFirestoreCollection;
  usuarios: Observable<Usuario[]>;
  usuariosDoc: AngularFirestoreDocument;
  Ausuario = [];

  productoColeccion: AngularFirestoreCollection<Producto>;
  Productos: Observable<Producto[]>;
  productosDoc: AngularFirestoreDocument<Producto>;


  favoritosColeccion: AngularFirestoreCollection<Favoritos>;
  favoritos: Observable<Favoritos[]>;
  favoritosDoc: AngularFirestoreDocument<Favoritos>;
  pilotoColeccion: AngularFirestoreCollection<Piloto>;
  piloto: Observable<Piloto[]>;
  pilotoDoc: AngularFirestoreDocument<Piloto>;
  f1Coleccion: AngularFirestoreCollection<Filtro1>;
  f1: Observable<Filtro1[]>;
  f1Doc: AngularFirestoreDocument<Filtro1>;
  f2Coleccion: AngularFirestoreCollection<Filtro2>;
  f2: Observable<Filtro2[]>;
  f2Doc: AngularFirestoreDocument<Filtro2>;
  f3Coleccion: AngularFirestoreCollection<Filtro3>;
  f3: Observable<Filtro3[]>;
  f3Doc: AngularFirestoreDocument<Filtro3>;
  idFavoritos= [];
  carritoColeccion: AngularFirestoreCollection<Carrito>;
  carrito: Observable<Carrito[]>;
  carritoDoc: AngularFirestoreDocument<Carrito>;
  idcarrito= [];

  categoriasColeccion: AngularFirestoreCollection<Categoria>;
  Categorias: Observable<Categoria[]>;

  constructor(public db: AngularFirestore, private http: HttpClient,  private router: Router) { 
   
  this.getFavoritos().subscribe(data => {
    
    data.forEach(element => {
      
     this.idFavoritos.push(element.payload.doc.ref)
     }); 
  });
  this.getCarrito().subscribe(data => {
    
    data.forEach(element => {
      
     this.idcarrito.push(element.payload.doc.ref)
     }); 
  });

  this.getAllFavoritos();
  this.getAllCarrito();
  this.getAllProductos();
 
    
  }
  
  

  

  
  updateUsers(user: User){
    console.log(user);
    this.usuariosDoc = this.db.doc(`users/${user.uid}`);
    this.usuariosDoc.set(
      {...user},
      {merge:true});
  }

  updatePiloto(){
    this.usuariosDoc = this.db.doc(`Pagina/1`);
    this.usuariosDoc.set(
      {Piloto:true},
      {merge:true});
  }
  updatePiloto2(){
    this.usuariosDoc = this.db.doc(`Pagina/1`);
    this.usuariosDoc.set(
      {Piloto:false},
      {merge:true});
  }
  updatef1(){
    this.usuariosDoc = this.db.doc(`Pagina/2`);
    this.usuariosDoc.set(
      {filtro1:true},
      {merge:true});
  }
  updatef11(){
    this.usuariosDoc = this.db.doc(`Pagina/2`);
    this.usuariosDoc.set(
      {filtro1:false},
      {merge:true});
  }
  updatef2(){
    this.usuariosDoc = this.db.doc(`Pagina/3`);
    this.usuariosDoc.set(
      {filtro2:true},
      {merge:true});
  }
  updatef21(){
    this.usuariosDoc = this.db.doc(`Pagina/3`);
    this.usuariosDoc.set(
      {filtro2:false},
      {merge:true});
  }
  updatef3(){
    this.usuariosDoc = this.db.doc(`Pagina/4`);
    this.usuariosDoc.set(
      {filtro3:true},
      {merge:true});
  }
  updatef31(){
    this.usuariosDoc = this.db.doc(`Pagina/4`);
    this.usuariosDoc.set(
      {filtro3:false},
      {merge:true});
  }
  
 

  getAllUsuarios(){
    this.usuariosCollection= this.db.collection('Users')
    this.usuarios = this.usuariosCollection.valueChanges();
    return this.users
  }
  getFavoritos(){
    return this.db.collection('Favoritos').snapshotChanges();
  }
  getCarrito(){
    return this.db.collection('Carrito').snapshotChanges();
  }
  getAllUsers(){
    this.usersCollection = this.db.collection('users')
    this.users = this.usersCollection.valueChanges();
    return this.users
  }

  getAllProductos(){
    this.productoColeccion=this.db.collection('Productos');
    this.Productos = this.productoColeccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        data.cod= a.payload.doc.id;
        console.log("dataaa", data);
        return data
      })
    }))
    return this.Productos;
  }

  getAllFavoritos(){
   
    this.favoritosColeccion = this.db.collection('Favoritos');
    this.favoritos = this.favoritosColeccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Favoritos;
        data.id = a.payload.doc.id;
        console.log("dataaa", data);
        return data
      })
    }))
    return this.favoritos;
  }
  
  getAllPiloto(){
   
    this.pilotoColeccion = this.db.collection('Pagina');
    this.piloto = this.pilotoColeccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Piloto;
        console.log("dataaa", data);
        return data
      })
    }))
    return this.piloto;
  }
  getAllf1(){
    this.f1Coleccion = this.db.collection('Pagina');
    this.f1 = this.f1Coleccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Filtro1;
        console.log("dataaa", data);
        return data
      })
    }))
    return this.f1;
  }
  getAllf2(){
    this.f2Coleccion = this.db.collection('Pagina');
    this.f2 = this.f2Coleccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Filtro2;
        console.log("dataaa", data);
        return data
      })
    }))
    return this.f2;
  }
  getAllf3(){
    this.f3Coleccion = this.db.collection('Pagina');
    this.f3 = this.f3Coleccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Filtro3;
        console.log("dataaa", data);
        return data
      })
    }))
    return this.f3;
  }
  

  getAllCarrito(){
   
    this.carritoColeccion = this.db.collection('Carrito');
    this.carrito = this.carritoColeccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Carrito;
        data.id = a.payload.doc.id;
        console.log("dataaa", data);
        return data
      })
    }))

    return this.carrito;
  }

  getCategorias(){
    this.categoriasColeccion=this.db.collection('Categorias');
    this.Categorias=this.categoriasColeccion.valueChanges();
    return this.Categorias
  }

  setUsuarioActual(user){
    this.usuarioActual= user;
  }
  getUsuarioActual(){
    return this.usuarioActual;
  }


  addFavorito(favorito){
     this.db.collection('/Favoritos').add(favorito).then(function(docRef){
      console.log(docRef.id);
      return this.db.collection('/Favoritos').doc(docRef.id).set({
        id: docRef.id
      },{merge: docRef.id });
    });

 
  }
  addCarrito(carrito){
    this.db.collection('/Carrito').add(carrito).then(function(docRef){
     console.log(docRef.id);
     return this.db.collection('/Carrito').doc(docRef.id).set({
       id: docRef.id
     },{merge: docRef.id });
   });


 }
 addProductos(producto){
  this.productoColeccion= this.db.collection('/Productos');
  this.productoColeccion.add(producto);
 
 }
 actualizarProds(producto: Producto){
  console.log(producto);
  this.productosDoc = this.db.doc(`Productos/${producto.cod}`);
  this.productosDoc.set(
    {...producto},
    {merge:true});

    this.router.navigate(['/views/crudproductos']);
}
deleteProductos(id){
   
  this.productosDoc = this.db.doc(`Productos/${id}`);
  this.productosDoc.delete();
  //this.router['/home'];
 
  
}
  
 
  deletePreferidos(id){
   
    this.favoritosDoc = this.db.doc(`Favoritos/${id}`);
    this.favoritosDoc.delete();
    //this.router['/home'];
   
    
  }
  deleteCarros(id){
   
    this.carritoDoc = this.db.doc(`Carrito/${id}`);
    this.carritoDoc.delete();
    //this.router['/home'];
   
    
  }
  

 

}

