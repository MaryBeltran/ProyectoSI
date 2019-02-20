import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocionesComponent } from './promociones/promociones.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RecomendadoComponent } from './recomendado/recomendado.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ListaproductosComponent } from './productos/listaproductos/listaproductos.component';
import { LoginComponent } from './login/login.component';
import { AjustesUsuarioComponent } from './Views/ajustes-usuario/ajustes-usuario.component';
import { AdminComponent } from './Views/admin/admin.component';
import { CrudproductosComponent } from './Views/crudproductos/crudproductos.component';
import { VentasComponent } from './Views/ventas/ventas.component';
import { ARecomendadosComponent } from './Views/a-recomendados/a-recomendados.component';
import { APromocionesComponent } from './Views/a-promociones/a-promociones.component';


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
{path: 'productos', children:[ 
      {path: 'producto',component: ProductoComponent},
      {path: 'listaproductos',component: ListaproductosComponent},
]},
{path: 'login',component: LoginComponent},
{path: 'ajustes-usuario', component: AjustesUsuarioComponent},
{path: 'a-promociones', component: APromocionesComponent},
{path: 'a-recomendados', component: ARecomendadosComponent},
{path: 'crudproductos', component: CrudproductosComponent},
{path: 'admin', component: AdminComponent},
{path: 'ventas', component: VentasComponent},

],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
