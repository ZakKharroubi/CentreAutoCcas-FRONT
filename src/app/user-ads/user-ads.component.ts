import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {Car} from "../model/car.model";
import {GarageService} from "../garage.service";

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.css']
})
export class UserAdsComponent implements OnInit {

  cars:any;
  garages: any;
  constructor(private carService: CarService, private garageService: GarageService) { }

  ngOnInit(): void {

    this.garageService.getGaragesByUser().subscribe(data => {
      this.garages = data;
    });

  }

}
