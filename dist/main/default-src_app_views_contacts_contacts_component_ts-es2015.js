(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["default-src_app_views_contacts_contacts_component_ts"],{

/***/ 80000:
/*!******************************************************!*\
  !*** ./src/app/views/contacts/contacts.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": function() { return /* binding */ ContactsComponent; },
/* harmony export */   "ExampleDataSource": function() { return /* binding */ ExampleDataSource; }
/* harmony export */ });
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.service */ 26313);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 38345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 96937);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 33763);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ 58188);
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.component */ 56978);
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);


























const _c0 = ["filter"];
function ContactsComponent_mat_header_cell_60_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function ContactsComponent_mat_header_cell_60_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return $event ? ctx_r27.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ContactsComponent_mat_cell_61_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-checkbox", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_mat_cell_61_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ContactsComponent_mat_cell_61_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r32); const row_r29 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return $event ? ctx_r31.selection.toggle(row_r29) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx_r3.selection.isSelected(row_r29))("ngClass", "tbl-checkbox");
} }
function ContactsComponent_mat_header_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](row_r33.id);
} }
function ContactsComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", "tbl-col-width-per-6");
} }
function ContactsComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("src", row_r34.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);
} }
function ContactsComponent_mat_header_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r35.name, " ");
} }
function ContactsComponent_mat_header_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r36.mobile, " ");
} }
function ContactsComponent_mat_header_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r37.email, " ");
} }
function ContactsComponent_mat_header_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Birth Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, row_r38.birthDate, "MM/dd/yyyy"), "");
} }
function ContactsComponent_mat_header_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r39.address, " ");
} }
function ContactsComponent_mat_header_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", row_r40.note, " ");
} }
function ContactsComponent_mat_header_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-header-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ContactsComponent_mat_cell_88_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-cell", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_mat_cell_88_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-menu", null, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_mat_cell_88_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r46); const row_r41 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r45.editCall(row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "Edit Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_mat_cell_88_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r46); const row_r41 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r47.deleteItem(row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "Delete Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matMenuTriggerFor", _r43);
} }
function ContactsComponent_mat_header_row_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "mat-header-row");
} }
function ContactsComponent_mat_row_90_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-row", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_mat_row_90_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r50); const row_r48 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r49.detailsCall(row_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????styleProp"]("cursor", "pointer");
} }
function ContactsComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "mat-progress-spinner", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("diameter", 40);
} }
function ContactsComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " No results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????styleProp"]("display", ctx_r25.dataSource.renderedData.length == 0 ? "" : "none");
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class ContactsComponent extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient, dialog, contactsService, snackBar) {
        super();
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.contactsService = contactsService;
        this.snackBar = snackBar;
        this.filterToggle = false;
        this.displayedColumns = [
            'select',
            'img',
            'name',
            'email',
            'mobile',
            'birthDate',
            'address',
            'actions'
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        this.contextMenuPosition = { x: '0px', y: '0px' };
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    addNew() {
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, {
            data: {
                contacts: this.contacts,
                action: 'add'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                this.exampleDatabase.dataChange.value.unshift(this.contactsService.getDialogData());
                this.refreshTable();
                this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    detailsCall(row) {
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, {
            data: {
                contacts: row,
                action: 'details'
            },
            direction: tempDirection,
            height: '70%',
            width: '35%'
        });
    }
    toggleStar(row) {
        console.log(row);
    }
    editCall(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, {
            data: {
                contacts: row,
                action: 'edit'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // Then you update that record using data from dialogData (values you enetered)
                this.exampleDatabase.dataChange.value[foundIndex] =
                    this.contactsService.getDialogData();
                // And lastly refresh table
                this.refreshTable();
                this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    deleteItem(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteComponent, {
            data: row,
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.renderedData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.renderedData.forEach((row) => this.selection.select(row));
    }
    removeSelectedRows() {
        const totalSelect = this.selection.selected.length;
        this.selection.selected.forEach((item) => {
            const index = this.dataSource.renderedData.findIndex((d) => d === item);
            // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
            this.exampleDatabase.dataChange.value.splice(index, 1);
            this.refreshTable();
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
        });
        this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
    }
    loadData() {
        this.exampleDatabase = new _contacts_service__WEBPACK_IMPORTED_MODULE_0__.ContactsService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.filter.nativeElement, 'keyup')
            // .debounceTime(150)
            // .distinctUntilChanged()
            .subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
ContactsComponent.??fac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_0__.ContactsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
ContactsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], viewQuery: function ContactsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]], decls: 95, vars: 11, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "tabbable-line"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "mobile"], ["matColumnDef", "email"], ["matColumnDef", "birthDate"], ["matColumnDef", "address"], ["class", "column-nowrap", 4, "matCellDef"], ["matColumnDef", "note"], ["matColumnDef", "actions"], ["class", "psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-10", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-6"], [3, "src"], [1, "column-nowrap"], [1, "psl-3", "tbl-col-width-per-10"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "material-icons-two-tone", "align-middle", "msr-2"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "no-results"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](33, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](38, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_button_click_42_listener() { return ctx.removeSelectedRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](44, "delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_button_click_49_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](51, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ContactsComponent_Template_button_click_54_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](55, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](56, "refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](57, "mat-table", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](59, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](60, ContactsComponent_mat_header_cell_60_Template, 2, 4, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](61, ContactsComponent_mat_cell_61_Template, 2, 3, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](62, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](63, ContactsComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](64, ContactsComponent_mat_cell_64_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](65, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](66, ContactsComponent_mat_header_cell_66_Template, 2, 1, "mat-header-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](67, ContactsComponent_mat_cell_67_Template, 2, 1, "mat-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](68, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](69, ContactsComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](70, ContactsComponent_mat_cell_70_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](71, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](72, ContactsComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](73, ContactsComponent_mat_cell_73_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](74, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](75, ContactsComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](76, ContactsComponent_mat_cell_76_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](77, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](78, ContactsComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](79, ContactsComponent_mat_cell_79_Template, 3, 4, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](80, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](81, ContactsComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](82, ContactsComponent_mat_cell_82_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](83, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](84, ContactsComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](85, ContactsComponent_mat_cell_85_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](86, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](87, ContactsComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](88, ContactsComponent_mat_cell_88_Template, 16, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](89, ContactsComponent_mat_header_row_89_Template, 1, 0, "mat-header-row", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](90, ContactsComponent_mat_row_90_Template, 1, 2, "mat-row", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](91, ContactsComponent_div_91_Template, 2, 1, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](92, ContactsComponent_div_92_Template, 2, 2, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](93, "mat-paginator", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("hidden", !ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", !ctx.exampleDatabase.isTblLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](10, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2FzcyJ9 */"] });
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource {
    constructor(exampleDatabase, paginator, _sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this._sort = _sort;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject('');
        this.filteredData = [];
        this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }
    get filter() {
        return this.filterChange.value;
    }
    set filter(filter) {
        this.filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this.exampleDatabase.dataChange,
            this._sort.sortChange,
            this.filterChange,
            this.paginator.page
        ];
        this.exampleDatabase.getAllContactss();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data
                .slice()
                .filter((contacts) => {
                const searchStr = (contacts.name +
                    contacts.birthDate +
                    contacts.email +
                    contacts.mobile +
                    contacts.address).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = '';
            let propertyB = '';
            switch (this._sort.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'name':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'email':
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case 'birthDate':
                    [propertyA, propertyB] = [a.birthDate, b.birthDate];
                    break;
                case 'address':
                    [propertyA, propertyB] = [a.address, b.address];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 65789:
/*!**************************************************!*\
  !*** ./src/app/views/contacts/contacts.model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contacts": function() { return /* binding */ Contacts; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 38583);

class Contacts {
    constructor(contacts) {
        {
            this.id = contacts.id || this.getRandomID();
            this.img = contacts.avatar || 'assets/images/user/usrbig1.jpg';
            this.name = contacts.name || '';
            this.email = contacts.email || '';
            this.birthDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.address = contacts.address || '';
            this.mobile = contacts.mobile || '';
            this.note = contacts.note || '';
        }
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}


/***/ }),

/***/ 26313:
/*!****************************************************!*\
  !*** ./src/app/views/contacts/contacts.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsService": function() { return /* binding */ ContactsService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);




class ContactsService extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/contacts.json';
        this.isTblLoading = true;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllContactss() {
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe((data) => {
            this.isTblLoading = false;
            this.dataChange.next(data);
        }, (error) => {
            this.isTblLoading = false;
            console.log(error.name + ' ' + error.message);
        });
    }
    addContacts(contacts) {
        this.dialogData = contacts;
        /*  this.httpClient.post(this.API_URL, contacts).subscribe(data => {
          this.dialogData = contacts;
          },
          (err: HttpErrorResponse) => {
         // error code here
        });*/
    }
    updateContacts(contacts) {
        this.dialogData = contacts;
        /* this.httpClient.put(this.API_URL + contacts.id, contacts).subscribe(data => {
          this.dialogData = contacts;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );*/
    }
    deleteContacts(id) {
        console.log(id);
        /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
          console.log(id);
          },
          (err: HttpErrorResponse) => {
             // error code here
          }
        );*/
    }
}
ContactsService.??fac = function ContactsService_Factory(t) { return new (t || ContactsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ContactsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ContactsService, factory: ContactsService.??fac });


/***/ }),

/***/ 56978:
/*!***********************************************************!*\
  !*** ./src/app/views/contacts/delete/delete.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteComponent": function() { return /* binding */ DeleteComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contacts.service */ 26313);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 51095);





