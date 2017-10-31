webpackJsonp(["providers.module"],{

/***/ "../../../../../src/app/providers/components/addeditprovider/addeditprovider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .myColor {\r\n    color: red;\r\n} */\r\n #page {\r\n    padding: 0px 40px;\r\n}\r\nh2 {\r\n    margin: 0px;\r\n    padding: 20px 0px 10px 0px;\r\n    font-family: raleway;\r\n    font-weight: 600;\r\n    text-shadow: none;\r\n    color: #00b1ff;\r\n}\r\nh2 span{\r\n    color:#000;\r\n}\r\nh2 span md-icon{\r\nfont-size: 25px;\r\n    vertical-align: middle;\r\n    color:#000;\r\n        font-weight: 600;\r\n} \r\n/* .left-section{\r\n    /* padding-left: 65px; \r\n    \r\n} */\r\n.right-section{\r\n    padding-left: 45px;\r\n    padding-top: 65px;\r\n    border-left: 1px solid #d2d2d2;\r\n}\r\n.right-section h3{\r\n    font-weight: 400;\r\n    text-align: center;\r\n}\r\n.profile-section{\r\n    /* padding-left: 65px; */\r\n    padding-top: 20px;\r\n}\r\n.contact-section{\r\n    padding-top: 20px;\r\n}\r\n.services{\r\n    padding-top: 20px;\r\n}\r\n.banking{\r\n    padding-top: 20px;\r\n}\r\n\r\n .providerAside {\r\n    display: block;\r\n}\r\n/*\r\n.providerAside li.active {\r\n    color: green;\r\n}\r\nul {\r\n    border-left:1px solid #d4d4d4;\r\n    list-style: none;\r\n}\r\n.providerAside > li span {\r\n    position: absolute;\r\n    border: 2px solid #adadad;\r\n    width: 10px;\r\n    border-radius: 12px;\r\n    height: 10px;\r\n    /* left: -47px; \r\n    background: #fff;\r\n}\r\nul > li ul {\r\n    border-left: none;\r\n} */\r\n\r\nul {border-left:1px solid #d4d4d4;\r\npadding-left: 23px;}\r\nul > li {\r\n    position: relative;\r\n    display: block;\r\n        padding-bottom: 12px;\r\n}\r\n\r\nul > li span {\r\n    position: absolute;\r\n    border: 2px solid #adadad;\r\n    width: 10px;\r\n    border-radius: 12px;\r\n    height: 10px;\r\n    left: -30px;\r\n    background: #fff;\r\n}\r\nul > li.active span{\r\n    border: 2px solid green;\r\n    background: white;\r\n}\r\nul > li.active {\r\n    color:green;\r\n}\r\n /* ul > li.active {\r\n    border: none;\r\n    color: #1f89ff;    background:none;\r\nfont-weight:600;}  */\r\n\r\nul > li div p span {\r\n    position: absolute;\r\n    border: 2px solid #adadad;\r\n    width: 10px;\r\n    border-radius: 12px;\r\n    height: 10px;\r\n    left: 0px;\r\n    background: #fff;\r\n}\r\n/* ul > li div p > a.active span {\r\n     border: 2px solid #1f89ff;    background: #1f89ff;\r\n}\r\nul > li > div p > a.active label{\r\n    border: none;\r\n    color: #1f89ff;    background:none;\r\n} */\r\nul > li div p label{\r\n    margin-left:30px;\r\n    font-size: 14px;\r\n    color:#000;\r\n    display: block;\r\n    \r\n}\r\nul > li div p.active label {color: green;}\r\nul > li div p.active span{\r\n    border: 2px solid green;\r\n    background: green;\r\n}\r\nul > li > div {   \r\n    margin-top: 10px;\r\n}\r\nhr{    width: 10%;\r\n    border-bottom: 5px solid #a4a2a2;\r\n    border-radius: 7px;    margin-top: 25px;\r\n    margin-bottom: 25px;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/addeditprovider/addeditprovider.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"page\">\r\n  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n    <!-- // left section [content] -->\r\n    <div fxFlex=\"70\" class=\"left-section\">\r\n      <h2>{{title}}</h2>\r\n      <div fxLayout=\"row\">\r\n        <div class=\"profile-section\" fxFlex=\"58\">\r\n          <app-providerbasicinfo \r\n            [basicInfoInput]=\"basicInfoInput\" \r\n            [providerTypes]=\"providerTypes\" \r\n            [latitude]=\"latitude\" \r\n            [longitude]=\"longitude\" \r\n            (basicInfoFx)=\"basicInfoFx($event, eve)\" \r\n            [isBasicButton]=\"isBasicButton\" \r\n            [isBasicInfoFormoOverlay]=\"isBasicInfoFormoOverlay\" \r\n            [isBasicInfoActiveForm]=\"isBasicInfoActiveForm\"\r\n            [isBasicInfoFieldset]=\"isBasicInfoFieldset\"\r\n            [basicInfoProgress]=\"basicInfoProgress\"\r\n            [profilePix]=\"profilePix\"\r\n            [basicInfoBtnText]=\"basicInfoBtnText\">\r\n          </app-providerbasicinfo>\r\n        </div>\r\n\r\n        <div class=\"contact-section\" fxFlex=\"40\" fxFlexOffset=\"2\">\r\n          <app-providercontact \r\n            (signatoryNcontactFx)=\"signatoryNcontactFx($event)\" \r\n            [contactInput]=\"contactInput\" \r\n            [signatoryInput]=\"signatoryInput\"\r\n            [isContactButton]=\"isContactButton\"\r\n            [isSignatoryButton]=\"isSignatoryButton\"\r\n            [isSginatoryFormOverlay]=\"isSginatoryFormOverlay\"\r\n            [isContactFormOverlay]=\"isContactFormOverlay\"\r\n            [isSignatoryFieldset]=\"isSignatoryFieldset\"\r\n            [isContactFieldset]=\"isContactFieldset\"\r\n            [tabIndx]=\"tabIndx\"\r\n            [signatoryProgress]=\"signatoryProgress\"\r\n            [contactProgress]=\"contactProgress\"\r\n            [signatoryBtnText]=\"signatoryBtnText\"\r\n            [contactBtnText]=\"contactBtnText\">\r\n          </app-providercontact>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n        <div class=\"banking\" fxFlex=\"100\">\r\n            <app-banking \r\n              (bankingFx)=\"bankingFx($event)\"\r\n              (ifscDetails)=\"ifscDetails($event)\"\r\n              [bankingUser]=\"bankingUser\"\r\n              [branches]=\"branches\"\r\n              [isBankingActiveForm]=\"isBankingActiveForm\"\r\n              [isBankFormOverlay]=\"isBankFormOverlay\"\r\n              [isBankingBtn]=\"isBankingBtn\"\r\n              [isBankingFieldset]=\"isBankingFieldset\"\r\n              [bankingBtn]=\"bankingBtn\"\r\n              [cancelChequeImg]=\"cancelChequeImg\"\r\n              [bankingProgress]=\"bankingProgress\">\r\n            </app-banking>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n            <div class=\"services\" fxFlex=\"100\">\r\n              <app-providerservices \r\n                [services]=\"services\" \r\n                [isServiceButton]=\"isServiceButton\"\r\n                [isServiceFormOverlay]=\"isServiceFormOverlay\"\r\n                [isServiceFieldset] =\"isServiceFieldset\"\r\n                (servicesFx)=\"servicesFx($event)\"\r\n                [servicesProgress]=\"servicesProgress\">\r\n              </app-providerservices>\r\n            </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout=\"column\">\r\n        <div class=\"mous\" fxFlex=\"100\">\r\n          <app-mous\r\n            [mouTypes]=\"mouTypes\"\r\n            [annexures]=\"annexures\"\r\n            [isMouFieldset]=\"isMouFieldset\"\r\n            [isMouOverlay]=\"isMouOverlay\"\r\n            [isMouBtn]=\"isMouBtn\"\r\n            [versionNo]=\"versionNo\"\r\n            [mouInput]=\"mouInput\"\r\n            [pdfversion]=\"pdfversion\"\r\n            [mouVersions]=\"mouVersions\"\r\n            [completeSec]=\"completeSec\"\r\n            [partialSec]=\"partialSec\"\r\n            (mouFx)=\"mouFx($event)\"\r\n            (getMouAnxrById)=\"getMouAnxrById($event)\">\r\n          </app-mous>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- // right section [aside] -->\r\n    <div fxFlex=\"28\" fxFlexOffset=\"2\" class=\"right-section\">\r\n      <h3>Info</h3>\r\n      <hr>\r\n      <ul>\r\n            <li [ngClass]=\"{'active': isBasicActive}\"><span></span> Basic Info\r\n              <!--<div>  \r\n                  <p [ngClass]=\"{'active': isBasicActive}\"><span></span><label>Basic Info</label></p>\r\n              </div>-->\r\n            </li>\r\n            <li [ngClass]=\"{'active': isSignatoryActive}\"><span></span>Signatory</li>\r\n            <li [ngClass]=\"{'active': isContactActive}\"><span></span>Contact</li>\r\n            <li [ngClass]=\"{'active': isBankingActive}\"><span></span>Banking</li>\r\n            <li [ngClass]=\"{'active': isServiceActive}\"><span></span>Services</li>\r\n            <li [ngClass]=\"{'active': isMousActive}\"><span></span>MOU</li>\r\n            <!--<li [ngClass]=\"{'active': isMousActive}\"><span></span>MOU</li>-->\r\n            <li><span></span><a routerLink=\"/dashboard/provider/{{pid}}/outlets\">Outlets</a> | <a routerLink=\"/dashboard/provider/{{pid}}/outlet/add\">+</a></li>\r\n          </ul> \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/providers/components/addeditprovider/addeditprovider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeditproviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_providers_provider_service__ = __webpack_require__("../../../../../src/app/services/providers/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddeditproviderComponent = /** @class */ (function () {
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
    AddeditproviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addeditprovider',
            template: __webpack_require__("../../../../../src/app/providers/components/addeditprovider/addeditprovider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/addeditprovider/addeditprovider.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_providers_provider_service__["a" /* ProviderService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_providers_provider_service__["a" /* ProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_providers_provider_service__["a" /* ProviderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _e || Object])
    ], AddeditproviderComponent);
    return AddeditproviderComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=addeditprovider.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/banking/banking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .form-control{\r\n    display: block;\r\n    position: relative;\r\n    z-index: 11;\r\n    padding: 0px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-control.active{\r\n    border:1px solid #00b1ff;\r\n    \r\n} \r\nbutton {margin-left: 20px;}\r\n\r\ninput:disabled,\r\ntextarea:disabled {\r\n    border: none;\r\n    resize:  none;\r\n}\r\nfieldset {\r\n    margin: 0px;\r\n    border: none;\r\n}\r\nfieldset p{\r\n    color:#acadb1;\r\n}\r\nfieldset md-icon{\r\n    vertical-align: middle;\r\n}\r\n.form-overlay{\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 9999;\r\n    left: 0; top: 0;\r\n   \r\n}\r\nlabel {\r\n    position: relative;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n/* .btn:hover {\r\n    cursor: pointer !important;\r\n}\r\n\r\n.btn:active {\r\n    box-shadow: 0  !important;\r\n     transform: translateY(2px) !important;\r\n}\r\n.btn {\r\n    \r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    height: 50px;\r\n    width: 100px;\r\n    box-shadow: 0;\r\n    text-align: center;\r\n}\r\n.btn-sık {\r\n    transition: all 0.2s ease;\r\n    background-color: white ;\r\n    border: 1px solid #b2b6b7;\r\n    box-shadow: 0 !important;\r\n    min-width: 175px;\r\n    border-radius: 2px;\r\n    color:#767575;\r\n}\r\ninput[type=\"checkbox\"] {\r\n     position: absolute;\r\n  visibility: hidden;\r\n}\r\n\r\ninput[type=\"checkbox\"] + div {\r\n    position: relative;\r\n}\r\ninput[type=\"checkbox\"]:checked + div {\r\n  background-color: #fff;\r\n  width:20%;\r\n  border: 1px solid #387ff8;\r\n}\r\ninput[type=\"checkbox\"]:disabled + div {\r\n  background-color: #fff;\r\n  width:20%;\r\n  border: 1px solid #d2d2d2;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + div>span {\r\n  color: #767575;\r\n}\r\ninput[type=\"checkbox\"] + div>span {\r\nposition: relative;\r\ntop: 30%;}\r\n\r\ninput[type=\"checkbox\"]:checked + div::before {\r\n     content: \"✔\";\r\n    position: absolute;\r\n    bottom: -1px;\r\n    right: -1px;\r\n    text-indent: 18px;\r\n    line-height: 280%;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    -webkit-clip-path: polygon(100% 100%, 100% 0, 0 0);\r\n    clip-path: polygon(100% 100%, 100% 0, 0 100%);\r\n    background: #387ff8;\r\n    width: 20%;\r\n    height: 60%;\r\n}\r\nfieldset:disabled input[type=\"checkbox\"]:checked + div::before {\r\n      content: \"✔\";\r\n    position: absolute;\r\n    bottom: -1px;\r\n    right: -1px;\r\n    text-indent: 18px;\r\n    line-height: 280%;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    -webkit-clip-path: polygon(100% 100%, 100% 0, 0 0);\r\n    clip-path: polygon(100% 100%, 100% 0, 0 100%);\r\n    background: #d2d2d2;\r\n    width: 20%;\r\n    height: 60%; \r\n}\r\n.providerServices{\r\n    padding: 0;\r\n    display: block;\r\n    list-style: none;\r\n}\r\n.providerServices > li{\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    margin-bottom: 8px;\r\n} */\r\n /* p{\r\n     -webkit-margin-before: 0 !important; \r\n    -webkit-margin-after:0 !important;\r\n    margin: 0px;\r\n} */\r\n\r\n /* input, textarea {\r\n    border: 1px solid gray;\r\n    margin: 0px 20px;\r\n    outline: none;\r\n    color: black;\r\n    background:  none;\r\n}  */\r\n\r\n\r\n\r\n\r\n\r\n/*.profile-pic{\r\n    width: 85%;\r\n    height: 118px;\r\n    border: 2px solid #898989;\r\n    background: #e3e8ee;\r\n    margin-bottom: 15px;\r\n}\r\n.btn-group{\r\n    position: absolute;\r\n    right:0;\r\n    bottom: 0;\r\n}\r\n.btn-group p{\r\n    display: block;\r\n    -webkit-margin-after:0 !important;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n}\r\n md-select {\r\n    padding-top: 22px !important;\r\n} \r\n.file-upload {\r\n\tposition: relative;\r\n    display: block;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.file-upload__label {\r\n  box-sizing: border-box;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    border: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n    font-size: 14px;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    min-width: 100%;\r\n    line-height: 114px;\r\n    padding: 0 16px;\r\n    border-radius: 2px;\r\n    background-color: transparent;\r\n    color: #000;\r\n    \r\n}\r\n.file-upload__label:hover {\r\n     cursor: pointer;\r\n  }\r\n\r\n    \r\n.file-upload__input {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-pix {\r\n    width: 100%;\r\n    height: 100px;\r\n    overflow: hidden;\r\n    border: 1px solid #ddd;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/banking/banking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control\" [ngClass]=\"{'active': isBankingActiveForm}\">\r\n  <div [ngClass]=\"{'form-overlay': isBankFormOverlay}\">\r\n    <div [hidden]=\"isBankingBtn\" style=\"position: absolute; right: 0; bottom: 0;\">\r\n      <button md-raised-button type=\"button\" class=\"primary\" (click)=\"edtFrm(bankingUser)\">EDIT</button> \r\n    </div>\r\n  </div>   \r\n \r\n  <form #providerBanking=\"ngForm\" (ngSubmit)=\"submitProviderBanking(bankingUser)\" (keydown.enter)=\"$event.preventDefault()\">\r\n    <fieldset [disabled]=\"isBankingFieldset\">\r\n        <md-progress-bar *ngIf=\"bankingProgress\" mode=\"indeterminate\" style=\"margin-bottom: 5px;\"></md-progress-bar>\r\n      <p>Banking</p>\r\n      <div data-attr=\"banking\">\r\n          <div fxLayout=\"row\">\r\n            <div fxFlex=\"50\">\r\n              <div fxLayout=\"row\">\r\n                <md-input-container fxFlex=\"100\">\r\n                  <input type=\"text\" pattern=\"[0-9]{3,}\" mdInput placeholder=\"Bank Account No.\" required name=\"accountNo\" #accountNo=\"ngModel\" [(ngModel)]=\"bankingUser.accountNo\">\r\n                  <md-error *ngIf=\"accountNo.errors && (accountNo.dirty || accountNo.touched)\">\r\n                    <md-error>\r\n                        <span [hidden]=\"!accountNo.errors.required\">Enter Account Number</span>\r\n                        <span [hidden]=\"!accountNo.errors.pattern\">Enter digit only</span>\r\n                    </md-error>\r\n                  </md-error>\r\n                </md-input-container>\r\n              </div>\r\n              <div fxLayout=\"row\">\r\n                <md-select placeholder=\"Account Type\" required fxFlex=\"100\" [(ngModel)]=\"bankingUser.type\" name=\"type\" #type=\"ngModel\">\r\n                  <md-option *ngFor=\"let accountType of accountTypes\" [value]=\"accountType.value\">\r\n                    {{accountType.name}}\r\n                  </md-option>\r\n                </md-select>\r\n                <md-error *ngIf=\"type.errors && (type.dirty || type.touched)\">\r\n                    <!--<md-error>\r\n                        <span [hidden]=\"!type.errors.required\">Select account type</span>\r\n                    </md-error>-->\r\n                  </md-error>\r\n              </div>\r\n            </div>\r\n            <div fxFlex=\"45\" fxFlexOffset=\"5\">\r\n              <div fxFlex=\"100\"> \r\n                <!--<div style=\"border: 2px solid #d2d2d2;padding: 10px;height: 150px;width: 150px;position: relative;\">-->\r\n                <div style=\"position: relative; overflow: hidden;height: 125px;\">\r\n                  <image-upload [max]=\"1\" [preview]=\"true\" [extensions]=\"['image/*']\" [dropBoxMessage]=\"''\" [buttonCaption]=\"'Upload cancel cheque'\"  (onFileUploadFinish)=\"imageUploaded($event)\">\r\n                  </image-upload>\r\n                  <div *ngIf=\"cancelChequeImg\">\r\n                    <!--<i (click)=\"removeImg()\">x</i>-->\r\n                    <img [src]=\"cancelChequeImg\" style=\"height: 96px; width: auto; display: block; margin: 0px auto;\" alt=\"\" height=\"100\" width=\"100\">\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <!--<div fxFlex=\"100\" class=\"profile-pic\">\r\n                <div class=\"file-upload\" style=\"margin-right: 10px;\">\r\n                  <label class=\"file-upload__label\">Upload cancelled Cheque</label>\r\n                  <input [disabled]=\"isReadOnly\" accept=\"image/*\" class=\"file-upload__input\" type=\"file\" (change)=\"getFileFx($event, 'driving')\" name=\"pix3\">\r\n                </div>\r\n              </div>-->\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n                <md-input-container fxFlex=\"50\">\r\n                  <input type=\"text\" mdInput required placeholder=\"IFSC Code\" (blur)=\"getUserAcc(bankingUser.ifsc)\" name=\"ifsc\" #ifsc=\"ngModel\" [(ngModel)]=\"bankingUser.ifsc\">\r\n                  <md-error *ngIf=\"ifsc.errors && (ifsc.dirty || ifsc.touched)\">\r\n                    <md-error>\r\n                        <span [hidden]=\"!ifsc.errors.required\">Enter IFSC Code</span>\r\n                    </md-error>\r\n                  </md-error>\r\n                </md-input-container>\r\n          \r\n            <md-input-container fxFlex=\"45\" fxFlexOffset=\"5\">\r\n              <input type=\"text\" mdInput placeholder=\"Bank Name\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"bankingUser.name\">\r\n            </md-input-container>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <md-select placeholder=\"Branch Name\" fxFlex=\"50\" [(ngModel)]=\"bankingUser.refBankId\" name=\"branch\">\r\n              <md-option *ngFor=\"let branch of branches\" [value]=\"branch.id\">\r\n                {{branch.branch}}\r\n              </md-option>\r\n            </md-select>\r\n          \r\n            <md-input-container fxFlex=\"45\" fxFlexOffset=\"5\" class=\"mdTextAra\">\r\n              <textarea mdInput placeholder=\"Address\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"bankingUser.address\">{{bankingUser.address}}</textarea>\r\n            </md-input-container>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <md-input-container fxFlex=\"50\">\r\n              <input type=\"text\" mdInput placeholder=\"City\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"bankingUser.city\">\r\n            </md-input-container>\r\n            <md-input-container fxFlex=\"45\" fxFlexOffset=\"5\">\r\n              <input type=\"text\" mdInput placeholder=\"State\" name=\"state\" #state=\"ngModel\" [(ngModel)]=\"bankingUser.state\">\r\n            </md-input-container>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"btn-group\">\r\n        <div [hidden]=\"isBankingFieldset || isBankFormOverlay || !providerBanking.form.valid\">\r\n          <button md-raised-button type=\"submit\" class=\"primary\">{{bankingBtn}}</button>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/providers/components/banking/banking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BankingComponent = /** @class */ (function () {
    //myFile: string;
    function BankingComponent() {
        this.bankingFx = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ifscDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.branches = [];
        this.accountTypes = [
            { value: 'Current', name: 'Current Account' },
            { value: 'Saving', name: 'Saving Account' }
        ];
    }
    BankingComponent.prototype.ngOnInit = function () {
        //this.myFile = 'assets/images/H3U_Logo_201x132.png';
    };
    BankingComponent.prototype.getUserAcc = function (ifscCode) {
        this.ifscDetails.emit(ifscCode);
    };
    BankingComponent.prototype.submitProviderBanking = function (banking) {
        // alert(banking['chequeUrl']);
        if (banking['chequeUrl'] == '' || banking['chequeUrl'] == undefined) {
            alert("select check url");
            return false;
        }
        banking['_type'] = false;
        this.bankingFx.emit(banking);
    };
    BankingComponent.prototype.edtFrm = function (banking) {
        banking['_type'] = true;
        this.bankingFx.emit(banking);
    };
    BankingComponent.prototype.imageUploaded = function (eve) {
        var checktarget = eve.src;
        var checkUrl = checktarget.substring(checktarget.indexOf(",") + 1);
        this.bankingUser['chequeUrl'] = checkUrl;
        this.cancelChequeImg = eve.src;
        console.log(eve.src);
    };
    BankingComponent.prototype.removeImg = function () {
        this.cancelChequeImg = '';
        this.bankingUser['chequeUrl'] = this.cancelChequeImg;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BankingComponent.prototype, "bankingFx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BankingComponent.prototype, "ifscDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BankingComponent.prototype, "bankingUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BankingComponent.prototype, "branches", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BankingComponent.prototype, "isBankingActiveForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BankingComponent.prototype, "isBankFormOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BankingComponent.prototype, "isBankingBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BankingComponent.prototype, "isBankingFieldset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BankingComponent.prototype, "bankingBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BankingComponent.prototype, "bankingProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BankingComponent.prototype, "cancelChequeImg", void 0);
    BankingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banking',
            template: __webpack_require__("../../../../../src/app/providers/components/banking/banking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/banking/banking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BankingComponent);
    return BankingComponent;
}());

//# sourceMappingURL=banking.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/lead/addlead/addlead.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container h2[_ngcontent-c6]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 2px;\r\n    bottom: 4px;\r\n    left: 0;\r\n    background: #4b5668;\r\n}\r\n.cp-para{text-align: center;font-size: 22px;font-weight: normal;}\r\n.cp-para label{position:relative;font-size:16px;color:#828384 ;}\r\n.card_r{padding:20px;}\r\nhr{width: 10%;border-bottom:5px solid #a4a2a2 ;border-radius: 7px;margin-top: 25px;margin-bottom: 25px;}\r\n\r\n/** input **/\r\n.mat-input-underline .mat-input-ripple {\r\n    position: absolute;\r\n    height: 49px;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    -webkit-transform-origin: 50%;\r\n            transform-origin: 50%;\r\n    -webkit-transform: scaleX(.5);\r\n            transform: scaleX(.5);\r\n    visibility: hidden;\r\n    transition: background-color .3s cubic-bezier(.55,0,.55,.2);\r\n}\r\n.mat-input-ripple {\r\n    border: 1px solid #3f51b5;\r\n}\r\n.mat-input-placeholder {\r\n    position: absolute;\r\n    left: 10px;\r\n    font: inherit;\r\n    pointer-events: none;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    -webkit-transform: perspective(100px);\r\n            transform: perspective(100px);\r\n    -ms-transform: none;\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\r\n    transition: color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1),-webkit-transform .4s cubic-bezier(.25,.8,.25,1);\r\n    transition: transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);\r\n    transition: transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1),-webkit-transform .4s cubic-bezier(.25,.8,.25,1);\r\n    display: none;\r\n}\r\n.mat-input-element {\r\n    font: inherit;\r\n    background: 0 0;\r\n    color: currentColor;\r\n    border: none;\r\n    outline: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    vertical-align: bottom;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n/*fieldset textarea.mat-input-element{\r\n    height:70px;\r\n}\r\nfieldset .mat-input-container .mat-input-underline{\r\nheight:70px;\r\n}\r\nfieldset .mat-input-underline .mat-input-ripple{\r\nheight:70px;\r\n}*/\r\n.left{\r\n    width: 130px;\r\n    height: auto;\r\n    background-color: #fff;\r\n    /* position: fixed!important; */\r\n    /* border: 1px solid #d2d2d2; */\r\n    z-index: 1;\r\n    overflow: auto;\r\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12); */\r\n}\r\n.right{\r\n    padding: 1.01em 16px;\r\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12); */\r\n        border-bottom: 1px solid #d2d2d2;\r\n    border-right: 1px solid #d2d2d2;\r\n}\r\nul{\r\n    list-style: none;\r\n    -webkit-padding-start: 0px;\r\n    -webkit-margin-before: 0em;\r\n    -webkit-margin-after: 0em;\r\n}\r\ndiv > ul > li{\r\n    padding: 15px;\r\n    border-bottom: 1px solid #d2d2d2;\r\n    border-right: 1px solid #d2d2d2;\r\n    border-left: 1px solid #d2d2d2;\r\n    -webkit-padding-start: 0;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\ndiv > ul > li:active{\r\n    background:rgba(158, 163, 195, 0.3);\r\n}\r\n.tab-header{\r\n    background: #2296fc;\r\n    height: auto;\r\n    padding: 0;\r\n    color: #fff;\r\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12); */\r\n}\r\n.tab-header > p{\r\n    padding-left: 15px;\r\n}\r\n.profile-pic{\r\n    width: /*153px*/160px;\r\n    height: /*153px*/160px;\r\n    border: 2px solid #898989;\r\n    background: #e3e8ee;\r\n    margin-bottom: 24px;\r\n    position: relative;\r\n}\r\n.upload-pic{\r\n      border-radius: 0;\r\n    height: 0;\r\n    width: 100%;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    color: transparent;\r\n    transition: height .3s ease;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    margin: 0;\r\n}\r\n.profile-pic:hover .upload-pic {\r\n    background-color: rgba(18, 18, 18, 0.7);\r\n    z-index: 10000;\r\n    color: #fff;\r\n    transition: height .3s ease;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 30%;\r\n     bottom: 0; \r\n    left: 0;\r\n    z-index: 1\r\n}\r\n.upload-pic::after{\r\n    content:\"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height:0%;\r\n    transition: height .3s ease;\r\n    background: rgba(34, 34, 34, 0);\r\n    z-index: 0;\r\n}\r\n.upload-pic:hover::after {\r\n    height: 100%;\r\n    background: rgba(34, 34, 34, 0.7);\r\n}\r\n.upload-pic span {\r\n    display: inline-block;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n.upload-pic md-icon{\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/lead/addlead/addlead.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div fxLayout=\"row\" class=\"layoutgap\">\r\n  <div fxFlex=\"70\" >\r\n    <div fxFlex=\"17\">\r\n      <h2>PROVIDER</h2>\r\n    </div>\r\n    <div fxFlex=\"53\">\r\n      <span><md-icon>chevron_right</md-icon> ADD</span>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"30\" >\r\n\r\n  </div>\r\n</div> -->\r\n\r\n<div>\r\n  <form>\r\n    <fieldset [disabled]=\"false\">\r\n      <div fxLayout=\"row\">\r\n        <md-input-container fxFlex=\"100\">\r\n          <input type=\"text\" mdInput placeholder=\"Input\">\r\n        </md-input-container>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <md-input-container fxFlex=\"100\" class=\"mdTextAra\">\r\n          <textarea mdInput placeholder=\"Textarea\"></textarea>\r\n        </md-input-container>\r\n      </div>\r\n      <br><br><br>\r\n      <div fxLayout=\"row\">\r\n        <md-select placeholder=\"Provider Type\" fxFlexOffset=\"5\" fxFlex=\"45\">\r\n              <md-option value=\"0\">-- Select --</md-option>\r\n          </md-select>\r\n      </div>\r\n      <br><br><br>\r\n      <!-- <md-tab-group>\r\n        <md-tab label=\"Tab 1\">\r\n          <div fxLayout=\"row\">\r\n            <md-checkbox fxFlex=\"100\">Do you know IFSC Code</md-checkbox>  \r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <md-input-container fxFlex=\"100\">\r\n                <input type=\"text\" mdInput required placeholder=\"IFSC Code\">\r\n            </md-input-container>\r\n          </div>\r\n        </md-tab>\r\n        <md-tab label=\"Tab 2\">Content 2</md-tab>\r\n      </md-tab-group> -->\r\n      <br><br><br>\r\n      <md-progress-bar *ngIf=\"demoProgress\" mode=\"indeterminate\" style=\"margin-bottom: 5px;\"></md-progress-bar>\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex=\"100\" class=\"tab-header\">\r\n          <p>Specialtisation</p>  \r\n        </div> \r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex=\"12\" class=\"left\">\r\n          <ul>\r\n            <li (click)=\"specialities = 'specialities1'\">specialities1</li>\r\n            <li (click)=\"specialities = 'specialities2'\">specialities2</li>\r\n            <li (click)=\"specialities = 'specialities3'\">specialities3</li>\r\n            <li (click)=\"specialities = ''\">zzzzzz</li>\r\n          </ul>\r\n        </div>\r\n        <div  fxFlex=\"88\" class=\"right\">\r\n          <div [ngSwitch]=\"specialities\">\r\n            <div *ngSwitchCase=\"'specialities1'\">specialities1</div>\r\n            <div *ngSwitchCase=\"'specialities2'\">specialities2</div>\r\n            <div *ngSwitchCase=\"'specialities3'\">specialities3</div>\r\n            <div *ngSwitchDefault>zzzzzz</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br><br>\r\n      <!-- <a href=\"\" class=\"profile-pic\"> -->\r\n        <div class=\"profile-pic\">\r\n          <div class=\"upload-pic\">\r\n            <span><md-icon>file_upload</md-icon></span>\r\n            <span>Change Photo</span>\r\n          </div>\r\n        </div>\r\n      <!-- </a> -->\r\n    </fieldset>\r\n    <br><br><br>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div fxLayout=\"row\">\r\n    <div fxFlex=\"100\" class=\"_fxContainer container\">\r\n     <md-card>\r\n      <div fxFlex=\"69\" fxFlex.xs=\"100\" fxFlexOffset=\"1\"  class=\"left-card\">\r\n        <h2>Add new lead</h2>\r\n        <form #testing=\"ngForm\" (ngSubmit)=\"subFrms(user)\">\r\n        <div>\r\n          <md-input-container fxFlex=\"30\">\r\n            <input type=\"text\" mdInput placeholder=\"Type name here..\" [(ngModel)]=\"user.name\" name=\"name\" #name=\"ngModel\">\r\n          </md-input-container>\r\n        </div>\r\n        <br>\r\n        <div>\r\n          <md-select fxFlex=\"95\" required placeholder=\"Select account\" [(ngModel)]=\"user.accountType\" name=\"accountType\" #accountType=\"ngModel\">\r\n            <md-option [value]=\"1\">Saving Account</md-option>\r\n            <md-option [value]=\"2\">Personal Account</md-option>\r\n            <md-option [value]=\"3\">Home Safe Account</md-option>\r\n          </md-select>  \r\n        </div>\r\n        <br>\r\n        <div>\r\n           <md-input-container fxFlex=\"95\" class=\"example-full-width\">\r\n            <textarea mdInput required placeholder=\"Address\" [(ngModel)]=\"user.address\" name=\"address\" #address=\"ngModel\">1600 Amphitheatre Pkwy</textarea>\r\n          </md-input-container>\r\n        </div>\r\n        <br>\r\n        <div>\r\n          <md-input-container fxFlex=\"95\">\r\n            <input mdInput required placeholder=\"State\" [(ngModel)]=\"user.state\" [mdAutocomplete]=\"auto\" name=\"state\" #state=\"ngModel\" (keyup)=\"updateFilter($event)\">\r\n          </md-input-container>\r\n          <md-autocomplete #auto=\"mdAutocomplete\">\r\n             <md-option *ngFor=\"let state of states\" value=\"{{state.name}}\" (enter)=\"getVal()\">\r\n               {{ state.name }}\r\n             </md-option>\r\n          </md-autocomplete>\r\n        </div>\r\n\r\n        <div>\r\n          <button type=\"submit\" md-raised-button>Submit</button>\r\n        </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div fxFlex=\"29\" fxFlexOffset=\"1\" class=\"right-card\" fxShow fxHide.xs=\"true\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"card_r\">\r\n          <div fxLayoutAlign=\"space-around center\" fxFlex=\"20\" fxFlexOffset=\"40\" class=\"cp\">\r\n              <img src=\"assets/images/building.jpg\">\r\n          </div>\r\n      </div>\r\n      <div fxLayout=\"row\" class=\"card_r\">\r\n        <div fxFlex=\"100\" class=\"cp-para\">\r\n          <p>Company Information <br>&<br/> Personal Information</p>\r\n          <label>To add outlets, download the sample outlet excel file.</label>\r\n        </div>\r\n      </div><hr>\r\n   </div>\r\n      </md-card>\r\n    </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/providers/components/lead/addlead/addlead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddleadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddleadComponent = /** @class */ (function () {
    function AddleadComponent(snackBar) {
        this.snackBar = snackBar;
        this.user = {};
        this.states = [];
        this.temp = [];
        this.demoProgress = true;
    }
    AddleadComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    AddleadComponent.prototype.subFrms = function (user) {
        console.log(user);
    };
    AddleadComponent.prototype.getStates = function () {
        this.states = [
            { id: 1, name: 'Alabama' },
            { id: 2, name: 'Alaska' },
            { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' },
            { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' },
            { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' },
            { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' },
            { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' },
            { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }
        ];
        this.temp = this.states;
    };
    AddleadComponent.prototype.updateFilter = function (eve) {
        var val = eve.target.value.toLowerCase();
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.states = temp;
        console.log(this.states);
    };
    AddleadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addlead',
            template: __webpack_require__("../../../../../src/app/providers/components/lead/addlead/addlead.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/lead/addlead/addlead.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]) === "function" && _a || Object])
    ], AddleadComponent);
    return AddleadComponent;
    var _a;
}());

//# sourceMappingURL=addlead.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/location/location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Location</h3>\r\n<p>{{user | json}}</p>\r\n\r\n<form #location=\"ngForm\" (ngSubmit)=\"submitFrm()\">\r\n  <fieldset>\r\n  <p><input type=\"text\" placeholder=\"Latitute\" [ngClass]=\"{'isBorder': true}\" required [(ngModel)]=\"user.lat\" name=\"lat\" #lat=\"ngModel\"></p>\r\n  <p><input type=\"text\" placeholder=\"Longitude\" [(ngModel)]=\"user.lon\" name=\"lon\" #lon=\"ngModel\"></p>\r\n  <p><input type=\"checkbox\"> Lorem</p>\r\n  <p>\r\n    <button type=\"submit\" [hidden]=\"!location.form.valid\">Submit</button>\r\n  </p>\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/providers/components/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
        this.user = {};
    }
    LocationComponent.prototype.ngOnInit = function () { };
    // submit form 
    LocationComponent.prototype.submitFrm = function () {
        alert("location");
    };
    LocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-location',
            template: __webpack_require__("../../../../../src/app/providers/components/location/location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());

//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/mous/mous.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-overlay{\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 9999;\r\n    left: 0; top: 0;\r\n   \r\n}\r\nfieldset {\r\n    margin: 0px;\r\n    border: none;\r\n}\r\nfieldset p{\r\n    color:#acadb1;\r\n}\r\nfieldset md-icon{\r\n    vertical-align: middle;\r\n}\r\n.dropMous {\r\n    display: block;\r\n    list-style: none;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    padding: 0px;\r\n}\r\n.dropMous > li {\r\n    display: inline-block;\r\n    width: 48%;\r\n    margin-right: 1%;\r\n    margin-bottom: 1%;\r\n}\r\nul > li > div{\r\n    background: #e3e7f0;\r\n    border: 3px dotted #d2d2d2 !important;\r\n    padding: 24px;\r\n}\r\n.close {\r\n    float: right;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: red;\r\n    /* text-shadow: 0 1px 0 #fff; */\r\n    filter: alpha(opacity=20);\r\n    opacity: 1;\r\n}\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0;\r\n}\r\n.sr-only {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip: rect(0,0,0,0);\r\n    border: 0;\r\n}\r\n\r\n.mou-pdf{\r\n    background: #fff; \r\n    border: 1px solid #d2d2d2; \r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n}\r\n.mou-pdf img{\r\n    width: 38%;\r\n    height: auto;\r\n}\r\nmd-select {\r\n    padding-top: 22px !important;\r\n}\r\ntable{\r\n    border: transparent;\r\n}\r\nth{\r\n    padding: 10px;\r\n    font-weight: 400;\r\n    color: rgba(0,0,0,.87);\r\n   background: #e4ecf9 !important;\r\n    border-left: none;\r\n    border-top: 1px solid #d2e3f9;\r\n    border-bottom: 1px solid #d2e3f9;\r\n    border-right:none;\r\n}\r\nth:first-child{\r\n    border-left: 1px solid #d2e3f9;\r\n}\r\nth:last-child{\r\n    border-right: 1px solid #d2e3f9;\r\n}\r\ntd{\r\n    padding: 5px;\r\n    text-align: left;\r\n    border-left: transparent;\r\n    border-right: transparent;\r\n    border-bottom: 1px solid #d2d2d2;\r\n}\r\ntd:first-child{\r\n    border-left: none;\r\n}\r\ntd:last-child{\r\n    border-right:none;\r\n}\r\ntable tr:last-child td{\r\n    border-bottom:transparent;\r\n}\r\n.file-upload {\r\n\tposition: relative;\r\n    display: block;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.file-upload__label {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    border: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    line-height: 25px;\r\n    padding: 0px 10px;\r\n    border-radius: 2px;\r\n    background-color: #2296fc;\r\n    color: #fff;    \r\n}\r\n.file-upload__label:hover {\r\n     cursor: pointer;\r\n  }\r\n.file-upload__label > md-icon{\r\n    vertical-align: middle;\r\n    text-align: right;\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n}    \r\n.file-upload__input {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    /* font-size: 13px; */\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.dropContent{\r\n    border: 1px solid #d2d2d2;\r\n    /* padding: 7%; */\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n    height: auto;\r\n}\r\n.pdf{\r\n    position: relative\r\n}\r\n.pdf > span{\r\n    font-size: 13px;\r\n    color: #d30303;\r\n    -webkit-transform: rotate(90deg) translateX(35px);\r\n    transform: rotate(90deg) translateX(35px);\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 0;\r\n    right: -15px;\r\n}\r\n.file-upload > p > md-icon{\r\n    color:#d83636;\r\n    vertical-align: middle;\r\n    font-size: 18px;\r\n    line-height: 28px;\r\n    padding-left: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/mous/mous.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div style=\"position: relative;\">\r\n  <div class=\"form-control\" [ngClass]=\"{'active': isMouActiveForm}\">\r\n  <div [ngClass]=\"{'form-overlay': isMouOverlay}\">\r\n    <div [hidden]=\"isMouBtn\" style=\"position: absolute; right: 0; bottom: 0;\">\r\n      <button md-raised-button type=\"button\" class=\"primary\" (click)=\"edtFrm(mouInput)\">EDIT</button> \r\n    </div>\r\n  </div>\r\n \r\n<form #mous=\"ngForm\" (ngSubmit)=\"submitFrm(mouInput)\" (keydown.enter)=\"$event.preventDefault()\">\r\n  <fieldset  [disabled]=\"isMouFieldset\">\r\n    <p>MOU</p>\r\n\r\n    <div fxLayout=\"row\">\r\n        <div fxFlex=\"colFirst\">\r\n          <md-select fxFlex=\"95\" placeholder=\"MOU Type\" required [(ngModel)]=\"mouInput.mouTypeId\" name=\"mouTypeId\" (change)=\"getType(mouInput)\" #mouTypeId=\"ngModel\">\r\n            <md-option *ngFor=\"let mouType of mouTypes\" [value]=\"mouType.id\">\r\n              {{mouType.name}}\r\n            </md-option>\r\n          </md-select>\r\n           <md-error *ngIf=\"mouTypeId.errors && (mouTypeId.dirty || mouTypeId.touched)\">\r\n              <md-error>\r\n                  <span [hidden]=\"!mouTypeId.errors.required\">Select mou type</span>\r\n              </md-error>\r\n            </md-error>\r\n        </div>\r\n        <div fxFlex=\"colSecond\">\r\n          <md-input-container fxFlex=\"95\">\r\n            <input mdInput (focus)=\"startDate.open()\" (change)=\"alert(0)\"\r\n            [mdDatepicker]=\"startDate\" \r\n            placeholder=\"Start Date\" \r\n            required\r\n            (ngModelChange)=\"dosomething($event, 'startDat')\"\r\n            [max]=\"maxDate\"\r\n            [(ngModel)]=\"mouInput.validFromDate\" name=\"validFromDate\" #validFromDate=\"ngModel\">\r\n            <button type=\"button\" mdSuffix [mdDatepickerToggle]=\"startDate\"></button>\r\n          </md-input-container>\r\n          <md-datepicker  #startDate ></md-datepicker>\r\n        </div>\r\n        <div fxFlex=\"colThird\">\r\n            <md-input-container fxFlex=\"95\">\r\n              <input mdInput (focus)=\"endDate.open()\" \r\n              [mdDatepicker]=\"endDate\" \r\n              placeholder=\"End Date\" \r\n              required\r\n              (ngModelChange)=\"dosomething($event, 'endDate')\"\r\n              [min]=\"minDate\"\r\n              [(ngModel)]=\"mouInput.validToDate\" name=\"validToDate\" #validToDate=\"ngModel\">\r\n              <button type=\"button\" mdSuffix [mdDatepickerToggle]=\"endDate\"></button>\r\n            </md-input-container>\r\n            <md-datepicker  #endDate></md-datepicker>\r\n        </div>\r\n        <div fxFlex=\"25\" [hidden]=\"versionNo\">\r\n          <div >\r\n          <md-select fxFlex=\"100\" placeholder=\"Version No.\" (change)=\"getVersionId(mouInput['versionId'])\" [(ngModel)]=\"mouInput.versionId\" name=\"versionId\" #versionId=\"ngModel\">\r\n            <md-option *ngFor=\"let version of mouVersions\" [value]=\"version.id\">\r\n              {{version.version}}\r\n            </md-option>\r\n          </md-select>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"30\" class=\"pdf\" [hidden]=\"!mouInput.compDocUrl\">\r\n        <div class=\"mou-pdf\">\r\n          <a href=\"{{mouInput.compDocUrl}}\" target=\"_blank\"><img src=\"assets/images/Adobe_Acrobat_Logo.png\"></a>\r\n        </div>\r\n         <span *ngIf=\"versionId\">Version - {{pdfversion}}</span>\r\n        <!-- <p *ngIf=\"mouInput.documentUrl\">lksdjflksf</p> -->\r\n      </div>\r\n      <div fxFlex=\"fColsecond\">\r\n        <file-drop headertext=\"UPLOAD KYC DOCUMENTS\" (onFileDrop)=\"dropped($event)\"></file-drop>\r\n      </div>\r\n    </div>\r\n    <table width=\"100%\" border=\"1\" style=\"border-collapse: collapse;\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th *ngIf=\"completeSec === 1\">Start Page</th>\r\n          <th *ngIf=\"completeSec === 1\">End Page</th>\r\n          <th *ngIf=\"partialSec === 2\">Upload</th>\r\n          <th>Remarks</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let annexure of annexures; let i = index;\">\r\n          <td>{{annexure.name}}</td>\r\n\r\n          <td *ngIf=\"completeSec === 1\"> \r\n            <md-input-container>\r\n              <input mdInput type=\"text\" pattern=\"[0-9]{1,}\" (blur)=\"getAnnexure(annexure)\" placeholder=\"Start Page\" [(ngModel)]=\"annexure.startPage\" name=\"startPage{{i}}\" #startPage=\"ngModel\">\r\n               <md-error *ngIf=\"startPage.errors && (startPage.dirty || startPage.touched)\">\r\n                <md-error>\r\n                  <span [hidden]=\"!startPage.errors.pattern\">Enter digit Only</span>\r\n                </md-error>\r\n                </md-error>\r\n            </md-input-container></td>\r\n          <td *ngIf=\"completeSec === 1\"><md-input-container>\r\n              <input mdInput type=\"text\" pattern=\"[0-9]{1,}\" placeholder=\"End Page\" [(ngModel)]=\"annexure.endPage\" name=\"endPage{{i}}\" #endPage=\"ngModel\">\r\n               <md-error *ngIf=\"endPage.errors && (endPage.dirty || endPage.touched)\">\r\n                  <md-error>\r\n                    <span [hidden]=\"!endPage.errors.pattern\">Enter digit Only</span>\r\n                  </md-error>\r\n                </md-error>\r\n             </md-input-container></td>\r\n          <td *ngIf=\"partialSec === 2\" class=\"upload\">\r\n            <div fxLayout=\"row\" >\r\n              <div fxFlex=\"60\" class=\"file-upload\">\r\n                <span class=\"file-upload__label\" *ngIf=\"annexure.docUrl == '' || annexure.docUrl == undefined\">Upload <md-icon class=\"md-18\">file_upload</md-icon></span>\r\n                <input type=\"file\" class=\"file-upload__input\" *ngIf=\"annexure.docUrl == '' || annexure.docUrl == undefined\" (change)=\"uploadFile($event, annexure)\" accept=\".pdf\" >\r\n                <p *ngIf=\"annexure.docUrl\" style=\"margin: 0px; margin-top: 5px;\"> \r\n                 <span mdTooltip=\"{{annexure.docUrl}}\" [mdTooltipPosition]=\"position\" style=\"text-align: left; border: 1px solid #28a745; border-radius: 2px; margin-top: 4px;color: #333; padding: 3px 12px;font-size: 12px;\">\r\n                 <a href=\"{{annexure.docUrl}}\" target=\"_blank\"> {{annexure.docUrl | slice:0:10}}</a>\r\n                  </span><md-icon fxFlex=\"20\" (click)=\"removeFile(annexure)\">close</md-icon> </p>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td><md-input-container>\r\n            <input mdInput type=\"text\" placeholder=\"Remarks\" [(ngModel)]=\"annexure.remarks\" name=\"remarks{{i}}\" #remarks{{i}}=\"ngModel\">\r\n            </md-input-container></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </fieldset>\r\n  <div class=\"btn-group\">\r\n    <div [hidden]=\"isMouFieldset || !mous.form.valid || !mouInput.compDocUrl\">\r\n      <button md-raised-button type=\"submit\" class=\"primary\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/providers/components/mous/mous.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MousComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MousComponent = /** @class */ (function () {
    function MousComponent(snackBar, cdf) {
        this.snackBar = snackBar;
        this.cdf = cdf;
        this.mouTypes = [];
        this.annexures = [];
        this.mouFx = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getMouAnxrById = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mouVersions = [];
        this.mouInput = {};
        this.createAnnexureInput = [];
        this.files = [];
        this.position = 'above';
        // mouVersions = [];
        //maxDateVal:any = new Date().toLocaleDateString();
        this.maxDate = new Date();
    }
    MousComponent.prototype.ngOnInit = function () {
        this.completeSec = 1;
        this.mouInput['mouTypeId'] = '1';
        //moment(this.mouInput['mouStartDate'],"DD/MM/YYYY").format('MM/DD/YYYY');
        if (this.versionNo == true) {
            this.colFirst = 33;
            this.colSecond = 33;
            this.colThird = 33;
        }
        else {
            this.colFirst = 25;
            this.colSecond = 25;
            this.colThird = 25;
        }
        if (this.mouInput['compDocUrl'] == undefined) {
            this.fColsecond = 100;
        }
        else {
            this.fColsecond = 70;
        }
        // this.mouVersions = [
        //   {id: 1, value: 'version 1.01'},
        //   {id: 2, value: 'version 1.02'},
        //   {id: 3, value: 'version 1.03'}
        // ]
        this.mouInput['versionId'] = '1';
    };
    MousComponent.prototype.getAnnexure = function (annexureInput) {
        for (var i = 0; i < this.createAnnexureInput.length; i++) {
            if (this.createAnnexureInput[i]['id'] == annexureInput['id']) {
                return false;
            }
        }
        this.createAnnexureInput.push(annexureInput);
    };
    MousComponent.prototype.uploadFile = function (eve, annexure) {
        for (var i = 0; i < this.createAnnexureInput.length; i++) {
            if (this.createAnnexureInput[i]['id'] == annexure['id']) {
                return false;
            }
        }
        this.readPartialFile(eve.target, annexure);
    };
    MousComponent.prototype.readPartialFile = function (inputValue, annexure) {
        var _this = this;
        var file = inputValue.files[0];
        var partialReader = new FileReader();
        partialReader.onloadend = function (e) {
            var particalDoc = partialReader.result;
            annexure['docUrl'] = particalDoc.substring(particalDoc.indexOf(",") + 1);
            _this.createAnnexureInput.push(annexure);
            _this.createAnnexureInput;
            _this.annexures;
        };
        partialReader.readAsDataURL(file);
    };
    MousComponent.prototype.getType = function (eve) {
        this.mouInput['compDocUrl'] = '';
        this.mouInput['validFromDate'] = '';
        this.mouInput['validToDate'] = '';
        this.createAnnexureInput = [];
        for (var i = 0; i < this.annexures.length; i++) {
            this.annexures[i]['startPage'] = '';
            this.annexures[i]['endPage'] = '';
            this.annexures[i]['remarks'] = '';
            this.annexures[i]['docUrl'] = '';
        }
        var type = eve['mouTypeId'];
        switch (type) {
            case '1':
                this.completeSec = 1;
                this.partialSec = 0;
                break;
            case '2':
                this.partialSec = 2;
                this.completeSec = 0;
                break;
        }
    };
    MousComponent.prototype.submitFrm = function (mou) {
        mou['validFromDate'] = __WEBPACK_IMPORTED_MODULE_2_moment__(mou['validFromDate'], "DD/MM/YYYY").format('DD/MMM/YYYY');
        mou['validToDate'] = __WEBPACK_IMPORTED_MODULE_2_moment__(mou['validToDate'], "DD/MM/YYYY").format('DD/MMM/YYYY');
        mou = {
            annexures: this.createAnnexureInput,
            validfromdate: mou['validFromDate'],
            validtodate: mou['validToDate'],
            mouTypeId: mou['mouTypeId'],
            compDocUrl: mou['compDocUrl']
        };
        if (mou['mouTypeId'] == 1 || mou['mouTypeId'] == '1') {
            if (mou['compDocUrl'] == '') {
                console.log(mou['compDocUrl']);
                alert("sorry");
                return false;
            }
        }
        if (mou['mouTypeId'] == 2 || mou['mouTypeId'] == '2') {
            for (var i = 0; i < mou['annexures'].length; i++) {
                delete mou['annexures'][i]['startPage'];
                delete mou['annexures'][i]['endPage'];
                console.log(mou['annexures'][i]);
            }
        }
        mou['_type'] = false;
        this.mouFx.emit(mou);
    };
    MousComponent.prototype.edtFrm = function (eve) {
        eve['_type'] = true;
        this.mouFx.emit(eve);
    };
    MousComponent.prototype.dropped = function (eve) {
        var _this = this;
        this.files = eve.files;
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            file.fileEntry.file(function (info) {
                if (info.type == "application/pdf") {
                    _this.readAnxrFile(info);
                }
            });
        }
    };
    MousComponent.prototype.readAnxrFile = function (inputValue) {
        var _this = this;
        var file = inputValue;
        var anxrReader = new FileReader();
        anxrReader.onloadend = function (e) {
            var anxrFile = anxrReader.result;
            _this.mouInput['compDocUrl'] = anxrFile.substring(anxrFile.indexOf(",") + 1);
            console.log(_this.mouInput);
            console.log(anxrFile);
            _this.cdf.detectChanges();
            return false;
        };
        anxrReader.readAsDataURL(file);
    };
    MousComponent.prototype.dosomething = function (newDate, type) {
        if (type == 'startDat') {
            this.mouInput['validFromDate'] = __WEBPACK_IMPORTED_MODULE_2_moment__(newDate, "DD/MM/YYYY").format('MM/DD/YYYY');
            this.minDate = new Date(this.mouInput['validFromDate']);
            return false;
        }
        if (type == 'endDate') {
            this.mouInput['validToDate'] = __WEBPACK_IMPORTED_MODULE_2_moment__(newDate, "DD/MM/YYYY").format('MM/DD/YYYY');
            this.maxDate = new Date(this.mouInput['validToDate']);
            return false;
        }
    };
    MousComponent.prototype.removeFile = function (removeItem) {
        console.log(removeItem);
        var rmId = removeItem['id'];
        for (var i = 0; i < this.createAnnexureInput.length; i++) {
            var rmId_1 = Number(removeItem['id']);
            var oldId = Number(this.createAnnexureInput[i]['id']);
            if (rmId_1 == oldId) {
                this.createAnnexureInput.splice(i, 1);
                // removeItem['isRemove'] = 'true';
                //this.createAnnexureInput.push(removeItem);
                for (var j = 0; j < this.annexures.length; j++) {
                    if (this.annexures[j]['id'] == rmId_1) {
                        this.annexures[j]['docUrl'] = '';
                        this.annexures;
                    }
                }
                this.cdf.detectChanges();
                return false;
            }
        }
    };
    MousComponent.prototype.getVersionId = function (id) {
        this.getMouAnxrById.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MousComponent.prototype, "mouTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MousComponent.prototype, "annexures", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MousComponent.prototype, "isMouFieldset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MousComponent.prototype, "isMouOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MousComponent.prototype, "isMouBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MousComponent.prototype, "versionNo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MousComponent.prototype, "mouFx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MousComponent.prototype, "getMouAnxrById", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MousComponent.prototype, "mouVersions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MousComponent.prototype, "mouInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MousComponent.prototype, "pdfversion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MousComponent.prototype, "completeSec", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MousComponent.prototype, "partialSec", void 0);
    MousComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mous',
            template: __webpack_require__("../../../../../src/app/providers/components/mous/mous.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/mous/mous.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
    ], MousComponent);
    return MousComponent;
    var _a, _b;
}());

//# sourceMappingURL=mous.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/provideraside/provideraside.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{padding:0;}\r\n.left-card{border-right: 1px solid #d2d2d2;}\r\n.right-card {\r\n    border-left: none;  \r\n    padding-left: 10px;\r\n}\r\n/* .timeline{\r\n    position: relative;\r\n    margin: 20px;\r\n}\r\n.timeline .timeline-card {\r\n    position: relative;\r\n    margin: 40px 0;\r\n}\r\n.timeline .timeline-card:first-child {\r\n    margin-top: 0;\r\n}\r\n.timeline::before {\r\n    position: absolute;\r\n    top: 6px;\r\n    width: 1px;\r\n    height: 100%;\r\n    content: '';\r\n    background: gray;\r\n    left: 5px;\r\n}\r\n.timeline .timeline-card:first-child .timeline-icon {\r\n    top: 0;\r\n}\r\n.timeline .timeline-icon {\r\n    position: absolute;\r\n    top: 15px;\r\n    width: 12px;\r\n    height: 12px;\r\n    text-align: center;\r\n    left: 0;\r\n    border-radius: 50%;\r\n}\r\n.timeline .timeline-icon a:active{\r\n    background-color: #9e9e9e !important;\r\n    color: rgba(0, 0, 0, 0.87) !important;\r\n}\r\n.mat-teal {\r\n    background-color: #009688 !important;\r\n    color: white !important;\r\n}\r\n.mat-grey {\r\n    background-color: #9e9e9e !important;\r\n    color: rgba(0, 0, 0, 0.87) !important;\r\n}\r\n.mat-purple {\r\n    background-color: #9c27b0 !important;\r\n    color: rgba(255, 255, 255, 0.87) !important;\r\n}\r\n.mat-green {\r\n    background-color: #4caf50 !important;\r\n    color: white !important;\r\n}\r\n.timeline .timeline-icon::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 2px;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background: white;\r\n}\r\n.timeline .timeline-card::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n.timeline .timeline-content > .mat-card::after {\r\n    position: absolute;\r\n    top: 12px;\r\n    width: 0;\r\n    height: 0;\r\n    content: ' ';\r\n    pointer-events: none;\r\n    border-width: 9px;\r\n    border-style: solid;\r\n    right: 100%;\r\n    border-color: transparent white transparent transparent;\r\n}\r\n.timeline .timeline-content {\r\n    position: relative;\r\n    margin-left: 30px;\r\n}\r\n.timeline .timeline-content > .mat-card {\r\n    /* float: left;\r\n    display: inline-block;\r\n    margin: 0;\r\n    box-shadow: none;\r\n    padding: 12px;\r\n}\r\n.timeline .timeline-content .timeline-date {\r\n    display: inline-block;\r\n    padding: 4px 0 10px;\r\n}\r\n@media (min-width: 1280px){\r\n.timeline.stacked .timeline-content > .mat-card {\r\n    margin-bottom: 0;\r\n}\r\n.timeline.stacked .timeline-date {\r\n    position: relative;\r\n    top: 0;\r\n    width: 100%;\r\n    left: auto;\r\n}\r\n} */\r\n.edit-btn.mat-raised-button{\r\n    margin-top: 12px;\r\n}\r\n._fxContainer {\r\n    position: relative;\r\n    height: auto;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    padding: 10px 10px 0 0;\r\n    /* min-height: 720px; */\r\n    margin-bottom: 20px;\r\n}\r\nul {border-left:1px solid #d4d4d4}\r\nul > h4 {position: relative}\r\nul > h4 img {\r\n    position: absolute; \r\n    width: 12%;\r\n    border-radius: 18px;\r\n    left: -55px;\r\n}\r\nul > li {\r\n    position: relative;\r\n    display: block;\r\n    padding: 5px;\r\n}\r\nul > li > a{\r\n    font-size:12px;\r\n    color:#000;\r\n    font-weight: 400;\r\n}\r\n\r\nul > li span {\r\n    position: absolute;\r\n    border: 2px solid #adadad;\r\n    width: 10px;\r\n    border-radius: 12px;\r\n    height: 10px;\r\n    left: -47px;\r\n    background: #fff;\r\n}\r\nul > li > a.active,\r\nul > li > a.active span {\r\n    border: 2px solid #1f89ff;    background: #1f89ff;\r\n}\r\nul > li > a.active {\r\n    border: none;\r\n    color: #1f89ff;    background:none;\r\nfont-weight:600;}\r\nul > li div p span {\r\n    position: absolute;\r\n    border: 2px solid #adadad;\r\n    width: 10px;\r\n    border-radius: 12px;\r\n    height: 10px;\r\n    left: 0px;\r\n    background: #fff;\r\n}\r\nul > li div p > a.active span {\r\n     border: 2px solid #1f89ff;    background: #1f89ff;\r\n}\r\nul > li > div p > a.active label{\r\n    border: none;\r\n    color: #1f89ff;    background:none;\r\n}\r\nul > li div p label{\r\n    margin-left:30px;\r\n    font-size: 14px;\r\n    color:#000;\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\nul > li > div {\r\n    border-top: 1px solid #d2d2d2;\r\n    border-bottom: 1px solid #d2d2d2;\r\n    margin-top: 10px;\r\n}\r\nhr{    width: 10%;\r\n    border-bottom: 5px solid #a4a2a2;\r\n    border-radius: 7px;    margin-top: 25px;\r\n    margin-bottom: 25px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/provideraside/provideraside.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div fxLayout=\"row\">\r\n      <div class=\"profileCard\" fxFlex=\"100\">\r\n        <div fxFlex=\"74\" fxFlexOffset=\"1\" class=\"left-card\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <div fxFlex=\"24\" fxFlexOffset=\"1\" class=\"right-card\" fxShow fxHide.xs=\"true\" >\r\n          <!-- <div class=\"timeline\">\r\n            <div class=\"timeline-card\">\r\n              <div class=\"timeline-icon mat-grey\"></div>\r\n              <section class=\"timeline-content\">\r\n                <md-card>\r\n                  <md-card-content>\r\n                    <h4>98.4 Pharmacy</h4>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </section>\r\n            </div>\r\n            <div class=\"timeline-card\">\r\n              <div class=\"timeline-icon mat-green\"></div>\r\n              <section class=\"timeline-content\">\r\n                <md-card>\r\n                  <md-card-content>\r\n                    <h4><a routerLink=\"companyinfo\"  routerLinkActive='mat-green'>COMPANY &amp; PERSONAL INFORMATION</a></h4>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </section>\r\n            </div>\r\n            <div class=\"timeline-card\">\r\n              <div class=\"timeline-icon mat-grey\"></div>\r\n              <section class=\"timeline-content\">\r\n                <md-card>\r\n                  <md-card-content>\r\n                    <h4><a routerLink=\"kycandmou\" routerLinkActive='mat-green'>KYC AND MOU</a></h4>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </section>\r\n            </div>\r\n          </div> -->\r\n           <ul>\r\n            <h4><img src=\"assets/images/logo.jpg\">98.4 Pharmacy</h4>\r\n            <li><a routerLink=\"companyinfo\" routerLinkActive=\"active\"><span></span> COMPANY &amp; PERSONAL INFORMATION</a></li>\r\n            <li><a routerLink=\"kycandmou\" routerLinkActive=\"active\"><span></span> KYC AND MOU</a></li>\r\n            <li><a routerLink=\"addoutlet\" routerLinkActive=\"active\"><span></span> OUTLETS (30)</a>\r\n              <div>\r\n                <div slimScroll [options]=\"opts\" style=\"height: 110px; width: 200px;\">\r\n                  <p><a routerLink=\"companyinfo\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n                  <p><a routerLink=\"kycandmou\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n                  <p><a routerLink=\"addoutlet\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n                  <p><a routerLink=\"companyinfo\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n                  <p><a routerLink=\"kycandmou\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n                  <p><a routerLink=\"companyinfo\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n                  <p><a routerLink=\"companyinfo\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n                  <p><a routerLink=\"companyinfo\" routerLinkActive=\"active\"><span></span><label>Name of the outlet</label></a></p>\r\n              </div>\r\n              </div>\r\n            </li>\r\n          </ul> \r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/providers/components/provideraside/provideraside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderasideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProviderasideComponent = /** @class */ (function () {
    function ProviderasideComponent() {
    }
    ProviderasideComponent.prototype.ngOnInit = function () {
        this.opts = {
            position: 'right',
            barBackground: '#000000',
            gridBackground: 'blue',
            gridWidth: '0',
            barWidth: '6',
            barOpacity: '0.5'
        };
    };
    ProviderasideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-provideraside',
            template: __webpack_require__("../../../../../src/app/providers/components/provideraside/provideraside.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/provideraside/provideraside.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProviderasideComponent);
    return ProviderasideComponent;
}());

//# sourceMappingURL=provideraside.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/providerbasicinfo/providerbasicinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* input, textarea {\r\n    border: 1px solid gray;\r\n    margin: 0px 20px;\r\n    outline: none;\r\n    color: black;\r\n    background:  none;\r\n}  */\r\n.form-control{\r\n    display: block;\r\n    position: relative;\r\n    z-index: 11;\r\n    padding: 24px;\r\n}\r\n\r\n.form-control.active{\r\n    border:1px solid #00b1ff;\r\n    \r\n}\r\nbutton {margin-left: 20px;}\r\n\r\ninput:disabled,\r\ntextarea:disabled {\r\n    border: none;\r\n    resize:  none;\r\n}\r\n/* .basicInfo{\r\n        margin-bottom: -15px;\r\n} */\r\nfieldset {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    border: none;\r\n}\r\n.profile-pic{\r\n    width: /*153px*/85%;\r\n    height: /*153px*/118px;\r\n    border: 2px solid #898989;\r\n    background: #e3e8ee;\r\n    margin-bottom: 24px;\r\n}\r\n.btn-group{\r\n    position: absolute;\r\n    right:0;\r\n    bottom: 0;\r\n    /* top: 585px;\r\n    left: 426px; */\r\n}\r\n\r\n.form-overlay{\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 9999;\r\n    left: 0; top: 0;\r\n   \r\n}\r\n\r\n/* google map */\r\nagm-map {\r\n  height: 188px;\r\n}\r\n.btn-group p{\r\n    display: block;\r\n    /* -webkit-margin-before: 0 !important; */\r\n    -webkit-margin-after:0 !important;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n}\r\np{\r\n    display: block;\r\n    /* -webkit-margin-before: 0 !important; */\r\n    -webkit-margin-after:0 !important;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n}\r\n md-select {\r\n    padding-top: 22px !important;\r\n} \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/providerbasicinfo/providerbasicinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- // provider basic informtaion -->\r\n<div class=\"form-control\" [ngClass]=\"{'active': isBasicInfoActiveForm}\">\r\n  <div [ngClass]=\"{'form-overlay': isBasicInfoFormoOverlay}\">\r\n    <div [hidden]=\"isBasicButton\" style=\"position: absolute; right: 0; bottom: 0;\">\r\n      <button md-raised-button type=\"button\" class=\"primary\" (click)=\"edtFrm(basicInfoInput)\">EDIT</button>\r\n    </div>\r\n  </div>\r\n  <md-progress-bar *ngIf=\"basicInfoProgress\" mode=\"indeterminate\" style=\"margin-bottom: 5px;\"></md-progress-bar>\r\n\r\n  <form #basicForm=\"ngForm\" (ngSubmit)=\"submitBasicFrm(basicInfoInput)\">\r\n    <fieldset [disabled]=\"isBasicInfoFieldset\">\r\n      <div data-attr=\"basicInfo\">\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"44\">\r\n            <div class=\"profile-pic\" style=\"overflow: hidden;\">\r\n              <image-upload [max]=\"1\" [preview]=\"true\" [dropBoxMessage]=\"''\" [buttonCaption]=\"'Upload Image'\" [extensions]=\"['image/*']\" (onFileUploadFinish)=\"imageUploaded($event)\">\r\n             </image-upload>\r\n              <div *ngIf=\"profilePix\">\r\n                <!--<i (click)=\"removeImg()\" style=\"color:red; margin-left: 20px; position: absolute; z-index: 999;\">remove</i>-->\r\n                <img [src]=\"profilePix\" alt=\"\" style=\"width:100%; height: auto; margin-top: -14px;\">\r\n              </div>\r\n            </div>\r\n             \r\n             <!--<image-upload [max]=\"1\" [preview]=\"false\" [dropBoxMessage]=\"''\" [buttonCaption]=\"'Upload Image'\" [extensions]=\"['image/*']\" (onFileUploadFinish)=\"imageUploaded($event)\">\r\n             </image-upload>-->\r\n             <!--<div>d</div>-->\r\n              <!--<div *ngIf=\"profilePix\">\r\n                <i (click)=\"removeImg()\">x</i>\r\n                <img [src]=\"profilePix\" alt=\"\" height=\"100\" width=\"100\">\r\n              </div>-->\r\n          </div>\r\n          <div fxFlex=\"56\">\r\n\r\n            <div fxLayout=\"row\">\r\n              <md-input-container fxFlex=\"100\">\r\n                <input type=\"text\" mdInput (keydown.enter)=\"$event.preventDefault()\" required placeholder=\"Company Name\" [(ngModel)]=\"basicInfoInput.name\" name=\"name\" #name=\"ngModel\">\r\n                <md-error *ngIf=\"name.errors && (name.dirty || name.touched)\">\r\n                    <md-error>\r\n                        <span [hidden]=\"!name.errors.required\">Enter company name</span>\r\n                    </md-error>\r\n                  </md-error>\r\n              </md-input-container>\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <md-input-container fxFlex=\"100\" class=\"mdTextAra\">\r\n                <textarea mdInput placeholder=\"Address\" required [(ngModel)]=\"basicInfoInput.regdAddress\" name=\"regdAddress\" #regdAddress=\"ngModel\">1600 Amphitheatre Pkwy</textarea>\r\n                <md-error *ngIf=\"regdAddress.errors && (regdAddress.dirty || regdAddress.touched)\">\r\n                    <md-error>\r\n                        <span [hidden]=\"!regdAddress.errors.required\">Enter Address</span>\r\n                    </md-error>\r\n                  </md-error>\r\n              </md-input-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n         <div fxLayout=\"row\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input type=\"text\" (keydown.enter)=\"$event.preventDefault()\" mdInput required placeholder=\"Commercial Name\" [(ngModel)]=\"basicInfoInput.regdName\" name=\"regdName\" #regdName=\"ngModel\">\r\n            <md-error *ngIf=\"regdName.errors && (regdName.dirty || regdName.touched)\">\r\n                <md-error>\r\n                    <span [hidden]=\"!regdName.errors.required\">Enter commercial name</span>\r\n                </md-error>\r\n              </md-error>\r\n          </md-input-container>\r\n          <md-select required placeholder=\"Provider Type\" fxFlexOffset=\"5\" fxFlex=\"45\" [(ngModel)]=\"basicInfoInput.providerTypeId\" name=\"providerTypeId\"  #providerTypeId=\"ngModel\">\r\n             <md-option *ngFor=\"let providerType of providerTypes\" value=\"{{providerType.id}}\">{{providerType.Name}}</md-option>\r\n          </md-select>\r\n          <div>\r\n          <md-error *ngIf=\"providerTypeId.errors && (providerTypeId.dirty || providerTypeId.touched)\">\r\n              <!--<md-error>\r\n                  <span [hidden]=\"!providerType.errors.required\">Select provider type</span>\r\n              </md-error>-->\r\n            </md-error>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input type=\"text\" (keydown.enter)=\"$event.preventDefault()\" required pattern=\"[0-9]{1,}\" mdInput placeholder=\"Total Outlets\" [(ngModel)]=\"basicInfoInput.totalOutlets\" name=\"totalOutlets\" #totalOutlets=\"ngModel\">\r\n            <md-error *ngIf=\"totalOutlets.errors && (totalOutlets.dirty || totalOutlets.touched)\">\r\n                <md-error>\r\n                    <span [hidden]=\"!totalOutlets.errors.required\">Enter outlet/outlets</span>\r\n                    <span [hidden]=\"!totalOutlets.errors.pattern\">Enter digit only.</span>\r\n                </md-error>\r\n              </md-error>\r\n          </md-input-container>\r\n          <md-input-container fxFlex=\"45\" fxFlexOffset=\"5\">\r\n            <input type=\"text\" (keydown.enter)=\"$event.preventDefault()\" mdInput  required placeholder=\"Website URL\" [(ngModel)]=\"basicInfoInput.webLink\" pattern=\"^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,6}$\" name=\"webLink\" #webLink=\"ngModel\">\r\n            <md-error *ngIf=\"webLink.errors && (webLink.dirty || webLink.touched)\">\r\n              <md-error>\r\n                  <span [hidden]=\"!webLink.errors.required\">Enter url</span>\r\n                <span [hidden]=\"!webLink.errors.pattern\">Invalid url</span>\r\n              </md-error>\r\n            </md-error>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"row\">\r\n              <md-input-container fxFlex=\"50\">\r\n                <input type=\"text\" (keydown.enter)=\"$event.preventDefault()\" mdInput placeholder=\"Search Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search [formControl]=\"searchControl\">\r\n              </md-input-container>\r\n           \r\n              <md-input-container fxFlex=\"45\" fxFlexOffset=\"5\">\r\n                <input type=\"text\" (keydown.enter)=\"$event.preventDefault()\" mdInput placeholder=\"Lattitude, Longitutde\" [(ngModel)]=\"basicInfoInput.latlon\" name=\"latlon\" #latlon=\"ngModel\" [readonly]=\"isReadonly\"> \r\n               \r\n              </md-input-container>\r\n               <input type=\"hidden\" [(ngModel)]=\"latitude\" name=\"latitude\">\r\n               <input type=\"hidden\" [(ngModel)]=\"longitude\" name=\"longitude\">\r\n            </div>\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"50\">\r\n            <div fxLayout=\"row\">\r\n              <md-input-container fxFlex=\"100\">\r\n                <input type=\"text\" (keydown.enter)=\"$event.preventDefault()\" mdInput placeholder=\"State\" [(ngModel)]=\"basicInfoInput.state\" name=\"state\" #state=\"ngModel\" [readonly]=\"isReadonly\">\r\n              </md-input-container>\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <md-input-container fxFlex=\"100\">\r\n                <input type=\"text\" mdInput (keydown.enter)=\"$event.preventDefault()\" placeholder=\"City\" [(ngModel)]=\"basicInfoInput.city\" name=\"city\" #city=\"ngModel\" [readonly]=\"isReadonly\">\r\n              </md-input-container>\r\n            </div>            \r\n            <div fxLayout=\"row\">\r\n              <md-input-container fxFlex=\"100\">\r\n                <input type=\"text\" (keydown.enter)=\"$event.preventDefault()\" mdInput placeholder=\"Pincode\" [readonly]=\"isReadonly\" [(ngModel)]=\"basicInfoInput.pincode\" name=\"pincode\" #pincode=\"ngModel\">\r\n              </md-input-container>\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"45\" fxFlexOffset=\"5\">\r\n            \r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"100\" style=\"background: #ccc; color: white;height: 125px;\">\r\n                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" *ngIf=\"!latitude == 0 && !longitude == 0\">\r\n                  <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                </agm-map>\r\n              </div>\r\n            </div>\r\n        </div> \r\n      </div>\r\n      <div class=\"row\">\r\n          <input type=\"hidden\" [(ngModel)]=\"basicInfoInput.id\" name=\"id\" #id=\"ngModel\">\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n    <div class=\"btn-group\">\r\n        <div [hidden]=\"isBasicInfoFieldset || isBasicInfoFormoOverlay || !basicForm.form.valid\">\r\n          <button md-raised-button type=\"submit\" class=\"primary\">{{ basicInfoBtnText }}</button>\r\n        </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/providers/components/providerbasicinfo/providerbasicinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderbasicinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProviderbasicinfoComponent = /** @class */ (function () {
    function ProviderbasicinfoComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.isReadonly = true;
        this.basicInfoFx = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editFirm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProviderbasicinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editFirm.emit(false);
        __WEBPACK_IMPORTED_MODULE_3_moment__().format('DD/MMM/YYYY');
        this.zoom = 4;
        // user input
        this.basicInfoInput['latlon'] = this.latitude + ',' + this.longitude;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderbasicinfoComponent.prototype, "isBasicInfoActiveForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderbasicinfoComponent.prototype, "isBasicInfoFormoOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProviderbasicinfoComponent.prototype, "isBasicButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderbasicinfoComponent.prototype, "isBasicInfoFieldset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProviderbasicinfoComponent.prototype, "basicInfoFx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProviderbasicinfoComponent.prototype, "editFirm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderbasicinfoComponent.prototype, "basicInfoProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProviderbasicinfoComponent.prototype, "basicInfoBtnText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProviderbasicinfoComponent.prototype, "basicInfoInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProviderbasicinfoComponent.prototype, "providerTypes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProviderbasicinfoComponent.prototype, "latitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProviderbasicinfoComponent.prototype, "longitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProviderbasicinfoComponent.prototype, "profilePix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ProviderbasicinfoComponent.prototype, "searchElementRef", void 0);
    ProviderbasicinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-providerbasicinfo',
            template: __webpack_require__("../../../../../src/app/providers/components/providerbasicinfo/providerbasicinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/providerbasicinfo/providerbasicinfo.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
    ], ProviderbasicinfoComponent);
    return ProviderbasicinfoComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=providerbasicinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/providercontact/providercontact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* input, textarea {\r\n    border: 1px solid gray;\r\n    margin: 0px 20px;\r\n    outline: none;\r\n    color: black;\r\n    background:  none;\r\n} */\r\nbutton {margin-left: 20px;}\r\n\r\ninput:disabled,\r\ntextarea:disabled {\r\n    border: none;\r\n    resize:  none;\r\n}\r\n\r\n.form-control{\r\n    display: block;\r\n    position: relative;\r\n    z-index: 11;\r\n    padding: 24px;\r\n}\r\n\r\n.form-control.active{\r\n    border:1px solid #00b1ff;\r\n    \r\n}\r\n\r\n\r\n/* .basicInfo{\r\n        margin-bottom: -15px;\r\n} */\r\nfieldset {\r\n     /* margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    border: 1px solid #00b1ff;  \r\n    margin-top: 0px; \r\n      padding-left: 65px;  \r\n     margin-left: 40px; */\r\n    /* padding: 24px; */\r\n    /* margin-right: 40px;  */\r\n    padding: 0px;\r\n    margin: 0px;\r\n    border: none;\r\n}\r\n\r\n.btn-group{\r\n    position: absolute;\r\n    right:0;\r\n    bottom: 0;\r\n    /* top: 585px;\r\n    left: 426px; */\r\n}\r\n\r\n.form-overlay{\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 9999;\r\n    left: 0; top: 0;\r\n   \r\n}\r\n.mat-tab-group p{\r\n    color: #676767;\r\n    padding-left: 5%;\r\n}\r\n p{\r\n     -webkit-margin-before: 0 !important; \r\n    -webkit-margin-after:0 !important;\r\n    margin: 0px;\r\n}\r\nhr{   \r\n    width: 10%;\r\n    border-bottom: 5px solid #a4a2a2;\r\n    border-radius: 7px;    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n.tab-body{\r\n        border: 1px solid #d2d2d2;\r\n    border-top: none;\r\n}\r\nul{\r\n    list-style: none;\r\n    -webkit-padding-start: 0px;\r\n    -webkit-margin-before: 0em;\r\n    -webkit-margin-after: 0em;\r\n}\r\ndiv > ul > li{\r\n    padding: 15px;\r\n    border: 1px solid #d2d2d2;\r\n    -webkit-padding-start: 0;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\ndiv > ul > li:active{\r\n    background:rgba(158, 163, 195, 0.3);\r\n}\r\ndiv > ul > li:last-child{\r\n    border-left: none;\r\n}\r\n.mat-icon{\r\n    vertical-align: text-bottom;\r\n        color: #898484;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/providercontact/providercontact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- // provider Signatory and contact -->\r\n<div class=\"form-control\" [ngClass]=\"{'active': isContactActiveBorder}\">\r\n<div fxLayout=\"row\">\r\n  <div fxFlex=\"100\" class=\"left\">\r\n    <ul>\r\n      <li fxFlex=\"50\" (click)=\"contacts = ''\"><md-icon>person</md-icon> Signatory</li>\r\n      \r\n      <li fxFlex=\"50\" (click)=\"contacts = 'contact'\"><md-icon>person</md-icon> Contact</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div fxLayout=\"row\">     \r\n        <div  fxFlex=\"100\" class=\"tab-body\">\r\n          <div [ngSwitch]=\"contacts\">\r\n            <div *ngSwitchDefault ><div style=\"display: block; position: relative\">\r\n              <div [ngClass]=\"{'form-overlay': isSginatoryFormOverlay}\">\r\n              <div style=\"position: absolute; bottom: 0; right: 0;z-index: 9999;\" [hidden]=\"isSignatoryButton\">\r\n                <button md-raised-button type=\"button\" class=\"primary\" (click)=\"editFrm('signatory')\">EDIT</button>\r\n              </div>\r\n            </div>\r\n            \r\n            <md-progress-bar *ngIf=\"signatoryProgress\" mode=\"indeterminate\" style=\"margin-bottom: 5px;\"></md-progress-bar>\r\n\r\n            <div style=\"padding:14px;font-weight: 500;\">Authorised Signatory</div>\r\n\r\n  <div [options]=\"tabOne\" slimScroll style=\"height: 380px; width:100%; background: transparent;\">\r\n    <div *ngFor=\"let signatory of signatoryInput; let i = index; let last = last;\">\r\n                  <form #signatoryFrm=\"ngForm\" (ngSubmit)=\"SubmitSignatoryFrm(signatory)\" (keydown.enter)=\"$event.preventDefault()\">\r\n                     <fieldset [disabled]=\"isSignatoryFieldset\">\r\n                       <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                          <md-input-container fxFlex=\"90\">\r\n                            <input type=\"text\" mdInput placeholder=\"Name\" required [(ngModel)]=\"signatory.name\" name=\"name{{i}}\" #name=\"ngModel\">\r\n                            <md-error *ngIf=\"name.errors && (name.dirty || name.touched)\">\r\n                              <md-error>\r\n                                <span [hidden]=\"!name.errors.required\">Enter name</span>\r\n                              </md-error>\r\n                            </md-error>\r\n                          </md-input-container>\r\n                        </div>\r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                        <md-input-container fxFlex=\"90\">\r\n                          <input type=\"text\" mdInput required placeholder=\"Designation\" [(ngModel)]=\"signatory.designation\" name=\"designation{{i}}\" #designation=\"ngModel\">\r\n                          <md-error *ngIf=\"designation.errors && (designation.dirty || designation.touched)\">\r\n                              <md-error>\r\n                                <span [hidden]=\"!designation.errors.required\">Enter designation</span>\r\n                              </md-error>\r\n                            </md-error>\r\n                        </md-input-container>\r\n                      </div>\r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                        <md-input-container fxFlex=\"90\">\r\n                          <input type=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" mdInput placeholder=\"Email\" [(ngModel)]=\"signatory.email\" name=\"email{{i}}\" #email=\"ngModel\">\r\n                          <md-error *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n                              <md-error>\r\n                                <span [hidden]=\"!email.errors.required\">Enter valid email</span>\r\n                                <span [hidden]=\"!email.errors.pattern\">Invalid email</span>\r\n                              </md-error>\r\n                            </md-error>\r\n                        </md-input-container>\r\n                      </div>\r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n                        <md-input-container fxFlex=\"90\">\r\n                          <input type=\"text\" mdInput required pattern=\"[0-9]{10,10}\" placeholder=\"Mobile\" [(ngModel)]=\"signatory.mobile\" name=\"mobile{{i}}\" #mobile=\"ngModel\">\r\n                          <md-error *ngIf=\"mobile.errors && (mobile.dirty || mobile.touched)\">\r\n                              <md-error>\r\n                                <span [hidden]=\"!mobile.errors.required\">Enter mobile number</span>\r\n                                <span [hidden]=\"!mobile.errors.pattern\">Enter valid mobile number</span>\r\n                              </md-error>\r\n                            </md-error>\r\n                        </md-input-container>\r\n                      </div>\r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                        <md-input-container fxFlex=\"90\">\r\n                          <input type=\"text\" mdInput placeholder=\"Landline\" [(ngModel)]=\"signatory.landline\" name=\"landline{{i}}\" #landline{{i}}=\"ngModel\">\r\n                        </md-input-container>\r\n                      </div>\r\n                         <div [hidden]=\"isSignatoryFieldset || isSginatoryFormOverlay || !signatoryFrm.form.valid\">\r\n                           <button md-raised-button type=\"submit\" class=\"primary\">{{ signatoryBtnText }}</button>\r\n                        </div> \r\n                        <hr *ngIf=\"signatoryInput.length != 1\" [hidden]=\"last\">\r\n                     </fieldset>\r\n                  </form>\r\n                </div>\r\n  </div>\r\n</div>\r\n</div>\r\n            \r\n            <div *ngSwitchCase=\"'contact'\">  \r\n              <div style=\"display: block; position: relative\">\r\n              <div [ngClass]=\"{'form-overlay': isContactFormOverlay}\">\r\n              <div style=\"position: absolute; bottom: 0; right: 0;z-index: 9999;\" [hidden]=\"isContactButton\">\r\n                <button md-raised-button type=\"button\" class=\"primary\" (click)=\"editFrm('contact')\">EDIT</button>\r\n              </div>\r\n            </div>\r\n\r\n            <md-progress-bar *ngIf=\"contactProgress\" mode=\"indeterminate\" style=\"margin-bottom: 5px;\"></md-progress-bar>\r\n\r\n            <div style=\"padding:14px;font-weight: 500;\">Contact <md-icon *ngIf=\"isContactButton\" style=\"float:right; color: #2296fc; cursor: pointer\" (click)=\"addRec('contact')\">add</md-icon></div>\r\n\r\n              <div [options]=\"tabTwo\" slimScroll style=\"height: 380px; width: 100%; background: transparent;\">\r\n   <div *ngFor=\"let userContact of contactInput; let i = index; let last = last;\">\r\n                \r\n                <form #contact=\"ngForm\" (ngSubmit)=\"submitContactFrm(userContact)\" (keydown.enter)=\"$event.preventDefault()\">\r\n                  <fieldset [disabled]=\"isContactFieldset\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                          <md-input-container fxFlex=\"90\">\r\n                            <input type=\"text\" required mdInput placeholder=\"Name\" [(ngModel)]=\"userContact.name\" name=\"name{{i}}\" #name=\"ngModel\">\r\n                             <md-error *ngIf=\"name.errors && (name.dirty || name.touched)\">\r\n                                <md-error>\r\n                                  <span [hidden]=\"!name.errors.required\">Enter name</span>\r\n                                </md-error>\r\n                              </md-error>\r\n                          </md-input-container>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                          <md-input-container fxFlex=\"90\">\r\n                            <input type=\"text\" mdInput required placeholder=\"Designation\" [(ngModel)]=\"userContact.designation\" name=\"designation{{i}}\" #designation=\"ngModel\">\r\n                            <md-error *ngIf=\"designation.errors && (designation.dirty || designation.touched)\">\r\n                              <md-error>\r\n                                <span [hidden]=\"!designation.errors.required\">Enter Designation</span>\r\n                              </md-error>\r\n                            </md-error>\r\n                          </md-input-container>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                          <md-input-container fxFlex=\"90\">\r\n                            <input type=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" mdInput placeholder=\"Email\" [(ngModel)]=\"userContact.email\" name=\"email{{i}}\" #email=\"ngModel\">\r\n                            <md-error *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n                              <md-error>\r\n                                <span [hidden]=\"!email.errors.required\">Enter valid email</span>\r\n                                <span [hidden]=\"!email.errors.pattern\">Invalid email</span>\r\n                              </md-error>\r\n                            </md-error>\r\n                          </md-input-container>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n                          <md-input-container fxFlex=\"90\">\r\n                            <input type=\"text\" mdInput required pattern=\"[0-9]{10,10}\" placeholder=\"Mobile\" [(ngModel)]=\"userContact.mobile\" name=\"mobile{{i}}\" #mobile=\"ngModel\">\r\n                             <md-error *ngIf=\"mobile.errors && (mobile.dirty || mobile.touched)\">\r\n                              <md-error>\r\n                                <span [hidden]=\"!mobile.errors.required\">Enter mobile number</span>\r\n                                <span [hidden]=\"!mobile.errors.pattern\">Enter valid mobile number</span>\r\n                              </md-error>\r\n                            </md-error>\r\n                          </md-input-container>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                          <md-input-container fxFlex=\"90\">\r\n                            <input type=\"text\" mdInput placeholder=\"Landline\" [(ngModel)]=\"userContact.landline\" name=\"landline{{i}}\" #landline{{i}}=\"ngModel\">\r\n                          </md-input-container>\r\n                        </div>\r\n                     <div [hidden]=\"isContactFieldset || isContactFormOverlay || !contact.form.valid\">\r\n                       <button md-raised-button type=\"submit\" class=\"primary\">{{ contactBtnText }}</button>\r\n                    </div> \r\n                    <hr *ngIf=\"contactInput.length != 1\" [hidden]=\"last\">\r\n                    \r\n                  </fieldset>\r\n                </form>\r\n              </div>\r\n  </div>\r\n          </div>\r\n</div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/providers/components/providercontact/providercontact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidercontactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProvidercontactComponent = /** @class */ (function () {
    function ProvidercontactComponent() {
        this.signatoryNcontactFx = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "isSignatoryFieldset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "isContactFieldset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "isSignatoryButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "isContactButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "isSginatoryFormOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "isContactFormOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProvidercontactComponent.prototype, "contactInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProvidercontactComponent.prototype, "signatoryInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProvidercontactComponent.prototype, "tabIndx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProvidercontactComponent.prototype, "signatoryNcontactFx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "signatoryProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProvidercontactComponent.prototype, "contactProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProvidercontactComponent.prototype, "signatoryBtnText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProvidercontactComponent.prototype, "contactBtnText", void 0);
    ProvidercontactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-providercontact',
            template: __webpack_require__("../../../../../src/app/providers/components/providercontact/providercontact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/providercontact/providercontact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProvidercontactComponent);
    return ProvidercontactComponent;
}());

//# sourceMappingURL=providercontact.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/providerdetails/providerdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/providerdetails/providerdetails.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/providers/components/providerdetails/providerdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProviderdetailsComponent = /** @class */ (function () {
    function ProviderdetailsComponent() {
    }
    ProviderdetailsComponent.prototype.ngOnInit = function () {
    };
    ProviderdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-providerdetails',
            template: __webpack_require__("../../../../../src/app/providers/components/providerdetails/providerdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/providerdetails/providerdetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProviderdetailsComponent);
    return ProviderdetailsComponent;
}());

//# sourceMappingURL=providerdetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/providers-list/providers-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{padding:2%;}\r\n.v_align{ margin-top: 5px;}\r\n.ngx-datatable.material {background: #FFF;box-shadow: none;vertical-align: middle}\r\n.addrow{margin-bottom: 20px;}\r\n.addprovider{padding: 0px;list-style: none;cursor: pointer;font-family: 'Raleway';}\r\n.addprovider > li{display: inline-block;vertical-align: middle; margin-left:10px;height: 110px;width:110px;background:#ffffff; border: 1px solid #ddd;padding: 10px;text-align: center; margin-bottom: 10px;}\r\n.addprovider > li > label {font-size: 25px;font-weight: bold;display: block;margin-bottom: 20px;}\r\n.addprovider > li:hover {border: 1px solid #5a9ae5;}\r\n.addprovider > li:hover label {color: #5a9ae5;}\r\n.addprovider > li:active{border: 1px solid #d2cfcf;cursor: pointer;} \r\nul.addprovider > li > p{margin-bottom: 0px;-webkit-margin-before: 0px;}\r\n.right-card{border-left: 1px solid #d6d2d2;}\r\nstrong {color:#5a9ae5;}\r\nlabel, p > b{color:#777575;font-size: 14px;}\r\nlabel > span{color:#777575;}\r\nlabel > strong {font-weight: bold;color:#777575;}\r\n.object{vertical-align: top;margin-right:10px;display:table-cell;} \r\n.object-body{display: table-cell;vertical-align: top;}\r\n/*md-icon{color:#777575;font-size: 25px;}*/\r\nbutton{color: #508cd2;}\r\nsmall > label{color:red;font-weight:600;}\r\nsmall > p >label{color:#5a9ae5;font-weight:600;}\r\n.icon{color:#f5ad27;}\r\n.link{color:#5a9ae5;display: table-cell;font-weight: 300;}\r\n.page-count {text-transform: uppercase!important;}\r\n\r\n\r\n/* provider analysis box */\r\n.recBox {\r\n    display: block;\r\n    padding: 18px 15px;\r\n    position: relative;\r\n    background: yellow;\r\n    cursor: pointer;\r\n}\r\n.recBox p {\r\n    text-align: center;\r\n    margin: 0px;\r\n}\r\n.recBox .num {\r\n    font-size: 40px;\r\n    font-weight: 400;\r\n    text-indent: 10px;\r\n    line-height: 100%;\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n}\r\n.recBox.totalProvider {\r\n    background: #597d8c;\r\n    color: white;\r\n}\r\n.recBox.newApproval {\r\n    background: #00bed8;\r\n    color: white;\r\n}\r\n.recBox.inProgress {\r\n    background: #f6bb42;\r\n    color: white;\r\n}\r\n.recBox.approved {\r\n    background: #70cb49;\r\n    color: white;\r\n}\r\n.triangle-bottomleft {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 30px solid red;\r\n    border-right: 30px solid #fafafa;\r\n}\r\n.recBox.totalProvider .triangle-bottomleft {\r\n    border-bottom: 30px solid #40606d;\r\n    border-right: 30px solid #fafafa;\r\n}\r\n.recBox.newApproval .triangle-bottomleft {\r\n    border-bottom: 30px solid #06abc1;\r\n    border-right: 30px solid #fafafa;\r\n}\r\n.recBox.inProgress .triangle-bottomleft {\r\n    border-bottom: 30px solid #ce9c37;\r\n    border-right: 30px solid #fafafa;\r\n}\r\n.recBox.approved .triangle-bottomleft {\r\n    border-bottom: 30px solid #62b140;\r\n    border-right: 30px solid #fafafa;\r\n}\r\n.triangle-bottomleft.active {\r\n    border-color: transparent!important;\r\n}\r\n.mainIcon {\r\n    font-size: 35px;\r\n}\r\n.recBox.totalProvider .mainIcon,\r\n.recBox.newApproval .mainIcon,\r\n.recBox.inProgress .mainIcon,\r\n.recBox.approved .mainIcon {\r\n    color: white;\r\n    margin-right: 30px;\r\n}\r\n._caption {\r\n    border: 1px solid #ddd;\r\n    border-top: 0px;\r\n    padding: 10px 10px;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    color: #7d7b7b;\r\n    letter-spacing: 1px;\r\n    word-spacing: 3px;\r\n    cursor: pointer;\r\n    font-family: \"Oswald\",Helvetica,Arial,sans-serif;\r\n}\r\n._caption.totalProvider {color: #597d8c;;\r\n    box-shadow: 0 0 10px 2px #ddd;\r\n}\r\n._caption.newApproval {color: #00bed8;;\r\n    box-shadow: 0 0 10px 2px #ddd;}\r\n._caption.inProgress {color: #f6bb42;;\r\n    box-shadow: 0 0 10px 2px #ddd;\r\n    }\r\n._caption.approved {color: #70cb49;;\r\n    box-shadow: 0 0 10px 2px #ddd;\r\n}\r\n\r\n/* right panel style */\r\n.cp{position: relative}\r\n.cp md-icon{\r\n    font-size: 55px;\r\n    color: #4dbbfe;}\r\n.cp-para{text-align: center;    font-size: 22px;\r\n    font-weight: normal;}\r\n.cp-para h3 span{position: relative;font-family: \"Oswald\",Helvetica,Arial,sans-serif;}\r\n.cp-para h3 span::after{\r\n    content: '';\r\n    position: absolute;\r\n    width: 80px;\r\n    height: 1px;\r\n    bottom: -8px;\r\n    left: 0;\r\n    background: #4b5668;\r\n} \r\nh3 {\r\n    font-size: 26px;\r\n    font-weight: 300;\r\n    padding-bottom: 8px;\r\n    margin: 0px;\r\n}\r\n.cp-para > label{position:relative;font-size:16px;color:#56befe;}\r\n.cp-para > label::after{border-bottom:5px solid #828282}\r\n.cp-para small > label{font-size:14px;color:#5a9ae5;font-weight: 300;}\r\n.cp-para small > p > label{font-size:14px;color:#333;font-weight: 300;}\r\n.cp-para small > p{font-size:14px;color:#333;font-weight: 300;-webkit-margin-before: 0em;\r\n    -webkit-margin-after: 0em; }\r\n.cp-margin{text-align: left;border-bottom:1px solid #d2d0d0;margin-left: 10px;}\r\n.cp-margin:last-child{border-bottom:none;}\r\n.cp-para span a{font-size:12px; color:#56befe;letter-spacing: 2px;}\r\n.cp-para span a md-icon{font-size:16px; color:#56befe;    position: absolute;\r\n    margin-top: 7px;}\r\n\r\n/*.cp-para span md-icon{position: absolute;}*/\r\n.cp-para button md-icon{font-size:16px;    position: relative;\r\n    top: 3px;}\r\nhr{    width: 10%;\r\n    border-bottom: 5px solid #a4a2a2;\r\n    border-radius: 7px;    margin-top: 25px;\r\n    margin-bottom: 25px;}\r\n._brand.providerIcon > img{width: 60px;\r\n    overflow: hidden;\r\n    float: left;height: 60px;margin: 10px 0 10px 10px;}\r\n._providerbrand.providerIcon > img{width: 55px;\r\n    overflow: hidden;\r\n    float: left;height: 55px;}\r\n.mat-paginator[_ngcontent-c6] .mat-paginator-page-size{display: none !important;}\r\n.ngx-datatable.material .datatable-body .progress-linear .container {\r\n    display: block;\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 5px;\r\n    -webkit-transform: translate(0, 0) scale(1, 1);\r\n    transform: translate(0, 0) scale(1, 1);\r\n    background-color: transparent !important;\r\n}\r\n.datatable-body-row {\r\n    height: auto !important;\r\n    border-bottom: none !important;\r\n}\r\n.ngx-datatable.material .datatable-body .datatable-row-detail {\r\n    background: #f5f5f5;\r\n    padding: 10px;\r\n    border-bottom: 1px solid #ccc !important;\r\n}\r\ntable{\r\n    border:transparent;\r\n}\r\ntable, td{\r\n    padding:15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/providers-list/providers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n \r\n    <div fxLayout=\"row\">\r\n    <div data-card=\"md-card\" class=\"profileCard\" fxFlex=\"100\">\r\n      <div fxFlex=\"69\" fxFlexOffset=\"1\" class=\"left-card\">\r\n        <h2>Providers </h2>\r\n\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\">\r\n            <div fxFlex=\"24\" (click)=\"_getProviderType('all')\">\r\n              <div class=\"recBox totalProvider\">\r\n                <span class=\"triangle-bottomleft\" [ngClass]=\"{'active': selectedItem == 'all'}\"></span>\r\n                <p>\r\n                  <md-icon class=\"mainIcon\">contacts</md-icon> \r\n                  <span class=\"num\">{{this.rows.length}}<!--{{records[0].totalProvider}}--></span>\r\n                </p>\r\n              </div>\r\n              <div class=\"_caption\" [ngClass]=\"{'totalProvider': selectedItem == 'all'}\">Total Provider</div>\r\n            </div>\r\n\r\n            <div fxFlex=\"24\" (click)=\"_getProviderType('newApproval')\">\r\n              <div class=\"recBox newApproval\">\r\n                <span class=\"triangle-bottomleft\" [ngClass]=\"{'active': selectedItem == 'newApproval'}\"></span>\r\n                <p>\r\n                  <md-icon class=\"mainIcon\">add_box</md-icon> \r\n                  <span class=\"num\">5<!--{{records[0].newApproval}}--></span>\r\n                </p>\r\n              </div>\r\n              <div class=\"_caption\" [ngClass]=\"{'newApproval': selectedItem == 'newApproval'}\">New Approval</div>\r\n            </div>\r\n\r\n            <div fxFlex=\"24\" (click)=\"_getProviderType('inProgress')\">\r\n              <div class=\"recBox inProgress\">\r\n                <span class=\"triangle-bottomleft\" [ngClass]=\"{'active': selectedItem == 'inProgress'}\"></span>\r\n                <p>\r\n                  <md-icon class=\"mainIcon\">timeline</md-icon> \r\n                  <span class=\"num\">6<!--{{records[0].inProgress}}--></span>\r\n                </p>\r\n              </div>\r\n              <div class=\"_caption\" [ngClass]=\"{'inProgress': selectedItem == 'inProgress'}\">In Progress</div>\r\n            </div>\r\n\r\n            <div fxFlex=\"24\" (click)=\"_getProviderType('approval')\">\r\n              <div class=\"recBox approved\">\r\n                <span class=\"triangle-bottomleft\" [ngClass]=\"{'active': selectedItem == 'approval'}\"></span>\r\n                <p>\r\n                  <md-icon class=\"mainIcon\">thumb_up</md-icon> \r\n                  <span class=\"num\">9<!--{{records[0].approved}}--></span>\r\n                </p>\r\n              </div>\r\n              <div class=\"_caption\" [ngClass]=\"{'approved': selectedItem == 'approval'}\">Approved Provider</div>\r\n            </div>\r\n        </div>\r\n\r\n    <p>&nbsp;</p>\r\n   <div fxLayout=\"row\">\r\n    <div fxFlex=\"7\"><md-icon class=\"icon\">report_problem</md-icon></div>\r\n    <div fxFlex=\"93\">\r\n        <small><label (click)=\"myfX()\">10<!--{{records[0].pendingProvider}}--> Provider</label> are pending from past 2 Weeks</small>\r\n        <small><p><label> 8<!--{{records[0].newProvider}}--> New Provider</label> need your attention</p></small>\r\n    </div>\r\n  </div> \r\n\r\n  <div fxLayout=\"row\" fx-layout-align=\"center center\">\r\n    <div fxFlex=\"80\" class=\"v_align\">\r\n        <md-input-container fxFlex=\"70\">\r\n        <input type=\"text\" mdInput type='text' placeholder='Search provider by city..' (keyup)='updateFilter($event)' />\r\n      </md-input-container>\r\n    </div>\r\n    <div fxFlex=\"20\" >\r\n        <!-- <md-input-container fxFlex=\"90\" >\r\n        <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Start Date\">\r\n        <button type=\"button\" mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n        </md-input-container>\r\n        <md-datepicker #picker (selectedChanged)=\"fetchRecByDate($event)\"></md-datepicker> -->\r\n      </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n      <div fxFlex=\"100\">\r\n        <ngx-datatable\r\n        #myTable\r\n        class='material fullscreen'\r\n        [rows]='rows'\r\n        [limit]=\"4\"\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\"\r\n        [loadingIndicator]=\"loadingIndicator\"\r\n        [scrollbarV]=\"false\"\r\n        [scrollbarH]=\"true\">\r\n\r\n      <ngx-datatable-row-detail [rowHeight]=\"auto\">\r\n        <ng-template ngx-datatable-row-detail-template let-row=\"row\">\r\n          <table width=\"100%\" border=\"1\" style=\"border-collapse: collapse\">\r\n            <tr>\r\n              <td>first</td>\r\n              <td>second</td>\r\n              <td>third</td>\r\n            </tr>\r\n          </table>\r\n        </ng-template>\r\n      </ngx-datatable-row-detail>\r\n\r\n        <ngx-datatable-column name=\"Name\" prop=\"Name\" width=\"200\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <span class=\"_providerbrand providerIcon\"><img src=\"{{row.logoLink}}\" alt=\"\"></span>  \r\n              <label><a routerLink=\"provider/{{row.id}}\" class=\"link\">{{row.name}}</a></label><address>{{row.city}}</address>\r\n              <label>UDID</label>\r\n            </ng-template>\r\n        </ngx-datatable-column>\r\n\r\n        <ngx-datatable-column name=\"Registered Date\" prop=\"regdStartDate\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{row.regdStartDate}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        \r\n        <ngx-datatable-column name=\"Contact Person\" prop=\"regdName\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{row.regdName}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n\r\n        <ngx-datatable-column name=\"Location\" prop=\"location\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n           {{row.city}}, {{row.state}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n\r\n         <ngx-datatable-column name=\"Services Details\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            \r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n\r\n        <ngx-datatable-column name=\"Provider Type\" prop=\"providerType\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{row.providerType}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n\r\n        <ngx-datatable-column name=\"Total No. of Outlet\" prop=\"totalOutlets\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{row.totalOutlets}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        \r\n        <ngx-datatable-column name=\"Status\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n           \r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n      <div fxFlex=\"29\" fxFlexOffset=\"1\" class=\"right-card\" fxShow fxHide.xs=\"true\" >\r\n       <hr>\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"100\" class=\"cp-para\">\r\n            <h3><span>My Team</span></h3>\r\n            <label>View all team members <span>(15)</span></label><hr>\r\n            <div fxLayout=\"row\" class=\"cp-margin\">\r\n              <div fxFlex=\"33\">\r\n                <span class=\"_brand providerIcon\"><img src=\"assets/images/dummy_logo.png\"></span>\r\n              </div>\r\n              <div fxFlex=\"67\" >\r\n                <small><label>First Name Last Name</label></small>\r\n                <small><p><label>Area: New Delhi</label></p></small>\r\n                <small><label>10 PROVIDER</label> | <label>5 LEADS</label></small>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row\" class=\"cp-margin\">\r\n              <div fxFlex=\"33\">\r\n                <span class=\"_brand providerIcon\"><img src=\"assets/images/dummy_logo.png\"></span>\r\n              </div>\r\n              <div fxFlex=\"67\" >\r\n                <small><label>First Name Last Name</label></small>\r\n                <small><p><label>Area: New Delhi</label></p></small>\r\n                <small><label>10 PROVIDER</label> | <label>5 LEADS</label></small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--<md-paginator [length]=\"100\"\r\n              [pageSize]=\"10\">\r\n        </md-paginator>-->\r\n          <hr>\r\n      </div>\r\n  </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let provider of providers\">\r\n  <p><a routerLink=\"editproviderprofile/{{provider.id}}\">{{provider.name}}</a></p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/providers/components/providers-list/providers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_providers_provider_service__ = __webpack_require__("../../../../../src/app/services/providers/provider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProvidersListComponent = /** @class */ (function () {
    function ProvidersListComponent(_provider, cdf) {
        this._provider = _provider;
        this.cdf = cdf;
        this.rows = [];
        this.temp = [];
        this.isLimits = 10;
        this.selectedItem = 'all';
        this.teams = [];
        this.expanded = {};
        this.loadingIndicator = true;
        this.providers = [];
    }
    ProvidersListComponent.prototype.ngOnInit = function () {
        this.getAllProviderList();
        this.myteam();
        this.myfX();
        this.cdf.detectChanges();
    };
    // search 
    ProvidersListComponent.prototype.updateFilter = function (eve) {
        var val = eve.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.city.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // udpate rows
        this.rows = temp;
    };
    // fetch data by date
    ProvidersListComponent.prototype.fetchRecByDate = function (eve) {
        //let _date = moment(eve,"DD/MM/YYYY").format('MM/DD/YYYY')
        //console.log(_date);
    };
    ProvidersListComponent.prototype.getAllProviderList = function () {
        var _this = this;
        this._provider.getAllProvider()
            .subscribe(function (data) {
            _this.rows = data.data;
            _this.temp = _this.rows;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
            console.log(data.data);
        });
    };
    ProvidersListComponent.prototype._getProviderType = function (name) {
        // this.records = this._provider.providerType(name);
        // this.rows = this.records[0].data;
        // this.temp = this.rows;
        this.selectedItem = name;
    };
    ProvidersListComponent.prototype.myteam = function () {
        this.teams = [
            { id: 1, name: 'Anindita Kundu' },
            { id: 2, name: 'Sahishta Parween' },
            { id: 3, name: 'Heena Khan' },
            { id: 4, name: 'Zarnish Ansaria' },
            { id: 5, name: 'Zaynah Khatoon' },
            { id: 6, name: 'Sanjida Khan' }
        ];
    };
    ProvidersListComponent.prototype.myfX = function () {
        this.myTable.rowDetail.expandAllRows();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
        __metadata("design:type", Object)
    ], ProvidersListComponent.prototype, "myTable", void 0);
    ProvidersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-providers-list',
            template: __webpack_require__("../../../../../src/app/providers/components/providers-list/providers-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/providers-list/providers-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_providers_provider_service__["a" /* ProviderService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_providers_provider_service__["a" /* ProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_providers_provider_service__["a" /* ProviderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
    ], ProvidersListComponent);
    return ProvidersListComponent;
    var _a, _b;
}());

