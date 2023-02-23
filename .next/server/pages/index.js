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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Blockchain\\foodchain-2\\pages\\index.js";


 // import web3 from '../ethereum/web3';



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
      header: Farmer,
      style: {
        overflowWrap: 'break-word'
      },
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
        route: "/Farmer/signUp",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
            basic: true,
            color: "blue",
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 57
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 54
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
        route: "/Farmer/signIn",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
            basic: true,
            color: "blue",
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 145
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 142
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 113
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
        lineNumber: 39,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
        lineNumber: 44,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
        lineNumber: 49,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
        lineNumber: 54,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 70
      }, this)]
    }];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
      centered: true,
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 16
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("center", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 30
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Users"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwibWFyZ2luVG9wIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlNob3dFbnRpdHkiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJGYXJtZXIiLCJNYW51ZmFjdHVyZXIiLCJEaXN0cmlidXRlciIsIlJldGFpbGVyIiwiQ3VzdG9tZXIiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJleHRyYSIsImhyZWYiLCJyZW5kZXIiLCJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLHNCQUNJLDhEQUFDLG1EQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQWI7QUFBQSw0QkFDSSw4REFBQyx5Q0FBRDtBQUFNLFdBQUssRUFBQyxHQUFaO0FBQUEsNkJBQ0E7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FB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Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+Rm9vZENoYWluPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPlZpZXcgU3RhdHVzPC9hPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPis8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01lbnUuTWVudT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7Q2FyZCwgR3JpZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbi8vIGltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBTaG93RW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgRmFybWVyID0gXCJGYXJtZXJcIjtcclxuICAgICAgICBjb25zdCBNYW51ZmFjdHVyZXIgPSBcIk1hbnVmYWN0dXJlclwiO1xyXG4gICAgICAgIGNvbnN0IERpc3RyaWJ1dGVyID0gXCJEaXN0cmlidXRlclwiO1xyXG4gICAgICAgIGNvbnN0IFJldGFpbGVyID0gXCJSZXRhaWxlclwiO1xyXG4gICAgICAgIGNvbnN0IEN1c3RvbWVyID0gXCJDdXN0b21lclwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7IEZhcm1lciwgTWFudWZhY3R1cmVyLCBEaXN0cmlidXRlciwgUmV0YWlsZXIsIEN1c3RvbWVyIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZHMoKXtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBGYXJtZXIsXHJcbiAgICAgICAgICAgIE1hbnVmYWN0dXJlcixcclxuICAgICAgICAgICAgRGlzdHJpYnV0ZXIsXHJcbiAgICAgICAgICAgIFJldGFpbGVyLFxyXG4gICAgICAgICAgICBDdXN0b21lclxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBGYXJtZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhOiBbPExpbmsgcm91dGU9XCIvRmFybWVyL3NpZ25VcFwiPjxhPjxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj48L2E+PC9MaW5rPiAsPExpbmsgcm91dGU9XCIvRmFybWVyL3NpZ25JblwiPjxhPjxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gSW48L0J1dHRvbj48L2E+PC9MaW5rPl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvTWFuYWdlci9zaWduSW5PclNpZ25VcFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBNYW51ZmFjdHVyZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhOiBbPEJ1dHRvbiBiYXNpYyBjb2xvcj0nYmx1ZSc+U2lnbiBVcDwvQnV0dG9uPiAsPEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlNpZ24gSW48L0J1dHRvbj5dICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogRGlzdHJpYnV0ZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhOiBbPEJ1dHRvbiBiYXNpYyBjb2xvcj0nYmx1ZSc+U2lnbiBVcDwvQnV0dG9uPiAsPEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlNpZ24gSW48L0J1dHRvbj5dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogUmV0YWlsZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhOiBbPEJ1dHRvbiBiYXNpYyBjb2xvcj0nYmx1ZSc+U2lnbiBVcDwvQnV0dG9uPiAsPEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlNpZ24gSW48L0J1dHRvbj5dICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogQ3VzdG9tZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhOiBbPEJ1dHRvbiBiYXNpYyBjb2xvcj0nYmx1ZSc+U2lnbiBVcDwvQnV0dG9uPiAsPEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlNpZ24gSW48L0J1dHRvbj5dICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgY2VudGVyZWQgaXRlbXM9e2l0ZW1zfSAvPjtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxoMz5Vc2VyczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dFbnRpdHk7XHJcblxyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XHJcblxyXG5yb3V0ZXNcclxuICAgIC5hZGQoJy9NYW5hZ2VyL3NpZ25Jbk9yU2lnblVwJywgJy9NYW5hZ2VyL3NpZ25Jbk9yU2lnblVwJylcclxuICAgIC5hZGQoJy9NYW5hZ2VyL3NpZ25JbicsJy9NYW5hZ2VyL3NpZ25JbicpXHJcbiAgICAuYWRkKCcvTWFuYWdlci92aWV3SXRlbXMnLCcvTWFuYWdlci92aWV3SXRlbXMnKVxyXG4gICAgLmFkZCgnL01hbmFnZXIvc2lnblVwJywnL01hbmFnZXIvc2lnblVwJylcclxuICAgIC5hZGQoXCIvTWFuYWdlci86aWRcIiwgXCIvTWFuYWdlci9pdGVtXCIpXHJcbiAgICAuYWRkKCcvRmFybWVyL3NpZ25Jbk9yU2lnblVwJywgJy9GYXJtZXIvc2lnbkluT3JTaWduVXAnKVxyXG4gICAgLmFkZCgnL0Zhcm1lci9zaWduSW4nLCcvRmFybWVyL3NpZ25JbicpXHJcbiAgICAuYWRkKCcvRmFybWVyL3NpZ25VcCcsJy9GYXJtZXIvc2lnblVwJylcclxuICAgIC5hZGQoXCIvRmFybWVyLzphZGRyZXNzXCIsIFwiL0Zhcm1lci92aWV3SXRlbXNcIilcclxuICAgIC5hZGQoXCIvRmFybWVyLzphZGRyZXNzL25ld1wiLFwiL0Zhcm1lci9uZXdcIik7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9