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
  
  idProducto;
  producto;
  cantidad = 200;
  variaciones: [];
  productos: any[];
  detalle=[];
  user ="";
  
  favoritos: Favoritos = {
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
      console.log(this.productos[0]+"0");
      console.log(this.detalle[0]+"1");

      for (let index = 0; index < this.productos.length; index++) {
        console.log(this.productos[index]);
         if (this.idProducto == this.productos[index].id) {
          this.detalle=this.productos[index]
          this.producto = this.productos[index]
          //This.detalle es un producto
         
          console.log("entraa");
         }
        
      }
      console.log("cero");
      console.log(this.productos[1]);


    });

   
    

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
    alert("Ha añadido el producto a Favoritos");
    
  }
  addCar(usu,ide){
    console.log("NUEVO",this.producto.Calificacion)
    console.log("NUEVO",this.cantidad)
    console.log("NUEVO",this.variaciones)

    if(this.variaciones == undefined){

      this.fs.addCarrito(this.detalle, this.cantidad, null);
    }else{
      this.fs.addCarrito(this.detalle, this.cantidad, this.variaciones);
    }
    alert("Ha añadido el producto al Carrito");
  }
  
 
}
