(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["common"], {
    /***/
    72475:
    /*!*********************************************************!*\
      !*** ./src/app/views/ui/snackbar/snackbar.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SnackbarComponent": function SnackbarComponent() {
          return (
            /* binding */
            _SnackbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _SnackbarComponent = /*#__PURE__*/function () {
        function _SnackbarComponent(snackBar) {
          _classCallCheck(this, _SnackbarComponent);

          this.snackBar = snackBar;
        }

        _createClass(_SnackbarComponent, [{
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return _SnackbarComponent;
      }();

      _SnackbarComponent.??fac = function SnackbarComponent_Factory(t) {
        return new (t || _SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
      };

      _SnackbarComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _SnackbarComponent,
        selectors: [["app-snackbar"]],
        decls: 68,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "row", "clearfix", "jsdemo-notification-button"], [1, "col-xs-12", "col-sm-6", "col-md-3", "col-lg-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 1, "bg-green", 3, "click"], ["mat-raised-button", "", 1, "bg-cyan", 3, "click"], ["mat-raised-button", "", 1, "bg-blue", 3, "click"], ["mat-raised-button", "", 1, "bg-red", 3, "click"], ["mat-raised-button", "", 1, "bg-yellow", 3, "click"]],
        template: function SnackbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Snackbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Sbackbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_29_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "top", "left");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Top Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_32_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "bottom", "left");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Bottom Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_35_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Bottom Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_38_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "bottom", "right");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Bottom Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_41_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "top", "Right");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Top Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_44_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "top", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Top Center ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_57_listener() {
              return ctx.showNotification("snackbar-success", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_60_listener() {
              return ctx.showNotification("snackbar-danger", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_63_listener() {
              return ctx.showNotification("snackbar-warning", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_66_listener() {
              return ctx.showNotification("snackbar-info", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFja2Jhci5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map