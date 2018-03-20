import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../Additional/_servises/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../Additional/_servises/user.service";

@Component({
  moduleId: module.id,
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  regModel: any = {};
  model: any = {};
  loading = false;
  returnUrl: string;

  visibleThis: boolean;

  constructor(
    //private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  autorize() {
    this.loading = true;
    this.authenticationService.login(this.model.login, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);

        },
        error => {
          //this.alertService.error('Username or password is incorrect');
          this.loading = false;

        });
  }
  register(){
    this.userService.userRegistration(this.regModel.email, this.regModel.nickname, this.regModel.password, this.regModel.confirmPassword, '0')
      .subscribe(
        complete  => {
          this.visibleThis = false;
          alert("confirmed Email");
          location.reload();
        },
        err => {
          console.log("error")
          this.visibleThis = true;
        }
      )
  }
}
