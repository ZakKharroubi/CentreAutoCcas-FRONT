import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './model/car.model';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "./auth.service";
import {Garage} from "./model/garage.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _cars = [];

  private fuels = [];

  private models = [];

  private brands = [];


  constructor(private http: HttpClient, private authService: AuthService) {}

public get cars() {
    return this._cars;
  }

    findAllCars():Observable<Car[]>{
     return this.http.get<Car[]>('http://localhost:8000/api/ad')
   }

   findAllBrands(){
     return this.http.get<any>("http://localhost:8000/api/brand");
   }

   findAllGarageByUser(id: number){
    return this.http.get<any>('http://localhost:8000/api/garage/user' + id);
   }

   findAllModelsByBrand(id: number): Observable<any>{
     return this.http.get<any>('http://localhost:8000/api/model/' + id);
   }

   findAllFuels(){
    return this.http.get<any>("http://localhost:8000/api/fuel");
   }
   addNewCar(car: any): Observable<any>{
   return this.http.post<any>("http://localhost:8000/api/ad/create", car)
 }
 findById(id: number){
  return this.http.get<Car>(`http://localhost:8000/api/ad/show/${id}`)
 }

 getCarsByUser(): Observable<Car[]>{
   const headers = {'Authorization': "Bearer " + this.authService.getTokenInStorage()};
   return this.http.get<Car[]>("http://localhost:8000/api/ad/user", {headers});

 }

 getCarsByGarage(id: number): Observable<Car[]>{
    return this.http.get<Car[]>("http://localhost:8000/api/ad/garage/" +id);
 }
}
