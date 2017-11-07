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
var ProvidercontactComponent = (function () {
    function ProvidercontactComponent() {
        this.signatoryNcontactFx = new core_1.EventEmitter();
    }
    ProvidercontactComponent.prototype.ngOnInit = function () {
        this.tabOne = {
            position: 'right',
            barBackground: '#000000',
            gridBackground: 'blue',
            gridWidth: '0',
            barWidth: '6',
            barOpacity: '0.5'
        };
        this.tabTwo = {
            position: 'right',
            barBackground: '#000000',
            gridBackground: 'blue',
            gridWidth: '0',
            barWidth: '6',
            barOpacity: '0.5'
        };
    };
    // Signatory form submission
    ProvidercontactComponent.prototype.SubmitSignatoryFrm = function (user) {
        user['type'] = "signatory";
        this.signatoryNcontactFx.emit(user);
    };
    // Contact form submissino
    ProvidercontactComponent.prototype.submitContactFrm = function (user) {
        user['type'] = "contact";
        this.signatoryNcontactFx.emit(user);
    };
    // edit form
    ProvidercontactComponent.prototype.editFrm = function (_type) {
        if (_type == "signatory") {
            this.signatoryInput['type'] = "notSignatory";
            this.signatoryNcontactFx.emit(this.signatoryInput);
            return false;
        }
        if (_type == "contact") {
            this.contactInput['type'] = "notContact";
            this.signatoryNcontactFx.emit(this.contactInput);
            return false;
        }
    };
    // add record
    ProvidercontactComponent.prototype.addRec = function (typeStr) {
        if (typeStr == 'signatory') {
            this.signatoryInput.push({ name: '', designation: '', email: '', mobile: '', landline: '' });
        }
        if (typeStr == 'contact') {
            this.contactInput.push({ name: '', designation: '', email: '', mobile: '', landline: '' });
        }
    };
    return ProvidercontactComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "isSignatoryFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "isContactFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "isSignatoryButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "isContactButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "isSginatoryFormOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "isContactFormOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProvidercontactComponent.prototype, "contactInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProvidercontactComponent.prototype, "signatoryInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProvidercontactComponent.prototype, "tabIndx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProvidercontactComponent.prototype, "signatoryNcontactFx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "signatoryProgress", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProvidercontactComponent.prototype, "contactProgress", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProvidercontactComponent.prototype, "signatoryBtnText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProvidercontactComponent.prototype, "contactBtnText", void 0);
ProvidercontactComponent = __decorate([
    core_1.Component({
        selector: 'app-providercontact',
        templateUrl: './providercontact.component.html',
        styleUrls: ['./providercontact.component.css']
    }),
    __metadata("design:paramtypes", [])
], ProvidercontactComponent);
exports.ProvidercontactComponent = ProvidercontactComponent;
//# sourceMappingURL=providercontact.component.js.map