import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-b1-admin',
  templateUrl: './b1-admin.component.html',
  styleUrls: ['./b1-admin.component.css']
})
export class B1AdminComponent implements OnInit {
user ="";
  constructor(private fs: FirestoreService,public auth: AuthService) {

    this.user= fs.getUsuarioActual();
   }

  ngOnInit() {
  }

}
