import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Carrito, Producto } from 'src/app/Service/models/interfaces';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
//idProductos= [];
idCarrito = [];
CorreoCarrito= [];
//articulos=[];
productos = [];
carri:Carrito[];
coID;

//favoritos=[];
usuario;
  constructor(private fs: FirestoreService, public auth: AuthService, private router: Router) { 
    fs.getCarrito();
    console.log("usuarios");
    auth.user$.forEach(user=>{
    console.log(user.email);
    this.usuario=user.email;
   
    });


  }

  ngOnInit() {
    this.fs.getAllCarrito().subscribe(items => {
      // items is an array
      items.forEach(item => {
          this.idCarrito.push(item.productoID);
          this.CorreoCarrito.push(item.Usuario);
      });
      this.carri=items;
     }
    

    );

  
    
    this.fs.getAllProductos().subscribe(elemento => {
     
      elemento.forEach(item => {
        

      
        for (let index = 0; index < this.idCarrito.length; index++) {
          console.log("Entran");
          console.log(this.idCarrito[index],item.id);
          if(item.id==this.idCarrito[index] && this.usuario==this.CorreoCarrito[index] ){
            console.log("Entran");
            console.log(this.idCarrito[index],item.id);
           // console.log("Entran:",item);
            this.productos.push(item);


          }
          
        }
         
      });
     }

    );
  }

  
  deleteCar(event, prod){
   
   
   

   this.carri.forEach(item => {
      if(prod==item.productoID){
        this.fs.deleteCarros(item.id);
        console.log(item);
      }
   
  });

   
  };
  


  }


