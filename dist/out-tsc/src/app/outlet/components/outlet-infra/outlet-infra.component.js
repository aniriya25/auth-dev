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
var OutletInfraComponent = (function () {
    function OutletInfraComponent() {
        this.outletInfraFx = new core_1.EventEmitter();
        this.infraInput = {};
    }
    OutletInfraComponent.prototype.ngOnInit = function () {
    };
    OutletInfraComponent.prototype.outletInfraFrm = function () {
        this.infraInput['_type'] = 'submitFrm';
        this.outletInfraFx.emit(this.infraInput);
    };
    OutletInfraComponent.prototype.edit = function () {
        this.infraInput['_type'] = 'editFrm';
        this.outletInfraFx.emit(this.infraInput);
    };
    return OutletInfraComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OutletInfraComponent.prototype, "outletInfraFx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletInfraComponent.prototype, "isInfraOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletInfraComponent.prototype, "isInfraFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletInfraComponent.prototype, "isInfraBtn", void 0);
OutletInfraComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet-infra',
        templateUrl: './outlet-infra.component.html',
        styleUrls: ['./outlet-infra.component.css']
    }),
    __metadata("design:paramtypes", [])
], OutletInfraComponent);
exports.OutletInfraComponent = OutletInfraComponent;
//# sourceMappingURL=outlet-infra.component.js.map