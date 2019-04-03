import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var NoticiasService = /** @class */ (function () {
    function NoticiasService(httpCtrl) {
        this.httpCtrl = httpCtrl;
    }
    NoticiasService.prototype.getnews = function () {
    };
    var _a;
    NoticiasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Http !== "undefined" && Http) === "function" ? _a : Object])
    ], NoticiasService);
    return NoticiasService;
}());
export { NoticiasService };
//# sourceMappingURL=noticias.service.js.map