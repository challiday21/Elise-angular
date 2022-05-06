import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:3000';
  }

  public registerUser(username: string, password: string){
    const body = {
      "email": username,
      "password": password
    };
    return this.http.post(`${this.urlApi}/register`, body );
  }

  public logUser(username: string, password: string){
    const body = {
      "email": username,
      "password": password
    };
    return this.http.post(`${this.urlApi}/login`, body );
  }

}