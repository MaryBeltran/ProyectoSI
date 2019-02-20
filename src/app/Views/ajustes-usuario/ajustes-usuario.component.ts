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
    fs.getAllUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios
    })
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
    this.fs.updateUsers(this.UsertoEdit)
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
    this.fs.updateUsers(this.UsertoEdit)
  }

  ngOnInit() {
  }

}
