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
var AddleadComponent = (function () {
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
    return AddleadComponent;
}());
AddleadComponent = __decorate([
    core_1.Component({
        selector: 'app-addlead',
        templateUrl: './addlead.component.html',
        styleUrls: ['./addlead.component.css']
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar])
], AddleadComponent);
exports.AddleadComponent = AddleadComponent;
//# sourceMappingURL=addlead.component.js.map