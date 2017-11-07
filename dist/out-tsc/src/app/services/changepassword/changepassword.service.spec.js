"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var changepassword_service_1 = require("./changepassword.service");
describe('ChangepasswordService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [changepassword_service_1.ChangepasswordService]
        });
    });
    it('should be created', testing_1.inject([changepassword_service_1.ChangepasswordService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=changepassword.service.spec.js.map