import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FirestoreService } from 'src/app/Service/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Favoritos, Carrito } from 'src/app/Service/models/interfaces';
import { AuthService } from 'src/app/auth.service';
=======
import { ListaproductosComponent } from '../listaproductos/listaproductos.component';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { ActivatedRoute } from '@angular/router';
>>>>>>> Desarrollo-Bladimir



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  idProducto: any;
  productos=[];
  detalle = [];
<<<<<<< HEAD
  user ="";
  
  favoritos: Favoritos = {
    Usuario: '',
    productoID: '',
  }
  carrito: Carrito = {
    Usuario: '',
    productoID: '',
  }
  
  
 
  constructor(private fs: FirestoreService, private route: ActivatedRoute, public auth: AuthService) {
    this.user= auth.email;
=======
 
  constructor(private fs: FirestoreService, private route: ActivatedRoute) {
>>>>>>> Desarrollo-Bladimir
    

   }

  ngOnInit() {
<<<<<<< HEAD
   
   

    
=======
>>>>>>> Desarrollo-Bladimir
    this.idProducto=this.route.snapshot.paramMap.get('id');

    this.fs.getAllProductos().subscribe(productos =>{
      this.productos = productos;
      console.log(this.productos[0]+"0");
      console.log(this.detalle[0]+"1");

      for (let index = 0; index < this.productos.length; index++) {
        console.log(this.productos[index]);
         if (this.idProducto == this.productos[index].id) {
          this.detalle=this.productos[index];
<<<<<<< HEAD
         
=======
>>>>>>> Desarrollo-Bladimir
          console.log("entraa");
         }
        
      }
<<<<<<< HEAD
      console.log("cero");
      console.log(this.productos[1]);
=======
>>>>>>> Desarrollo-Bladimir


    });

   
    
<<<<<<< HEAD
=======
    


>>>>>>> Desarrollo-Bladimir

    function myFunction(imgs) {
      var expandImg = document.getElementById("expandedImg");
      
      expandImg.parentElement.style.display = "block";
    }
  }
  
  addFav(usu,ide){
    console.log(usu);
    console.log(ide);
 
    this.favoritos.Usuario=usu;
    this.favoritos.productoID=ide;
    console.log(this.favoritos.Usuario);
    console.log(this.favoritos.productoID);
    this.fs.addFavorito(this.favoritos);
    this.fs.getAllFavoritos();

    
  }
  addCar(usu,ide){
    console.log(usu);
    console.log(ide);
 
    this.carrito.Usuario=usu;
    this.carrito.productoID=ide;
    console.log(this.carrito.Usuario);
    console.log(this.carrito.productoID);
    this.fs.addCarrito(this.carrito);
    this.fs.getAllCarrito();
  }
  
 
}
