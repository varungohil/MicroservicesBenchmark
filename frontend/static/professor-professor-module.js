(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professor-professor-module"],{

/***/ "C8Ww":
/*!************************************************************!*\
  !*** ./src/app/professor/professor/professor.component.ts ***!
  \************************************************************/
/*! exports provided: ProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function() { return ProfessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProfessorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfessorComponent.ɵfac = function ProfessorComponent_Factory(t) { return new (t || ProfessorComponent)(); };
ProfessorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessorComponent, selectors: [["app-professor"]], decls: 2, vars: 0, template: function ProfessorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "professor works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9mZXNzb3IuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "PTne":
/*!***********************************************!*\
  !*** ./src/app/professor/professor.module.ts ***!
  \***********************************************/
/*! exports provided: ProfessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorModule", function() { return ProfessorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professor/professor.component */ "C8Ww");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ProfessorModule {
}
ProfessorModule.ɵfac = function ProfessorModule_Factory(t) { return new (t || ProfessorModule)(); };
ProfessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfessorModule });
ProfessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfessorModule, { declarations: [_professor_professor_component__WEBPACK_IMPORTED_MODULE_1__["ProfessorComponent"], _professor_professor_component__WEBPACK_IMPORTED_MODULE_1__["ProfessorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=professor-professor-module.js.map