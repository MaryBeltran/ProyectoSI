import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Service/models/interfaces';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 
  articulo: Producto;
  producto= [];
  detalle=[];
  users = [];

  user ="";
  idProducto: any;
  constructor(private fs: FirestoreService, private router: ActivatedRoute,public auth: AuthService) {
   
   }

  ngOnInit() {
    this.idProducto=this.router.snapshot.paramMap.get('id');

    this.fs.getAllProductos().subscribe(productos =>{
      productos.forEach(item=>{
       if(this.idProducto==item.id){
         this.articulo=item;
       }
      })
      this.fs.getAllUsers().subscribe(users =>{
        this.users = users
      })
      
      this.user= this.fs.getUsuarioActual();
     
     

     
      console.log(this.articulo);
    });
  }

  actualizarProductos(){
    this.fs.actualizarProds(this.articulo);
    
  


  }

}
