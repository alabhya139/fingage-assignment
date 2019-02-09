import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRouteGaurdService } from './login-route-gaurd.service';
import { RouteGaurdService } from './route-gaurd.service';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[LoginRouteGaurdService]},
  {path:'dashboard',component:DashboardComponent,canActivate:[RouteGaurdService]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'*',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginRouteGaurdService,RouteGaurdService]
})
export class AppRoutingModule { }
