import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'src/app/Service/firestore.service';

import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-a-recomendados',
  templateUrl: './a-recomendados.component.html',
  styleUrls: ['./a-recomendados.component.css']
})
export class ARecomendadosComponent implements OnInit {

  user ="";
  constructor(private fs: FirestoreService,public auth: AuthService) {
    
    this.user= fs.getUsuarioActual();
   }

  ngOnInit() {
  }

}
