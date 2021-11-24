import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../car.service";
import {Car} from "../model/car.model";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faTachometerAlt, faCoins, faGasPump } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  faCoins = faCoins;
  faGasPump = faGasPump;
  faCalendar = faCalendar;
  faTachometerAlt = faTachometerAlt;
  car!:Car
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) { }

  getYear(year: any): any{
    const result = new Date(year);
    return result.getFullYear();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || -1;
    this.carService.findById(+id).subscribe(c => {
      this.car = c
      this.car.year = this.getYear(this.car.year)
    });
  }

}
