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
var transaction_service_1 = require("./../../../services/transactions/transaction.service");
var profile_service_1 = require("./../../../services/profile/profile.service");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var material_2 = require("@angular/material");
var TransactionComponent = TransactionComponent_1 = (function () {
    function TransactionComponent(_transaction, _profile, snackBar, _route, route, dialog) {
        this._transaction = _transaction;
        this._profile = _profile;
        this.snackBar = snackBar;
        this._route = _route;
        this.route = route;
        this.dialog = dialog;
        this.rows = [];
        this.temp = [];
        this.Identities = [];
        this.isLimits = 10;
        this.user = {};
        this.identity = [];
        this.isReadOnly = true;
        this.edited = true;
        this.kycshow = false;
        this.payshow = false;
        this.model = {};
        this.verified = true;
        this.myControl = new forms_1.FormControl();
        this.paymentMode = [
            { refPayModeId: 1, name: "Cash" },
            { refPayModeId: 2, name: "Debt Card" },
            { refPayModeId: 3, name: "Credit Card" },
            { refPayModeId: 4, name: "Paytm Wallet" },
            { refPayModeId: 5, name: "Others" }
        ];
    }
    TransactionComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(TransactionComponent_1);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.getIdentityData();
        this.route.queryParams.subscribe(function (queryParams) { return _this.abc = queryParams['page']; });
        if (this.abc != "" && this.abc != undefined) {
            this.user.cardNumber = this.abc;
            this.getTrasnctionData1();
        }
        this.kycshow = false;
    };
    TransactionComponent.prototype.getIdentityData = function () {
        var _this = this;
        this._transaction.getIdentity()
            .subscribe(function (data) {
            // debugger;       
            _this.Identities = data.data;
        });
    };
    TransactionComponent.prototype.getTrasnctionData1 = function () {
        var _this = this;
        //debugger
        if (this.user.cardNumber.length <= 7) {
            this._transaction.getCouponTransaction(this.user.cardNumber)
                .subscribe(function (data) {
                debugger;
                _this.alldatavalue = data.data;
                _this.user.refCardId = data.data["refCardId"];
                _this.user.refcouponId = data.data["refcouponId"];
                _this.rows = data.data["Members"];
                _this.services = data.data["Services"];
                _this.user.serviceId = _this.services[0]["serviceId"];
                _this.speciality = data.data["SubServices"];
                _this.user.subServiceId = _this.speciality[0]["subServiceId"];
                _this.user.totalAmount = data.data["totalAmount"];
                _this.user.discountAmount = data.data["discountAmount"];
                _this.user.payableAmount = data.data["payableAmount"];
            });
        }
        else {
            this._transaction.getTransaction(this.user.cardNumber)
                .subscribe(function (data) {
                debugger;
                _this.alldatavalue = data.data;
                _this.user.refCardId = data.data["refCardId"];
                _this.user.refcouponId = data.data["refcouponId"];
                _this.rows = data.data["Members"];
                _this.services = data.data["Services"];
            });
        }
    };
    TransactionComponent.prototype.kycShow = function (value) {
        //debugger;
        this.kycshow = true;
        this.user.idProofTypeId = value.idProofTypeId;
        this.user.idProofNumber = value.idProofNumber;
        this.user.idProoImg = value.idProoImg;
        this.user.name = value.name;
        this.user.relation = value.relation;
        this.user.refDependentId = value.refDependentId;
    };
    TransactionComponent.prototype.pay = function () {
        this.payshow = true;
        this.verified = false;
    };
    TransactionComponent.prototype.getSubService = function (value) {
        //alert(value);
        //debugger
        this.speciality = this.alldatavalue["SubServices"].filter(function (a) { return a.serviceId === value; });
    };
    TransactionComponent.prototype.submitFrm = function () {
        var _this = this;
        //console.log(users);
        //this.user['dob'] = moment(this.user['dob'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
        //debugger;
        this.model.refCardId = this.user.refCardId;
        this.model.serviceId = this.user.serviceId;
        this.model.subServiceId = this.user.subServiceId;
        this.model.refDependentId = this.user.refDependentId;
        this.model.idProofTypeId = this.user.idProofTypeId;
        this.model.docter = this.user.docter;
        this.model.payTransectionNo = this.user.payTransectionNo;
        this.model.totalAmount = this.user.totalAmount;
        this.model.discountAmount = this.user.discountAmount;
        this.model.payableAmount = this.user.payableAmount;
        this.model.refPayModeId = this.user.refPayModeId;
        this.model.refcouponId = this.user.refcouponId;
        this._transaction.updateTransaction(this.model)
            .subscribe(function (data) {
            if (data.message) {
                _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    // edit readonly fields
    TransactionComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    return TransactionComponent;
}());
__decorate([
    core_1.ViewChild('myTable'),
    __metadata("design:type", Object)
], TransactionComponent.prototype, "table", void 0);
TransactionComponent = TransactionComponent_1 = __decorate([
    core_1.Component({
        selector: 'app-transaction',
        templateUrl: './transaction.component.html',
        styleUrls: ['./transaction.component.scss'],
        providers: [transaction_service_1.TransactionService, profile_service_1.ProfileService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService,
        profile_service_1.ProfileService,
        material_1.MdSnackBar,
        router_1.Router,
        router_1.ActivatedRoute,
        material_2.MdDialog])
], TransactionComponent);
exports.TransactionComponent = TransactionComponent;
var TransactionComponent_1;
//# sourceMappingURL=transaction.component.js.map