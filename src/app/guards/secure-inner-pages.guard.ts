import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn) {
      window.alert("Ya has iniciado sesión, cierra tu actual sesion para ingresar otra cuenta.");
       this.router.navigate(['users'])
    }
    return true;
  }
}