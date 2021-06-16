import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Profile } from 'src/app/model/profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  public table = 'profile';
  public url = environment.url + this.table;

  //get all profile user data
  read(): any {
    return this.http.get<any>(this.url);
  }

  create(data) {
    return this.http.post<any>(this.url, data);
  }

  update(data, id) {
    return this.http.put<any>(this.url + '/' + id, data);
  }
  
  delete(id) {
    return this.http.delete<any>(this.url + '/' + id);
  }
}
