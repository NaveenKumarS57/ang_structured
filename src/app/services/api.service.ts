import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Database, Login_Det, Signup_Det } from '../angular-material.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  Log_In(data: Login_Det): Observable<any>{
    return this.http.post(`${baseUrl}users/login`,data);
  }
  Sign_Up(data: Signup_Det): Observable<any>{
    return this.http.post(`${baseUrl}users/signup`,data);
  }
  LoggedIn(){
    return !!localStorage.getItem('token')
  }
  GetToken(){
    return localStorage.getItem('token')
  }
  getData(): Observable<any>{
    return this.http.get(`${baseUrl}users`)
  }
  UpdateData(data: Signup_Det): Observable<any>{
    return this.http.post(`${baseUrl}users/signup`,data);
  }
  DeleteData(data: any):Observable<any>{
    return this.http.delete(`${baseUrl}users`,data);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
