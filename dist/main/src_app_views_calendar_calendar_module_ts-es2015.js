(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["src_app_views_calendar_calendar_module_ts"],{

/***/ 93520:
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayGridView": function() { return /* binding */ DayTableView; },
/* harmony export */   "DayTable": function() { return /* binding */ DayTable; },
/* harmony export */   "DayTableSlicer": function() { return /* binding */ DayTableSlicer; },
/* harmony export */   "Table": function() { return /* binding */ Table; },
/* harmony export */   "TableView": function() { return /* binding */ TableView; },
/* harmony export */   "buildDayTableModel": function() { return /* binding */ buildDayTableModel; }
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ 66748);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 9726);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/*!
FullCalendar v5.10.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var TableView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableView, _super);
    function TableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    TableView.prototype.renderSimpleLayout = function (headerRowContent, bodyContent) {
        var _a = this, props = _a.props, context = _a.context;
        var sections = [];
        var stickyHeaderDates = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunk: { content: bodyContent },
        });
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [] /* TODO: make optional? */, sections: sections }))); }));
    };
    TableView.prototype.renderHScrollLayout = function (headerRowContent, bodyContent, colCnt, dayMinWidth) {
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        var _a = this, props = _a.props, context = _a.context;
        var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar)(context.options);
        var sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunks: [{
                        key: 'main',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    }],
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunks: [{
                    key: 'main',
                    content: bodyContent,
                }],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                type: 'footer',
                key: 'footer',
                isSticky: true,
                chunks: [{
                        key: 'main',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    }],
            });
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections: sections }))); }));
    };
    return TableView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

function splitSegsByRow(segs, rowCnt) {
    var byRow = [];
    for (var i = 0; i < rowCnt; i += 1) {
        byRow[i] = [];
    }
    for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        byRow[seg.row].push(seg);
    }
    return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
    var byCol = [];
    for (var i = 0; i < colCnt; i += 1) {
        byCol[i] = [];
    }
    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
        var seg = segs_2[_i];
        byCol[seg.firstCol].push(seg);
    }
    return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
    var byRow = [];
    if (!ui) {
        for (var i = 0; i < rowCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (var i = 0; i < rowCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
            var seg = _a[_i];
            byRow[seg.row].segs.push(seg);
        }
    }
    return byRow;
}

var TableCellTop = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCellTop, _super);
    function TableCellTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCellTop.prototype.render = function () {
        var props = this.props;
        var navLinkAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(this.context, props.date);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, defaultContent: renderTopInner }, function (innerElRef, innerContent) { return ((innerContent || props.forceDayTop) && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-top", ref: innerElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ id: props.dayNumberId, className: "fc-daygrid-day-number" }, navLinkAttrs), innerContent || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))))); }));
    };
    return TableCellTop;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderTopInner(props) {
    return props.dayNumberText;
}

var DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'narrow',
});
function hasListItemDisplay(seg) {
    var display = seg.eventRange.ui.display;
    return display === 'list-item' || (display === 'auto' &&
        !seg.eventRange.def.allDay &&
        seg.firstCol === seg.lastCol && // can't be multi-day
        seg.isStart && // "
        seg.isEnd // "
    );
}

var TableBlockEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableBlockEvent, _super);
    function TableBlockEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBlockEvent.prototype.render = function () {
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, { extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay })));
    };
    return TableBlockEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TableListItemEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableListItemEvent, _super);
    function TableListItemEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableListItemEvent.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
        var timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot, { seg: props.seg, timeText: timeText, defaultContent: renderInnerContent, isDragging: props.isDragging, isResizing: false, isDateSelecting: false, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent) { return ( // we don't use styles!
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '), ref: rootElRef }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs)(props.seg, context)), innerContent)); }));
    };
    return TableListItemEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderInnerContent(innerProps) {
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-dot", style: { borderColor: innerProps.borderColor || innerProps.backgroundColor } }),
        innerProps.timeText && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-time" }, innerProps.timeText)),
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-title" }, innerProps.event.title || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))));
}

var TableCellMoreLink = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCellMoreLink, _super);
    function TableCellMoreLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compileSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(compileSegs);
        return _this;
    }
    TableCellMoreLink.prototype.render = function () {
        var props = this.props;
        var _a = this.compileSegs(props.singlePlacements), allSegs = _a.allSegs, invisibleSegs = _a.invisibleSegs;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot, { dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs: allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: function () {
                var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                    (props.eventResize ? props.eventResize.affectedInstances : null) ||
                    {};
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, allSegs.map(function (seg) {
                    var instanceId = seg.eventRange.instance.instanceId;
                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
                            visibility: isForcedInvisible[instanceId] ? 'hidden' : '',
                        } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange)))) : ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange))))));
                })));
            } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: rootElRef, className: ['fc-daygrid-more-link'].concat(classNames).join(' '), title: title, "aria-expanded": isExpanded, "aria-controls": popoverId }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createAriaClickAttrs)(handleClick)), innerContent)); }));
    };
    return TableCellMoreLink;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function compileSegs(singlePlacements) {
    var allSegs = [];
    var invisibleSegs = [];
    for (var _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++) {
        var placement = singlePlacements_1[_i];
        allSegs.push(placement.seg);
        if (!placement.isVisible) {
            invisibleSegs.push(placement.seg);
        }
    }
    return { allSegs: allSegs, invisibleSegs: invisibleSegs };
}

var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({ week: 'narrow' });
var TableCell = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCell, _super);
    function TableCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            dayNumberId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
        };
        _this.handleRootEl = function (el) {
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.rootElRef, el);
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.props.elRef, el);
        };
        return _this;
    }
    TableCell.prototype.render = function () {
        var _a = this, context = _a.context, props = _a.props, state = _a.state, rootElRef = _a.rootElRef;
        var date = props.date, dateProfile = props.dateProfile;
        var navLinkAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(context, date, 'week');
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot, { date: date, dateProfile: dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, elRef: this.handleRootEl }, function (dayElRef, dayClassNames, rootDataAttrs, isDisabled) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: dayElRef, role: "gridcell", className: ['fc-daygrid-day'].concat(dayClassNames, props.extraClassNames || []).join(' ') }, rootDataAttrs, props.extraDataAttrs, (props.showDayNumber ? { 'aria-labelledby': state.dayNumberId } : {})),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: props.innerElRef /* different from hook system! RENAME */ },
                props.showWeekNumber && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot, { date: date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (weekElRef, weekClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: weekElRef, className: ['fc-daygrid-week-number'].concat(weekClassNames).join(' ') }, navLinkAttrs), innerContent)); })),
                !isDisabled && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellTop, { date: date, dateProfile: dateProfile, showDayNumber: props.showDayNumber, dayNumberId: state.dayNumberId, forceDayTop: props.forceDayTop, todayRange: props.todayRange, extraHookProps: props.extraHookProps })),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
                    props.fgContent,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange }))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bg" }, props.bgContent)))); }));
    };
    return TableCell;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

function computeFgSegPlacement(segs, // assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
    var hierarchy = new DayGridSegHierarchy();
    hierarchy.allowReslicing = true;
    hierarchy.strictOrder = strictOrder;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
        hierarchy.maxCoord = maxContentHeight;
        hierarchy.hiddenConsumes = true;
    }
    else if (typeof dayMaxEvents === 'number') {
        hierarchy.maxStackCnt = dayMaxEvents;
    }
    else if (typeof dayMaxEventRows === 'number') {
        hierarchy.maxStackCnt = dayMaxEventRows;
        hierarchy.hiddenConsumes = true;
    }
    // create segInputs only for segs with known heights
    var segInputs = [];
    var unknownHeightSegs = [];
    for (var i = 0; i < segs.length; i += 1) {
        var seg = segs[i];
        var instanceId = seg.eventRange.instance.instanceId;
        var eventHeight = eventInstanceHeights[instanceId];
        if (eventHeight != null) {
            segInputs.push({
                index: i,
                thickness: eventHeight,
                span: {
                    start: seg.firstCol,
                    end: seg.lastCol + 1,
                },
            });
        }
        else {
            unknownHeightSegs.push(seg);
        }
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var segRects = hierarchy.toRects();
    var _a = placeRects(segRects, segs, cells), singleColPlacements = _a.singleColPlacements, multiColPlacements = _a.multiColPlacements, leftoverMargins = _a.leftoverMargins;
    var moreCnts = [];
    var moreMarginTops = [];
    // add segs with unknown heights
    for (var _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++) {
        var seg = unknownHeightSegs_1[_i];
        multiColPlacements[seg.firstCol].push({
            seg: seg,
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // add the hidden entries
    for (var col = 0; col < cells.length; col += 1) {
        moreCnts.push(0);
    }
    for (var _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++) {
        var hiddenEntry = hiddenEntries_1[_b];
        var seg = segs[hiddenEntry.index];
        var hiddenSpan = hiddenEntry.span;
        multiColPlacements[hiddenSpan.start].push({
            seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (var col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
            moreCnts[col] += 1;
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // deal with leftover margins
    for (var col = 0; col < cells.length; col += 1) {
        moreMarginTops.push(leftoverMargins[col]);
    }
    return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, moreCnts: moreCnts, moreMarginTops: moreMarginTops };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
    var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
    var singleColPlacements = [];
    var multiColPlacements = [];
    var leftoverMargins = [];
    for (var col = 0; col < cells.length; col += 1) {
        var rects = rectsByEachCol[col];
        // compute all static segs in singlePlacements
        var singlePlacements = [];
        var currentHeight = 0;
        var currentMarginTop = 0;
        for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
            var rect = rects_1[_i];
            var seg = segs[rect.index];
            singlePlacements.push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: true,
                isAbsolute: false,
                absoluteTop: rect.levelCoord,
                marginTop: rect.levelCoord - currentHeight,
            });
            currentHeight = rect.levelCoord + rect.thickness;
        }
        // compute mixed static/absolute segs in multiPlacements
        var multiPlacements = [];
        currentHeight = 0;
        currentMarginTop = 0;
        for (var _a = 0, rects_2 = rects; _a < rects_2.length; _a++) {
            var rect = rects_2[_a];
            var seg = segs[rect.index];
            var isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
            var isFirstCol = rect.span.start === col;
            currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
            currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
            if (isAbsolute) {
                currentMarginTop += rect.thickness;
                if (isFirstCol) {
                    multiPlacements.push({
                        seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                        isVisible: true,
                        isAbsolute: true,
                        absoluteTop: rect.levelCoord,
                        marginTop: 0,
                    });
                }
            }
            else if (isFirstCol) {
                multiPlacements.push({
                    seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: rect.levelCoord,
                    marginTop: currentMarginTop, // claim the margin
                });
                currentMarginTop = 0;
            }
        }
        singleColPlacements.push(singlePlacements);
        multiColPlacements.push(multiPlacements);
        leftoverMargins.push(currentMarginTop);
    }
    return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, leftoverMargins: leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
    var rectsByEachCol = [];
    for (var col = 0; col < colCnt; col += 1) {
        rectsByEachCol.push([]);
    }
    for (var _i = 0, rects_3 = rects; _i < rects_3.length; _i++) {
        var rect = rects_3[_i];
        for (var col = rect.span.start; col < rect.span.end; col += 1) {
            rectsByEachCol[col].push(rect);
        }
    }
    return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
    if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
        return seg;
    }
    var eventRange = seg.eventRange;
    var origRange = eventRange.range;
    var slicedRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(origRange, {
        start: cells[spanStart].date,
        end: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(cells[spanEnd - 1].date, 1),
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
            def: eventRange.def,
            ui: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventRange.ui), { durationEditable: false }),
            instance: eventRange.instance,
            range: slicedRange,
        }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
var DayGridSegHierarchy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayGridSegHierarchy, _super);
    function DayGridSegHierarchy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // config
        _this.hiddenConsumes = false;
        // allows us to keep hidden entries in the hierarchy so they take up space
        _this.forceHidden = {};
        return _this;
    }
    DayGridSegHierarchy.prototype.addSegs = function (segInputs) {
        var _this = this;
        var hiddenSegs = _super.prototype.addSegs.call(this, segInputs);
        var entriesByLevel = this.entriesByLevel;
        var excludeHidden = function (entry) { return !_this.forceHidden[(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(entry)]; };
        // remove the forced-hidden segs
        for (var level = 0; level < entriesByLevel.length; level += 1) {
            entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
        }
        return hiddenSegs;
    };
    DayGridSegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
        var _a = this, entriesByLevel = _a.entriesByLevel, forceHidden = _a.forceHidden;
        var touchingEntry = insertion.touchingEntry, touchingLevel = insertion.touchingLevel, touchingLateral = insertion.touchingLateral;
        if (this.hiddenConsumes && touchingEntry) {
            var touchingEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(touchingEntry);
            // if not already hidden
            if (!forceHidden[touchingEntryId]) {
                if (this.allowReslicing) {
                    var placeholderEntry = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, touchingEntry), { span: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectSpans)(touchingEntry.span, entry.span) });
                    var placeholderEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(placeholderEntry);
                    forceHidden[placeholderEntryId] = true;
                    entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder
                    this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
                }
                else {
                    forceHidden[touchingEntryId] = true;
                    hiddenEntries.push(touchingEntry);
                }
            }
        }
        return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
    };
    return DayGridSegHierarchy;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy));

var TableRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableRow, _super);
    function TableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the <td>
        _this.frameElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the fc-daygrid-day-frame
        _this.fgElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the fc-daygrid-day-events
        _this.segHarnessRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // indexed by "instanceId:firstCol"
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            framePositions: null,
            maxContentHeight: null,
            eventInstanceHeights: {},
        };
        return _this;
    }
    TableRow.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state, context = _a.context;
        var options = context.options;
        var colCnt = props.cells.length;
        var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
        var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
        var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
        var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
        var _b = computeFgSegPlacement((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells), singleColPlacements = _b.singleColPlacements, multiColPlacements = _b.multiColPlacements, moreCnts = _b.moreCnts, moreMarginTops = _b.moreMarginTops;
        var isForcedInvisible = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: this.rootElRef, role: "row" },
            props.renderIntro && props.renderIntro(),
            props.cells.map(function (cell, col) {
                var normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
                var mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCell, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), innerElRef: _this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */, dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: _this.fgElRefs.createRef(cell.key), fgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, normalFgNodes),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, mirrorFgNodes))), bgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        _this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                        _this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                        _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))) }));
            })));
    };
    TableRow.prototype.componentDidMount = function () {
        this.updateSizing(true);
    };
    TableRow.prototype.componentDidUpdate = function (prevProps, prevState) {
        var currentProps = this.props;
        this.updateSizing(!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual)(prevProps, currentProps));
    };
    TableRow.prototype.getHighlightSegs = function () {
        var props = this.props;
        if (props.eventDrag && props.eventDrag.segs.length) { // messy check
            return props.eventDrag.segs;
        }
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return props.dateSelectionSegs;
    };
    TableRow.prototype.getMirrorSegs = function () {
        var props = this.props;
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return [];
    };
    TableRow.prototype.renderFgSegs = function (col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
        var context = this.context;
        var eventSelection = this.props.eventSelection;
        var framePositions = this.state.framePositions;
        var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
        var isMirror = isDragging || isResizing || isDateSelecting;
        var nodes = [];
        if (framePositions) {
            for (var _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++) {
                var placement = segPlacements_1[_i];
                var seg = placement.seg;
                var instanceId = seg.eventRange.instance.instanceId;
                var key = instanceId + ':' + col;
                var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
                var isAbsolute = placement.isAbsolute;
                var left = '';
                var right = '';
                if (isAbsolute) {
                    if (context.isRtl) {
                        right = 0;
                        left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                    }
                    else {
                        left = 0;
                        right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                    }
                }
                /*
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */
                nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''), key: key, ref: isMirror ? null : this.segHarnessRefs.createRef(key), style: {
                        visibility: isVisible ? '' : 'hidden',
                        marginTop: isAbsolute ? '' : placement.marginTop,
                        top: isAbsolute ? placement.absoluteTop : '',
                        left: left,
                        right: right,
                    } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange)))) : ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange))))));
            }
        }
        return nodes;
    };
    TableRow.prototype.renderFillSegs = function (segs, fillType) {
        var isRtl = this.context.isRtl;
        var todayRange = this.props.todayRange;
        var framePositions = this.state.framePositions;
        var nodes = [];
        if (framePositions) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                var leftRightCss = isRtl ? {
                    right: 0,
                    left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol],
                } : {
                    left: 0,
                    right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol],
                };
                nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey)(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === 'bg-event' ?
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange))) :
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill)(fillType)));
            }
        }
        return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}], nodes));
    };
    TableRow.prototype.updateSizing = function (isExternalSizingChange) {
        var _a = this, props = _a.props, frameElRefs = _a.frameElRefs;
        if (!props.forPrint &&
            props.clientWidth !== null // positioning ready?
        ) {
            if (isExternalSizingChange) {
                var frameEls = props.cells.map(function (cell) { return frameElRefs.currentMap[cell.key]; });
                if (frameEls.length) {
                    var originEl = this.rootElRef.current;
                    this.setState({
                        framePositions: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(originEl, frameEls, true, // isHorizontal
                        false),
                    });
                }
            }
            var oldInstanceHeights = this.state.eventInstanceHeights;
            var newInstanceHeights = this.queryEventInstanceHeights();
            var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
            this.setState({
                // HACK to prevent oscillations of events being shown/hidden from max-event-rows
                // Essentially, once you compute an element's height, never null-out.
                // TODO: always display all events, as visibility:hidden?
                eventInstanceHeights: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, oldInstanceHeights), newInstanceHeights),
                maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null,
            });
        }
    };
    TableRow.prototype.queryEventInstanceHeights = function () {
        var segElMap = this.segHarnessRefs.currentMap;
        var eventInstanceHeights = {};
        // get the max height amongst instance segs
        for (var key in segElMap) {
            var height = Math.round(segElMap[key].getBoundingClientRect().height);
            var instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key
            eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
        }
        return eventInstanceHeights;
    };
    TableRow.prototype.computeMaxContentHeight = function () {
        var firstKey = this.props.cells[0].key;
        var cellEl = this.cellElRefs.currentMap[firstKey];
        var fcContainerEl = this.fgElRefs.currentMap[firstKey];
        return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
    };
    TableRow.prototype.getCellEls = function () {
        var elMap = this.cellElRefs.currentMap;
        return this.props.cells.map(function (cell) { return elMap[cell.key]; });
    };
    return TableRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
TableRow.addStateEquality({
    eventInstanceHeights: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual,
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
    if (!mirrorSegs.length) {
        return [];
    }
    var topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
    return mirrorSegs.map(function (seg) { return ({
        seg: seg,
        isVisible: true,
        isAbsolute: true,
        absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
        marginTop: 0,
    }); });
}
function buildAbsoluteTopHash(colPlacements) {
    var topsByInstanceId = {};
    for (var _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++) {
        var placements = colPlacements_1[_i];
        for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
            var placement = placements_1[_a];
            topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
        }
    }
    return topsByInstanceId;
}

var Table = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitBusinessHourSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitBgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitFgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitDateSelectionSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitEventDrag = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByRow);
        _this.splitEventResize = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByRow);
        _this.rowRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        _this.handleRootEl = function (rootEl) {
            _this.rootEl = rootEl;
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                    isHitComboAllowed: _this.props.isHitComboAllowed,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var dateProfile = props.dateProfile, dayMaxEventRows = props.dayMaxEventRows, dayMaxEvents = props.dayMaxEvents, expandRows = props.expandRows;
        var rowCnt = props.cells.length;
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
        var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
        // if rows can't expand to fill fixed height, can't do balanced-height event limit
        // TODO: best place to normalize these options?
        if (limitViaBalanced && !expandRows) {
            limitViaBalanced = false;
            dayMaxEventRows = null;
            dayMaxEvents = null;
        }
        var classNames = [
            'fc-daygrid-body',
            limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
            expandRows ? '' : 'fc-daygrid-body-natural', // will height of one row depend on the others?
        ];
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: classNames.join(' '), ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: "day" }, function (nowDate, todayRange) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                        width: props.clientWidth,
                        minWidth: props.tableMinWidth,
                        height: expandRows ? props.clientHeight : '',
                    } },
                    props.colGroupNode,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", { role: "presentation" }, props.cells.map(function (cells, row) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRow, { ref: _this.rowRefs.createRef(row), key: cells.length
                            ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */
                            : row // in case there are no cells (like when resource view is loading)
                        , showDayNumbers: rowCnt > 1, showWeekNumbers: props.showWeekNumbers, todayRange: todayRange, dateProfile: dateProfile, cells: cells, renderIntro: props.renderRowIntro, businessHourSegs: businessHourSegsByRow[row], eventSelection: props.eventSelection, bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */, fgEventSegs: fgEventSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })); }))))); })));
    };
    // Hit System
    // ----------------------------------------------------------------------------------------------------
    Table.prototype.prepareHits = function () {
        this.rowPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootEl, this.rowRefs.collect().map(function (rowObj) { return rowObj.getCellEls()[0]; }), // first cell el in each row. TODO: not optimal
        false, true);
        this.colPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
        true, // horizontal
        false);
    };
    Table.prototype.queryHit = function (positionLeft, positionTop) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(positionLeft);
        var row = rowPositions.topToIndex(positionTop);
        if (row != null && col != null) {
            var cell = this.props.cells[row][col];
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
                dayEl: this.getCellEl(row, col),
                rect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row],
                },
                layer: 0,
            };
        }
        return null;
    };
    Table.prototype.getCellEl = function (row, col) {
        return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
    };
    Table.prototype.getCellRange = function (row, col) {
        var start = this.props.cells[row][col].date;
        var end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(start, 1);
        return { start: start, end: end };
    };
    return Table;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function isSegAllDay(seg) {
    return seg.eventRange.def.allDay;
}

var DayTableSlicer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTableSlicer, _super);
    function DayTableSlicer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forceDayIfListItem = true;
        return _this;
    }
    DayTableSlicer.prototype.sliceRange = function (dateRange, dayTableModel) {
        return dayTableModel.sliceRange(dateRange);
    };
    return DayTableSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer));

var DayTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTable, _super);
    function DayTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slicer = new DayTableSlicer();
        _this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTable.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(Table, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })));
    };
    return DayTable;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

var DayTableView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTableView, _super);
    function DayTableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayTableModel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildDayTableModel);
        _this.headerRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTableView.prototype.render = function () {
        var _this = this;
        var _a = this.context, options = _a.options, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
        var headerContent = options.dayHeaders && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 }));
        var bodyContent = function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTable, { ref: _this.tableRef, dateProfile: props.dateProfile, dayTableModel: dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint })); };
        return options.dayMinWidth
            ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth)
            : this.renderSimpleLayout(headerContent, bodyContent);
    };
    return DayTableView;
}(TableView));
function buildDayTableModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var TableDateProfileGenerator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableDateProfileGenerator, _super);
    function TableDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    TableDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        var dateEnv = this.props.dateEnv;
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        var endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) {
                end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(endOfWeek, 1);
            }
        }
        // ensure 6 weeks
        if (this.props.monthMode &&
            this.props.fixedWeekCount) {
            var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWeeks)(start, end));
            end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(end, 6 - rowCnt);
        }
        return { start: start, end: end };
    };
    return TableDateProfileGenerator;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator));

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    initialView: 'dayGridMonth',
    views: {
        dayGrid: {
            component: DayTableView,
            dateProfileGeneratorClass: TableDateProfileGenerator,
        },
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 },
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 },
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            monthMode: true,
            fixedWeekCount: true,
        },
    },
});

/* harmony default export */ __webpack_exports__["default"] = (main);

//# sourceMappingURL=main.js.map


/***/ }),

