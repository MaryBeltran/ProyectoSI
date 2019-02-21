import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  usuarios = [];

  constructor(private fs: FirestoreService) {
    fs.getAllUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios
    })
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
