import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FirestoreService } from 'src/app/Service/firestore.service';

declare let paypal: any;


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit, AfterViewChecked {

  cart: any;
  total: number = 0;
  User_id: string;
  paypalLoad: boolean = true;
  addScript: boolean = false;
  direccion; 
  PrecioPago;
  @Input() precio;


  constructor(public auth: AuthService, public fs: FirestoreService) {}

  ngOnInit() {
    this.auth.user$.subscribe(usuario =>{ 
      this.direccion = usuario.direccion   
      if(usuario){
      var sub = this.fs.myCart(usuario.uid).subscribe(Cart => {
        this.cart = Cart.payload.data();
        sub.unsubscribe()
      }).add(()=>{
        this.PrecioPago = this.fs.totalPrice(this.cart)
      })
    }
  })
}



// Variable paypalConfig
paypalConfig = {
  env: 'sandbox',

  style: {
    label: 'paypal',
    size:  'medium',    // small | medium | large | responsive
    shape: 'rect',     // pill | rect
    color: 'gold',     // gold | blue | silver | black
    tagline: false      
},
  client: {
      sandbox: 'AW9dFWgW-TWnjViXl5Gu023xB6Gp2rB4d1o3Zvcaus_JkTE1OOojQOKO71LUMnFPY0-7fDz6AuPqRitk',
      production: '<production-key>'
  },
  commit: true,
  payment: (data, actions) => {
      return actions.payment.create({
          payment: {
              transactions: [
                  {
                      amount: { total: this.PrecioPago , currency: 'USD' }
                  }
              ]
          }
      })
  },


  onAuthorize:(data, actions) => {

      // Make a call to the REST api to execute the payment
      return actions.payment.execute().then((payment) => {
          window.alert('Payment Complete!');
          // Metodo para hacer orden
      })
  }
};

ngAfterViewChecked(): void {
  if(!this.addScript) {
    this.addPaypalScript().then(() => {
      paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      this.paypalLoad = true;
    })
  }
}

addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js'
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
}







}