//# sourceMappingURL=providers-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/components/providerservices/providerservices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .form-control{\r\n    display: block;\r\n    position: relative;\r\n    z-index: 11;\r\n    padding: 0px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-control.active{\r\n    border:1px solid #00b1ff;\r\n    \r\n} \r\nbutton {margin-left: 20px;}\r\n\r\ninput:disabled,\r\ntextarea:disabled {\r\n    border: none;\r\n    resize:  none;\r\n}\r\nfieldset {\r\n    margin: 0px;\r\n    border: none;\r\n}\r\nfieldset p{\r\n    color:#acadb1;\r\n}\r\nfieldset md-icon{\r\n    vertical-align: middle;\r\n}\r\n.form-overlay{\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 9999;\r\n    left: 0; top: 0;\r\n   \r\n}\r\nlabel {\r\n    position: relative;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer !important;\r\n}\r\n\r\n.btn:active {\r\n    box-shadow: 0  !important;\r\n    /* transform: translateY(2px) !important; */\r\n}\r\n.btn {\r\n    \r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    height: 50px;\r\n    width: 100px;\r\n    box-shadow: 0;\r\n    text-align: center;\r\n}\r\n.btn-sık {\r\n    transition: all 0.2s ease;\r\n    background-color: white ;\r\n    border: 1px solid #b2b6b7;\r\n    box-shadow: 0 !important;\r\n    min-width: 175px;\r\n    border-radius: 2px;\r\n    color:#767575;\r\n}\r\ninput[type=\"checkbox\"] {\r\n     position: absolute;\r\n  visibility: hidden;\r\n}\r\n\r\ninput[type=\"checkbox\"] + div {\r\n    position: relative;\r\n}\r\ninput[type=\"checkbox\"]:checked + div {\r\n  background-color: #fff;\r\n  width:20%;\r\n  border: 1px solid #387ff8;\r\n}\r\ninput[type=\"checkbox\"]:disabled + div {\r\n  background-color: #fff;\r\n  width:20%;\r\n  border: 1px solid #d2d2d2;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + div>span {\r\n  color: #767575;\r\n}\r\ninput[type=\"checkbox\"] + div>span {\r\nposition: relative;\r\ntop: 30%;}\r\n\r\ninput[type=\"checkbox\"]:checked + div::before {\r\n     content: \"\\2714\";\r\n    position: absolute;\r\n    bottom: -1px;\r\n    right: -1px;\r\n    text-indent: 18px;\r\n    line-height: 280%;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    -webkit-clip-path: polygon(100% 100%, 100% 0, 0 0);\r\n    clip-path: polygon(100% 100%, 100% 0, 0 100%);\r\n    background: #387ff8;\r\n    width: 20%;\r\n    height: 60%;\r\n}\r\nfieldset:disabled input[type=\"checkbox\"]:checked + div::before {\r\n      content: \"\\2714\";\r\n    position: absolute;\r\n    bottom: -1px;\r\n    right: -1px;\r\n    text-indent: 18px;\r\n    line-height: 280%;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    -webkit-clip-path: polygon(100% 100%, 100% 0, 0 0);\r\n    clip-path: polygon(100% 100%, 100% 0, 0 100%);\r\n    background: #d2d2d2;\r\n    width: 20%;\r\n    height: 60%; \r\n}\r\n.providerServices{\r\n    padding: 0;\r\n    display: block;\r\n    list-style: none;\r\n}\r\n.providerServices > li{\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    margin-bottom: 8px;\r\n}\r\n p{\r\n     -webkit-margin-before: 0 !important; \r\n    -webkit-margin-after:0 !important;\r\n    margin: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/providers/components/providerservices/providerservices.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- // provider services -->\r\n<div class=\"form-control\" [ngClass]=\"{'active': isServiceActiveBorder}\">\r\n  <div [ngClass]=\"{'form-overlay': isServiceFormOverlay}\">\r\n    <p style=\"position: absolute; bottom: 0; right: 0;\" [hidden]=\"isServiceButton\">\r\n        <button md-raised-button type=\"button\" class=\"primary\" (click)=\"editFrm(false)\">EDIT</button>\r\n    </p>\r\n  </div>\r\n  <form>\r\n    <fieldset [disabled]=\"isServiceFieldset\">\r\n        <p>Services</p>\r\n         <md-progress-bar *ngIf=\"servicesProgress\" mode=\"indeterminate\" style=\"margin-bottom: 4px; margin-top: 5px;\"></md-progress-bar>\r\n        <div data-attr=\"services\">\r\n            <div fxLayout=\"row\">\r\n                <ul class=\"providerServices\">\r\n                    <li *ngFor=\"let service of services; let i = index;\">\r\n                        <label>\r\n                            <input type=\"checkbox\" name=\"service{{i}}\" value=\"{{service.id}}\" [(ngModel)]=\"service.isChecked\" (change)=\"updateService(service)\" />    \r\n                            <div class=\"btn btn-sık\"><span>{{service.name}}</span></div>\r\n                        </label>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/providers/components/providerservices/providerservices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderservicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProviderservicesComponent = /** @class */ (function () {
    function ProviderservicesComponent() {
        this.servicesFx = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProviderservicesComponent.prototype, "services", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderservicesComponent.prototype, "isServiceFieldset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderservicesComponent.prototype, "isServiceFormOverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderservicesComponent.prototype, "isServiceButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProviderservicesComponent.prototype, "servicesFx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProviderservicesComponent.prototype, "servicesProgress", void 0);
    ProviderservicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-providerservices',
            template: __webpack_require__("../../../../../src/app/providers/components/providerservices/providerservices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/providers/components/providerservices/providerservices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProviderservicesComponent);
    return ProviderservicesComponent;
}());