/***/ 9549:
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/main.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Draggable": function() { return /* binding */ ExternalDraggable; },
/* harmony export */   "FeaturefulElementDragging": function() { return /* binding */ FeaturefulElementDragging; },
/* harmony export */   "PointerDragging": function() { return /* binding */ PointerDragging; },
/* harmony export */   "ThirdPartyDraggable": function() { return /* binding */ ThirdPartyDraggable; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ 9726);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/*!
FullCalendar v5.10.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/



_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
var PointerDragging = /** @class */ (function () {
    function PointerDragging(containerEl) {
        var _this = this;
        this.subjectEl = null;
        // options that can be directly assigned by caller
        this.selector = ''; // will cause subjectEl in all emitted events to be this element
        this.handleSelector = '';
        this.shouldIgnoreMove = false;
        this.shouldWatchScroll = true; // for simulating pointermove on scroll
        // internal states
        this.isDragging = false;
        this.isTouchDragging = false;
        this.wasTouchScroll = false;
        // Mouse
        // ----------------------------------------------------------------------------------------------------
        this.handleMouseDown = function (ev) {
            if (!_this.shouldIgnoreMouse() &&
                isPrimaryMouseButton(ev) &&
                _this.tryStart(ev)) {
                var pev = _this.createEventFromMouse(ev, true);
                _this.emitter.trigger('pointerdown', pev);
                _this.initScrollWatch(pev);
                if (!_this.shouldIgnoreMove) {
                    document.addEventListener('mousemove', _this.handleMouseMove);
                }
                document.addEventListener('mouseup', _this.handleMouseUp);
            }
        };
        this.handleMouseMove = function (ev) {
            var pev = _this.createEventFromMouse(ev);
            _this.recordCoords(pev);
            _this.emitter.trigger('pointermove', pev);
        };
        this.handleMouseUp = function (ev) {
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.handleMouseUp);
            _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));
            _this.cleanup(); // call last so that pointerup has access to props
        };
        // Touch
        // ----------------------------------------------------------------------------------------------------
        this.handleTouchStart = function (ev) {
            if (_this.tryStart(ev)) {
                _this.isTouchDragging = true;
                var pev = _this.createEventFromTouch(ev, true);
                _this.emitter.trigger('pointerdown', pev);
                _this.initScrollWatch(pev);
                // unlike mouse, need to attach to target, not document
                // https://stackoverflow.com/a/45760014
                var targetEl = ev.target;
                if (!_this.shouldIgnoreMove) {
                    targetEl.addEventListener('touchmove', _this.handleTouchMove);
                }
                targetEl.addEventListener('touchend', _this.handleTouchEnd);
                targetEl.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
                // attach a handler to get called when ANY scroll action happens on the page.
                // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
                // http://stackoverflow.com/a/32954565/96342
                window.addEventListener('scroll', _this.handleTouchScroll, true);
            }
        };
        this.handleTouchMove = function (ev) {
            var pev = _this.createEventFromTouch(ev);
            _this.recordCoords(pev);
            _this.emitter.trigger('pointermove', pev);
        };
        this.handleTouchEnd = function (ev) {
            if (_this.isDragging) { // done to guard against touchend followed by touchcancel
                var targetEl = ev.target;
                targetEl.removeEventListener('touchmove', _this.handleTouchMove);
                targetEl.removeEventListener('touchend', _this.handleTouchEnd);
                targetEl.removeEventListener('touchcancel', _this.handleTouchEnd);
                window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true
                _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));
                _this.cleanup(); // call last so that pointerup has access to props
                _this.isTouchDragging = false;
                startIgnoringMouse();
            }
        };
        this.handleTouchScroll = function () {
            _this.wasTouchScroll = true;
        };
        this.handleScroll = function (ev) {
            if (!_this.shouldIgnoreMove) {
                var pageX = (window.pageXOffset - _this.prevScrollX) + _this.prevPageX;
                var pageY = (window.pageYOffset - _this.prevScrollY) + _this.prevPageY;
                _this.emitter.trigger('pointermove', {
                    origEvent: ev,
                    isTouch: _this.isTouchDragging,
                    subjectEl: _this.subjectEl,
                    pageX: pageX,
                    pageY: pageY,
                    deltaX: pageX - _this.origPageX,
                    deltaY: pageY - _this.origPageY,
                });
            }
        };
        this.containerEl = containerEl;
        this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Emitter();
        containerEl.addEventListener('mousedown', this.handleMouseDown);
        containerEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerCreated();
    }
    PointerDragging.prototype.destroy = function () {
        this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
        this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerDestroyed();
    };
    PointerDragging.prototype.tryStart = function (ev) {
        var subjectEl = this.querySubjectEl(ev);
        var downEl = ev.target;
        if (subjectEl &&
            (!this.handleSelector || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, this.handleSelector))) {
            this.subjectEl = subjectEl;
            this.isDragging = true; // do this first so cancelTouchScroll will work
            this.wasTouchScroll = false;
            return true;
        }
        return false;
    };
    PointerDragging.prototype.cleanup = function () {
        isWindowTouchMoveCancelled = false;
        this.isDragging = false;
        this.subjectEl = null;
        // keep wasTouchScroll around for later access
        this.destroyScrollWatch();
    };
    PointerDragging.prototype.querySubjectEl = function (ev) {
        if (this.selector) {
            return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(ev.target, this.selector);
        }
        return this.containerEl;
    };
    PointerDragging.prototype.shouldIgnoreMouse = function () {
        return ignoreMouseDepth || this.isTouchDragging;
    };
    // can be called by user of this class, to cancel touch-based scrolling for the current drag
    PointerDragging.prototype.cancelTouchScroll = function () {
        if (this.isDragging) {
            isWindowTouchMoveCancelled = true;
        }
    };
    // Scrolling that simulates pointermoves
    // ----------------------------------------------------------------------------------------------------
    PointerDragging.prototype.initScrollWatch = function (ev) {
        if (this.shouldWatchScroll) {
            this.recordCoords(ev);
            window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
        }
    };
    PointerDragging.prototype.recordCoords = function (ev) {
        if (this.shouldWatchScroll) {
            this.prevPageX = ev.pageX;
            this.prevPageY = ev.pageY;
            this.prevScrollX = window.pageXOffset;
            this.prevScrollY = window.pageYOffset;
        }
    };
    PointerDragging.prototype.destroyScrollWatch = function () {
        if (this.shouldWatchScroll) {
            window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
        }
    };
    // Event Normalization
    // ----------------------------------------------------------------------------------------------------
    PointerDragging.prototype.createEventFromMouse = function (ev, isFirst) {
        var deltaX = 0;
        var deltaY = 0;
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = ev.pageX;
            this.origPageY = ev.pageY;
        }
        else {
            deltaX = ev.pageX - this.origPageX;
            deltaY = ev.pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: false,
            subjectEl: this.subjectEl,
            pageX: ev.pageX,
            pageY: ev.pageY,
            deltaX: deltaX,
            deltaY: deltaY,
        };
    };
    PointerDragging.prototype.createEventFromTouch = function (ev, isFirst) {
        var touches = ev.touches;
        var pageX;
        var pageY;
        var deltaX = 0;
        var deltaY = 0;
        // if touch coords available, prefer,
        // because FF would give bad ev.pageX ev.pageY
        if (touches && touches.length) {
            pageX = touches[0].pageX;
            pageY = touches[0].pageY;
        }
        else {
            pageX = ev.pageX;
            pageY = ev.pageY;
        }
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = pageX;
            this.origPageY = pageY;
        }
        else {
            deltaX = pageX - this.origPageX;
            deltaY = pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: true,
            subjectEl: this.subjectEl,
            pageX: pageX,
            pageY: pageY,
            deltaX: deltaX,
            deltaY: deltaY,
        };
    };
    return PointerDragging;
}());
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
    return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
    ignoreMouseDepth += 1;
    setTimeout(function () {
        ignoreMouseDepth -= 1;
    }, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
    listenerCnt += 1;
    if (listenerCnt === 1) {
        window.addEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function listenerDestroyed() {
    listenerCnt -= 1;
    if (!listenerCnt) {
        window.removeEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function onWindowTouchMove(ev) {
    if (isWindowTouchMoveCancelled) {
        ev.preventDefault();
    }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
var ElementMirror = /** @class */ (function () {
    function ElementMirror() {
        this.isVisible = false; // must be explicitly enabled
        this.sourceEl = null;
        this.mirrorEl = null;
        this.sourceElRect = null; // screen coords relative to viewport
        // options that can be set directly by caller
        this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
        this.zIndex = 9999;
        this.revertDuration = 0;
    }
    ElementMirror.prototype.start = function (sourceEl, pageX, pageY) {
        this.sourceEl = sourceEl;
        this.sourceElRect = this.sourceEl.getBoundingClientRect();
        this.origScreenX = pageX - window.pageXOffset;
        this.origScreenY = pageY - window.pageYOffset;
        this.deltaX = 0;
        this.deltaY = 0;
        this.updateElPosition();
    };
    ElementMirror.prototype.handleMove = function (pageX, pageY) {
        this.deltaX = (pageX - window.pageXOffset) - this.origScreenX;
        this.deltaY = (pageY - window.pageYOffset) - this.origScreenY;
        this.updateElPosition();
    };
    // can be called before start
    ElementMirror.prototype.setIsVisible = function (bool) {
        if (bool) {
            if (!this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = '';
                }
                this.isVisible = bool; // needs to happen before updateElPosition
                this.updateElPosition(); // because was not updating the position while invisible
            }
        }
        else if (this.isVisible) {
            if (this.mirrorEl) {
                this.mirrorEl.style.display = 'none';
            }
            this.isVisible = bool;
        }
    };
    // always async
    ElementMirror.prototype.stop = function (needsRevertAnimation, callback) {
        var _this = this;
        var done = function () {
            _this.cleanup();
            callback();
        };
        if (needsRevertAnimation &&
            this.mirrorEl &&
            this.isVisible &&
            this.revertDuration && // if 0, transition won't work
            (this.deltaX || this.deltaY) // if same coords, transition won't work
        ) {
            this.doRevertAnimation(done, this.revertDuration);
        }
        else {
            setTimeout(done, 0);
        }
    };
    ElementMirror.prototype.doRevertAnimation = function (callback, revertDuration) {
        var mirrorEl = this.mirrorEl;
        var finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
        mirrorEl.style.transition =
            'top ' + revertDuration + 'ms,' +
                'left ' + revertDuration + 'ms';
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(mirrorEl, {
            left: finalSourceElRect.left,
            top: finalSourceElRect.top,
        });
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.whenTransitionDone)(mirrorEl, function () {
            mirrorEl.style.transition = '';
            callback();
        });
    };
    ElementMirror.prototype.cleanup = function () {
        if (this.mirrorEl) {
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.removeElement)(this.mirrorEl);
            this.mirrorEl = null;
        }
        this.sourceEl = null;
    };
    ElementMirror.prototype.updateElPosition = function () {
        if (this.sourceEl && this.isVisible) {
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY,
            });
        }
    };
    ElementMirror.prototype.getMirrorEl = function () {
        var sourceElRect = this.sourceElRect;
        var mirrorEl = this.mirrorEl;
        if (!mirrorEl) {
            mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
            // we don't want long taps or any mouse interaction causing selection/menus.
            // would use preventSelection(), but that prevents selectstart, causing problems.
            mirrorEl.classList.add('fc-unselectable');
            mirrorEl.classList.add('fc-event-dragging');
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(mirrorEl, {
                position: 'fixed',
                zIndex: this.zIndex,
                visibility: '',
                boxSizing: 'border-box',
                width: sourceElRect.right - sourceElRect.left,
                height: sourceElRect.bottom - sourceElRect.top,
                right: 'auto',
                bottom: 'auto',
                margin: 0,
            });
            this.parentNode.appendChild(mirrorEl);
        }
        return mirrorEl;
    };
    return ElementMirror;
}());

/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
var ScrollGeomCache = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ScrollGeomCache, _super);
    function ScrollGeomCache(scrollController, doesListening) {
        var _this = _super.call(this) || this;
        _this.handleScroll = function () {
            _this.scrollTop = _this.scrollController.getScrollTop();
            _this.scrollLeft = _this.scrollController.getScrollLeft();
            _this.handleScrollChange();
        };
        _this.scrollController = scrollController;
        _this.doesListening = doesListening;
        _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
        _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
        _this.scrollWidth = scrollController.getScrollWidth();
        _this.scrollHeight = scrollController.getScrollHeight();
        _this.clientWidth = scrollController.getClientWidth();
        _this.clientHeight = scrollController.getClientHeight();
        _this.clientRect = _this.computeClientRect(); // do last in case it needs cached values
        if (_this.doesListening) {
            _this.getEventTarget().addEventListener('scroll', _this.handleScroll);
        }
        return _this;
    }
    ScrollGeomCache.prototype.destroy = function () {
        if (this.doesListening) {
            this.getEventTarget().removeEventListener('scroll', this.handleScroll);
        }
    };
    ScrollGeomCache.prototype.getScrollTop = function () {
        return this.scrollTop;
    };
    ScrollGeomCache.prototype.getScrollLeft = function () {
        return this.scrollLeft;
    };
    ScrollGeomCache.prototype.setScrollTop = function (top) {
        this.scrollController.setScrollTop(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
            this.handleScrollChange();
        }
    };
    ScrollGeomCache.prototype.setScrollLeft = function (top) {
        this.scrollController.setScrollLeft(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
            this.handleScrollChange();
        }
    };
    ScrollGeomCache.prototype.getClientWidth = function () {
        return this.clientWidth;
    };
    ScrollGeomCache.prototype.getClientHeight = function () {
        return this.clientHeight;
    };
    ScrollGeomCache.prototype.getScrollWidth = function () {
        return this.scrollWidth;
    };
    ScrollGeomCache.prototype.getScrollHeight = function () {
        return this.scrollHeight;
    };
    ScrollGeomCache.prototype.handleScrollChange = function () {
    };
    return ScrollGeomCache;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ScrollController));

var ElementScrollGeomCache = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ElementScrollGeomCache, _super);
    function ElementScrollGeomCache(el, doesListening) {
        return _super.call(this, new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementScrollController(el), doesListening) || this;
    }
    ElementScrollGeomCache.prototype.getEventTarget = function () {
        return this.scrollController.el;
    };
    ElementScrollGeomCache.prototype.computeClientRect = function () {
        return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeInnerRect)(this.scrollController.el);
    };
    return ElementScrollGeomCache;
}(ScrollGeomCache));

var WindowScrollGeomCache = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(WindowScrollGeomCache, _super);
    function WindowScrollGeomCache(doesListening) {
        return _super.call(this, new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.WindowScrollController(), doesListening) || this;
    }
    WindowScrollGeomCache.prototype.getEventTarget = function () {
        return window;
    };
    WindowScrollGeomCache.prototype.computeClientRect = function () {
        return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight,
        };
    };
    // the window is the only scroll object that changes it's rectangle relative
    // to the document's topleft as it scrolls
    WindowScrollGeomCache.prototype.handleScrollChange = function () {
        this.clientRect = this.computeClientRect();
    };
    return WindowScrollGeomCache;
}(ScrollGeomCache));

// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
var getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
var AutoScroller = /** @class */ (function () {
    function AutoScroller() {
        var _this = this;
        // options that can be set by caller
        this.isEnabled = true;
        this.scrollQuery = [window, '.fc-scroller'];
        this.edgeThreshold = 50; // pixels
        this.maxVelocity = 300; // pixels per second
        // internal state
        this.pointerScreenX = null;
        this.pointerScreenY = null;
        this.isAnimating = false;
        this.scrollCaches = null;
        // protect against the initial pointerdown being too close to an edge and starting the scroll
        this.everMovedUp = false;
        this.everMovedDown = false;
        this.everMovedLeft = false;
        this.everMovedRight = false;
        this.animate = function () {
            if (_this.isAnimating) { // wasn't cancelled between animation calls
                var edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);
                if (edge) {
                    var now = getTime();
                    _this.handleSide(edge, (now - _this.msSinceRequest) / 1000);
                    _this.requestAnimation(now);
                }
                else {
                    _this.isAnimating = false; // will stop animation
                }
            }
        };
    }
    AutoScroller.prototype.start = function (pageX, pageY, scrollStartEl) {
        if (this.isEnabled) {
            this.scrollCaches = this.buildCaches(scrollStartEl);
            this.pointerScreenX = null;
            this.pointerScreenY = null;
            this.everMovedUp = false;
            this.everMovedDown = false;
            this.everMovedLeft = false;
            this.everMovedRight = false;
            this.handleMove(pageX, pageY);
        }
    };
    AutoScroller.prototype.handleMove = function (pageX, pageY) {
        if (this.isEnabled) {
            var pointerScreenX = pageX - window.pageXOffset;
            var pointerScreenY = pageY - window.pageYOffset;
            var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
            var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
            if (yDelta < 0) {
                this.everMovedUp = true;
            }
            else if (yDelta > 0) {
                this.everMovedDown = true;
            }
            if (xDelta < 0) {
                this.everMovedLeft = true;
            }
            else if (xDelta > 0) {
                this.everMovedRight = true;
            }
            this.pointerScreenX = pointerScreenX;
            this.pointerScreenY = pointerScreenY;
            if (!this.isAnimating) {
                this.isAnimating = true;
                this.requestAnimation(getTime());
            }
        }
    };
    AutoScroller.prototype.stop = function () {
        if (this.isEnabled) {
            this.isAnimating = false; // will stop animation
            for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                var scrollCache = _a[_i];
                scrollCache.destroy();
            }
            this.scrollCaches = null;
        }
    };
    AutoScroller.prototype.requestAnimation = function (now) {
        this.msSinceRequest = now;
        requestAnimationFrame(this.animate);
    };
    AutoScroller.prototype.handleSide = function (edge, seconds) {
        var scrollCache = edge.scrollCache;
        var edgeThreshold = this.edgeThreshold;
        var invDistance = edgeThreshold - edge.distance;
        var velocity = // the closer to the edge, the faster we scroll
         ((invDistance * invDistance) / (edgeThreshold * edgeThreshold)) * // quadratic
            this.maxVelocity * seconds;
        var sign = 1;
        switch (edge.name) {
            case 'left':
                sign = -1;
            // falls through
            case 'right':
                scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
                break;
            case 'top':
                sign = -1;
            // falls through
            case 'bottom':
                scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
                break;
        }
    };
    // left/top are relative to document topleft
    AutoScroller.prototype.computeBestEdge = function (left, top) {
        var edgeThreshold = this.edgeThreshold;
        var bestSide = null;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            var rect = scrollCache.clientRect;
            var leftDist = left - rect.left;
            var rightDist = rect.right - left;
            var topDist = top - rect.top;
            var bottomDist = rect.bottom - top;
            // completely within the rect?
            if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
                if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() &&
                    (!bestSide || bestSide.distance > topDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'top', distance: topDist };
                }
                if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() &&
                    (!bestSide || bestSide.distance > bottomDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'bottom', distance: bottomDist };
                }
                if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() &&
                    (!bestSide || bestSide.distance > leftDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'left', distance: leftDist };
                }
                if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() &&
                    (!bestSide || bestSide.distance > rightDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'right', distance: rightDist };
                }
            }
        }
        return bestSide;
    };
    AutoScroller.prototype.buildCaches = function (scrollStartEl) {
        return this.queryScrollEls(scrollStartEl).map(function (el) {
            if (el === window) {
                return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
            }
            return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
        });
    };
    AutoScroller.prototype.queryScrollEls = function (scrollStartEl) {
        var els = [];
        for (var _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
            var query = _a[_i];
            if (typeof query === 'object') {
                els.push(query);
            }
            else {
                els.push.apply(els, Array.prototype.slice.call((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElRoot)(scrollStartEl).querySelectorAll(query)));
            }
        }
        return els;
    };
    return AutoScroller;
}());

/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
var FeaturefulElementDragging = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(FeaturefulElementDragging, _super);
    function FeaturefulElementDragging(containerEl, selector) {
        var _this = _super.call(this, containerEl) || this;
        _this.containerEl = containerEl;
        // options that can be directly set by caller
        // the caller can also set the PointerDragging's options as well
        _this.delay = null;
        _this.minDistance = 0;
        _this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
        _this.mirrorNeedsRevert = false;
        _this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
        _this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
        _this.isDelayEnded = false;
        _this.isDistanceSurpassed = false;
        _this.delayTimeoutId = null;
        _this.onPointerDown = function (ev) {
            if (!_this.isDragging) { // so new drag doesn't happen while revert animation is going
                _this.isInteracting = true;
                _this.isDelayEnded = false;
                _this.isDistanceSurpassed = false;
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.preventSelection)(document.body);
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.preventContextMenu)(document.body);
                // prevent links from being visited if there's an eventual drag.
                // also prevents selection in older browsers (maybe?).
                // not necessary for touch, besides, browser would complain about passiveness.
                if (!ev.isTouch) {
                    ev.origEvent.preventDefault();
                }
                _this.emitter.trigger('pointerdown', ev);
                if (_this.isInteracting && // not destroyed via pointerdown handler
                    !_this.pointer.shouldIgnoreMove) {
                    // actions related to initiating dragstart+dragmove+dragend...
                    _this.mirror.setIsVisible(false); // reset. caller must set-visible
                    _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
                    _this.startDelay(ev);
                    if (!_this.minDistance) {
                        _this.handleDistanceSurpassed(ev);
                    }
                }
            }
        };
        _this.onPointerMove = function (ev) {
            if (_this.isInteracting) {
                _this.emitter.trigger('pointermove', ev);
                if (!_this.isDistanceSurpassed) {
                    var minDistance = _this.minDistance;
                    var distanceSq = void 0; // current distance from the origin, squared
                    var deltaX = ev.deltaX, deltaY = ev.deltaY;
                    distanceSq = deltaX * deltaX + deltaY * deltaY;
                    if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
                        _this.handleDistanceSurpassed(ev);
                    }
                }
                if (_this.isDragging) {
                    // a real pointer move? (not one simulated by scrolling)
                    if (ev.origEvent.type !== 'scroll') {
                        _this.mirror.handleMove(ev.pageX, ev.pageY);
                        _this.autoScroller.handleMove(ev.pageX, ev.pageY);
                    }
                    _this.emitter.trigger('dragmove', ev);
                }
            }
        };
        _this.onPointerUp = function (ev) {
            if (_this.isInteracting) {
                _this.isInteracting = false;
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.allowSelection)(document.body);
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.allowContextMenu)(document.body);
                _this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
                if (_this.isDragging) {
                    _this.autoScroller.stop();
                    _this.tryStopDrag(ev); // which will stop the mirror
                }
                if (_this.delayTimeoutId) {
                    clearTimeout(_this.delayTimeoutId);
                    _this.delayTimeoutId = null;
                }
            }
        };
        var pointer = _this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', _this.onPointerDown);
        pointer.emitter.on('pointermove', _this.onPointerMove);
        pointer.emitter.on('pointerup', _this.onPointerUp);
        if (selector) {
            pointer.selector = selector;
        }
        _this.mirror = new ElementMirror();
        _this.autoScroller = new AutoScroller();
        return _this;
    }
    FeaturefulElementDragging.prototype.destroy = function () {
        this.pointer.destroy();
        // HACK: simulate a pointer-up to end the current drag
        // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
        this.onPointerUp({});
    };
    FeaturefulElementDragging.prototype.startDelay = function (ev) {
        var _this = this;
        if (typeof this.delay === 'number') {
            this.delayTimeoutId = setTimeout(function () {
                _this.delayTimeoutId = null;
                _this.handleDelayEnd(ev);
            }, this.delay); // not assignable to number!
        }
        else {
            this.handleDelayEnd(ev);
        }
    };
    FeaturefulElementDragging.prototype.handleDelayEnd = function (ev) {
        this.isDelayEnded = true;
        this.tryStartDrag(ev);
    };
    FeaturefulElementDragging.prototype.handleDistanceSurpassed = function (ev) {
        this.isDistanceSurpassed = true;
        this.tryStartDrag(ev);
    };
    FeaturefulElementDragging.prototype.tryStartDrag = function (ev) {
        if (this.isDelayEnded && this.isDistanceSurpassed) {
            if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
                this.isDragging = true;
                this.mirrorNeedsRevert = false;
                this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
                this.emitter.trigger('dragstart', ev);
                if (this.touchScrollAllowed === false) {
                    this.pointer.cancelTouchScroll();
                }
            }
        }
    };
    FeaturefulElementDragging.prototype.tryStopDrag = function (ev) {
        // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
        // that come from the document to fire beforehand. much more convenient this way.
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
    };
    FeaturefulElementDragging.prototype.stopDrag = function (ev) {
        this.isDragging = false;
        this.emitter.trigger('dragend', ev);
    };
    // fill in the implementations...
    FeaturefulElementDragging.prototype.setIgnoreMove = function (bool) {
        this.pointer.shouldIgnoreMove = bool;
    };
    FeaturefulElementDragging.prototype.setMirrorIsVisible = function (bool) {
        this.mirror.setIsVisible(bool);
    };
    FeaturefulElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
        this.mirrorNeedsRevert = bool;
    };
    FeaturefulElementDragging.prototype.setAutoScrollEnabled = function (bool) {
        this.autoScroller.isEnabled = bool;
    };
    return FeaturefulElementDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementDragging));

/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
var OffsetTracker = /** @class */ (function () {
    function OffsetTracker(el) {
        this.origRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeRect)(el);
        // will work fine for divs that have overflow:hidden
        this.scrollCaches = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getClippingParents)(el).map(function (scrollEl) { return new ElementScrollGeomCache(scrollEl, true); });
    }
    OffsetTracker.prototype.destroy = function () {
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            scrollCache.destroy();
        }
    };
    OffsetTracker.prototype.computeLeft = function () {
        var left = this.origRect.left;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
        }
        return left;
    };
    OffsetTracker.prototype.computeTop = function () {
        var top = this.origRect.top;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            top += scrollCache.origScrollTop - scrollCache.getScrollTop();
        }
        return top;
    };
    OffsetTracker.prototype.isWithinClipping = function (pageX, pageY) {
        var point = { left: pageX, top: pageY };
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            if (!isIgnoredClipping(scrollCache.getEventTarget()) &&
                !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.pointInsideRect)(point, scrollCache.clientRect)) {
                return false;
            }
        }
        return true;
    };
    return OffsetTracker;
}());
// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
    var tagName = node.tagName;
    return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
