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
var outlet_service_1 = require("./../../../services/outlet/outlet.service");
var OutletListComponent = (function () {
    function OutletListComponent(activatedRoute, _router, _outlet) {
        this.activatedRoute = activatedRoute;
        this._router = _router;
        this._outlet = _outlet;
        this.rows = [];
        this.temp = [];
    }
    OutletListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (Params) {
            _this.provderId = Params['pid'];
            //console.log(this.provderId); 
            if (!Params['pid'] || isNaN(Params['pid'])) {
                _this._router.navigate(['/dashboard/providers/provider']);
            }
        });
        this.fetchOutlet();
    };
    OutletListComponent.prototype.updateFilter = function (eve) {
        var val = eve.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // udpate rows
        this.rows = temp;
    };
    OutletListComponent.prototype.fetchOutlet = function () {
        var _this = this;
        //alert(this.provderId);
        this._outlet.getOutlets(this.provderId)
            .subscribe(function (data) {
            if (data.data) {
                _this.rows = data.data;
                _this.temp = _this.rows;
                return false;
            }
            if (data.error['code'] == 204) {
                _this.isButton = true;
            }
        }, function (Error) {
            alert("Something went wrong!");
        });
        //console.log(myOutlets);
    };
    return OutletListComponent;
}());
OutletListComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet-list',
        templateUrl: './outlet-list.component.html',
        styleUrls: ['./outlet-list.component.css'],
        providers: [outlet_service_1.OutletService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        outlet_service_1.OutletService])
], OutletListComponent);
exports.OutletListComponent = OutletListComponent;
//# sourceMappingURL=outlet-list.component.js.map