import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  brands = [];
  models = [];
  brand!: any;
  searchForm!: FormGroup;



  // Slider prix
   value: number = 0;
  highValue: number = 20000;
  options: Options = {
    floor: 0,
    ceil: 20000,
    step: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "Prix min : " + value + "€";
        case LabelType.High:
          return "Prix max : " + value + "€";
        default:
          return value + "€"
      }

    }}
    //Slider Année

    value1: number = 1950;
    highValue1: number = 2020;
    options1: Options = {
      floor: 1950,
      ceil: 2021,
      step: 1
    }

    // Slider Kms

    value2: number = 0;
    highValue2: number = 200000;
    options2: Options = {
      floor: 0,
      ceil: 200000,
      step: 5000,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          default :
            return value + " Km"
        }
      }
    }

  constructor(private carService: CarService, private fb: FormBuilder) {

    }

    // Quand la marque a été choisie, récupérer les modèles correspondants
    brandIsSelected(){
      this.carService.findAllModelsByBrand(this.brand).subscribe(models => {
        this.models = models;
        console.log('Les modèles récupérés : ' + this.models);
      })
    }

  ngOnInit(): void {

    this.carService.findAllBrands().subscribe(data => {
      this.brands = data;
    });


      this.searchForm = this.fb.group({
        brands: [''],
        models: [''],
        fuels: [''],
        price: [''],
        year: [''],
        kms: ['']
      })
    }
  }


