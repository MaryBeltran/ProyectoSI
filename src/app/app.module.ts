import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './footer/footer.component';
import { PromocionesComponent } from './promociones/promociones.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaproductosComponent } from './productos/listaproductos/listaproductos.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { RecomendadoComponent } from './recomendado/recomendado.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,
    ProductosComponent,
    FooterComponent,
    PromocionesComponent,
    HomeComponent,
  
    ListaproductosComponent,
    ProductoComponent,
    CarritoComponent,
    AjustesComponent,
    RecomendadoComponent,
    FavoritosComponent,
    LoginComponent,
   
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
