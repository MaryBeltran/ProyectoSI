import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocionesComponent } from './promociones/promociones.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

{
path:'',
children:[
{path: '',redirectTo:'/home',pathMatch: 'full'},
{path: 'home',component: HomeComponent},
{path: 'promociones',component: PromocionesComponent},

],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
