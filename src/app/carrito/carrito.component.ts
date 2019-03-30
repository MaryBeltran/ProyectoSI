import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  user=""
  constructor(private fs: FirestoreService, public auth: AuthService) { 
    this.user= fs.getUsuarioActual();
    
  }
  ngOnInit() {
  }

}
