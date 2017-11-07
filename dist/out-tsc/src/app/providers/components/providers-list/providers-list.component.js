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
var provider_service_1 = require("./../../../services/providers/provider.service");
var ProvidersListComponent = (function () {
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
    return ProvidersListComponent;
}());
__decorate([
    core_1.ViewChild('myTable'),
    __metadata("design:type", Object)
], ProvidersListComponent.prototype, "myTable", void 0);
ProvidersListComponent = __decorate([
    core_1.Component({
        selector: 'app-providers-list',
        templateUrl: './providers-list.component.html',
        styleUrls: ['./providers-list.component.css'],
        providers: [provider_service_1.ProviderService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [provider_service_1.ProviderService,
        core_1.ChangeDetectorRef])
], ProvidersListComponent);
exports.ProvidersListComponent = ProvidersListComponent;
//# sourceMappingURL=providers-list.component.js.map