class DeleteComponent {
    constructor(dialogRef, data, contactsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.contactsService.deleteContacts(this.data.id);
    }
}
DeleteComponent.??fac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_0__.ContactsService)); };
DeleteComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DeleteComponent, selectors: [["app-delete"]], decls: 25, vars: 4, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteComponent_Template_button_click_21_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DeleteComponent_Template_button_click_23_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.data.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 58188:
/*!*******************************************************!*\
  !*** ./src/app/views/contacts/form/form.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": function() { return /* binding */ FormComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _contacts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contacts.model */ 65789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contacts.service */ 26313);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 93738);















function FormComponent_div_1_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormComponent_div_1_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormComponent_div_1_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Mobile is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormComponent_div_1_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function FormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r7.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function FormComponent_div_1_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r9.submit; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, FormComponent_div_1_mat_error_21_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](29, FormComponent_div_1_mat_error_29_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "smartphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](38, FormComponent_div_1_mat_error_38_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Birth date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "mat-datepicker-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "mat-datepicker", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](47, FormComponent_div_1_mat_error_47_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](59, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormComponent_div_1_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r10.confirmAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](64, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormComponent_div_1_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r11.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](46);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx_r0.contacts.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r0.dialogTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx_r0.contactsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.contactsForm.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.contactsForm.get("email").hasError("required") || ctx_r0.contactsForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.contactsForm.get("mobile").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.contactsForm.get("birthDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("type", ctx_r0.submit)("disabled", !ctx_r0.contactsForm.valid)("mat-dialog-close", 1);
} }
function FormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FormComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r12.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "phonelink_ring");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "cake");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx_r1.contacts.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.contacts.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.contacts.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.contacts.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](32, 7, ctx_r1.contacts.birthDate, "MMMM d, yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.contacts.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.contacts.note, " ");
} }
class FormComponent {
    constructor(dialogRef, data, contactsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
        this.fb = fb;
        this.isDetails = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.isDetails = false;
            this.dialogTitle = data.contacts.name;
            this.contacts = data.contacts;
            this.contactsForm = this.createContactForm();
        }
        else if (this.action === 'details') {
            this.contacts = data.contacts;
            this.isDetails = true;
        }
        else {
            this.isDetails = false;
            this.dialogTitle = 'New Contacts';
            this.contacts = new _contacts_model__WEBPACK_IMPORTED_MODULE_0__.Contacts({});
            this.contactsForm = this.createContactForm();
        }
    }
    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }
    createContactForm() {
        return this.fb.group({
            id: [this.contacts.id],
            img: [this.contacts.img],
            name: [this.contacts.name],
            email: [
                this.contacts.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]
            ],
            birthDate: [
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.contacts.birthDate, 'yyyy-MM-dd', 'en'),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            ],
            address: [this.contacts.address],
            mobile: [this.contacts.mobile],
            note: [this.contacts.note]
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.contactsService.addContacts(this.contactsForm.getRawValue());
    }
}
FormComponent.??fac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_1__.ContactsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FormComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 3, vars: 2, consts: [[1, "addContainer"], ["class", "contact-form", 4, "ngIf"], ["class", "contact-details", 4, "ngIf"], [1, "contact-form"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "name", "required", ""], ["matSuffix", "", 1, "material-icons-two-tone", "color-icon"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number"], ["matInput", "", "formControlName", "birthDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "note"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "contact-details"], [1, "modal-about", "contact-header"], [1, "contact-details-img"], [1, "contact-details-heading"], [1, "contact-details-name", "mb-2"], [1, "badge", "col-green"], [1, "contact-details-field"], [1, "material-icons-two-tone", "color-icon"], [1, "contact-detail-info"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, FormComponent_div_1_Template, 67, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, FormComponent_div_2_Template, 43, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.isDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.isDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_views_contacts_contacts_component_ts-es2015.js.map