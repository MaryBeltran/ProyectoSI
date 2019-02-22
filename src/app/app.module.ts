import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

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
import { AjustesUsuarioComponent } from './Views/ajustes-usuario/ajustes-usuario.component';
import { AdminComponent } from './Views/admin/admin.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { B1AdminComponent } from './Component/b1-admin/b1-admin.component';
import { B2AdminComponent } from './Component/b2-admin/b2-admin.component';
import { BannerComponent } from './banner/banner.component';
import { TablaCategoriasComponent } from './tabla-categorias/tabla-categorias.component';
import { ListaComponent } from './carrito/lista/lista.component';
import { PagoComponent } from './carrito/pago/pago.component';
import { ListaDeseosComponent } from './lista-deseos/lista-deseos.component';
import { CrudproductosComponent } from './Views/crudproductos/crudproductos.component';
import { VentasComponent } from './Views/ventas/ventas.component';
import { ARecomendadosComponent } from './Views/a-recomendados/a-recomendados.component';
import { APromocionesComponent } from './Views/a-promociones/a-promociones.component';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
  



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
    AjustesUsuarioComponent,
    AdminComponent,
    Navbar2Component,
    B1AdminComponent,
    B2AdminComponent,
    BannerComponent,
    TablaCategoriasComponent,
    ListaComponent,
    PagoComponent,

    ListaDeseosComponent,
    
    

    CrudproductosComponent,
    VentasComponent,
    ARecomendadosComponent,
    APromocionesComponent,

   
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
