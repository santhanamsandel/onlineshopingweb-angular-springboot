import { Injectable } from '@angular/core';
import { Login } from './login';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public LoginService(login:Login):Observable<any>
  {
    return this.http.post<any>("http://localhost:8088/login",login)
  }
}
