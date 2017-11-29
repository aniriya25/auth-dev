import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { LoginService } from "./../../services/login/login.service";
import { APP_CONFIG, AppConfig} from "./../../../global/global.module";
import { JwtHelper } from "angular2-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})

export class LoginComponent implements OnInit {
  jwtHelper: JwtHelper = new JwtHelper();
  login: any = {
    email:"admin@h3u.com",
    password:"admin"
  };
  loginProgress = false;
  loginError = "";
  constructor(
    public snackBar: MdSnackBar,
    private router: Router,
    private loginService: LoginService,
    @Inject(APP_CONFIG) private config: AppConfig 
    ){ }

  ngOnInit() {
    this.loginService.logout(); 
  }
  loginSubmit(){
      this.loginProgress = true;
      this.loginService.login(this.login.email,this.login.password)
      .subscribe(loginReponse => {
        this.loginProgress = false;
        if(this.validateLoginResponse(loginReponse)){          
          if(this.checkForFirstTime(loginReponse.data.token)){
           console.log(JSON.parse(loginReponse.data.token));           
            this.router.navigate(['/user/changepassword/'+loginReponse.data.token]);
          }else{
            localStorage.setItem(this.config.nerve_token_key, JSON.stringify({token: loginReponse.data.token }));
            this.router.navigate(['/dashboard/home/dashboard']);           
          }
        }
      },err => {
        this.loginProgress = false;
        this.snackBar.open("Something went wrong, Please try again")
      });
  }
  private checkForFirstTime(token){
        var decodedToken = this.jwtHelper.decodeToken(token);
        debugger;
        if(decodedToken && decodedToken.isTempPassword && decodedToken.isTempPassword=="True")
        return true;
        else
        return false;
        // console.log(this.jwtHelper.decodeToken(token));
        // console.log(this.jwtHelper.isTokenExpired(token));
        // console.log(this.jwtHelper.getTokenExpirationDate(token));
        // return true;
  }
  private validateLoginResponse(loginResponse):Boolean{
    if(loginResponse && loginResponse.data && loginResponse.data.token)
    return true;
    this.snackBar.open(loginResponse.error.message?loginResponse.error.message:"Something Went Wrong!!","",{duration:5000})
    return false;
  }
  

}
