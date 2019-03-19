import { Component, OnInit } from '@angular/core';
import { ListaproductosComponent } from '../listaproductos/listaproductos.component';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Favoritos } from 'src/app/Service/models/interfaces';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  idProducto: any;
  productos=[];
  detalle = [];
  user ="";
  
  favoritos = {
    id: String,
    Usuario: String
    
  };
  
 
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
          this.detalle=this.productos[index];
         
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
    this.favoritos.id=ide;
    console.log(this.favoritos.Usuario);
    console.log(this.favoritos.id);
    this.fs.addFavorito(this.favoritos);

    /*
   
    this.favoritos.Costo=cos;
    this.favoritos.Departamento=dep;
    this.favoritos.Foto=fot;
    

  */
  }
  
 
}
