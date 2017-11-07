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
var OutletServicesComponent = (function () {
    function OutletServicesComponent() {
        this.ServiceInput = [];
        this.services = [];
        this.subServices = [];
        this.outletServiceFx = new core_1.EventEmitter();
    }
    OutletServicesComponent.prototype.ngOnInit = function () {
        this.services = [
            { id: 1, name: 'OPD', isChecked: true },
            { id: 2, name: 'Pharmacy', isChecked: false },
            { id: 3, name: 'Diagnostic', isChecked: true }
        ];
        for (var i = 0; i < this.services.length; i++) {
            if (this.services[i]['isChecked'] == true) {
                this.subServices.push(this.services[i]);
            }
        }
        this.formtypcasting();
    };
    OutletServicesComponent.prototype.updateService = function (eve) {
        this.ServiceInput['_type'] = 'submitFrm';
        this.outletServiceFx.emit(this.ServiceInput);
        if (eve['isChecked'] == true) {
            this.subServices.push(eve);
            console.log(this.subServices);
            this.formtypcasting();
        }
        if (eve['isChecked'] == false) {
            for (var i = 0; i < this.subServices.length; i++) {
                if (this.subServices[i]['id'] == eve['id']) {
                    this.subServices.splice(i, 1);
                    return false;
                }
            }
        }
    };
    OutletServicesComponent.prototype.formtypcasting = function () {
        for (var j = 0; j < this.subServices.length; j++) {
            console.log(this.subServices[j]);
            this.subServices[j]['name' + 'ab'] = {};
            console.log(this.subServices[j]['name' + 'ab']);
        }
    };
    OutletServicesComponent.prototype.editService = function () {
        this.ServiceInput['_type'] = 'editFrm';
        this.outletServiceFx.emit(this.ServiceInput);
    };
    OutletServicesComponent.prototype.subServiceFrm = function (user) {
        console.log(user);
    };
    return OutletServicesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletServicesComponent.prototype, "isServicesOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletServicesComponent.prototype, "isServicesBtn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletServicesComponent.prototype, "isServicesFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OutletServicesComponent.prototype, "ServiceInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OutletServicesComponent.prototype, "services", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OutletServicesComponent.prototype, "subServices", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OutletServicesComponent.prototype, "outletServiceFx", void 0);
OutletServicesComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet-services',
        templateUrl: './outlet-services.component.html',
        styleUrls: ['./outlet-services.component.css']
    }),
    __metadata("design:paramtypes", [])
], OutletServicesComponent);
exports.OutletServicesComponent = OutletServicesComponent;
//# sourceMappingURL=outlet-services.component.js.map