import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Service/models/interfaces';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudproductos',
  templateUrl: './crudproductos.component.html',
  styleUrls: ['./crudproductos.component.css']
})
export class CrudproductosComponent implements OnInit {
 
 

 id=0;
   
  ListaProductos= [];
  productos: Producto = {
     id: 0,
     Nombre: '',
     Cantidad: '',
     Costo: '',
     Departamento: '',
     descuento: 0,
     especificaciones: '',
     Descripcion: '',
     foto: '',
     foto1: '',
     foto2: '',
     foto3: '',
     foto4: '',
     Calificacion: 0,
     cod: '',
    

    
  }


  constructor(private fs: FirestoreService, private router: Router) {
    
    fs.getAllProductos().subscribe(productos =>{
      productos.forEach(item=>{
      if(this.id<=item.id){
        this.id=item.id+1;
        this.productos.id=item.id+1;
      console.log(this.id);
      }
     
      
      });
      this.ListaProductos= productos;
    })
   }

  ngOnInit() {
  }
  registrar(){
    console.log( this.productos.Nombre);
    console.log(this.productos);

    this.fs.addProductos(this.productos);


  }
  eliminar(id){
    
    if(confirm("¿Quiere remover este producto?")==true){
      this.fs.deleteProductos(id);
      this.router['/home/views/crudproductos'];
      console.log(id);
    }

  }
  

}
