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
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var OutletBasicInfoComponent = (function () {
    function OutletBasicInfoComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.outletBasicInfoFx = new core_1.EventEmitter();
        this.outletBasicInfoInput = {};
    }
    OutletBasicInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new forms_1.FormControl();
        this.zoom = 14;
        // load places autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log(place.address_components);
                    for (var i = 0; i < place.address_components.length; i++) {
                        for (var j = 0; j < place.address_components[i].types.length; j++) {
                            // get city
                            if (place.address_components[i].types[j] == 'administrative_area_level_2') {
                                _this.outletBasicInfoInput['city'] = place.address_components[i].long_name;
                            }
                            // get state
                            if (place.address_components[i].types[j] == 'administrative_area_level_1') {
                                _this.outletBasicInfoInput['state'] = place.address_components[i].long_name;
                            }
                            // get postal code
                            if (place.address_components[i].types[j] == 'postal_code') {
                                _this.outletBasicInfoInput['pincode'] = place.address_components[i].long_name;
                            }
                        }
                    }
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 14;
                    // user input 
                    _this.outletBasicInfoInput['latlon'] = _this.latitude + ',' + _this.longitude;
                    _this.outletBasicInfoInput['latitude'] = _this.latitude;
                    _this.outletBasicInfoInput['longitude'] = _this.longitude;
                });
            });
        });
    };
    // current position 
    OutletBasicInfoComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                // this.zoom = 4;
                // user input
                _this.outletBasicInfoInput['latlon'] = _this.latitude + ',' + _this.longitude;
                _this.outletBasicInfoInput['latitude'] = _this.latitude;
                _this.outletBasicInfoInput['longitude'] = _this.longitude;
            });
        }
    };
    OutletBasicInfoComponent.prototype.imageUploaded = function (eve) {
        var checktarget = eve.src;
        var checkUrl = checktarget.substring(checktarget.indexOf(",") + 1);
        this.outletBasicInfoInput['logoLink'] = checkUrl;
    };
    OutletBasicInfoComponent.prototype.submitFrm = function (obj) {
        obj['_type'] = "submitFrm";
        this.outletBasicInfoFx.emit(obj);
    };
    OutletBasicInfoComponent.prototype.edit = function () {
        this.outletBasicInfoFx.emit({ _type: 'editFrm' });
    };
    return OutletBasicInfoComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OutletBasicInfoComponent.prototype, "outletBasicInfoFx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletBasicInfoComponent.prototype, "isOutletBasicFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletBasicInfoComponent.prototype, "isOutletEditBtn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletBasicInfoComponent.prototype, "outletBasicFormOnverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OutletBasicInfoComponent.prototype, "btnText", void 0);
__decorate([
    core_1.ViewChild("search"),
    __metadata("design:type", core_1.ElementRef)
], OutletBasicInfoComponent.prototype, "searchElementRef", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OutletBasicInfoComponent.prototype, "outletBasicInfoInput", void 0);
OutletBasicInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet-basic-info',
        templateUrl: './outlet-basic-info.component.html',
        styleUrls: ['./outlet-basic-info.component.css']
    }),
    __metadata("design:paramtypes", [core_2.MapsAPILoader,
        core_1.NgZone])
], OutletBasicInfoComponent);
exports.OutletBasicInfoComponent = OutletBasicInfoComponent;
//# sourceMappingURL=outlet-basic-info.component.js.map