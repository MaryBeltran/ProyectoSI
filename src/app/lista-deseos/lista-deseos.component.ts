import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Service/firestore.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css']
})
export class ListaDeseosComponent implements OnInit {
  productos = [];
  constructor(private fs: FirestoreService) {
    fs.getAllFavoritos().subscribe(productos =>{
      this.productos = productos;
    })
   }

  ngOnInit() {
  }

}
