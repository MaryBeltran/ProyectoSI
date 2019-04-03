import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'src/app/Service/firestore.service';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  AdminEdit;
  user ="";
  pag;
  
  constructor(private fs: FirestoreService,public auth: AuthService) {
    
    this.user= fs.getUsuarioActual();
   }

  ngOnInit() {
    this.fs.getAllPiloto().subscribe(items => {
      
      items.forEach(item => {
          this.pag = item.Piloto;
      });
     }
    

    );
  }

  CambiarPiloto(){

      this.fs.updatePiloto()
    
    
  }
  CambiarPiloto2(){

    this.fs.updatePiloto2()
  
  
}
myClickFunction(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  alert("Ha activado el modo piloto");
}
myClickFunction2(event) { 
  //just added console.log which will display the event details in browser on click of the button.
  alert("Ha desactivado el modo piloto");
}

}
