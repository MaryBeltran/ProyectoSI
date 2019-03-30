import { ListaproductosComponent } from './../productos/listaproductos/listaproductos.component';
import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { RouterLink } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-tabla-categorias',
  templateUrl: './tabla-categorias.component.html',
  styleUrls: ['./tabla-categorias.component.css']
})
export class TablaCategoriasComponent implements OnInit {

  constructor(private router: Router) { }
  prods: any;
  filteredProds: any;
  Departamento:     string;
  Calificacion:     number;
  Costo: number;

  filters = {}
  ngOnInit() {    
  }
  private applyFilters() {
    this.filteredProds = _.filter(this.prods, _.conforms(this.filters) )
  }
  filterExact2(property: string, rule: any) {
    
    this.router.navigate(['/productos/listaproductos']);
    
  }
}
