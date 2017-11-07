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
var rxjs_1 = require("rxjs");
var AddmemberbulkComponent = (function () {
    function AddmemberbulkComponent() {
        this.uploaderContent = new rxjs_1.BehaviorSubject('please drop file in');
        this.basicInfo = {};
        this.selectedCountry = { id: 0, name: 'India' };
        this.states = {};
        this.memberData = [
            ["First Name", "Middle Name", "Last Name", "DOB", "Gender", "Address", "Country", "State", "City", "Userid", "Password"],
            ["Ankit", "test", "Sethi", "28-11-1986", "Male", "test address", "india", "delhi", "delhi", "testuser", "testassword"],
            ["Mahtab", "testingmahtab", "Alam", "02-10-1944", "Male", "test address mahtab", "india", "bihar", "darbhanga", "testusermahtab", "testasswordmahtab"]
        ];
    }
    AddmemberbulkComponent.prototype.xlsxUploaded = function (result) {
        this.uploaderContent.next(JSON.stringify(result));
        console.log(result);
        this.memberData = result.payload[0].rowwise;
        console.log(this.memberData);
    };
    AddmemberbulkComponent.prototype.ngOnInit = function () {
    };
    AddmemberbulkComponent.prototype.renderHTMLfromMemberData = function () {
        console.log(this.memberData);
    };
    AddmemberbulkComponent.prototype.validateHeader = function () {
    };
    return AddmemberbulkComponent;
}());
AddmemberbulkComponent = __decorate([
    core_1.Component({
        selector: 'app-addmemberbulk',
        templateUrl: './addmemberbulk.component.html',
        styleUrls: ['./addmemberbulk.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], AddmemberbulkComponent);
exports.AddmemberbulkComponent = AddmemberbulkComponent;
//# sourceMappingURL=addmemberbulk.component.js.map