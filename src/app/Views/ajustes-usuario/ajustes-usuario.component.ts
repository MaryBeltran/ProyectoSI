import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';

@Component({
  selector: 'app-ajustes-usuario',
  templateUrl: './ajustes-usuario.component.html',
  styleUrls: ['./ajustes-usuario.component.css']
})
export class AjustesUsuarioComponent implements OnInit {
  usuarios = [];

  constructor(private fs: FirestoreService) {
    fs.getAllUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios
    })
   }

  ngOnInit() {
  }

}
