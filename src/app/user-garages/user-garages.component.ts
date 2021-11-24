import { Component, OnInit } from '@angular/core';
import {GarageService} from "../garage.service";
import {AuthService} from "../auth.service";
import {Garage} from "../model/garage.model";

@Component({
  selector: 'app-user-garages',
  templateUrl: './user-garages.component.html',
  styleUrls: ['./user-garages.component.css']
})
export class UserGaragesComponent implements OnInit {

  garages:Garage[] = [];
  constructor(private garageService: GarageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.garageService.getGaragesByUser().subscribe(data => {
      this.garages = data;
    })
  }

}
