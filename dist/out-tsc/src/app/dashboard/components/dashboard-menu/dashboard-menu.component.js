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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./../../../auth/services/login/login.service");
var profile_service_1 = require("./../../../services/profile/profile.service");
var provider_service_1 = require("./../../../services/providers/provider.service");
var router_1 = require("@angular/router");
var DashboardMenuComponent = (function () {
    function DashboardMenuComponent(loginService, router, userProfile, providerService) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.userProfile = userProfile;
        this.providerService = providerService;
        this.profile = {};
        this.isOpened = true;
        this.isOpenSide = 'side';
        this.providerLength = 0;
        this.providerService.getAllProvider()
            .subscribe(function (data) {
            _this.providerLength = data.data.length;
            console.log(_this.providerLength);
        });
    }
    DashboardMenuComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
        if (window.innerWidth < 768) {
            this.isOpened = false;
            this.isOpenSide = 'over';
        }
        // this.checkuser();
    };
    // checkuser(){
    // this.loginService.login();
    // if(this.type=="p"){
    //   this.router.navigate(['/dashboard/providers/provider/{id}']);
    // }
    // if(this.type == "O")
    // {
    //    this.router.navigate(['/dashboard/outlet/outlet/{id}']);
    // }
    // }
    DashboardMenuComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userProfile.getPersonalInfo()
            .subscribe(function (data) {
            _this.profile = data.data;
            //console.log(data.data);
        });
    };
    DashboardMenuComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['/login']);
    };
    DashboardMenuComponent.prototype.add = function (page) {
        this.router.navigate([page]);
    };
    return DashboardMenuComponent;
}());
DashboardMenuComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard-menu',
        templateUrl: './dashboard-menu.component.html',
        styleUrls: ['./dashboard-menu.component.css'],
        providers: [login_service_1.LoginService, profile_service_1.ProfileService, provider_service_1.ProviderService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router,
        profile_service_1.ProfileService,
        provider_service_1.ProviderService])
], DashboardMenuComponent);
exports.DashboardMenuComponent = DashboardMenuComponent;
//# sourceMappingURL=dashboard-menu.component.js.map