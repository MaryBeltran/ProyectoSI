import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import {Usuario, Producto, Categoria, Favoritos} from 'src/app/Service/models/interfaces'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



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
  favoritos: Observable<Favoritos[]>;
  favoritosDoc: AngularFirestoreDocument<Favoritos>;
  idFavoritos= [];

  categoriasColeccion: AngularFirestoreCollection<Categoria>;
  Categorias: Observable<Categoria[]>;

  constructor(public db: AngularFirestore, private http: HttpClient,  private router: Router) { 
   
  this.getFavoritos().subscribe(data => {
    data.forEach(element => {
     this.idFavoritos.push(element.payload.doc.ref)
     }); 
  });
  
   
    
  }
  
  baseUrl: string = 'http://localhost:4200/productos/producto';


  
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
  getFavoritos(){
    return this.db.collection('Favoritos').snapshotChanges();
  }
  
  

  getAllProductos(){
    this.productoColeccion=this.db.collection('Productos');
    this.Productos=this.productoColeccion.valueChanges();
    return this.Productos
  }

  getAllFavoritos(){
    this.favoritosColeccion=this.db.collection('Favoritos');
    this.favoritos=this.favoritosColeccion.valueChanges();
    return this.favoritos
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
    favorito.id= this.db.collection('/Favoritos').ref;
    return this.db.collection('/Favoritos').add(favorito);
    
  }

  
 
  deletePreferidos(item){
   
    this.favoritosDoc = this.db.doc(`Favoritos/${item.id}`);
    this.favoritosDoc.delete();
    //this.router['/home'];
   
    
  }
  

 

}

