import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStoreService } from './user-store.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post('api/login', { email: email, password: password })
      .pipe(
        map((resp: any) => {
          this.userStore.token = resp.token;
          return resp;
        })
      );
  }
}
