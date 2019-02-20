import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

interface Producto{
  id?: String;
  Nombre: String;
  Foto: String;
  Costo: String;
  Cantidad: String;
  descuento: String;
  Clasificacion: String;
}
interface Categoria{
  id?: String;
  Nombre: String;
  CantidadDeproductos: String;
}

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
  productoColeccion: AngularFirestoreCollection<Producto>;
  Productos: Observable<Producto[]>;

  categoriasColeccion: AngularFirestoreCollection<Categoria>;
  Categorias: Observable<Categoria[]>;

  constructor(private afs: AngularFirestore) {

   }

  ngOnInit() {
    this.productoColeccion=this.afs.collection('Productos');
    this.Productos=this.productoColeccion.valueChanges();

    this.categoriasColeccion=this.afs.collection('Categorias');
    this.Categorias=this.categoriasColeccion.valueChanges();
  }

  /* 
  probar en el html
  <div *ngFor="let Producto of Productos | async">
   <div>{{Producto | json}}</div>
   <div>{{Producto.Nombre}} </div>
   
</div>  */

}
