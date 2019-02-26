import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Service/firestore.service';

@Component({
  selector: 'app-b1-admin',
  templateUrl: './b1-admin.component.html',
  styleUrls: ['./b1-admin.component.css']
})
export class B1AdminComponent implements OnInit {
user ="";
  constructor(private fs: FirestoreService) {

    this.user= fs.getUsuarioActual();
    console.log(fs.getUsuarioActual());
   }

  ngOnInit() {
  }

}
