import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Service/firestore.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  productos = [];
  constructor(private fs: FirestoreService) {
    fs.getAllProductos().subscribe(productos =>{
      
      productos.forEach(item => {
       if(item.descuento != 0){
        this.productos.push(item);
       }
    });
      
    })
   }

  ngOnInit() {
  }

}
