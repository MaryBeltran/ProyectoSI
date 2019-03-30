import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  user ="";

  constructor(private fs: FirestoreService, public auth: AuthService) {
    this.user= fs.getUsuarioActual();

   
   }

  ngOnInit() {
  }

  updateusuario(user, name: string, dir: string, corr: string){
    this.auth.updateUserData3(user, name,dir,corr)
  }

}
