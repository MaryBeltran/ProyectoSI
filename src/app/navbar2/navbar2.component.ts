import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FirestoreService } from 'src/app/Service/firestore.service';
=======
import { FirestoreService } from '../Service/firestore.service';
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  user ="";
  constructor(private fs: FirestoreService) {

<<<<<<< HEAD
  usuarios = [];

  constructor(private fs: FirestoreService) {
    fs.getAllUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios
    })
=======
    this.user= fs.getUsuarioActual();
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30
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
