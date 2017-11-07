"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var provider_service_1 = require("./provider.service");
describe('ProviderService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [provider_service_1.ProviderService]
        });
    });
    it('should be created', testing_1.inject([provider_service_1.ProviderService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=provider.service.spec.js.map