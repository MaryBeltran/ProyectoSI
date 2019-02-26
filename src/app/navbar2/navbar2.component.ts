import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../Service/firestore.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  user ="";
  constructor(private fs: FirestoreService) {

    this.user= fs.getUsuarioActual();
   }

  ngOnInit() {
  }
  menuresponsive() {
    var x = document.getElementById("BarraNave");
    if (x.className === "BarraNav") {
      x.className += " responsive";
    } else {
      x.className = "BarraNav";
    }
  }

  
}
