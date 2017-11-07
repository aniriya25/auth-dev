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
var ProviderservicesComponent = (function () {
    function ProviderservicesComponent() {
        this.servicesFx = new core_1.EventEmitter();
    }
    ProviderservicesComponent.prototype.ngOnInit = function () { };
    // update services
    ProviderservicesComponent.prototype.updateService = function (val) {
        val['type'] = false;
        this.servicesFx.emit(val);
    };
    // edit form
    ProviderservicesComponent.prototype.editFrm = function (bol) {
        this.services['type'] = true;
        this.servicesFx.emit(this.services);
    };
    return ProviderservicesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProviderservicesComponent.prototype, "services", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderservicesComponent.prototype, "isServiceFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderservicesComponent.prototype, "isServiceFormOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderservicesComponent.prototype, "isServiceButton", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProviderservicesComponent.prototype, "servicesFx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderservicesComponent.prototype, "servicesProgress", void 0);
ProviderservicesComponent = __decorate([
    core_1.Component({
        selector: 'app-providerservices',
        templateUrl: './providerservices.component.html',
        styleUrls: ['./providerservices.component.css']
    }),
    __metadata("design:paramtypes", [])
], ProviderservicesComponent);
exports.ProviderservicesComponent = ProviderservicesComponent;
//# sourceMappingURL=providerservices.component.js.map