var HitDragging = /** @class */ (function () {
    function HitDragging(dragging, droppableStore) {
        var _this = this;
        // options that can be set by caller
        this.useSubjectCenter = false;
        this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
        this.initialHit = null;
        this.movingHit = null;
        this.finalHit = null; // won't ever be populated if shouldIgnoreMove
        this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            _this.initialHit = null;
            _this.movingHit = null;
            _this.finalHit = null;
            _this.prepareHits();
            _this.processFirstCoord(ev);
            if (_this.initialHit || !_this.requireInitial) {
                dragging.setIgnoreMove(false);
                // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
                _this.emitter.trigger('pointerdown', ev);
            }
            else {
                dragging.setIgnoreMove(true);
            }
        };
        this.handleDragStart = function (ev) {
            _this.emitter.trigger('dragstart', ev);
            _this.handleMove(ev, true); // force = fire even if initially null
        };
        this.handleDragMove = function (ev) {
            _this.emitter.trigger('dragmove', ev);
            _this.handleMove(ev);
        };
        this.handlePointerUp = function (ev) {
            _this.releaseHits();
            _this.emitter.trigger('pointerup', ev);
        };
        this.handleDragEnd = function (ev) {
            if (_this.movingHit) {
                _this.emitter.trigger('hitupdate', null, true, ev);
            }
            _this.finalHit = _this.movingHit;
            _this.movingHit = null;
            _this.emitter.trigger('dragend', ev);
        };
        this.droppableStore = droppableStore;
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        dragging.emitter.on('dragmove', this.handleDragMove);
        dragging.emitter.on('pointerup', this.handlePointerUp);
        dragging.emitter.on('dragend', this.handleDragEnd);
        this.dragging = dragging;
        this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Emitter();
    }
    // sets initialHit
    // sets coordAdjust
    HitDragging.prototype.processFirstCoord = function (ev) {
        var origPoint = { left: ev.pageX, top: ev.pageY };
        var adjustedPoint = origPoint;
        var subjectEl = ev.subjectEl;
        var subjectRect;
        if (subjectEl instanceof HTMLElement) { // i.e. not a Document/ShadowRoot
            subjectRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeRect)(subjectEl);
            adjustedPoint = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.constrainPoint)(adjustedPoint, subjectRect);
        }
        var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
        if (initialHit) {
            if (this.useSubjectCenter && subjectRect) {
                var slicedSubjectRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.intersectRects)(subjectRect, initialHit.rect);
                if (slicedSubjectRect) {
                    adjustedPoint = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRectCenter)(slicedSubjectRect);
                }
            }
            this.coordAdjust = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffPoints)(adjustedPoint, origPoint);
        }
        else {
            this.coordAdjust = { left: 0, top: 0 };
        }
    };
    HitDragging.prototype.handleMove = function (ev, forceHandle) {
        var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
        if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
            this.movingHit = hit;
            this.emitter.trigger('hitupdate', hit, false, ev);
        }
    };
    HitDragging.prototype.prepareHits = function () {
        this.offsetTrackers = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.mapHash)(this.droppableStore, function (interactionSettings) {
            interactionSettings.component.prepareHits();
            return new OffsetTracker(interactionSettings.el);
        });
    };
    HitDragging.prototype.releaseHits = function () {
        var offsetTrackers = this.offsetTrackers;
        for (var id in offsetTrackers) {
            offsetTrackers[id].destroy();
        }
        this.offsetTrackers = {};
    };
    HitDragging.prototype.queryHitForOffset = function (offsetLeft, offsetTop) {
        var _a = this, droppableStore = _a.droppableStore, offsetTrackers = _a.offsetTrackers;
        var bestHit = null;
        for (var id in droppableStore) {
            var component = droppableStore[id].component;
            var offsetTracker = offsetTrackers[id];
            if (offsetTracker && // wasn't destroyed mid-drag
                offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
                var originLeft = offsetTracker.computeLeft();
                var originTop = offsetTracker.computeTop();
                var positionLeft = offsetLeft - originLeft;
                var positionTop = offsetTop - originTop;
                var origRect = offsetTracker.origRect;
                var width = origRect.right - origRect.left;
                var height = origRect.bottom - origRect.top;
                if (
                // must be within the element's bounds
                positionLeft >= 0 && positionLeft < width &&
                    positionTop >= 0 && positionTop < height) {
                    var hit = component.queryHit(positionLeft, positionTop, width, height);
                    if (hit && (
                    // make sure the hit is within activeRange, meaning it's not a dead cell
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.rangeContainsRange)(hit.dateProfile.activeRange, hit.dateSpan.range)) &&
                        (!bestHit || hit.layer > bestHit.layer)) {
                        hit.componentId = id;
                        hit.context = component.context;
                        // TODO: better way to re-orient rectangle
                        hit.rect.left += originLeft;
                        hit.rect.right += originLeft;
                        hit.rect.top += originTop;
                        hit.rect.bottom += originTop;
                        bestHit = hit;
                    }
                }
            }
        }
        return bestHit;
    };
    return HitDragging;
}());
function isHitsEqual(hit0, hit1) {
    if (!hit0 && !hit1) {
        return true;
    }
    if (Boolean(hit0) !== Boolean(hit1)) {
        return false;
    }
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isDateSpansEqual)(hit0.dateSpan, hit1.dateSpan);
}

function buildDatePointApiWithContext(dateSpan, context) {
    var props = {};
    for (var _i = 0, _a = context.pluginHooks.datePointTransforms; _i < _a.length; _i++) {
        var transform = _a[_i];
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, transform(dateSpan, context));
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, buildDatePointApi(dateSpan, context.dateEnv));
    return props;
}
function buildDatePointApi(span, dateEnv) {
    return {
        date: dateEnv.toDate(span.range.start),
        dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
        allDay: span.allDay,
    };
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
var DateClicking = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DateClicking, _super);
    function DateClicking(settings) {
        var _this = _super.call(this, settings) || this;
        _this.handlePointerDown = function (pev) {
            var dragging = _this.dragging;
            var downEl = pev.origEvent.target;
            // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
            dragging.setIgnoreMove(!_this.component.isValidDateDownEl(downEl));
        };
        // won't even fire if moving was ignored
        _this.handleDragEnd = function (ev) {
            var component = _this.component;
            var pointer = _this.dragging.pointer;
            if (!pointer.wasTouchScroll) {
                var _a = _this.hitDragging, initialHit = _a.initialHit, finalHit = _a.finalHit;
                if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                    var context = component.context;
                    var arg = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
                    context.emitter.trigger('dateClick', arg);
                }
            }
        };
        // we DO want to watch pointer moves because otherwise finalHit won't get populated
        _this.dragging = new FeaturefulElementDragging(settings.el);
        _this.dragging.autoScroller.isEnabled = false;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    DateClicking.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return DateClicking;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction));

/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
var DateSelecting = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DateSelecting, _super);
    function DateSelecting(settings) {
        var _this = _super.call(this, settings) || this;
        _this.dragSelection = null;
        _this.handlePointerDown = function (ev) {
            var _a = _this, component = _a.component, dragging = _a.dragging;
            var options = component.context.options;
            var canSelect = options.selectable &&
                component.isValidDateDownEl(ev.origEvent.target);
            // don't bother to watch expensive moves if component won't do selection
            dragging.setIgnoreMove(!canSelect);
            // if touch, require user to hold down
            dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
        };
        _this.handleDragStart = function (ev) {
            _this.component.context.calendarApi.unselect(ev); // unselect previous selections
        };
        _this.handleHitUpdate = function (hit, isFinal) {
            var context = _this.component.context;
            var dragSelection = null;
            var isInvalid = false;
            if (hit) {
                var initialHit = _this.hitDragging.initialHit;
                var disallowed = hit.componentId === initialHit.componentId
                    && _this.isHitComboAllowed
                    && !_this.isHitComboAllowed(initialHit, hit);
                if (!disallowed) {
                    dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
                }
                if (!dragSelection || !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isDateSelectionValid)(dragSelection, hit.dateProfile, context)) {
                    isInvalid = true;
                    dragSelection = null;
                }
            }
            if (dragSelection) {
                context.dispatch({ type: 'SELECT_DATES', selection: dragSelection });
            }
            else if (!isFinal) { // only unselect if moved away while dragging
                context.dispatch({ type: 'UNSELECT_DATES' });
            }
            if (!isInvalid) {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
            }
            else {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
            }
            if (!isFinal) {
                _this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
            }
        };
        _this.handlePointerUp = function (pev) {
            if (_this.dragSelection) {
                // selection is already rendered, so just need to report selection
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.triggerDateSelect)(_this.dragSelection, pev, _this.component.context);
                _this.dragSelection = null;
            }
        };
        var component = settings.component;
        var options = component.context.options;
        var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
        dragging.touchScrollAllowed = false;
        dragging.minDistance = options.selectMinDistance || 0;
        dragging.autoScroller.isEnabled = options.dragScroll;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', _this.handlePointerUp);
        return _this;
    }
    DateSelecting.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return DateSelecting;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction));
function getComponentTouchDelay$1(component) {
    var options = component.context.options;
    var delay = options.selectLongPressDelay;
    if (delay == null) {
        delay = options.longPressDelay;
    }
    return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
    var dateSpan0 = hit0.dateSpan;
    var dateSpan1 = hit1.dateSpan;
    var ms = [
        dateSpan0.range.start,
        dateSpan0.range.end,
        dateSpan1.range.start,
        dateSpan1.range.end,
    ];
    ms.sort(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.compareNumbers);
    var props = {};
    for (var _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
        var transformer = dateSelectionTransformers_1[_i];
        var res = transformer(hit0, hit1);
        if (res === false) {
            return null;
        }
        if (res) {
            (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, res);
        }
    }
    props.range = { start: ms[0], end: ms[3] };
    props.allDay = dateSpan0.allDay;
    return props;
}

var EventDragging = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EventDragging, _super);
    function EventDragging(settings) {
        var _this = _super.call(this, settings) || this;
        // internal state
        _this.subjectEl = null;
        _this.subjectSeg = null; // the seg being selected/dragged
        _this.isDragging = false;
        _this.eventRange = null;
        _this.relevantEvents = null; // the events being dragged
        _this.receivingContext = null;
        _this.validMutation = null;
        _this.mutatedRelevantEvents = null;
        _this.handlePointerDown = function (ev) {
            var origTarget = ev.origEvent.target;
            var _a = _this, component = _a.component, dragging = _a.dragging;
            var mirror = dragging.mirror;
            var options = component.context.options;
            var initialContext = component.context;
            _this.subjectEl = ev.subjectEl;
            var subjectSeg = _this.subjectSeg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(ev.subjectEl);
            var eventRange = _this.eventRange = subjectSeg.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;
            _this.relevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRelevantEvents)(initialContext.getCurrentData().eventStore, eventInstanceId);
            dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
            dragging.delay =
                // only do a touch delay if touch and this event hasn't been selected yet
                (ev.isTouch && eventInstanceId !== component.props.eventSelection) ?
                    getComponentTouchDelay(component) :
                    null;
            if (options.fixedMirrorParent) {
                mirror.parentNode = options.fixedMirrorParent;
            }
            else {
                mirror.parentNode = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(origTarget, '.fc');
            }
            mirror.revertDuration = options.dragRevertDuration;
            var isValid = component.isValidSegDownEl(origTarget) &&
                !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(origTarget, '.fc-event-resizer'); // NOT on a resizer
            dragging.setIgnoreMove(!isValid);
            // disable dragging for elements that are resizable (ie, selectable)
            // but are not draggable
            _this.isDragging = isValid &&
                ev.subjectEl.classList.contains('fc-event-draggable');
        };
        _this.handleDragStart = function (ev) {
            var initialContext = _this.component.context;
            var eventRange = _this.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;
            if (ev.isTouch) {
                // need to select a different event?
                if (eventInstanceId !== _this.component.props.eventSelection) {
                    initialContext.dispatch({ type: 'SELECT_EVENT', eventInstanceId: eventInstanceId });
                }
            }
            else {
                // if now using mouse, but was previous touch interaction, clear selected event
                initialContext.dispatch({ type: 'UNSELECT_EVENT' });
            }
            if (_this.isDragging) {
                initialContext.calendarApi.unselect(ev); // unselect *date* selection
                initialContext.emitter.trigger('eventDragStart', {
                    el: _this.subjectEl,
                    event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext, eventRange.def, eventRange.instance),
                    jsEvent: ev.origEvent,
                    view: initialContext.viewApi,
                });
            }
        };
        _this.handleHitUpdate = function (hit, isFinal) {
            if (!_this.isDragging) {
                return;
            }
            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var initialContext = _this.component.context;
            // states based on new hit
            var receivingContext = null;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
                isEvent: true,
            };
            if (hit) {
                receivingContext = hit.context;
                var receivingOptions = receivingContext.options;
                if (initialContext === receivingContext ||
                    (receivingOptions.editable && receivingOptions.droppable)) {
                    mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
                    if (mutation) {
                        mutatedRelevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyMutationToEventStore)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
                        interaction.mutatedEvents = mutatedRelevantEvents;
                        if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, receivingContext)) {
                            isInvalid = true;
                            mutation = null;
                            mutatedRelevantEvents = null;
                            interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)();
                        }
                    }
                }
                else {
                    receivingContext = null;
                }
            }
            _this.displayDrag(receivingContext, interaction);
            if (!isInvalid) {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
            }
            else {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
            }
            if (!isFinal) {
                if (initialContext === receivingContext && // TODO: write test for this
                    isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                _this.dragging.setMirrorNeedsRevert(!mutation);
                // render the mirror if no already-rendered mirror
                // TODO: wish we could somehow wait for dispatch to guarantee render
                _this.dragging.setMirrorIsVisible(!hit || !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElRoot)(_this.subjectEl).querySelector('.fc-event-mirror'));
                // assign states based on new hit
                _this.receivingContext = receivingContext;
                _this.validMutation = mutation;
                _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        _this.handlePointerUp = function () {
            if (!_this.isDragging) {
                _this.cleanup(); // because handleDragEnd won't fire
            }
        };
        _this.handleDragEnd = function (ev) {
            if (_this.isDragging) {
                var initialContext_1 = _this.component.context;
                var initialView = initialContext_1.viewApi;
                var _a = _this, receivingContext_1 = _a.receivingContext, validMutation = _a.validMutation;
                var eventDef = _this.eventRange.def;
                var eventInstance = _this.eventRange.instance;
                var eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext_1, eventDef, eventInstance);
                var relevantEvents_1 = _this.relevantEvents;
                var mutatedRelevantEvents_1 = _this.mutatedRelevantEvents;
                var finalHit = _this.hitDragging.finalHit;
                _this.clearDrag(); // must happen after revert animation
                initialContext_1.emitter.trigger('eventDragStop', {
                    el: _this.subjectEl,
                    event: eventApi,
                    jsEvent: ev.origEvent,
                    view: initialView,
                });
                if (validMutation) {
                    // dropped within same calendar
                    if (receivingContext_1 === initialContext_1) {
                        var updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext_1, mutatedRelevantEvents_1.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents_1.instances[eventInstance.instanceId] : null);
                        initialContext_1.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: mutatedRelevantEvents_1,
                        });
                        var eventChangeArg = {
                            oldEvent: eventApi,
                            event: updatedEventApi,
                            relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents_1, initialContext_1, eventInstance),
                            revert: function () {
                                initialContext_1.dispatch({
                                    type: 'MERGE_EVENTS',
                                    eventStore: relevantEvents_1, // the pre-change data
                                });
                            },
                        };
                        var transformed = {};
                        for (var _i = 0, _b = initialContext_1.getCurrentData().pluginHooks.eventDropTransformers; _i < _b.length; _i++) {
                            var transformer = _b[_i];
                            (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(transformed, transformer(validMutation, initialContext_1));
                        }
                        initialContext_1.emitter.trigger('eventDrop', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
                        initialContext_1.emitter.trigger('eventChange', eventChangeArg);
                        // dropped in different calendar
                    }
                    else if (receivingContext_1) {
                        var eventRemoveArg = {
                            event: eventApi,
                            relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(relevantEvents_1, initialContext_1, eventInstance),
                            revert: function () {
                                initialContext_1.dispatch({
                                    type: 'MERGE_EVENTS',
                                    eventStore: relevantEvents_1,
                                });
                            },
                        };
                        initialContext_1.emitter.trigger('eventLeave', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
                        initialContext_1.dispatch({
                            type: 'REMOVE_EVENTS',
                            eventStore: relevantEvents_1,
                        });
                        initialContext_1.emitter.trigger('eventRemove', eventRemoveArg);
                        var addedEventDef = mutatedRelevantEvents_1.defs[eventDef.defId];
                        var addedEventInstance = mutatedRelevantEvents_1.instances[eventInstance.instanceId];
                        var addedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(receivingContext_1, addedEventDef, addedEventInstance);
                        receivingContext_1.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: mutatedRelevantEvents_1,
                        });
                        var eventAddArg = {
                            event: addedEventApi,
                            relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents_1, receivingContext_1, addedEventInstance),
                            revert: function () {
                                receivingContext_1.dispatch({
                                    type: 'REMOVE_EVENTS',
                                    eventStore: mutatedRelevantEvents_1,
                                });
                            },
                        };
                        receivingContext_1.emitter.trigger('eventAdd', eventAddArg);
                        if (ev.isTouch) {
                            receivingContext_1.dispatch({
                                type: 'SELECT_EVENT',
                                eventInstanceId: eventInstance.instanceId,
                            });
                        }
                        receivingContext_1.emitter.trigger('drop', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext_1)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
                        receivingContext_1.emitter.trigger('eventReceive', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
                    }
                }
                else {
                    initialContext_1.emitter.trigger('_noEventDrop');
                }
            }
            _this.cleanup();
        };
        var component = _this.component;
        var options = component.context.options;
        var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
        dragging.pointer.selector = EventDragging.SELECTOR;
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = options.dragScroll;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsStore);
        hitDragging.useSubjectCenter = settings.useEventCenter;
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', _this.handlePointerUp);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    EventDragging.prototype.destroy = function () {
        this.dragging.destroy();
    };
    // render a drag state on the next receivingCalendar
    EventDragging.prototype.displayDrag = function (nextContext, state) {
        var initialContext = this.component.context;
        var prevContext = this.receivingContext;
        // does the previous calendar need to be cleared?
        if (prevContext && prevContext !== nextContext) {
            // does the initial calendar need to be cleared?
            // if so, don't clear all the way. we still need to to hide the affectedEvents
            if (prevContext === initialContext) {
                prevContext.dispatch({
                    type: 'SET_EVENT_DRAG',
                    state: {
                        affectedEvents: state.affectedEvents,
                        mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
                        isEvent: true,
                    },
                });
                // completely clear the old calendar if it wasn't the initial
            }
            else {
                prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        }
        if (nextContext) {
            nextContext.dispatch({ type: 'SET_EVENT_DRAG', state: state });
        }
    };
    EventDragging.prototype.clearDrag = function () {
        var initialCalendar = this.component.context;
        var receivingContext = this.receivingContext;
        if (receivingContext) {
            receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        // the initial calendar might have an dummy drag state from displayDrag
        if (initialCalendar !== receivingContext) {
            initialCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    };
    EventDragging.prototype.cleanup = function () {
        this.subjectSeg = null;
        this.isDragging = false;
        this.eventRange = null;
        this.relevantEvents = null;
        this.receivingContext = null;
        this.validMutation = null;
        this.mutatedRelevantEvents = null;
    };
    // TODO: test this in IE11
    // QUESTION: why do we need it on the resizable???
    EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
    return EventDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction));
function computeEventMutation(hit0, hit1, massagers) {
    var dateSpan0 = hit0.dateSpan;
    var dateSpan1 = hit1.dateSpan;
    var date0 = dateSpan0.range.start;
    var date1 = dateSpan1.range.start;
    var standardProps = {};
    if (dateSpan0.allDay !== dateSpan1.allDay) {
        standardProps.allDay = dateSpan1.allDay;
        standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
        if (dateSpan1.allDay) {
            // means date1 is already start-of-day,
            // but date0 needs to be converted
            date0 = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(date0);
        }
    }
    var delta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffDates)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ?
        hit0.largeUnit :
        null);
    if (delta.milliseconds) { // has hours/minutes/seconds
        standardProps.allDay = false;
    }
    var mutation = {
        datesDelta: delta,
        standardProps: standardProps,
    };
    for (var _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
        var massager = massagers_1[_i];
        massager(mutation, hit0, hit1);
    }
    return mutation;
}
function getComponentTouchDelay(component) {
    var options = component.context.options;
    var delay = options.eventLongPressDelay;
    if (delay == null) {
        delay = options.longPressDelay;
    }
    return delay;
}

var EventResizing = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EventResizing, _super);
    function EventResizing(settings) {
        var _this = _super.call(this, settings) || this;
        // internal state
        _this.draggingSegEl = null;
        _this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
        _this.eventRange = null;
        _this.relevantEvents = null;
        _this.validMutation = null;
        _this.mutatedRelevantEvents = null;
        _this.handlePointerDown = function (ev) {
            var component = _this.component;
            var segEl = _this.querySegEl(ev);
            var seg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(segEl);
            var eventRange = _this.eventRange = seg.eventRange;
            _this.dragging.minDistance = component.context.options.eventDragMinDistance;
            // if touch, need to be working with a selected event
            _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) ||
                (ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId));
        };
        _this.handleDragStart = function (ev) {
            var context = _this.component.context;
            var eventRange = _this.eventRange;
            _this.relevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRelevantEvents)(context.getCurrentData().eventStore, _this.eventRange.instance.instanceId);
            var segEl = _this.querySegEl(ev);
            _this.draggingSegEl = segEl;
            _this.draggingSeg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(segEl);
            context.calendarApi.unselect();
            context.emitter.trigger('eventResizeStart', {
                el: segEl,
                event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, eventRange.def, eventRange.instance),
                jsEvent: ev.origEvent,
                view: context.viewApi,
            });
        };
        _this.handleHitUpdate = function (hit, isFinal, ev) {
            var context = _this.component.context;
            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var eventInstance = _this.eventRange.instance;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
                isEvent: true,
            };
            if (hit) {
                var disallowed = hit.componentId === initialHit.componentId
                    && _this.isHitComboAllowed
                    && !_this.isHitComboAllowed(initialHit, hit);
                if (!disallowed) {
                    mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
                }
            }
            if (mutation) {
                mutatedRelevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyMutationToEventStore)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
                interaction.mutatedEvents = mutatedRelevantEvents;
                if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, context)) {
                    isInvalid = true;
                    mutation = null;
                    mutatedRelevantEvents = null;
                    interaction.mutatedEvents = null;
                }
            }
            if (mutatedRelevantEvents) {
                context.dispatch({
                    type: 'SET_EVENT_RESIZE',
                    state: interaction,
                });
            }
            else {
                context.dispatch({ type: 'UNSET_EVENT_RESIZE' });
            }
            if (!isInvalid) {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
            }
            else {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
            }
            if (!isFinal) {
                if (mutation && isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                _this.validMutation = mutation;
                _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        _this.handleDragEnd = function (ev) {
            var context = _this.component.context;
            var eventDef = _this.eventRange.def;
            var eventInstance = _this.eventRange.instance;
            var eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, eventDef, eventInstance);
            var relevantEvents = _this.relevantEvents;
            var mutatedRelevantEvents = _this.mutatedRelevantEvents;
            context.emitter.trigger('eventResizeStop', {
                el: _this.draggingSegEl,
                event: eventApi,
                jsEvent: ev.origEvent,
                view: context.viewApi,
            });
            if (_this.validMutation) {
                var updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                context.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: mutatedRelevantEvents,
                });
                var eventChangeArg = {
                    oldEvent: eventApi,
                    event: updatedEventApi,
                    relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents, context, eventInstance),
                    revert: function () {
                        context.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: relevantEvents, // the pre-change events
                        });
                    },
                };
                context.emitter.trigger('eventResize', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventChangeArg), { el: _this.draggingSegEl, startDelta: _this.validMutation.startDelta || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createDuration)(0), endDelta: _this.validMutation.endDelta || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createDuration)(0), jsEvent: ev.origEvent, view: context.viewApi }));
                context.emitter.trigger('eventChange', eventChangeArg);
            }
            else {
                context.emitter.trigger('_noEventResize');
            }
            // reset all internal state
            _this.draggingSeg = null;
            _this.relevantEvents = null;
            _this.validMutation = null;
            // okay to keep eventInstance around. useful to set it in handlePointerDown
        };
        var component = settings.component;
        var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
        dragging.pointer.selector = '.fc-event-resizer';
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = component.context.options.dragScroll;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    EventResizing.prototype.destroy = function () {
        this.dragging.destroy();
    };
    EventResizing.prototype.querySegEl = function (ev) {
        return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(ev.subjectEl, '.fc-event');
    };
    return EventResizing;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction));
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
    var dateEnv = hit0.context.dateEnv;
    var date0 = hit0.dateSpan.range.start;
    var date1 = hit1.dateSpan.range.start;
    var delta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffDates)(date0, date1, dateEnv, hit0.largeUnit);
    if (isFromStart) {
        if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
            return { startDelta: delta };
        }
    }
    else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
        return { endDelta: delta };
    }
    return null;
}

