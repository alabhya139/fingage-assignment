import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService {

  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot):boolean{
    if(localStorage.getItem('isLogged')===undefined || localStorage.getItem('isLogged')==="" || localStorage.getItem('isLogged')===null){
      this.router.navigate(['/login'])
      return false;
    }else {
      return true;
    }
  }
}
