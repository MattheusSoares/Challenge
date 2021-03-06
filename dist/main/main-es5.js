(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _views_authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./views/authentication/page404/page404.component */
      96521);
      /* harmony import */


      var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/guard/auth.guard */
      19390);
      /* harmony import */


      var _views_layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./views/layout/app-layout/auth-layout/auth-layout.component */
      11237);
      /* harmony import */


      var _views_layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./views/layout/app-layout/main-layout/main-layout.component */
      30994);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _views_layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [{
          path: '',
          redirectTo: '/authentication/signin',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-node_modules_echarts_index_js"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js"), __webpack_require__.e("src_app_views_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/dashboard/dashboard.module */
            54727)).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'advance-table',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-node_modules_angular_mate-d6196c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-src_app_views_advance-table_advance-table-routing_module_ts"), __webpack_require__.e("src_app_views_advance-table_advance-table_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/advance-table/advance-table.module */
            79388)).then(function (m) {
              return m.AdvanceTableModule;
            });
          }
        }, {
          path: 'employee',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-node_modules_angular_mate-d6196c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-src_app_views_advance-table_advance-table-routing_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_employees_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/employees/employee.module */
            24138)).then(function (m) {
              return m.EmployeeModule;
            });
          }
        }, {
          path: 'calendar',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("src_app_views_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/calendar/calendar.module */
            87837)).then(function (m) {
              return m.CalendarsModule;
            });
          }
        }, {
          path: 'task',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-node_modules_angular_mate-d6196c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_drag-drop_js"), __webpack_require__.e("src_app_views_task_task_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/task/task.module */
            17294)).then(function (m) {
              return m.TaskModule;
            });
          }
        }, {
          path: 'contacts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-node_modules_angular_mate-d6196c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-src_app_views_contacts_contacts_component_ts"), __webpack_require__.e("src_app_views_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/contacts/contacts.module */
            12008)).then(function (m) {
              return m.ContactsModule;
            });
          }
        }, {
          path: 'email',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-956b01"), __webpack_require__.e("src_app_views_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/email/email.module */
            87728)).then(function (m) {
              return m.EmailModule;
            });
          }
        }, {
          path: 'apps',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-node_modules_angular_mate-d6196c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_drag-drop_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("default-src_app_views_contacts_contacts_component_ts"), __webpack_require__.e("src_app_views_apps_apps_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/apps/apps.module */
            30652)).then(function (m) {
              return m.AppsModule;
            });
          }
        }, {
          path: 'widget',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_drag-drop_js"), __webpack_require__.e("src_app_views_widget_widget_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/widget/widget.module */
            79283)).then(function (m) {
              return m.WidgetModule;
            });
          }
        }, {
          path: 'ui',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js-node_modules_angu-af90d9"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_expansion_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_views_ui_ui_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/ui/ui.module */
            78907)).then(function (m) {
              return m.UiModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-node_modules_angular_mate-d6196c"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-956b01"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js-node_modules_angu-af90d9"), __webpack_require__.e("src_app_views_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/forms/forms.module */
            43929)).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js-node_modules_angular_mat-27f8a1"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js-node_modules_angular_mate-d6196c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_views_tables_tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/tables/tables.module */
            34912)).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'media',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_media_media_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/media/media.module */
            17508)).then(function (m) {
              return m.MediaModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js"), __webpack_require__.e("src_app_views_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/charts/charts.module */
            12669)).then(function (m) {
              return m.ChartsModule;
            });
          }
        }, {
          path: 'timeline',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/timeline/timeline.module */
            60261)).then(function (m) {
              return m.TimelineModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/icons/icons.module */
            73150)).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'extra-pages',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_expansion_js"), __webpack_require__.e("src_app_views_extra-pages_extra-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/extra-pages/extra-pages.module */
            26721)).then(function (m) {
              return m.ExtraPagesModule;
            });
          }
        }, {
          path: 'maps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/maps/maps.module */
            21918)).then(function (m) {
              return m.MapsModule;
            });
          }
        }, {
          path: 'multilevel',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_views_multilevel_multilevel_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./views/multilevel/multilevel.module */
            82739)).then(function (m) {
              return m.MultilevelModule;
            });
          }
        }]
      }, {
        path: 'authentication',
        component: _views_layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_views_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./views/authentication/authentication.module */
          11178)).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }, {
        path: '**',
        component: _views_authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      95593);
      /* harmony import */


      var _views_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./views/layout/page-loader/page-loader.component */
      74580);
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-notifier */
      98609);

      var _AppComponent = function _AppComponent(_router, location, spinner) {
        var _this2 = this;

        _classCallCheck(this, _AppComponent);

        this._router = _router;
        this.spinner = spinner;

        this._router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
            _this2.spinner.show();

            location.onPopState(function () {
              window.location.reload();
            });
            _this2.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
          }

          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
            _this2.spinner.hide();
          }

          window.scrollTo(0, 0);
        });
      };

      _AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService));
      };

      _AppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-page-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "notifier-container");
          }
        },
        directives: [_views_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierContainerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "createTranslateLoader": function createTranslateLoader() {
          return (
            /* binding */
            _createTranslateLoader
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/core.module */
      40294);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _views_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/layout/header/header.component */
      18511);
      /* harmony import */


      var _views_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/layout/page-loader/page-loader.component */
      74580);
      /* harmony import */


      var _views_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/layout/sidebar/sidebar.component */
      64635);
      /* harmony import */


      var _views_layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/layout/right-sidebar/right-sidebar.component */
      89822);
      /* harmony import */


      var _views_layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/layout/app-layout/auth-layout/auth-layout.component */
      11237);
      /* harmony import */


      var _views_layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/layout/app-layout/main-layout/main-layout.component */
      30994);
      /* harmony import */


      var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./core/interceptor/fake-backend */
      43867);
      /* harmony import */


      var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./core/interceptor/error.interceptor */
      56300);
      /* harmony import */


      var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./core/interceptor/jwt.interceptor */
      72624);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-spinner */
      95593);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-click-outside */
      74191);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _core_service_window_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./core/service/window.service */
      31861);
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angular-notifier */
      98609);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelPropagation: false
      };

      function _createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
      }

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.??fac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__.LocationStrategy,
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__.HashLocationStrategy
        }, {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__.JwtInterceptor,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__.ErrorInterceptor,
          multi: true
        }, _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__.fakeBackendProvider, _core_service_window_service__WEBPACK_IMPORTED_MODULE_14__.WINDOW_PROVIDERS],
        imports: [[angular_notifier__WEBPACK_IMPORTED_MODULE_20__.NotifierModule.withConfig({
          position: {
            horizontal: {
              position: 'right',
              distance: 12
            },
            vertical: {
              position: 'top',
              distance: 12,
              gap: 10
            }
          },
          theme: 'material',
          behaviour: {
            autoHide: 5000,
            onClick: 'hide',
            onMouseover: 'pauseAutoHide',
            showDismissButton: true,
            stacking: 4
          },
          animations: {
            enabled: true,
            show: {
              preset: 'slide',
              speed: 300,
              easing: 'ease'
            },
            hide: {
              preset: 'fade',
              speed: 300,
              easing: 'ease',
              offset: 50
            },
            shift: {
              speed: 300,
              easing: 'linear'
            },
            overlap: 150
          }
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_23__.NgxSpinnerModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateLoader,
            useFactory: _createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
          }
        }), _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _views_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _views_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent, _views_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _views_layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent, _views_layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent, _views_layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__.MainLayoutComponent],
          imports: [angular_notifier__WEBPACK_IMPORTED_MODULE_20__.NotifierModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_23__.NgxSpinnerModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    40294:
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service/rightsidebar.service */
      74930);
      /* harmony import */


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guard/auth.guard */
      19390);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/auth.service */
      41782);
      /* harmony import */


      var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service/dynamic-script-loader.service */
      77431);
      /* harmony import */


      var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guard/module-import.guard */
      6785);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CoreModule = function _CoreModule(parentModule) {
        _classCallCheck(this, _CoreModule);

        (0, _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
      };

      _CoreModule.??fac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_CoreModule, 12));
      };

      _CoreModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        providers: [_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService, _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.DynamicScriptLoaderService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](_CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
        });
      })();
      /***/

    },

    /***/
    19390:
    /*!******************************************!*\
      !*** ./src/app/core/guard/auth.guard.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(authService, router) {
          _classCallCheck(this, _AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.currentUserValue) {
              return true;
            }

            this.router.navigate(['/authentication/signin']);
            return false;
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _AuthGuard.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6785:
    /*!***************************************************!*\
      !*** ./src/app/core/guard/module-import.guard.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "throwIfAlreadyLoaded": function throwIfAlreadyLoaded() {
          return (
            /* binding */
            _throwIfAlreadyLoaded
          );
        }
        /* harmony export */

      });

      function _throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import ").concat(moduleName, " modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    56300:
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptor/error.interceptor.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorInterceptor": function ErrorInterceptor() {
          return (
            /* binding */
            _ErrorInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      98567);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      75894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);

      var _ErrorInterceptor = /*#__PURE__*/function () {
        function _ErrorInterceptor(authenticationService) {
          _classCallCheck(this, _ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(_ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this3.authenticationService.logout();

                location.reload(true);
              }

              var error = err.error.message || err.statusText;
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }));
          }
        }]);

        return _ErrorInterceptor;
      }();

      _ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) {
        return new (t || _ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _ErrorInterceptor.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: _ErrorInterceptor,
        factory: _ErrorInterceptor.??fac
      });
      /***/
    },

    /***/
    43867:
    /*!**************************************************!*\
      !*** ./src/app/core/interceptor/fake-backend.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FakeBackendInterceptor": function FakeBackendInterceptor() {
          return (
            /* binding */
            _FakeBackendInterceptor
          );
        },

        /* harmony export */
        "fakeBackendProvider": function fakeBackendProvider() {
          return (
            /* binding */
            _fakeBackendProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      41964);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      98567);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      60346);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var users = [{
        id: 1,
        username: 'marcos.baiao@deal.com.br',
        password: 'admin',
        firstName: 'Marcos',
        lastName: 'Bai??o',
        token: 'admin-token'
      }];

      var _FakeBackendInterceptor = /*#__PURE__*/function () {
        function _FakeBackendInterceptor() {
          _classCallCheck(this, _FakeBackendInterceptor);
        }

        _createClass(_FakeBackendInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var url = request.url,
                method = request.method,
                headers = request.headers,
                body = request.body; // wrap in delayed observable to simulate server api call

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(handleRoute));

            function handleRoute() {
              switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                  return authenticate();

                default:
                  // pass through any requests not handled above
                  return next.handle(request);
              }
            } // route functions


            function authenticate() {
              var username = body.username,
                  password = body.password;
              var user = users.find(function (x) {
                return x.username === username && x.password === password;
              });

              if (!user) {
                return error('Username or password is incorrect');
              }

              return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: user.token
              });
            } // helper functions


            function ok(body) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
                status: 200,
                body: body
              }));
            }

            function error(message) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
                error: {
                  message: message
                }
              });
            }

            function unauthorized() {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
                status: 401,
                error: {
                  message: 'Unauthorised'
                }
              });
            }

            function isLoggedIn() {
              return headers.get('Authorization') === 'Bearer fake-jwt-token';
            }
          }
        }]);

        return _FakeBackendInterceptor;
      }();

      _FakeBackendInterceptor.??fac = function FakeBackendInterceptor_Factory(t) {
        return new (t || _FakeBackendInterceptor)();
      };

      _FakeBackendInterceptor.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: _FakeBackendInterceptor,
        factory: _FakeBackendInterceptor.??fac
      });
      var _fakeBackendProvider = {
        // use fake backend in place of Http service for backend-less development
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
        useClass: _FakeBackendInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    72624:
    /*!*****************************************************!*\
      !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JwtInterceptor": function JwtInterceptor() {
          return (
            /* binding */
            _JwtInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);

      var _JwtInterceptor = /*#__PURE__*/function () {
        function _JwtInterceptor(authenticationService) {
          _classCallCheck(this, _JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(_JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with jwt token if available
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser && currentUser.token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return _JwtInterceptor;
      }();

      _JwtInterceptor.??fac = function JwtInterceptor_Factory(t) {
        return new (t || _JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _JwtInterceptor.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _JwtInterceptor,
        factory: _JwtInterceptor.??fac
      });
      /***/
    },

    /***/
    41782:
    /*!**********************************************!*\
      !*** ./src/app/core/service/auth.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      41964);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(_AuthService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this4 = this;

            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl, "/authenticate"), {
              username: username,
              password: password
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this4.currentUserSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
              success: false
            });
          }
        }]);

        return _AuthService;
      }();

      _AuthService.??fac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
      };

      _AuthService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: _AuthService,
        factory: _AuthService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77431:
    /*!***************************************************************!*\
      !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScriptStore": function ScriptStore() {
          return (
            /* binding */
            _ScriptStore
          );
        },

        /* harmony export */
        "DynamicScriptLoaderService": function DynamicScriptLoaderService() {
          return (
            /* binding */
            _DynamicScriptLoaderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ScriptStore = [];

      var _DynamicScriptLoaderService = /*#__PURE__*/function () {
        function _DynamicScriptLoaderService() {
          var _this5 = this;

          _classCallCheck(this, _DynamicScriptLoaderService);

          this.scripts = {};

          _ScriptStore.forEach(function (script) {
            _this5.scripts[script.name] = {
              loaded: false,
              src: script.src
            };
          });
        }

        _createClass(_DynamicScriptLoaderService, [{
          key: "load",
          value: function load() {
            var _this6 = this;

            var promises = [];

            for (var _len = arguments.length, scripts = new Array(_len), _key = 0; _key < _len; _key++) {
              scripts[_key] = arguments[_key];
            }

            scripts.forEach(function (script) {
              return promises.push(_this6.loadScript(script));
            });
            return Promise.all(promises);
          }
        }, {
          key: "loadScript",
          value: function loadScript(name) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              if (!_this7.scripts[name].loaded) {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this7.scripts[name].src;

                if (script.readyState) {
                  // IE
                  script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      script.onreadystatechange = null;
                      _this7.scripts[name].loaded = true;
                      resolve({
                        script: name,
                        loaded: true,
                        status: 'Loaded'
                      });
                    }
                  };
                } else {
                  // Others
                  script.onload = function () {
                    _this7.scripts[name].loaded = true;
                    resolve({
                      script: name,
                      loaded: true,
                      status: 'Loaded'
                    });
                  };
                }

                script.onerror = function (error) {
                  return resolve({
                    script: name,
                    loaded: false,
                    status: 'Loaded'
                  });
                };

                document.getElementsByTagName('head')[0].appendChild(script);
              } else {
                resolve({
                  script: name,
                  loaded: true,
                  status: 'Already Loaded'
                });
              }
            });
          }
        }]);

        return _DynamicScriptLoaderService;
      }();

      _DynamicScriptLoaderService.??fac = function DynamicScriptLoaderService_Factory(t) {
        return new (t || _DynamicScriptLoaderService)();
      };

      _DynamicScriptLoaderService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: _DynamicScriptLoaderService,
        factory: _DynamicScriptLoaderService.??fac
      });
      /***/
    },

    /***/
    9964:
    /*!**************************************************!*\
      !*** ./src/app/core/service/language.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageService": function LanguageService() {
          return (
            /* binding */
            _LanguageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _LanguageService = /*#__PURE__*/function () {
        function _LanguageService(translate) {
          _classCallCheck(this, _LanguageService);

          this.translate = translate;
          this.languages = ['en', 'es', 'de'];
          var browserLang;
          translate.addLangs(this.languages);

          if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
          } else {
            browserLang = translate.getBrowserLang();
          }

          translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
        }

        _createClass(_LanguageService, [{
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.translate.use(lang);
            localStorage.setItem('lang', lang);
          }
        }]);

        return _LanguageService;
      }();

      _LanguageService.??fac = function LanguageService_Factory(t) {
        return new (t || _LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
      };

      _LanguageService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: _LanguageService,
        factory: _LanguageService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    74930:
    /*!******************************************************!*\
      !*** ./src/app/core/service/rightsidebar.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RightSidebarService": function RightSidebarService() {
          return (
            /* binding */
            _RightSidebarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RightSidebarService = function _RightSidebarService() {
        var _this8 = this;

        _classCallCheck(this, _RightSidebarService);

        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();

        this.setRightSidebar = function (value) {
          _this8.sidebarSubject.next(value);
        };
      };

      _RightSidebarService.??fac = function RightSidebarService_Factory(t) {
        return new (t || _RightSidebarService)();
      };

      _RightSidebarService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _RightSidebarService,
        factory: _RightSidebarService.??fac
      });
      /***/
    },

    /***/
    31861:
    /*!************************************************!*\
      !*** ./src/app/core/service/window.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WINDOW": function WINDOW() {
          return (
            /* binding */
            _WINDOW
          );
        },

        /* harmony export */
        "WindowRef": function WindowRef() {
          return (
            /* binding */
            _WindowRef
          );
        },

        /* harmony export */
        "BrowserWindowRef": function BrowserWindowRef() {
          return (
            /* binding */
            _BrowserWindowRef
          );
        },

        /* harmony export */
        "windowFactory": function windowFactory() {
          return (
            /* binding */
            _windowFactory
          );
        },

        /* harmony export */
        "browserWindowProvider": function browserWindowProvider() {
          return (
            /* binding */
            _browserWindowProvider
          );
        },

        /* harmony export */
        "windowProvider": function windowProvider() {
          return (
            /* binding */
            _windowProvider
          );
        },

        /* harmony export */
        "WINDOW_PROVIDERS": function WINDOW_PROVIDERS() {
          return (
            /* binding */
            _WINDOW_PROVIDERS
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* Create a new injection token for injecting the window into a component. */


      var _WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken');
      /* Define abstract class for obtaining reference to the global window object. */


      var _WindowRef = /*#__PURE__*/function () {
        function _WindowRef() {
          _classCallCheck(this, _WindowRef);
        }

        _createClass(_WindowRef, [{
          key: "nativeWindow",
          get: function get() {
            throw new Error('Not implemented.');
          }
        }]);

        return _WindowRef;
      }();
      /* Define class that implements the abstract class and returns the native window object. */


      var _BrowserWindowRef = /*#__PURE__*/function (_WindowRef2) {
        _inherits(_BrowserWindowRef, _WindowRef2);

        var _super = _createSuper(_BrowserWindowRef);

        function _BrowserWindowRef() {
          _classCallCheck(this, _BrowserWindowRef);

          return _super.call(this);
        }

        _createClass(_BrowserWindowRef, [{
          key: "nativeWindow",
          get: function get() {
            return window;
          }
        }]);

        return _BrowserWindowRef;
      }(_WindowRef);
      /* Create an factory function that returns the native window object. */


      function _windowFactory(browserWindowRef, platformId) {
        if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId)) {
          return browserWindowRef.nativeWindow;
        }

        return new Object();
      }
      /* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */


      var _browserWindowProvider = {
        provide: _WindowRef,
        useClass: _BrowserWindowRef
      };
      /* Create an injectable provider that uses the windowFactory function for returning the native window object. */

      var _windowProvider = {
        provide: _WINDOW,
        useFactory: _windowFactory,
        deps: [_WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      };
      /* Create an array of providers. */

      var _WINDOW_PROVIDERS = [_browserWindowProvider, _windowProvider];
      /***/
    },

    /***/
    7868:
    /*!*******************************************************!*\
      !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnsubscribeOnDestroyAdapter": function UnsubscribeOnDestroyAdapter() {
          return (
            /* binding */
            _UnsubscribeOnDestroyAdapter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sub-sink */
      12822);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /**
       * A class that automatically unsubscribes all observables when the object gets destroyed
       */


      var _UnsubscribeOnDestroyAdapter = /*#__PURE__*/function () {
        function _UnsubscribeOnDestroyAdapter() {
          _classCallCheck(this, _UnsubscribeOnDestroyAdapter);

          /**
           * The subscription sink object that stores all subscriptions
           */
          this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        }
        /**
         * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
         */


        _createClass(_UnsubscribeOnDestroyAdapter, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
          }
        }]);

        return _UnsubscribeOnDestroyAdapter;
      }();

      _UnsubscribeOnDestroyAdapter.??fac = function UnsubscribeOnDestroyAdapter_Factory(t) {
        return new (t || _UnsubscribeOnDestroyAdapter)();
      };

      _UnsubscribeOnDestroyAdapter.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _UnsubscribeOnDestroyAdapter,
        factory: _UnsubscribeOnDestroyAdapter.??fac
      });
      /***/
    },

    /***/
    94872:
    /*!*******************************************!*\
      !*** ./src/app/shared/material.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-mask */
      69129);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      12178);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var materialModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(), _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule];

      var _MaterialModule = function _MaterialModule() {
        _classCallCheck(this, _MaterialModule);
      };

      _MaterialModule.??fac = function MaterialModule_Factory(t) {
        return new (t || _MaterialModule)();
      };

      _MaterialModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({
        type: _MaterialModule
      });
      _MaterialModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({
        imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](_MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule]
        });
      })();
      /***/

    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      95593);
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material.module */
      94872);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.??fac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
        });
      })();
      /***/

    },

    /***/
    12822:
    /*!************************************!*\
      !*** ./src/app/shared/sub-sink.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubSink": function SubSink() {
          return (
            /* binding */
            _SubSink
          );
        }
        /* harmony export */

      });
      /**
       * Subscription sink that holds Observable subscriptions
       * until you call unsubscribe on it in ngOnDestroy.
       */


      var _SubSink = /*#__PURE__*/function () {
        /**
         * Subscription sink that holds Observable subscriptions
         * until you call unsubscribe on it in ngOnDestroy.
         *
         * @example
         * In Angular:
         * ```
         *   private subs = new SubSink();
         *   ...
         *   this.subs.sink = observable$.subscribe(
         *   this.subs.add(observable$.subscribe(...));
         *   ...
         *   ngOnDestroy() {
         *     this.subs.unsubscribe();
         *   }
         * ```
         */
        function _SubSink() {
          _classCallCheck(this, _SubSink);

          this._subs = [];
        }
        /**
         * Add subscriptions to the tracked subscriptions
         * @example
         *  this.subs.add(observable$.subscribe(...));
         */


        _createClass(_SubSink, [{
          key: "add",
          value: function add() {
            for (var _len2 = arguments.length, subscriptions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              subscriptions[_key2] = arguments[_key2];
            }

            this._subs = this._subs.concat(subscriptions);
          }
          /**
           * Assign subscription to this sink to add it to the tracked subscriptions
           * @example
           *  this.subs.sink = observable$.subscribe(...);
           */

        }, {
          key: "sink",
          set: function set(subscription) {
            this._subs.push(subscription);
          }
          /**
           * Unsubscribe to all subscriptions in ngOnDestroy()
           * @example
           *   ngOnDestroy() {
           *     this.subs.unsubscribe();
           *   }
           */

        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            this._subs.forEach(function (sub) {
              return sub && sub.unsubscribe();
            });

            this._subs = [];
          }
        }]);

        return _SubSink;
      }();
      /***/

    },

    /***/
    96521:
    /*!*******************************************************************!*\
      !*** ./src/app/views/authentication/page404/page404.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Page404Component": function Page404Component() {
          return (
            /* binding */
            _Page404Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _Page404Component = /*#__PURE__*/function () {
        function _Page404Component(router) {
          _classCallCheck(this, _Page404Component);

          this.router = router;
        }

        _createClass(_Page404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            this.router.navigate(['/authentication/signin']);
          }
        }]);

        return _Page404Component;
      }();

      _Page404Component.??fac = function Page404Component_Factory(t) {
        return new (t || _Page404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _Page404Component.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _Page404Component,
        selectors: [["app-page404"]],
        decls: 18,
        vars: 0,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn", 3, "click"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-03.png')"]],
        template: function Page404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 404 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Looks Like You're Lost ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " The Page You Are Looking For Not Available! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Page404Component_Template_button_click_11_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Go To Home Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Need Help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    10344:
    /*!************************************************!*\
      !*** ./src/app/views/config/config.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigService": function ConfigService() {
          return (
            /* binding */
            _ConfigService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ConfigService = /*#__PURE__*/function () {
        function _ConfigService() {
          _classCallCheck(this, _ConfigService);

          this.setConfigData();
        }

        _createClass(_ConfigService, [{
          key: "setConfigData",
          value: function setConfigData() {
            this.configData = {
              layout: {
                rtl: false,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                  collapsed: false,
                  backgroundColor: 'light' // options:  light & dark

                }
              }
            };
          }
        }]);

        return _ConfigService;
      }();

      _ConfigService.??fac = function ConfigService_Factory(t) {
        return new (t || _ConfigService)();
      };

      _ConfigService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: _ConfigService,
        factory: _ConfigService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    11237:
    /*!******************************************************************************!*\
      !*** ./src/app/views/layout/app-layout/auth-layout/auth-layout.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthLayoutComponent": function AuthLayoutComponent() {
          return (
            /* binding */
            _AuthLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthLayoutComponent = /*#__PURE__*/function () {
        function _AuthLayoutComponent() {
          _classCallCheck(this, _AuthLayoutComponent);
        }

        _createClass(_AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AuthLayoutComponent;
      }();

      _AuthLayoutComponent.??fac = function AuthLayoutComponent_Factory(t) {
        return new (t || _AuthLayoutComponent)();
      };

      _AuthLayoutComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    30994:
    /*!******************************************************************************!*\
      !*** ./src/app/views/layout/app-layout/main-layout/main-layout.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainLayoutComponent": function MainLayoutComponent() {
          return (
            /* binding */
            _MainLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../header/header.component */
      18511);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      64635);
      /* harmony import */


      var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../right-sidebar/right-sidebar.component */
      89822);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _MainLayoutComponent = /*#__PURE__*/function () {
        function _MainLayoutComponent() {
          _classCallCheck(this, _MainLayoutComponent);
        }

        _createClass(_MainLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainLayoutComponent;
      }();

      _MainLayoutComponent.??fac = function MainLayoutComponent_Factory(t) {
        return new (t || _MainLayoutComponent)();
      };

      _MainLayoutComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _MainLayoutComponent,
        selectors: [["app-main-layout"]],
        decls: 4,
        vars: 0,
        template: function MainLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "app-right-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "router-outlet");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    18511:
    /*!*********************************************************!*\
      !*** ./src/app/views/layout/header/header.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_core_service_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/service/window.service */
      31861);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      74930);
      /* harmony import */


      var src_app_views_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/views/config/config.service */
      10344);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/service/language.service */
      9964);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);

      function HeaderComponent_img_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "img", 38);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", ctx_r1.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);
        }
      }

      function HeaderComponent_img_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "img", 38);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", ctx_r2.defaultFlag, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function HeaderComponent_a_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_a_26_Template_a_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r7);

            var item_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();

            return ctx_r6.setLanguage(item_r5.text, item_r5.lang, item_r5.flag);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](3, _c0, ctx_r3.langStoreValue === item_r5.lang));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](item_r5.text);
        }
      }

      function HeaderComponent_a_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](2, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](8, "access_time");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          var notification_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", notification_r8.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](notification_r8.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", notification_r8.time, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](notification_r8.message);
        }
      }

      var document = window.document;

      var _HeaderComponent = /*#__PURE__*/function (_src_app_shared_Unsub) {
        _inherits(_HeaderComponent, _src_app_shared_Unsub);

        var _super2 = _createSuper(_HeaderComponent);

        function _HeaderComponent(document, window, renderer, elementRef, rightSidebarService, configService, authService, router, languageService) {
          var _this9;

          _classCallCheck(this, _HeaderComponent);

          _this9 = _super2.call(this);
          _this9.document = document;
          _this9.window = window;
          _this9.renderer = renderer;
          _this9.elementRef = elementRef;
          _this9.rightSidebarService = rightSidebarService;
          _this9.configService = configService;
          _this9.authService = authService;
          _this9.router = router;
          _this9.languageService = languageService;
          _this9.config = {};
          _this9.isNavbarCollapsed = true;
          _this9.listLang = [{
            text: 'English',
            flag: 'assets/images/flags/us.jpg',
            lang: 'en'
          }, {
            text: 'Spanish',
            flag: 'assets/images/flags/spain.jpg',
            lang: 'es'
          }, {
            text: 'German',
            flag: 'assets/images/flags/germany.jpg',
            lang: 'de'
          }];
          _this9.notifications = [{
            userImg: 'assets/images/user/user1.jpg',
            userName: 'Sarah Smith',
            time: '14 mins ago',
            message: 'Please check your mail'
          }, {
            userImg: 'assets/images/user/user2.jpg',
            userName: 'Airi Satou',
            time: '22 mins ago',
            message: 'Work Completed !!!'
          }, {
            userImg: 'assets/images/user/user3.jpg',
            userName: 'John Doe',
            time: '3 hours ago',
            message: 'kindly help me for code.'
          }, {
            userImg: 'assets/images/user/user4.jpg',
            userName: 'Ashton Cox',
            time: '5 hours ago',
            message: 'Lets break for lunch...'
          }, {
            userImg: 'assets/images/user/user5.jpg',
            userName: 'Sarah Smith',
            time: '14 mins ago',
            message: 'Please check your mail'
          }, {
            userImg: 'assets/images/user/user6.jpg',
            userName: 'Airi Satou',
            time: '22 mins ago',
            message: 'Work Completed !!!'
          }, {
            userImg: 'assets/images/user/user7.jpg',
            userName: 'John Doe',
            time: '3 hours ago',
            message: 'kindly help me for code.'
          }];
          return _this9;
        }

        _createClass(_HeaderComponent, [{
          key: "onWindowScroll",
          value: function onWindowScroll() {
            var offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

            if (offset > 50) {
              this.isNavbarShow = true;
            } else {
              this.isNavbarShow = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.config = this.configService.configData;
            this.langStoreValue = localStorage.getItem('lang');
            var val = this.listLang.filter(function (x) {
              return x.lang === _this10.langStoreValue;
            });
            this.countryName = val.map(function (element) {
              return element.text;
            });

            if (val.length === 0) {
              if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
              }
            } else {
              this.flagvalue = val.map(function (element) {
                return element.flag;
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set theme on startup
            if (localStorage.getItem('theme')) {
              this.renderer.removeClass(this.document.body, this.config.layout.variant);
              this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
            } else {
              this.renderer.addClass(this.document.body, this.config.layout.variant);
            }

            if (localStorage.getItem('menuOption')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
            } else {
              this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
            }

            if (localStorage.getItem('choose_logoheader')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
            } else {
              this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
            }

            if (localStorage.getItem('sidebar_status')) {
              if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              } else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
              }
            } else {
              if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              }
            }
          }
        }, {
          key: "callFullscreen",
          value: function callFullscreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(text, lang, flag) {
            this.countryName = text;
            this.flagvalue = flag;
            this.langStoreValue = lang;
            this.languageService.setLanguage(lang);
          }
        }, {
          key: "mobileMenuSidebarOpen",
          value: function mobileMenuSidebarOpen(event, className) {
            var hasClass = event.target.classList.contains(className);

            if (hasClass) {
              this.renderer.removeClass(this.document.body, className);
            } else {
              this.renderer.addClass(this.document.body, className);
            }
          }
        }, {
          key: "callSidemenuCollapse",
          value: function callSidemenuCollapse() {
            var hasClass = this.document.body.classList.contains('side-closed');

            if (hasClass) {
              this.renderer.removeClass(this.document.body, 'side-closed');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            } else {
              this.renderer.addClass(this.document.body, 'side-closed');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            var _this11 = this;

            this.subs.sink = this.rightSidebarService.sidebarState.subscribe(function (isRunning) {
              _this11.isOpenSidebar = isRunning;
            });
            this.rightSidebarService.setRightSidebar(this.isOpenSidebar = !this.isOpenSidebar);
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this12 = this;

            this.subs.sink = this.authService.logout().subscribe(function (res) {
              if (!res.success) {
                _this12.router.navigate(['/authentication/signin']);
              }
            });
          }
        }]);

        return _HeaderComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter);

      _HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_core_service_window_service__WEBPACK_IMPORTED_MODULE_0__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_views_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService));
      };

      _HeaderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????resolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["????InheritDefinitionFeature"]],
        decls: 71,
        vars: 6,
        consts: [[1, "navbar", 3, "ngClass"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], ["routerLink", "dashboard/main", 1, "navbar-brand"], ["src", "assets/images/logo.png", "alt", ""], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdownToggle", "", 1, "lang-dropdown"], ["height", "16", 3, "src", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "lang-item", "dropdown-menu-right", "pullDown"], ["href", "javascript:void(0);", "class", "dropdown-item lang-item-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "ngbDropdownToggle", "", 1, "nav-notification-icons"], [1, "label-count", "bg-orange"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "250px", 3, "perfectScrollbar"], [1, "menu"], ["href", "#", "onClick", "return false;", 4, "ngFor", "ngForOf"], ["href", "#", "onClick", "return false;", 1, "text-center", "d-block", "border-top", "py-1"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", "pt-0"], ["src", "assets/images/user.jpg", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "msr-2"], ["href", "javascript:void(0);", 3, "click"], [1, "float-end"], ["id", "settingBtn"], ["height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "lang-item-list", 3, "ngClass", "click"], ["height", "12", 1, "flag-img", 3, "src"], [1, "align-middle"], [1, "table-img", "msg-user"], ["alt", "", 3, "src"], [1, "menu-info"], [1, "menu-title"], [1, "menu-desc"], [1, "material-icons"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "nav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_a_click_4_listener() {
              return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_a_click_5_listener($event) {
              return ctx.mobileMenuSidebarOpen($event, "overlay-open");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9, "Lorax");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](11, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_button_click_13_listener() {
              return ctx.callSidemenuCollapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_button_click_18_listener() {
              return ctx.callFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](20, "fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](23, HeaderComponent_img_23_Template, 1, 1, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](24, HeaderComponent_img_24_Template, 1, 1, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](26, HeaderComponent_a_26_Template, 4, 5, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](30, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](31, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](33, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](36, HeaderComponent_a_36_Template, 12, 4, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](37, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](38, "Read All Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](39, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](40, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](41, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](43, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](44, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](45, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](46, "ul", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](48, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](49, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](50, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](51, "Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](53, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](54, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](55, "feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](56, "Feedback ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](58, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](59, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](60, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](61, "Help ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](63, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_a_click_63_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](64, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](65, "power_settings_new");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](66, "Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](67, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](68, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_button_click_68_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](69, "mat-icon", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](70, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", ctx.isNavbarShow ? "active" : "inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngbCollapse", ctx.isNavbarCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.flagvalue !== undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.flagvalue === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.listLang);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.notifications);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    74580:
    /*!*******************************************************************!*\
      !*** ./src/app/views/layout/page-loader/page-loader.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLoaderComponent": function PageLoaderComponent() {
          return (
            /* binding */
            _PageLoaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      95593);

      var _PageLoaderComponent = /*#__PURE__*/function () {
        function _PageLoaderComponent() {
          _classCallCheck(this, _PageLoaderComponent);
        }

        _createClass(_PageLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageLoaderComponent;
      }();

      _PageLoaderComponent.??fac = function PageLoaderComponent_Factory(t) {
        return new (t || _PageLoaderComponent)();
      };

      _PageLoaderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _PageLoaderComponent,
        selectors: [["app-page-loader"]],
        decls: 2,
        vars: 1,
        consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]],
        template: function PageLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("fullScreen", true);
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    89822:
    /*!***********************************************************************!*\
      !*** ./src/app/views/layout/right-sidebar/right-sidebar.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RightSidebarComponent": function RightSidebarComponent() {
          return (
            /* binding */
            _RightSidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      74930);
      /* harmony import */


      var src_app_views_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/views/config/config.service */
      10344);
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-click-outside */
      74191);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);

      var _c0 = function _c0(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "actived": a0
        };
      };

      var _RightSidebarComponent = /*#__PURE__*/function (_src_app_shared_Unsub2) {
        _inherits(_RightSidebarComponent, _src_app_shared_Unsub2);

        var _super3 = _createSuper(_RightSidebarComponent);

        function _RightSidebarComponent(document, renderer, elementRef, rightSidebarService, configService) {
          var _this13;

          _classCallCheck(this, _RightSidebarComponent);

          _this13 = _super3.call(this);
          _this13.document = document;
          _this13.renderer = renderer;
          _this13.elementRef = elementRef;
          _this13.rightSidebarService = rightSidebarService;
          _this13.configService = configService;
          _this13.selectedBgColor = 'white';
          _this13.showpanel = false;
          _this13.isDarkSidebar = false;
          _this13.isDarTheme = false;
          _this13.isRtl = false;
          _this13.config = {};
          return _this13;
        }

        _createClass(_RightSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.config = this.configService.configData;
            this.subs.sink = this.rightSidebarService.sidebarState.subscribe(function (isRunning) {
              _this14.isOpenSidebar = isRunning;
            });
            this.setRightSidebarWindowHeight();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set header color on startup
            if (localStorage.getItem('choose_skin')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
              this.selectedBgColor = localStorage.getItem('choose_skin_active');
            } else {
              this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
              this.selectedBgColor = this.config.layout.theme_color;
            }

            if (localStorage.getItem('menuOption')) {
              if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
              } else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
              } else {
                this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
              }
            } else {
              this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }

            if (localStorage.getItem('theme')) {
              if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
              } else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
              } else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
              }
            } else {
              this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }

            if (localStorage.getItem('isRtl')) {
              if (localStorage.getItem('isRtl') === 'true') {
                this.setRTLSettings();
              } else if (localStorage.getItem('isRtl') === 'false') {
                this.setLTRSettings();
              }
            } else {
              if (this.config.layout.rtl == true) {
                this.setRTLSettings();
              } else {
                this.setLTRSettings();
              }
            }
          }
        }, {
          key: "selectTheme",
          value: function selectTheme(e) {
            this.selectedBgColor = e;
            var prevTheme = this.elementRef.nativeElement.querySelector('.right-sidebar .demo-choose-skin li.actived').getAttribute('data-theme');
            this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
            this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin_active', this.selectedBgColor);
          }
        }, {
          key: "lightSidebarBtnClick",
          value: function lightSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            var menuOption = 'menu_light';
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkSidebarBtnClick",
          value: function darkSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            var menuOption = 'menu_dark';
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "lightThemeBtnClick",
          value: function lightThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'dark');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'light');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            this.renderer.addClass(this.document.body, 'theme-white');
            var theme = 'light';
            var menuOption = 'menu_light';
            this.selectedBgColor = 'white';
            this.isDarkSidebar = false;
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('choose_skin', 'theme-white');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkThemeBtnClick",
          value: function darkThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'light');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'dark');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            this.renderer.addClass(this.document.body, 'theme-black');
            var theme = 'dark';
            var menuOption = 'menu_dark';
            this.selectedBgColor = 'black';
            this.isDarkSidebar = true;
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('choose_skin', 'theme-black');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "setRightSidebarWindowHeight",
          value: function setRightSidebarWindowHeight() {
            var height = window.innerHeight - 137;
            this.maxHeight = height + '';
            this.maxWidth = '500px';
          }
        }, {
          key: "onClickedOutside",
          value: function onClickedOutside(event) {
            var button = event.target;

            if (button.id !== 'settingBtn') {
              if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
              }
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.rightSidebarService.setRightSidebar(this.isOpenSidebar = !this.isOpenSidebar);
          }
        }, {
          key: "switchDirection",
          value: function switchDirection(event) {
            var isrtl = String(event.checked);

            if (isrtl === 'false' && document.getElementsByTagName('html')[0].hasAttribute('dir')) {
              document.getElementsByTagName('html')[0].removeAttribute('dir');
              this.renderer.removeClass(this.document.body, 'rtl');
            } else if (isrtl === 'true' && !document.getElementsByTagName('html')[0].hasAttribute('dir')) {
              document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
              this.renderer.addClass(this.document.body, 'rtl');
            }

            localStorage.setItem('isRtl', isrtl);
            this.isRtl = event.checked;
          }
        }, {
          key: "setRTLSettings",
          value: function setRTLSettings() {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
            this.isRtl = true;
            localStorage.setItem('isRtl', 'true');
          }
        }, {
          key: "setLTRSettings",
          value: function setLTRSettings() {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
            this.isRtl = false;
            localStorage.setItem('isRtl', 'false');
          }
        }]);

        return _RightSidebarComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _RightSidebarComponent.??fac = function RightSidebarComponent_Factory(t) {
        return new (t || _RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_views_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
      };

      _RightSidebarComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: _RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]],
        decls: 96,
        vars: 29,
        consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "far", "fa-times-circle"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "setting-list", "list-unstyled", "m-t-20"], [1, "form-check"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "mt-2", 3, "checked", "change"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"], [1, "sidebar-progress"], [1, "progress", "m-t-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "shadow-style", "width-per-45"], [1, "progress-description"], ["role", "progressbar", "aria-valuenow", "63", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "shadow-style", "width-per-63"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) {
              return ctx.onClickedOutside($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_div_click_1_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "GENERAL SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13, " Save History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](20, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, " Show Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](28, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](29, " Auto Submit Issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](31, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](36, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, " Show Status To All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](39, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](42, "SIDEBAR MENU COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "mat-button-toggle-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_44_listener() {
              return ctx.lightSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](45, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_46_listener() {
              return ctx.darkSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](47, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](50, "THEME COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "mat-button-toggle-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_52_listener() {
              return ctx.lightThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](53, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_54_listener() {
              return ctx.darkThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](55, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](58, "RTL Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "mat-slide-toggle", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function RightSidebarComponent_Template_mat_slide_toggle_change_59_listener($event) {
              return ctx.switchDirection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](60, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](62, "SKINS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](64, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_64_listener() {
              return ctx.selectTheme("white");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](65, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](66, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_66_listener() {
              return ctx.selectTheme("black");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](67, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_68_listener() {
              return ctx.selectTheme("purple");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](69, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](70, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_70_listener() {
              return ctx.selectTheme("blue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](71, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](72, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_72_listener() {
              return ctx.selectTheme("cyan");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](73, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](74, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_74_listener() {
              return ctx.selectTheme("green");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](75, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](76, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_76_listener() {
              return ctx.selectTheme("orange");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](77, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](78, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](80, "Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](81, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](82, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](83, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](85, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](86, "26% remaining");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](87, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](89, "Server Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](90, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](92, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](94, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](95, "Highly Loaded");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", ctx.isOpenSidebar ? "open" : "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction2"](12, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.isDarkSidebar ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.isDarTheme ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("checked", ctx.isRtl);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](15, _c1, ctx.selectedBgColor === "white"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](17, _c1, ctx.selectedBgColor === "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](19, _c1, ctx.selectedBgColor === "purple"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](21, _c1, ctx.selectedBgColor === "blue"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](23, _c1, ctx.selectedBgColor === "cyan"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](25, _c1, ctx.selectedBgColor === "green"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](27, _c1, ctx.selectedBgColor === "orange"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    7452:
    /*!*******************************************************!*\
      !*** ./src/app/views/layout/sidebar/sidebar-items.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ROUTES": function ROUTES() {
          return (
            /* binding */
            _ROUTES
          );
        }
        /* harmony export */

      });

      var _ROUTES = [{
        path: '',
        title: 'MENUITEMS.MAIN.TEXT',
        moduleName: '',
        icon: '',
        "class": '',
        groupTitle: true,
        submenu: []
      }, {
        path: '',
        title: 'MENUITEMS.HOME.TEXT',
        moduleName: 'dashboard',
        icon: 'fas fa-tachometer-alt',
        "class": 'menu-toggle',
        groupTitle: false,
        submenu: [{
          path: 'dashboard/main',
          title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
          moduleName: 'dashboard',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          submenu: []
        }, {
          path: 'dashboard/dashboard2',
          title: 'MENUITEMS.HOME.LIST.DASHBOARD2',
          moduleName: 'dashboard',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          submenu: []
        }, {
          path: 'dashboard/dashboard3',
          title: 'MENUITEMS.HOME.LIST.DASHBOARD3',
          moduleName: 'dashboard',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          submenu: []
        }]
      }, // {
      //   path: 'advance-table',
      //   title: 'MENUITEMS.ADVANCE-TABLE.TEXT',
      //   moduleName: 'advance-table',
      //   icon: 'fab fa-envira',
      //   class: '',
      //   groupTitle: false,
      //   submenu: []
      // },
      // {
      //   path: '',
      //   title: 'MENUITEMS.APPS.TEXT',
      //   moduleName: '',
      //   icon: '',
      //   class: '',
      //   groupTitle: true,
      //   submenu: []
      // },
      // {
      //   path: 'calendar',
      //   title: 'MENUITEMS.CALENDAR.TEXT',
      //   moduleName: 'calendar',
      //   icon: 'far fa-calendar',
      //   class: '',
      //   groupTitle: false,
      //   submenu: []
      // },
      // {
      //   path: 'task',
      //   title: 'MENUITEMS.TASK.TEXT',
      //   moduleName: 'task',
      //   icon: 'fas fa-tasks',
      //   class: '',
      //   groupTitle: false,
      //   submenu: []
      // },
      {
        path: 'contacts',
        title: 'MENUITEMS.CONTACTS.TEXT',
        moduleName: 'contacts',
        icon: 'far fa-address-card',
        "class": '',
        groupTitle: false,
        submenu: []
      }, {
        path: 'employee',
        title: 'Colaboradores',
        moduleName: 'employee',
        icon: 'far fa-address-card',
        "class": '',
        groupTitle: false,
        submenu: []
      } // {
      //   path: '',
      //   title: 'MENUITEMS.EMAIL.TEXT',
      //   moduleName: 'email',
      //   icon: 'fas fa-mail-bulk',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/email/inbox',
      //       title: 'MENUITEMS.EMAIL.LIST.INBOX',
      //       moduleName: 'email',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/email/compose',
      //       title: 'MENUITEMS.EMAIL.LIST.COMPOSE',
      //       moduleName: 'email',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/email/read-mail',
      //       title: 'MENUITEMS.EMAIL.LIST.READ',
      //       moduleName: 'email',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'MENUITEMS.MORE-APPS.TEXT',
      //   moduleName: 'apps',
      //   icon: 'fab fa-google-play',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/apps/chat',
      //       title: 'MENUITEMS.MORE-APPS.LIST.CHAT',
      //       moduleName: 'apps',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/apps/dragdrop',
      //       title: 'MENUITEMS.MORE-APPS.LIST.DRAG-DROP',
      //       moduleName: 'apps',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/apps/contact-grid',
      //       title: 'MENUITEMS.MORE-APPS.LIST.CONTACT-GRID',
      //       moduleName: 'apps',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/apps/support',
      //       title: 'MENUITEMS.MORE-APPS.LIST.SUPPORT',
      //       moduleName: 'apps',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'MENUITEMS.COMPONENTS.TEXT',
      //   moduleName: '',
      //   icon: '',
      //   class: '',
      //   groupTitle: true,
      //   submenu: []
      // },
      // {
      //   path: '',
      //   title: 'MENUITEMS.WIDGETS.TEXT',
      //   moduleName: 'widget',
      //   icon: 'fab fa-pagelines',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/widget/chart-widget',
      //       title: 'MENUITEMS.WIDGETS.LIST.CHART-WIDGET',
      //       moduleName: 'widget',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/widget/data-widget',
      //       title: 'MENUITEMS.WIDGETS.LIST.DATA-WIDGET',
      //       moduleName: 'widget',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'MENUITEMS.FORMS.TEXT',
      //   moduleName: 'forms',
      //   icon: 'fab fa-wpforms',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/forms/form-controls',
      //       title: 'MENUITEMS.FORMS.LIST.CONTROLS',
      //       moduleName: 'forms',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/forms/advance-controls',
      //       title: 'MENUITEMS.FORMS.LIST.ADVANCE',
      //       moduleName: 'forms',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/forms/form-example',
      //       title: 'MENUITEMS.FORMS.LIST.EXAMPLE',
      //       moduleName: 'forms',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/forms/form-validation',
      //       title: 'MENUITEMS.FORMS.LIST.VALIDATION',
      //       moduleName: 'forms',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/forms/wizard',
      //       title: 'MENUITEMS.FORMS.LIST.WIZARD',
      //       moduleName: 'forms',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/forms/editors',
      //       title: 'MENUITEMS.FORMS.LIST.EDITORS',
      //       moduleName: 'forms',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'MENUITEMS.TABLES.TEXT',
      //   moduleName: 'tables',
      //   icon: 'fas fa-table',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/tables/basic-tables',
      //       title: 'MENUITEMS.TABLES.LIST.BASIC',
      //       moduleName: 'tables',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/tables/material-tables',
      //       title: 'MENUITEMS.TABLES.LIST.MATERIAL',
      //       moduleName: 'tables',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/tables/ngx-datatable',
      //       title: 'MENUITEMS.TABLES.LIST.NGX-DATATABLE',
      //       moduleName: 'tables',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'User Interface (UI)',
      //   moduleName: 'ui',
      //   icon: 'fas fa-drafting-compass',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/ui/alerts',
      //       title: 'Alerts',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/badges',
      //       title: 'Badges',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/chips',
      //       title: 'Chips',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/modal',
      //       title: 'Modal',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/buttons',
      //       title: 'Buttons',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/expansion-panel',
      //       title: 'Expansion Panel',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/bottom-sheet',
      //       title: 'Bottom Sheet',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/dialogs',
      //       title: 'Dialogs',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/cards',
      //       title: 'Cards',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/labels',
      //       title: 'Labels',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/list-group',
      //       title: 'List Group',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/snackbar',
      //       title: 'Snackbar',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/preloaders',
      //       title: 'Preloaders',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/progressbars',
      //       title: 'Progress Bars',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/tabs',
      //       title: 'Tabs',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/typography',
      //       title: 'Typography',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/ui/helper-classes',
      //       title: 'Helper Classes',
      //       moduleName: 'ui',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'Medias',
      //   moduleName: 'media',
      //   icon: 'far fa-images',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/media/gallery',
      //       title: 'Image Gallery',
      //       moduleName: 'media',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'Charts',
      //   moduleName: 'charts',
      //   icon: 'fas fa-chart-line',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/charts/echart',
      //       title: 'Echart',
      //       moduleName: 'charts',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/charts/apex',
      //       title: 'Apex',
      //       moduleName: 'charts',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/charts/chartjs',
      //       title: 'ChartJS',
      //       moduleName: 'charts',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/charts/ngx-charts',
      //       title: 'Ngx-Charts',
      //       moduleName: 'charts',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/charts/gauge',
      //       title: 'Gauge',
      //       moduleName: 'charts',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'Timeline',
      //   moduleName: 'timeline',
      //   icon: 'fab fa-hubspot',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/timeline/timeline1',
      //       title: 'Timeline 1',
      //       moduleName: 'timeline',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/timeline/timeline2',
      //       title: 'Timeline 2',
      //       moduleName: 'timeline',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'Icons',
      //   moduleName: 'icons',
      //   icon: 'fas fa-paw',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/icons/material',
      //       title: 'Material Icons',
      //       moduleName: 'icons',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/icons/font-awesome',
      //       title: 'Font Awesome',
      //       moduleName: 'icons',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: '-- Pages',
      //   moduleName: '',
      //   icon: '',
      //   class: '',
      //   groupTitle: true,
      //   submenu: []
      // },
      // {
      //   path: '',
      //   title: 'Authentication',
      //   moduleName: 'authentication',
      //   icon: 'fas fa-id-card',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/authentication/signin',
      //       title: 'Sign In',
      //       moduleName: 'authentication',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/authentication/signup',
      //       title: 'Sign Up',
      //       moduleName: 'authentication',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/authentication/forgot-password',
      //       title: 'Forgot Password',
      //       moduleName: 'authentication',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/authentication/locked',
      //       title: 'Locked',
      //       moduleName: 'authentication',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/authentication/page404',
      //       title: '404 - Not Found',
      //       moduleName: 'authentication',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/authentication/page500',
      //       title: '500 - Server Error',
      //       moduleName: 'authentication',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'Extra Pages',
      //   moduleName: 'extra-pages',
      //   icon: 'far fa-file-alt',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/extra-pages/profile',
      //       title: 'Profile',
      //       moduleName: 'extra-pages',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/extra-pages/pricing',
      //       title: 'Pricing',
      //       moduleName: 'extra-pages',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/extra-pages/invoice',
      //       title: 'Invoice',
      //       moduleName: 'extra-pages',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/extra-pages/faqs',
      //       title: 'Faqs',
      //       moduleName: 'extra-pages',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/extra-pages/blank',
      //       title: 'Blank Page',
      //       moduleName: 'extra-pages',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'Maps',
      //   moduleName: 'maps',
      //   icon: 'fas fa-globe-americas',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/maps/google',
      //       title: 'Google Map',
      //       moduleName: 'maps',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   title: 'Multi level',
      //   moduleName: 'multilevel',
      //   icon: 'fas fa-angle-double-down',
      //   class: 'menu-toggle',
      //   groupTitle: false,
      //   submenu: [
      //     {
      //       path: '/multilevel/first1',
      //       title: 'First',
      //       moduleName: 'multilevel',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     },
      //     {
      //       path: '/',
      //       title: 'Second',
      //       moduleName: 'secondlevel',
      //       icon: '',
      //       class: 'ml-sub-menu',
      //       groupTitle: false,
      //       submenu: [
      //         {
      //           path: '/multilevel/secondlevel/second1',
      //           title: 'Second 1',
      //           moduleName: 'secondlevel',
      //           icon: '',
      //           class: 'ml-sub-sub-menu',
      //           groupTitle: false,
      //           submenu: []
      //         },
      //         {
      //           path: '/multilevel/secondlevel/second2',
      //           title: 'Second 2',
      //           moduleName: 'secondlevel',
      //           icon: '',
      //           class: 'ml-sub-sub-menu',
      //           groupTitle: false,
      //           submenu: []
      //         }
      //       ]
      //     },
      //     {
      //       path: '/multilevel/first3',
      //       title: 'Third',
      //       moduleName: 'multilevel',
      //       icon: '',
      //       class: 'ml-menu',
      //       groupTitle: false,
      //       submenu: []
      //     }
      //   ]
      // }
      ];
      /***/
    },

    /***/
    64635:
    /*!***********************************************************!*\
      !*** ./src/app/views/layout/sidebar/sidebar.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sidebar-items */
      7452);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      function SidebarComponent_li_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, sidebarItem_r1.title));
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_14_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SidebarComponent_li_14_a_2_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8);

            var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r6.callLevel1Toggle($event, sidebarItem_r1.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", sidebarItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](6, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](8, _c0, sidebarItem_r1["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](10, _c0, sidebarItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](4, 4, sidebarItem_r1.title), " ");
        }
      }

      function SidebarComponent_li_14_ul_3_li_1_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SidebarComponent_li_14_ul_3_li_1_ul_4_li_1_Template_a_click_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16);

            var sidebarSubsubItem_r14 = restoredCtx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](5);

            return ctx_r15.callLevel3Toggle($event, sidebarSubsubItem_r14.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubsubItem_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", ctx_r13.level3Menu === sidebarSubsubItem_r14.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r14.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", sidebarSubsubItem_r14.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](7, _c0, sidebarSubsubItem_r14.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](9, _c0, sidebarSubsubItem_r14["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](3, 5, sidebarSubsubItem_r14.title), " ");
        }
      }

      function SidebarComponent_li_14_ul_3_li_1_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SidebarComponent_li_14_ul_3_li_1_ul_4_li_1_Template, 4, 11, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", sidebarSubItem_r11.submenu);
        }
      }

      function SidebarComponent_li_14_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SidebarComponent_li_14_ul_3_li_1_Template_a_click_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var sidebarSubItem_r11 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

            return ctx_r18.callLevel2Toggle($event, sidebarSubItem_r11.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, SidebarComponent_li_14_ul_3_li_1_ul_4_Template, 2, 1, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", ctx_r10.level2Menu === sidebarSubItem_r11.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r11.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", sidebarSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](8, _c0, sidebarSubItem_r11.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](10, _c0, sidebarSubItem_r11["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](3, 6, sidebarSubItem_r11.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", sidebarSubItem_r11.submenu.length > 0);
        }
      }

      function SidebarComponent_li_14_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SidebarComponent_li_14_ul_3_li_1_Template, 5, 12, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", sidebarItem_r1.submenu);
        }
      }

      function SidebarComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SidebarComponent_li_14_div_1_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, SidebarComponent_li_14_a_2_Template, 5, 12, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, SidebarComponent_li_14_ul_3_Template, 2, 1, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", sidebarItem_r1.groupTitle === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !sidebarItem_r1.groupTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", sidebarItem_r1.submenu.length > 0);
        }
      }

      var _c1 = function _c1(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _SidebarComponent = /*#__PURE__*/function () {
        function _SidebarComponent(document, renderer, elementRef, authService, router) {
          var _this15 = this;

          _classCallCheck(this, _SidebarComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.authService = authService;
          this.router = router;
          this.level1Menu = '';
          this.level2Menu = '';
          this.level3Menu = '';
          this.headerHeight = 60;
          this.routerObj = null;
          this.routerObj = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
              // logic for select active menu in dropdown
              var currenturl = event.url.split('?')[0];
              _this15.level1Menu = currenturl.split('/')[1];
              _this15.level2Menu = currenturl.split('/')[2]; // close sidebar on mobile screen after menu select

              _this15.renderer.removeClass(_this15.document.body, 'overlay-open');
            }
          });
        }

        _createClass(_SidebarComponent, [{
          key: "windowResizecall",
          value: function windowResizecall(event) {
            this.setMenuHeight();
            this.checkStatuForResize(false);
          }
        }, {
          key: "onGlobalClick",
          value: function onGlobalClick(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.renderer.removeClass(this.document.body, 'overlay-open');
            }
          }
        }, {
          key: "callLevel1Toggle",
          value: function callLevel1Toggle(event, element) {
            if (element === this.level1Menu) {
              this.level1Menu = '0';
            } else {
              this.level1Menu = element;
            }

            var hasClass = event.target.classList.contains('toggled');

            if (hasClass) {
              this.renderer.removeClass(event.target, 'toggled');
            } else {
              this.renderer.addClass(event.target, 'toggled');
            }
          }
        }, {
          key: "callLevel2Toggle",
          value: function callLevel2Toggle(event, element) {
            if (element === this.level2Menu) {
              this.level2Menu = '0';
            } else {
              this.level2Menu = element;
            }
          }
        }, {
          key: "callLevel3Toggle",
          value: function callLevel3Toggle(event, element) {
            if (element === this.level3Menu) {
              this.level3Menu = '0';
            } else {
              this.level3Menu = element;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.currentUserValue) {
              this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(function (sidebarItem) {
                return sidebarItem;
              });
            }

            this.initLeftSidebar();
            this.bodyTag = this.document.body;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routerObj.unsubscribe();
          }
        }, {
          key: "initLeftSidebar",
          value: function initLeftSidebar() {
            var _this = this; // Set menu height


            _this.setMenuHeight();

            _this.checkStatuForResize(true);
          }
        }, {
          key: "setMenuHeight",
          value: function setMenuHeight() {
            this.innerHeight = window.innerHeight;
            var height = this.innerHeight - this.headerHeight;
            this.listMaxHeight = height + '';
            this.listMaxWidth = '500px';
          }
        }, {
          key: "isOpen",
          value: function isOpen() {
            return this.bodyTag.classList.contains('overlay-open');
          }
        }, {
          key: "checkStatuForResize",
          value: function checkStatuForResize(firstTime) {
            if (window.innerWidth < 1170) {
              this.renderer.addClass(this.document.body, 'ls-closed');
            } else {
              this.renderer.removeClass(this.document.body, 'ls-closed');
            }
          }
        }, {
          key: "mouseHover",
          value: function mouseHover(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('submenu-closed')) {
              this.renderer.addClass(this.document.body, 'side-closed-hover');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "mouseOut",
          value: function mouseOut(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('side-closed-hover')) {
              this.renderer.removeClass(this.document.body, 'side-closed-hover');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }]);

        return _SidebarComponent;
      }();

      _SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _SidebarComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.windowResizecall($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) {
              return ctx.onGlobalClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveDocument"]);
          }
        },
        decls: 15,
        vars: 8,
        consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], ["id", "sidebarnav", 1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["src", "assets/images/usrbig.jpg", "alt", "User Image", 1, "img-circle", "user-img-circle"], [1, "profile-usertitle"], [1, "sidebar-userpic-name"], [1, "profile-usertitle-job"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) {
              return ctx.mouseHover($event);
            })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) {
              return ctx.mouseOut($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, " Emily Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, SidebarComponent_li_14_Template, 4, 6, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](5, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](13, 3, "MENUITEMS.USER.POST"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.sidebarItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        apiUrl: 'http://localhost:4200',
        apiUrlChallenge: 'https://challenger-backend-app.azurewebsites.net'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getChallengeUrl": function getChallengeUrl() {
          return (
            /* binding */
            _getChallengeUrl
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      function _getChallengeUrl() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrlChallenge;
      }

      var providers = [{
        provide: 'BASE_URL_CHALLENGE',
        useFactory: _getChallengeUrl,
        deps: []
      }];

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map