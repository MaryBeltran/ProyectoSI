import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contra; 
  correo;
  msgError="";
  constructor( private router: Router) { }

  ngOnInit() {
  }

  buscar(): void 
	{
		
		if (this.contra == 12345 && this.correo == "bladimirapon@gmail.com" )
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
    }
		this.msgError="";
	
		
	}

}
