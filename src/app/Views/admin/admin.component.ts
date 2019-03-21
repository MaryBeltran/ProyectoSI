import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'src/app/Service/firestore.service';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user ="";
  constructor(private fs: FirestoreService,public auth: AuthService) {
    
    this.user= fs.getUsuarioActual();
   }

  ngOnInit() {
  }

}
