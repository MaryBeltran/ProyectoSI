import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Favoritos, Carrito } from 'src/app/Service/models/interfaces';
import { AuthService } from 'src/app/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';





@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  idProducto;
  idComentario;
  CorreoComentario;
  producto;
  comentario;
  cantidad = 200;
  variaciones: [];
  
  productos: any[];
  comentarios: any[];
  detalle=[];
  user ="";
  values={
    a:1
  }
  favoritos: Favoritos = {
    Usuario: '',
    productoID: '',
  }
  
  
 
  constructor(private fs: FirestoreService, private route: ActivatedRoute, public auth: AuthService,private afs: AngularFirestore) {
    this.user= auth.email;
    fs.getComentario();

   }

  ngOnInit() {
  
    this.fs.getAllComentarios().subscribe(comentarios => {
      this.comentarios=comentarios;
     }
    );


    
    
    this.idProducto=this.route.snapshot.paramMap.get('id');


    

    this.fs.getAllProductos().subscribe(productos =>{
      this.productos = productos;

      for (let index = 0; index < this.productos.length; index++) {
         if (this.idProducto == this.productos[index].id) {
          this.detalle=this.productos[index]
          this.producto = this.productos[index]
          //This.detalle es un producto
         }
      }
    });

    this.fs.getAllComentarios().subscribe(comentarios =>{
      this.comentarios = comentarios;
    })

   
    

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
