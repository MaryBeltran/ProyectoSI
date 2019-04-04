import { Component, OnInit, AfterViewChecked } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
                      amount: { total:20 , currency: 'USD' }
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
