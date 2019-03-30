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


}
