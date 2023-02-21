(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Blockchain\\foodchain-2\\components\\Header.js";




const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    style: {
      marginTop: '10px'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {
      route: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "item",
        children: "FoodChain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Menu, {
      position: "right",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "item",
        children: "View Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {
        route: "/campaigns/new",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "item",
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Blockchain\\foodchain-2\\components\\Layout.js";





const Layout = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

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

var _jsxFileName = "C:\\Users\\user\\Desktop\\Blockchain\\foodchain-2\\pages\\index.js";


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
      },
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "blue",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 70
      }, this)]
    }, {
      href: "/Manager/signInOrSignUp",
      header: Manufacturer,
      style: {
        overflowWrap: 'break-word'
      },
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "blue",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 70
      }, this)]
    }, {
      header: Distributer,
      style: {
        overflowWrap: 'break-word'
      },
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "blue",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 70
      }, this)]
    }, {
      header: Retailer,
      style: {
        overflowWrap: 'break-word'
      },
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "blue",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 70
      }, this)]
    }, {
      header: Customer,
      style: {
        overflowWrap: 'break-word'
      },
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "blue",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 70
      }, this)]
    }];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
      centered: true,
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 16
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("center", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 30
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Users"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowEntity);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/Manager/signInOrSignUp', '/Manager/signInOrSignUp').add('/Manager/signIn', '/Manager/signIn').add('/Manager/viewItems', '/Manager/viewItems').add('/Manager/signUp', '/Manager/signUp').add("/Manager/:id", "/Manager/item").add('/Farmer/signInOrSignUp', '/Farmer/signInOrSignUp').add('/Farmer/signIn', '/Farmer/signIn').add('/Farmer/signUp', '/Farmer/signUp').add("/Farmer/:address", "/Farmer/viewItems").add("/Farmer/:address/new", "/Farmer/new");
module.exports = routes;

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (function() {



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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwibWFyZ2luVG9wIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlNob3dFbnRpdHkiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJGYXJtZXIiLCJNYW51ZmFjdHVyZXIiLCJEaXN0cmlidXRlciIsIlJldGFpbGVyIiwiQ3VzdG9tZXIiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaHJlZiIsImhlYWRlciIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZXh0cmEiLCJyZW5kZXIiLCJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLHNCQUNJLDhEQUFDLG1EQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQWI7QUFBQSw0QkFDSSw4REFBQyx5Q0FBRDtBQUFNLFdBQUssRUFBQyxHQUFaO0FBQUEsNkJBQ0E7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FB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RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhBLEVBS1MsS0FBS1AsV0FBTCxFQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVlIOztBQXJFOEI7O0FBd0VuQywrREFBZVIsVUFBZixFOzs7Ozs7Ozs7O0FDOUVBLE1BQU1nQixNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBUCxFQUFmOztBQUVBRCxNQUFNLENBQ0RFLEdBREwsQ0FDUyx5QkFEVCxFQUNvQyx5QkFEcEMsRUFFS0EsR0FGTCxDQUVTLGlCQUZULEVBRTJCLGlCQUYzQixFQUdLQSxHQUhMLENBR1Msb0JBSFQsRUFHOEIsb0JBSDlCLEVBSUtBLEdBSkwsQ0FJUyxpQkFKVCxFQUkyQixpQkFKM0IsRUFLS0EsR0FMTCxDQUtTLGNBTFQsRUFLeUIsZUFMekIsRUFNS0EsR0FOTCxDQU1TLHdCQU5ULEVBTW1DLHdCQU5uQyxFQU9LQSxHQVBMLENBT1MsZ0JBUFQsRUFPMEIsZ0JBUDFCLEVBUUtBLEdBUkwsQ0FRUyxnQkFSVCxFQVEwQixnQkFSMUIsRUFTS0EsR0FUTCxDQVNTLGtCQVRULEVBUzZCLG1CQVQ3QixFQVVLQSxHQVZMLENBVVMsc0JBVlQsRUFVZ0MsYUFWaEM7QUFhQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Gb29kQ2hhaW48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+VmlldyBTdGF0dXM8L2E+XHJcblxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbnMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+KzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHtDYXJkLCBHcmlkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuLy8gaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbi8vIGltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIFNob3dFbnRpdHkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdCBGYXJtZXIgPSBcIkZhcm1lclwiO1xyXG4gICAgICAgIGNvbnN0IE1hbnVmYWN0dXJlciA9IFwiTWFudWZhY3R1cmVyXCI7XHJcbiAgICAgICAgY29uc3QgRGlzdHJpYnV0ZXIgPSBcIkRpc3RyaWJ1dGVyXCI7XHJcbiAgICAgICAgY29uc3QgUmV0YWlsZXIgPSBcIlJldGFpbGVyXCI7XHJcbiAgICAgICAgY29uc3QgQ3VzdG9tZXIgPSBcIkN1c3RvbWVyXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsgRmFybWVyLCBNYW51ZmFjdHVyZXIsIERpc3RyaWJ1dGVyLCBSZXRhaWxlciwgQ3VzdG9tZXIgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcygpe1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIEZhcm1lcixcclxuICAgICAgICAgICAgTWFudWZhY3R1cmVyLFxyXG4gICAgICAgICAgICBEaXN0cmlidXRlcixcclxuICAgICAgICAgICAgUmV0YWlsZXIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBcIi9GYXJtZXIvc2lnbkluT3JTaWduVXBcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogRmFybWVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30sXHJcbiAgICAgICAgICAgICAgICBleHRyYTogWzxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj4gLDxCdXR0b24gYmFzaWMgY29sb3I9J2dyZWVuJz5TaWduIEluPC9CdXR0b24+XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBcIi9NYW5hZ2VyL3NpZ25Jbk9yU2lnblVwXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IE1hbnVmYWN0dXJlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IFs8QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+ICw8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+U2lnbiBJbjwvQnV0dG9uPl0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBEaXN0cmlidXRlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IFs8QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+ICw8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+U2lnbiBJbjwvQnV0dG9uPl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBSZXRhaWxlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IFs8QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+ICw8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+U2lnbiBJbjwvQnV0dG9uPl0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBDdXN0b21lcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IFs8QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+ICw8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+U2lnbiBJbjwvQnV0dG9uPl0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBjZW50ZXJlZCBpdGVtcz17aXRlbXN9IC8+O1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlVzZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd0VudGl0eTtcclxuXHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJykoKTtcclxuXHJcbnJvdXRlc1xyXG4gICAgLmFkZCgnL01hbmFnZXIvc2lnbkluT3JTaWduVXAnLCAnL01hbmFnZXIvc2lnbkluT3JTaWduVXAnKVxyXG4gICAgLmFkZCgnL01hbmFnZXIvc2lnbkluJywnL01hbmFnZXIvc2lnbkluJylcclxuICAgIC5hZGQoJy9NYW5hZ2VyL3ZpZXdJdGVtcycsJy9NYW5hZ2VyL3ZpZXdJdGVtcycpXHJcbiAgICAuYWRkKCcvTWFuYWdlci9zaWduVXAnLCcvTWFuYWdlci9zaWduVXAnKVxyXG4gICAgLmFkZChcIi9NYW5hZ2VyLzppZFwiLCBcIi9NYW5hZ2VyL2l0ZW1cIilcclxuICAgIC5hZGQoJy9GYXJtZXIvc2lnbkluT3JTaWduVXAnLCAnL0Zhcm1lci9zaWduSW5PclNpZ25VcCcpXHJcbiAgICAuYWRkKCcvRmFybWVyL3NpZ25JbicsJy9GYXJtZXIvc2lnbkluJylcclxuICAgIC5hZGQoJy9GYXJtZXIvc2lnblVwJywnL0Zhcm1lci9zaWduVXAnKVxyXG4gICAgLmFkZChcIi9GYXJtZXIvOmFkZHJlc3NcIiwgXCIvRmFybWVyL3ZpZXdJdGVtc1wiKVxyXG4gICAgLmFkZChcIi9GYXJtZXIvOmFkZHJlc3MvbmV3XCIsXCIvRmFybWVyL25ld1wiKTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=