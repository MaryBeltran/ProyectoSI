import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocionesComponent } from './promociones/promociones.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RecomendadoComponent } from './recomendado/recomendado.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ListaproductosComponent } from './productos/listaproductos/listaproductos.component';

const routes: Routes = [

{
path:'',
children:[
{path: '',redirectTo:'/home',pathMatch: 'full'},
{path: 'home',component: HomeComponent},
{path: 'promociones',component: PromocionesComponent},
{path: 'ajustes',component: AjustesComponent},
{path: 'carrito',component: CarritoComponent},
{path: 'recomendado',component: RecomendadoComponent},
{path: 'favoritos',component: FavoritosComponent},
{path: 'productos/producto',component: ProductoComponent},
{path: 'productos/listaproductos',component: ListaproductosComponent},

],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
