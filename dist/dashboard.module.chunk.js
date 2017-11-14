webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/components/dashboard-menu/dashboard-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-scrolling-content{\r\n    margin-top:30px;\r\n}\r\n.example-sidenav-fab-container {\r\n    margin-top: 50px;\r\n}\r\n.mat-sidenav-content {\r\n    margin-top: 20px;\r\n}\r\n.logo{    vertical-align: middle;\r\n    width: auto;height:60px;    margin: 5px 0px;}\r\nheader.headerSec {\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    z-index: 999;\r\n    min-height: 64px;\r\n    background: #e0e5ec; \r\n    position: absolute; \r\n    width: 100%;\r\n    left: 0; top: 0;\r\n    border-bottom: 1px solid #e0e5ec;\r\n}\r\n.mat-menu-content > span{\r\n    padding-left: 20px;\r\n}\r\nul.headerRightMenu {\r\n    list-style: none;\r\n    float: right;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\nul.headerRightMenu > li {\r\n    display: table-cell;\r\n    padding: 16px;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n}\r\nul.headerRightMenu > li:nth-child(2) {\r\n    background: #ced4dc;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    padding-right: 10px;\r\n    border-right: 1px solid #ddd;\r\n}\r\nul.headerRightMenu > li:last-child {\r\n    background: #ced4dc;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    padding-right: 10px;\r\n    border-right: 1px solid #ddd;\r\n}\r\nul.headerRightMenu > li  span.triggerMenu {\r\n    float: left;\r\n}\r\nul.headerRightMenu > li  span.triggerMenu > span {\r\n    /* font-weight: 400; */\r\n    text-transform: capitalize;\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n}\r\nul.headerRightMenu > li  span.triggerMenu .mat-icon {\r\n    vertical-align: bottom;\r\n}\r\n.material-icons{font-size:22px}\r\n/* ul.profileList {\r\n    list-style: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\nul.profileList li{\r\n    display: block;\r\n    padding: 10px;\r\n        margin: 0px;\r\n    letter-spacing: 1px;\r\n    border-bottom: 1px solid rgba(210, 210, 210, 0.69);\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n} */\r\n.mat-menu-item {\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    border: none;\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n    -webkit-tap-highlight-color: transparent;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: block;\r\n    line-height: 40px;\r\n    height: 40px;\r\n    padding: 0 30px 0 20px;\r\n    text-align: left;\r\n    text-decoration: none;\r\n    position: relative;\r\n    border-bottom: 1px solid #e8e8e8;\r\n    font-weight: 300;\r\n}\r\n.mat-menu-item:last-child{\r\n     border-bottom:none;\r\n}\r\n.mat-menu-item > img {\r\nmargin-right:10px;\r\n}\r\n/* .mat-menu-item > .mat-icon{\r\n    margin-right:10px;\r\n} */\r\n.mainIcon {font-size: 30px;}\r\n.mat-menu-item .mat-icon {\r\n    margin-right: 10px;\r\n    font-size: 22px;\r\n}\r\n/* side navbar */\r\na:link,\r\n\r\na:hover,\r\na:visited {\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\na:active{\r\n    background: #000;\r\n}\r\n.mat-sidenav {\r\n    background: #4b5668;\r\n}\r\n\r\n/* main navigation */\r\nul.nav {\r\n    display: block;\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\nul.nav > a {\r\n    display: block;\r\n    padding: 28px 22px;\r\n    border-bottom: 1px solid #a5a6a7;\r\n}\r\nul.nav a li{\r\n    color: white;\r\n    text-align: center;\r\n}\r\nul.nav a li p {\r\n    margin: 0px;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n}\r\nul.nav a li p:first-child {\r\n    margin-bottom: 10px;\r\n}\r\n\r\nul.nav a:hover,\r\nul.nav a:active,\r\nul.nav a:hover{\r\n    background: #000;\r\n    color: white;\r\n}\r\n/* /*ul.nav > li:hover,\r\nul.nav > li:hover > p,\r\nul.nav > li:hover > p a {\r\n    background: #000000;\r\n    cursor: pointer;\r\n    color: #fff;\r\n} */\r\nul.nav > a > li > span.badge{\r\n    background: #d83636;\r\n    position: absolute;\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    padding: 3px 7px;\r\n    font-family: \"Oswal\";\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    color: #fff;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    border-radius: 4px;\r\n    margin: 0px 0px 0px 35px;\r\n}\r\n/* ul.nav > li > p,\r\nul.nav > li > p a {\r\n    color: white;\r\n    margin: 0px;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n}\r\nul.nav > li > p:hover,\r\nul.nav > li > p a:hover,\r\nul.nav > li > p a:active {\r\n    color: #fff;\r\n    cursor: pointer;\r\n} \r\nul.nav > li > p:first-child {\r\n    margin-bottom: 15px;\r\n}*/\r\n@media (max-width: 767px) {\r\n    ul.headerRightMenu > li {padding: 11px;}\r\n    .logo{width: auto;height:50px;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/dashboard-menu/dashboard-menu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <header class=\"headerSec\">\r\n    <button md-icon-button (click)=\"sidenav.toggle()\">\r\n      <md-icon class=\"material-icons md-24\">menu</md-icon>\r\n    </button>￼\r\n    <img fxFlexAlign=\"center\" class=\"logo\" src=\"assets/images/H3U_Logo_201x132.png\" />\r\n    <ul class=\"headerRightMenu\" fxHide fxShow.sm fxShow.md fxShow.lg>\r\n      <li>\r\n         <span [mdMenuTriggerFor]=\"profileXs\" class=\"triggerMenu\"> \r\n           <md-icon>person</md-icon> <span>{{profile.firstName}} {{profile.lastName}}</span><md-icon>expand_more</md-icon>\r\n         </span>\r\n         <md-menu #profileXs=\"mdMenu\"  [overlapTrigger]=\"true\" yPosition=\"below\">\r\n          <button md-menu-item (click)=\"add('/dashboard/providers/provider/152')\"><md-icon>perm_identity</md-icon>Profile-P</button>\r\n          <button md-menu-item (click)=\"add('/dashboard/provider/1/outlet/2')\"><md-icon>perm_identity</md-icon>Profile-O</button>\r\n          <button md-menu-item (click)=\"logout()\"><md-icon>exit_to_app</md-icon> Log Out</button>\r\n        </md-menu>\r\n      </li>\r\n      <li>\r\n        <span>\r\n          <md-icon>settings</md-icon> <br><span>SETTING</span>\r\n        </span>\r\n      </li>\r\n      <li>\r\n        <span [mdMenuTriggerFor]=\"addMenuxs\" class=\"triggerMenu\">\r\n          <md-icon>add</md-icon> <br><span>ADD</span>\r\n        </span>\r\n        <md-menu #addMenuxs=\"mdMenu\" [overlapTrigger]=\"true\">\r\n          <button md-menu-item (click)=\"add('/dashboard/providers/provider')\"><img src=\"assets/images/Service-20.png\"> Add Provider</button>\r\n          <button md-menu-item (click)=\"add('/dashboard/provider/outlet')\"><md-icon>add</md-icon>Add Outlet</button>\r\n          <button md-menu-item><img src=\"assets/images/services.png\">Add Service</button>\r\n          <button md-menu-item ><img src=\"assets/images/industry-line_stethescope-20.png\">Add Doctor</button>\r\n        </md-menu>\r\n      </li>\r\n    </ul> \r\n    <ul class=\"headerRightMenu\" fxShow fxHide.md fxHide.sm fxHide.lg fxLayoutAlign=\"end end\">\r\n      <li>\r\n        <span [mdMenuTriggerFor]=\"profileLg\" class=\"triggerMenu\">\r\n           <md-icon>person</md-icon>\r\n         </span>\r\n         <md-menu #profileLg=\"mdMenu\" [overlapTrigger]=\"true\">\r\n           <span fxShow fxHide.md fxHide.sm fxHide.lg>{{profile.firstName | uppercase}} {{profile.lastName | uppercase}}</span>\r\n          <button md-menu-item data-thickness=\"bar\"><md-icon>perm_identity</md-icon> Profile</button>\r\n          <button md-menu-item (click)=\"logout()\"><md-icon>exit_to_app</md-icon> Log Out</button>\r\n        </md-menu>\r\n      </li>\r\n      <li><md-icon>settings</md-icon> <br>SETTING</li>\r\n      <li>\r\n        <span [mdMenuTriggerFor]=\"addMenuLg\" class=\"triggerMenu\">\r\n          <md-icon>add</md-icon> <br>ADD\r\n        </span>\r\n        <md-menu #addMenuLg=\"mdMenu\" [overlapTrigger]=\"true\">\r\n          <button md-menu-item><img src=\"assets/images/Service-20.png\"> Add Provider</button>\r\n          <button md-menu-item><md-icon>add</md-icon>Add Outlet</button>\r\n          <button md-menu-item><img src=\"assets/images/services.png\"> Add Service</button>\r\n          <button md-menu-item ><img src=\"assets/images/industry-line_stethescope-20.png\"> Add Doctor</button>\r\n        </md-menu>\r\n      </li>\r\n    </ul>\r\n  </header>\r\n<md-sidenav-container class=\"example-sidenav-fab-container\" fullscreen>\r\n \r\n  <md-sidenav #sidenav [mode]=\"isOpenSide\" [opened]=\"isOpened\">\r\n    <div class=\"example-scrolling-content\">\r\n        <ul class=\"nav\">\r\n          <a routerLink=\"home\" >\r\n            <li>\r\n              <p><md-icon class=\"mainIcon\">dashboard</md-icon></p>\r\n              <p>DASHBOARD</p>\r\n            </li>\r\n          </a>\r\n          \r\n          <a routerLink=\"/dashboard/invoices/invoices-list\">\r\n            <li>\r\n              <p><md-icon class=\"mainIcon\">receipt</md-icon></p>\r\n              <p>INVOICES</p>\r\n            </li>\r\n          </a>\r\n          <a routerLink=\"provider/1/outlets\">\r\n            <li>   \r\n              <p><md-icon class=\"mainIcon\">store</md-icon></p>\r\n              <p>OUTLETS</p>  \r\n            </li>\r\n          </a>\r\n          <a routerLink=\"/dashboard/transactions\">\r\n            <li>  \r\n                <p><md-icon class=\"mainIcon\">credit_card</md-icon></p>\r\n                <p>TRANSACTIONS</p>  \r\n            </li>\r\n          </a>\r\n          <a routerLink=\"training\">\r\n            <li> \r\n              <p><md-icon class=\"mainIcon\">assignment</md-icon></p>\r\n              <p>TRAINING</p>\r\n            </li>\r\n          </a>\r\n        </ul>\r\n    </div>\r\n  </md-sidenav>\r\n  \r\n  <div class=\"example-scrolling-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</md-sidenav-container>\r\n\r\n<!--<router-outlet></router-outlet>-->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/dashboard-menu/dashboard-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_login_login_service__ = __webpack_require__("../../../../../src/app/auth/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_providers_provider_service__ = __webpack_require__("../../../../../src/app/services/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardMenuComponent = /** @class */ (function () {
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
    DashboardMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-menu',
            template: __webpack_require__("../../../../../src/app/dashboard/components/dashboard-menu/dashboard-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/components/dashboard-menu/dashboard-menu.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_services_login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__services_providers_provider_service__["a" /* ProviderService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_services_login_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_providers_provider_service__["a" /* ProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_providers_provider_service__["a" /* ProviderService */]) === "function" && _d || Object])
    ], DashboardMenuComponent);
    return DashboardMenuComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=dashboard-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardrouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dashboard_menu_dashboard_menu_component__ = __webpack_require__("../../../../../src/app/dashboard/components/dashboard-menu/dashboard-menu.component.ts");


var dashboardRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_dashboard_menu_dashboard_menu_component__["a" /* DashboardMenuComponent */],
        children: [
            { path: 'profile', loadChildren: "./../profile/profile.module#ProfileModule" },
            { path: 'home', loadChildren: "./../home/home.module#HomeModule" },
            { path: 'outlet', loadChildren: "./../outlet/outlet.module#OutletModule" },
            { path: 'transactions', loadChildren: "./../transactions/transactions.module#TransactionsModule" },
            { path: 'providers', loadChildren: "./../providers/providers.module#ProvidersModule" },
            { path: 'provider', loadChildren: "./../outlet/outlet.module#OutletModule" },
            { path: 'invoices', loadChildren: "./../invoices/invoices.module#InvoicesModule" }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var dashboardrouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(dashboardRoutes);
//# sourceMappingURL=dashboard-routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_module__ = __webpack_require__("../../../../../src/app/global/global.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_menu_dashboard_menu_component__ = __webpack_require__("../../../../../src/app/dashboard/components/dashboard-menu/dashboard-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_routing__["a" /* dashboardrouting */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__global_global_module__["c" /* GlobalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_dashboard_menu_dashboard_menu_component__["a" /* DashboardMenuComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_dashboard_menu_dashboard_menu_component__["a" /* DashboardMenuComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map