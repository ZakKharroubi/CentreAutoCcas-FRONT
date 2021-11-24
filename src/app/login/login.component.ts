import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  loginForm!:FormGroup;
  username!: string;
  password!: string;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }


  ngOnInit(): void {

    this.loginForm = this.fb.group(
      {
        username: [, Validators.required],
        password: [, Validators.required]
      }
    )
  }



  submitForm(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        (data: any
        ) => {
          this.authService.setTokenInStorage(data.token);
          const tokenDecoded: any = jwt_decode(data.token);
          console.log(tokenDecoded);
          this.authService.setUsernameInStorage(tokenDecoded.username);
          this.router.navigate(['/profile']);
          window.location.replace('profile');
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

}
