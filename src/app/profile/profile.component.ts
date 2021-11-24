import { Component, OnInit } from '@angular/core';
import {faCogs, faWarehouse, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faCogs = faCogs;
  faWarehouse = faWarehouse;
  faFileInvoiceDollar = faFileInvoiceDollar;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  console.log("Id user actuel : " + this.authService.getTokenInStorage());
  }

}
