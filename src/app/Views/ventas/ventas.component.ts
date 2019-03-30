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
  ngOnInit() {
    this.fs.getAllUsers().subscribe(users =>{
      this.users = users
    })
    
    this.user= this.fs.getUsuarioActual();
  }

}
