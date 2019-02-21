import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  usuarios = [];

  constructor(private fs: FirestoreService) {
    fs.getAllUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios
    })
   }

  ngOnInit() {
  }

}
