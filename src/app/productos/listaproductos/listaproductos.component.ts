import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Producto, Categoria } from 'src/app/Service/models/interfaces';



@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
 
  productos = [];
  categorias = [];

  constructor(private fs: FirestoreService) {
    fs.getAllProductos().subscribe(productos =>{
      this.productos = productos;
    })

    fs.getCategorias().subscribe(categorias =>{
      this.categorias = categorias;
    })


   }

  ngOnInit() {
   
  }

  /* 
  probar en el html
  <div *ngFor="let Producto of Productos | async">
   <div>{{Producto | json}}</div>
   <div>{{Producto.Nombre}} </div>
   
</div>  */

}