//# sourceMappingURL=providerservices.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/providers-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return providersRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_lead_addlead_addlead_component__ = __webpack_require__("../../../../../src/app/providers/components/lead/addlead/addlead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_providers_list_providers_list_component__ = __webpack_require__("../../../../../src/app/providers/components/providers-list/providers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_providerdetails_providerdetails_component__ = __webpack_require__("../../../../../src/app/providers/components/providerdetails/providerdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_addeditprovider_addeditprovider_component__ = __webpack_require__("../../../../../src/app/providers/components/addeditprovider/addeditprovider.component.ts");

//import { AddKycComponent } from "./components/add-kyc/add-kyc.component";
//import { AddOutletComponent } from "./components/add-outlet/add-outlet.component";
//import { CompanyPersonalInformationComponent } from "./components/company-personal-information/company-personal-information.component";
//import { LeadlistComponent } from "./components/lead/leadlist/leadlist.component";

//import { OutletDignosticsComponent } from "./components/outlet-dignostics/outlet-dignostics.component";
//import { ProviderInfoComponent } from "./components/provider-info/provider-info.component";



var providersRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_providers_list_providers_list_component__["a" /* ProvidersListComponent */],
        children: [
            { path: "", redirectTo: "providerlist", pathMatch: "full" },
            { path: "providerlist", component: __WEBPACK_IMPORTED_MODULE_2__components_providers_list_providers_list_component__["a" /* ProvidersListComponent */] }
        ]
    },
    //{path:"addkyc", component: AddKycComponent},
    //{path:"addoutlet", component: AddOutletComponent},
    //{path:"companyinfo", component: CompanyPersonalInformationComponent},
    //{path:"companyinfo/:id", component: CompanyPersonalInformationComponent},
    //{path:"leadlist", component: LeadlistComponent},
    { path: "addlead", component: __WEBPACK_IMPORTED_MODULE_1__components_lead_addlead_addlead_component__["a" /* AddleadComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_providerdetails_providerdetails_component__["a" /* ProviderdetailsComponent */],
        children: [
            { path: '', redirectTo: "addproviderprofile", pathMatch: "full" },
            { path: "provider", component: __WEBPACK_IMPORTED_MODULE_4__components_addeditprovider_addeditprovider_component__["a" /* AddeditproviderComponent */] },
            { path: "provider/:id", component: __WEBPACK_IMPORTED_MODULE_4__components_addeditprovider_addeditprovider_component__["a" /* AddeditproviderComponent */] }
        ]
    },
    //{path:"outletdiagnostic", component: OutletDignosticsComponent},
    //{path:"kycandmou", component: ProviderInfoComponent},
    //{path:"addedit", component: ProviderasideComponent},
    //{path:"addprovider", component: ProviderasideComponent,
    //children: [
    //  {path:"", redirectTo:"companyinfo", pathMatch:"full"},
    //{path:"companyinfo", component: CompanyPersonalInformationComponent},
    //{path:"companyinfo/:id", component: CompanyPersonalInformationComponent},
    //{path:"kycandmou", component: ProviderInfoComponent},
    //{path:"addoutlet", component: AddOutletComponent},
    //]
    //},
    { path: '**', redirectTo: 'addlead', pathMatch: 'full' },
];
var providersRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(providersRoutes);
//# sourceMappingURL=providers-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/providers/providers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersModule", function() { return ProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_module__ = __webpack_require__("../../../../../src/app/global/global.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_routing_module__ = __webpack_require__("../../../../../src/app/providers/providers-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_lead_addlead_addlead_component__ = __webpack_require__("../../../../../src/app/providers/components/lead/addlead/addlead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_providers_list_providers_list_component__ = __webpack_require__("../../../../../src/app/providers/components/providers-list/providers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_provideraside_provideraside_component__ = __webpack_require__("../../../../../src/app/providers/components/provideraside/provideraside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_providerdetails_providerdetails_component__ = __webpack_require__("../../../../../src/app/providers/components/providerdetails/providerdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_addeditprovider_addeditprovider_component__ = __webpack_require__("../../../../../src/app/providers/components/addeditprovider/addeditprovider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_providerbasicinfo_providerbasicinfo_component__ = __webpack_require__("../../../../../src/app/providers/components/providerbasicinfo/providerbasicinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_providercontact_providercontact_component__ = __webpack_require__("../../../../../src/app/providers/components/providercontact/providercontact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_providerservices_providerservices_component__ = __webpack_require__("../../../../../src/app/providers/components/providerservices/providerservices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_location_location_component__ = __webpack_require__("../../../../../src/app/providers/components/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_mous_mous_component__ = __webpack_require__("../../../../../src/app/providers/components/mous/mous.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_banking_banking_component__ = __webpack_require__("../../../../../src/app/providers/components/banking/banking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { AddKycComponent } from "./components/add-kyc/add-kyc.component";
//import { AddOutletComponent } from "./components/add-outlet/add-outlet.component";
//import { CompanyPersonalInformationComponent } from "./components/company-personal-information/company-personal-information.component";
//import { LeadlistComponent } from "./components/lead/leadlist/leadlist.component";

