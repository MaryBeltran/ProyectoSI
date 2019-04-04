import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Service/firestore.service';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
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
  coID;
 
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

  
  deleteFavorito(prod){
   
   
   
    this.favo.forEach(item => {
      if(prod==item.productoID){

        if(confirm("¿Quiere remover este elemento de su lista de deseos?")==true){
          this.fs.deletePreferidos(item.id);
       
          console.log(item);
          
        }
        

      }
   
  });


   
  };
  

}
