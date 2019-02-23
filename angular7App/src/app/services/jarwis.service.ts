import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';


@Injectable()
export class JarwisService {
  private baseUrl = environment.BACKEND_URL + '/api';

  constructor(private http: HttpClient, private _http: Http) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

  createEvent(data) {
    return this.http.post(`${this.baseUrl}/createEvent`, data,
      { responseType: 'text' as 'json' })
  }
  geteventsList() {
    return this.http.get(`${this.baseUrl}/geteventsList`)
      .pipe(map((response) => response));
  }
  getusersList() {
    return this.http.get(`${this.baseUrl}/getusers`)
      .pipe(map((response) => response));
  }

  updateUser(data) {
    return this.http.post(`${this.baseUrl}/updateuser`, data).pipe(map((response) => response));
  }

  getadminusersList() {
    return this.http.get(`${this.baseUrl}/getadminusers`)
      .pipe(map((response) => response));

  }
  deleteuser(data) {
    debugger;
    return this.http.post(`${this.baseUrl}/deleteuser`, data).pipe(map((response) => response));

  }

}