var UnselectAuto = /** @class */ (function () {
    function UnselectAuto(context) {
        var _this = this;
        this.context = context;
        this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
        this.matchesCancel = false;
        this.matchesEvent = false;
        this.onSelect = function (selectInfo) {
            if (selectInfo.jsEvent) {
                _this.isRecentPointerDateSelect = true;
            }
        };
        this.onDocumentPointerDown = function (pev) {
            var unselectCancel = _this.context.options.unselectCancel;
            var downEl = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getEventTargetViaRoot)(pev.origEvent);
            _this.matchesCancel = !!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, unselectCancel);
            _this.matchesEvent = !!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, EventDragging.SELECTOR); // interaction started on an event?
        };
        this.onDocumentPointerUp = function (pev) {
            var context = _this.context;
            var documentPointer = _this.documentPointer;
            var calendarState = context.getCurrentData();
            // touch-scrolling should never unfocus any type of selection
            if (!documentPointer.wasTouchScroll) {
                if (calendarState.dateSelection && // an existing date selection?
                    !_this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
                ) {
                    var unselectAuto = context.options.unselectAuto;
                    if (unselectAuto && (!unselectAuto || !_this.matchesCancel)) {
                        context.calendarApi.unselect(pev);
                    }
                }
                if (calendarState.eventSelection && // an existing event selected?
                    !_this.matchesEvent // interaction DIDN'T start on an event
                ) {
                    context.dispatch({ type: 'UNSELECT_EVENT' });
                }
            }
            _this.isRecentPointerDateSelect = false;
        };
        var documentPointer = this.documentPointer = new PointerDragging(document);
        documentPointer.shouldIgnoreMove = true;
        documentPointer.shouldWatchScroll = false;
        documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
        documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
        /*
        TODO: better way to know about whether there was a selection with the pointer
        */
        context.emitter.on('select', this.onSelect);
    }
    UnselectAuto.prototype.destroy = function () {
        this.context.emitter.off('select', this.onSelect);
        this.documentPointer.destroy();
    };
    return UnselectAuto;
}());

var OPTION_REFINERS = {
    fixedMirrorParent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
};
var LISTENER_REFINERS = {
    dateClick: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventDragStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventDragStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventDrop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventResizeStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventResizeStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventResize: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    drop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventReceive: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
    eventLeave: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
};

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
var ExternalElementDragging = /** @class */ (function () {
    function ExternalElementDragging(dragging, suppliedDragMeta) {
        var _this = this;
        this.receivingContext = null;
        this.droppableEvent = null; // will exist for all drags, even if create:false
        this.suppliedDragMeta = null;
        this.dragMeta = null;
        this.handleDragStart = function (ev) {
            _this.dragMeta = _this.buildDragMeta(ev.subjectEl);
        };
        this.handleHitUpdate = function (hit, isFinal, ev) {
            var dragging = _this.hitDragging.dragging;
            var receivingContext = null;
            var droppableEvent = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
                mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
                isEvent: _this.dragMeta.create,
            };
            if (hit) {
                receivingContext = hit.context;
                if (_this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
                    droppableEvent = computeEventForDateSpan(hit.dateSpan, _this.dragMeta, receivingContext);
                    interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.eventTupleToStore)(droppableEvent);
                    isInvalid = !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, receivingContext);
                    if (isInvalid) {
                        interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)();
                        droppableEvent = null;
                    }
                }
            }
            _this.displayDrag(receivingContext, interaction);
            // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
            // TODO: wish we could somehow wait for dispatch to guarantee render
            dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
            if (!isInvalid) {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
            }
            else {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
            }
            if (!isFinal) {
                dragging.setMirrorNeedsRevert(!droppableEvent);
                _this.receivingContext = receivingContext;
                _this.droppableEvent = droppableEvent;
            }
        };
        this.handleDragEnd = function (pev) {
            var _a = _this, receivingContext = _a.receivingContext, droppableEvent = _a.droppableEvent;
            _this.clearDrag();
            if (receivingContext && droppableEvent) {
                var finalHit = _this.hitDragging.finalHit;
                var finalView = finalHit.context.viewApi;
                var dragMeta = _this.dragMeta;
                receivingContext.emitter.trigger('drop', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView }));
                if (dragMeta.create) {
                    var addingEvents_1 = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.eventTupleToStore)(droppableEvent);
                    receivingContext.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: addingEvents_1,
                    });
                    if (pev.isTouch) {
                        receivingContext.dispatch({
                            type: 'SELECT_EVENT',
                            eventInstanceId: droppableEvent.instance.instanceId,
                        });
                    }
                    // signal that an external event landed
                    receivingContext.emitter.trigger('eventReceive', {
                        event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(receivingContext, droppableEvent.def, droppableEvent.instance),
                        relatedEvents: [],
                        revert: function () {
                            receivingContext.dispatch({
                                type: 'REMOVE_EVENTS',
                                eventStore: addingEvents_1,
                            });
                        },
                        draggedEl: pev.subjectEl,
                        view: finalView,
                    });
                }
            }
            _this.receivingContext = null;
            _this.droppableEvent = null;
        };
        var hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsStore);
        hitDragging.requireInitial = false; // will start outside of a component
        hitDragging.emitter.on('dragstart', this.handleDragStart);
        hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
        hitDragging.emitter.on('dragend', this.handleDragEnd);
        this.suppliedDragMeta = suppliedDragMeta;
    }
    ExternalElementDragging.prototype.buildDragMeta = function (subjectEl) {
        if (typeof this.suppliedDragMeta === 'object') {
            return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(this.suppliedDragMeta);
        }
        if (typeof this.suppliedDragMeta === 'function') {
            return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(this.suppliedDragMeta(subjectEl));
        }
        return getDragMetaFromEl(subjectEl);
    };
    ExternalElementDragging.prototype.displayDrag = function (nextContext, state) {
        var prevContext = this.receivingContext;
        if (prevContext && prevContext !== nextContext) {
            prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        if (nextContext) {
            nextContext.dispatch({ type: 'SET_EVENT_DRAG', state: state });
        }
    };
    ExternalElementDragging.prototype.clearDrag = function () {
        if (this.receivingContext) {
            this.receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    };
    ExternalElementDragging.prototype.canDropElOnCalendar = function (el, receivingContext) {
        var dropAccept = receivingContext.options.dropAccept;
        if (typeof dropAccept === 'function') {
            return dropAccept.call(receivingContext.calendarApi, el);
        }
        if (typeof dropAccept === 'string' && dropAccept) {
            return Boolean((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementMatches)(el, dropAccept));
        }
        return true;
    };
    return ExternalElementDragging;
}());
// Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, context) {
    var defProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, dragMeta.leftoverProps);
    for (var _i = 0, _a = context.pluginHooks.externalDefTransforms; _i < _a.length; _i++) {
        var transform = _a[_i];
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(defProps, transform(dateSpan, dragMeta));
    }
    var _b = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.refineEventDef)(defProps, context), refined = _b.refined, extra = _b.extra;
    var def = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseEventDef)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
    context);
    var start = dateSpan.range.start;
    // only rely on time info if drop zone is all-day,
    // otherwise, we already know the time
    if (dateSpan.allDay && dragMeta.startTime) {
        start = context.dateEnv.add(start, dragMeta.startTime);
    }
    var end = dragMeta.duration ?
        context.dateEnv.add(start, dragMeta.duration) :
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getDefaultEventEnd)(dateSpan.allDay, start, context);
    var instance = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEventInstance)(def.defId, { start: start, end: end });
    return { def: def, instance: instance };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
    var str = getEmbeddedElData(el, 'event');
    var obj = str ?
        JSON.parse(str) :
        { create: false }; // if no embedded data, assume no event creation
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(obj);
}
_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
    var prefix = _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.dataAttrPrefix;
    var prefixedName = (prefix ? prefix + '-' : '') + name;
    return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
var ExternalDraggable = /** @class */ (function () {
    function ExternalDraggable(el, settings) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            var _a = _this.settings, minDistance = _a.minDistance, longPressDelay = _a.longPressDelay;
            dragging.minDistance =
                minDistance != null ?
                    minDistance :
                    (ev.isTouch ? 0 : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BASE_OPTION_DEFAULTS.eventDragMinDistance);
            dragging.delay =
                ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
                    (longPressDelay != null ? longPressDelay : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BASE_OPTION_DEFAULTS.longPressDelay) :
                    0;
        };
        this.handleDragStart = function (ev) {
            if (ev.isTouch &&
                _this.dragging.delay &&
                ev.subjectEl.classList.contains('fc-event')) {
                _this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
            }
        };
        this.settings = settings;
        var dragging = this.dragging = new FeaturefulElementDragging(el);
        dragging.touchScrollAllowed = false;
        if (settings.itemSelector != null) {
            dragging.pointer.selector = settings.itemSelector;
        }
        if (settings.appendTo != null) {
            dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
        }
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
    }
    ExternalDraggable.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return ExternalDraggable;
}());

/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
var InferredElementDragging = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(InferredElementDragging, _super);
    function InferredElementDragging(containerEl) {
        var _this = _super.call(this, containerEl) || this;
        _this.shouldIgnoreMove = false;
        _this.mirrorSelector = '';
        _this.currentMirrorEl = null;
        _this.handlePointerDown = function (ev) {
            _this.emitter.trigger('pointerdown', ev);
            if (!_this.shouldIgnoreMove) {
                // fire dragstart right away. does not support delay or min-distance
                _this.emitter.trigger('dragstart', ev);
            }
        };
        _this.handlePointerMove = function (ev) {
            if (!_this.shouldIgnoreMove) {
                _this.emitter.trigger('dragmove', ev);
            }
        };
        _this.handlePointerUp = function (ev) {
            _this.emitter.trigger('pointerup', ev);
            if (!_this.shouldIgnoreMove) {
                // fire dragend right away. does not support a revert animation
                _this.emitter.trigger('dragend', ev);
            }
        };
        var pointer = _this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', _this.handlePointerDown);
        pointer.emitter.on('pointermove', _this.handlePointerMove);
        pointer.emitter.on('pointerup', _this.handlePointerUp);
        return _this;
    }
    InferredElementDragging.prototype.destroy = function () {
        this.pointer.destroy();
    };
    InferredElementDragging.prototype.setIgnoreMove = function (bool) {
        this.shouldIgnoreMove = bool;
    };
    InferredElementDragging.prototype.setMirrorIsVisible = function (bool) {
        if (bool) {
            // restore a previously hidden element.
            // use the reference in case the selector class has already been removed.
            if (this.currentMirrorEl) {
                this.currentMirrorEl.style.visibility = '';
                this.currentMirrorEl = null;
            }
        }
        else {
            var mirrorEl = this.mirrorSelector
                // TODO: somehow query FullCalendars WITHIN shadow-roots
                ? document.querySelector(this.mirrorSelector)
                : null;
            if (mirrorEl) {
                this.currentMirrorEl = mirrorEl;
                mirrorEl.style.visibility = 'hidden';
            }
        }
    };
    return InferredElementDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementDragging));

/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
var ThirdPartyDraggable = /** @class */ (function () {
    function ThirdPartyDraggable(containerOrSettings, settings) {
        var containerEl = document;
        if (
        // wish we could just test instanceof EventTarget, but doesn't work in IE11
        containerOrSettings === document ||
            containerOrSettings instanceof Element) {
            containerEl = containerOrSettings;
            settings = settings || {};
        }
        else {
            settings = (containerOrSettings || {});
        }
        var dragging = this.dragging = new InferredElementDragging(containerEl);
        if (typeof settings.itemSelector === 'string') {
            dragging.pointer.selector = settings.itemSelector;
        }
        else if (containerEl === document) {
            dragging.pointer.selector = '[data-event]';
        }
        if (typeof settings.mirrorSelector === 'string') {
            dragging.mirrorSelector = settings.mirrorSelector;
        }
        new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
    }
    ThirdPartyDraggable.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return ThirdPartyDraggable;
}());

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
    componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
    calendarInteractions: [UnselectAuto],
    elementDraggingImpl: FeaturefulElementDragging,
    optionRefiners: OPTION_REFINERS,
    listenerRefiners: LISTENER_REFINERS,
});

/* harmony default export */ __webpack_exports__["default"] = (main);

//# sourceMappingURL=main.js.map


/***/ }),

/***/ 4129:
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListView": function() { return /* binding */ ListView; }
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ 68202);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 9726);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/*!
FullCalendar v5.10.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





var ListViewHeaderRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListViewHeaderRow, _super);
    function ListViewHeaderRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            textId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
        };
        return _this;
    }
    ListViewHeaderRow.prototype.render = function () {
        var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options, viewApi = _a.viewApi;
        var _b = this.props, cellId = _b.cellId, dayDate = _b.dayDate, todayRange = _b.todayRange;
        var textId = this.state.textId;
        var dayMeta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDateMeta)(dayDate, todayRange);
        // will ever be falsy?
        var text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
        // will ever be falsy? also, BAD NAME "alt"
        var sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
        var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ date: dateEnv.toDate(dayDate), view: viewApi, textId: textId,
            text: text,
            sideText: sideText, navLinkAttrs: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(this.context, dayDate), sideNavLinkAttrs: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(this.context, dayDate, 'day', false) }, dayMeta);
        var classNames = ['fc-list-day'].concat((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames)(dayMeta, theme));
        // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInnerContent, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-date": (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString)(dayDate) },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-list-day-cushion ' + theme.getClass('tableCellShaded'), ref: innerElRef }, innerContent)))); }));
    };
    return ListViewHeaderRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderInnerContent(props) {
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        props.text && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
        props.sideText && ( /* not keyboard tabbable */(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
}

var DEFAULT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: 'short',
});
var ListViewEventRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListViewEventRow, _super);
    function ListViewEventRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListViewEventRow.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var seg = props.seg, timeHeaderId = props.timeHeaderId, eventHeaderId = props.eventHeaderId, dateHeaderId = props.dateHeaderId;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TIME_FORMAT;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot, { seg: seg, timeText: "" // BAD. because of all-day content
            , disableDragging: true, disableResizing: true, defaultContent: function () { return renderEventInnerContent(seg, context); } /* weird */, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, isSelected: props.isSelected, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { className: ['fc-list-event', hookProps.event.url ? 'fc-event-forced-url' : ''].concat(classNames).join(' '), ref: rootElRef },
            buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { "aria-hidden": true, className: "fc-list-event-graphic" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-list-event-dot", style: { borderColor: hookProps.borderColor || hookProps.backgroundColor } })),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: innerElRef, headers: eventHeaderId + " " + dateHeaderId, className: "fc-list-event-title" }, innerContent))); }));
    };
    return ListViewEventRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderEventInnerContent(seg, context) {
    var interactiveAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs)(seg, context);
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, interactiveAttrs), seg.eventRange.def.title));
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
    var options = context.options;
    if (options.displayEventTime !== false) {
        var eventDef = seg.eventRange.def;
        var eventInstance = seg.eventRange.instance;
        var doAllDay = false;
        var timeText = void 0;
        if (eventDef.allDay) {
            doAllDay = true;
        }
        else if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange)(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
            if (seg.isStart) {
                timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
            }
            else if (seg.isEnd) {
                timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
            }
            else {
                doAllDay = true;
            }
        }
        else {
            timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context);
        }
        if (doAllDay) {
            var hookProps = {
                text: context.options.allDayText,
                view: context.viewApi,
            };
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, headers: timeHeaderId + " " + dateHeaderId, className: ['fc-list-event-time'].concat(classNames).join(' ') }, innerContent)); }));
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: "fc-list-event-time" }, timeText));
    }
    return null;
}
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.computeDateVars = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(computeDateVars);
        _this.eventStoreToSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(_this._eventStoreToSegs);
        _this.state = {
            timeHeaderId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
            eventHeaderId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
            dateHeaderIdRoot: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
        };
        _this.setRootEl = function (rootEl) {
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    ListView.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var extraClassNames = [
            'fc-list',
            context.theme.getClass('table'),
            context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : '',
        ];
        var _b = this.computeDateVars(props.dateProfile), dayDates = _b.dayDates, dayRanges = _b.dayRanges;
        var eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.setRootEl }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: extraClassNames.concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                _this.renderSegList(eventSegs, dayDates) :
                _this.renderEmptyMessage()))); }));
    };
    ListView.prototype.renderEmptyMessage = function () {
        var _a = this.context, options = _a.options, viewApi = _a.viewApi;
        var hookProps = {
            text: options.noEventsText,
            view: viewApi,
        };
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.noEventsClassNames, content: options.noEventsContent, defaultContent: renderNoEventsInner, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-list-empty'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-list-empty-cushion", ref: innerElRef }, innerContent))); }));
    };
    ListView.prototype.renderSegList = function (allSegs, dayDates) {
        var _a = this.context, theme = _a.theme, options = _a.options;
        var _b = this.state, timeHeaderId = _b.timeHeaderId, eventHeaderId = _b.eventHeaderId, dateHeaderIdRoot = _b.dateHeaderIdRoot;
        var segsByDay = groupSegsByDay(allSegs); // sparse array
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: "day" }, function (nowDate, todayRange) {
            var innerNodes = [];
            for (var dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                var daySegs = segsByDay[dayIndex];
                if (daySegs) { // sparse array, so might be undefined
                    var dayStr = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString)(dayDates[dayIndex]);
                    var dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                    // append a day header
                    innerNodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                    daySegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs)(daySegs, options.eventOrder);
                    for (var _i = 0, daySegs_1 = daySegs; _i < daySegs_1.length; _i++) {
                        var seg = daySegs_1[_i];
                        innerNodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate))));
                    }
                }
            }
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { className: 'fc-list-table ' + theme.getClass('table') },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", null,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null,
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", "aria-hidden": true }),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes)));
        }));
    };
    ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
        return this.eventRangesToSegs((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
    };
    ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
        }
        return segs;
    };
    ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
        var dateEnv = this.context.dateEnv;
        var nextDayThreshold = this.context.options.nextDayThreshold;
        var range = eventRange.range;
        var allDay = eventRange.def.allDay;
        var dayIndex;
        var segRange;
        var seg;
        var segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
            segRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(range, dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    component: this,
                    eventRange: eventRange,
                    start: segRange.start,
                    end: segRange.end,
                    isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                    dayIndex: dayIndex,
                };
                segs.push(seg);
                // detect when range won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !allDay &&
                    dayIndex + 1 < dayRanges.length &&
                    range.end <
                        dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                    seg.end = range.end;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    };
    return ListView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function renderNoEventsInner(hookProps) {
    return hookProps.text;
}
function computeDateVars(dateProfile) {
    var dayStart = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateProfile.renderRange.start);
    var viewEnd = dateProfile.renderRange.end;
    var dayDates = [];
    var dayRanges = [];
    while (dayStart < viewEnd) {
        dayDates.push(dayStart);
        dayRanges.push({
            start: dayStart,
            end: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(dayStart, 1),
        });
        dayStart = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(dayStart, 1);
    }
    return { dayDates: dayDates, dayRanges: dayRanges };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
    var segsByDay = []; // sparse array
    var i;
    var seg;
    for (i = 0; i < segs.length; i += 1) {
        seg = segs[i];
        (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
            .push(seg);
    }
    return segsByDay;
}

var OPTION_REFINERS = {
    listDayFormat: createFalsableFormatter,
    listDaySideFormat: createFalsableFormatter,
    noEventsClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
    return input === false ? null : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(input);
}

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    optionRefiners: OPTION_REFINERS,
    views: {
        list: {
            component: ListView,
            buttonTextKey: 'list',
            listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
        },
        listDay: {
            type: 'list',
            duration: { days: 1 },
            listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
        },
        listWeek: {
            type: 'list',
            duration: { weeks: 1 },
            listDayFormat: { weekday: 'long' },
            listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        },
        listMonth: {
            type: 'list',
            duration: { month: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
        listYear: {
            type: 'list',
            duration: { year: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
    },
});

/* harmony default export */ __webpack_exports__["default"] = (main);

//# sourceMappingURL=main.js.map


/***/ }),

