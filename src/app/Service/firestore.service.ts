import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Usuario} from 'src/app/Service/models/interfaces'


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  usuariosCollection: AngularFirestoreCollection;
  usuarios: Observable<Usuario[]>;
  usuariosDoc: AngularFirestoreDocument;
  Ausuario = [];

  constructor(public db: AngularFirestore) { 
    this.getUsers().subscribe(data => {
      data.forEach(element => {
        this.Ausuario.push(element.payload.doc.data())
      });
    });
  }

  getUsers(){
    return this.db.collection('Usuario').snapshotChanges();
  }

  getAllUsuarios(){
    this.usuariosCollection= this.db.collection('Usuario')
    this.usuarios = this.usuariosCollection.valueChanges();
    return this.usuarios
  }

  updateUsers(usuario: Usuario){
    console.log(usuario);
    this.usuariosDoc = this.db.doc(`Usuario/${usuario.id}`);
    this.usuariosDoc.set(
      {...usuario},
      {merge:true});
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

