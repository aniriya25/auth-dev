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
var OpdComponent = (function () {
    function OpdComponent() {
        this.myFormObj = {};
        this.outletOPDContactFx = new core_1.EventEmitter();
    }
    OpdComponent.prototype.ngOnInit = function () {
    };
    OpdComponent.prototype.submitFrm = function (obj) {
        this.outletOPDContactFx.emit(this.myFormObj);
    };
    return OpdComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OpdComponent.prototype, "outletOPDContactFx", void 0);
OpdComponent = __decorate([
    core_1.Component({
        selector: 'app-opd',
        templateUrl: './opd.component.html',
        styleUrls: ['./opd.component.css']
    }),
    __metadata("design:paramtypes", [])
], OpdComponent);
exports.OpdComponent = OpdComponent;
//# sourceMappingURL=opd.component.js.map