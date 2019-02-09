import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGaurdService {

  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot):boolean{
    if(localStorage.getItem('isLogged')===undefined || localStorage.getItem('isLogged')==="" || localStorage.getItem('isLogged')===null){
      return true;
    }else {
      this.router.navigate(['/dashboard'])
      return false;
    }
  }
}
