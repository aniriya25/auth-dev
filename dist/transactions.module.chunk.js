webpackJsonp(["transactions.module"],{

/***/ "../../../../../src/app/transactions/components/reject/reject.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n  <fieldset fxFlex=\"100\">\r\n    <legend>\r\n      Reject</legend>\r\n\r\n      <div class=\"picon\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\">\r\n          <md-icon>error_outline</md-icon>\r\n        </div>\r\n\r\n<div fxLayout=\"row\" fxFlex=\"100\" class=\"algn\">\r\n        <md-input-container fxFlex=\"100\" class=\"mdTextAra\">\r\n        <textarea matInput placeholder=\"Leave a comment\" [(ngModel)] =\"user.remark\" name=\"remark\" #remark=\"ngModel\"></textarea>\r\n      </md-input-container>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"end\">\r\n      <button md-raised-button class=\"primary\"  md-dialog-close>Close</button>&nbsp;\r\n      <button md-raised-button class=\"primary\" (click) = \"rejectTransaction();\">Submit</button>\r\n    </div>\r\n  </fieldset>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/transactions/components/reject/reject.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\n  width: 450px; }\n\n.picon md-icon {\n  font-size: 90px;\n  height: 90px;\n  width: 90px;\n  color: #efcdb1; }\n\n.mdTextAra.mat-input-container {\n  border: 1px solid #d2d2d2 !important;\n  margin-bottom: 10px;\n  padding-top: 5px; }\n\n.algn {\n  margin: 20px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/components/reject/reject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__ = __webpack_require__("../../../../../src/app/services/transactions/transaction.service.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var RejectComponent = /** @class */ (function () {
    function RejectComponent(route, _transaction, snackBar, dialogRef, data, _route) {
        this.route = route;
        this._transaction = _transaction;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this._route = _route;
        this.model = {};
        this.user = {};
    }
    RejectComponent.prototype.ngOnInit = function () {
        // this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
    };
    RejectComponent.prototype.rejectTransaction = function () {
        var _this = this;
        this.model.bookingRequestId = this.data.cardNumber;
        this.model.remark = this.user.remark;
        this._transaction.rejectTransaction(this.model)
            .subscribe(function (data) {
            //alert(data.message);
            if (data.message) {
                _this.snackBar.open("Request cancelled successfully", "", { duration: 3000 });
                setTimeout(function (_route) {
                    _this.dialogRef.close();
                    _this._route.navigate(['dashboard/home']);
                }, 3100);
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    RejectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reject',
            template: __webpack_require__("../../../../../src/app/transactions/components/reject/reject.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/components/reject/reject.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSnackBar */]]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__["a" /* TransactionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
    ], RejectComponent);
    return RejectComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=reject.component.js.map

/***/ }),

/***/ "../../../../../src/app/transactions/components/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n\r\n    <form class=\"form\" (ngSubmit)=\"submitFrm(user)\">      \r\n    <fieldset fxFlex=\"100\">\r\n        <legend> \r\n          <img fxFlexAlign=\"center\" class=\"logo\" src=\"assets/images/H3U_Logo_201x132.png\" />\r\n            Transaction Review</legend>\r\n        <div fxLayout=\"row\" fxFlex=\"100\">\r\n            <md-input-container fxFlex=\"49\">\r\n                <input type=\"text\" mdInput type='text' placeholder='Card Holder Name' [(ngModel)]=\"user.cardOnName\" name=\"cardOnName\" #cardOnName=\"ngModel\" [readonly]=\"true\" />\r\n            </md-input-container>\r\n            <md-input-container fxFlex=\"49\" fxFlexOffset=\"2\">\r\n                <input type=\"text\" mdInput type='text' placeholder='Patient Name' [(ngModel)]=\"user.name\" name=\"name\" #name=\"ngModel\" [readonly]=\"true\" />\r\n            </md-input-container>\r\n\r\n        </div>\r\n        <div fxLayout=\"row\" fxFlex=\"100\">\r\n            <md-input-container fxFlex=\"49\">\r\n                <input type=\"text\" mdInput type='text' placeholder='Provider Name' [(ngModel)] = \"user.proName\" name=\"proName\" #proName=\"ngModel\"  [readonly]=\"true\"/>\r\n            </md-input-container>\r\n            <md-input-container fxFlex=\"49\" fxFlexOffset=\"2\">\r\n                <input type=\"text\" mdInput type='text' placeholder='Provider code' value=\"0001\" name=\"Provider code\" [readonly]=\"true\" />\r\n            </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"row\" fxFlex=\"100\">\r\n            <md-input-container fxFlex=\"49\">\r\n                <input type=\"text\" mdInput type='text' placeholder='Coupon Code'  [readonly]=\"true\" />\r\n            </md-input-container>\r\n            <md-input-container fxFlex=\"49\" fxFlexOffset=\"2\">\r\n                <input type=\"text\" mdInput type='text' placeholder='Card No / Coupon Code'  [(ngModel)]=\"user.cardNumber\" name=\"cardNumber\" #cardNumber=\"ngModel\" [readonly]=\"true\"/>\r\n            </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <md-input-container fxFlex=\"49\">\r\n\r\n                    <input type=\"text\" mdInput type='text' placeholder='Service' [(ngModel)]=\"user.serviceName\" name=\"serviceName\" #serviceName=\"ngModel\" [readonly]=\"true\"/>\r\n                </md-input-container>\r\n                <md-input-container fxFlex=\"49\" fxFlexOffset=\"2\">\r\n                    <input type=\"text\" mdInput type='text' placeholder='Subservice' [(ngModel)]=\"user.subServiceName\" name=\"subServiceName\" #subServiceName=\"ngModel\" [readonly]=\"true\"/>\r\n                </md-input-container>\r\n            </div>\r\n        <div fxLayout=\"row\" fxFlex=\"100\">\r\n            <md-input-container fxFlex=\"32\">\r\n\r\n                <input type=\"text\" mdInput type='text' placeholder='Total OPD Amount' [(ngModel)]=\"user.totalAmount\" name=\"totalAmount\" #totalAmount=\"ngModel\" [readonly]=\"true\"/>\r\n            </md-input-container>\r\n            <md-input-container fxFlex=\"32\" fxFlexOffset=\"2\">\r\n                <input type=\"text\" mdInput type='text' placeholder='Amount Approved'  [(ngModel)]= \"payableTotalAmount.discountAmount\" name=\"discountAmount\" #discountAmount=\"ngModel\" [readonly]=\"true\"/>\r\n            </md-input-container>\r\n            <md-input-container fxFlex=\"32\" fxFlexOffset=\"2\">\r\n                    <input type=\"text\" mdInput type='text' placeholder='Amount to be collected from patient' [(ngModel)] = \"payableTotalAmount.payableAmount\" name=\"payableAmount\" #payableAmount=\"ngModel\" [readonly]=\"true\"/>\r\n                </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"row\" fxFlex=\"100\">\r\n           \r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\"  fxLayoutAlign=\"end\">\r\n            <button md-raised-button class=\"primary\" md-dialog-close>Edit Details</button>\r\n                \r\n            <button md-raised-button class=\"primary\" fxFlexOffset=\"2\">Approve</button>\r\n          </div>\r\n    </fieldset>\r\n </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/transactions/components/review/review.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\n  width: 700px; }\n\n.logo {\n  vertical-align: middle;\n  width: auto;\n  height: 60px;\n  margin: 5px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/components/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__ = __webpack_require__("../../../../../src/app/services/transactions/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// import {Invoice}  from './../../../model/invoce';
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(dialogRef, data, _transaction, snackBar, _route, _profile) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._transaction = _transaction;
        this.snackBar = snackBar;
        this._route = _route;
        this._profile = _profile;
        this.user = {};
        this.model = {};
        this.payableTotalAmount = {};
        this.invoiceData = [];
        this.proData = {};
        //alert(this.data.cardOnName);
        //debugger;
        this.user.refCardId = this.data.refCardId;
        this.user.consultationType = this.data.consultationType;
        this.user.serviceId = this.data.serviceId;
        this.user.subServiceId = this.data.subServiceId;
        this.user.refDependentId = this.data.refDependentId;
        this.user.idProofTypeId = this.data.idProofTypeId;
        this.user.doctor = this.data.doctor;
        this.user.payTransectionNo = this.data.payTransectionNo;
        this.user.refPayModeId = this.data.refPayModeId;
        this.user.refcouponId = this.data.refcouponId;
        this.user.cardNumber = this.data.cardNumber;
        this.user.serviceName = this.data.serviceName;
        this.user.subServiceName = this.data.subServiceName;
        this.user.totalAmount = this.data.totalAmount;
        this.payableTotalAmount.discountAmount = this.data.discountAmount;
        this.payableTotalAmount.payableAmount = this.data.payableAmount;
        this.user.name = this.data.UserName;
        this.user.cardOnName = this.data.cardOnName;
        this.user.proName = this.data.proName;
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent.prototype.submitFrm = function () {
        var _this = this;
        //console.log(users);
        //this.user['dob'] = moment(this.user['dob'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
        //debugger;
        this.model.refCardId = this.user.refCardId;
        this.model.serviceId = this.user.serviceId;
        this.model.consultationType = this.user.consultationType;
        this.model.subServiceId = this.user.subServiceId;
        this.model.refDependentId = this.user.refDependentId;
        this.model.idProofTypeId = this.user.idProofTypeId;
        this.model.doctor = this.user.doctor;
        this.model.payTransectionNo = this.user.payTransectionNo;
        this.model.totalAmount = this.user.totalAmount;
        this.model.discountAmount = this.payableTotalAmount.discountAmount;
        this.model.payableAmount = this.payableTotalAmount.payableAmount;
        this.model.refPayModeId = this.user.refPayModeId;
        this.model.refcouponId = this.user.refcouponId;
        this._transaction.updateTransaction(this.model)
            .subscribe(function (data) {
            //debugger;
            if (data) {
                _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                setTimeout(function (_route) {
                    _this.dialogRef.close();
                    _this._route.navigate(['dashboard/transactions/transactionInvoice']);
                }, 5100);
                _this.invoiceData = data.data;
                return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    ReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review',
            template: __webpack_require__("../../../../../src/app/transactions/components/review/review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/components/review/review.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */], __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__["a" /* ProfileService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__["a" /* TransactionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__["a" /* ProfileService */]) === "function" && _e || Object])
    ], ReviewComponent);
    return ReviewComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/transactions/components/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container popup1\" >\r\n<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n  \r\n  <div fxFlex=\"100\">\r\n    <div fxFlex=\"98\" fxFlexOffset=\"1\" class=\"left-card\">\r\n        <h2>Transaction Summary</h2>\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n            <ul class=\"supp\" fxFlex=\"100\">\r\n                <li fxFlex=\"9\">\r\n                    <img src={{user.companyLogo}} alt=\"H3U\" class=\"logo\" style=\"height:50px; width:auto; margin:0px ;\">\r\n                </li>\r\n                <li fxFlex=\"50\">\r\n                    <span style=\"font-weight:bold;\">{{user.companyName}}</span>\r\n                    <p>{{user.companyAddress}}</p>                   \r\n                    <p style=\"font-weight:bold;\">{{user.companyPhoneNo}}</p>\r\n                </li>\r\n                <li fxFlex=\"10\">\r\n                  <span class=\"_brand providerIcon\"><img src={{user.outletLogo}} alt=\"H3U\"></span>\r\n                   \r\n                </li>\r\n                <li fxFlex=\"27\" fxFlexOffset=\"3\">\r\n                    {{user.outletName}}\r\n                  <p>{{user.outletAddress}}</p>                  \r\n                  <p style=\"font-weight:bold;\">{{user.outletPhoneNo}}</p>\r\n                  <p>{{user.outletGstNo}}</p>                  \r\n                 \r\n                </li>\r\n              </ul>\r\n              </div>\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n        <div fxFlex=\"100\">\r\n         \r\n          <ngx-datatable #myTable class='material fullscreen expandable'\r\n           [rows]='rows'\r\n           [limit]=\"10\"\r\n           [columnMode]=\"'force'\" \r\n           [headerHeight]=\"50\"\r\n           [footerHeight]=\"50\" \r\n           [scrollbarV]=\"false\"\r\n           [rowHeight]=\"'auto'\"\r\n            >\r\n            <ngx-datatable-column name=\"DESCRIPTION\" prop=\"id\" [width]=\"150\" [canAutoResize]=\"false\"  [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <span>{{row.id}}</span>\r\n                <p>{{row.cardNumber}}</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"PATIENT\" prop=\"outlet\"  [width]=\"200\" [canAutoResize]=\"false\"  [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <span>{{ row.patientName}}</span>\r\n                <p>{{row.gender}} ( {{row.age}} )</p>\r\n                <p class=\"tabspan\">{{row.relation}}</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"SERVICE\" prop=\"outlet\" [width]=\"130\" [canAutoResize]=\"false\"  [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <span> {{row.service}}</span>\r\n                <p class=\"tabspan\">{{row.subService}}</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"HSN\" prop=\"outlet\" [width]=\"130\" [canAutoResize]=\"false\"  [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <span> HSN Name</span>\r\n                <p>HSN Code</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"PRICE\" prop=\"date\" [width]=\"80\" [canAutoResize]=\"false\"  [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                <span>{{row.totalAmount}}</span>              \r\n                <p>{{row.payableAmount}}</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"TAX\" prop=\"date\" [width]=\"75\" [canAutoResize]=\"false\"  [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                <span>0%</span>\r\n                <p>0.00</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"H3U APPROVED\" prop=\"date\" [width]=\"150\" [canAutoResize]=\"false\"  [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n               <span><strong> {{row.discountAmount}} </strong></span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n        <ul fxFlex=\"100\" class=\"amnt\">\r\n          <li>\r\n            <strong>G.Total: {{getSum(0)}}</strong>\r\n            <!--<span> Two Thousands Five Hundread</span>-->\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"end\">\r\n          <button md-raised-button class=\"primary\">Submit</button>\r\n          <button md-raised-button class=\"primary\" fxFlexOffset=\"3\" md-dialog-close (click)=editInvoice();>Edit</button>\r\n        </div>\r\n        \r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/transactions/components/summary/summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  vertical-align: middle;\n  width: auto;\n  height: 60px;\n  margin: 5px 0px; }\n\n.popup1 {\n  min-width: 1000px; }\n\nul {\n  padding-left: 0px; }\n  ul li {\n    list-style: none;\n    padding: 5px 0px;\n    font-weight: bold; }\n    ul li span {\n      font-weight: normal; }\n\nol {\n  list-style: none; }\n\n.tabspan {\n  font-size: 12px;\n  color: #489cce; }\n\nngx-datatable {\n  height: 300px;\n  overflow-y: scroll; }\n  ngx-datatable p {\n    line-height: .5;\n    font-size: 12px; }\n\n.amnt span {\n  text-align: right; }\n\n.field {\n  border: none;\n  padding-top: 0px;\n  margin-top: 0px; }\n\n.foot {\n  background-color: #535f72;\n  color: #ffffff;\n  padding: 0px 30px;\n  margin: 20px 0px; }\n  .foot a {\n    color: #ffffff; }\n\n.inst {\n  background: transparent;\n  border-top: 3px solid #8c8a8a;\n  border-bottom: 3px solid #8c8a8a;\n  margin: 20px 0px;\n  padding: 0px 30px;\n  color: #000000; }\n\n.supp {\n  margin-bottom: 0px; }\n  .supp li {\n    line-height: 1; }\n    .supp li p {\n      font-weight: normal;\n      font-size: 12px; }\n\n._brand.providerIcon > img {\n  width: 90px;\n  overflow: hidden;\n  float: left;\n  height: auto;\n  margin: 0px 0 10px 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/components/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__ = __webpack_require__("../../../../../src/app/services/transactions/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SummaryComponent = /** @class */ (function () {
    //temp = [];
    //isLimits: number = 3;
    function SummaryComponent(dialogRef, data, _transaction, snackBar, _route, _profile) {
        if (data === void 0) { data = []; }
        this.dialogRef = dialogRef;
        this.data = data;
        this._transaction = _transaction;
        this.snackBar = snackBar;
        this._route = _route;
        this._profile = _profile;
        // @ViewChild('myTable') table: any;
        this.rows = [];
        this.user = {};
        //debugger;
        this.rows = this.data[0];
    }
    SummaryComponent.prototype.getSum = function (totalAmount) {
        var sum = 0;
        for (var i = 0; i < this.rows.length; i++) {
            sum += this.rows[i]['totalAmount'];
        }
        return sum;
    };
    SummaryComponent.prototype.ngOnInit = function () {
        this.getInvoiceViewData();
    };
    SummaryComponent.prototype.editInvoice = function () {
        this.rows = [];
    };
    SummaryComponent.prototype.getInvoiceViewData = function () {
        var _this = this;
        debugger;
        this._transaction.getViewInvoicedata()
            .subscribe(function (data) {
            _this.InvoiceViewData = data.data;
            _this.user.companyName = data.data['companyName'];
            _this.user.companyAddress = data.data['companyAddress'];
            _this.user.companyPhoneNo = data.data['companyPhoneNo'];
            _this.user.companyLogo = data.data['companyLogo'];
            _this.user.outletName = data.data['outletName'];
            _this.user.outletAddress = data.data['outletAddress'];
            _this.user.outletPhoneNo = data.data['outletPhoneNo'];
            _this.user.outletLogo = data.data['outletLogo'];
            _this.user.outletGstNo = data.data['outletGstNo'];
            _this.user.hsnCode = data.data['hsnCode'];
            _this.user.hsnName = data.data['hsnName'];
            console.log(_this.InvoiceViewData);
        });
    };
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__("../../../../../src/app/transactions/components/summary/summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/components/summary/summary.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */], __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__["a" /* ProfileService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_transactions_transaction_service__["a" /* TransactionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_profile_profile_service__["a" /* ProfileService */]) === "function" && _e || Object])
    ], SummaryComponent);
    return SummaryComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction-invoice/transaction-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <md-card fxFlex=\"100\">\n    <ul class=\"supp\">\n      <li fxFlex=\"40\">\n       <img src=\"https://www.h3u.com/bucket/assets/h3u/logos/H3U_Logo_SVG.svg\" alt=\"H3U\" class=\"logo\" style=\"height:80px; width:auto; margin:10px 0;\">\n      </li>\n       <li fxFlex=\"40\">\n        <h2>Transaction Invoice</h2>\n      </li>\n      <li fxFlex=\"20\">\n        Vipul Medcare Pvt Ltd\n        <p>534, Udyog Vihar, Phase V</p>\n        <p>Gurgaon, Haryana-122016</p>        \n        <p style=\"font-weight:bold;\">0124-4803182 </p>\n      </li>\n    </ul>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n      <fieldset fxFlex=\"97\" class=\"field\">\n        <fieldset fxFlex=\"100\">\n          <legend> Patient Information</legend>\n          <div fxLayout=\"row\" fxLayout.xs=\"column\">\n            <ul fxFlex=\"60\">\n               \n              <li>\n                <strong fxFlex=\"25\">Name:</strong>\n                <span fxFlex=\"30\">{{model.patientName}}</span>               \n              </li>\n                      \n              <li>\n                <strong fxFlex=\"25\">Gender:</strong>\n                <span fxFlex=\"30\"> {{model.gender}}</span>\n                 <strong fxFlex=\"15\">Age:</strong>\n                <span>{{model.age}}</span>\n              </li>\n              <li>\n                <strong fxFlex=\"25\">Address:</strong>\n                <span>{{model.patientAddress}}</span>\n              </li>\n              <li>\n                <strong fxFlex=\"25\">Card Holder:</strong>\n                <span fxFlex=\"70\">{{model.cardHolderName}}</span>\n              </li>\n            </ul>\n            <ul fxFlex=\"40\" style=\"border-left:1px solid #cccccc\">\n              <li>\n                <strong fxFlex=\"40\"> UHID:</strong>\n                <span>{{model.uhid}}</span>\n              </li>\n              <li>\n                  <span style=\"color:red\"> BarCode</span>\n                </li>\n                <hr>\n              <li>\n                <strong fxFlex=\"40\">Card No:</strong>\n                <span>{{model.cardNo}}</span>\n              </li>\n\n              <li>\n                <strong fxFlex=\"40\">Booking ID:</strong>\n                <span>{{model.bookingId}}</span>\n              </li>\n            </ul>\n          </div>\n        </fieldset>\n        <fieldset fxFlex=\"100\">\n          <legend> Provider Information</legend>\n          <div fxLayout=\"row\" fxLayout.xs=\"column\">\n            <ul fxFlex=\"60\">\n              <li>\n                <strong fxFlex=\"25\">Name:</strong>\n                <span fxFlex=\"30\">{{model.outletName}}</span>\n                <strong fxFlex=\"15\"> Code:</strong>\n                <span>{{model.outletCode}}</span>\n              </li>\n           \n              <li>\n                <strong fxFlex=\"25\">Doctor Name:</strong>\n                <span fxFlex=\"30\">{{model.doctorName}}</span>\n                 <strong fxFlex=\"15\"> User ID:</strong>\n                <span> {{model.puhid}}</span>\n              </li>\n               <li>\n                <strong fxFlex=\"25\">Address:</strong>\n                <span fxFlex=\"70\">{{model.outletAddress}}</span>\n              </li>\n            </ul>\n            <ul fxFlex=\"40\" style=\"border-left:1px solid #cccccc\">\n              <li>\n                <strong fxFlex=\"40\">Txn ID:</strong>\n                <span>{{model.txnId}}</span>\n              </li>\n              <li>\n                <strong fxFlex=\"40\"> Date/Time:</strong>\n                <span>{{model.txnDateTime}} </span>\n              </li>\n              <hr>\n              <li>\n                <strong fxFlex=\"40\"> GST No:</strong>\n                <span>{{model.gstNo}}</span>\n              </li>\n\n              <li>\n                <span style=\"color:red\">BarCode</span>\n              </li>\n            </ul>\n          </div>\n        </fieldset>\n\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">      \n\n           <table class=\"tabl\">\n            <tr>\n                <th style=\"width:50px;\">S.No.</th>\n                <th>SERVICE CODE</th>\n                <th>SERVICE</th>\n                <th>DESCRIPTION</th>\n                <th>AMOUNT</th>\n<!--               \n                <th>AMOUNT</th>-->\n               \n            </tr>\n                <tr>\n                    <td>{{model.srNo}}</td>\n                    <td>{{model.serviceCode}}</td>\n                    <td>\n                      <p>{{model.serviceName}}</p>\n                      <p class=\"tabspan\">{{model.subServiceName}}</p>\n                    </td>\n                    <td>{{model.description}}</td>\n                    <td><span>{{model.price}}</span></td>\n                    <!--<td></td>-->\n                    <!--<td><span>\n              <strong>{{model.amount}}</strong>\n            </span></td>-->\n                </tr>\n        </table>\n\n        </div>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n          <ul fxFlex=\"100\" class=\"amnt\">\n            <li>\n              <strong fxFlex=\"80\">Total:</strong>\n              <span>{{model.price}}/-</span>\n            </li>\n             <li>\n                <strong fxFlex=\"80\"> Discount:</strong>\n                <span> {{model.discount}}/-</span>\n             </li>\n             <li>\n              <strong fxFlex=\"80\">Total Billed Amount:</strong>\n              <span class=\"txtBold\">{{model.amount}}/-</span>\n             </li> \n            <li>\n              <strong fxFlex=\"80\"> GST(Tax):</strong>\n              <span>0.00/-</span>\n            </li>\n            <li>\n              <strong fxFlex=\"80\"> Net Payable Amount:</strong>\n              <span class=\"txtBold\">{{model.amount}}/-</span>\n            </li>\n            <!--<li>\n              <strong>In Words:</strong>\n              <span class=\"txtBold\">Eight Hundread Only</span>\n            </li>-->\n          </ul>\n        </div>\n        <div class=\"inst\" fxLayout=\"row\" fxLayout.xs=\"column\">\n          <p fxFlex=\"80\">No Tax is payable on reverse charge basis</p>\n          <p> Authorized Signatory</p>\n        </div>\n        <div class=\"foot\" fxLayout=\"row\" fxLayout.xs=\"column\">\n          <p fxFlex=\"30\">\n            <a fxFlex.xs=\"80\" routerLink=\"https://www.h3u.com\">https://www.h3u.com</a>\n          </p>\n          <p fxFlex=\"30\">\n            <a href=\"mailto:enquiry@h3u.com\">enquiry@h3u.com</a>\n          </p>\n          <p fxFlex=\"30\" fxLayoutAlign=\"end\">\n            <a routerLink=\"https://twitter.com/h3uIndia\" title=\"https://twitter.com/h3uIndia\">\n              <img src=\"assets/images/twitter-1.png\" alt=\"Twitter\">\n              <span>/H3Uindia</span>\n            </a>\n            <a routerLink=\"https://www.facebook.com/H3Uindia/\" title=\"https://www.facebook.com/H3Uindia\">\n              <img src=\"assets/images/facebook-1.png\" alt=\"Facebook\">\n              <span>/H3Uindia</span>\n            </a>\n          </p>\n        </div>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"end\">\n          <a md-raised-button class=\"primary\" [attr.href]=\"model.path\" target=\"_blank\" >Print</a>\n          <!--<button md-raised-button class=\"primary\" [routerLink]=\"model.path\">Print</button>-->\n        </div>\n        <!-- <div *ngIf=\"show\" class=\"popup\">\n          <div class=\"pop\">you have entered wrong OTP\n              <button>X</button>\n          </div>\n            </div> -->\n      </fieldset>\n    </div>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction-invoice/transaction-invoice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  vertical-align: middle;\n  width: auto;\n  height: 60px;\n  margin: 5px 0px; }\n\nul li {\n  list-style: none;\n  padding: 5px 0px;\n  font-weight: bold; }\n  ul li span {\n    font-weight: normal; }\n\nol {\n  list-style: none; }\n\n.tabspan {\n  font-size: 12px;\n  color: #489cce; }\n\nngx-datatable p {\n  line-height: .5;\n  font-size: 12px; }\n\n.amnt span {\n  text-align: right; }\n\n.field {\n  border: none;\n  padding-top: 0px;\n  margin-top: 0px; }\n\n.foot {\n  background-color: #535f72;\n  color: #ffffff;\n  padding: 0px 30px;\n  margin: 20px 0px; }\n  .foot a {\n    color: #ffffff;\n    padding: 0px 10px; }\n    .foot a img {\n      padding: 0px 2px;\n      height: 20px; }\n    .foot a span {\n      vertical-align: top; }\n\n.inst {\n  background: transparent;\n  border-top: 3px solid #8c8a8a;\n  border-bottom: 3px solid #8c8a8a;\n  margin: 20px 0px;\n  padding: 50px 30px 0px 30px;\n  color: #000000; }\n\n.supp {\n  margin-bottom: 0px; }\n  .supp li {\n    line-height: 0.5; }\n    .supp li p {\n      font-weight: normal;\n      font-size: 12px; }\n\n.txtBold {\n  font-weight: bold !important;\n  color: #489cce; }\n\n.tabl {\n  width: 100%;\n  margin: 1% 0%;\n  border: 1px solid #d2e3f9; }\n  .tabl p {\n    line-height: .5; }\n  .tabl th {\n    border: none;\n    padding: 15px 10px;\n    background: #e4ecf9;\n    text-align: left; }\n  .tabl td {\n    line-height: 0.2;\n    padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction-invoice/transaction-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__ = __webpack_require__("../../../../../src/app/services/transactions/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionInvoiceComponent = /** @class */ (function () {
    function TransactionInvoiceComponent(_transaction, snackBar) {
        this._transaction = _transaction;
        this.snackBar = snackBar;
        // rows = [];
        // temp = [];
        // isLimits: number = 10;
        // records: any;
        this.model = {};
        this.invoiceData = {};
    }
    TransactionInvoiceComponent.prototype.ngOnInit = function () {
        this.model = this._transaction.invoiceData.data;
        //  debugger;
        //  this.rows = this._transaction.invoiceData;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
        __metadata("design:type", Object)
    ], TransactionInvoiceComponent.prototype, "table", void 0);
    TransactionInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction-invoice',
            template: __webpack_require__("../../../../../src/app/transactions/components/transaction-invoice/transaction-invoice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/components/transaction-invoice/transaction-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdSnackBar */]) === "function" && _b || Object])
    ], TransactionInvoiceComponent);
    return TransactionInvoiceComponent;
    var _a, _b;
}());

//# sourceMappingURL=transaction-invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction-list/transaction-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div fxLayout=\"row\">\r\n    <md-card class=\"profileCard\" fxFlex=\"100\">\r\n        <div fxFlex=\"98\" fxFlexOffset=\"1\" class=\"left-card\">\r\n        <h2><span  fxFlex=\"70\">Transaction List</span>\r\n          <button md-raised-button type=\"button\" style=\"letter-spacing: 2px;\" class=\"primary\" (click)=\"openreview()\">Generate Invoice</button>\r\n         <button md-raised-button type=\"button\" fxFlexOffset=\"2\" style=\"letter-spacing: 2px;\" class=\"primary\" routerLink=\"/dashboard/transactions/transaction\">Add Transaction</button>\r\n         </h2>\r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fx-layout-align=\"center center\">\r\n              <div fxFlex=\"60\"  fxFlex.xs=\"100\" class=\"v_align\" >\r\n                <md-input-container fxFlex=\"80\" fxFlex.xs=\"98\">\r\n                  <input type=\"text\" mdInput type='text' placeholder='Search transaction...' (keyup)='updateFilter($event)' />\r\n                </md-input-container>\r\n                </div>\r\n              <div fxFlex=\"40\" fxFlex.xs=\"100\">\r\n                <md-input-container fxFlex=\"95\" fxFlex.xs=\"80\">\r\n                  <input mdInput [mdDatepicker]=\"startDatePicker\" placeholder=\"Start Date\">\r\n                  <button type=\"button\" mdSuffix [mdDatepickerToggle]=\"startDatePicker\"></button>\r\n                </md-input-container>              \r\n                <md-datepicker #startDatePicker (selectedChanged)=\"fetchRecByStartDate($event)\"></md-datepicker>\r\n                <md-input-container fxFlex=\"95\" fxFlex.xs=\"100\" fxFlexOffset=\"5\" >\r\n                  <input mdInput [mdDatepicker]=\"endDatePicker\" placeholder=\"End Date\">\r\n                  <button type=\"button\" mdSuffix [mdDatepickerToggle]=\"endDatePicker\"></button>\r\n                </md-input-container>\r\n                <md-datepicker #endDatePicker (selectedChanged)=\"fetchRecByEndDate($event)\"></md-datepicker>\r\n              </div>\r\n            </div>\r\n              <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n               <div fxFlex=\"100\">\r\n                  <small>\r\n                      <a #expandButton (click)=\"onExpandClick()\"></a>        \r\n                   </small>\r\n                    <ngx-datatable #myTable class='material fullscreen expandable'          \r\n                    [rows]='rows'\r\n                    [limit]=\"10\"\r\n                    [columnMode]=\"'force'\"\r\n                    [headerHeight]=\"50\"\r\n                    [footerHeight]=\"50\"\r\n                    [scrollbarV]=\"false\" \r\n                    [rowHeight]=\"'auto'\"\r\n                    [selected]=\"selected\"\r\n                    [selectionType]=\"'checkbox'\"\r\n                    (activate)=\"onActivate($event)\"\r\n                    (select)='onSelect($event)'\r\n                    >                    \r\n                    <ngx-datatable-row-detail [rowHeight]=\"60\" #myDetailRow >\r\n                        <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\r\n                         <ul fxFlex=\"92\" fxLayoutAlign=\"center center\">\r\n                          <li fxFlex=\"30\">Status:{{row.status}}</li>\r\n                          <li fxFlex=\"30\">Remarks:Pending</li>\r\n                          <li fxFlex=\"30\">Created By: <a>{{row.patientName}}</a></li>\r\n                          <li fxFlex=\"20\" fxLayoutAlign=\"end\" (click) =\"getTransctionInvoiceData(row.transactionId);\" target=\"_blank\"><a title=\"Print\"><md-icon class=\"print\">print</md-icon></a></li>\r\n                          </ul>\r\n                        </ng-template>\r\n                      </ngx-datatable-row-detail>\r\n                      <ngx-datatable-column [width]=\"30\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n                        <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\r\n                          <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\" />\r\n                        </ng-template>\r\n                        <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                          <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"/>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                     <ngx-datatable-column name=\"Txn ID\" prop=\"id\" [width]=\"160\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>                   \r\n                       {{row.transactionId}}\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n\r\n                     <ngx-datatable-column name=\"DATE\" prop=\"date\" [width]=\"200\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n                          <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                             {{row.transactionDate}}\r\n                          </ng-template>\r\n                     </ngx-datatable-column> \r\n\r\n                     <ngx-datatable-column name=\"TYPE\" prop=\"type\" [width]=\"200\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\"  let-value=\"value\" ngx-datatable-cell-template>                   \r\n                        <span>{{row.discountAmount}}</span>\r\n                        <p>{{row.cardNumber}}</p>\r\n                        <p class=\"tabspan\">{{row.couponCode}}</p>\r\n                      </ng-template>\r\n                    </ngx-datatable-column> \r\n\r\n                    <ngx-datatable-column name=\"PATIENT\" prop=\"patient\"  [width]=\"250\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\"  let-value=\"value\" ngx-datatable-cell-template>                   \r\n                        <span>{{row.patientName}}</span>\r\n                        <p>Id: {{row.idProofType}}</p>\r\n                        <p>G: {{row.gender}}</p>\r\n                        <p class=\"tabspan\">M: {{row.contactNo}}</p>\r\n                      </ng-template>\r\n                    </ngx-datatable-column> \r\n                     \r\n                    <ngx-datatable-column name=\"SERVICE\" prop=\"service\" [width]=\"200\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                        <span>{{row.service}}</span>\r\n                        <p class=\"tabspan\">{{row.subService}}</p>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n\r\n                     <ngx-datatable-column name=\"AMOUNT\" prop=\"amnt\" [width]=\"140\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                          <span>{{row.totalAmount}}</span>\r\n                          <p title=\"discount\">-{{row.discountAmount}}</p>\r\n                          <span><strong>{{row.payableAmount}}</strong></span>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n\r\n                          \r\n                    </ngx-datatable>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n        <!-- <div fxFlex=\"29\" fxFlexOffset=\"1\" class=\"right-card\" fxShow fxHide.xs=\"true\">\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"100\" class=\"cp-para\">\r\n                \r\n              </div>\r\n            </div>\r\n          </div> -->\r\n    </md-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction-list/transaction-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-datatable.material {\n  overflow-x: scroll !important; }\n\n.tabspan {\n  font-size: 12px;\n  color: #489cce; }\n\nngx-datatable p {\n  line-height: .5;\n  font-size: 12px; }\n\nngx-datatable ul {\n  list-style: none; }\n\nngx-datatable .print {\n  font-size: 40px;\n  color: #696969;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction-list/transaction-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__ = __webpack_require__("../../../../../src/app/services/transactions/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__summary_summary_component__ = __webpack_require__("../../../../../src/app/transactions/components/summary/summary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent(_alltransaction, dialog) {
        this._alltransaction = _alltransaction;
        this.dialog = dialog;
        this.rows = [];
        this.selected = [];
        this.isLimits = 10;
        this.allTransction = {};
        this.user = {};
        this.alldatavalue = [];
    }
    TransactionListComponent.prototype.onExpandClick = function () {
        this.table.rowDetail.expandAllRows();
    };
    TransactionListComponent.prototype.ngOnInit = function () {
        this.getTransctionData();
    };
    TransactionListComponent.prototype.getTransctionInvoiceData = function (id) {
        var _this = this;
        // alert(value);
        // debugger;
        this.user.transactionId = id;
        this._alltransaction.getTransactionInvoce(this.user.transactionId)
            .subscribe(function (data) {
            _this.user.path = data.data["path"];
            //  window.open(this.user.path).print();
            _this.getPrint();
        });
    };
    TransactionListComponent.prototype.getPrint = function () {
        var printPage = window.open(this.user.path, '_blank');
    };
    TransactionListComponent.prototype.getTransctionData = function () {
        var _this = this;
        this._alltransaction.getAllTransactionList()
            .subscribe(function (data) {
            //debugger;
            _this.rows = data.data;
            var el = _this.el.nativeElement;
            setTimeout(function () {
                el.click();
            });
        });
    };
    TransactionListComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        //console.log('Select Event', this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        this.alldatavalue = this.selected;
        var _b;
    };
    TransactionListComponent.prototype.onActivate = function (event) {
        console.log('Activate Event', event);
    };
    TransactionListComponent.prototype.openreview = function () {
        //debugger;       
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__summary_summary_component__["a" /* SummaryComponent */], { data: [
                this.rows = this.alldatavalue
            ] });
        //  this. getTransctionData();
        this.selected = [];
        this.getTransctionData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
        __metadata("design:type", Object)
    ], TransactionListComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandButton'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], TransactionListComponent.prototype, "el", void 0);
    TransactionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction-list',
            template: __webpack_require__("../../../../../src/app/transactions/components/transaction-list/transaction-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/components/transaction-list/transaction-list.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */]) === "function" && _c || Object])
    ], TransactionListComponent);
    return TransactionListComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=transaction-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div fxLayout=\"row\">\r\n      <md-card class=\"profileCard\" fxFlex=\"100\">\r\n          <div fxFlex=\"69\" fxFlexOffset=\"1\" class=\"left-card\">\r\n              <h2>Transaction</h2>\r\n               <form class=\"form\"> \r\n              <div fxLayout=\"row\" fx-layout-align=\"center center\">\r\n                <div fxFlex=\"100\" class=\"v_align\" >  \r\n                    <md-input-container fxFlex=\"45\">\r\n                        <input type=\"text\" mdInput placeholder=\"Card Number\" required [(ngModel)]=\"user.cardNumber\" name=\"cardNumber\" #cardNumber=\"ngModel\" (blur)=\"getTrasnctionData1($event);\" maxlength=\"20\">\r\n                    </md-input-container>\r\n                     <!--<div fxFlex=\"100\" style=\"padding-left:20px;\">\r\n                      <md-input-container fxFlex=\"45\">\r\n                        <input type=\"text\" mdInput placeholder=\"Cupon Number\" required [(ngModel)]=\"user.cuponNumber\" name=\"cuponNumber\" #cuponNumber=\"ngModel\" maxlength=\"20\">\r\n                    </md-input-container>\r\n                     </div>-->\r\n                    \r\n                    </div>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <fieldset fxFlex=\"100\">\r\n                        <legend>Services</legend>\r\n                    <div fxLayout=\"row\" fxFlex=\"97\">\r\n                        <md-select placeholder=\"Select Service\" fxFlex=\"50\" (change)=\"getSubService($event.value);\" [(ngModel)]=\"user.serviceId\" name=\"serviceId\" #serviceId=\"ngModel\">\r\n                            <md-option *ngFor=\"let service of services\" value= {{service.serviceId}} select=\"user.serviceId\">\r\n                              {{ service.serviceName }}\r\n                        </md-option>\r\n                          </md-select>\r\n\r\n                          <md-select placeholder=\"Speciality\" fxFlex=\"50\" fxFlexOffset=\"2\" [(ngModel)]=\"user.subServiceId\" name=\"subServiceId\" #subServiceId=\"ngModel\" (change)=\"getMemberData($event.value); getSubServiceName($event.value)\">\r\n                           <md-option *ngFor=\"let speciality of speciality\" value= {{speciality.subServiceId}} select =\"this.user.subServiceId\">\r\n                              {{ speciality.subServiceName }}\r\n                            </md-option>\r\n                          </md-select>\r\n\r\n                    </div><br>\r\n                    <div fxLayout=\"row\" fxFlex=\"97\">\r\n                     \r\n                          <!--<md-input-container fxFlex=\"50\" fxFlexOffset=\"2\">\r\n                              <input type=\"text\" mdInput type='text'  placeholder='Amount' />\r\n                          </md-input-container>-->\r\n                    </div>\r\n                  </fieldset>\r\n                  \r\n                </div>\r\n              <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                  <fieldset fxFlex=\"100\">\r\n                      <legend>Member</legend>\r\n                  <div fxFlex=\"100\">\r\n                      <!--<small>\r\n                          <a   (click)=\"table.rowDetail.expandAllRows()\">Expand All</a> | \r\n                          <a   (click)=\"table.rowDetail.collapseAllRows()\">Collapse All</a>\r\n                        </small>-->\r\n                    <ngx-datatable #myTable class='material fullscreen expandable'          \r\n                    [rows]='rows'\r\n                    [limit]=\"PageSize\"\r\n                    [columnMode]=\"'force'\"\r\n                    [headerHeight]=\"50\"\r\n                    [footerHeight]=\"50\"\r\n                    [scrollbarV]=\"false\" \r\n                    [rowHeight]=\"'auto'\">\r\n\r\n                    <!--<ngx-datatable-row-detail [rowHeight]=\"60\" #myDetailRow >\r\n                        <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\r\n                          <ol fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n                          <li fxFlex=\"35\"><span> Aadhar Card </span>{{user.addharNo}}</li>\r\n                          <li fxFlex=\"13\">adharcardlink</li>\r\n                          <li fxFlex=\"80\"><a><button md-mini-fab ><md-icon>remove_red_eye</md-icon></button></a></li>\r\n\r\n                          </ol>\r\n                        </ng-template>\r\n                      </ngx-datatable-row-detail>-->\r\n                      <ngx-datatable-column name=\"NAME\" prop=\"name\" >\r\n                        <!-- Row Detail Template -->\r\n                        <ng-template let-row=\"row\"  let-value=\"value\" ngx-datatable-cell-template>                   \r\n                         <a (click)=\"kycShow(row)\" style=\"color:blue;cursor:hand;\">{{row.name}}</a>\r\n                        </ng-template>\r\n                      </ngx-datatable-column> \r\n                      <ngx-datatable-column name=\"GENDER\" prop=\"gender\" width=\"100\">\r\n                        <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                          {{row.gender}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                    \r\n                      <ngx-datatable-column name=\"DATE OF BIRTH\" prop=\"dob\">\r\n                        <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                          {{row.dob}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>  \r\n\r\n                      <ngx-datatable-column name=\"RELATION\" prop=\"relation\" width=\"100\">\r\n                        <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                          {{row.relation}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column> \r\n\r\n                      <ngx-datatable-column name=\"AGE\" prop=\"age\" width=\"100\">\r\n                        <ng-template let-row=\"row\" let-value=\"values\" ngx-datatable-cell-template>\r\n                          {{row.age}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column> \r\n                     \r\n                    </ngx-datatable>\r\n                  </div>\r\n                </fieldset>\r\n              </div>\r\n\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\" *ngIf=\"kycshow\" >\r\n                      <fieldset fxFlex=\"40\">\r\n                          <legend>Member ID</legend>\r\n                          <md-card fxFlex=\"100\" class=\"fixh\">\r\n                              <img md-card-image src=\"{{user.idProoImg}}\" alt=\"user profile photo\">\r\n                              <md-card-content>\r\n                                 <span fxFlex=\"50\" fxLayoutAlign=\"start\">{{user.name}}</span>\r\n                                 <span fxFlex=\"50\" fxLayoutAlign=\"end\">{{user.relation}}</span>\r\n                                </md-card-content>\r\n                              </md-card>\r\n                            </fieldset>\r\n                      \r\n                      <fieldset fxFlex=\"60\">\r\n                          <legend>Member ID Proof</legend>\r\n                          <md-card fxFlex=\"100\" class=\"fixh\">\r\n                            <div fxLayout=\"row\">  \r\n                            <md-select placeholder=\"ID proof type\" fxFlex=\"100\" [(ngModel)] = user.idProofTypeId name=\"idProofTypeId\" #idProofTypeId=\"ngModel\">\r\n                              <md-option *ngFor=\"let Identity of Identities\" value = {{Identity.id}}> {{ Identity.name }} </md-option>\r\n                            </md-select> \r\n                            </div><br>\r\n                           \r\n                           <div fxLayout=\"row\"  fxLayoutGap=\"10px\">\r\n                               <md-input-container fxFlex=\"100\">\r\n                                <input type=\"text\" mdInput type='text' placeholder='ID Proof No' [(ngModel)]=\"user.idProofNumber\" name=\"idProofNumber\" #idProofNumber=\"ngModel\" />\r\n                                </md-input-container>\r\n                            </div>  \r\n                            <div *ngIf=\"IdValue\">\r\n                            <p>Upload ID proof</p>\r\n                            <div class=\"file-upload\" fxLayout fxLayoutAlign=\"center center\">\r\n                               <input id=\"upload\" class=\"btnupload\" type=\"file\" name=\"file-upload\">\r\n                               <md-icon>file_upload</md-icon>\r\n                            </div>\r\n                            </div>\r\n                            <a md-raised-button class=\"primary\" (click)=\"otpshow(); postOTP();\">Verify</a>\r\n                            <a md-raised-button class=\"primary\" (click)=\"openDialog()\">Reject</a>\r\n                          </md-card>\r\n                        </fieldset>\r\n                      </div>\r\n\r\n                  \r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\" *ngIf=\"showotp\" >\r\n                          <fieldset fxFlex=\"100\">\r\n                          <legend>OTP Request</legend>\r\n                          <div fxFlex=\"100\"  fxFlex.xs=\"100\">\r\n                           <md-input-container fxFlex=\"80\"> \r\n                              <input type=\"text\" mdInput type='text' placeholder='Please Enter OTP' [(ngModel)]=\"user.otp\" name=\"otp\" #otp=\"ngModel\" />\r\n                           </md-input-container>   \r\n                           <button md-raised-button fxFlexOffset=\"5\" class=\"btn_contain primary\" (click)=\"verifyOTP();\">Verify</button>\r\n                           </div>\r\n                           \r\n<!--                           \r\n                           <md-input-container fxFlex=\"98\"> \r\n                              <input type=\"text\" mdInput type='text' placeholder='Please Enter OTP' [(ngModel)]=\"user.otp\" name=\"otp\" #otp=\"ngModel\" />\r\n                           </md-input-container>   \r\n                           <span fxLayoutAlign=\"end\"><button md-raised-button class=\"primary\" (click)=\"verifyOTP();\">Verify</button></span>-->\r\n                        </fieldset>\r\n                       </div>\r\n\r\n                       <div fxLayout=\"row\" fxLayout.xs=\"column\" *ngIf=\"payshow\" >\r\n                          <fieldset fxFlex=\"100\">\r\n                          <legend>Payment</legend>\r\n                          <div fxFlex=\"100\"  fxFlex.xs=\"100\">\r\n                          <md-input-container fxFlex=\"80\">\r\n                              <input type=\"text\" mdInput type='text'  placeholder='Total Amount' [(ngModel)]=\"user.totalAmount\" name=\"totalAmount\" #totalAmount=\"ngModel\" (onChange) = \"getPayableAmountData();\" />\r\n                            </md-input-container>  \r\n                           <button md-raised-button fxFlexOffset=\"5\" class=\"btn_contain primary\"  (click)=\"getPayableAmountData(); paydetails();\">Verify</button>\r\n                          </div>\r\n                          \r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\" *ngIf=\"detailspay\" >\r\n                     <fieldset fxFlex=\"100\" class=\"field\">\r\n                      \r\n                       <div fxLayout=\"row\" fxFlex=\"98\">     \r\n                                            \r\n                        <md-input-container fxFlex=\"49\"  >\r\n                            <input type=\"text\" mdInput type='text'  placeholder='Approved Amount' [(ngModel)]= \"payableTotalAmount.discountAmount\" name=\"discountAmount\" #discountAmount=\"ngModel\">\r\n                        </md-input-container>\r\n                        <md-input-container fxFlex=\"48\" fxFlexOffset=\"2\">\r\n                            <input type=\"text\" mdInput type='text'  placeholder='Payable Amount' [(ngModel)] = \"payableTotalAmount.payableAmount\" name=\"payableAmount\" #payableAmount=\"ngModel\" />\r\n                        </md-input-container>\r\n           \r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" fxFlex=\"97\">\r\n                        \r\n                        <md-input-container fxFlex=\"32\">\r\n                            <input type=\"text\" mdInput type='text'  placeholder='Doctor Name' [(ngModel)]=\"user.doctor\" name=\"doctor\" #doctor=\"ngModel\"/>\r\n                        </md-input-container>\r\n                        \r\n                       \r\n                        <md-select placeholder=\"Select Payment Mode\" fxFlex=\"32\" fxFlexOffset=\"2\" [(ngModel)] = \"user.refPayModeId\" name=\"refPayModeId\" #refPayModeId=\"ngModel\" class=\"opt\" [disabled] =\"amoutP\">\r\n                            <md-option *ngFor=\"let _option of paymentMode\" value= {{_option.id}}> {{ _option.name }} </md-option>\r\n                        </md-select>\r\n\r\n                        <md-input-container fxFlex=\"32\" fxFlexOffset=\"2\">\r\n                            <input type=\"text\" mdInput type='text'  placeholder='Payment Ref Id' [(ngModel)]=\"user.payTransectionNo\" name=\"payTransectionNo\" #payTransectionNo=\"ngModel\" />\r\n                        </md-input-container> \r\n                    \r\n                    </div>\r\n\r\n               </fieldset>\r\n                      \r\n                    </div>  \r\n                        </fieldset>\r\n                       </div>\r\n\r\n                    \r\n                \r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\"  fxLayoutAlign=\"end\">\r\n                    <button md-raised-button class=\"primary\" (click)=\"openreview()\" [disabled] =\"button\">Submit</button>\r\n                  </div>\r\n               </form>   \r\n          </div>\r\n           \r\n        <div fxFlex=\"29\" fxFlexOffset=\"1\" class=\"right-card\" fxShow fxHide.xs=\"true\">\r\n          <div fxLayout=\"row\">\r\n            <div fxFlex=\"100\" class=\"cp-para\">\r\n              <h3><label>Recent Users</label></h3>\r\n              <ul>\r\n                <li>Save Transaction</li>                \r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n      </md-card>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction/transaction.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea.mat-input-element {\n  overflow: auto;\n  height: 100px; }\n\n.fixh {\n  min-height: 405px; }\n\n.file-upload {\n  height: 70px;\n  border: 2px dashed #cccccc;\n  margin-bottom: 20px; }\n  .file-upload md-icon {\n    position: absolute; }\n\n.opt {\n  margin-top: 6px; }\n\n.btnupload {\n  height: 70px;\n  width: 100%;\n  opacity: 0; }\n\nlabel {\n  font-size: 20px;\n  font-weight: 300;\n  font-family: \"Oswald\",Helvetica,Arial,sans-serif; }\n\n.cp {\n  position: relative; }\n\n.cp-para {\n  text-align: center;\n  font-size: 22px;\n  font-weight: normal; }\n  .cp-para ul {\n    list-style: none;\n    position: relative;\n    font-size: 16px;\n    color: #56befe;\n    line-height: 2;\n    padding-left: 0px; }\n\n.fixh {\n  min-height: 405px; }\n\n.cp-para h3 span {\n  position: relative;\n  font-family: \"Oswald\",Helvetica,Arial,sans-serif; }\n\n.cp-para h3 span::after {\n  content: '';\n  position: absolute;\n  width: 80px;\n  height: 1px;\n  bottom: -8px;\n  left: 0;\n  background: #4b5668; }\n\nhr {\n  width: 10%;\n  border-bottom: 5px solid #a4a2a2;\n  border-radius: 7px;\n  margin-top: 25px;\n  margin-bottom: 25px; }\n\nol {\n  list-style: none;\n  float: left; }\n  ol li {\n    font-size: 14px;\n    font-weight: 500; }\n    ol li span {\n      color: #4dbbfe; }\n    ol li a {\n      cursor: pointer; }\n\n.mat-mini-fab {\n  height: 25px !important;\n  width: 25px !important;\n  margin-top: 10px; }\n  .mat-mini-fab md-icon {\n    position: relative;\n    top: -7px;\n    font-size: 17px; }\n\n.opt {\n  margin-top: 6px; }\n\n.btn_contain {\n  height: 40px;\n  margin-top: 25px; }\n\n.field {\n  border: none;\n  padding-top: 0px;\n  margin-top: 0px;\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/components/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__ = __webpack_require__("../../../../../src/app/services/transactions/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reject_reject_component__ = __webpack_require__("../../../../../src/app/transactions/components/reject/reject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__review_review_component__ = __webpack_require__("../../../../../src/app/transactions/components/review/review.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransactionComponent = /** @class */ (function () {
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
        this.payableTotalAmount = {};
        this.button = true;
        this.amoutP = false;
        this.showotp = false;
        this.detailspay = false;
        this.proData = {};
        this.getMembers = {};
        this.myControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]();
        this.paymentMode = [
            { id: 1, name: "Cash" },
            { id: 2, name: "Credit Card" },
            { id: 3, name: "Debt Card" },
            { id: 4, name: "Paytm Wallet" },
            { id: 5, name: "Others" }
        ];
    }
    TransactionComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__reject_reject_component__["a" /* RejectComponent */], { data: {
                cardNumber: this.user.cardNumber,
            } });
    };
    TransactionComponent.prototype.openreview = function () {
        //debugger;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__review_review_component__["a" /* ReviewComponent */], { data: {
                refCardId: this.user.refCardId,
                serviceId: this.user.serviceId,
                subServiceId: this.user.subServiceId,
                refDependentId: this.user.refDependentId,
                idProofTypeId: this.user.idProofTypeId,
                doctor: this.user.doctor,
                payTransectionNo: this.user.payTransectionNo,
                refPayModeId: this.user.refPayModeId,
                refcouponId: this.user.refcouponId,
                consultationType: this.user.consultationType,
                cardNumber: this.user.cardNumber,
                cuponNumber: this.user.cuponNumber,
                serviceName: this.user.serviceName,
                subServiceName: this.user.subServiceName,
                totalAmount: this.user.totalAmount,
                discountAmount: this.user.discountAmount,
                payableAmount: this.user.payableAmount,
                UserName: this.user.name,
                cardOnName: this.user.cardOnName,
                proName: this.proData.firstName + " " + this.proData.lastName
            } });
    };
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user['refPayModeId'] = "1";
        this.getIdentityData();
        this.getProviderData();
        this.route.queryParams.subscribe(function (queryParams) { return _this.abc = queryParams['page']; });
        if (this.abc != "" && this.abc != undefined) {
            this.user.cardNumber = this.abc;
            this.getTrasnctionData1();
        }
        this.kycshow = false;
        this.IdValue = false;
        this.getPayableAmountData();
    };
    TransactionComponent.prototype.getIdentityData = function () {
        var _this = this;
        this._transaction.getIdentity()
            .subscribe(function (data) {
            _this.Identities = data.data;
            //console.log(this.Identities);   
        });
    };
    TransactionComponent.prototype.getProviderData = function () {
        var _this = this;
        this._profile.getPersonalInfo()
            .subscribe(function (data) {
            // debugger;
            _this.proData = data.data;
        });
    };
    TransactionComponent.prototype.getPayableAmountData = function () {
        var _this = this;
        this._transaction.getpayableAmount({ totalAmount: this.user.totalAmount })
            .subscribe(function (data) {
            // debugger;       
            _this.payableTotalAmount = data.data;
            _this.user.discountAmount = data.data["discountAmount"];
            _this.user.payableAmount = data.data["payableAmount"];
            if (_this.payableTotalAmount.payableAmount === 0) {
                _this.amoutP = true;
                _this.amoutP.option.value === 0;
            }
            else {
                _this.amoutP = false;
            }
            // console.log(this.payableTotalAmount);
        });
    };
    TransactionComponent.prototype.getTrasnctionData1 = function () {
        var _this = this;
        //debugger;
        if (this.user.cardNumber.length == 6) {
            this._transaction.getCouponTransaction(this.user.cardNumber)
                .subscribe(function (data) {
                //debugger;
                _this.alldatavalue = data.data;
                _this.user.refCardId = data.data["refCardId"];
                //  this.user.cardNumber = data.data["cardNumber"];
                _this.user.refcouponId = data.data["refcouponId"];
                _this.user.consultationType = data.data["consultationType"];
                _this.rows = data.data["Members"];
                _this.services = data.data["Services"];
                _this.user.serviceId = _this.services[0]["serviceId"];
                _this.user.serviceName = _this.services[0]["serviceName"];
                _this.speciality = data.data["SubServices"];
                _this.user.subServiceId = _this.speciality[0]["subServiceId"];
                _this.user.subServiceName = _this.speciality[0]["subServiceName"];
                _this.user.totalAmount = data.data["totalAmount"];
                _this.user.discountAmount = data.data["discountAmount"];
                _this.user.payableAmount = data.data["payableAmount"];
                _this.user.cardOnName = _this.alldatavalue["Members"].filter(function (a) { return a.relationshipId === 1; })[0]["name"];
            });
        }
        else if (this.user.cardNumber.length == 16) {
            this._transaction.getTransaction(this.user.cardNumber)
                .subscribe(function (data) {
                //debugger;
                _this.alldatavalue = data.data;
                _this.user.refCardId = data.data["refCardId"];
                _this.user.refcouponId = data.data["refcouponId"];
                _this.user.consultationType = data.data["consultationType"];
                //  this.rows = data.data["Members"];
                _this.services = data.data["Services"];
                _this.speciality = data.data["SubServices"];
                _this.user.cardOnName = _this.alldatavalue["Members"].filter(function (a) { return a.relationshipId === 1; })[0]["name"];
            });
        }
        else {
            this.snackBar.open("Please enter the valid Card No / Cupon No.", "", { duration: 5000 });
        }
    };
    TransactionComponent.prototype.kycShow = function (value) {
        //debugger;
        this.kycshow = true;
        this.user.idProofTypeId = value.idProofTypeId;
        this.user.idProofNumber = value.idProofNumber;
        this.user.idProoImg = value.idProoImg;
        this.user.name = value.name;
        this.user.contactNo = value.contactNo;
        this.user.relation = value.relation;
        this.user.refDependentId = value.refDependentId;
        if (this.user.idProoImg === "") {
            this.IdValue = true;
        }
    };
    TransactionComponent.prototype.otpshow = function () {
        this.showotp = true;
        this.button = true;
    };
    TransactionComponent.prototype.paydetails = function () {
        this.detailspay = true;
        this.button = false;
    };
    TransactionComponent.prototype.showpay = function () {
        this.payshow = true;
        this.button = true;
    };
    TransactionComponent.prototype.getMemberData = function (value) {
        //debugger;
        this.rows = this.alldatavalue["Members"];
    };
    TransactionComponent.prototype.getSubService = function (value) {
        this.speciality = this.alldatavalue["SubServices"].filter(function (a) { return a.serviceId === value; });
        this.user.serviceName = this.alldatavalue["Services"].filter(function (a) { return a.serviceId === value; })[0]["serviceName"];
    };
    // edit readonly fields
    TransactionComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    TransactionComponent.prototype.getSubServiceName = function (value) {
        //debugger;
        this.user.subServiceName = this.alldatavalue["SubServices"].filter(function (a) { return a.subServiceId === value; })[0]["subServiceName"];
    };
    TransactionComponent.prototype.postOTP = function () {
        var _this = this;
        //debugger; 
        this.model.mobileNo = this.user.contactNo;
        this._transaction.sendOTP(this.model)
            .subscribe(function (data) {
            if (data.message) {
                // this.snackBar.open("Updated successfully","",{duration:5000});
                // return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    TransactionComponent.prototype.verifyOTP = function () {
        var _this = this;
        //debugger; 
        this.model.mobileNo = this.user.contactNo;
        this.model.otp = this.user.otp;
        this._transaction.verifyOTP(this.model)
            .subscribe(function (data) {
            if (data.message) {
                _this.showpay();
            }
            else if (data && data.error && data.error.message) {
                _this.snackBar.open("Somthing went wrong!, Please Check OTP Code", "", { duration: 5000 });
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "table", void 0);
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__("../../../../../src/app/transactions/components/transaction/transaction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/components/transaction/transaction.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSnackBar */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_transactions_transaction_service__["a" /* TransactionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_profile_profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */]) === "function" && _f || Object])
    ], TransactionComponent);
    return TransactionComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=transaction.component.js.map

/***/ }),

/***/ "../../../../../src/app/transactions/transactions-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_transaction_transaction_component__ = __webpack_require__("../../../../../src/app/transactions/components/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_transaction_list_transaction_list_component__ = __webpack_require__("../../../../../src/app/transactions/components/transaction-list/transaction-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_reject_reject_component__ = __webpack_require__("../../../../../src/app/transactions/components/reject/reject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_review_review_component__ = __webpack_require__("../../../../../src/app/transactions/components/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_summary_summary_component__ = __webpack_require__("../../../../../src/app/transactions/components/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_transaction_invoice_transaction_invoice_component__ = __webpack_require__("../../../../../src/app/transactions/components/transaction-invoice/transaction-invoice.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'transaction', component: __WEBPACK_IMPORTED_MODULE_2__components_transaction_transaction_component__["a" /* TransactionComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_transaction_list_transaction_list_component__["a" /* TransactionListComponent */] },
    { path: 'reject', component: __WEBPACK_IMPORTED_MODULE_4__components_reject_reject_component__["a" /* RejectComponent */] },
    { path: 'review', component: __WEBPACK_IMPORTED_MODULE_5__components_review_review_component__["a" /* ReviewComponent */] },
    { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_6__components_summary_summary_component__["a" /* SummaryComponent */] },
    { path: 'transactionInvoice', component: __WEBPACK_IMPORTED_MODULE_7__components_transaction_invoice_transaction_invoice_component__["a" /* TransactionInvoiceComponent */] }
];
var TransactionsRoutingModule = /** @class */ (function () {
    function TransactionsRoutingModule() {
    }
    TransactionsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], TransactionsRoutingModule);
    return TransactionsRoutingModule;
}());

//# sourceMappingURL=transactions-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/transactions/transactions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsModule", function() { return TransactionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_module__ = __webpack_require__("../../../../../src/app/global/global.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transactions_routing_module__ = __webpack_require__("../../../../../src/app/transactions/transactions-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_transaction_transaction_component__ = __webpack_require__("../../../../../src/app/transactions/components/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_transaction_list_transaction_list_component__ = __webpack_require__("../../../../../src/app/transactions/components/transaction-list/transaction-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_reject_reject_component__ = __webpack_require__("../../../../../src/app/transactions/components/reject/reject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_review_review_component__ = __webpack_require__("../../../../../src/app/transactions/components/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_summary_summary_component__ = __webpack_require__("../../../../../src/app/transactions/components/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_transaction_invoice_transaction_invoice_component__ = __webpack_require__("../../../../../src/app/transactions/components/transaction-invoice/transaction-invoice.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// const swal = require('sweetalert2')
var TransactionsModule = /** @class */ (function () {
    function TransactionsModule() {
    }
    TransactionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__transactions_routing_module__["a" /* TransactionsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__global_global_module__["c" /* GlobalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_transaction_transaction_component__["a" /* TransactionComponent */], __WEBPACK_IMPORTED_MODULE_5__components_transaction_list_transaction_list_component__["a" /* TransactionListComponent */], __WEBPACK_IMPORTED_MODULE_6__components_reject_reject_component__["a" /* RejectComponent */], __WEBPACK_IMPORTED_MODULE_7__components_review_review_component__["a" /* ReviewComponent */], __WEBPACK_IMPORTED_MODULE_8__components_summary_summary_component__["a" /* SummaryComponent */], __WEBPACK_IMPORTED_MODULE_9__components_transaction_invoice_transaction_invoice_component__["a" /* TransactionInvoiceComponent */]]
        })
    ], TransactionsModule);
    return TransactionsModule;
}());

//# sourceMappingURL=transactions.module.js.map

/***/ })

});
//# sourceMappingURL=transactions.module.chunk.js.map