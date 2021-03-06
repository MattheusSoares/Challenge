(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["src_app_views_dashboard_dashboard_module_ts"], {
    /***/
    32913:
    /*!*************************************************************!*\
      !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardRoutingModule": function DashboardRoutingModule() {
          return (
            /* binding */
            _DashboardRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/main.component */
      51672);
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      33345);
      /* harmony import */


      var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard3/dashboard3.component */
      60201);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }, {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
      }, {
        path: 'dashboard2',
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__.Dashboard2Component
      }, {
        path: 'dashboard3',
        component: _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__.Dashboard3Component
      }];

      var _DashboardRoutingModule = function _DashboardRoutingModule() {
        _classCallCheck(this, _DashboardRoutingModule);
      };

      _DashboardRoutingModule.??fac = function DashboardRoutingModule_Factory(t) {
        return new (t || _DashboardRoutingModule)();
      };

      _DashboardRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _DashboardRoutingModule
      });
      _DashboardRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    54727:
    /*!*****************************************************!*\
      !*** ./src/app/views/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      32913);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main/main.component */
      51672);
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      33345);
      /* harmony import */


      var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard3/dashboard3.component */
      60201);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-echarts */
      93104);
      /* harmony import */


      var angular_gauge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-gauge */
      66627);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DashboardModule = function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      };

      _DashboardModule.??fac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.ChartsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_12__.NgxEchartsModule.forRoot({
          echarts: function echarts() {
            return Promise.resolve().then(__webpack_require__.t.bind(__webpack_require__,
            /*! echarts */
            95252, 23));
          }
        }), angular_gauge__WEBPACK_IMPORTED_MODULE_13__.GaugeModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_DashboardModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_2__.Dashboard2Component, _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_3__.Dashboard3Component],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.ChartsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_12__.NgxEchartsModule, angular_gauge__WEBPACK_IMPORTED_MODULE_13__.GaugeModule]
        });
      })();
      /***/

    },

    /***/
    33345:
    /*!********************************************************************!*\
      !*** ./src/app/views/dashboard/dashboard2/dashboard2.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Dashboard2Component": function Dashboard2Component() {
          return (
            /* binding */
            _Dashboard2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! echarts */
      95252);
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-echarts */
      93104);
      /* harmony import */


      var angular_gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-gauge */
      66627);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _Dashboard2Component = /*#__PURE__*/function () {
        function _Dashboard2Component() {
          _classCallCheck(this, _Dashboard2Component);

          this.lineBarChart = echarts__WEBPACK_IMPORTED_MODULE_0__.EChartOption;
          this.ebarChart = echarts__WEBPACK_IMPORTED_MODULE_0__.EChartOption;
          this.gaugeValues = {
            1: 100
          };

          this.percentageValue = function (value) {
            return "".concat(Math.round(value), " / ").concat(this['max']);
          };
        }

        _createClass(_Dashboard2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.lineChart();
            this.barChart();

            var updateValues = function updateValues() {
              _this.gaugeValues = {
                1: Math.round(Math.random() * 100)
              };
            };

            var INTERVAL = 3000;
            this.interval = setInterval(updateValues, INTERVAL);
            updateValues();
          } // Charts

        }, {
          key: "lineChart",
          value: function lineChart() {
            // line bar chart
            this.lineBarChart = {
              grid: {
                top: '6',
                right: '0',
                bottom: '17',
                left: '25'
              },
              xAxis: {
                data: ['2014', '2015', '2016', '2017', '2018'],
                axisLine: {
                  lineStyle: {
                    color: '#eaeaea'
                  }
                },
                axisLabel: {
                  fontSize: 10,
                  color: '#9aa0ac'
                }
              },
              tooltip: {
                show: true,
                showContent: true,
                alwaysShowContent: false,
                triggerOn: 'mousemove',
                trigger: 'axis'
              },
              yAxis: {
                splitLine: {
                  lineStyle: {
                    color: '#eaeaea'
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: '#eaeaea'
                  }
                },
                axisLabel: {
                  fontSize: 10,
                  color: '#9aa0ac'
                }
              },
              series: [{
                name: 'sales',
                type: 'bar',
                data: [11, 14, 8, 16, 11, 13]
              }, {
                name: 'profit',
                type: 'line',
                smooth: true,
                lineStyle: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetY: 10
                },
                data: [10, 7, 17, 11, 15],
                symbolSize: 10
              }, {
                name: 'growth',
                type: 'bar',
                data: [10, 14, 10, 15, 9, 25]
              }],
              color: ['#9f78ff', '#fa626b', '#32cafe']
            };
          }
        }, {
          key: "barChart",
          value: function barChart() {
            this.ebarChart = {
              grid: {
                show: false
              },
              xAxis: {
                data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
                show: false,
                axisLabel: {
                  fontSize: 10,
                  color: '#9aa0ac'
                }
              },
              tooltip: {
                show: true,
                showContent: true,
                alwaysShowContent: false,
                triggerOn: 'mousemove',
                trigger: 'axis'
              },
              yAxis: {
                axisLabel: {
                  fontSize: 10,
                  color: '#9aa0ac'
                },
                show: false,
                splitLine: {
                  show: false
                }
              },
              series: [{
                name: 'sales',
                type: 'bar',
                data: [13, 14, 10, 16, 11, 13, 13, 14, 10, 16, 11, 13],
                barMaxWidth: 10
              }, {
                name: 'growth',
                type: 'bar',
                data: [10, 14, 10, 15, 9, 25, 10, 14, 10, 15, 9, 25],
                barMaxWidth: 10
              }],
              color: ['#A3A09D', '#32cafe']
            };
          }
        }]);

        return _Dashboard2Component;
      }();

      _Dashboard2Component.??fac = function Dashboard2Component_Factory(t) {
        return new (t || _Dashboard2Component)();
      };

      _Dashboard2Component.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _Dashboard2Component,
        selectors: [["app-dashboard2"]],
        decls: 389,
        vars: 9,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], ["echarts", "", 1, "deshboard-echart-height", 3, "options"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-15"], [1, "row", "mb-2"], [1, "col", "col-block"], [1, "font-15"], [1, "material-icons", "col-green"], [1, "material-icons", "col-orange"], [1, "progress", "shadow-style", "mb-2", "mt-3"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-70"], [1, "plain-card", "mt-4"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-50"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["src", "assets/images/user/user5.jpg", "alt", ""], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "body", "text-center"], [1, "m-b-20"], [1, "d-inline-block"], [3, "max", "dialStartAngle", "dialEndAngle", "label", "value", "animated", "animationDuration"], [1, "displayblock", "m-t-10"], [1, "icon", "m-t-15"], ["echarts", "", 1, "sparkline-echart", 3, "options"], [1, "recent-comment"], [1, "notice-board"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], [1, "text-muted"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], [1, "timeline"], [1, "timeline-badge", "primary"], ["src", "assets/images/user/user1.jpg", "alt", "...", 1, "notice-object"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "timeline-body"], ["src", "assets/images/user/user2.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user8.jpg", "alt", "...", 1, "notice-object"], [1, "assignment-file-type"], [1, "list-unstyled", 2, "position", "relative", "max-height", "285px", 3, "perfectScrollbar"], [1, "d-flex", "mb-3"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "set-flex"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-trash-alt", "psr-3"], [1, "far", "fa-arrow-alt-circle-down"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"], [1, "msr-3", "align-self-center", "img-icon", "danger-rgba", "text-danger"], [1, "far", "fa-file-pdf"], [1, "d-flex"], [1, "msr-3", "align-self-center", "img-icon", "info-rgba", "text-info"], [1, "far", "fa-file-archive"], [1, "text-center", "p-t-20"], ["mat-stroked-button", "", "color", "primary"]],
        template: function Dashboard2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Dashboard 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Dashboard 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Bar chart with line");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "h6", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Sales Report Last Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "105");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "825");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "trending_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "22,067");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "h6", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Sales Report Current Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "$147");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "trending_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "$968");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "$1,147");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "trending_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, " Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "table", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](106, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "td", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](110, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Placed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](122, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "td", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](125, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Pixel 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Shipped");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](137, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "td", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "OnePlus");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](152, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "td", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](155, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Galaxy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "Delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](167, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "td", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](170, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "Moto Z2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, "Placed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](182, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "td", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](185, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](187, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "Nokia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "Placed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](197, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](204, " Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "h4", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "Total Visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "5,98,345");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](212, "mwl-gauge", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "Satisfaction Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "h6", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "36% Average");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](218, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](225, "Notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, " Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](231, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "h5", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "small", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "7 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](241, "img", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "h5", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "p", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](251, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "h5", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](261, "img", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "h5", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](264, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](266, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](272, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](275, " Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "ul", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](278, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](280, "img", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "h5", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](284, "Lorem ipsum dolor sit amet, id quo eruditi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](286, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](287, "5 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](290, "img", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "h5", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "Lorem ipsum dolor sit amet, id quo eruditi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](295, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](297, "10 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](300, "img", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "h5", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "Lorem ipsum dolor sit amet, id quo eruditi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](306, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "20 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](310, "img", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](312, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](313, "h5", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](314, "Lorem ipsum dolor sit amet, id quo eruditi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](317, "35 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](319, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](321, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](322, "Documents");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "ul", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "li", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "span", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](328, "i", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](330, "h5", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, "Java Programming");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](333, ".doc, 4.3 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](334, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](336, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](337, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "li", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](339, "span", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](340, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "h5", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "Angular Theory");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](345, ".xls, 2.5 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](348, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](349, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](350, "li", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "span", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](352, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](353, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "h5", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "Maths Sums Solution");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, ".pdf, 10.5 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](358, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](360, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](361, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "li", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](363, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](364, "i", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](366, "h5", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](367, "Submit Science Journal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](369, ".zip, 53.2 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](370, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](372, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](373, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "li", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](375, "span", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](376, "i", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "h5", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](379, "Marketing Instructions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](380, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](381, ".doc, 5.3 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](382, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](384, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](385, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](386, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "More Documents");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("options", ctx.lineBarChart);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](190);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("max", 100)("dialStartAngle", -90)("dialEndAngle", -90.001)("label", ctx.percentageValue)("value", ctx.gaugeValues[1])("animated", true)("animationDuration", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("options", ctx.ebarChart);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, ngx_echarts__WEBPACK_IMPORTED_MODULE_3__.NgxEchartsDirective, angular_gauge__WEBPACK_IMPORTED_MODULE_4__["??a"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    60201:
    /*!********************************************************************!*\
      !*** ./src/app/views/dashboard/dashboard3/dashboard3.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Dashboard3Component": function Dashboard3Component() {
          return (
            /* binding */
            _Dashboard3Component
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


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);

      var _Dashboard3Component = /*#__PURE__*/function () {
        function _Dashboard3Component() {
          _classCallCheck(this, _Dashboard3Component);
        }

        _createClass(_Dashboard3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chart1();
            this.chart2();
          }
        }, {
          key: "chart1",
          value: function chart1() {
            this.lineChartOptions = {
              series: [{
                name: 'High - 2013',
                data: [15, 13, 22, 23, 17, 32, 27]
              }, {
                name: 'Low - 2013',
                data: [12, 18, 14, 18, 23, 13, 21]
              }],
              chart: {
                height: 350,
                type: 'line',
                foreColor: '#9aa0ac',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#F45B5B', '#5F98CF'],
              stroke: {
                curve: 'smooth'
              },
              grid: {
                row: {
                  colors: ['transparent', 'transparent'],
                  opacity: 0.5
                }
              },
              markers: {
                size: 3
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                  text: 'Month'
                }
              },
              yaxis: {
                // opposite: true,
                title: {
                  text: 'Temperature'
                },
                min: 5,
                max: 40
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              },
              tooltip: {
                theme: 'dark',
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }, {
          key: "chart2",
          value: function chart2() {
            this.barChartOptions = {
              series: [{
                name: 'Product 1',
                data: [44, 55, 41, 67, 22, 43]
              }, {
                name: 'Product 2',
                data: [13, 23, 20, 8, 13, 27]
              }, {
                name: 'Product 3',
                data: [11, 17, 15, 15, 21, 14]
              }, {
                name: 'Product 4',
                data: [21, 7, 25, 13, 22, 8]
              }],
              chart: {
                type: 'bar',
                height: 350,
                foreColor: '#9aa0ac',
                stacked: true,
                toolbar: {
                  show: false
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '30%'
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                type: 'category',
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
              },
              legend: {
                show: false
              },
              fill: {
                opacity: 0.8,
                colors: ['#01B8AA', '#374649', '#FD625E', '#F2C80F']
              },
              tooltip: {
                theme: 'dark',
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }]);

        return _Dashboard3Component;
      }();

      _Dashboard3Component.??fac = function Dashboard3Component_Factory(t) {
        return new (t || _Dashboard3Component)();
      };

      _Dashboard3Component.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _Dashboard3Component,
        selectors: [["app-dashboard3"]],
        decls: 560,
        vars: 22,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "text-muted"], [1, "text-info"], [1, "card-content", "mt-2"], [1, "progress", "skill-progress", "m-b-5", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-45"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "text-muted", "mb-0"], [1, "text-success"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-45"], [1, "text-danger"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-45"], [1, "text-secondary"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-45"], [1, "col-lg-6"], [1, "header"], [1, "body"], [1, "recent-report__chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "tooltip", "legend", "fill"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], [1, "btn", "tblActnBtn"], [1, "material-icons"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "label", "bg-red", "shadow-style"], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user4.jpg", "alt", ""], ["src", "assets/images/user/user5.jpg", "alt", ""], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], ["id", "new-orders", 1, "media-list", "position-relative"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "border-top-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "assign-style"], [1, "feedBody"], [1, "active-feed"], [1, "feed-user-img"], ["src", "assets/images/user/user1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblFileStyle"], [1, "m-b-15", "m-t-15"], [1, "diactive-feed"], ["src", "assets/images/user/user2.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblTaskStyle"], ["src", "assets/images/user/user3.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblCommentStyle"], ["src", "assets/images/user/user4.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblReplyStyle"], ["src", "assets/images/user/user6.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "label", "l-bg-green", "shadow-style"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"]],
        template: function Dashboard3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Dashboard 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Dashboard 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Todays Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Income For Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "$170");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "75%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Total Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Total Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h3", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "$120");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "25%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "New Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Fresh New Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h3", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "New Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Joined New User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h3", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "25%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "apx-chart", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "apx-chart", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, " Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "table", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "ERP System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Abc Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Android App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Ios App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "Java Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Desktop App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "table", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Employees");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](278, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](282, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "Pixel 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](294, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](296, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "$5550");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "OnePlus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](312, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](314, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "$9000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "Galaxy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](328, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](330, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "$7500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "Moto Z2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](342, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](344, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](346, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "$8500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](358, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](360, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](362, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](374, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](376, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](378, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "ul", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "li", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "span", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "File");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, " Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "6 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, " hii John, I have upload doc related to task. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "li", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](406, "img", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, " Jalpa Joshi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "5 hours ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, " Please do as specify. Let me know if you have any query. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "li", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](417, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "span", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, " Lina Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "6 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, " Hey, How are you?? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "li", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](428, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, " Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "7 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, " I am fine. You?? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "li", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](439, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "Task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, " Jalpa Joshi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "5 hours ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, " Please do as specify. Let me know if you have any query. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "Assign Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "table", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](471, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Task A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "span", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](481, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](484, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "Task B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "To Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](494, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](497, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "Task C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "span", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "On Hold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](507, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](510, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "Task D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "span", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "Wait Approvel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](520, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](523, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, "Task E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "Suspended");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](533, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](536, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Task A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, "Doing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](543, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](546, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](549, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](551, "Task B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](554, "To Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](556, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](559, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

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

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.lineChartOptions.series)("chart", ctx.lineChartOptions.chart)("xaxis", ctx.lineChartOptions.xaxis)("stroke", ctx.lineChartOptions.stroke)("colors", ctx.lineChartOptions.colors)("dataLabels", ctx.lineChartOptions.dataLabels)("legend", ctx.lineChartOptions.legend)("tooltip", ctx.lineChartOptions.tooltip)("markers", ctx.lineChartOptions.markers)("grid", ctx.lineChartOptions.grid)("yaxis", ctx.lineChartOptions.yaxis)("title", ctx.lineChartOptions.title)("fill", ctx.lineChartOptions.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.barChartOptions.series)("chart", ctx.barChartOptions.chart)("dataLabels", ctx.barChartOptions.dataLabels)("plotOptions", ctx.barChartOptions.plotOptions)("responsive", ctx.barChartOptions.responsive)("xaxis", ctx.barChartOptions.xaxis)("tooltip", ctx.barChartOptions.tooltip)("legend", ctx.barChartOptions.legend)("fill", ctx.barChartOptions.fill);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    51672:
    /*!********************************************************!*\
      !*** ./src/app/views/dashboard/main/main.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent
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


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      86178);

      var _MainComponent = /*#__PURE__*/function () {
        function _MainComponent() {
          _classCallCheck(this, _MainComponent);

          this.sampleData = [31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77, 31, 40, 28, 44, 60, 55];
        }

        _createClass(_MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cardChart1();
            this.cardChart2();
            this.cardChart3();
            this.cardChart4();
            this.chart1();
            this.chart2();
          }
        }, {
          key: "cardChart1",
          value: function cardChart1() {
            this.smallBarChart = {
              chart: {
                type: 'bar',
                width: 200,
                height: 50,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: '40%'
                }
              },
              series: [{
                name: 'income',
                data: this.sampleData
              }],
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {},
                marker: {
                  show: false
                }
              }
            };
          }
        }, {
          key: "cardChart2",
          value: function cardChart2() {
            this.smallAreaChart = {
              series: [{
                name: 'order',
                data: this.sampleData
              }],
              chart: {
                type: 'area',
                height: 50,
                sparkline: {
                  enabled: true
                }
              },
              stroke: {
                curve: 'straight'
              },
              colors: ['#00E396'],
              xaxis: {
                labels: {
                  show: false
                }
              },
              legend: {
                show: false
              },
              yaxis: {
                show: false
              },
              grid: {
                show: false
              }
            };
          }
        }, {
          key: "cardChart3",
          value: function cardChart3() {
            this.smallColumnChart = {
              chart: {
                type: 'bar',
                width: 200,
                height: 50,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: '40%'
                }
              },
              series: [{
                name: 'income',
                data: this.sampleData
              }],
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {},
                marker: {
                  show: false
                }
              }
            };
          }
        }, {
          key: "cardChart4",
          value: function cardChart4() {
            this.smallLineChart = {
              series: [{
                name: 'Users',
                data: this.sampleData
              }],
              chart: {
                type: 'line',
                height: 50,
                sparkline: {
                  enabled: true
                }
              },
              stroke: {
                curve: 'straight',
                colors: ['#FEB019'],
                width: 4
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                marker: {
                  show: false
                }
              },
              xaxis: {
                labels: {
                  show: false
                }
              },
              legend: {
                show: false
              },
              yaxis: {
                show: false
              },
              grid: {
                show: false
              }
            };
          }
        }, {
          key: "chart1",
          value: function chart1() {
            this.areaChartOptions = {
              elements: {
                point: {
                  radius: 0,
                  hitRadius: 5,
                  hoverRadius: 5
                }
              },
              legend: {
                display: true,
                labels: {
                  fontColor: '#9aa0ac'
                },
                position: 'top'
              },
              scales: {
                xAxes: [{
                  display: false
                }],
                yAxes: [{
                  display: false,
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            };
            this.areaChartPlugins = [{
              afterLayout: function afterLayout(chart) {
                var ctx = chart.chart.ctx;
                var gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                var dataset = chart.data.datasets[0];
                gradientStroke.addColorStop(0, '#5555FF');
                gradientStroke.addColorStop(1, '#9787FF');
                dataset.backgroundColor = gradientStroke;
                dataset.borderColor = 'transparent';
                dataset.pointBorderColor = 'transparent';
                dataset.pointBackgroundColor = 'transparent';
                dataset.lineTension = '0.4';
                var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                var dataset2 = chart.data.datasets[1];
                gradientStroke2.addColorStop(0, '#FF55B8');
                gradientStroke2.addColorStop(1, '#FF8787');
                dataset2.backgroundColor = gradientStroke2;
                dataset2.borderColor = 'transparent';
                dataset2.pointBorderColor = 'transparent';
                dataset2.pointBackgroundColor = 'transparent';
                dataset2.lineTension = '0.4';
              }
            }];
            this.areaChartData = [{
              label: 'Foods',
              data: [24, 18, 16, 18, 24, 36, 28]
            }, {
              label: 'Electronics',
              data: [20, 22, 30, 22, 18, 22, 30]
            }];
            this.areaChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']; // area chart end
          }
        }, {
          key: "chart2",
          value: function chart2() {
            this.radarChartPlugins = [{
              afterLayout: function afterLayout(chart) {
                var ctx = chart.chart.ctx;
                var gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                var dataset = chart.data.datasets[0];
                gradientStroke.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
                gradientStroke.addColorStop(1, 'rgba(151, 135, 255, 0.8)');
                dataset.backgroundColor = gradientStroke;
                dataset.borderColor = 'transparent';
                dataset.pointBackgroundColor = 'transparent';
                dataset.pointBorderColor = 'transparent';
                dataset.pointHoverBackgroundColor = 'transparent';
                dataset.pointHoverBorderColor = 'transparent';
                dataset.pointHitRadius = 50;
                var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                var dataset2 = chart.data.datasets[1];
                gradientStroke2.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
                gradientStroke2.addColorStop(1, 'rgba(255, 135, 135, 0.8)');
                dataset2.backgroundColor = gradientStroke2;
                dataset2.borderColor = 'transparent';
                dataset2.pointBackgroundColor = 'transparent';
                dataset2.pointBorderColor = 'transparent';
                dataset2.pointHoverBackgroundColor = 'transparent';
                dataset2.pointHoverBorderColor = 'transparent';
                dataset2.pointHitRadius = 50;
              },
              beforeDatasetsDraw: function beforeDatasetsDraw(chart) {
                chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
                chart.ctx.shadowBlur = 40;
              },
              afterDatasetsDraw: function afterDatasetsDraw(chart) {
                chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                chart.ctx.shadowBlur = 0;
              }
            }];
            this.radarChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
            this.radarChartData = [{
              data: [25, 59, 90, 81, 60, 82, 52],
              label: 'Product',
              fill: true
            }, {
              data: [40, 100, 40, 90, 40, 90, 84],
              label: 'Services',
              fill: true
            }];
            this.radarChartType = 'radar';
            this.radarChartColors = [{
              backgroundColor: ['rgba(109, 144, 232,0.8)']
            }, {
              backgroundColor: ['rgba(255, 140, 96,0.8)']
            }];
            this.radarChartOptions = {
              legend: {
                display: true,
                labels: {
                  fontColor: '#9aa0ac'
                },
                position: 'top'
              },
              gridLines: {
                display: false
              },
              scale: {
                ticks: {
                  maxTicksLimit: 1,
                  display: false
                }
              }
            }; // end radar chart
          }
        }]);

        return _MainComponent;
      }();

      _MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || _MainComponent)();
      };

      _MainComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _MainComponent,
        selectors: [["app-main"]],
        decls: 611,
        vars: 36,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-3", "col-sm-6"], [1, "counter-box", "text-center"], [1, "text", "font-17", "m-b-5"], [1, "m-b-10"], [1, "material-icons", "col-green"], [1, "apex-chart-center"], [3, "series", "chart", "plotOptions", "tooltip"], [1, "material-icons", "col-red"], [3, "series", "chart", "stroke", "yaxis", "fill", "colors"], [3, "series", "chart", "stroke", "tooltip"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body"], [1, "recent-report__chart"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "plugins", "legend"], [1, "axisData"], [1, "tick"], [1, "value", "productValue"], [1, "value", "serviceValue"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "chartType", "plugins", "colors"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "badge", "col-green", "shadow-style"], [1, "btn", "tblActnBtn"], [1, "material-icons"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "badge", "col-red", "shadow-style"], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user4.jpg", "alt", ""], ["src", "assets/images/user/user5.jpg", "alt", ""], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], ["id", "new-orders", 1, "media-list", "position-relative"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "border-top-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], [1, "box-part", "text-center"], [1, "fab", "fa-twitter", "fa-3x", "col-blue"], [1, "title", "p-t-15"], [1, "text", "p-b-10"], ["href", "#", "onClick", "return false;"], [1, "fab", "fa-instagram", "fa-3x", "col-red"], [1, "fab", "fa-facebook-f", "fa-3x", "col-blue"], [1, "totalEarning"], ["id", "skills", 1, "tab-pane", "body"], [1, "list-unstyled"], [1, "mb-2"], [1, "progress-label"], [1, "float-end", "progress-percent", "label", "label-info", "m-b-5"], [1, "progress", "skill-progress", "m-b-20", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-45"], [1, "float-end", "progress-percent", "label", "label-danger", "m-b-5"], ["role", "progressbar", "aria-valuenow", "27", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-27"], [1, "float-end", "progress-percent", "label", "label-primary", "m-b-5"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-25"], [1, "float-end", "progress-percent", "label", "label-success", "m-b-5"], ["role", "progressbar", "aria-valuenow", "18", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-18"], [1, "float-end", "progress-percent", "label", "label-warning", "m-b-5"], ["role", "progressbar", "aria-valuenow", "13", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-13"], [1, "review-block"], [1, "review-img"], [1, "col"], [1, "m-b-5", "fw-bold"], [1, "float-end", "m-r-10", "text-muted"], [1, "m-t-15", "m-b-15"], ["href", "#!"], [1, "material-icons", "m-r-10"], [1, "material-icons", "m-r-10", "col-red"], [1, "text-center", "m-b-5"], ["mat-stroked-button", "", "color", "primary"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Total Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "$758 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "apx-chart", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Orders Received");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "1025 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "trending_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "apx-chart", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Total Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "956 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "apx-chart", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Total Active Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "214 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "trending_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "apx-chart", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "mat-menu", null, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "canvas", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " MON ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " TUE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " WED ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " THU ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " FRI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " SAT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "36");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " SUN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "mat-menu", null, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "canvas", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, " Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "mat-menu", null, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "table", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "ERP System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Abc Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "td", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](220, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Android App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](239, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "Ios App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "td", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "Java Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "td", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "xyz@email.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Desktop App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "mat-menu", null, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "table", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "th", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "th", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Employees");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "th", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](331, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](333, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](335, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "Pixel 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](347, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](349, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](351, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "$5550");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "OnePlus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](363, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](365, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](367, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "$9000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "Galaxy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](379, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](383, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "$7500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "Moto Z2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](397, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](399, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "$8500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](411, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](413, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](415, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "ul", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](427, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](429, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](431, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](440, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, "Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](451, "i", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "Instagram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](462, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "Learn More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, " Source");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "mat-menu", null, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "$90,808");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "ul", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "envato.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "17%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](503, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "google.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "span", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "27%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](511, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "yahoo.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "25%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](519, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "span", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, "18%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](527, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](531, "Others");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "span", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, "13%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](535, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, "Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, " Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "mat-menu", null, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](549, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](551, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](558, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](560, "h6", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](561, "Alis Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "span", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, " a week ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](565, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "star_half");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](573, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](575, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum. Nam id nunc euismod, aliquet arcu quis, mattis nisi. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "a", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "thumb_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "a", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](581, "thumb_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](584, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "h6", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "John Dio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "span", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, " a week ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "star_half");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](599, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](601, "Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet. Nunc nec ipsum vel augue placerat faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "a", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "i", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "thumb_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "a", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](607, "thumb_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](609, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](610, "View all Customer Reviews");

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

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.smallBarChart.series)("chart", ctx.smallBarChart.chart)("plotOptions", ctx.smallBarChart.plotOptions)("tooltip", ctx.smallBarChart.tooltip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.smallAreaChart.series)("chart", ctx.smallAreaChart.chart)("stroke", ctx.smallAreaChart.stroke)("yaxis", ctx.smallAreaChart.yaxis)("fill", ctx.smallAreaChart.fill)("colors", ctx.smallAreaChart.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.smallColumnChart.series)("chart", ctx.smallColumnChart.chart)("plotOptions", ctx.smallColumnChart.plotOptions)("tooltip", ctx.smallColumnChart.tooltip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.smallLineChart.series)("chart", ctx.smallLineChart.chart)("stroke", ctx.smallLineChart.stroke)("tooltip", ctx.smallLineChart.tooltip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions)("plugins", ctx.areaChartPlugins)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.radarChartData)("labels", ctx.radarChartLabels)("options", ctx.radarChartOptions)("chartType", ctx.radarChartType)("plugins", ctx.radarChartPlugins)("colors", ctx.radarChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](178);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.BaseChartDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_dashboard_dashboard_module_ts-es5.js.map