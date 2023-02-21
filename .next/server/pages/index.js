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
      centered: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwibWFyZ2luVG9wIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlNob3dFbnRpdHkiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJGYXJtZXIiLCJNYW51ZmFjdHVyZXIiLCJEaXN0cmlidXRlciIsIlJldGFpbGVyIiwiQ3VzdG9tZXIiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaHJlZiIsImhlYWRlciIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNqQixzQkFDSSw4REFBQyxtREFBRDtBQUFNLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFiO0FBQUEsNEJBQ0ksOERBQUMseUNBQUQ7QUFBTSxXQUFLLEVBQUMsR0FBWjtBQUFBLDZCQUNBO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7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O0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVlIOztBQTVEOEI7O0FBK0RuQywrREFBZVIsVUFBZixFOzs7Ozs7Ozs7O0FDckVBLE1BQU1lLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLEVBQWY7O0FBRUFELE1BQU0sQ0FDREUsR0FETCxDQUNTLHlCQURULEVBQ29DLHlCQURwQyxFQUVLQSxHQUZMLENBRVMsaUJBRlQsRUFFMkIsaUJBRjNCLEVBR0tBLEdBSEwsQ0FHUyxvQkFIVCxFQUc4QixvQkFIOUIsRUFJS0EsR0FKTCxDQUlTLGlCQUpULEVBSTJCLGlCQUozQixFQUtLQSxHQUxMLENBS1MsY0FMVCxFQUt5QixlQUx6QixFQU1LQSxHQU5MLENBTVMsd0JBTlQsRUFNbUMsd0JBTm5DLEVBT0tBLEdBUEwsQ0FPUyxnQkFQVCxFQU8wQixnQkFQMUIsRUFRS0EsR0FSTCxDQVFTLGdCQVJULEVBUTBCLGdCQVIxQixFQVNLQSxHQVRMLENBU1Msa0JBVFQsRUFTNkIsbUJBVDdCLEVBVUtBLEdBVkwsQ0FVUyxzQkFWVCxFQVVnQyxhQVZoQztBQWFBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkZvb2RDaGFpbjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5WaWV3IFN0YXR1czwvYT5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0NhcmQsIEdyaWQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG4vLyBpbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuLy8gaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgU2hvd0VudGl0eSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IEZhcm1lciA9IFwiRmFybWVyXCI7XHJcbiAgICAgICAgY29uc3QgTWFudWZhY3R1cmVyID0gXCJNYW51ZmFjdHVyZXJcIjtcclxuICAgICAgICBjb25zdCBEaXN0cmlidXRlciA9IFwiRGlzdHJpYnV0ZXJcIjtcclxuICAgICAgICBjb25zdCBSZXRhaWxlciA9IFwiUmV0YWlsZXJcIjtcclxuICAgICAgICBjb25zdCBDdXN0b21lciA9IFwiQ3VzdG9tZXJcIjtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBGYXJtZXIsIE1hbnVmYWN0dXJlciwgRGlzdHJpYnV0ZXIsIFJldGFpbGVyLCBDdXN0b21lciB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhcmRzKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgRmFybWVyLFxyXG4gICAgICAgICAgICBNYW51ZmFjdHVyZXIsXHJcbiAgICAgICAgICAgIERpc3RyaWJ1dGVyLFxyXG4gICAgICAgICAgICBSZXRhaWxlcixcclxuICAgICAgICAgICAgQ3VzdG9tZXJcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL0Zhcm1lci9zaWduSW5PclNpZ25VcFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBGYXJtZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBcIi9NYW5hZ2VyL3NpZ25Jbk9yU2lnblVwXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IE1hbnVmYWN0dXJlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9ICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBEaXN0cmlidXRlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9ICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBSZXRhaWxlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9ICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBDdXN0b21lcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9ICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBjZW50ZXJlZCBpdGVtcz17aXRlbXN9IC8+O1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlVzZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd0VudGl0eTtcclxuXHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJykoKTtcclxuXHJcbnJvdXRlc1xyXG4gICAgLmFkZCgnL01hbmFnZXIvc2lnbkluT3JTaWduVXAnLCAnL01hbmFnZXIvc2lnbkluT3JTaWduVXAnKVxyXG4gICAgLmFkZCgnL01hbmFnZXIvc2lnbkluJywnL01hbmFnZXIvc2lnbkluJylcclxuICAgIC5hZGQoJy9NYW5hZ2VyL3ZpZXdJdGVtcycsJy9NYW5hZ2VyL3ZpZXdJdGVtcycpXHJcbiAgICAuYWRkKCcvTWFuYWdlci9zaWduVXAnLCcvTWFuYWdlci9zaWduVXAnKVxyXG4gICAgLmFkZChcIi9NYW5hZ2VyLzppZFwiLCBcIi9NYW5hZ2VyL2l0ZW1cIilcclxuICAgIC5hZGQoJy9GYXJtZXIvc2lnbkluT3JTaWduVXAnLCAnL0Zhcm1lci9zaWduSW5PclNpZ25VcCcpXHJcbiAgICAuYWRkKCcvRmFybWVyL3NpZ25JbicsJy9GYXJtZXIvc2lnbkluJylcclxuICAgIC5hZGQoJy9GYXJtZXIvc2lnblVwJywnL0Zhcm1lci9zaWduVXAnKVxyXG4gICAgLmFkZChcIi9GYXJtZXIvOmFkZHJlc3NcIiwgXCIvRmFybWVyL3ZpZXdJdGVtc1wiKVxyXG4gICAgLmFkZChcIi9GYXJtZXIvOmFkZHJlc3MvbmV3XCIsXCIvRmFybWVyL25ld1wiKTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=