import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocionesComponent } from './promociones/promociones.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RecomendadoComponent } from './recomendado/recomendado.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ListaproductosComponent } from './productos/listaproductos/listaproductos.component';
import { LoginComponent } from './login/login.component';
import { AjustesUsuarioComponent } from './Views/ajustes-usuario/ajustes-usuario.component';
import { AdminComponent } from './Views/admin/admin.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaDeseosComponent } from './lista-deseos/lista-deseos.component';
import { CrudproductosComponent } from './Views/crudproductos/crudproductos.component';
import { VentasComponent } from './Views/ventas/ventas.component';
import { ARecomendadosComponent } from './Views/a-recomendados/a-recomendados.component';
import { APromocionesComponent } from './Views/a-promociones/a-promociones.component';
import { AuthGuard } from '../app/auth.guard';
import { AcercaComponent } from './acerca/acerca.component';
import { AdminGuard } from '../app/admin.guard';
import { EditarComponent } from './Views/editar/editar.component';

const routes: Routes = [

{
path:'',
children:[
{path: '',redirectTo:'/login',pathMatch: 'full'},
{path: 'Acerca', component: AcercaComponent},
{path: 'home',component: HomeComponent,  canActivate: [AuthGuard]},
{path: 'promociones',component: PromocionesComponent,  canActivate: [AuthGuard]},
{path: 'ajustes',component: AjustesComponent,  canActivate: [AuthGuard]},
{path: 'carrito',component: CarritoComponent,  canActivate: [AuthGuard]},
{path: 'listadeseos',component: ListaDeseosComponent,  canActivate: [AuthGuard]},
{path: 'recomendado',component: RecomendadoComponent,  canActivate: [AuthGuard]},
{path: 'productos', children:[ 
      {path: 'producto/:id',component: ProductoComponent,  canActivate: [AuthGuard]},
      {path: 'listaproductos',component: ListaproductosComponent,  canActivate: [AuthGuard]},
]},
{path: 'login',component: LoginComponent},
{path: 'registro',component: RegistroComponent},

{path: 'a-promociones', component: APromocionesComponent,  canActivate: [AuthGuard]},
{path: 'a-recomendados', component: ARecomendadosComponent,  canActivate: [AuthGuard]},
{path: 'views', children:[ 
  {path: 'ajustesusuario', component: AjustesUsuarioComponent,  canActivate: [AuthGuard]},
  {path: 'crudproductos', component: CrudproductosComponent,  canActivate: [AuthGuard]},
  {path: 'editar/:id',component: EditarComponent,  canActivate: [AuthGuard]},
]},
{path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
{path: 'ventas', component: VentasComponent,  canActivate: [AuthGuard]},

],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
