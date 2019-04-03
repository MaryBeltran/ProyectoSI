import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-ajustes-usuario',
  templateUrl: './ajustes-usuario.component.html',
  styleUrls: ['./ajustes-usuario.component.css']
})
export class AjustesUsuarioComponent implements OnInit {
//  usuarios = [];
  UsertoEdit;
  users = [];

  user ="";
  constructor(private fs: FirestoreService,public auth: AuthService) {
   /* fs.getAllUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios
    })*/
    
   }
   ngOnInit() {
    this.fs.getAllUsers().subscribe(users =>{
      this.users = users
    })
    
    this.user= this.fs.getUsuarioActual();
  }

   CambiarAdmin(item){
    this.UsertoEdit = item
    console.log(this.UsertoEdit)
    if(this.UsertoEdit.admin == true){
      this.UsertoEdit.admin = false
    }else{
      this.UsertoEdit.admin = true
    }
    console.log(this.UsertoEdit)
  }

  CambiarHab(item){
    this.UsertoEdit = item
    console.log(this.UsertoEdit)
    if(this.UsertoEdit.habilitacion == true){
      this.UsertoEdit.habilitacion = false
    }else{
      this.UsertoEdit.habilitacion = true
    }
    console.log(this.UsertoEdit)
    this.fs.updateUsers(this.UsertoEdit)

 }

  

}
