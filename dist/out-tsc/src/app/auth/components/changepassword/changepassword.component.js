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
var router_1 = require("@angular/router");
var angular2_jwt_1 = require("angular2-jwt");
var changepassword_service_1 = require("./../../../services/changepassword/changepassword.service");
var material_1 = require("@angular/material");
var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(snackbar, route, router, changepasswordService) {
        this.snackbar = snackbar;
        this.route = route;
        this.router = router;
        this.changepasswordService = changepasswordService;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.changePasswd = {};
        this.notMatch = false;
        this.updating = false;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.token = this.route.snapshot.params['token'];
        try {
            var jwtToken = this.jwtHelper.decodeToken(this.token);
            if (!jwtToken.userId)
                this.router.navigate(['/login']);
            this.userid = jwtToken.userId;
        }
        catch (e) {
            this.router.navigate(["/login"]);
        }
    };
    ChangepasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.updating = true;
        console.log(this.changePasswd);
        var requestData = {};
        requestData.oldpassword = this.changePasswd.oldPassword;
        requestData.newPassword = this.changePasswd.newPassword;
        this.changepasswordService.updateChangePassword(requestData, this.token).subscribe(function (data) {
            _this.updating = false;
            console.log(data);
            if (data.data && data.data.code == 401)
                _this.snackbar.open(data.data.message);
        });
    };
    return ChangepasswordComponent;
}());
ChangepasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-changepassword',
        templateUrl: './changepassword.component.html',
        styleUrls: ['./changepassword.component.css'],
        providers: [changepassword_service_1.ChangepasswordService]
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar,
        router_1.ActivatedRoute,
        router_1.Router,
        changepassword_service_1.ChangepasswordService])
], ChangepasswordComponent);
exports.ChangepasswordComponent = ChangepasswordComponent;
//# sourceMappingURL=changepassword.component.js.map