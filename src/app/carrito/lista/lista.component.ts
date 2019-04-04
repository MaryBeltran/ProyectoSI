import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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

  cart: any;
  @Output() ClickedEvent = new EventEmitter<boolean>();
  clicked: boolean = true;

//idProductos= [];
idCarrito = [];
CorreoCarrito= [];
//articulos=[];
productos = [];
carri:Carrito[];
coID;

//favoritos=[];
usuario;
values={
  a:1
}
result = 0;  
  constructor(private fs: FirestoreService, public auth: AuthService, private router: Router) { 
    fs.getCarrito();
    console.log("usuarios");
    auth.user$.forEach(user=>{
    console.log(user.email);
    this.usuario=user.email;
   
    });


  }

  ngOnInit() {
   /* this.fs.getAllCarrito().subscribe(items => {
      // items is an array
      items.forEach(item => {
          this.idCarrito.push(item.productoID);
          this.CorreoCarrito.push(item.Usuario);
      });
      this.carri=items;
     }
    

    );*/

  
    this.auth.user$.subscribe(user => {
      if(user){
          this.fs.myCart(user.uid).subscribe(Cart => {
            this.cart = Cart.payload.data();
          })
      }
    })

  
    
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

  
  deleteCar(event, prod, i){
    this.auth.user$.subscribe(user => {
      if(user){
          this.fs.removeProduct(prod, user.uid, i)
      }
    })
  };
  
  getCarrito(){
    this.auth.user$.subscribe(user => {
      if(user){
          this.fs.myCart(user.uid).subscribe(Cart => {
            this.cart = Cart.payload.data();
          })
      }
    })
  }

incrementar(producto, i){
  this.auth.user$.subscribe(user => {
    if(user){
        this.fs.incrementar(producto,user.uid, i)
        this.ClickedEvent.emit(this.clicked)
    }
  })
}

disminuir(producto, i){
  this.auth.user$.subscribe(user => {
    if(user){
        if (producto.cantidad == 1){
          alert("No se puede disminuir mas la cantidad, si desea puede eliminar el producto en X")
        } else {
           this.fs.disminuir(producto,user.uid, i)
           this.ClickedEvent.emit(this.clicked)
        }  
    }
  })


}





  }


