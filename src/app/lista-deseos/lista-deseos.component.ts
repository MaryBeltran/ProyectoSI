import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Service/firestore.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css']
})
export class ListaDeseosComponent implements OnInit {
  //idProductos= [];
  idFavoritos = [];
  CorreoFavoritos= [];
  //articulos=[];
  productos = [];
  //favoritos=[];
  usuario;
  
  constructor(private fs: FirestoreService, public auth: AuthService) {
     console.log("usuarios");
     auth.user$.forEach(user=>{
     console.log(user.email);
     this.usuario=user.email;
     });
   

    

    
    

    /*fs.getAllProductos().subscribe(productos =>{
      this.articulos=productos;

      this.productos = productos;
    });*/

    
   

   
   




   }

  ngOnInit() {
    this.fs.getAllFavoritos().subscribe(items => {
      // items is an array
      items.forEach(item => {
          this.idFavoritos.push(item.id);
          this.CorreoFavoritos.push(item.Usuario);
      });
     }

    );

  
    
    this.fs.getAllProductos().subscribe(elemento => {
     
      elemento.forEach(item => {
        

      
        for (let index = 0; index < this.idFavoritos.length; index++) {
          console.log("Entran");
          console.log(this.idFavoritos[index],item.id);
          if(item.id==this.idFavoritos[index] && this.usuario==this.CorreoFavoritos[index] ){
            console.log("Entran");
            console.log(this.idFavoritos[index],item.id);
           // console.log("Entran:",item);
            this.productos.push(item);


          }
          
        }
         
      });
     }

    );
  }

}
