import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

    // this.authService.isLoggedIn().subscribe((data: any) => {
    // console.log("ici "+ data)
    // this.isLoggedIn = data;
    // console.log("Résultat de la souscription après affectation de variable " + this.isLoggedIn);

  // });
}

isLoggedIn:any = this.authService.isLoggedIn();
  ngOnInit(): void {
    console.log(this.isLoggedIn);
  }


  logout(){
    this.authService.logout();
  }
}
