import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarListComponent} from "./car-list/car-list.component";
import {CarDetailsComponent} from "./car-details/car-details.component";
import {CarAddComponent} from "./car-add/car-add.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {AccountManagementComponent} from "./account-management/account-management.component";
import {AppComponent} from "./app.component";
import {UserGaragesComponent} from "./user-garages/user-garages.component";
import {UserAdsComponent} from "./user-ads/user-ads.component";

const routes: Routes = [
  {path: 'cars', component: CarListComponent},
  {path: 'cars/add', component: CarAddComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile/account', component: AccountManagementComponent},
  {path: 'app', component: AppComponent},
  {path: 'profile/garages', component: UserGaragesComponent},
  {path: 'profile/ads', component: UserAdsComponent},
  {path: '', redirectTo: 'cars', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
