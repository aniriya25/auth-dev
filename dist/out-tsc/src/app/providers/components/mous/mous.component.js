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
var material_1 = require("@angular/material");
var moment = require("moment");
var MousComponent = (function () {
    function MousComponent(snackBar, cdf) {
        this.snackBar = snackBar;
        this.cdf = cdf;
        this.mouTypes = [];
        this.annexures = [];
        this.mouFx = new core_1.EventEmitter();
        this.getMouAnxrById = new core_1.EventEmitter();
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
        mou['validFromDate'] = moment(mou['validFromDate'], "DD/MM/YYYY").format('DD/MMM/YYYY');
        mou['validToDate'] = moment(mou['validToDate'], "DD/MM/YYYY").format('DD/MMM/YYYY');
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
            this.mouInput['validFromDate'] = moment(newDate, "DD/MM/YYYY").format('MM/DD/YYYY');
            this.minDate = new Date(this.mouInput['validFromDate']);
            return false;
        }
        if (type == 'endDate') {
            this.mouInput['validToDate'] = moment(newDate, "DD/MM/YYYY").format('MM/DD/YYYY');
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
    return MousComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MousComponent.prototype, "mouTypes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MousComponent.prototype, "annexures", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MousComponent.prototype, "isMouFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MousComponent.prototype, "isMouOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MousComponent.prototype, "isMouBtn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MousComponent.prototype, "versionNo", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MousComponent.prototype, "mouFx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MousComponent.prototype, "getMouAnxrById", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MousComponent.prototype, "mouVersions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MousComponent.prototype, "mouInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MousComponent.prototype, "pdfversion", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MousComponent.prototype, "completeSec", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MousComponent.prototype, "partialSec", void 0);
MousComponent = __decorate([
    core_1.Component({
        selector: 'app-mous',
        templateUrl: './mous.component.html',
        styleUrls: ['./mous.component.css'],
        providers: [material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar,
        core_1.ChangeDetectorRef])
], MousComponent);
exports.MousComponent = MousComponent;
//# sourceMappingURL=mous.component.js.map