/***/ 40111:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayTimeCols": function() { return /* binding */ DayTimeCols; },
/* harmony export */   "DayTimeColsSlicer": function() { return /* binding */ DayTimeColsSlicer; },
/* harmony export */   "DayTimeColsView": function() { return /* binding */ DayTimeColsView; },
/* harmony export */   "TimeCols": function() { return /* binding */ TimeCols; },
/* harmony export */   "TimeColsSlatsCoords": function() { return /* binding */ TimeColsSlatsCoords; },
/* harmony export */   "TimeColsView": function() { return /* binding */ TimeColsView; },
/* harmony export */   "buildDayRanges": function() { return /* binding */ buildDayRanges; },
/* harmony export */   "buildSlatMetas": function() { return /* binding */ buildSlatMetas; },
/* harmony export */   "buildTimeColsModel": function() { return /* binding */ buildTimeColsModel; }
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ 6152);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 9726);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ 93520);
/*!
FullCalendar v5.10.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/






var AllDaySplitter = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(AllDaySplitter, _super);
    function AllDaySplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllDaySplitter.prototype.getKeyInfo = function () {
        return {
            allDay: {},
            timed: {},
        };
    };
    AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        return ['timed'];
    };
    AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering)(eventDef)) {
            return ['timed', 'allDay'];
        }
        return ['allDay'];
    };
    return AllDaySplitter;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Splitter));

var DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'short',
});
function TimeColsAxisCell(props) {
    var classNames = [
        'fc-timegrid-slot',
        'fc-timegrid-slot-label',
        props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
    ];
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewContextType.Consumer, null, function (context) {
        if (!props.isLabeled) {
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
        }
        var dateEnv = context.dateEnv, options = context.options, viewApi = context.viewApi;
        var labelFormat = // TODO: fully pre-parse
         options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
            Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(options.slotLabelFormat[0]) :
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(options.slotLabelFormat);
        var hookProps = {
            level: 0,
            time: props.time,
            date: dateEnv.toDate(props.date),
            view: viewApi,
            text: dateEnv.format(props.date, labelFormat),
        };
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.slotLabelClassNames, content: options.slotLabelContent, defaultContent: renderInnerContent, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": props.isoTimeStr },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion", ref: innerElRef }, innerContent)))); }));
    }));
}
function renderInnerContent(props) {
    return props.text;
}

var TimeBodyAxis = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeBodyAxis, _super);
    function TimeBodyAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeBodyAxis.prototype.render = function () {
        return this.props.slatMetas.map(function (slatMeta) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, slatMeta)))); });
    };
    return TimeBodyAxis;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({ week: 'short' });
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
var TimeColsView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsView, _super);
    function TimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
        _this.headerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.scrollerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            slatCoords: null,
        };
        _this.handleScrollTopRequest = function (scrollTop) {
            var scrollerEl = _this.scrollerElRef.current;
            if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                scrollerEl.scrollTop = scrollTop;
            }
        };
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        _this.renderHeadAxis = function (rowKey, frameHeight) {
            if (frameHeight === void 0) { frameHeight = ''; }
            var options = _this.context.options;
            var dateProfile = _this.props.dateProfile;
            var range = dateProfile.renderRange;
            var dayCnt = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDays)(range.start, range.end);
            var navLinkAttrs = (dayCnt === 1) // only do in day views (to avoid doing in week views that dont need it)
                ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(_this.context, range.start, 'week')
                : {};
            if (options.weekNumbers && rowKey === 'day') {
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot, { date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { ref: rootElRef, "aria-hidden": true, className: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ].concat(classNames).join(' ') },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid", style: { height: frameHeight } },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: innerElRef, className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner" }, navLinkAttrs), innerContent)))); }));
            }
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { "aria-hidden": true, className: "fc-timegrid-axis" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
        };
        /* Table Component Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
        // but DayGrid still needs to have classNames on inner elements in order to measure.
        _this.renderTableRowAxis = function (rowHeight) {
            var _a = _this.context, options = _a.options, viewApi = _a.viewApi;
            var hookProps = {
                text: options.allDayText,
                view: viewApi,
            };
            return (
            // TODO: make reusable hook. used in list view too
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, "aria-hidden": true, className: [
                    'fc-timegrid-axis',
                    'fc-scrollgrid-shrink',
                ].concat(classNames).join(' ') },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-timegrid-axis-frame fc-scrollgrid-shrink-frame' + (rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''), style: { height: rowHeight } },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner", ref: innerElRef }, innerContent)))); }));
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
        };
        return _this;
    }
    // rendering
    // ----------------------------------------------------------------------------------------------------
    TimeColsView.prototype.renderSimpleLayout = function (headerRowContent, allDayContent, timeContent) {
        var _a = this, context = _a.context, props = _a.props;
        var sections = [];
        var stickyHeaderDates = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                chunk: { content: allDayContent },
            });
            sections.push({
                type: 'body',
                key: 'all-day-divider',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunk: {
                scrollerElRef: this.scrollerElRef,
                content: timeContent,
            },
        });
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections }))); }));
    };
    TimeColsView.prototype.renderHScrollLayout = function (headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
        var _this = this;
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        var _a = this, context = _a.context, props = _a.props;
        var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar)(context.options);
        var sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (arg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation" }, _this.renderHeadAxis('day', arg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                ],
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation" }, _this.renderTableRowAxis(contentArg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        content: allDayContent,
                    },
                ],
            });
            sections.push({
                key: 'all-day-divider',
                type: 'body',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        var isNowIndicator = context.options.nowIndicator;
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunks: [
                {
                    key: 'axis',
                    content: function (arg) { return (
                    // TODO: make this now-indicator arrow more DRY with TimeColsContent
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-chunk" },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : '' } },
                            arg.tableColGroupNode,
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null,
                                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, { slatMetas: slatMetas }))),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" },
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, function (nowDate) {
                                var nowIndicatorTop = isNowIndicator &&
                                    slatCoords &&
                                    slatCoords.safeComputeTop(nowDate); // might return void
                                if (typeof nowIndicatorTop === 'number') {
                                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: true, date: nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); }));
                                }
                                return null;
                            })))); },
                },
                {
                    key: 'cols',
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            ],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                key: 'footer',
                type: 'footer',
                isSticky: true,
                chunks: [
                    {
                        key: 'axis',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    },
                    {
                        key: 'cols',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    },
                ],
            });
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: false, colGroups: [
                    { width: 'shrink', cols: [{ width: 'shrink' }] },
                    { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                ], sections: sections }))); }));
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    TimeColsView.prototype.getAllDayMaxEventProps = function () {
        var _a = this.context.options, dayMaxEvents = _a.dayMaxEvents, dayMaxEventRows = _a.dayMaxEventRows;
        if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
            dayMaxEvents = undefined;
            dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
        }
        return { dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows };
    };
    return TimeColsView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

var TimeColsSlatsCoords = /** @class */ (function () {
    function TimeColsSlatsCoords(positions, dateProfile, slotDuration) {
        this.positions = positions;
        this.dateProfile = dateProfile;
        this.slotDuration = slotDuration;
    }
    TimeColsSlatsCoords.prototype.safeComputeTop = function (date) {
        var dateProfile = this.dateProfile;
        if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker)(dateProfile.currentRange, date)) {
            var startOfDayDate = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(date);
            var timeMs = date.valueOf() - startOfDayDate.valueOf();
            if (timeMs >= (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMinTime) &&
                timeMs < (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMaxTime)) {
                return this.computeTimeTop((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(timeMs));
            }
        }
        return null;
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeColsSlatsCoords.prototype.computeDateTop = function (when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(when);
        }
        return this.computeTimeTop((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(when.valueOf() - startOfDayDate.valueOf()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
    // Eventually allow computation with arbirary slat dates.
    TimeColsSlatsCoords.prototype.computeTimeTop = function (duration) {
        var _a = this, positions = _a.positions, dateProfile = _a.dateProfile;
        var len = positions.els.length;
        // floating-point value of # of slots covered
        var slatCoverage = (duration.milliseconds - (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMinTime)) / (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(this.slotDuration);
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because slotMinTime/slotMaxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return positions.tops[slatIndex] +
            positions.getHeight(slatIndex) * slatRemainder;
    };
    return TimeColsSlatsCoords;
}());

var TimeColsSlatsBody = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsSlatsBody, _super);
    function TimeColsSlatsBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColsSlatsBody.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var slatElRefs = props.slatElRefs;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map(function (slatMeta, i) {
            var hookProps = {
                time: slatMeta.time,
                date: context.dateEnv.toDate(slatMeta.date),
                view: context.viewApi,
            };
            var classNames = [
                'fc-timegrid-slot',
                'fc-timegrid-slot-lane',
                slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor',
            ];
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                props.axis && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, slatMeta))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.slotLaneClassNames, content: options.slotLaneContent, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": slatMeta.isoTimeStr }, innerContent)); })));
        })));
    };
    return TimeColsSlatsBody;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
var TimeColsSlats = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsSlats, _super);
    function TimeColsSlats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.slatElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        return _this;
    }
    TimeColsSlats.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.rootElRef, className: "fc-timegrid-slots" },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                    height: props.minHeight,
                } },
                props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
    };
    TimeColsSlats.prototype.componentDidMount = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentDidUpdate = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentWillUnmount = function () {
        if (this.props.onCoords) {
            this.props.onCoords(null);
        }
    };
    TimeColsSlats.prototype.updateSizing = function () {
        var _a = this, context = _a.context, props = _a.props;
        if (props.onCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            var rootEl = this.rootElRef.current;
            if (rootEl.offsetHeight) { // not hidden by css
                props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
            }
        }
    };
    return TimeColsSlats;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function collectSlatEls(elMap, slatMetas) {
    return slatMetas.map(function (slatMeta) { return elMap[slatMeta.key]; });
}

function splitSegsByCol(segs, colCnt) {
    var segsByCol = [];
    var i;
    for (i = 0; i < colCnt; i += 1) {
        segsByCol.push([]);
    }
    if (segs) {
        for (i = 0; i < segs.length; i += 1) {
            segsByCol[segs[i].col].push(segs[i]);
        }
    }
    return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
    var byRow = [];
    if (!ui) {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
            var seg = _a[_i];
            byRow[seg.col].segs.push(seg);
        }
    }
    return byRow;
}

var TimeColMoreLink = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColMoreLink, _super);
    function TimeColMoreLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    TimeColMoreLink.prototype.render = function () {
        var _this = this;
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot, { allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.rootElRef, defaultContent: renderMoreLinkInner, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: function () { return renderPlainFgSegs(props.hiddenSegs, props); } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", { ref: function (el) {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(rootElRef, el);
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.rootElRef, el);
            }, className: ['fc-timegrid-more-link'].concat(classNames).join(' '), style: { top: props.top, bottom: props.bottom }, onClick: handleClick, title: title, "aria-expanded": isExpanded, "aria-controls": popoverId },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: innerElRef, className: "fc-timegrid-more-link-inner fc-sticky" }, innerContent))); }));
    };
    return TimeColMoreLink;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderMoreLinkInner(props) {
    return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
    var hierarchy = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy();
    if (strictOrder != null) {
        hierarchy.strictOrder = strictOrder;
    }
    if (maxStackCnt != null) {
        hierarchy.maxStackCnt = maxStackCnt;
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var hiddenGroups = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries)(hiddenEntries);
    var web = buildWeb(hierarchy);
    web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
    var segRects = webToRects(web);
    return { segRects: segRects, hiddenGroups: hiddenGroups };
}
function buildWeb(hierarchy) {
    var entriesByLevel = hierarchy.entriesByLevel;
    var buildNode = cacheable(function (level, lateral) { return level + ':' + lateral; }, function (level, lateral) {
        var siblingRange = findNextLevelSegs(hierarchy, level, lateral);
        var nextLevelRes = buildNodes(siblingRange, buildNode);
        var entry = entriesByLevel[level][lateral];
        return [
            (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, entry), { nextLevelNodes: nextLevelRes[0] }),
            entry.thickness + nextLevelRes[1], // the pressure builds
        ];
    });
    return buildNodes(entriesByLevel.length
        ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
        : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
    if (!siblingRange) {
        return [[], 0];
    }
    var level = siblingRange.level, lateralStart = siblingRange.lateralStart, lateralEnd = siblingRange.lateralEnd;
    var lateral = lateralStart;
    var pairs = [];
    while (lateral < lateralEnd) {
        pairs.push(buildNode(level, lateral));
        lateral += 1;
    }
    pairs.sort(cmpDescPressures);
    return [
        pairs.map(extractNode),
        pairs[0][1], // first item's pressure
    ];
}
function cmpDescPressures(a, b) {
    return b[1] - a[1];
}
function extractNode(a) {
    return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
    var levelCoords = hierarchy.levelCoords, entriesByLevel = hierarchy.entriesByLevel;
    var subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
    var afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
    var levelCnt = levelCoords.length;
    var level = subjectLevel;
    // skip past levels that are too high up
    for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
        ; // do nothing
    for (; level < levelCnt; level += 1) {
        var entries = entriesByLevel[level];
        var entry = void 0;
        var searchIndex = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.binarySearch)(entries, subjectEntry.span.start, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd);
        var lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
        var lateralEnd = lateralStart;
        while ( // loop through entries that horizontally intersect
        (entry = entries[lateralEnd]) && // but not past the whole seg list
            entry.span.start < subjectEntry.span.end) {
            lateralEnd += 1;
        }
        if (lateralStart < lateralEnd) {
            return { level: level, lateralStart: lateralStart, lateralEnd: lateralEnd };
        }
    }
    return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
    var stretchNode = cacheable(function (node, startCoord, prevThickness) { return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(node); }, function (node, startCoord, prevThickness) {
        var nextLevelNodes = node.nextLevelNodes, thickness = node.thickness;
        var allThickness = thickness + prevThickness;
        var thicknessFraction = thickness / allThickness;
        var endCoord;
        var newChildren = [];
        if (!nextLevelNodes.length) {
            endCoord = totalThickness;
        }
        else {
            for (var _i = 0, nextLevelNodes_1 = nextLevelNodes; _i < nextLevelNodes_1.length; _i++) {
                var childNode = nextLevelNodes_1[_i];
                if (endCoord === undefined) {
                    var res = stretchNode(childNode, startCoord, allThickness);
                    endCoord = res[0];
                    newChildren.push(res[1]);
                }
                else {
                    var res = stretchNode(childNode, endCoord, 0);
                    newChildren.push(res[1]);
                }
            }
        }
        var newThickness = (endCoord - startCoord) * thicknessFraction;
        return [endCoord - newThickness, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
    });
    return topLevelNodes.map(function (node) { return stretchNode(node, 0, 0)[1]; });
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
    var rects = [];
    var processNode = cacheable(function (node, levelCoord, stackDepth) { return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(node); }, function (node, levelCoord, stackDepth) {
        var rect = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, node), { levelCoord: levelCoord,
            stackDepth: stackDepth, stackForward: 0 });
        rects.push(rect);
        return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
    });
    function processNodes(nodes, levelCoord, stackDepth) {
        var stackForward = 0;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
        }
        return stackForward;
    }
    processNodes(topLevelNodes, 0, 0);
    return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = keyFunc.apply(void 0, args);
        return (key in cache)
            ? cache[key]
            : (cache[key] = workFunc.apply(void 0, args));
    };
}

function computeSegVCoords(segs, colDate, slatCoords, eventMinHeight) {
    if (slatCoords === void 0) { slatCoords = null; }
    if (eventMinHeight === void 0) { eventMinHeight = 0; }
    var vcoords = [];
    if (slatCoords) {
        for (var i = 0; i < segs.length; i += 1) {
            var seg = segs[i];
            var spanStart = slatCoords.computeDateTop(seg.start, colDate);
            var spanEnd = Math.max(spanStart + (eventMinHeight || 0), // :(
            slatCoords.computeDateTop(seg.end, colDate));
            vcoords.push({
                start: Math.round(spanStart),
                end: Math.round(spanEnd), //
            });
        }
    }
    return vcoords;
}
function computeFgSegPlacements(segs, segVCoords, // might not have for every seg
eventOrderStrict, eventMaxStack) {
    var segInputs = [];
    var dumbSegs = []; // segs without coords
    for (var i = 0; i < segs.length; i += 1) {
        var vcoords = segVCoords[i];
        if (vcoords) {
            segInputs.push({
                index: i,
                thickness: 1,
                span: vcoords,
            });
        }
        else {
            dumbSegs.push(segs[i]);
        }
    }
    var _a = buildPositioning(segInputs, eventOrderStrict, eventMaxStack), segRects = _a.segRects, hiddenGroups = _a.hiddenGroups;
    var segPlacements = [];
    for (var _i = 0, segRects_1 = segRects; _i < segRects_1.length; _i++) {
        var segRect = segRects_1[_i];
        segPlacements.push({
            seg: segs[segRect.index],
            rect: segRect,
        });
    }
    for (var _b = 0, dumbSegs_1 = dumbSegs; _b < dumbSegs_1.length; _b++) {
        var dumbSeg = dumbSegs_1[_b];
        segPlacements.push({ seg: dumbSeg, rect: null });
    }
    return { segPlacements: segPlacements, hiddenGroups: hiddenGroups };
}

var DEFAULT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: false,
});
var TimeColEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColEvent, _super);
    function TimeColEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColEvent.prototype.render = function () {
        var classNames = [
            'fc-timegrid-event',
            'fc-v-event',
        ];
        if (this.props.isShort) {
            classNames.push('fc-timegrid-event-short');
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.props, { defaultTimeFormat: DEFAULT_TIME_FORMAT, extraClassNames: classNames })));
    };
    return TimeColEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TimeColMisc = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColMisc, _super);
    function TimeColMisc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColMisc.prototype.render = function () {
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (innerElRef, innerContent) { return (innerContent &&
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-misc", ref: innerElRef }, innerContent)); }));
    };
    return TimeColMisc;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TimeCol = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeCol, _super);
    function TimeCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs);
        return _this;
    }
    // TODO: memoize event-placement?
    TimeCol.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var isSelectMirror = context.options.selectMirror;
        var mirrorSegs = (props.eventDrag && props.eventDrag.segs) ||
            (props.eventResize && props.eventResize.segs) ||
            (isSelectMirror && props.dateSelectionSegs) ||
            [];
        var interactionAffectedInstances = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        var sortedFgSegs = this.sortEventSegs(props.fgEventSegs, context.options.eventOrder);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot, { elRef: props.elRef, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (rootElRef, classNames, dataAttrs) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: rootElRef, role: "gridcell", className: ['fc-timegrid-col'].concat(classNames, props.extraClassNames || []).join(' ') }, dataAttrs, props.extraDataAttrs),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-bg" },
                    _this.renderFillSegs(props.businessHourSegs, 'non-business'),
                    _this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                    _this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, _this.renderNowIndicator(props.nowIndicatorSegs)),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMisc, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps })))); }));
    };
    TimeCol.prototype.renderFgSegs = function (sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var props = this.props;
        if (props.forPrint) {
            return renderPlainFgSegs(sortedFgSegs, props);
        }
        return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
    };
    TimeCol.prototype.renderPositionedFgSegs = function (segs, // if not mirror, needs to be sorted
    segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var _this = this;
        var _a = this.context.options, eventMaxStack = _a.eventMaxStack, eventShortHeight = _a.eventShortHeight, eventOrderStrict = _a.eventOrderStrict, eventMinHeight = _a.eventMinHeight;
        var _b = this.props, date = _b.date, slatCoords = _b.slatCoords, eventSelection = _b.eventSelection, todayRange = _b.todayRange, nowDate = _b.nowDate;
        var isMirror = isDragging || isResizing || isDateSelecting;
        var segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
        var _c = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack), segPlacements = _c.segPlacements, hiddenGroups = _c.hiddenGroups;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            this.renderHiddenGroups(hiddenGroups, segs),
            segPlacements.map(function (segPlacement) {
                var seg = segPlacement.seg, rect = segPlacement.rect;
                var instanceId = seg.eventRange.instance.instanceId;
                var isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
                var vStyle = computeSegVStyle(rect && rect.span);
                var hStyle = (!isMirror && rect) ? _this.computeSegHStyle(rect) : { left: 0, right: 0 };
                var isInset = Boolean(rect) && rect.stackForward > 0;
                var isShort = Boolean(rect) && (rect.span.end - rect.span.start) < eventShortHeight; // look at other places for this problem
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-timegrid-event-harness' +
                        (isInset ? ' fc-timegrid-event-harness-inset' : ''), key: instanceId, style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ visibility: isVisible ? '' : 'hidden' }, vStyle), hStyle) },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: isShort }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate)))));
            })));
    };
    // will already have eventMinHeight applied because segInputs already had it
    TimeCol.prototype.renderHiddenGroups = function (hiddenGroups, segs) {
        var _a = this.props, extraDateSpan = _a.extraDateSpan, dateProfile = _a.dateProfile, todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map(function (hiddenGroup) {
            var positionCss = computeSegVStyle(hiddenGroup.span);
            var hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildIsoString)((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart)(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
        })));
    };
    TimeCol.prototype.renderFillSegs = function (segs, fillType) {
        var _a = this, props = _a.props, context = _a.context;
        var segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
        var children = segVCoords.map(function (vcoords, i) {
            var seg = segs[i];
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey)(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === 'bg-event' ?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange, props.nowDate))) :
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill)(fillType)));
        });
        return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
    };
    TimeCol.prototype.renderNowIndicator = function (segs) {
        var _a = this.props, slatCoords = _a.slatCoords, date = _a.date;
        if (!slatCoords) {
            return null;
        }
        return segs.map(function (seg, i) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: false, date: date, 
            // key doesn't matter. will only ever be one
            key: i }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-line'].concat(classNames).join(' '), style: { top: slatCoords.computeDateTop(seg.start, date) } }, innerContent)); })); });
    };
    TimeCol.prototype.computeSegHStyle = function (segHCoords) {
        var _a = this.context, isRtl = _a.isRtl, options = _a.options;
        var shouldOverlap = options.slotEventOverlap;
        var nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
        var farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
        }
        if (isRtl) {
            left = 1 - farCoord;
            right = nearCoord;
        }
        else {
            left = nearCoord;
            right = 1 - farCoord;
        }
        var props = {
            zIndex: segHCoords.stackDepth + 1,
            left: left * 100 + '%',
            right: right * 100 + '%',
        };
        if (shouldOverlap && !segHCoords.stackForward) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeCol;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderPlainFgSegs(sortedFgSegs, _a) {
    var todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
    var hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
        (eventResize ? eventResize.affectedInstances : null) ||
        {};
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map(function (seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate)))));
    })));
}
function computeSegVStyle(segVCoords) {
    if (!segVCoords) {
        return { top: '', bottom: '' };
    }
    return {
        top: segVCoords.start,
        bottom: -segVCoords.end,
    };
}
function compileSegsFromEntries(segEntries, allSegs) {
    return segEntries.map(function (segEntry) { return allSegs[segEntry.index]; });
}

var TimeColsContent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsContent, _super);
    function TimeColsContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitFgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitBgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitBusinessHourSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitNowIndicatorSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitDateSelectionSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitEventDrag = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByCol);
        _this.splitEventResize = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByCol);
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        return _this;
    }
    TimeColsContent.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var nowIndicatorTop = context.options.nowIndicator &&
            props.slatCoords &&
            props.slatCoords.safeComputeTop(props.nowDate); // might return void
        var colCnt = props.cells.length;
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
        var nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { role: "presentation", style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                } },
                props.tableColGroupNode,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", { role: "presentation" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "row" },
                        props.axis && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
                                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: true, date: props.nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); })))))),
                        props.cells.map(function (cell, i) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint })); }))))));
    };
    TimeColsContent.prototype.componentDidMount = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.componentDidUpdate = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.updateCoords = function () {
        var props = this.props;
        if (props.onColCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            props.onColCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
            false));
        }
    };
    return TimeColsContent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function collectCellEls(elMap, cells) {
    return cells.map(function (cell) { return elMap[cell.key]; });
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
var TimeCols = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeCols, _super);
    function TimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processSlotOptions = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(processSlotOptions);
        _this.state = {
            slatCoords: null,
        };
        _this.handleRootEl = function (el) {
            if (el) {
                _this.context.registerInteractiveComponent(_this, {
                    el: el,
                    isHitComboAllowed: _this.props.isHitComboAllowed,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        _this.handleScrollRequest = function (request) {
            var onScrollTopRequest = _this.props.onScrollTopRequest;
            var slatCoords = _this.state.slatCoords;
            if (onScrollTopRequest && slatCoords) {
                if (request.time) {
                    var top_1 = slatCoords.computeTimeTop(request.time);
                    top_1 = Math.ceil(top_1); // zoom can give weird floating-point values. rather scroll a little bit further
                    if (top_1) {
                        top_1 += 1; // to overcome top border that slots beyond the first have. looks better
                    }
                    onScrollTopRequest(top_1);
                }
                return true;
            }
            return false;
        };
        _this.handleColCoords = function (colCoords) {
            _this.colCoords = colCoords;
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
            if (_this.props.onSlatCoords) {
                _this.props.onSlatCoords(slatCoords);
            }
        };
        return _this;
    }
    TimeCols.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
    };
    TimeCols.prototype.componentDidMount = function () {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    };
    TimeCols.prototype.componentDidUpdate = function (prevProps) {
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    };
    TimeCols.prototype.componentWillUnmount = function () {
        this.scrollResponder.detach();
    };
    TimeCols.prototype.queryHit = function (positionLeft, positionTop) {
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
        var colCoords = this.colCoords;
        var dateProfile = this.props.dateProfile;
        var slatCoords = this.state.slatCoords;
        var _b = this.processSlotOptions(this.props.slotDuration, options.snapDuration), snapDuration = _b.snapDuration, snapsPerSlot = _b.snapsPerSlot;
        var colIndex = colCoords.leftToIndex(positionLeft);
        var slatIndex = slatCoords.positions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            var cell = this.props.cells[colIndex];
            var slatTop = slatCoords.positions.tops[slatIndex];
            var slatHeight = slatCoords.positions.getHeight(slatIndex);
            var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var dayDate = this.props.cells[colIndex].date;
            var time = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(dateProfile.slotMinTime, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration)(snapDuration, snapIndex));
            var start = dateEnv.add(dayDate, time);
            var end = dateEnv.add(start, snapDuration);
            return {
                dateProfile: dateProfile,
                dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ range: { start: start, end: end }, allDay: false }, cell.extraDateSpan),
                dayEl: colCoords.els[colIndex],
                rect: {
                    left: colCoords.lefts[colIndex],
                    right: colCoords.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight,
                },
                layer: 0,
            };
        }
        return null;
    };
    return TimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function processSlotOptions(slotDuration, snapDurationOverride) {
    var snapDuration = snapDurationOverride || slotDuration;
    var snapsPerSlot = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(slotDuration, snapDuration);
    if (snapsPerSlot === null) {
        snapDuration = slotDuration;
        snapsPerSlot = 1;
        // TODO: say warning?
    }
    return { snapDuration: snapDuration, snapsPerSlot: snapsPerSlot };
}

var DayTimeColsSlicer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeColsSlicer, _super);
    function DayTimeColsSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayTimeColsSlicer.prototype.sliceRange = function (range, dayRanges) {
        var segs = [];
        for (var col = 0; col < dayRanges.length; col += 1) {
            var segRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col: col,
                });
            }
        }
        return segs;
    };
    return DayTimeColsSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer));

var DayTimeCols = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeCols, _super);
    function DayTimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayRanges = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildDayRanges);
        _this.slicer = new DayTimeColsSlicer();
        _this.timeColsRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTimeCols.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var dateProfile = props.dateProfile, dayTableModel = props.dayTableModel;
        var isNowIndicator = context.options.nowIndicator;
        var dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
        // give it the first row of cells
        // TODO: would move this further down hierarchy, but sliceNowDate needs it
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: isNowIndicator ? 'minute' : 'day' }, function (nowDate, todayRange) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: _this.timeColsRef }, _this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: isNowIndicator && _this.slicer.sliceNowDate(nowDate, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords }))); }));
    };
    return DayTimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
    var ranges = [];
    for (var _i = 0, _a = dayTableModel.headerDates; _i < _a.length; _i++) {
        var date = _a[_i];
        ranges.push({
            start: dateEnv.add(date, dateProfile.slotMinTime),
            end: dateEnv.add(date, dateProfile.slotMaxTime),
        });
    }
    return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
    var dayStart = new Date(0);
    var slatTime = slotMinTime;
    var slatIterator = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(0);
    var labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
    var metas = [];
    while ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(slatTime) < (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(slotMaxTime)) {
        var date = dateEnv.add(dayStart, slatTime);
        var isLabeled = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(slatIterator, labelInterval) !== null;
        metas.push({
            date: date,
            time: slatTime,
            key: date.toISOString(),
            isoTimeStr: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString)(date),
            isLabeled: isLabeled,
        });
        slatTime = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(slatTime, slotDuration);
        slatIterator = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(slatIterator, slotDuration);
    }
    return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
    var i;
    var labelInterval;
    var slotsPerLabel;
    // find the smallest stock label interval that results in more than one slots-per-label
    for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
        labelInterval = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(STOCK_SUB_DURATIONS[i]);
        slotsPerLabel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(labelInterval, slotDuration);
        if (slotsPerLabel !== null && slotsPerLabel > 1) {
            return labelInterval;
        }
    }
    return slotDuration; // fall back
}

