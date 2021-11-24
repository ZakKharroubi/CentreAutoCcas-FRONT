import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GarageService} from "../garage.service";
import {Garage} from "../model/garage.model";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  brands = [];
  brand!: any;
  fuels = [];
  garages!: any;
  models = [];
  addAdForm!: FormGroup;

  formSubmitted = false;
  constructor(private carService: CarService, private fb: FormBuilder, private router: Router, private garageService: GarageService) { }



  onChange():any{
    this.carService.findAllModelsByBrand(this.brand).subscribe(model => this.models = model);
  }


  ngOnInit(): void {
    this.carService.findAllBrands().subscribe(data => {
      this.brands = data;
    });

    this.carService.findAllFuels().subscribe(data => {
      this.fuels = data;
    });

    this.garageService.getGaragesByUser().subscribe(data => {
      this.garages = data;
    })



    this.addAdForm = this.fb.group({
      title: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      fuel: ['', Validators.required],
      kilometers: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', Validators.required],
      garage: ['', Validators.required]
    });

  }

  addAd(){
    this.formSubmitted = true;
    console.log(this.addAdForm.value)
    if (this.addAdForm.valid){
      this.carService.addNewCar(this.addAdForm.value).subscribe(car => {
        this.router.navigate(['/cars']);
      })
    }
  }

}
