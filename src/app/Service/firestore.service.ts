import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Usuario, Producto, Categoria} from 'src/app/Service/models/interfaces'


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

  categoriasColeccion: AngularFirestoreCollection<Categoria>;
  Categorias: Observable<Categoria[]>;

  constructor(public db: AngularFirestore) { 
<<<<<<< HEAD
    this.getUsers().subscribe(data => {
      data.forEach(element => {
        this.Ausuario.push(element.payload.doc.data())
      });
    });



=======
  
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30

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

<<<<<<< HEAD
  updateUsers(usuario: Usuario){
    console.log(usuario);
    this.usuariosDoc = this.db.doc(`Usuario/${usuario.id}`);
    this.usuariosDoc.set(
      {...usuario},
      {merge:true});
  }
=======
  
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30

  getAllProductos(){
    this.productoColeccion=this.db.collection('Productos');
    this.Productos=this.productoColeccion.valueChanges();
    return this.Productos
  }

  getCategorias(){
    this.categoriasColeccion=this.db.collection('Categorias');
    this.Categorias=this.categoriasColeccion.valueChanges();
    return this.Categorias
  }

<<<<<<< HEAD
=======
  setUsuarioActual(user){
    this.usuarioActual= user;
  }
  getUsuarioActual(){
    return this.usuarioActual;
  }

>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30
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

