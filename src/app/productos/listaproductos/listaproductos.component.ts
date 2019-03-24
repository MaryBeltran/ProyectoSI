import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import * as _ from 'lodash';
import { AngularFireDatabaseModule } from '@angular/fire/database';
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

  prods: any;
  filteredProds: any;

  /// filter-able properties
 Departamento:     string;
  Calificacion:     number;
  Costo: number;

  filters = {}

  constructor(private fs: FirestoreService,private db: AngularFireDatabaseModule) {
  

    fs.getAllProductos().subscribe(productos =>{
      this.productos = productos;
    })

    fs.getCategorias().subscribe(categorias =>{
      this.categorias = categorias;
    })


   }

  ngOnInit() {
    
    this.fs.db.collection('/Productos').valueChanges()
    .subscribe(prods => {
      this.prods = prods;
      this.applyFilters()
  })
  }

  private applyFilters() {
    this.filteredProds = _.filter(this.prods, _.conforms(this.filters) )
  }
 /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }
  /// filter  numbers greater than rule
  filterGreaterThan(property: string, rule: number) {
    this.filters[property] = val => val > rule
    this.applyFilters()
  }
  filterGreater(property: string, rule: number) {
    this.filters[property] = val => val >= rule
    this.applyFilters()
  }
   /// filter properties that resolve to true
   filterBoolean(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters()
    }
  }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

  onClick(producto){
    
    console.log(producto);
  }
 


}
