import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Service/firestore.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Favoritos, Producto } from '../Service/models/interfaces';

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
  favo:Favoritos[];
  favoritos=[];
  //favoritos=[];
  usuario;
  
  constructor(private fs: FirestoreService, public auth: AuthService, private router: Router) {
     fs.getFavoritos();
     console.log("usuarios");
     auth.user$.forEach(user=>{
     console.log(user.email);
     this.usuario=user.email;
     });
   

   }

  ngOnInit() {
    this.fs.getAllFavoritos().subscribe(items => {
      // items is an array
      items.forEach(item => {
          this.idFavoritos.push(item.productoID);
          this.CorreoFavoritos.push(item.Usuario);
      });
      this.favo=items;
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

  
  deleteFavorito(event, prod){
   
   
   

   this.favo.forEach(item => {
      if(prod==item.productoID){
        this.fs.deletePreferidos(item);
        
        console.log(item);
      }
   
  });

   
  };
  

}
