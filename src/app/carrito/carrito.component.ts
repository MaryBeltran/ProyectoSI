import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AuthService } from '../auth.service';

declare let paypal: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cart: any;
  total: number = 0;
  User_id: string;
  paypalLoad: boolean = true;
  addScript: boolean = false;
  user=""

  constructor(private fs: FirestoreService, public auth: AuthService) { 
    this.user= fs.getUsuarioActual();
    
  }
  ngOnInit() {
  }

  getCarrito(){
    this.auth.user$.subscribe(user => {
      if(user){
          this.fs.myCart(user.uid).subscribe(Cart => {
            this.cart = Cart.payload.data();
          })
      }
    })
  }


}