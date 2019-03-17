import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Usuario, Producto, Categoria, Favoritos} from 'src/app/Service/models/interfaces'


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
 
  
  usuarioActual="";

  usuariosCollection: AngularFirestoreCollection;
  usuarios: Observable<Usuario[]>;
  usuariosDoc: AngularFirestoreDocument;
  Ausuario = [];

  productoColeccion: AngularFirestoreCollection<Producto>;
  Productos: Observable<Producto[]>;

  favoritosColeccion: AngularFirestoreCollection<Favoritos>;
  Favoritos: Observable<Favoritos[]>;

  categoriasColeccion: AngularFirestoreCollection<Categoria>;
  Categorias: Observable<Categoria[]>;

  constructor(public db: AngularFirestore) { 
  

  }

  
  updateUsers(usuario: Usuario){
    console.log(usuario);
    this.usuariosDoc = this.db.doc(`Usuario/${usuario.id}`);
    this.usuariosDoc.set(
      {...usuario},
      {merge:true});
  }
  

  getAllUsuarios(){
    this.usuariosCollection= this.db.collection('Usuario')
    this.usuarios = this.usuariosCollection.valueChanges();
    return this.usuarios
  }

  

  getAllProductos(){
    this.productoColeccion=this.db.collection('Productos');
    this.Productos=this.productoColeccion.valueChanges();
    return this.Productos
  }

  getAllFavoritos(){
    this.favoritosColeccion=this.db.collection('Favoritos');
    this.Favoritos=this.favoritosColeccion.valueChanges();
    return this.Favoritos
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
    return this.db.collection('/Favoritos').add(favorito);
  }

  
  /*
 
 usuarios: Observable<Usuarios[]>;
 usuariosDoc:AngularFirestoreDocument;
 usuario: Observable <Producto>;

 productosColeccion: AngularFirestoreCollection;
 productos: Observable<Producto[]>;
 productosDoc: AngularFirestoreDocument;
 idProducto;

  constructor(public db: AngularFirestore) {

    this.getProductos().subscribe(data => {
      data.forEach(element => {
        this.idProducto.push(element.payload.doc.ref)
        });; 
    });
   }

    getUsers(): any {
    return this.db.collection('usuarios').snapshotChanges();
  }
 
  getProductos(): any {
    this.productosColeccion= this.db.collection('Productos')
    this.productos = this.productosColeccion.valueChanges();
    return this.productos
  }*/

}

