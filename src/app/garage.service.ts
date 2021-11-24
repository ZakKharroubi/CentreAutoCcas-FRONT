import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Garage} from "./model/garage.model";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getGaragesByUser():Observable<Garage[]>  {

        const headers = {'Authorization': "Bearer " + this.authService.getTokenInStorage()};
        return this.http.get<Garage[]>("http://localhost:8000/api/garage/user", {headers});

  }

  deleteGarage(){

  }
}
