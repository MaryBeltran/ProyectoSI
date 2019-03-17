import { Component, OnInit } from '@angular/core';
import { ListaproductosComponent } from '../listaproductos/listaproductos.component';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  idProducto: any;
  productos=[];
  detalle = [];
 
  constructor(private fs: FirestoreService, private route: ActivatedRoute) {
    

   }

  ngOnInit() {
    this.idProducto=this.route.snapshot.paramMap.get('id');

    this.fs.getAllProductos().subscribe(productos =>{
      this.productos = productos;
      console.log(this.productos[0]+"0");
      console.log(this.detalle[0]+"1");

      for (let index = 0; index < this.productos.length; index++) {
        console.log(this.productos[index]);
         if (this.idProducto == this.productos[index].id) {
          this.detalle=this.productos[index];
          console.log("entraa");
         }
        
      }


    });

   
    
    



    function myFunction(imgs) {
      var expandImg = document.getElementById("expandedImg");
      
      expandImg.parentElement.style.display = "block";
    }
  }
 
}
