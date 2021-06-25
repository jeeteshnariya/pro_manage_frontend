import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,
    private userStore:UserStoreService){}

  canActivate(): boolean{
    console.log('AuthGuard#canActivate called');
    if(this.userStore.isLoggenIn())
    {
      return true;
    }
    console.log('AuthGuard#canActivate not authorised to access page');
    this.router.navigate(['login']);
    return false;
  }
  
}
