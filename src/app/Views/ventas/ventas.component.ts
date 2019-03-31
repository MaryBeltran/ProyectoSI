import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private fs: FirestoreService,public auth: AuthService) { }
  users = [];

  user ="";
  f1;
  f2;
  f3;
  ngOnInit() {
    this.fs.getAllf1().subscribe(f1 =>{
      this.f1 = f1
    })
    this.fs.getAllf2().subscribe(f2 =>{
      this.f2 = f2
    })
    this.fs.getAllf3().subscribe(f3 =>{
      this.f3 = f3
    })

    this.fs.getAllUsers().subscribe(users =>{
      this.users = users
    })
    
    this.user= this.fs.getUsuarioActual();
  }

  Cambiarf1(){
    this.fs.updatef1()
}
Cambiarf11(){
  this.fs.updatef11()
}
Cambiarf2(){
  this.fs.updatef2()
}
Cambiarf21(){
this.fs.updatef21()
}
Cambiarf3(){
  this.fs.updatef3()
}
Cambiarf31(){

this.fs.updatef31()
}
myClickFunction(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  alert("Ha activado el filtro");
}
myClickFunction2(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  alert("Ha desactivado el filtro");
}

}