var DayTimeColsView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeColsView, _super);
    function DayTimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildTimeColsModel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildTimeColsModel);
        _this.buildSlatMetas = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildSlatMetas);
        return _this;
    }
    DayTimeColsView.prototype.render = function () {
        var _this = this;
        var _a = this.context, options = _a.options, dateEnv = _a.dateEnv, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dateProfile = props.dateProfile;
        var dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
        var splitProps = this.allDaySplitter.splitProps(props);
        var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
        var dayMinWidth = options.dayMinWidth;
        var hasAttachedAxis = !dayMinWidth;
        var hasDetachedAxis = dayMinWidth;
        var headerContent = options.dayHeaders && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader, { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
        var allDayContent = (options.allDaySlot !== false) && (function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__.DayTable, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, _this.getAllDayMaxEventProps()))); });
        var timeGridContent = function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: _this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: _this.handleScrollTopRequest }))); };
        return hasDetachedAxis
            ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
            : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
    };
    return DayTimeColsView;
}(TimeColsView));
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel(daySeries, false);
}

var OPTION_REFINERS = {
    allDaySlot: Boolean,
};

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    initialView: 'timeGridWeek',
    optionRefiners: OPTION_REFINERS,
    views: {
        timeGrid: {
            component: DayTimeColsView,
            usesMinMaxTime: true,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true, // a bad name. confused with overlap/constraint system
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 },
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 },
        },
    },
});

/* harmony default export */ __webpack_exports__["default"] = (main);

//# sourceMappingURL=main.js.map


/***/ }),

/***/ 43959:
/*!***********************************************************!*\
  !*** ./src/app/views/calendar/calendar-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarRoutingModule": function() { return /* binding */ CalendarRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component */ 38704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
    }
];
class CalendarRoutingModule {
}
CalendarRoutingModule.ɵfac = function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); };
CalendarRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
CalendarRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 38704:
/*!******************************************************!*\
  !*** ./src/app/views/calendar/calendar.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": function() { return /* binding */ CalendarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _calendar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.model */ 33066);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 43595);
/* harmony import */ var _events_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-util */ 50087);
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ 37510);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/angular */ 52955);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);














const _c0 = ["calendar"];
function CalendarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CalendarComponent_li_28_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const filter_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.changeCategory($event, filter_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", filter_r1.checked)("value", filter_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", filter_r1.value, " ");
} }
class CalendarComponent extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter {
    constructor(fb, dialog, calendarService, snackBar) {
        super();
        this.fb = fb;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.snackBar = snackBar;
        this.filterOptions = 'All';
        this.filterItems = [
            'work',
            'personal',
            'important',
            'travel',
            'friends'
        ];
        this.filters = [
            { name: 'work', value: 'Work', checked: true },
            { name: 'personal', value: 'Personal', checked: true },
            { name: 'important', value: 'Important', checked: true },
            { name: 'travel', value: 'Travel', checked: true },
            { name: 'friends', value: 'Friends', checked: true }
        ];
        this.calendarOptions = {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialView: 'dayGridMonth',
            weekends: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: this.handleDateSelect.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventsSet: this.handleEvents.bind(this)
        };
        this.dialogTitle = 'Add New Event';
        this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
        this.addCusForm = this.createCalendarForm(this.calendar);
    }
    ngOnInit() {
        this.calendarEvents = _events_util__WEBPACK_IMPORTED_MODULE_2__.INITIAL_EVENTS;
        this.tempEvents = this.calendarEvents;
        this.calendarOptions.initialEvents = this.calendarEvents;
    }
    handleDateSelect(selectInfo) {
        this.addNewEvent();
    }
    addNewEvent() {
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                calendar: this.calendar,
                action: 'add'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 'submit') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents = this.calendarEvents.concat({
                    // add new event data. must create new array
                    id: this.calendarData.id,
                    title: this.calendarData.title,
                    start: this.calendarData.startDate,
                    end: this.calendarData.endDate,
                    className: this.getClassNameValue(this.calendarData.category),
                    groupId: this.calendarData.category,
                    details: this.calendarData.details
                });
                this.calendarOptions.events = this.calendarEvents;
                this.addCusForm.reset();
                this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    changeCategory(event, filter) {
        if (event.checked) {
            this.filterItems.push(filter.name);
        }
        else {
            this.filterItems.splice(this.filterItems.indexOf(filter.name), 1);
        }
        this.filterEvent(this.filterItems);
    }
    filterEvent(element) {
        const list = this.calendarEvents.filter((x) => element.map((y) => y).includes(x.groupId));
        this.calendarOptions.events = list;
    }
    handleEventClick(clickInfo) {
        this.eventClick(clickInfo);
    }
    eventClick(row) {
        const calendarData = {
            id: row.event.id,
            title: row.event.title,
            category: row.event.groupId,
            startDate: row.event.start,
            endDate: row.event.end,
            details: row.event.extendedProps.details
        };
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                calendar: calendarData,
                action: 'edit'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 'submit') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents.forEach(function (element, index) {
                    if (this.calendarData.id === element.id) {
                        this.editEvent(index, this.calendarData);
                    }
                }, this);
                this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
                this.addCusForm.reset();
            }
            else if (result === 'delete') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents.forEach(function (element, index) {
                    if (this.calendarData.id === element.id) {
                        row.event.remove();
                    }
                }, this);
                this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    editEvent(eventIndex, calendarData) {
        const calendarEvents = this.calendarEvents.slice();
        const singleEvent = Object.assign({}, calendarEvents[eventIndex]);
        singleEvent.id = calendarData.id;
        singleEvent.title = calendarData.title;
        singleEvent.start = calendarData.startDate;
        singleEvent.end = calendarData.endDate;
        singleEvent.className = this.getClassNameValue(calendarData.category);
        singleEvent.groupId = calendarData.category;
        singleEvent.details = calendarData.details;
        calendarEvents[eventIndex] = singleEvent;
        this.calendarEvents = calendarEvents; // reassign the array
        this.calendarOptions.events = calendarEvents;
    }
    handleEvents(events) {
        // this.currentEvents = events;
    }
    createCalendarForm(calendar) {
        return this.fb.group({
            id: [calendar.id],
            title: [
                calendar.title,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]
            ],
            category: [calendar.category],
            startDate: [calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            endDate: [calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            details: [
                calendar.details,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]
            ]
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
    getClassNameValue(category) {
        let className;
        if (category === 'work')
            className = 'fc-event-success';
        else if (category === 'personal')
            className = 'fc-event-warning';
        else if (category === 'important')
            className = 'fc-event-primary';
        else if (category === 'travel')
            className = 'fc-event-danger';
        else if (category === 'friends')
            className = 'fc-event-info';
        return className;
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 2, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "col-md-2", "col-sm-12", "p-l-30"], [1, "m-b-25"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-container"], [4, "ngFor", "ngForOf"], [1, "col-md-10", "col-sm-12"], [1, "panel-body"], [3, "options"], ["color", "primary", 3, "checked", "value", "change"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_22_listener() { return ctx.addNewEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Add Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "My Calendars");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CalendarComponent_li_28_Template, 3, 3, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "full-calendar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__.FullCalendarComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 33066:
/*!**************************************************!*\
  !*** ./src/app/views/calendar/calendar.model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": function() { return /* binding */ Calendar; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 38583);

class Calendar {
    constructor(calendar) {
        {
            this.id = calendar.id || this.getRandomID();
            this.title = calendar.title || '';
            this.category = calendar.category || '';
            this.startDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = calendar.details || '';
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

/***/ 87837:
/*!***************************************************!*\
  !*** ./src/app/views/calendar/calendar.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarsModule": function() { return /* binding */ CalendarsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 43959);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/angular */ 52955);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-pick-datetime */ 86050);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ 38704);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 43595);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ 37510);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ 93520);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ 40111);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ 4129);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/interaction */ 9549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);

























_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule.registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__.default,
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__.default,
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__.default,
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__.default,
]);
class CalendarsModule {
}
CalendarsModule.ɵfac = function CalendarsModule_Factory(t) { return new (t || CalendarsModule)(); };
CalendarsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CalendarsModule });
CalendarsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CalendarsModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent, _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FormDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule] }); })();


/***/ }),

/***/ 37510:
/*!****************************************************!*\
  !*** ./src/app/views/calendar/calendar.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarService": function() { return /* binding */ CalendarService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 75894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class CalendarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/calendar.json";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    getAllCalendars() {
        return this.httpClient
            .get(this.API_URL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    addUpdateCalendar(calendar) {
        this.dialogData = calendar;
    }
    deleteCalendar(calendar) {
        this.dialogData = calendar;
    }
    errorHandler(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
CalendarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac });


/***/ }),

/***/ 43595:
/*!*****************************************************************************!*\
  !*** ./src/app/views/calendar/dialogs/form-dialog/form-dialog.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogComponent": function() { return /* binding */ FormDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _calendar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../calendar.model */ 33066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calendar.service */ 37510);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-pick-datetime */ 86050);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);















function FormDialogComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_div_69_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.deleteEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class FormDialogComponent {
    constructor(dialogRef, data, calendarService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.calendarService = calendarService;
        this.fb = fb;
        this.showDeleteBtn = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.calendar.title;
            this.calendar = data.calendar;
            this.showDeleteBtn = true;
        }
        else {
            this.dialogTitle = 'New Event';
            this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
            this.showDeleteBtn = false;
        }
        this.calendarForm = this.createContactForm();
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
            id: [this.calendar.id],
            title: [this.calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            category: [this.calendar.category],
            startDate: [this.calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            endDate: [this.calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            details: [this.calendar.details]
        });
    }
    submit() {
        // emppty stuff
    }
    deleteEvent() {
        this.calendarService.deleteCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('delete');
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.calendarService.addUpdateCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('submit');
    }
}
FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) { return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
FormDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FormDialogComponent, selectors: [["app-form-dialog"]], decls: 70, vars: 16, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "title", "required", ""], ["matSuffix", ""], ["formControlName", "category", "required", ""], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["matInput", "", "formControlName", "startDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["matSuffix", "", 1, "date-icon", 3, "owlDateTimeTrigger"], ["startDate", ""], ["matInput", "", "formControlName", "endDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["endDate", ""], ["matInput", "", "formControlName", "details"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12"], ["class", "example-button-row", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "", "color", "warn", 3, "click"], [1, "font-20"]], template: function FormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Personal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Important ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Friends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Start date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "owl-date-time", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "End date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "owl-date-time", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Event Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_64_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_66_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, FormDialogComponent_div_69_Template, 4, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.calendarForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "important");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r0)("owlDateTime", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r1)("owlDateTime", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.calendarForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDeleteBtn);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeInputDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeTriggerDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 50087:
/*!***********************************************!*\
  !*** ./src/app/views/calendar/events-util.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_EVENTS": function() { return /* binding */ INITIAL_EVENTS; }
/* harmony export */ });
const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const INITIAL_EVENTS = [
    {
        id: "event1",
        title: "All Day Event",
        start: new Date(year, month, 1, 0, 0),
        end: new Date(year, month, 1, 23, 59),
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event2",
        title: "Break",
        start: new Date(year, month, day + 28, 16, 0),
        end: new Date(year, month, day + 29, 20, 0),
        allDay: false,
        className: "fc-event-primary",
        groupId: "important",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. ",
    },
    {
        id: "event3",
        title: "Shopping",
        start: new Date(year, month, day + 4, 12, 0),
        end: new Date(year, month, day + 4, 20, 0),
        allDay: false,
        className: "fc-event-warning",
        groupId: "personal",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. ",
    },
    {
        id: "event4",
        title: "Meeting",
        start: new Date(year, month, day + 14, 10, 30),
        end: new Date(year, month, day + 16, 20, 0),
        allDay: false,
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event5",
        title: "Lunch",
        start: new Date(year, month, day, 11, 0),
        end: new Date(year, month, day, 14, 0),
        allDay: false,
        className: "fc-event-primary",
        groupId: "important",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event6",
        title: "Meeting",
        start: new Date(year, month, day + 2, 12, 30),
        end: new Date(year, month, day + 2, 14, 30),
        allDay: false,
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event7",
        title: "Birthday Party",
        start: new Date(year, month, day + 17, 19, 0),
        end: new Date(year, month, day + 17, 19, 30),
        allDay: false,
        className: "fc-event-warning",
        groupId: "personal",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event8",
        title: "Go to Delhi",
        start: new Date(year, month, day + -5, 10, 0),
        end: new Date(year, month, day + -4, 10, 30),
        allDay: false,
        className: "fc-event-danger",
        groupId: "travel",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event9",
        title: "Get To Gather",
        start: new Date(year, month, day + 6, 10, 0),
        end: new Date(year, month, day + 7, 10, 30),
        allDay: false,
        className: "fc-event-info",
        groupId: "friends",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event10",
        title: "Collage Party",
        start: new Date(year, month, day + 20, 10, 0),
        end: new Date(year, month, day + 20, 10, 30),
        allDay: false,
        className: "fc-event-info",
        groupId: "friends",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
];


/***/ }),

