import { Injectable } from '@angular/core';
import {User} from "./model/user.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {

  }


  getOne():Observable<User>{
    const headers = { Authorization : 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.get<User>("http://localhost:8000/api/user/show", {headers});
  }

  editUser(id:number, user:any){
    const headers = { Authorization : 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.patch('http://localhost:8000/api/user/edit/' + id, user, {headers});
  }
}
