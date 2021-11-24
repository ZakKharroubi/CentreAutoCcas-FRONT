import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInBool!:boolean;
  constructor(private http: HttpClient) { }

  login(loginData: any){
    this.isLoggedInBool = true;

    return this.http.post<any[]>("http://localhost:8000/api/login_check", loginData );
  }

 isLoggedIn(){
    if(!!sessionStorage.getItem('token')){
      this.isLoggedInBool = true;
    } else {
      this.isLoggedInBool = false;
    }
    return this.isLoggedInBool;
 }


  setTokenInStorage(data: any){
    sessionStorage.setItem("token", data);
  }


  getTokenInStorage(): any{
    return sessionStorage.getItem("token");
  }

  setUsernameInStorage(data: any){
   sessionStorage.setItem("username", data);
  }
  getUsernameInStorage(){
    return sessionStorage.getItem("username");
  }

  logout(){
    sessionStorage.clear();
    window.location.replace('login');
  }

}