//import { OutletDignosticsComponent } from "./components/outlet-dignostics/outlet-dignostics.component";
//import { ProviderInfoComponent } from "./components/provider-info/provider-info.component";











var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__global_global_module__["c" /* GlobalModule */],
                __WEBPACK_IMPORTED_MODULE_3__providers_routing_module__["a" /* providersRouting */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_image_upload__["ImageUploadModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBz8-Ar_pP7bj6tWubNIAT6F1-DuJAX4Tc',
                    libraries: ["places"],
                    language: 'uk',
                    region: 'IN'
                })
            ],
            declarations: [
                //AddKycComponent,
                //AddOutletComponent,
                //CompanyPersonalInformationComponent,
                //LeadlistComponent,
                __WEBPACK_IMPORTED_MODULE_5__components_lead_addlead_addlead_component__["a" /* AddleadComponent */],
                //OutletDignosticsComponent,
                //ProviderInfoComponent,
                __WEBPACK_IMPORTED_MODULE_6__components_providers_list_providers_list_component__["a" /* ProvidersListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_provideraside_provideraside_component__["a" /* ProviderasideComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_providerdetails_providerdetails_component__["a" /* ProviderdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_addeditprovider_addeditprovider_component__["a" /* AddeditproviderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_providerbasicinfo_providerbasicinfo_component__["a" /* ProviderbasicinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_providercontact_providercontact_component__["a" /* ProvidercontactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_providerservices_providerservices_component__["a" /* ProviderservicesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_location_location_component__["a" /* LocationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_mous_mous_component__["a" /* MousComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_banking_banking_component__["a" /* BankingComponent */]
            ]
        })
    ], ProvidersModule);
    return ProvidersModule;
}());

