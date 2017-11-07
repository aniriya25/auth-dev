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
var provider_service_1 = require("./../../../services/providers/provider.service");
var material_1 = require("@angular/material");
var OutletComponent = (function () {
    function OutletComponent(activatedRoute, _router, _outlet, snackBar, _ProviderService) {
        this.activatedRoute = activatedRoute;
        this._router = _router;
        this._outlet = _outlet;
        this.snackBar = snackBar;
        this._ProviderService = _ProviderService;
        this.providerName = true;
        this.outletBasicInfoInput = {};
        this.watchOutlet = {};
        this.outContactInput = [];
        this.infraInput = {};
        this.outletTypes = [];
        this.outletBankingInput = {};
        this.branches = [];
        this.mouTypes = [];
        this.annexures = [];
        this.outletMouInput = {};
        this.outletMouVersions = [];
        this.serviceContacts = [];
    }
    OutletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (Params) {
            console.log(Params['pid']);
            console.log(Params['outletId']);
            // if(Params['pid'] == undefined) {
            //   this._router.navigate(['/dashboard/providers/provider']);
            // }
            if ((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
                if (isNaN(Params['pid'])) {
                    _this._router.navigate(['/dashboard/providers/provider']);
                }
                _this.isOutletEditBtn = true;
                _this.btnText = "SUBMIT";
                _this.isContactFormOverlay = true;
                _this.isOutletContactBtn = true;
                _this.isInfraOverlay = true;
                _this.isInfraBtn = true;
                _this.isOutletBankingOverlay = true;
                _this.isOutletBankingBtn = true;
                _this.isServicesOverlay = true;
                _this.outletMouOverlay = true;
                _this.isOutletMouBtn = true;
                _this.mouVer = true;
                _this.getProviderById(Params['pid']);
            }
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
                if (isNaN(Params['pid']) || isNaN(Params['outletId'])) {
                    _this._router.navigate(['/dashboard/providers/provider']);
                }
                _this._pId = Params['pid'];
                _this._oId = Params['outletId'];
                _this.isOutletBasicFieldset = true;
                _this.btnText = "UPDATE";
                _this.isContactFieldset = true;
                _this.isInfraFieldset = true;
                _this.isOutletBankingFieldset = true;
                _this.isServicesFieldset = true;
                _this.isOPDFieldset = true;
                _this.isOutletFieldset = true;
                _this.mouVer = false;
                _this.getOutletList(_this._pId, _this._oId);
            }
        });
        // if(this.myString != true) 
        //   this._router.navigate(['/dashboard/providers/provider']);
        this.contactSubmitBtn = "SUBMIT";
        this.infraSubmitBtn = "SUBMIT";
        this.bankingSubmitBtn = "SUBMIT";
        this.getProviderType();
        this.moutType();
        this.getAnnexuresList();
        this.getMouVersions();
    };
    OutletComponent.prototype.outletBasicInfoFx = function (eve) {
        //console.log(this.outletBasicInfoInput);
        var _this = this;
        //console.log(eve);
        if (eve['_type'] == 'editFrm') {
            this.isOutletBasicFieldset = false;
            this.outletBasicFormOnverlay = false;
            this.isOutletEditBtn = true;
            return false;
        }
        this.outletBasicInfoInput['id'] = '';
        this.watchOutlet['name'] = eve['name'];
        this.watchOutlet['address'] = eve['address'];
        this.watchOutlet['accreditation'] = eve['accreditation'];
        this.watchOutlet['regdName'] = eve['regdName'];
        this.watchOutlet['webLink'] = eve['webLink'];
        this.watchOutlet['latitude'] = eve['latitude'];
        this.watchOutlet['longitude'] = eve['longitude'];
        this.watchOutlet['state'] = eve['state'];
        this.watchOutlet['city'] = eve['city'];
        this.watchOutlet['pincode'] = eve['pincode'];
        this.watchOutlet['logoLink'] = eve['logoLink'];
        this.activatedRoute.params.subscribe(function (Params) {
            if ((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
                //console.log("Submit");
                if (eve['_type'] = 'submitFrm') {
                    _this._outlet.createBasicInfo(_this.watchOutlet, Params['pid'])
                        .subscribe(function (data) {
                        if (data['message']) {
                            _this.snackBar.open("Created successfully", "", { duration: 5000 });
                            _this.isBasicActive = true;
                            return false;
                        }
                        if (data['error']['code'] == 304) {
                            _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                        }
                    }, function (Error) {
                        _this.snackBar.open("Something went gone wrong!", "", { duration: 5000 });
                    });
                    _this.outletBasicFormOnverlay = true;
                    _this.isOutletEditBtn = false;
                    _this.isContactFormOverlay = false;
                    _this.isInfraOverlay = false;
                    _this.isOutletBankingOverlay = false;
                    _this.isServicesOverlay = false;
                    _this.outletMouOverlay = false;
                    _this.isServicesBtn = true;
                }
                return false;
            }
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
                //console.log("Update");
                if (eve['_type'] = 'submitFrm') {
                    _this.watchOutlet['id'] = eve['id'];
                    _this._outlet.udpateBasicInfo(_this.watchOutlet, Params['pid'], Params['outletId'])
                        .subscribe(function (data) {
                        if (data['message']) {
                            _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                            return false;
                        }
                        if (data['error']['code'] == 304) {
                            _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                        }
                    }, function (Error) {
                        _this.snackBar.open("Something went gone wrong", "", { duration: 5000 });
                    });
                    _this.isOutletBasicFieldset = true;
                    _this.isOutletEditBtn = false;
                    return false;
                }
            }
        });
    };
    OutletComponent.prototype.outletContactFx = function (eve) {
        var _this = this;
        if (eve['_type'] == 'editFrm') {
            this.isContactFieldset = false;
            this.isContactFormOverlay = false;
            this.isOutletContactBtn = true;
            return false;
        }
        //alert(eve['id']);
        this.activatedRoute.params.subscribe(function (Params) {
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] == undefined)) {
                //console.log("contact submit");
                _this._outlet.createContact(eve, Params['outletId'])
                    .subscribe(function (data) {
                    if (data['message']) {
                        _this.snackBar.open("Created Successfully", "", { duration: 5000 });
                        _this.isContactActive = true;
                        return false;
                    }
                    if (data['error']['code'] == 304) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    }
                }, function (Error) {
                    _this.snackBar.open("Something went gone wrong", "", { duration: 5000 });
                });
                _this.isContactFormOverlay = true;
                _this.isOutletContactBtn = false;
                return false;
            }
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] != undefined)) {
                //console.log("update submit");
                _this._outlet.updateContact(eve, eve['id'])
                    .subscribe(function (data) {
                    if (data['message']) {
                        _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                        return false;
                    }
                    if (data['error']['code'] == 304) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    }
                }, function (Error) {
                    _this.snackBar.open("Something went gone wrong!", "", { duration: 5000 });
                });
                _this.isContactFieldset = true;
                _this.isOutletContactBtn = false;
                return false;
            }
        });
    };
    OutletComponent.prototype.outletInfraFx = function (eve) {
        var _this = this;
        if (eve['_type'] == 'editFrm') {
            this.isInfraOverlay = false;
            this.isInfraFieldset = false;
            this.isInfraBtn = true;
            return false;
        }
        if (eve['outletType'] == "2") {
            delete eve['noOfBeds'];
        }
        this.activatedRoute.params.subscribe(function (Params) {
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] == undefined)) {
                console.log('create');
                _this._outlet.updateInfra(eve, Params['pid'], Params['outletId'])
                    .subscribe(function (data) {
                    if (data['message']) {
                        _this.snackBar.open("Created successfully", "", { duration: 5000 });
                        _this.isInfraActive = true;
                        return false;
                    }
                    if (data['error']['code'] == 304) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    }
                }, function (Error) {
                    _this.snackBar.open("Something went gone wrong!", "", { duration: 5000 });
                });
                _this.isInfraOverlay = true;
                _this.isInfraBtn = false;
                return false;
            }
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] != undefined)) {
                //console.log('update');
                _this._outlet.updateInfra(eve, Params['pid'], Params['outletId'])
                    .subscribe(function (data) {
                    if (data['message']) {
                        _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                        return false;
                    }
                    if (data['error']['code'] == 304) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    }
                }, function (Error) {
                    _this.snackBar.open("Something went gone wrong!", "", { duration: 5000 });
                });
                _this.isInfraFieldset = true;
                _this.isInfraBtn = false;
                return false;
            }
        });
    };
    OutletComponent.prototype.outletBankingFx = function (eve) {
        var _this = this;
        //console.log(eve);
        if (eve['_type'] == 'editFrm') {
            this.isOutletBankingOverlay = false;
            this.isOutletBankingFieldset = false;
            this.isOutletBankingBtn = true;
            return false;
        }
        //eve['chequeUrl'] = "http://192.168.9.50/nerveapi/DemoFolder/6767bf05-cab9-4c65-8c6a-edb358bdf362.pdf";
        this.activatedRoute.params.subscribe(function (Params) {
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] == undefined)) {
                //console.log("create");
                _this._outlet.createBanking(eve, Params['outletId'])
                    .subscribe(function (data) {
                    if (data['message']) {
                        _this.snackBar.open("Created successfully", "", { duration: 5000 });
                        _this.isBankingActive = true;
                        return false;
                    }
                    if (data['error']['code'] == 304) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    }
                }, function (Error) {
                    _this.snackBar.open("Something went gone wrong!", "", { duration: 5000 });
                });
                _this.isOutletBankingOverlay = true;
                _this.isOutletBankingBtn = false;
                return false;
            }
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] != undefined)) {
                //console.log("update");
                _this._outlet.updateBanking(eve, Params['outletId'], eve['id'])
                    .subscribe(function (data) {
                    if (data['message']) {
                        _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                        return false;
                    }
                    if (data['error']['code'] == 304) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    }
                }, function (Error) {
                    _this.snackBar.open("Something went gone wrong!", "", { duration: 5000 });
                });
                _this.isOutletBankingFieldset = true;
                _this.isOutletBankingBtn = false;
                return false;
            }
        });
    };
    OutletComponent.prototype.outletMouFx = function (eve) {
        var _this = this;
        console.log(eve);
        if (eve['_type'] == 'editFrm') {
            this.outletMouOverlay = false;
            this.isOutletFieldset = false;
            this.isOutletMouBtn = true;
            return false;
        }
        this.activatedRoute.params.subscribe(function (Params) {
            if ((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
                //console.log("create form");
                _this._outlet.createMou();
                _this.outletMouOverlay = true;
                _this.isOutletMouBtn = false;
                return false;
            }
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
                //console.log("update mou");
                _this._outlet.updateMou();
                _this.isOutletFieldset = true;
                _this.isOutletMouBtn = false;
                return false;
            }
        });
    };
    OutletComponent.prototype.outletServiceFx = function (eve) {
        //console.log(eve);
        if (eve['_type'] == 'editFrm') {
            this.isServicesOverlay = false;
            this.isServicesFieldset = false;
            this.isServicesBtn = true;
            return false;
        }
        this.activatedRoute.params.subscribe(function (Params) {
            if ((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
                console.log('create service');
                return false;
            }
            if ((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
                console.log("udpate service");
                return false;
            }
        });
    };
    OutletComponent.prototype.getProviderType = function () {
        var _this = this;
        this._outlet.getOutletTypes()
            .subscribe(function (data) {
            _this.outletTypes = data.data;
            console.log(_this.outletTypes);
        });
    };
    OutletComponent.prototype.ifscFx = function (ifscCode) {
        var _this = this;
        this._outlet.getIfscDetail(ifscCode)
            .subscribe(function (data) {
            //console.log(data.data);
            _this.outletBankingInput['name'] = data.data[0]['name'];
            _this.outletBankingInput['address'] = data.data[0]['address'];
            _this.outletBankingInput['city'] = data.data[0]['city'];
            _this.outletBankingInput['state'] = data.data[0]['state'];
            _this.outletBankingInput['branch'] = data.data[0]['id'];
            _this.outletBankingInput['refBankId'] = data.data[0]['id'];
            _this.branches = [{ id: data.data[0]['id'], branch: data.data[0]['branch'] }];
        });
    };
    OutletComponent.prototype.moutType = function () {
        var _this = this;
        this._outlet.getMoutTypes()
            .subscribe(function (data) {
            _this.mouTypes = data.data;
        });
    };
    OutletComponent.prototype.getAnnexuresList = function () {
        var _this = this;
        this._outlet.getAnnexures()
            .subscribe(function (data) {
            _this.annexures = data.data;
        });
    };
    OutletComponent.prototype.getMouAnxrById = function (id) {
        this._outlet.getMouAnxrById(id);
    };
    OutletComponent.prototype.getMouVersions = function () {
        this.outletMouVersions = this._outlet.getMouVersion();
    };
    OutletComponent.prototype.getOutletList = function (pId, oId) {
        var _this = this;
        this._outlet.getOutletDetails(pId, oId)
            .subscribe(function (data) {
            console.log("----------");
            console.log(data.data);
            if (data.data) {
                if (data.data) {
                    _this.outletBasicInfoInput = data.data;
                    console.log("itz my data basic information");
                    console.log(_this.outletBasicInfoInput);
                    _this.providerName = data.data['name'];
                    _this.latitude = Number(data.data['latitude']);
                    _this.longitude = Number(data.data['longitude']);
                    _this.outletBasicInfoInput['latlon'] = data.data['latitude'] + ', ' + data.data['longitude'];
                    _this.isBasicActive = true;
                }
                if (data.data['contactPersons'] != null) {
                    _this.outContactInput = data.data['contactPersons'];
                    _this.serviceContacts = _this.outContactInput;
                    _this.contactSubmitBtn = "UPDATE";
                    _this.isContactActive = true;
                }
                if (data.data['outletInfra'] != null) {
                    _this.infraInput = data.data['outletInfra'];
                    _this.infraInput['outletType'] = String(data.data['outletInfra']['providerOrOutletType']);
                    if (data.data['outletInfra']['outletType'] != "0") {
                        _this.infraSubmitBtn = "UPDATE";
                    }
                    _this.isInfraActive = true;
                }
                if (data.data['BankInfomation'] != null) {
                    _this.outletBankingInput = data.data['BankInfomation'];
                    _this.branches.push({ id: _this.outletBankingInput['refBankId'], branch: _this.outletBankingInput['branch'] });
                    _this.outletBankingInput['refBankId'] = String(data.data['BankInfomation']['refBankId']);
                    _this.bankingSubmitBtn = "UPDATE";
                }
                if (data.data['MOU'] != null) {
                    _this.outletMouInput = data.data['MOU'][0];
                    _this.getMouAnxrById(_this.outletMouInput['versionId']);
                    _this.isBankingActive = true;
                }
                return false;
            }
            if (data['error']['code'] == 204) {
                _this._router.navigate(['/dashboard/providers/provider']);
            }
        }, function (Error) {
            console.log("something went gone wrong");
        });
    };
    OutletComponent.prototype.getProviderById = function (pId) {
        var _this = this;
        this._ProviderService.getProviderById(pId)
            .subscribe(function (data) {
            if (data['error']) {
                _this._router.navigate(['/dashboard/providers/provider']);
            }
        });
    };
    return OutletComponent;
}());
OutletComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet',
        templateUrl: './outlet.component.html',
        styleUrls: ['./outlet.component.css'],
        providers: [outlet_service_1.OutletService, provider_service_1.ProviderService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        outlet_service_1.OutletService,
        material_1.MdSnackBar,
        provider_service_1.ProviderService])
], OutletComponent);
exports.OutletComponent = OutletComponent;
//# sourceMappingURL=outlet.component.js.map