import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL= environment.api;
  constructor(private http: HttpClient) { }

  sendCredentials(email:string, password: string):void {

    const body = {
      email: email,
      password: password
    }

    this.http.post(`${this.URL}/`, body)
  }
}
