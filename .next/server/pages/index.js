(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Blockchain\\fsc\\pages\\index.js";


 // import web3 from '../ethereum/web3';
// import {Link} from '../routes';

class ShowEntity extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    const Farmer = "Farmer";
    const Manufacturer = "Manufacturer";
    const Distributer = "Distributer";
    const Retailer = "Retailer";
    const Customer = "Customer";
    return {
      Farmer,
      Manufacturer,
      Distributer,
      Retailer,
      Customer
    };
  }

  renderCards() {
    const {
      Farmer,
      Manufacturer,
      Distributer,
      Retailer,
      Customer
    } = this.props;
    const items = [{
      href: "/Farmer/signInOrSignUp",
      header: Farmer,
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      href: "/Manager/signInOrSignUp",
      header: Manufacturer,
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: Distributer,
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: Retailer,
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: Customer,
      style: {
        overflowWrap: 'break-word'
      }
    }];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 16
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("center", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 30
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Users"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowEntity);

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJTaG93RW50aXR5IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJGYXJtZXIiLCJNYW51ZmFjdHVyZXIiLCJEaXN0cmlidXRlciIsIlJldGFpbGVyIiwiQ3VzdG9tZXIiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaHJlZiIsImhlYWRlciIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLDRDQUF6QixDQUFtQztBQUUvQixlQUFhQyxlQUFiLENBQTZCQyxLQUE3QixFQUFtQztBQUMvQixVQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLFVBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLFVBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUVBLFdBQU87QUFBRUosWUFBRjtBQUFVQyxrQkFBVjtBQUF3QkMsaUJBQXhCO0FBQXFDQyxjQUFyQztBQUErQ0M7QUFBL0MsS0FBUDtBQUNIOztBQUVEQyxhQUFXLEdBQUU7QUFFVCxVQUFNO0FBQ0ZMLFlBREU7QUFFRkMsa0JBRkU7QUFHRkMsaUJBSEU7QUFJRkMsY0FKRTtBQUtGQztBQUxFLFFBTUYsS0FBS0wsS0FOVDtBQVFBLFVBQU1PLEtBQUssR0FBRyxDQUNWO0FBQ0lDLFVBQUksRUFBRSx3QkFEVjtBQUVJQyxZQUFNLEVBQUVSLE1BRlo7QUFHSVMsV0FBSyxFQUFFO0FBQUNDLG9CQUFZLEVBQUU7QUFBZjtBQUhYLEtBRFUsRUFNVjtBQUNJSCxVQUFJLEVBQUUseUJBRFY7QUFFSUMsWUFBTSxFQUFFUCxZQUZaO0FBR0lRLFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFFO0FBQWY7QUFIWCxLQU5VLEVBVVY7QUFDSUYsWUFBTSxFQUFFTixXQURaO0FBRUlPLFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFFO0FBQWY7QUFGWCxLQVZVLEVBYVY7QUFDSUYsWUFBTSxFQUFFTCxRQURaO0FBRUlNLFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFFO0FBQWY7QUFGWCxLQWJVLEVBZ0JWO0FBQ0lGLFlBQU0sRUFBRUosUUFEWjtBQUVJSyxXQUFLLEVBQUU7QUFBQ0Msb0JBQVksRUFBRTtBQUFmO0FBRlgsS0FoQlUsQ0FBZDtBQXFCQSx3QkFBTyw4REFBQyx5REFBRDtBQUFZLFdBQUssRUFBRUo7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBRUg7O0FBRURLLFFBQU0sR0FBRztBQUNMLHdCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEYixlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIQSxFQUtTLEtBQUtOLFdBQUwsRUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFZSDs7QUE1RDhCOztBQStEbkMsK0RBQWVULFVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7Q2FyZCwgR3JpZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbi8vIGltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG4vLyBpbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBTaG93RW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgRmFybWVyID0gXCJGYXJtZXJcIjtcclxuICAgICAgICBjb25zdCBNYW51ZmFjdHVyZXIgPSBcIk1hbnVmYWN0dXJlclwiO1xyXG4gICAgICAgIGNvbnN0IERpc3RyaWJ1dGVyID0gXCJEaXN0cmlidXRlclwiO1xyXG4gICAgICAgIGNvbnN0IFJldGFpbGVyID0gXCJSZXRhaWxlclwiO1xyXG4gICAgICAgIGNvbnN0IEN1c3RvbWVyID0gXCJDdXN0b21lclwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7IEZhcm1lciwgTWFudWZhY3R1cmVyLCBEaXN0cmlidXRlciwgUmV0YWlsZXIsIEN1c3RvbWVyIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZHMoKXtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBGYXJtZXIsXHJcbiAgICAgICAgICAgIE1hbnVmYWN0dXJlcixcclxuICAgICAgICAgICAgRGlzdHJpYnV0ZXIsXHJcbiAgICAgICAgICAgIFJldGFpbGVyLFxyXG4gICAgICAgICAgICBDdXN0b21lclxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvRmFybWVyL3NpZ25Jbk9yU2lnblVwXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IEZhcm1lcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL01hbmFnZXIvc2lnbkluT3JTaWduVXBcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogTWFudWZhY3R1cmVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IERpc3RyaWJ1dGVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFJldGFpbGVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IEN1c3RvbWVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VXNlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93RW50aXR5O1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9