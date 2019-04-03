import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AuthService } from '../auth.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
user=""
  constructor(private fs: FirestoreService, public auth: AuthService) { 
    this.user= fs.getUsuarioActual();
    
  }
 

  ngOnInit() {
  
  }

}
