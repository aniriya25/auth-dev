"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var memberlist_service_1 = require("./memberlist.service");
describe('MemberlistService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [memberlist_service_1.MemberlistService]
        });
    });
    it('should be created', testing_1.inject([memberlist_service_1.MemberlistService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=memberlist.service.spec.js.map