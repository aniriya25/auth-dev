"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var outlet_service_1 = require("./outlet.service");
describe('OutletService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [outlet_service_1.OutletService]
        });
    });
    it('should be created', testing_1.inject([outlet_service_1.OutletService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=outlet.service.spec.js.map