/***/ 66748:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    padding: 2px 3px 0\n  }\n.fc .fc-daygrid-day-bottom:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(8px / 2) solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(8px / 2);\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBLCtDQUErQztBQUMvQzs7NEJBRTRCLGlDQUFpQztBQUM3RDtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUU7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBRTtBQUNsQix1QkFBdUIsaUNBQWlDO0lBQ3BELGtCQUFrQjtJQUNsQixVQUFVLEVBQUUsd0RBQXdEO0VBQ3RFO0FBQ0Y7TUFDTSwwQ0FBMEM7TUFDMUMsMENBQW9FO01BQXBFLG9FQUFvRTtJQUN0RTtBQUNKO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDRGQUE0RjtFQUNoSDtBQUNGOztFQUVFLGFBQWE7O0FBRWY7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7QUFDRjtJQUNJLFlBQVk7RUFDZDtBQUNGOztFQUVFLGlDQUFpQzs7QUFFbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtFQUNkO0FBQ0Y7O0VBRUUsb0JBQW9COztBQUV0QjtBQUNBO0lBQ0ksZUFBZSxFQUFFLG1GQUFtRjtFQUN0RztBQUNGOztFQUVFLHdDQUF3Qzs7QUFFMUM7QUFDQTtNQUNNLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsUUFBUTtJQUNWO0FBQ0o7TUFDTSxrQkFBa0IsRUFBRSxrREFBa0Q7TUFDdEUsZUFBZSxFQUFFLGdHQUFnRztJQUNuSDtBQUNKLCtCQUErQixpQ0FBaUM7RUFDOUQ7QUFDRjtNQUNNLGtCQUFrQjtJQUNwQjtBQUNKOztFQUVFLGtCQUFrQjs7QUFFcEI7QUFDQTtJQUNJLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxvREFBb0Q7SUFDNUQsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsSUFBSTtFQUNoQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0VBQ1g7QUFDRjs7RUFFRSxlQUFlOztBQUVqQjtBQUNBLDBDQUEwQyxXQUFXO0FBQ3JELHNDQUFzQyxXQUFXO0FBQ2pELHVDQUF1QyxXQUFXO0FBQ2xEOztFQUVFLFdBQVc7O0FBRWI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxVQUFVO0VBQ1o7QUFDRjs7RUFFRSxvQ0FBb0M7O0FBRXRDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7RUFDRjtBQUNGO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUU7QUFDbEI7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjs7RUFFRSwrQkFBK0I7O0FBRWpDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsMENBQXNFO0lBQXRFLHNFQUFzRTtJQUN0RSxjQUFjO0lBQ2QsY0FBNEM7SUFBNUMsNENBQTRDO0VBQzlDO0FBQ0Y7O0VBRUUsWUFBWTs7QUFFZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtBQUNGOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksT0FBTztJQUNQLHdCQUF3QjtFQUMxQjtBQUNGO0lBQ0ksUUFBUTtJQUNSLHdCQUF3QjtFQUMxQjtBQUNGO0lBQ0ksZ0JBQWdCLEVBQUUsc0RBQXNEO0VBQzFFO0FBQ0Ysb0JBQW9CLHFGQUFxRjtFQUN2RyxrQkFBa0IsRUFBRSxpQ0FBaUM7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFFLDBDQUEwQztFQUM5RCxnQkFBZ0I7RUFDaEIsZ0JBQTJDO0VBQTNDLDJDQUEyQztBQUM3QztBQUNBLG1EQUFtRDtBQUNuRDtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGOztJQUVJLFlBQVk7RUFDZDtBQUNGLG1DQUFtQztBQUNuQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7O0FBRUY7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWSxFQUFFLGlEQUFpRDtJQUMvRCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0lBRUksOEJBQThCO0VBQ2hDO0FBQ0Y7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGLHdCQUF3QixtQkFBbUI7RUFDekMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQ0FBb0c7RUFBcEcsb0dBQW9HO0VBQ3BHLGtCQUFrQjtFQUNsQiw0QkFBK0Q7RUFBL0QsK0RBQStEO0FBQ2pFO0FBQ0EsMkNBQTJDO0FBQzNDO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoibWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpyb290IHtcbiAgLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aDogOHB4O1xufVxuLyogaGVscCB0aGluZ3MgY2xlYXIgbWFyZ2lucyBvZiBpbm5lciBjb250ZW50ICovXG4uZmMtZGF5Z3JpZC1kYXktZnJhbWUsXG4uZmMtZGF5Z3JpZC1kYXktZXZlbnRzLFxuLmZjLWRheWdyaWQtZXZlbnQtaGFybmVzcyB7IC8qIGZvciBldmVudCB0b3AvYm90dG9tIG1hcmdpbnMgKi9cbn1cbi5mYy1kYXlncmlkLWRheS1mcmFtZTpiZWZvcmUsIC5mYy1kYXlncmlkLWRheS1ldmVudHM6YmVmb3JlLCAuZmMtZGF5Z3JpZC1ldmVudC1oYXJuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuLmZjLWRheWdyaWQtZGF5LWZyYW1lOmFmdGVyLCAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzOmFmdGVyLCAuZmMtZGF5Z3JpZC1ldmVudC1oYXJuZXNzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG4uZmMgLmZjLWRheWdyaWQtYm9keSB7IC8qIGEgPGRpdj4gdGhhdCB3cmFwcyB0aGUgdGFibGUgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTsgLyogY29udGFpbmVyIGlubmVyIHotaW5kZXgncyBiZWNhdXNlIDx0cj5zIGNhbid0IGRvIGl0ICovXG4gIH1cbi5mYyAuZmMtZGF5Z3JpZC1kYXkuZmMtZGF5LXRvZGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjAsIDQwLCAwLjE1KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLXRvZGF5LWJnLWNvbG9yLCByZ2JhKDI1NSwgMjIwLCA0MCwgMC4xNSkpO1xuICAgIH1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktZnJhbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlOyAvKiBzZWVtcyB0byB3b3JrIGJldHRlciB0aGFuIGBoZWlnaHRgIGJlY2F1c2Ugc2V0cyBoZWlnaHQgYWZ0ZXIgcm93cy9jZWxscyBuYXR1cmFsbHkgZG8gaXQgKi9cbiAgfVxuLmZjIHtcblxuICAvKiBjZWxsIHRvcCAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtZGF5LXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cbi5mYyAuZmMtZGF5LW90aGVyIC5mYy1kYXlncmlkLWRheS10b3Age1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuLmZjIHtcblxuICAvKiBkYXkgbnVtYmVyICh3aXRoaW4gY2VsbCB0b3ApICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktbnVtYmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbi5mYyB7XG5cbiAgLyogZXZlbnQgY29udGFpbmVyICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxcHg7IC8qIG5lZWRzIHRvIGJlIG1hcmdpbiwgbm90IHBhZGRpbmcsIHNvIHRoYXQgYXZhaWxhYmxlIGNlbGwgaGVpZ2h0IGNhbiBiZSBjb21wdXRlZCAqL1xuICB9XG4uZmMge1xuXG4gIC8qIHBvc2l0aW9uaW5nIGZvciBiYWxhbmNlZCB2cyBuYXR1cmFsICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1ib2R5LWJhbGFuY2VkIC5mYy1kYXlncmlkLWRheS1ldmVudHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbi5mYyAuZmMtZGF5Z3JpZC1ib2R5LXVuYmFsYW5jZWQgLmZjLWRheWdyaWQtZGF5LWV2ZW50cyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIGZvciBjb250YWluaW5nIGFicyBwb3NpdGlvbmVkIGV2ZW50IGhhcm5lc3NlcyAqL1xuICAgICAgbWluLWhlaWdodDogMmVtOyAvKiBpbiBhZGRpdGlvbiB0byBiZWluZyBhIG1pbi1oZWlnaHQgZHVyaW5nIG5hdHVyYWwgaGVpZ2h0LCBlcXVhbGl6ZXMgdGhlIGhlaWdodHMgYSBsaXR0bGUgYml0ICovXG4gICAgfVxuLmZjIC5mYy1kYXlncmlkLWJvZHktbmF0dXJhbCB7IC8qIGNhbiBjb2V4aXN0IHdpdGggLXVuYmFsYW5jZWQgKi9cbiAgfVxuLmZjIC5mYy1kYXlncmlkLWJvZHktbmF0dXJhbCAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG4uZmMge1xuXG4gIC8qIGV2ZW50IGhhcm5lc3MgKi9cblxufVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50LWhhcm5lc3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50LWhhcm5lc3MtYWJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwOyAvKiBmYWxsYmFjayBjb29yZHMgZm9yIHdoZW4gY2Fubm90IHlldCBiZSBjb21wdXRlZCAqL1xuICAgIGxlZnQ6IDA7IC8qICovXG4gICAgcmlnaHQ6IDA7IC8qICovXG4gIH1cbi5mYyAuZmMtZGF5Z3JpZC1iZy1oYXJuZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuLmZjIHtcblxuICAvKiBiZyBjb250ZW50ICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktYmcgLmZjLW5vbi1idXNpbmVzcyB7IHotaW5kZXg6IDEgfVxuLmZjIC5mYy1kYXlncmlkLWRheS1iZyAuZmMtYmctZXZlbnQgeyB6LWluZGV4OiAyIH1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktYmcgLmZjLWhpZ2hsaWdodCB7IHotaW5kZXg6IDMgfVxuLmZjIHtcblxuICAvKiBldmVudHMgKi9cblxufVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50IHtcbiAgICB6LWluZGV4OiA2O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgfVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LW1pcnJvciB7XG4gICAgei1pbmRleDogNztcbiAgfVxuLmZjIHtcblxuICAvKiBjZWxsIGJvdHRvbSAod2l0aGluIGRheS1ldmVudHMpICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktYm90dG9tIHtcbiAgICBmb250LXNpemU6IC44NWVtO1xuICAgIHBhZGRpbmc6IDJweCAzcHggMFxuICB9XG4uZmMgLmZjLWRheWdyaWQtZGF5LWJvdHRvbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7IH1cbi5mYyAuZmMtZGF5Z3JpZC1tb3JlLWxpbmsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuLmZjIHtcblxuICAvKiB3ZWVrIG51bWJlciAod2l0aGluIGZyYW1lKSAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtd2Vlay1udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLW5ldXRyYWwtYmctY29sb3IsIHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKSk7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgY29sb3I6IHZhcigtLWZjLW5ldXRyYWwtdGV4dC1jb2xvciwgIzgwODA4MCk7XG4gIH1cbi5mYyB7XG5cbiAgLyogcG9wb3ZlciAqL1xuXG59XG4uZmMgLmZjLW1vcmUtcG9wb3ZlciAuZmMtcG9wb3Zlci1ib2R5IHtcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LXN0YXJ0LFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWRheWdyaWQtZXZlbnQuZmMtZXZlbnQtZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LWVuZCxcbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LXN0YXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtZGF5Z3JpZC13ZWVrLW51bWJlciB7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDA7XG4gIH1cbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1kYXlncmlkLXdlZWstbnVtYmVyIHtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAzcHg7XG4gIH1cbi5mYy1saXF1aWQtaGFjayAuZmMtZGF5Z3JpZC1kYXktZnJhbWUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7IC8qIHdpbGwgY2F1c2UgaW5uZXIgYWJzb2x1dGUgc3R1ZmYgdG8gZXhwYW5kIHRvIDx0ZD4gKi9cbiAgfVxuLmZjLWRheWdyaWQtZXZlbnQgeyAvKiBtYWtlIHJvb3QtbGV2ZWwsIGJlY2F1c2Ugd2lsbCBiZSBkcmFnZ2VkLWFuZC1kcm9wcGVkIG91dHNpZGUgb2YgYSBjb21wb25lbnQgcm9vdCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIGZvciB6LWluZGV4ZXMgYXNzaWduZWQgbGF0ZXIgKi9cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyAvKiBkb3QgZXZlbnQgbmVlZHMgdGhpcyB0byB3aGVuIHNlbGVjdGVkICovXG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG59XG4vKiAtLS0gdGhlIHJlY3RhbmdsZSAoXCJibG9ja1wiKSBzdHlsZSBvZiBldmVudCAtLS0gKi9cbi5mYy1kYXlncmlkLWJsb2NrLWV2ZW50IC5mYy1ldmVudC10aW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuLmZjLWRheWdyaWQtYmxvY2stZXZlbnQgLmZjLWV2ZW50LXRpbWUsXG4gIC5mYy1kYXlncmlkLWJsb2NrLWV2ZW50IC5mYy1ldmVudC10aXRsZSB7XG4gICAgcGFkZGluZzogMXB4O1xuICB9XG4vKiAtLS0gdGhlIGRvdCBzdHlsZSBvZiBldmVudCAtLS0gKi9cbi5mYy1kYXlncmlkLWRvdC1ldmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAwXG5cbn1cbi5mYy1kYXlncmlkLWRvdC1ldmVudCAuZmMtZXZlbnQtdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtaW4td2lkdGg6IDA7IC8qIGltcG9ydGFudCBmb3IgYWxsb3dpbmcgdG8gc2hyaW5rIGFsbCB0aGUgd2F5ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuLmZjLWRheWdyaWQtZG90LWV2ZW50OmhvdmVyLFxuICAuZmMtZGF5Z3JpZC1kb3QtZXZlbnQuZmMtZXZlbnQtbWlycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbi5mYy1kYXlncmlkLWRvdC1ldmVudC5mYy1ldmVudC1zZWxlY3RlZDpiZWZvcmUge1xuICAgIC8qIGV4cGFuZCBoaXQgYXJlYSAqL1xuICAgIHRvcDogLTEwcHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgfVxuLmZjLWRheWdyaWQtZXZlbnQtZG90IHsgLyogdGhlIGFjdHVhbCBkb3QgKi9cbiAgbWFyZ2luOiAwIDRweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMzNzg4ZDg7XG4gIGJvcmRlcjogY2FsYyh2YXIoLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aCwgOHB4KSAvIDIpIHNvbGlkIHZhcigtLWZjLWV2ZW50LWJvcmRlci1jb2xvciwgIzM3ODhkOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aCwgOHB4KSAvIDIpO1xufVxuLyogLS0tIHNwYWNpbmcgYmV0d2VlbiB0aW1lIGFuZCB0aXRsZSAtLS0gKi9cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50IC5mYy1ldmVudC10aW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWRheWdyaWQtZXZlbnQgLmZjLWV2ZW50LXRpbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ 68202:
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.css ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n:root {\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n.fc-theme-standard .fc-list {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n.fc {\n\n  /* message when no events */\n\n}\n.fc .fc-list-empty {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; /* vertically aligns fc-list-empty-inner */\n  }\n.fc .fc-list-empty-cushion {\n    margin: 5em 0;\n  }\n.fc {\n\n  /* table within the scroller */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-table {\n    width: 100%;\n    border-style: hidden; /* kill outer border on theme */\n  }\n.fc .fc-list-table tr > * {\n    border-left: 0;\n    border-right: 0;\n  }\n.fc .fc-list-sticky .fc-list-day > * { /* the cells */\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      background: #fff;\n      background: #fff;\n      background: var(--fc-page-bg-color, #fff); /* for when headers are styled to be transparent and sticky */\n    }\n.fc {\n\n  /* only exists for aria reasons, hide for non-screen-readers */\n\n}\n.fc .fc-list-table thead {\n    position: absolute;\n    left: -10000px;\n  }\n.fc {\n\n  /* the table's border-style:hidden gets confused by hidden thead. force-hide top border of first cell */\n\n}\n.fc .fc-list-table tbody > tr:first-child th {\n    border-top: 0;\n  }\n.fc .fc-list-table th {\n    padding: 0; /* uses an inner-wrapper instead... */\n  }\n.fc .fc-list-table td,\n  .fc .fc-list-day-cushion {\n    padding: 8px 14px;\n  }\n.fc {\n\n\n  /* date heading rows */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-day-cushion:after {\n  content: \"\";\n  clear: both;\n  display: table; /* clear floating */\n    }\n.fc-theme-standard .fc-list-day-cushion {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n.fc-direction-ltr .fc-list-day-text,\n.fc-direction-rtl .fc-list-day-side-text {\n  float: left;\n}\n.fc-direction-ltr .fc-list-day-side-text,\n.fc-direction-rtl .fc-list-day-text {\n  float: right;\n}\n/* make the dot closer to the event title */\n.fc-direction-ltr .fc-list-table .fc-list-event-graphic { padding-right: 0 }\n.fc-direction-rtl .fc-list-table .fc-list-event-graphic { padding-left: 0 }\n.fc .fc-list-event.fc-event-forced-url {\n    cursor: pointer; /* whole row will seem clickable */\n  }\n.fc .fc-list-event:hover td {\n    background-color: #f5f5f5;\n    background-color: #f5f5f5;\n    background-color: var(--fc-list-event-hover-bg-color, #f5f5f5);\n  }\n.fc {\n\n  /* shrink certain cols */\n\n}\n.fc .fc-list-event-graphic,\n  .fc .fc-list-event-time {\n    white-space: nowrap;\n    width: 1px;\n  }\n.fc .fc-list-event-dot {\n    display: inline-block;\n    box-sizing: content-box;\n    width: 0;\n    height: 0;\n    border: 5px solid #3788d8;\n    border: calc(10px / 2) solid #3788d8;\n    border: calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color, #3788d8);\n    border-radius: 5px;\n    border-radius: calc(10px / 2);\n    border-radius: calc(var(--fc-list-event-dot-width, 10px) / 2);\n  }\n.fc {\n\n  /* reset <a> styling */\n\n}\n.fc .fc-list-event-title a {\n    color: inherit;\n    text-decoration: none;\n  }\n.fc {\n\n  /* underline link when hovering over any part of row */\n\n}\n.fc .fc-list-event.fc-event-forced-url:hover a {\n    text-decoration: underline;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQix1Q0FBdUM7QUFDekM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBOEM7SUFBOUMsOENBQThDO0VBQ2hEO0FBQ0Y7O0VBRUUsMkJBQTJCOztBQUU3QjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLDBDQUFzRTtJQUF0RSxzRUFBc0U7SUFDdEUsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUUsMENBQTBDO0VBQ2pFO0FBQ0Y7SUFDSSxhQUFhO0VBQ2Y7QUFDRjs7RUFFRSw4QkFBOEI7RUFDOUIseUdBQXlHOztBQUUzRztBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQixFQUFFLCtCQUErQjtFQUN2RDtBQUNGO0lBQ0ksY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDRix1Q0FBdUMsY0FBYztNQUMvQyx3QkFBZ0I7TUFBaEIsZ0JBQWdCO01BQ2hCLE1BQU07TUFDTixnQkFBZ0I7TUFDaEIsZ0JBQXlDO01BQXpDLHlDQUF5QyxFQUFFLDZEQUE2RDtJQUMxRztBQUNKOztFQUVFLDhEQUE4RDs7QUFFaEU7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0FBQ0Y7O0VBRUUsdUdBQXVHOztBQUV6RztBQUNBO0lBQ0ksYUFBYTtFQUNmO0FBQ0Y7SUFDSSxVQUFVLEVBQUUscUNBQXFDO0VBQ25EO0FBQ0Y7O0lBRUksaUJBQWlCO0VBQ25CO0FBQ0Y7OztFQUdFLHNCQUFzQjtFQUN0Qix5R0FBeUc7O0FBRTNHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBRSxtQkFBbUI7SUFDakM7QUFDSjtJQUNJLDBDQUEwQztJQUMxQywwQ0FBc0U7SUFBdEUsc0VBQXNFO0VBQ3hFO0FBQ0Y7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0EsMkNBQTJDO0FBQzNDLDBEQUEwRCxpQkFBaUI7QUFDM0UsMERBQTBELGdCQUFnQjtBQUMxRTtJQUNJLGVBQWUsRUFBRSxrQ0FBa0M7RUFDckQ7QUFDRjtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBOEQ7SUFBOUQsOERBQThEO0VBQ2hFO0FBQ0Y7O0VBRUUsd0JBQXdCOztBQUUxQjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsb0NBQWtHO0lBQWxHLGtHQUFrRztJQUNsRyxrQkFBa0I7SUFDbEIsNkJBQTZEO0lBQTdELDZEQUE2RDtFQUMvRDtBQUNGOztFQUVFLHNCQUFzQjs7QUFFeEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7QUFDRjs7RUFFRSxzREFBc0Q7O0FBRXhEO0FBQ0E7SUFDSSwwQkFBMEI7RUFDNUIiLCJmaWxlIjoibWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpyb290IHtcbiAgLS1mYy1saXN0LWV2ZW50LWRvdC13aWR0aDogMTBweDtcbiAgLS1mYy1saXN0LWV2ZW50LWhvdmVyLWJnLWNvbG9yOiAjZjVmNWY1O1xufVxuLmZjLXRoZW1lLXN0YW5kYXJkIC5mYy1saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZjLWJvcmRlci1jb2xvciwgI2RkZCk7XG4gIH1cbi5mYyB7XG5cbiAgLyogbWVzc2FnZSB3aGVuIG5vIGV2ZW50cyAqL1xuXG59XG4uZmMgLmZjLWxpc3QtZW1wdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1uZXV0cmFsLWJnLWNvbG9yLCByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMykpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIHZlcnRpY2FsbHkgYWxpZ25zIGZjLWxpc3QtZW1wdHktaW5uZXIgKi9cbiAgfVxuLmZjIC5mYy1saXN0LWVtcHR5LWN1c2hpb24ge1xuICAgIG1hcmdpbjogNWVtIDA7XG4gIH1cbi5mYyB7XG5cbiAgLyogdGFibGUgd2l0aGluIHRoZSBzY3JvbGxlciAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbn1cbi5mYyAuZmMtbGlzdC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47IC8qIGtpbGwgb3V0ZXIgYm9yZGVyIG9uIHRoZW1lICovXG4gIH1cbi5mYyAuZmMtbGlzdC10YWJsZSB0ciA+ICoge1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuLmZjIC5mYy1saXN0LXN0aWNreSAuZmMtbGlzdC1kYXkgPiAqIHsgLyogdGhlIGNlbGxzICovXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZjLXBhZ2UtYmctY29sb3IsICNmZmYpOyAvKiBmb3Igd2hlbiBoZWFkZXJzIGFyZSBzdHlsZWQgdG8gYmUgdHJhbnNwYXJlbnQgYW5kIHN0aWNreSAqL1xuICAgIH1cbi5mYyB7XG5cbiAgLyogb25seSBleGlzdHMgZm9yIGFyaWEgcmVhc29ucywgaGlkZSBmb3Igbm9uLXNjcmVlbi1yZWFkZXJzICovXG5cbn1cbi5mYyAuZmMtbGlzdC10YWJsZSB0aGVhZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMDAwMHB4O1xuICB9XG4uZmMge1xuXG4gIC8qIHRoZSB0YWJsZSdzIGJvcmRlci1zdHlsZTpoaWRkZW4gZ2V0cyBjb25mdXNlZCBieSBoaWRkZW4gdGhlYWQuIGZvcmNlLWhpZGUgdG9wIGJvcmRlciBvZiBmaXJzdCBjZWxsICovXG5cbn1cbi5mYyAuZmMtbGlzdC10YWJsZSB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHRoIHtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG4uZmMgLmZjLWxpc3QtdGFibGUgdGgge1xuICAgIHBhZGRpbmc6IDA7IC8qIHVzZXMgYW4gaW5uZXItd3JhcHBlciBpbnN0ZWFkLi4uICovXG4gIH1cbi5mYyAuZmMtbGlzdC10YWJsZSB0ZCxcbiAgLmZjIC5mYy1saXN0LWRheS1jdXNoaW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgfVxuLmZjIHtcblxuXG4gIC8qIGRhdGUgaGVhZGluZyByb3dzICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxufVxuLmZjIC5mYy1saXN0LWRheS1jdXNoaW9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlOyAvKiBjbGVhciBmbG9hdGluZyAqL1xuICAgIH1cbi5mYy10aGVtZS1zdGFuZGFyZCAuZmMtbGlzdC1kYXktY3VzaGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLW5ldXRyYWwtYmctY29sb3IsIHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKSk7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1saXN0LWRheS10ZXh0LFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWxpc3QtZGF5LXNpZGUtdGV4dCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmZjLWRpcmVjdGlvbi1sdHIgLmZjLWxpc3QtZGF5LXNpZGUtdGV4dCxcbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1saXN0LWRheS10ZXh0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLyogbWFrZSB0aGUgZG90IGNsb3NlciB0byB0aGUgZXZlbnQgdGl0bGUgKi9cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1saXN0LXRhYmxlIC5mYy1saXN0LWV2ZW50LWdyYXBoaWMgeyBwYWRkaW5nLXJpZ2h0OiAwIH1cbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1saXN0LXRhYmxlIC5mYy1saXN0LWV2ZW50LWdyYXBoaWMgeyBwYWRkaW5nLWxlZnQ6IDAgfVxuLmZjIC5mYy1saXN0LWV2ZW50LmZjLWV2ZW50LWZvcmNlZC11cmwge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogd2hvbGUgcm93IHdpbGwgc2VlbSBjbGlja2FibGUgKi9cbiAgfVxuLmZjIC5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLWxpc3QtZXZlbnQtaG92ZXItYmctY29sb3IsICNmNWY1ZjUpO1xuICB9XG4uZmMge1xuXG4gIC8qIHNocmluayBjZXJ0YWluIGNvbHMgKi9cblxufVxuLmZjIC5mYy1saXN0LWV2ZW50LWdyYXBoaWMsXG4gIC5mYyAuZmMtbGlzdC1ldmVudC10aW1lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxcHg7XG4gIH1cbi5mYyAuZmMtbGlzdC1ldmVudC1kb3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzM3ODhkODtcbiAgICBib3JkZXI6IGNhbGModmFyKC0tZmMtbGlzdC1ldmVudC1kb3Qtd2lkdGgsIDEwcHgpIC8gMikgc29saWQgdmFyKC0tZmMtZXZlbnQtYm9yZGVyLWNvbG9yLCAjMzc4OGQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1mYy1saXN0LWV2ZW50LWRvdC13aWR0aCwgMTBweCkgLyAyKTtcbiAgfVxuLmZjIHtcblxuICAvKiByZXNldCA8YT4gc3R5bGluZyAqL1xuXG59XG4uZmMgLmZjLWxpc3QtZXZlbnQtdGl0bGUgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4uZmMge1xuXG4gIC8qIHVuZGVybGluZSBsaW5rIHdoZW4gaG92ZXJpbmcgb3ZlciBhbnkgcGFydCBvZiByb3cgKi9cblxufVxuLmZjIC5mYy1saXN0LWV2ZW50LmZjLWV2ZW50LWZvcmNlZC11cmw6aG92ZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ 6152:
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.css ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*\nA VERTICAL event\n*/\n\n.fc-v-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n\n.fc-v-event .fc-event-main {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n    height: 100%;\n  }\n\n.fc-v-event .fc-event-main-frame {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n.fc-v-event .fc-event-time {\n    flex-grow: 0;\n    flex-shrink: 0;\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n.fc-v-event .fc-event-title-container { /* a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-height: 0; /* important for allowing to shrink all the way */\n  }\n\n.fc-v-event .fc-event-title { /* will have fc-sticky on it */\n    top: 0;\n    bottom: 0;\n    max-height: 100%; /* clip overflow */\n    overflow: hidden;\n  }\n\n.fc-v-event:not(.fc-event-start) {\n    border-top-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n.fc-v-event:not(.fc-event-end) {\n    border-bottom-width: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-v-event.fc-event-selected:before {\n    /* expand hit area */\n    left: -10px;\n    right: -10px;\n  }\n\n.fc-v-event {\n\n  /* resizer (mouse AND touch) */\n\n}\n\n.fc-v-event .fc-event-resizer-start {\n    cursor: n-resize;\n  }\n\n.fc-v-event .fc-event-resizer-end {\n    cursor: s-resize;\n  }\n\n.fc-v-event {\n\n  /* resizer for MOUSE */\n\n}\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer {\n      height: 8px;\n      height: 8px;\n      height: var(--fc-event-resizer-thickness, 8px);\n      left: 0;\n      right: 0;\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start {\n      top: -4px;\n      top: calc(8px / -2);\n      top: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(8px / -2);\n      bottom: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event {\n\n  /* resizer for TOUCH (when event is \"selected\") */\n\n}\n\n.fc-v-event.fc-event-selected .fc-event-resizer {\n      left: 50%;\n      margin-left: -4px;\n      margin-left: calc(8px / -2);\n      margin-left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-start {\n      top: -4px;\n      top: calc(8px / -2);\n      top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(8px / -2);\n      bottom: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc .fc-timegrid .fc-daygrid-body { /* the all-day daygrid within the timegrid view */\n    z-index: 2; /* put above the timegrid-body so that more-popover is above everything. TODO: better solution */\n  }\n\n.fc .fc-timegrid-divider {\n    padding: 0 0 2px; /* browsers get confused when you set height. use padding instead */\n  }\n\n.fc .fc-timegrid-body {\n    position: relative;\n    z-index: 1; /* scope the z-indexes of slots and cols */\n    min-height: 100%; /* fill height always, even when slat table doesn't grow */\n  }\n\n.fc .fc-timegrid-axis-chunk { /* for advanced ScrollGrid */\n    position: relative /* offset parent for now-indicator-container */\n\n  }\n\n.fc .fc-timegrid-axis-chunk > table {\n      position: relative;\n      z-index: 1; /* above the now-indicator-container */\n    }\n\n.fc .fc-timegrid-slots {\n    position: relative;\n    z-index: 1;\n  }\n\n.fc .fc-timegrid-slot { /* a <td> */\n    height: 1.5em;\n    border-bottom: 0 /* each cell owns its top border */\n  }\n\n.fc .fc-timegrid-slot:empty:before {\n      content: '\\00a0'; /* make sure there's at least an empty space to create height for height syncing */\n    }\n\n.fc .fc-timegrid-slot-minor {\n    border-top-style: dotted;\n  }\n\n.fc .fc-timegrid-slot-label-cushion {\n    display: inline-block;\n    white-space: nowrap;\n  }\n\n.fc .fc-timegrid-slot-label {\n    vertical-align: middle; /* vertical align the slots */\n  }\n\n.fc {\n\n\n  /* slots AND axis cells (top-left corner of view including the \"all-day\" text) */\n\n}\n\n.fc .fc-timegrid-axis-cushion,\n  .fc .fc-timegrid-slot-label-cushion {\n    padding: 0 4px;\n  }\n\n.fc {\n\n\n  /* axis cells (top-left corner of view including the \"all-day\" text) */\n  /* vertical align is more complicated, uses flexbox */\n\n}\n\n.fc .fc-timegrid-axis-frame-liquid {\n    height: 100%; /* will need liquid-hack in FF */\n  }\n\n.fc .fc-timegrid-axis-frame {\n    overflow: hidden;\n    display: flex;\n    align-items: center; /* vertical align */\n    justify-content: flex-end; /* horizontal align. matches text-align below */\n  }\n\n.fc .fc-timegrid-axis-cushion {\n    max-width: 60px; /* limits the width of the \"all-day\" text */\n    flex-shrink: 0; /* allows text to expand how it normally would, regardless of constrained width */\n  }\n\n.fc-direction-ltr .fc-timegrid-slot-label-frame {\n    text-align: right;\n  }\n\n.fc-direction-rtl .fc-timegrid-slot-label-frame {\n    text-align: left;\n  }\n\n.fc-liquid-hack .fc-timegrid-axis-frame-liquid {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n\n.fc .fc-timegrid-col.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n\n.fc .fc-timegrid-col-frame {\n    min-height: 100%; /* liquid-hack is below */\n    position: relative;\n  }\n\n.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n    }\n\n.fc-media-screen .fc-timegrid-cols {\n    position: absolute; /* no z-index. children will decide and go above slots */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0\n  }\n\n.fc-media-screen .fc-timegrid-cols > table {\n      height: 100%;\n    }\n\n.fc-media-screen .fc-timegrid-col-bg,\n  .fc-media-screen .fc-timegrid-col-events,\n  .fc-media-screen .fc-timegrid-now-indicator-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* bg */\n\n}\n\n.fc .fc-timegrid-col-bg {\n    z-index: 2; /* TODO: kill */\n  }\n\n.fc .fc-timegrid-col-bg .fc-non-business { z-index: 1 }\n\n.fc .fc-timegrid-col-bg .fc-bg-event { z-index: 2 }\n\n.fc .fc-timegrid-col-bg .fc-highlight { z-index: 3 }\n\n.fc .fc-timegrid-bg-harness {\n    position: absolute; /* top/bottom will be set by JS */\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* fg events */\n  /* (the mirror segs are put into a separate container with same classname, */\n  /* and they must be after the normal seg container to appear at a higher z-index) */\n\n}\n\n.fc .fc-timegrid-col-events {\n    z-index: 3;\n    /* child event segs have z-indexes that are scoped within this div */\n  }\n\n.fc {\n\n  /* now indicator */\n\n}\n\n.fc .fc-timegrid-now-indicator-container {\n    bottom: 0;\n    overflow: hidden; /* don't let overflow of lines/arrows cause unnecessary scrolling */\n    /* z-index is set on the individual elements */\n  }\n\n.fc-direction-ltr .fc-timegrid-col-events {\n    margin: 0 2.5% 0 2px;\n  }\n\n.fc-direction-rtl .fc-timegrid-col-events {\n    margin: 0 2px 0 2.5%;\n  }\n\n.fc-timegrid-event-harness {\n  position: absolute /* top/left/right/bottom will all be set by JS */\n}\n\n.fc-timegrid-event-harness > .fc-timegrid-event {\n    position: absolute; /* absolute WITHIN the harness */\n    top: 0; /* for when not yet positioned */\n    bottom: 0; /* \" */\n    left: 0;\n    right: 0;\n  }\n\n.fc-timegrid-event-harness-inset .fc-timegrid-event,\n.fc-timegrid-event.fc-event-mirror,\n.fc-timegrid-more-link {\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px var(--fc-page-bg-color, #fff);\n}\n\n.fc-timegrid-event,\n.fc-timegrid-more-link { /* events need to be root */\n  font-size: .85em;\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n  border-radius: 3px;\n}\n\n.fc-timegrid-event { /* events need to be root */\n  margin-bottom: 1px /* give some space from bottom */\n}\n\n.fc-timegrid-event .fc-event-main {\n    padding: 1px 1px 0;\n  }\n\n.fc-timegrid-event .fc-event-time {\n    white-space: nowrap;\n    font-size: .85em;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em);\n    margin-bottom: 1px;\n  }\n\n.fc-timegrid-event-short .fc-event-main-frame {\n    flex-direction: row;\n    overflow: hidden;\n  }\n\n.fc-timegrid-event-short .fc-event-time:after {\n    content: '\\00a0-\\00a0'; /* dash surrounded by non-breaking spaces */\n  }\n\n.fc-timegrid-event-short .fc-event-title {\n    font-size: .85em;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em)\n  }\n\n.fc-timegrid-more-link { /* does NOT inherit from fc-timegrid-event */\n  position: absolute;\n  z-index: 9999; /* hack */\n  color: inherit;\n  color: inherit;\n  color: var(--fc-more-link-text-color, inherit);\n  background: #d0d0d0;\n  background: #d0d0d0;\n  background: var(--fc-more-link-bg-color, #d0d0d0);\n  cursor: pointer;\n  margin-bottom: 1px; /* match space below fc-timegrid-event */\n}\n\n.fc-timegrid-more-link-inner { /* has fc-sticky */\n  padding: 3px 2px;\n  top: 0;\n}\n\n.fc-direction-ltr .fc-timegrid-more-link {\n    right: 0;\n  }\n\n.fc-direction-rtl .fc-timegrid-more-link {\n    left: 0;\n  }\n\n.fc {\n\n  /* line */\n\n}\n\n.fc .fc-timegrid-now-indicator-line {\n    position: absolute;\n    z-index: 4;\n    left: 0;\n    right: 0;\n    border-style: solid;\n    border-color: red;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n    border-width: 1px 0 0;\n  }\n\n.fc {\n\n  /* arrow */\n\n}\n\n.fc .fc-timegrid-now-indicator-arrow {\n    position: absolute;\n    z-index: 4;\n    margin-top: -5px; /* vertically center on top coordinate */\n    border-style: solid;\n    border-color: red;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n  }\n\n.fc-direction-ltr .fc-timegrid-now-indicator-arrow {\n    left: 0;\n\n    /* triangle pointing right. TODO: mixin */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n\n.fc-direction-rtl .fc-timegrid-now-indicator-arrow {\n    right: 0;\n\n    /* triangle pointing left. TODO: mixin */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Q0FFQzs7QUFFRCxjQUFjLDRCQUE0QjtFQUN4QyxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHlCQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQseUJBQXlCO0VBQ3pCLHlCQUFrRDtFQUFsRDs7QUFFRjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUF1QztJQUF2Qyx1Q0FBdUM7SUFDdkMsWUFBWTtFQUNkOztBQUVGO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBRUYsd0NBQXdDLHVDQUF1QztJQUMzRSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWEsRUFBRSxpREFBaUQ7RUFDbEU7O0FBRUYsOEJBQThCLDhCQUE4QjtJQUN4RCxNQUFNO0lBQ04sU0FBUztJQUNULGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1Qjs7QUFFRjtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9COztBQUVGO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUY7O0VBRUUsOEJBQThCOztBQUVoQzs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGdCQUFnQjtFQUNsQjs7QUFFRjs7RUFFRSxzQkFBc0I7O0FBRXhCOztBQUVBO01BQ00sV0FBVztNQUNYLFdBQThDO01BQTlDLDhDQUE4QztNQUM5QyxPQUFPO01BQ1AsUUFBUTtJQUNWOztBQUVKO01BQ00sU0FBUztNQUNULG1CQUFzRDtNQUF0RCxzREFBc0Q7SUFDeEQ7O0FBRUo7TUFDTSxZQUFZO01BQ1osc0JBQXlEO01BQXpELHlEQUF5RDtJQUMzRDs7QUFFSjs7RUFFRSxpREFBaUQ7O0FBRW5EOztBQUVBO01BQ00sU0FBUztNQUNULGlCQUFpQjtNQUNqQiwyQkFBb0U7TUFBcEUsb0VBQW9FO0lBQ3RFOztBQUVKO01BQ00sU0FBUztNQUNULG1CQUE0RDtNQUE1RCw0REFBNEQ7SUFDOUQ7O0FBRUo7TUFDTSxZQUFZO01BQ1osc0JBQStEO01BQS9ELCtEQUErRDtJQUNqRTs7QUFDSixvQ0FBb0MsaURBQWlEO0lBQ2pGLFVBQVUsRUFBRSxnR0FBZ0c7RUFDOUc7O0FBQ0Y7SUFDSSxnQkFBZ0IsRUFBRSxtRUFBbUU7RUFDdkY7O0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFFLDBDQUEwQztJQUN0RCxnQkFBZ0IsRUFBRSwwREFBMEQ7RUFDOUU7O0FBQ0YsOEJBQThCLDRCQUE0QjtJQUN0RCxpQkFBaUIsRUFBRSw4Q0FBOEM7O0VBRW5FOztBQUNGO01BQ00sa0JBQWtCO01BQ2xCLFVBQVUsRUFBRSxzQ0FBc0M7SUFDcEQ7O0FBQ0o7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztBQUNGLHdCQUF3QixXQUFXO0lBQy9CLGFBQWE7SUFDYixlQUFlLEVBQUUsa0NBQWtDO0VBQ3JEOztBQUNGO01BQ00sZ0JBQWdCLEVBQUUsa0ZBQWtGO0lBQ3RHOztBQUNKO0lBQ0ksd0JBQXdCO0VBQzFCOztBQUNGO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7QUFDRjtJQUNJLHNCQUFzQixFQUFFLDZCQUE2QjtFQUN2RDs7QUFDRjs7O0VBR0UsZ0ZBQWdGOztBQUVsRjs7QUFDQTs7SUFFSSxjQUFjO0VBQ2hCOztBQUNGOzs7RUFHRSxzRUFBc0U7RUFDdEUscURBQXFEOztBQUV2RDs7QUFDQTtJQUNJLFlBQVksRUFBRSxnQ0FBZ0M7RUFDaEQ7O0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4Qyx5QkFBeUIsRUFBRSwrQ0FBK0M7RUFDNUU7O0FBQ0Y7SUFDSSxlQUFlLEVBQUUsMkNBQTJDO0lBQzVELGNBQWMsRUFBRSxpRkFBaUY7RUFDbkc7O0FBQ0Y7SUFDSSxpQkFBaUI7RUFDbkI7O0FBQ0Y7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBQ0Y7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUDs7QUFDRjtNQUNNLDBDQUEwQztNQUMxQywwQ0FBb0U7TUFBcEUsb0VBQW9FO0lBQ3RFOztBQUNKO0lBQ0ksZ0JBQWdCLEVBQUUseUJBQXlCO0lBQzNDLGtCQUFrQjtFQUNwQjs7QUFDRjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztJQUNMOztBQUNKO0lBQ0ksa0JBQWtCLEVBQUUsd0RBQXdEO0lBQzVFLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSO0VBQ0Y7O0FBQ0Y7TUFDTSxZQUFZO0lBQ2Q7O0FBQ0o7OztJQUdJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7RUFDVjs7QUFDRjs7RUFFRSxPQUFPOztBQUVUOztBQUNBO0lBQ0ksVUFBVSxFQUFFLGVBQWU7RUFDN0I7O0FBQ0YsMkNBQTJDLFdBQVc7O0FBQ3RELHVDQUF1QyxXQUFXOztBQUNsRCx3Q0FBd0MsV0FBVzs7QUFDbkQ7SUFDSSxrQkFBa0IsRUFBRSxpQ0FBaUM7SUFDckQsT0FBTztJQUNQLFFBQVE7RUFDVjs7QUFDRjs7RUFFRSxjQUFjO0VBQ2QsNEVBQTRFO0VBQzVFLG1GQUFtRjs7QUFFckY7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysb0VBQW9FO0VBQ3RFOztBQUNGOztFQUVFLGtCQUFrQjs7QUFFcEI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCLEVBQUUsbUVBQW1FO0lBQ3JGLDhDQUE4QztFQUNoRDs7QUFDRjtJQUNJLG9CQUFvQjtFQUN0Qjs7QUFDRjtJQUNJLG9CQUFvQjtFQUN0Qjs7QUFDRjtFQUNFLGlCQUFpQixFQUFFLGdEQUFnRDtBQUNyRTs7QUFDQTtJQUNJLGtCQUFrQixFQUFFLGdDQUFnQztJQUNwRCxNQUFNLEVBQUUsZ0NBQWdDO0lBQ3hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBQ0Y7OztFQUdFLGdDQUFnQztFQUNoQyxnQ0FBeUQ7RUFBekQseURBQXlEO0FBQzNEOztBQUNBO3lCQUN5QiwyQkFBMkI7RUFDbEQsZ0JBQWdCO0VBQ2hCLGdCQUEyQztFQUEzQywyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCOztBQUNBLHFCQUFxQiwyQkFBMkI7RUFDOUMsaUJBQWlCLEVBQUUsZ0NBQWdDO0FBQ3JEOztBQUNBO0lBQ0ksa0JBQWtCO0VBQ3BCOztBQUNGO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBMkM7SUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtFQUNwQjs7QUFDRjtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBQ0Y7SUFDSSxzQkFBc0IsRUFBRSwyQ0FBMkM7RUFDckU7O0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQTBDO0lBQTFDO0VBQ0Y7O0FBQ0YseUJBQXlCLDRDQUE0QztFQUNuRSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFFLFNBQVM7RUFDeEIsY0FBYztFQUNkLGNBQThDO0VBQTlDLDhDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsbUJBQWlEO0VBQWpELGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUUsd0NBQXdDO0FBQzlEOztBQUNBLCtCQUErQixrQkFBa0I7RUFDL0MsZ0JBQWdCO0VBQ2hCLE1BQU07QUFDUjs7QUFDQTtJQUNJLFFBQVE7RUFDVjs7QUFDRjtJQUNJLE9BQU87RUFDVDs7QUFDRjs7RUFFRSxTQUFTOztBQUVYOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWdEO0lBQWhELGdEQUFnRDtJQUNoRCxxQkFBcUI7RUFDdkI7O0FBQ0Y7O0VBRUUsVUFBVTs7QUFFWjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWdEO0lBQWhELGdEQUFnRDtFQUNsRDs7QUFDRjtJQUNJLE9BQU87O0lBRVAseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDOztBQUNGO0lBQ0ksUUFBUTs7SUFFUix3Q0FBd0M7SUFDeEMsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoibWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG5BIFZFUlRJQ0FMIGV2ZW50XG4qL1xuXG4uZmMtdi1ldmVudCB7IC8qIGFsbG93ZWQgdG8gYmUgdG9wLWxldmVsICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzc4OGQ4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mYy1ldmVudC1ib3JkZXItY29sb3IsICMzNzg4ZDgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4OGQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1ldmVudC1iZy1jb2xvciwgIzM3ODhkOClcblxufVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtbWFpbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHZhcigtLWZjLWV2ZW50LXRleHQtY29sb3IsICNmZmYpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtbWFpbi1mcmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtdGltZSB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtdGl0bGUtY29udGFpbmVyIHsgLyogYSBjb250YWluZXIgZm9yIHRoZSBzdGlja3kgY3VzaGlvbiAqL1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtaW4taGVpZ2h0OiAwOyAvKiBpbXBvcnRhbnQgZm9yIGFsbG93aW5nIHRvIHNocmluayBhbGwgdGhlIHdheSAqL1xuICB9XG5cbi5mYy12LWV2ZW50IC5mYy1ldmVudC10aXRsZSB7IC8qIHdpbGwgaGF2ZSBmYy1zdGlja3kgb24gaXQgKi9cbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7IC8qIGNsaXAgb3ZlcmZsb3cgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi5mYy12LWV2ZW50Om5vdCguZmMtZXZlbnQtc3RhcnQpIHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1lbmQpIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuLmZjLXYtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAvKiBleHBhbmQgaGl0IGFyZWEgKi9cbiAgICBsZWZ0OiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gIH1cblxuLmZjLXYtZXZlbnQge1xuXG4gIC8qIHJlc2l6ZXIgKG1vdXNlIEFORCB0b3VjaCkgKi9cblxufVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtcmVzaXplci1zdGFydCB7XG4gICAgY3Vyc29yOiBuLXJlc2l6ZTtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtcmVzaXplci1lbmQge1xuICAgIGN1cnNvcjogcy1yZXNpemU7XG4gIH1cblxuLmZjLXYtZXZlbnQge1xuXG4gIC8qIHJlc2l6ZXIgZm9yIE1PVVNFICovXG5cbn1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXIge1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBoZWlnaHQ6IHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItdGhpY2tuZXNzLCA4cHgpO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItc3RhcnQge1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgdG9wOiBjYWxjKHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItdGhpY2tuZXNzLCA4cHgpIC8gLTIpO1xuICAgIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItZW5kIHtcbiAgICAgIGJvdHRvbTogLTRweDtcbiAgICAgIGJvdHRvbTogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLXRoaWNrbmVzcywgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50IHtcblxuICAvKiByZXNpemVyIGZvciBUT1VDSCAod2hlbiBldmVudCBpcyBcInNlbGVjdGVkXCIpICovXG5cbn1cblxuLmZjLXYtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQgLmZjLWV2ZW50LXJlc2l6ZXIge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50LmZjLWV2ZW50LXNlbGVjdGVkIC5mYy1ldmVudC1yZXNpemVyLXN0YXJ0IHtcbiAgICAgIHRvcDogLTRweDtcbiAgICAgIHRvcDogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50LmZjLWV2ZW50LXNlbGVjdGVkIC5mYy1ldmVudC1yZXNpemVyLWVuZCB7XG4gICAgICBib3R0b206IC00cHg7XG4gICAgICBib3R0b206IGNhbGModmFyKC0tZmMtZXZlbnQtcmVzaXplci1kb3QtdG90YWwtd2lkdGgsIDhweCkgLyAtMik7XG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZCAuZmMtZGF5Z3JpZC1ib2R5IHsgLyogdGhlIGFsbC1kYXkgZGF5Z3JpZCB3aXRoaW4gdGhlIHRpbWVncmlkIHZpZXcgKi9cbiAgICB6LWluZGV4OiAyOyAvKiBwdXQgYWJvdmUgdGhlIHRpbWVncmlkLWJvZHkgc28gdGhhdCBtb3JlLXBvcG92ZXIgaXMgYWJvdmUgZXZlcnl0aGluZy4gVE9ETzogYmV0dGVyIHNvbHV0aW9uICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtZGl2aWRlciB7XG4gICAgcGFkZGluZzogMCAwIDJweDsgLyogYnJvd3NlcnMgZ2V0IGNvbmZ1c2VkIHdoZW4geW91IHNldCBoZWlnaHQuIHVzZSBwYWRkaW5nIGluc3RlYWQgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTsgLyogc2NvcGUgdGhlIHotaW5kZXhlcyBvZiBzbG90cyBhbmQgY29scyAqL1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IC8qIGZpbGwgaGVpZ2h0IGFsd2F5cywgZXZlbiB3aGVuIHNsYXQgdGFibGUgZG9lc24ndCBncm93ICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtYXhpcy1jaHVuayB7IC8qIGZvciBhZHZhbmNlZCBTY3JvbGxHcmlkICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIC8qIG9mZnNldCBwYXJlbnQgZm9yIG5vdy1pbmRpY2F0b3ItY29udGFpbmVyICovXG5cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWNodW5rID4gdGFibGUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTsgLyogYWJvdmUgdGhlIG5vdy1pbmRpY2F0b3ItY29udGFpbmVyICovXG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZC1zbG90cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdCB7IC8qIGEgPHRkPiAqL1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMCAvKiBlYWNoIGNlbGwgb3ducyBpdHMgdG9wIGJvcmRlciAqL1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLXNsb3Q6ZW1wdHk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwYTAnOyAvKiBtYWtlIHN1cmUgdGhlcmUncyBhdCBsZWFzdCBhbiBlbXB0eSBzcGFjZSB0byBjcmVhdGUgaGVpZ2h0IGZvciBoZWlnaHQgc3luY2luZyAqL1xuICAgIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdC1taW5vciB7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogZG90dGVkO1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLXNsb3QtbGFiZWwtY3VzaGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdC1sYWJlbCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogdmVydGljYWwgYWxpZ24gdGhlIHNsb3RzICovXG4gIH1cbi5mYyB7XG5cblxuICAvKiBzbG90cyBBTkQgYXhpcyBjZWxscyAodG9wLWxlZnQgY29ybmVyIG9mIHZpZXcgaW5jbHVkaW5nIHRoZSBcImFsbC1kYXlcIiB0ZXh0KSAqL1xuXG59XG4uZmMgLmZjLXRpbWVncmlkLWF4aXMtY3VzaGlvbixcbiAgLmZjIC5mYy10aW1lZ3JpZC1zbG90LWxhYmVsLWN1c2hpb24ge1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICB9XG4uZmMge1xuXG5cbiAgLyogYXhpcyBjZWxscyAodG9wLWxlZnQgY29ybmVyIG9mIHZpZXcgaW5jbHVkaW5nIHRoZSBcImFsbC1kYXlcIiB0ZXh0KSAqL1xuICAvKiB2ZXJ0aWNhbCBhbGlnbiBpcyBtb3JlIGNvbXBsaWNhdGVkLCB1c2VzIGZsZXhib3ggKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWZyYW1lLWxpcXVpZCB7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiB3aWxsIG5lZWQgbGlxdWlkLWhhY2sgaW4gRkYgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWZyYW1lIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogdmVydGljYWwgYWxpZ24gKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBob3Jpem9udGFsIGFsaWduLiBtYXRjaGVzIHRleHQtYWxpZ24gYmVsb3cgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWN1c2hpb24ge1xuICAgIG1heC13aWR0aDogNjBweDsgLyogbGltaXRzIHRoZSB3aWR0aCBvZiB0aGUgXCJhbGwtZGF5XCIgdGV4dCAqL1xuICAgIGZsZXgtc2hyaW5rOiAwOyAvKiBhbGxvd3MgdGV4dCB0byBleHBhbmQgaG93IGl0IG5vcm1hbGx5IHdvdWxkLCByZWdhcmRsZXNzIG9mIGNvbnN0cmFpbmVkIHdpZHRoICovXG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy10aW1lZ3JpZC1zbG90LWxhYmVsLWZyYW1lIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLXRpbWVncmlkLXNsb3QtbGFiZWwtZnJhbWUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbi5mYy1saXF1aWQtaGFjayAuZmMtdGltZWdyaWQtYXhpcy1mcmFtZS1saXF1aWQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLWNvbC5mYy1kYXktdG9kYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMCwgNDAsIDAuMTUpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmMtdG9kYXktYmctY29sb3IsIHJnYmEoMjU1LCAyMjAsIDQwLCAwLjE1KSk7XG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtZnJhbWUge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IC8qIGxpcXVpZC1oYWNrIGlzIGJlbG93ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4uZmMtbWVkaWEtc2NyZWVuLmZjLWxpcXVpZC1oYWNrIC5mYy10aW1lZ3JpZC1jb2wtZnJhbWUge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAgIH1cbi5mYy1tZWRpYS1zY3JlZW4gLmZjLXRpbWVncmlkLWNvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogbm8gei1pbmRleC4gY2hpbGRyZW4gd2lsbCBkZWNpZGUgYW5kIGdvIGFib3ZlIHNsb3RzICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwXG4gIH1cbi5mYy1tZWRpYS1zY3JlZW4gLmZjLXRpbWVncmlkLWNvbHMgPiB0YWJsZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuLmZjLW1lZGlhLXNjcmVlbiAuZmMtdGltZWdyaWQtY29sLWJnLFxuICAuZmMtbWVkaWEtc2NyZWVuIC5mYy10aW1lZ3JpZC1jb2wtZXZlbnRzLFxuICAuZmMtbWVkaWEtc2NyZWVuIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4uZmMge1xuXG4gIC8qIGJnICovXG5cbn1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIHtcbiAgICB6LWluZGV4OiAyOyAvKiBUT0RPOiBraWxsICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIC5mYy1ub24tYnVzaW5lc3MgeyB6LWluZGV4OiAxIH1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIC5mYy1iZy1ldmVudCB7IHotaW5kZXg6IDIgfVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtYmcgLmZjLWhpZ2hsaWdodCB7IHotaW5kZXg6IDMgfVxuLmZjIC5mYy10aW1lZ3JpZC1iZy1oYXJuZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIHRvcC9ib3R0b20gd2lsbCBiZSBzZXQgYnkgSlMgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4uZmMge1xuXG4gIC8qIGZnIGV2ZW50cyAqL1xuICAvKiAodGhlIG1pcnJvciBzZWdzIGFyZSBwdXQgaW50byBhIHNlcGFyYXRlIGNvbnRhaW5lciB3aXRoIHNhbWUgY2xhc3NuYW1lLCAqL1xuICAvKiBhbmQgdGhleSBtdXN0IGJlIGFmdGVyIHRoZSBub3JtYWwgc2VnIGNvbnRhaW5lciB0byBhcHBlYXIgYXQgYSBoaWdoZXIgei1pbmRleCkgKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtZXZlbnRzIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIC8qIGNoaWxkIGV2ZW50IHNlZ3MgaGF2ZSB6LWluZGV4ZXMgdGhhdCBhcmUgc2NvcGVkIHdpdGhpbiB0aGlzIGRpdiAqL1xuICB9XG4uZmMge1xuXG4gIC8qIG5vdyBpbmRpY2F0b3IgKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIGRvbid0IGxldCBvdmVyZmxvdyBvZiBsaW5lcy9hcnJvd3MgY2F1c2UgdW5uZWNlc3Nhcnkgc2Nyb2xsaW5nICovXG4gICAgLyogei1pbmRleCBpcyBzZXQgb24gdGhlIGluZGl2aWR1YWwgZWxlbWVudHMgKi9cbiAgfVxuLmZjLWRpcmVjdGlvbi1sdHIgLmZjLXRpbWVncmlkLWNvbC1ldmVudHMge1xuICAgIG1hcmdpbjogMCAyLjUlIDAgMnB4O1xuICB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtdGltZWdyaWQtY29sLWV2ZW50cyB7XG4gICAgbWFyZ2luOiAwIDJweCAwIDIuNSU7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlIC8qIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSB3aWxsIGFsbCBiZSBzZXQgYnkgSlMgKi9cbn1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzID4gLmZjLXRpbWVncmlkLWV2ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGFic29sdXRlIFdJVEhJTiB0aGUgaGFybmVzcyAqL1xuICAgIHRvcDogMDsgLyogZm9yIHdoZW4gbm90IHlldCBwb3NpdGlvbmVkICovXG4gICAgYm90dG9tOiAwOyAvKiBcIiAqL1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzLWluc2V0IC5mYy10aW1lZ3JpZC1ldmVudCxcbi5mYy10aW1lZ3JpZC1ldmVudC5mYy1ldmVudC1taXJyb3IsXG4uZmMtdGltZWdyaWQtbW9yZS1saW5rIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCB2YXIoLS1mYy1wYWdlLWJnLWNvbG9yLCAjZmZmKTtcbn1cbi5mYy10aW1lZ3JpZC1ldmVudCxcbi5mYy10aW1lZ3JpZC1tb3JlLWxpbmsgeyAvKiBldmVudHMgbmVlZCB0byBiZSByb290ICovXG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5mYy10aW1lZ3JpZC1ldmVudCB7IC8qIGV2ZW50cyBuZWVkIHRvIGJlIHJvb3QgKi9cbiAgbWFyZ2luLWJvdHRvbTogMXB4IC8qIGdpdmUgc29tZSBzcGFjZSBmcm9tIGJvdHRvbSAqL1xufVxuLmZjLXRpbWVncmlkLWV2ZW50IC5mYy1ldmVudC1tYWluIHtcbiAgICBwYWRkaW5nOiAxcHggMXB4IDA7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudCAuZmMtZXZlbnQtdGltZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IC44NWVtO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICB9XG4uZmMtdGltZWdyaWQtZXZlbnQtc2hvcnQgLmZjLWV2ZW50LW1haW4tZnJhbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuLmZjLXRpbWVncmlkLWV2ZW50LXNob3J0IC5mYy1ldmVudC10aW1lOmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMGEwLVxcMDBhMCc7IC8qIGRhc2ggc3Vycm91bmRlZCBieSBub24tYnJlYWtpbmcgc3BhY2VzICovXG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1zaG9ydCAuZmMtZXZlbnQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgZm9udC1zaXplOiB2YXIoLS1mYy1zbWFsbC1mb250LXNpemUsIC44NWVtKVxuICB9XG4uZmMtdGltZWdyaWQtbW9yZS1saW5rIHsgLyogZG9lcyBOT1QgaW5oZXJpdCBmcm9tIGZjLXRpbWVncmlkLWV2ZW50ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTsgLyogaGFjayAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWZjLW1vcmUtbGluay10ZXh0LWNvbG9yLCBpbmhlcml0KTtcbiAgYmFja2dyb3VuZDogI2QwZDBkMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZmMtbW9yZS1saW5rLWJnLWNvbG9yLCAjZDBkMGQwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7IC8qIG1hdGNoIHNwYWNlIGJlbG93IGZjLXRpbWVncmlkLWV2ZW50ICovXG59XG4uZmMtdGltZWdyaWQtbW9yZS1saW5rLWlubmVyIHsgLyogaGFzIGZjLXN0aWNreSAqL1xuICBwYWRkaW5nOiAzcHggMnB4O1xuICB0b3A6IDA7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtdGltZWdyaWQtbW9yZS1saW5rIHtcbiAgICByaWdodDogMDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLXRpbWVncmlkLW1vcmUtbGluayB7XG4gICAgbGVmdDogMDtcbiAgfVxuLmZjIHtcblxuICAvKiBsaW5lICovXG5cbn1cbi5mYyAuZmMtdGltZWdyaWQtbm93LWluZGljYXRvci1saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mYy1ub3ctaW5kaWNhdG9yLWNvbG9yLCByZWQpO1xuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbiAgfVxuLmZjIHtcblxuICAvKiBhcnJvdyAqL1xuXG59XG4uZmMgLmZjLXRpbWVncmlkLW5vdy1pbmRpY2F0b3ItYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIG1hcmdpbi10b3A6IC01cHg7IC8qIHZlcnRpY2FsbHkgY2VudGVyIG9uIHRvcCBjb29yZGluYXRlICovXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZjLW5vdy1pbmRpY2F0b3ItY29sb3IsIHJlZCk7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWFycm93IHtcbiAgICBsZWZ0OiAwO1xuXG4gICAgLyogdHJpYW5nbGUgcG9pbnRpbmcgcmlnaHQuIFRPRE86IG1peGluICovXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNnB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtdGltZWdyaWQtbm93LWluZGljYXRvci1hcnJvdyB7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAvKiB0cmlhbmdsZSBwb2ludGluZyBsZWZ0LiBUT0RPOiBtaXhpbiAqL1xuICAgIGJvcmRlci13aWR0aDogNXB4IDZweCA1cHggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=src_app_views_calendar_calendar_module_ts-es2015.js.map