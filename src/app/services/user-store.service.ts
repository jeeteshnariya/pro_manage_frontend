import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private _token : string = null;

  constructor() { }

  set token(token : string){
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggenIn(){
    return this._token != null;
  }
}
