import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function myFunction(imgs) {
      var expandImg = document.getElementById("expandedImg");
      
      expandImg.parentElement.style.display = "block";
    }
  }
 
}
