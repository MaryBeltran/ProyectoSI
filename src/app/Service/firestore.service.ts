import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/Usuarios';
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
 
 
 usuarios: Observable<Usuarios[]>;
 usuariosDoc:AngularFirestoreDocument;
 usuario: Observable <Productos>;

 productosColeccion: AngularFirestoreCollection;
 productos: Observable<Productos[]>;
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
    this.productosColeccion= this.db.collection('menu')
    this.productos = this.productosColeccion.valueChanges();
    return this.productos
  }

}

