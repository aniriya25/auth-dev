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
var moment = require("moment");
var ProviderbasicinfoComponent = (function () {
    function ProviderbasicinfoComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.isReadonly = true;
        this.basicInfoFx = new core_1.EventEmitter();
        this.editFirm = new core_1.EventEmitter();
    }
    ProviderbasicinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editFirm.emit(false);
        moment().format('DD/MMM/YYYY');
        this.zoom = 4;
        // user input
        this.basicInfoInput['latlon'] = this.latitude + ',' + this.longitude;
        //create search FormControl
        this.searchControl = new forms_1.FormControl();
        //set current position
        this.setCurrentPosition();
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
                                _this.basicInfoInput['city'] = place.address_components[i].long_name;
                            }
                            // get state
                            if (place.address_components[i].types[j] == 'administrative_area_level_1') {
                                _this.basicInfoInput['state'] = place.address_components[i].long_name;
                            }
                            // get postal code
                            if (place.address_components[i].types[j] == 'postal_code') {
                                _this.basicInfoInput['pincode'] = place.address_components[i].long_name;
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
                    _this.zoom = 4;
                    // user input 
                    _this.basicInfoInput['latlon'] = _this.latitude + ',' + _this.longitude;
                });
            });
        });
    };
    // current position 
    ProviderbasicinfoComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 4;
                // user input
                _this.basicInfoInput['latlon'] = _this.latitude + ',' + _this.longitude;
            });
        }
    };
    // submit form 
    ProviderbasicinfoComponent.prototype.submitBasicFrm = function (user) {
        user['latitude'] = this.latitude;
        user['longitude'] = this.longitude;
        user['type'] = false;
        this.basicInfoFx.emit(user);
    };
    //edit form 
    ProviderbasicinfoComponent.prototype.edtFrm = function (user) {
        user['type'] = true;
        this.basicInfoFx.emit(user);
    };
    ProviderbasicinfoComponent.prototype.imageUploaded = function (eve) {
        console.log(eve);
        var checktarget = eve.src;
        var checkUrl = checktarget.substring(checktarget.indexOf(",") + 1);
        this.basicInfoInput['isPix'] = true;
        this.basicInfoInput['logoLink'] = checkUrl;
        this.profilePix = eve.src;
        //console.log(this.profilePix);
    };
    ProviderbasicinfoComponent.prototype.removeImg = function () {
        this.profilePix = '';
        this.basicInfoInput['isPix'] = true;
        this.basicInfoInput['logoLink'] = this.profilePix;
    };
    return ProviderbasicinfoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderbasicinfoComponent.prototype, "isBasicInfoActiveForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderbasicinfoComponent.prototype, "isBasicInfoFormoOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderbasicinfoComponent.prototype, "isBasicButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderbasicinfoComponent.prototype, "isBasicInfoFieldset", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProviderbasicinfoComponent.prototype, "basicInfoFx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProviderbasicinfoComponent.prototype, "editFirm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProviderbasicinfoComponent.prototype, "basicInfoProgress", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProviderbasicinfoComponent.prototype, "basicInfoBtnText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProviderbasicinfoComponent.prototype, "basicInfoInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProviderbasicinfoComponent.prototype, "providerTypes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProviderbasicinfoComponent.prototype, "latitude", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProviderbasicinfoComponent.prototype, "longitude", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProviderbasicinfoComponent.prototype, "profilePix", void 0);
__decorate([
    core_1.ViewChild("search"),
    __metadata("design:type", core_1.ElementRef)
], ProviderbasicinfoComponent.prototype, "searchElementRef", void 0);
ProviderbasicinfoComponent = __decorate([
    core_1.Component({
        selector: 'app-providerbasicinfo',
        templateUrl: './providerbasicinfo.component.html',
        styleUrls: ['./providerbasicinfo.component.css']
    }),
    __metadata("design:paramtypes", [core_2.MapsAPILoader,
        core_1.NgZone])
], ProviderbasicinfoComponent);
exports.ProviderbasicinfoComponent = ProviderbasicinfoComponent;
//# sourceMappingURL=providerbasicinfo.component.js.map