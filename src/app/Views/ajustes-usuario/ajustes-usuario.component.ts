import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';

@Component({
  selector: 'app-ajustes-usuario',
  templateUrl: './ajustes-usuario.component.html',
  styleUrls: ['./ajustes-usuario.component.css']
})
export class AjustesUsuarioComponent implements OnInit {
  usuarios = [];
  UsertoEdit;

  constructor(private fs: FirestoreService) {
    
   }

   CambiarAdmin(item){
    this.UsertoEdit = item
    console.log(this.UsertoEdit)
    if(this.UsertoEdit.Admin == true){
      this.UsertoEdit.Admin = false
    }else{
      this.UsertoEdit.Admin = true
    }
    console.log(this.UsertoEdit)
  }

  CambiarHab(item){
    this.UsertoEdit = item
    console.log(this.UsertoEdit)
    if(this.UsertoEdit.Habilitacion == true){
      this.UsertoEdit.Habilitacion = false
    }else{
      this.UsertoEdit.Habilitacion = true
    }
    console.log(this.UsertoEdit)
  }

  ngOnInit() {
  }

}
