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
var OutletMousComponent = (function () {
    function OutletMousComponent(cdf) {
        this.cdf = cdf;
        this.files = [];
        this.temp = [];
        this.mouseFx = new core_1.EventEmitter();
    }
    OutletMousComponent.prototype.ngOnInit = function () {
    };
    OutletMousComponent.prototype.dropped = function (eve) {
        var _this = this;
        this.files = eve.files;
        console.log(this.files[0].fileEntry.file);
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            file.fileEntry.file(function (info) {
                //if(info.type == 'image/png') {
                _this.temp.push({ name: info.name, type: info.type });
                _this.cdf.detectChanges();
                return false;
                //}
                //alert("sorry!");
                //return false;
            });
        }
        console.log(this.temp.indexOf);
    };
    //public fileOver(event){}
    //public fileLeave(event){}
    OutletMousComponent.prototype.removeItem = function (indx) {
        console.log(indx);
        console.log(this.temp);
        var x = Number(indx);
        this.temp.splice(x, 1);
        this.cdf.detectChanges();
        console.log(this.temp);
    };
    OutletMousComponent.prototype.submitFrm = function (files) {
        this.mouseFx.emit(this.temp);
    };
    return OutletMousComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletMousComponent.prototype, "mouseSec", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OutletMousComponent.prototype, "mouseFx", void 0);
OutletMousComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet-mous',
        templateUrl: './outlet-mous.component.html',
        styleUrls: ['./outlet-mous.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], OutletMousComponent);
exports.OutletMousComponent = OutletMousComponent;
//# sourceMappingURL=outlet-mous.component.js.map