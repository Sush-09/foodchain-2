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
      header: Manufacturer,
      style: {
        overflowWrap: 'break-word'
      },
      extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
        route: "/Manager/signUp",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
            basic: true,
            color: "blue",
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 58
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 55
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
        route: "/Manager/signIn",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
            basic: true,
            color: "green",
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 147
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 144
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 114
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
        lineNumber: 43,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
        lineNumber: 48,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
        lineNumber: 53,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        basic: true,
        color: "green",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 70
      }, this)]
    }];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
      centered: true,
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 16
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("center", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 30
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Users"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJTaG93RW50aXR5IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJGYXJtZXIiLCJNYW51ZmFjdHVyZXIiLCJEaXN0cmlidXRlciIsIlJldGFpbGVyIiwiQ3VzdG9tZXIiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJleHRyYSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQyw0Q0FBekIsQ0FBbUM7QUFFL0IsZUFBYUMsZUFBYixDQUE2QkMsS0FBN0IsRUFBbUM7QUFDL0IsVUFBTUMsTUFBTSxHQUFHLFFBQWY7QUFDQSxVQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxVQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFFQSxXQUFPO0FBQUVKLFlBQUY7QUFBVUMsa0JBQVY7QUFBd0JDLGlCQUF4QjtBQUFxQ0MsY0FBckM7QUFBK0NDO0FBQS9DLEtBQVA7QUFDSDs7QUFFREMsYUFBVyxHQUFFO0FBRVQsVUFBTTtBQUNGTCxZQURFO0FBRUZDLGtCQUZFO0FBR0ZDLGlCQUhFO0FBSUZDLGNBSkU7QUFLRkM7QUFMRSxRQU1GLEtBQUtMLEtB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QTtBQUFBO0FBQUE7QUFBQSxjQUE5QztBQUhYLEtBckJVLENBQWQ7QUE0QkEsd0JBQU8sOERBQUMseURBQUQ7QUFBWSxjQUFRLE1BQXBCO0FBQXFCLFdBQUssRUFBRUo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBRUg7O0FBRURLLFFBQU0sR0FBRztBQUNMLHdCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEYixlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIQSxFQUtTLEtBQUtOLFdBQUwsRUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFZSDs7QUFuRThCOztBQXNFbkMsK0RBQWVULFVBQWYsRTs7Ozs7Ozs7Ozs7QUM1RUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7Q2FyZCwgR3JpZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbi8vIGltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBTaG93RW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgRmFybWVyID0gXCJGYXJtZXJcIjtcclxuICAgICAgICBjb25zdCBNYW51ZmFjdHVyZXIgPSBcIk1hbnVmYWN0dXJlclwiO1xyXG4gICAgICAgIGNvbnN0IERpc3RyaWJ1dGVyID0gXCJEaXN0cmlidXRlclwiO1xyXG4gICAgICAgIGNvbnN0IFJldGFpbGVyID0gXCJSZXRhaWxlclwiO1xyXG4gICAgICAgIGNvbnN0IEN1c3RvbWVyID0gXCJDdXN0b21lclwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7IEZhcm1lciwgTWFudWZhY3R1cmVyLCBEaXN0cmlidXRlciwgUmV0YWlsZXIsIEN1c3RvbWVyIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZHMoKXtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBGYXJtZXIsXHJcbiAgICAgICAgICAgIE1hbnVmYWN0dXJlcixcclxuICAgICAgICAgICAgRGlzdHJpYnV0ZXIsXHJcbiAgICAgICAgICAgIFJldGFpbGVyLFxyXG4gICAgICAgICAgICBDdXN0b21lclxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBGYXJtZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhOiBbPExpbmsgcm91dGU9XCIvRmFybWVyL3NpZ25VcFwiPjxhPjxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj48L2E+PC9MaW5rPiAsPExpbmsgcm91dGU9XCIvRmFybWVyL3NpZ25JblwiPjxhPjxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gSW48L0J1dHRvbj48L2E+PC9MaW5rPl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBNYW51ZmFjdHVyZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhOiBbPExpbmsgcm91dGU9XCIvTWFuYWdlci9zaWduVXBcIj48YT48QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+PC9hPjwvTGluaz4gLDxMaW5rIHJvdXRlPVwiL01hbmFnZXIvc2lnbkluXCI+PGE+PEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlNpZ24gSW48L0J1dHRvbj48L2E+PC9MaW5rPl0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBEaXN0cmlidXRlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IFs8QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+ICw8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+U2lnbiBJbjwvQnV0dG9uPl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBSZXRhaWxlcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IFs8QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+ICw8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+U2lnbiBJbjwvQnV0dG9uPl0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBDdXN0b21lcixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmE6IFs8QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+ICw8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+U2lnbiBJbjwvQnV0dG9uPl0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBjZW50ZXJlZCBpdGVtcz17aXRlbXN9IC8+O1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlVzZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd0VudGl0eTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==