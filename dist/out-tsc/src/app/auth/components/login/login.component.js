"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var login_service_1 = require("./../../services/login/login.service");
var global_module_1 = require("./../../../global/global.module");
var angular2_jwt_1 = require("angular2-jwt");
var LoginComponent = (function () {
    function LoginComponent(snackBar, router, loginService, config) {
        this.snackBar = snackBar;
        this.router = router;
        this.loginService = loginService;
        this.config = config;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.login = {
            email: "admin@h3u.com",
            password: "admin"
        };
        this.loginProgress = false;
        this.loginError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.logout();
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.loginProgress = true;
        this.loginService.login(this.login.email, this.login.password)
            .subscribe(function (loginReponse) {
            _this.loginProgress = false;
            if (_this.validateLoginResponse(loginReponse)) {
                if (_this.checkForFirstTime(loginReponse.data.token)) {
                    console.log(JSON.parse(loginReponse.data.token));
                    _this.router.navigate(['/user/changepassword/' + loginReponse.data.token]);
                }
                else {
                    localStorage.setItem(_this.config.nerve_token_key, JSON.stringify({ token: loginReponse.data.token }));
                    _this.router.navigate(['/dashboard/home/dashboard']);
                }
            }
        }, function (err) {
            _this.loginProgress = false;
            _this.snackBar.open("Something went wrong, Please try again");
        });
    };
    LoginComponent.prototype.checkForFirstTime = function (token) {
        var decodedToken = this.jwtHelper.decodeToken(token);
        debugger;
        if (decodedToken && decodedToken.isTempPassword && decodedToken.isTempPassword == "True")
            return true;
        else
            return false;
        // console.log(this.jwtHelper.decodeToken(token));
        // console.log(this.jwtHelper.isTokenExpired(token));
        // console.log(this.jwtHelper.getTokenExpirationDate(token));
        // return true;
    };
    LoginComponent.prototype.validateLoginResponse = function (loginResponse) {
        if (loginResponse && loginResponse.data && loginResponse.data.token)
            return true;
        this.snackBar.open(loginResponse.error.message ? loginResponse.error.message : "Something Went Wrong!!", "", { duration: 5000 });
        return false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [login_service_1.LoginService]
    }),
    __param(3, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [material_1.MdSnackBar,
        router_1.Router,
        login_service_1.LoginService,
        global_module_1.AppConfig])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map