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
var provider_service_1 = require("./../../../services/providers/provider.service");
var material_1 = require("@angular/material");
var AddeditproviderComponent = (function () {
    function AddeditproviderComponent(_providerDetails, activatedRoute, cdf, _router, snackBar) {
        this._providerDetails = _providerDetails;
        this.activatedRoute = activatedRoute;
        this.cdf = cdf;
        this._router = _router;
        this.snackBar = snackBar;
        this.basicInfoInput = {};
        this.updateBasicInfo = {};
        this.providerTypes = [];
        this.contactInput = [];
        this.signatoryInput = [];
        this.services = [];
        this.selectedService = [];
        this.updateServices = {};
        this.bankingUser = {};
        this.branches = [];
        this.mouTypes = [];
        this.annexures = [];
        this.mouVersions = [];
        this.mouInput = {};
    }
    AddeditproviderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pid = 1;
        this.activatedRoute.params.subscribe(function (Params) {
            if (Params['id'] != undefined) {
                _this.isBasicInfoFieldset = true;
                _this.isBasicButton = false;
                _this.isBasicInfoActiveForm = false;
                _this.isSignatoryFieldset = true;
                _this.isContactFieldset = true;
                _this.isSignatoryButton = false;
                _this.isContactButton = false;
                _this.isServiceFieldset = true;
                _this.isServiceFormOverlay = false;
                _this.isServiceButton = false;
                _this.getProviderById(Params['id']);
                _this.basicInfoProgress = true;
                _this.servicesProgress = true;
                _this.signatoryProgress = true;
                _this.contactProgress = true;
                _this.isBankingFieldset = true;
                _this.bankingProgress = true;
                _this.isMouFieldset = true;
                _this.versionNo = false;
                _this.isMouOverlay = false;
                return false;
            }
            _this.title = "ADD";
            _this.isBasicInfoFieldset = false;
            _this.isBasicButton = true;
            _this.isBasicInfoActiveForm = true;
            _this.isSignatoryFieldset = false;
            _this.isContactFieldset = false;
            _this.isSignatoryButton = true;
            _this.isContactButton = true;
            _this.isSginatoryFormOverlay = true;
            _this.isContactFormOverlay = true;
            _this.isServiceFieldset = false;
            _this.isServiceFormOverlay = true;
            _this.isServiceButton = true;
            _this.isBankFormOverlay = true;
            _this.isBankingBtn = true;
            _this.contactInput = [{ name: '', designation: '', email: '', mobile: '', landline: '' }];
            _this.signatoryInput = [{ name: '', designation: '', email: '', mobile: '', landline: '' }];
            _this.bankingUser = {};
            _this.isMouBtn = true;
            _this.versionNo = true;
            _this.isMouOverlay = true;
            _this.signatoryBtnText = 'SUBMIT';
            _this.contactBtnText = 'SUBMIT';
            _this.basicInfoBtnText = 'SUBMIT';
            _this.bankingBtn = 'SUBMIT';
            _this.basicInfoInput = {};
            _this.latitude = 0;
            _this.longitude = 0;
        });
        this.getServicesList();
        this.getAllProvider();
        this.mouType();
        this.mouAnnexures();
        this.getMouVersions();
    };
    // basic information 
    AddeditproviderComponent.prototype.basicInfoFx = function (eve) {
        var _this = this;
        console.log(eve);
        this.activatedRoute.params.subscribe(function (Params) {
            _this.updateBasicInfo['name'] = eve['name'];
            _this.updateBasicInfo['pincode'] = eve['pincode'];
            _this.updateBasicInfo['providerTypeId'] = eve['providerTypeId'];
            _this.updateBasicInfo['regdAddress'] = eve['regdAddress'];
            _this.updateBasicInfo['regdName'] = eve['regdName'];
            _this.updateBasicInfo['totalOutlets'] = eve['totalOutlets'];
            _this.updateBasicInfo['webLink'] = eve['webLink'];
            _this.updateBasicInfo['state'] = eve['state'];
            _this.updateBasicInfo['city'] = eve['city'];
            _this.updateBasicInfo['latitude'] = eve['latitude'];
            _this.updateBasicInfo['longitude'] = eve['longitude'];
            if (eve['isPix'] == true) {
                _this.updateBasicInfo['logoLink'] = eve['logoLink'];
            }
            if (Params['id'] != undefined) {
                if (eve.type == false) {
                    _this._providerDetails.updateProviderBasicInfo(_this.updateBasicInfo, Params['id'])
                        .subscribe(function (data) {
                        _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    _this.isBasicInfoFieldset = true;
                    _this.isBasicButton = false;
                    _this.isBasicInfoActiveForm = false;
                }
                else if (eve.type == true) {
                    _this.isBasicInfoFieldset = false;
                    _this.isBasicButton = true;
                    _this.isBasicInfoActiveForm = true;
                }
                return false;
            }
            console.log(_this.updateBasicInfo);
            if (eve.type == false) {
                _this._providerDetails.createProviderBasicInfo(eve)
                    .subscribe(function (data) {
                    _this.basicInfoInput['id'] = data.data['id'];
                    if (_this.basicInfoInput['id'] != undefined) {
                        _this.isBasicInfoFormoOverlay = true;
                        _this.isBasicButton = false;
                        _this.isBasicInfoActiveForm = false;
                        _this.isSginatoryFormOverlay = false;
                        _this.isContactFormOverlay = false;
                        _this.isServiceFormOverlay = false;
                        _this.isBankFormOverlay = false;
                        _this.isMouOverlay = false;
                    }
                    _this.isBasicActive = true;
                    _this.snackBar.open("Created successfully", "", { duration: 5000 });
                }, function (Error) {
                    _this.isBasicInfoFormoOverlay = false;
                    _this.isBasicButton = true;
                    _this.isBasicInfoActiveForm = true;
                    _this.isSginatoryFormOverlay = true;
                    _this.isContactFormOverlay = true;
                    _this.isServiceFormOverlay = true;
                    _this.isBankFormOverlay = true;
                    _this.isMouOverlay = true;
                    _this.snackBar.open("Something went wrong!", "", { duration: 5000 });
                });
                // this.isBasicInfoFormoOverlay = true;
                // this.isBasicButton = false;
                // this.isBasicInfoActiveForm = false;
                // this.isSginatoryFormOverlay = false;
                // this.isContactFormOverlay = false;
                // this.isServiceFormOverlay = false;
                // this.isBankFormOverlay = false;
                // this.isMouOverlay = false;
                return false;
            }
            else if (eve.type == true) {
                console.log("updated");
                _this.isBasicInfoFormoOverlay = false;
                _this.isBasicInfoActiveForm = true;
                _this.isBasicButton = true;
                return false;
            }
        });
    };
    // signatory N contact
    AddeditproviderComponent.prototype.signatoryNcontactFx = function (eve) {
        var _this = this;
        this.activatedRoute.params.subscribe(function (Params) {
            if (Params['id'] != undefined && eve.type == "signatory") {
                _this.isSignatoryFieldset = true;
                _this.isSignatoryButton = false;
            }
            if (Params['id'] != undefined && eve.type == "contact") {
                _this.isContactFieldset = true;
                _this.isContactButton = false;
            }
            if (Params['id'] != undefined) {
                if (eve['id'] == undefined && eve.type == "signatory") {
                    _this._providerDetails.createSignatory(eve, _this.basicInfoInput['id'])
                        .subscribe(function (data) {
                        _this.isSignatoryActive = true;
                        _this.snackBar.open("Created successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    return false;
                }
                if (eve['id'] == undefined && eve.type == "contact") {
                    _this._providerDetails.createContact(eve, _this.basicInfoInput['id'])
                        .subscribe(function (data) {
                        _this.isContactActive = true;
                        _this.snackBar.open("Created successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    return false;
                }
                if (eve.type == "signatory" && eve['id'] != undefined) {
                    _this._providerDetails.updateSignatory(eve, Params['id'])
                        .subscribe(function (data) {
                        _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    _this.isSignatoryFieldset = true;
                    _this.isSginatoryFormOverlay = false;
                    _this.isSignatoryButton = false;
                    return false;
                }
                else if (eve.type == "notSignatory") {
                    _this.isSignatoryFieldset = false;
                    _this.isSignatoryButton = true;
                    return false;
                }
                if (eve.type == "contact" && eve['id'] != undefined) {
                    _this._providerDetails.updateContact(eve, Params['id'])
                        .subscribe(function (data) {
                        console.log(data.data);
                        _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    _this.isContactFieldset = true;
                    _this.isContactFormOverlay = false;
                    _this.isContactButton = false;
                    return false;
                }
                else if (eve.type == "notContact") {
                    _this.isContactFieldset = false;
                    _this.isContactButton = true;
                    return false;
                }
                return false;
            }
            if (eve.type == "signatory") {
                if (_this.basicInfoInput['id'] != undefined) {
                    console.log("id exist");
                    console.log(eve);
                    _this._providerDetails.createSignatory(eve, _this.basicInfoInput['id'])
                        .subscribe(function (data) {
                        _this.isSignatoryActive = true;
                        _this.snackBar.open("Created successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    _this.isSginatoryFormOverlay = true;
                    _this.isSignatoryButton = false;
                    _this.isContactFormOverlay = false;
                    _this.tabIndx = 1;
                    return false;
                }
                // this.isSginatoryFormOverlay = true;
                // this.isSignatoryButton = false;
                // this.isContactFormOverlay = false;
                // this.tabIndx = 1;
                return false;
            }
            else if (eve.type == "notSignatory") {
                _this.isSginatoryFormOverlay = false;
                _this.isSignatoryButton = true;
                return false;
            }
            if (eve.type == "contact") {
                if (_this.basicInfoInput['id'] != undefined) {
                    console.log("id exist");
                    console.log(eve);
                    _this._providerDetails.createContact(eve, _this.basicInfoInput['id'])
                        .subscribe(function (data) {
                        _this.isContactActive = true;
                        _this.snackBar.open("Created successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    _this.isContactFormOverlay = true;
                    _this.isContactButton = false;
                    _this.isServiceFormOverlay = false;
                    return false;
                }
                // this.isContactFormOverlay = true;
                // this.isContactButton = false;
                // this.isServiceFormOverlay = false;
                return false;
            }
            else if (eve.type == "notContact") {
                _this.isContactFormOverlay = false;
                _this.isContactButton = true;
                return false;
            }
        });
    };
    AddeditproviderComponent.prototype.servicesFx = function (eve) {
        var _this = this;
        this.updateServices['refServiceCatgId'] = eve['id'];
        this.updateServices['remarks'] = eve['remarks'];
        this.updateServices['idChecked'] = eve['isChecked'];
        this.activatedRoute.params.subscribe(function (Params) {
            if (eve.type == true) {
                _this.isServiceFieldset = false;
                _this.isServiceButton = true;
                return false;
            }
            else if (eve.type == false) {
                if (Params['id'] != undefined) {
                    _this.updateServices['refProviderId'] = Params['id'];
                    _this._providerDetails.updateServices(_this.updateServices)
                        .subscribe(function (data) {
                        _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    _this.isServiceButton = true;
                    return false;
                }
                if (_this.basicInfoInput['id'] != undefined) {
                    console.log("id exist");
                    console.log(eve);
                    _this.updateServices['refProviderId'] = _this.basicInfoInput['id'];
                    _this._providerDetails.createServices(_this.updateServices, _this.basicInfoInput['id'])
                        .subscribe(function (data) {
                        _this.isServiceActive = true;
                        _this.snackBar.open("Created successfully", "", { duration: 5000 });
                    }, function (Error) {
                        _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                    });
                    return false;
                }
            }
        });
    };
    AddeditproviderComponent.prototype.bankingFx = function (eve) {
        var _this = this;
        console.log(eve);
        //if(eve._type == true && this.basicInfoInput['id']) {
        this.activatedRoute.params.subscribe(function (Params) {
            if (Params['id'] != undefined && eve._type == true) {
                _this.isBankingFieldset = false;
                _this.isBankingBtn = true;
            }
        });
        //}
        if (eve._type == true) {
            this.isBankFormOverlay = false;
            this.isBankingBtn = true;
            return false;
        }
        else if (eve._type == false) {
            this.activatedRoute.params.subscribe(function (Params) {
                if (Params['id'] != undefined) {
                    if (eve['id'] != undefined && eve._type == false) {
                        console.log("update");
                        _this._providerDetails.updateProviderBanking(eve, Params['id'], eve['id'])
                            .subscribe(function (data) {
                            console.log(data.data);
                            _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                        }, function (Error) {
                            _this.snackBar.open("Something went wrong!", "", { duration: 5000 });
                        });
                        return false;
                    }
                    if (eve['id'] == undefined && eve._type == false) {
                        console.log("create with id");
                        _this._providerDetails.createProviderBanking(eve, _this.basicInfoInput['id'])
                            .subscribe(function (data) {
                            //this.isBankingActive = true;
                            _this.snackBar.open("Created successfully", "", { duration: 5000 });
                        }, function (Error) {
                            _this.snackBar.open("Something went wrong!", "", { duration: 5000 });
                        });
                        _this.isBankingBtn = false;
                        _this.isBankFormOverlay = true;
                        return false;
                    }
                    return false;
                }
                _this._providerDetails.createProviderBanking(eve, _this.basicInfoInput['id'])
                    .subscribe(function (data) {
                    _this.isBankingActive = true;
                    _this.snackBar.open("Created successfully", "", { duration: 5000 });
                }, function (Error) {
                    _this.snackBar.open("Something went wrong!", "", { duration: 5000 });
                });
                console.log("create");
            });
            this.isBankingBtn = false;
            this.isBankFormOverlay = true;
            //this.isBankingFieldset = true;
            return false;
        }
    };
    AddeditproviderComponent.prototype.ifscDetails = function (eve) {
        var _this = this;
        this._providerDetails.getIfscDetail(eve)
            .subscribe(function (data) {
            if (!data.data) {
                _this.snackBar.open("No record found", "", { duration: 3000 });
                return false;
            }
            console.log(data.data);
            _this.branches = data.data;
            _this.bankingUser['refBankId'] = data.data[0].id;
            _this.bankingUser['name'] = data.data[0].name;
            _this.bankingUser['address'] = data.data[0].address;
            _this.bankingUser['city'] = data.data[0].city;
            _this.bankingUser['state'] = data.data[0].state;
        }, function (Error) {
            _this.snackBar.open("Something went wrong", "", { duration: 5000 });
        });
    };
    AddeditproviderComponent.prototype.mouType = function () {
        var _this = this;
        this._providerDetails.getMouTypeMaster()
            .subscribe(function (data) {
            _this.mouTypes = data.data;
            console.log("mous type below");
            console.log(data.data);
        }, function (Error) {
            _this.snackBar.open("Something went wrong", "", { duration: 5000 });
        });
    };
    AddeditproviderComponent.prototype.mouAnnexures = function () {
        var _this = this;
        this._providerDetails.getMouAnnexures()
            .subscribe(function (data) {
            _this.annexures = data.data;
            console.log("annexures below");
            console.log(data.data);
        }, function (Error) {
            _this.snackBar.open("Something went wrong", "", { duration: 5000 });
        });
    };
    AddeditproviderComponent.prototype.getMouVersions = function () {
        var _this = this;
        //this.mouVersions = [];
        this.activatedRoute.params.subscribe(function (Params) {
            if (Params['id'] != undefined) {
                _this._providerDetails.getMouVersionList(Params['id'])
                    .subscribe(function (data) {
                    _this.mouVersions = data.data;
                }, function (Error) {
                    console.log("Something went wrong!");
                });
            }
        });
    };
    AddeditproviderComponent.prototype.getMouAnxrById = function (id) {
        var _this = this;
        this.activatedRoute.params.subscribe(function (Params) {
            if (Params['id'] != undefined) {
                _this._providerDetails.getMouAnnxureById(Params['id'], id)
                    .subscribe(function (data) {
                    _this.annexures = [];
                    _this.annexures = data.data[0]['annexures'];
                    var startDate = new Date(data.data[0]['validFromDate']);
                    var endDate = new Date(data.data[0]['validToDate']);
                    _this.mouInput['validFromDate'] = startDate;
                    _this.mouInput['validToDate'] = endDate;
                    _this.mouInput['compDocUrl'] = data.data[0]['compDocUrl'];
                    //this.mouInput['mouTypeId'] = String(data.data[0]['mouTypeId']);
                    console.log("=====================++++++");
                    console.log(data.data);
                    return false;
                });
            }
        });
    };
    AddeditproviderComponent.prototype.mouFx = function (eve) {
        var _this = this;
        if (eve._type == true) {
            console.log("edited");
            this.isMouFieldset = false;
            this.isMouBtn = true;
            return false;
        }
        console.log(eve);
        if (eve._type == false) {
            this.activatedRoute.params.subscribe(function (Params) {
                if (Params['id'] != undefined) {
                    if (_this.basicInfoInput['id'] != undefined && eve._type == false) {
                        _this._providerDetails.createProviderMou(eve, _this.basicInfoInput['id'])
                            .subscribe(function (data) {
                            console.log(data.data);
                            _this.snackBar.open("Created successfully", "", { duration: 5000 });
                        }, function (Error) {
                            _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                        });
                        return false;
                    }
                    console.log("updated");
                    _this._providerDetails.updateProviderMou(eve);
                    return false;
                }
                console.log("submited");
                _this._providerDetails.createProviderMou(eve, _this.basicInfoInput['id'])
                    .subscribe(function (data) {
                    console.log(data.data);
                    _this.snackBar.open("Created successfully", "", { duration: 5000 });
                }, function (Error) {
                    _this.snackBar.open("Something went wrong", "", { duration: 5000 });
                });
                _this._router.navigate(['/dashboard/providers']);
            });
            this.isMouFieldset = true;
            this.isMouBtn = false;
            return false;
        }
    };
    AddeditproviderComponent.prototype.getProviderById = function (id) {
        var _this = this;
        this._providerDetails.getProviderById(id)
            .subscribe(function (data) {
            _this.title = data.data.name;
            var serviceCatData = data.data.ServicesCategories;
            if (data.data != '' || data.data != null || data.data != null) {
                _this.isBasicActive = true;
                _this.basicInfoInput = data.data;
                _this.basicInfoInput['providerTypeId'] = String(data.data['providerTypeId']);
                //alert(this.basicInfoInput['providerTypeId']);
                _this.profilePix = _this.basicInfoInput['logoLink'];
                _this.latitude = Number(data.data.latitude);
                _this.longitude = Number(data.data.longitude);
                _this.basicInfoInput['latlon'] = data.data.latitude + ', ' + data.data.longitude;
                _this.basicInfoBtnText = 'UPDATE';
            }
            if (data.data.BankInfomation != null) {
                _this.bankingUser = data.data.BankInfomation;
                _this.cancelChequeImg = _this.bankingUser['chequeUrl'];
                _this.branches.push({ id: _this.bankingUser['refBankId'], branch: _this.bankingUser['branch'] });
                _this.bankingUser = data.data.BankInfomation;
                _this.bankingBtn = 'UPDATE';
                _this.isBankingActive = true;
            }
            else {
                _this.bankingUser = {};
                _this.bankingBtn = 'SUBMIT';
            }
            if (data.data.MOU != null) {
                //this.mouInput = data.data.MOU[0];
                console.log(data.data[0]);
                var startDate = new Date(data.data.MOU[0]['validFromDate']);
                var endDate = new Date(data.data.MOU[0]['validToDate']);
                _this.mouInput['validFromDate'] = startDate;
                _this.mouInput['validToDate'] = endDate;
                _this.mouInput['compDocUrl'] = data.data.MOU[0]['compDocUrl'];
                _this.mouInput['mouTypeId'] = String(data.data.MOU[0]['mouTypeId']);
                //alert(this.mouInput['mouTypeId']);
                _this.mouInput['versionId'] = String(data.data.MOU[0]['id']);
                _this.pdfversion = data.data.MOU[0]['versionId'];
                _this.isMousActive = true;
                _this.getMouAnxrById(_this.mouInput['versionId']);
                switch (_this.mouInput['mouTypeId']) {
                    case '1':
                        _this.completeSec = 1;
                        _this.partialSec = 0;
                        break;
                    case '2':
                        _this.partialSec = 2;
                        _this.completeSec = 0;
                        break;
                }
            }
            _this.basicInfoProgress = false;
            _this.servicesProgress = false;
            _this.signatoryProgress = false;
            _this.contactProgress = false;
            _this.bankingProgress = false;
            if (data.data.SignatryPersons != null) {
                _this.signatoryInput = data.data.SignatryPersons;
                _this.isSignatoryActive = true;
                _this.signatoryBtnText = 'UPDATE';
            }
            else {
                _this.signatoryInput = [{ name: '', designation: '', email: '', mobile: '', landline: '' }];
                _this.signatoryBtnText = 'SUBMIT';
            }
            if (data.data.ContactPersons != null) {
                _this.contactInput = data.data.ContactPersons;
                _this.isContactActive = true;
                _this.contactBtnText = 'UPDATE';
            }
            else {
                _this.contactInput = [{ name: '', designation: '', email: '', mobile: '', landline: '' }];
                _this.contactBtnText = 'SUBMIT';
            }
            if (serviceCatData != null) {
                _this.isServiceActive = true;
            }
            if (serviceCatData == null)
                return false;
            for (var i = 0; i < _this.services.length; i++) {
                for (var j = 0; j < serviceCatData.length; j++) {
                    var catChkId = serviceCatData[j].refServiceCatgId;
                    var serviceChkId = Number(_this.services[i].id);
                    if (catChkId === serviceChkId) {
                        var myBol = Boolean(true);
                        _this.services[serviceChkId - 1]['isChecked'] = myBol;
                    }
                }
            }
        }, function (Error) {
            _this.snackBar.open("Something went wrong", "", { duration: 5000 });
        });
    };
    AddeditproviderComponent.prototype.getServicesList = function () {
        var _this = this;
        this._providerDetails.getAllProviderServices()
            .subscribe(function (data) {
            _this.services = data.data;
        });
    };
    // get provider type list 
    AddeditproviderComponent.prototype.getAllProvider = function () {
        var _this = this;
        this._providerDetails.getProviderTypeList()
            .subscribe(function (data) {
            _this.providerTypes = data.data;
        });
    };
    return AddeditproviderComponent;
}());
AddeditproviderComponent = __decorate([
    core_1.Component({
        selector: 'app-addeditprovider',
        templateUrl: './addeditprovider.component.html',
        styleUrls: ['./addeditprovider.component.css'],
        providers: [provider_service_1.ProviderService]
    }),
    __metadata("design:paramtypes", [provider_service_1.ProviderService,
        router_1.ActivatedRoute,
        core_1.ChangeDetectorRef,
        router_1.Router,
        material_1.MdSnackBar])
], AddeditproviderComponent);
exports.AddeditproviderComponent = AddeditproviderComponent;
//# sourceMappingURL=addeditprovider.component.js.map