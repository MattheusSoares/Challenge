(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["src_app_views_advance-table_advance-table_module_ts"],{

/***/ 79388:
/*!*************************************************************!*\
  !*** ./src/app/views/advance-table/advance-table.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceTableModule": function() { return /* binding */ AdvanceTableModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _advance_table_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advance-table-routing.module */ 62713);
/* harmony import */ var _advance_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advance-table.component */ 74000);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 49065);
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ 52708);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _advance_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advance-table.service */ 31077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);


























class AdvanceTableModule {
}
AdvanceTableModule.ɵfac = function AdvanceTableModule_Factory(t) { return new (t || AdvanceTableModule)(); };
AdvanceTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AdvanceTableModule });
AdvanceTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_advance_table_service__WEBPACK_IMPORTED_MODULE_4__.AdvanceTableService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _advance_table_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceTableRoutingModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__.MaterialFileInputModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdvanceTableModule, { declarations: [_advance_table_component__WEBPACK_IMPORTED_MODULE_1__.AdvanceTableComponent,
        _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_2__.FormDialogComponent,
        _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_3__.DeleteDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _advance_table_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceTableRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_23__.MaterialFileInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_advance-table_advance-table_module_ts-es2015.js.map