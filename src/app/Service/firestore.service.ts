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
}
