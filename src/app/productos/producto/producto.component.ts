import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Favoritos, Carrito } from 'src/app/Service/models/interfaces';
import { AuthService } from 'src/app/auth.service';




@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  idProducto: any;
  productos=[];
  detalle=[];
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
    

   }

  ngOnInit() {
   
   

    
    this.idProducto=this.route.snapshot.paramMap.get('id');

    this.fs.getAllProductos().subscribe(productos =>{
      this.productos = productos;
     

      for (let index = 0; index < this.productos.length; index++) {
    
         if (this.idProducto == this.productos[index].id) {
          this.detalle=this.productos[index];
         
         
         }
        
      }
     


    });

   
    

  }
  
  addFav(usu,ide){
    console.log("Entramos: ");
    console.log(usu);
    console.log(ide);
   
    this.favoritos.Usuario=usu;
    this.favoritos.productoID=ide;
    
    
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
