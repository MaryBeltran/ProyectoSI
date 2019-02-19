import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/Usuarios';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
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

