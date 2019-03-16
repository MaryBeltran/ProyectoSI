import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FirestoreService } from '../Service/firestore.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 
  
  constructor( private router: Router, private fs: FirestoreService,public auth: AuthService) { 

  }

  public email: string ='';
  public password: string='';

  ngOnInit() {
  }

 onAddUser(){
   this.auth.registerEmail(this.email, this.password)
   .then((res)=> {
     this.router.navigate(['/home']);
   }).catch(err => console.log('err', err.message));
 }


}
