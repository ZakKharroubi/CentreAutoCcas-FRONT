import {EventEmitter, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarAddComponent } from './car-add/car-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { UserGaragesComponent } from './user-garages/user-garages.component';
import { UserAdsComponent } from './user-ads/user-ads.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CarListComponent,
    CarComponent,
    CarDetailsComponent,
    CarAddComponent,
    ProfileComponent,
    LoginComponent,
    MenuComponent,
    AccountManagementComponent,
    UserGaragesComponent,
    UserAdsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgxSliderModule,
        HttpClientModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
