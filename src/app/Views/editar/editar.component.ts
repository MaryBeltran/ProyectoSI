import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Service/models/interfaces';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 
  articulo: Producto;
  producto= [];
  detalle=[];
  
  idProducto: any;
  constructor(private fs: FirestoreService, private router: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.idProducto=this.router.snapshot.paramMap.get('id');

    this.fs.getAllProductos().subscribe(productos =>{
      productos.forEach(item=>{
       if(this.idProducto==item.id){
         this.articulo=item;
       }
      })

     
     

     
      console.log(this.articulo);
    });
  }

  actualizarProductos(){
    this.fs.actualizarProductos(this.articulo);
    
  


  }

}
