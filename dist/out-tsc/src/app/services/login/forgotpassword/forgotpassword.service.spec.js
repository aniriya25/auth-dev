"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forgotpassword_service_1 = require("./forgotpassword.service");
describe('ForgotpasswordService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [forgotpassword_service_1.ForgotpasswordService]
        });
    });
    it('should be created', testing_1.inject([forgotpassword_service_1.ForgotpasswordService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=forgotpassword.service.spec.js.map