import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'src/app/Service/firestore.service';

import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-a-promociones',
  templateUrl: './a-promociones.component.html',
  styleUrls: ['./a-promociones.component.css']
})
export class APromocionesComponent implements OnInit {

  user ="";
  constructor(private fs: FirestoreService,public auth: AuthService) {
    
    this.user= fs.getUsuarioActual();
   }

  ngOnInit() {
  }

}
