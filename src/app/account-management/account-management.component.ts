import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {User} from "../model/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  user!: User;
  formSubmitted = false;
  editUserForm!: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  getUser():any {
    this.userService.getOne().subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
      this.editUserForm = this.formBuilder.group({
        firstName: new FormControl(this.user.firstName),
        lastName: new FormControl(this.user.lastName),
        email: new FormControl(this.user.email),
        phoneNumber: new FormControl( this.user.phoneNumber),
        siret: new FormControl(this.user.siret)
      })
    });
  }
  editUser(): any{
    this.userService.editUser(this.user.id, this.editUserForm.value).subscribe((data: any) =>this.router.navigate(['/profile']))
  }

  ngOnInit(): void {
    this.getUser();

  }

}
