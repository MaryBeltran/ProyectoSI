import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
<<<<<<< HEAD
=======
import { FirestoreService } from '../Service/firestore.service';
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contra; 
  correo;
  msgError="";
<<<<<<< HEAD
  constructor( private router: Router) { }
=======

  usuarios = [];
  name = [];
  pass = [];

  Actual ="";
  constructor( private router: Router, private fs: FirestoreService) { 

    fs.getAllUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios
      console.log(usuarios);
    })
    
    fs.setUsuarioActual(this.Actual);
    fs.getUsuarioActual();
    

    
  }
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30

  ngOnInit() {
  }

<<<<<<< HEAD
  buscar(): void 
	{
		
		if (this.contra == 12345 && this.correo == "bladimirapon@gmail.com" )
=======
 cant = 0;


  buscar(): void 
	{

    
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

   
		/*
		if (this.contra == this.usuarios.indexOf('Clave') && this.correo == "bladimirapon@gmail.com" )
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30
		{
      this.msgError="Entrar!!";		 
      console.log(this.msgError);
      this.router.navigate(['/home']);
        alert("Bienvenido " + "Bladimir Aponte");
		  return;
		}else if(this.contra == 12345 && this.correo == "supernacho@gmail.com"){
      this.router.navigate(['/admin']);
      alert("Bienvenido " + "Ignacio Rodriguez");
      return;
    }else{
      this.router.navigate(['/login']);
      alert("Por favor verifique los campos y vuelva a intentar");
<<<<<<< HEAD
    }
=======
    }*/
>>>>>>> e0231e8371ca92f53e98cdf253b9daec1f3b2e30
		this.msgError="";
	
		
	}

}
