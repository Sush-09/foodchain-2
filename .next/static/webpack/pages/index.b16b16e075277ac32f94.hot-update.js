self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\user\\Desktop\\Blockchain\\foodchain-2\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // import web3 from '../ethereum/web3';
// import {Link} from '../routes';

var ShowEntity = /*#__PURE__*/function (_Component) {
  (0,C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(ShowEntity, _Component);

  var _super = _createSuper(ShowEntity);

  function ShowEntity() {
    (0,C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, ShowEntity);

    return _super.apply(this, arguments);
  }

  (0,C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(ShowEntity, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          Farmer = _this$props.Farmer,
          Manufacturer = _this$props.Manufacturer,
          Distributer = _this$props.Distributer,
          Retailer = _this$props.Retailer,
          Customer = _this$props.Customer;
      var items = [{
        header: Farmer,
        style: {
          overflowWrap: 'break-word'
        },
        extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {
          route: "/Farmer/signUp",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {
          route: "/Farmer/signIn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
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
        extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
          basic: true,
          color: "blue",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
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
        extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
          basic: true,
          color: "blue",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
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
        extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
          basic: true,
          color: "blue",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
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
        extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
          basic: true,
          color: "blue",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
          basic: true,
          color: "green",
          children: "Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 70
        }, this)]
      }];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Card.Group, {
        centered: true,
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("center", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 30
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: "Users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
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
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {
        var Farmer, Manufacturer, Distributer, Retailer, Customer;
        return C_Users_user_Desktop_Blockchain_foodchain_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Farmer = "Farmer";
                Manufacturer = "Manufacturer";
                Distributer = "Distributer";
                Retailer = "Retailer";
                Customer = "Customer";
                return _context.abrupt("return", {
                  Farmer: Farmer,
                  Manufacturer: Manufacturer,
                  Distributer: Distributer,
                  Retailer: Retailer,
                  Customer: Customer
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ShowEntity;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ShowEntity);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvd0VudGl0eSIsInByb3BzIiwiRmFybWVyIiwiTWFudWZhY3R1cmVyIiwiRGlzdHJpYnV0ZXIiLCJSZXRhaWxlciIsIkN1c3RvbWVyIiwiaXRlbXMiLCJoZWFkZXIiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImV4dHJhIiwiaHJlZiIsInJlbmRlckNhcmRzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7OztrQ0FZVztBQUFBLHdCQVFMLEtBQUtDLEtBUkE7QUFBQSxVQUdMQyxNQUhLLGVBR0xBLE1BSEs7QUFBQSxVQUlMQyxZQUpLLGVBSUxBLFlBSks7QUFBQSxVQUtMQyxXQUxLLGVBS0xBLFdBTEs7QUFBQSxVQU1MQyxRQU5LLGVBTUxBLFFBTks7QUFBQSxVQU9MQyxRQVBLLGVBT0xBLFFBUEs7QUFVVCxVQUFNQyxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxjQUFNLEVBQUVOLE1BRFo7QUFFSU8sYUFBSyxFQUFFO0FBQUNDLHNCQUFZLEVBQUU7QUFBZixTQUZYO0FBR0lDLGFBQUssRUFBRSxjQUFDLDhEQUFDLElBQUQ7QUFBTSxlQUFLLEVBQUMsZ0JBQVo7QUFBQSxpQ0FBNkI7QUFBQSxtQ0FBRyw4REFBQyxzREFBRDtBQUFRLG1CQUFLLE1BQWI7QUFBYyxtQkFBSyxFQUFDLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFELGVBQXlGLDhEQUFDLElBQUQ7QUFBTSxlQUFLLEVBQUMsZ0JBQVo7QUFBQSxpQ0FBNkI7QUFBQSxtQ0FBRyw4REFBQyxzREFBRDtBQUFRLG1CQUFLLE1BQWI7QUFBYyxtQkFBSyxFQUFDLE1BQXBC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MEJBQVEsRUFBUkE7QUFBL0MsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFUVVEsNEM7O0FBdUV6QiwrREFBZWQsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMTZiMTZlMDc1Mjc3YWMzMmY5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0NhcmQsIEdyaWQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG4vLyBpbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuLy8gaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgU2hvd0VudGl0eSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IEZhcm1lciA9IFwiRmFybWVyXCI7XHJcbiAgICAgICAgY29uc3QgTWFudWZhY3R1cmVyID0gXCJNYW51ZmFjdHVyZXJcIjtcclxuICAgICAgICBjb25zdCBEaXN0cmlidXRlciA9IFwiRGlzdHJpYnV0ZXJcIjtcclxuICAgICAgICBjb25zdCBSZXRhaWxlciA9IFwiUmV0YWlsZXJcIjtcclxuICAgICAgICBjb25zdCBDdXN0b21lciA9IFwiQ3VzdG9tZXJcIjtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBGYXJtZXIsIE1hbnVmYWN0dXJlciwgRGlzdHJpYnV0ZXIsIFJldGFpbGVyLCBDdXN0b21lciB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhcmRzKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgRmFybWVyLFxyXG4gICAgICAgICAgICBNYW51ZmFjdHVyZXIsXHJcbiAgICAgICAgICAgIERpc3RyaWJ1dGVyLFxyXG4gICAgICAgICAgICBSZXRhaWxlcixcclxuICAgICAgICAgICAgQ3VzdG9tZXJcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogRmFybWVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30sXHJcbiAgICAgICAgICAgICAgICBleHRyYTogWzxMaW5rIHJvdXRlPVwiL0Zhcm1lci9zaWduVXBcIj48YT48QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIFVwPC9CdXR0b24+PC9hPjwvTGluaz4gLDxMaW5rIHJvdXRlPVwiL0Zhcm1lci9zaWduSW5cIj48YT48QnV0dG9uIGJhc2ljIGNvbG9yPSdibHVlJz5TaWduIEluPC9CdXR0b24+PC9hPjwvTGluaz5dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL01hbmFnZXIvc2lnbkluT3JTaWduVXBcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogTWFudWZhY3R1cmVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30sXHJcbiAgICAgICAgICAgICAgICBleHRyYTogWzxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj4gLDxCdXR0b24gYmFzaWMgY29sb3I9J2dyZWVuJz5TaWduIEluPC9CdXR0b24+XSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IERpc3RyaWJ1dGVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30sXHJcbiAgICAgICAgICAgICAgICBleHRyYTogWzxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj4gLDxCdXR0b24gYmFzaWMgY29sb3I9J2dyZWVuJz5TaWduIEluPC9CdXR0b24+XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFJldGFpbGVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30sXHJcbiAgICAgICAgICAgICAgICBleHRyYTogWzxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj4gLDxCdXR0b24gYmFzaWMgY29sb3I9J2dyZWVuJz5TaWduIEluPC9CdXR0b24+XSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IEN1c3RvbWVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30sXHJcbiAgICAgICAgICAgICAgICBleHRyYTogWzxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj4gLDxCdXR0b24gYmFzaWMgY29sb3I9J2dyZWVuJz5TaWduIEluPC9CdXR0b24+XSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zPXtpdGVtc30gLz47XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VXNlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93RW50aXR5O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==