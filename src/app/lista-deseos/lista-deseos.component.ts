import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Service/firestore.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css']
})
export class ListaDeseosComponent implements OnInit {
  //idProductos= [];
  idFavoritos = [];
  //articulos=[];
  productos = [];
  //favoritos=[];
  ref=0;
  constructor(private fs: FirestoreService) {
  
   

    fs.getAllFavoritos().subscribe(items => {
      // items is an array
      items.forEach(item => {
          console.log("ADD: ",item.id);
          this.idFavoritos.push(item.id);
      });
     }

    );

    console.log("ID: ",this.idFavoritos);
    
    fs.getAllProductos().subscribe(elemento => {
     
      elemento.forEach(item => {
        console.log("Antes:",item);

       /* while(this.ref<this.idFavoritos.length){
        if(item.id==this.idFavoritos[this.ref]){

        }
        }*/
        for (let index = 0; index < this.idFavoritos.length; index++) {
          console.log("Entran");
          console.log(this.idFavoritos[index],item.id);
          if(item.id==this.idFavoritos[index]){
            console.log("Entran");
            console.log(this.idFavoritos[index],item.id);
           // console.log("Entran:",item);
            this.productos.push(item);


          }
          
        }
         
      });
     }

    );

    console.log(this.productos);
    

    /*fs.getAllProductos().subscribe(productos =>{
      this.articulos=productos;

      this.productos = productos;
    });*/

    
   

   
   




   }

  ngOnInit() {
  }

}
