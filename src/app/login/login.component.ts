import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { FirebaseAuth } from '@angular/fire';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FirestoreService } from '../Service/firestore.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string=''; 
  public email: string='';
  msgError="";

  usuarios = [];
  name = [];
  pass = [];

  Actual ="";
  constructor( private router: Router, private fs: FirestoreService,public auth: AuthService) { 

  
    

    
  }

  ngOnInit() {
  }

  onlogin(): void{
    this.auth.loginEmail(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['/home']);
    }).catch( err => console.log('err', err.msgError));
  }

 /*cant = 0;
 
  buscar(): void {

    console.log("entraa");
    for (let index = 0; index <= this.usuarios.length; index++) {
     
      if (this.contra ==  this.usuarios[index].Clave && this.correo ==  this.usuarios[index].Correo && this.usuarios[index].Admin == true )
      {
        this.router.navigate(['/admin']);
        this.Actual=(this.usuarios[index].Nombre);
        console.log("Actualll"+this.Actual);
        this.fs.setUsuarioActual(this.usuarios[index].Nombre);
        alert("Bienvenido " +  this.usuarios[index].Nombre);
       
         return;
      }else if( this.contra ==  this.usuarios[index].Clave && this.correo ==  this.usuarios[index].Correo && this.usuarios[index].Admin == false)
      {
        this.router.navigate(['/home']);
        this.Actual=(this.usuarios[index].Nombre);
        this.fs.setUsuarioActual(this.usuarios[index].Nombre);

        console.log("Actualll"+this.Actual);
        alert("Bienvenido " + this.usuarios[index].Nombre);
        
        return;
      } else  if(index == this.usuarios.length-1){
        alert("Vefique sus datos nuevamente" );
        this.router.navigate(['/login']);
      }
      
    }

		this.msgError="";	
		
  }
  */

}