//# sourceMappingURL=providers.module.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports.ImageUploadModule = __webpack_require__("../../../../angular2-image-upload/lib/image-upload.module.js").ImageUploadModule;


/***/ }),

/***/ "../../../../angular2-image-upload/lib/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FileDropDirective = (function () {
    function FileDropDirective() {
        this.isFileOver = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
    }
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.isFileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.isFileOver.emit(false);
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.isFileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.filterFiles = function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        var acceptedFiles = [];
        for (var i = 0; i < files.length; i++) {
            for (var j = 0; j < this.accept.length; j++) {
                if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    };
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
    };
    FileDropDirective.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.hasFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        if (types.contains) {
            return types.contains('Files');
        }
        return false;
    };
    return FileDropDirective;
}());
FileDropDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[fileDrop]'
            },] },
];
FileDropDirective.ctorParameters = function () { return []; };
FileDropDirective.propDecorators = {
    'accept': [{ type: core_1.Input },],
    'isFileOver': [{ type: core_1.Output },],
    'fileDrop': [{ type: core_1.Output },],
    'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
    'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
    'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
};
exports.FileDropDirective = FileDropDirective;
//# sourceMappingURL=file-drop.directive.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/lib/image-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var file_drop_directive_1 = __webpack_require__("../../../../angular2-image-upload/lib/file-drop.directive.js");
var image_upload_component_1 = __webpack_require__("../../../../angular2-image-upload/lib/image-upload/image-upload.component.js");
var image_service_1 = __webpack_require__("../../../../angular2-image-upload/lib/image.service.js");
var ImageUploadModule = (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.forRoot = function () {
        return {
            ngModule: ImageUploadModule,
            providers: [image_service_1.ImageService]
        };
    };
    return ImageUploadModule;
}());
ImageUploadModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    http_1.HttpModule
                ],
                declarations: [
                    image_upload_component_1.ImageUploadComponent,
                    file_drop_directive_1.FileDropDirective
                ],
                exports: [image_upload_component_1.ImageUploadComponent]
            },] },
];
ImageUploadModule.ctorParameters = function () { return []; };
exports.ImageUploadModule = ImageUploadModule;
//# sourceMappingURL=image-upload.module.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/lib/image-upload/image-upload.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var image_service_1 = __webpack_require__("../../../../angular2-image-upload/lib/image.service.js");
var FileHolder = (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());
exports.FileHolder = FileHolder;
var ImageUploadComponent = (function () {
    function ImageUploadComponent(imageService) {
        this.imageService = imageService;
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.isPending = new core_1.EventEmitter();
        this.onFileUploadFinish = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.files = [];
        this.showFileTooLargeMessage = false;
        this.fileCounter = 0;
        this.isFileOver = false;
        this.buttonCaption = 'Select Images';
        this.dropBoxMessage = 'Drop your images here!';
        this.pendingFilesCounter = 0;
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
    };
    ImageUploadComponent.prototype.fileChange = function (files) {
        var remainingSlots = this.countRemainingSlots();
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum != 0) {
            this.isPending.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    ImageUploadComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        this.onRemove.emit(file);
    };
    ImageUploadComponent.prototype.deleteAll = function () {
        var _this = this;
        this.files.forEach(function (f) { return _this.onRemove.emit(f); });
        this.files = [];
        this.fileCounter = 0;
        this.inputElement.nativeElement.value = '';
    };
    ImageUploadComponent.prototype.fileOver = function (isOver) {
        this.isFileOver = isOver;
    };
    ImageUploadComponent.prototype.uploadFiles = function (files, filesToUploadNum) {
        var _this = this;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                this_1.showFileTooLargeMessage = true;
                return "continue";
            }
            var img = document.createElement('img');
            img.src = window.URL.createObjectURL(file);
            var reader = new FileReader();
            reader.addEventListener('load', function (event) {
                var fileHolder = new FileHolder(event.target.result, file);
                _this.uploadSingleFile(fileHolder);
                _this.files.push(fileHolder);
            }, false);
            reader.readAsDataURL(file);
        };
        var this_1 = this;
        for (var i = 0; i < filesToUploadNum; i++) {
            _loop_1(i);
        }
    };
    ImageUploadComponent.prototype.onResponse = function (response, fileHolder) {
        fileHolder.serverResponse = response;
        fileHolder.pending = false;
        this.onFileUploadFinish.emit(fileHolder);
        if (--this.pendingFilesCounter == 0) {
            this.isPending.emit(false);
        }
    };
    ImageUploadComponent.prototype.uploadSingleFile = function (fileHolder) {
        var _this = this;
        if (this.url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .postImage(this.url, fileHolder.file, this.headers, this.partName, this.withCredentials)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            this.onFileUploadFinish.emit(fileHolder);
        }
    };
    ImageUploadComponent.prototype.countRemainingSlots = function () {
        return this.max - this.fileCounter;
    };
    return ImageUploadComponent;
}());
ImageUploadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'image-upload',
                template: "\n    <div class=\"image-upload\"\n         fileDrop\n         [accept]=\"supportedExtensions\"\n         (isFileOver)=\"fileOver($event)\"\n         (fileDrop)=\"fileChange($event)\"\n         [ngClass]=\"{'file-is-over': isFileOver}\"\n    >\n      <div class=\"file-upload hr-inline-group\">\n        <label class=\"upload button\">\n          <span [innerText]=\"buttonCaption\"></span>\n          <input\n            type=\"file\"\n            [accept]=\"supportedExtensions\"\n            multiple (change)=\"fileChange(input.files)\"\n            #input>\n        </label>\n        <label *ngIf=\"fileCounter > 0\" class=\"clear button\" (click)=\"deleteAll()\">\n          <span [innerText]=\"'Clear'\"></span>\n        </label>\n\n        <div class=\"drag-box-message\" [innerText]=\"dropBoxMessage\"></div>\n      </div>\n\n      <p class=\"file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\">\n      </p>\n\n      <div *ngIf=\"preview\" class=\"image-container hr-inline-group\">\n        <div\n          class=\"image\"\n          *ngFor=\"let file of files\"\n          [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\n        >\n          <div *ngIf=\"file.pending\" class=\"loading-overlay\">\n            <div class=\"spinningCircle\"></div>\n          </div>\n          <div *ngIf=\"!file.pending\" class=\"x-mark\" (click)=\"deleteFile(file)\">\n            <span class=\"close\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n    .image-upload {\n      --common-radius: 3px;\n      --active-color: #33CC99;\n      position: relative;\n      border-radius: var(--common-radius);\n      border: #d0d0d0 dashed 1px;\n      font-family: sans-serif;\n    }\n\n    .file-is-over {\n      border-color: var(--active-color);\n      border-style: solid;\n    }\n\n    .hr-inline-group:after {\n      display: table;\n      clear: both;\n      content: \"\";\n    }\n\n    .file-upload {\n      padding: 16px;\n      background-color: #f8f8f8;\n    }\n\n    .drag-box-message {\n      float: left;\n      display: inline-block;\n      margin-left: 12px;\n      padding-top: 14px;\n      color: #9b9b9b;\n      font-weight: 600;\n    }\n\n    label.button input[type=file] {\n      display: none;\n      position: fixed;\n      top: -99999px;\n    }\n\n    .clear {\n      background-color: #FF0000;\n    }\n\n    .button {\n      cursor: pointer;\n      padding: 10px;\n      color: white;\n      font-size: 1.25em;\n      font-weight: 500;\n      text-transform: uppercase;\n      display: inline-block;\n      float: left;\n      -webkit-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      -moz-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n    }\n\n    .button:active span {\n      position: relative;\n      display: block;\n      top: 1px;\n    }\n\n    .upload {\n      background-color: var(--active-color);\n    }\n\n    .image-container {\n      background-color: #fdfdfd;\n      padding: 0 10px 0 10px;\n    }\n\n    .image {\n      float: left;\n      display: inline-block;\n      margin: 6px;\n      width: 86px;\n      height: 86px;\n      background: center center no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n\n    .x-mark {\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      cursor: pointer;\n      border-radius: 2px;\n      float: right;\n      background-color: black;\n      opacity: .7;\n      color: white;\n      margin: 2px;\n    }\n\n    .close {\n      width: 20px;\n      height: 20px;\n      opacity: .7;\n      position: relative;\n      padding-right: 3px;\n    }\n\n    .x-mark:hover .close {\n      opacity: 1;\n    }\n\n    .close:before, .close:after {\n      border-radius: 2px;\n      position: absolute;\n      content: '';\n      height: 16px;\n      width: 2px;\n      top: 2px;\n      background-color: #FFFFFF;\n    }\n\n    .close:before {\n      transform: rotate(45deg);\n    }\n\n    .close:after {\n      transform: rotate(-45deg);\n    }\n\n    .loading-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background-color: black;\n      opacity: .7;\n    }\n\n    .spinningCircle {\n      height: 30px;\n      width: 30px;\n      margin: auto;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      border-radius: 50%;\n      border: 3px solid rgba(255, 255, 255, 0);\n      border-top: 3px solid white;\n      border-right: 3px solid white;\n      -webkit-animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n      animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n    }\n\n    .file-too-large {\n      color: red;\n      padding: 0 15px;\n    }\n\n    @-webkit-keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n\n      }\n    }\n  "]
            },] },
];
ImageUploadComponent.ctorParameters = function () { return [
    { type: image_service_1.ImageService, },
]; };
ImageUploadComponent.propDecorators = {
    'max': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'headers': [{ type: core_1.Input },],
    'preview': [{ type: core_1.Input },],
    'maxFileSize': [{ type: core_1.Input },],
    'withCredentials': [{ type: core_1.Input },],
    'partName': [{ type: core_1.Input },],
    'isPending': [{ type: core_1.Output },],
    'onFileUploadFinish': [{ type: core_1.Output },],
    'onRemove': [{ type: core_1.Output },],
    'buttonCaption': [{ type: core_1.Input },],
    'dropBoxMessage': [{ type: core_1.Input },],
    'fileTooLargeMessage': [{ type: core_1.Input },],
    'supportedExtensions': [{ type: core_1.Input, args: ['extensions',] },],
    'inputElement': [{ type: core_1.ViewChild, args: ['input',] },],
};
exports.ImageUploadComponent = ImageUploadComponent;
//# sourceMappingURL=image-upload.component.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/lib/image.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.postImage = function (url, image, headers, partName, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        var options = new http_1.RequestOptions();
        if (withCredentials) {
            options.withCredentials = withCredentials;
        }
        if (headers) {
            options.headers = new http_1.Headers();
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var header = headers_1[_i];
                options.headers.append(header.header, header.value);
            }
        }
        var formData = new FormData();
        formData.append(partName, image);
        return this.http.post(url, formData, options);
    };
    return ImageService;
}());
ImageService.decorators = [
    { type: core_1.Injectable },
];
ImageService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map

/***/ })

});
//# sourceMappingURL=providers.module.chunk.js.map