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
        },
        extra: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
          basic: true,
          color: "blue",
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
          basic: true,
          color: "green",
          children: "SignIn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 70
        }, this)]
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Card.Group, {
        centered: true,
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
            lineNumber: 63,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 30
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: "Users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, this), this.renderCards()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvd0VudGl0eSIsInByb3BzIiwiRmFybWVyIiwiTWFudWZhY3R1cmVyIiwiRGlzdHJpYnV0ZXIiLCJSZXRhaWxlciIsIkN1c3RvbWVyIiwiaXRlbXMiLCJocmVmIiwiaGVhZGVyIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJleHRyYSIsInJlbmRlckNhcmRzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7OztrQ0FZVztBQUFBLHdCQVFMLEtBQUtDLEtBUkE7QUFBQSxVQUdMQyxNQUhLLGVBR0xBLE1BSEs7QUFBQSxVQUlMQyxZQUpLLGVBSUxBLFlBSks7QUFBQSxVQUtMQyxXQUxLLGVBS0xBLFdBTEs7QUFBQSxVQU1MQyxRQU5LLGVBTUxBLFFBTks7QUFBQSxVQU9MQyxRQVBLLGVBT0xBLFFBUEs7QUFVVCxVQUFNQyxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxZQUFJLEVBQUUsd0JBRFY7QUFFSUMsY0FBTSxFQUFFUCxNQUZaO0FBR0lRLGFBQUssRUFBRTtBQUFDQyxzQkFBWSxFQUFFO0FBQWY7QUFIWCxPQURVLEVBTVY7QUFDSUgsWUFBSSxFQUFFLHlCQURWO0FBRUlDLGNBQU0sRUFBRU4sWUFGWjtBQUdJTyxhQUFLLEVBQUU7QUFBQ0Msc0JBQVksRUFBRTtBQUFmO0FBSFgsT0FOVSxFQVdWO0FBQ0lGLGNBQU0sRUFBRUwsV0FEWjtBQUVJTSxhQUFLLEVBQUU7QUFBQ0Msc0JBQVksRUFBRTtBQUFmLFNBRlg7QUFHSUMsYUFBSyxFQUFFLGNBQUMsOERBQUMsc0RBQUQ7QUFBUSxlQUFLLE1BQWI7QUFBYyxlQUFLLEVBQUMsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUQsZUFBOEMsOERBQUMsc0RBQUQ7QUFBUSxlQUFLLE1BQWI7QUFBYyxlQUFLLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTlDO0FBSFgsT0FYVSxFQWdCVjtBQUNJSCxjQUFNLEVBQUVKLFFBRFo7QUFFSUssYUFBSyxFQUFFO0FBQUNDLHNCQUFZLEVBQUU7QUFBZjtBQUZYLE9BaEJVLEVBb0JWO0FBQ0lGLGNBQU0sRUFBRUgsUUFEWjtBQUVJSSxhQUFLLEVBQUU7QUFBQ0Msc0JBQVksRUFBRTtBQUFmO0FBRlgsT0FwQlUsQ0FBZDtBQTBCQSwwQkFBTyw4REFBQywwREFBRDtBQUFZLGdCQUFRLE1BQXBCO0FBQXFCLGFBQUssRUFBRUo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBRUg7Ozs2QkFFUTtBQUNMLDBCQUNJLDhEQUFDLHVEQUFEO0FBQUEsK0JBQ0k7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEYixlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQSxFQUtTLEtBQUtNLFdBQUwsRUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFZSDs7Ozs0V0EvRDRCWixLOzs7Ozs7QUFDbkJDLHNCLEdBQVMsUTtBQUNUQyw0QixHQUFlLGM7QUFDZkMsMkIsR0FBYyxhO0FBQ2RDLHdCLEdBQVcsVTtBQUNYQyx3QixHQUFXLFU7aURBRVY7QUFBRUosd0JBQU0sRUFBTkEsTUFBRjtBQUFVQyw4QkFBWSxFQUFaQSxZQUFWO0FBQXdCQyw2QkFBVyxFQUFYQSxXQUF4QjtBQUFxQ0MsMEJBQVEsRUFBUkEsUUFBckM7QUFBK0NDLDBCQUFRLEVBQVJBO0FBQS9DLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVFVRLDRDOztBQW9FekIsK0RBQWVkLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDNhNzhhMGIyNTkyM2IxYjZhNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHtDYXJkLCBHcmlkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuLy8gaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbi8vIGltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIFNob3dFbnRpdHkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdCBGYXJtZXIgPSBcIkZhcm1lclwiO1xyXG4gICAgICAgIGNvbnN0IE1hbnVmYWN0dXJlciA9IFwiTWFudWZhY3R1cmVyXCI7XHJcbiAgICAgICAgY29uc3QgRGlzdHJpYnV0ZXIgPSBcIkRpc3RyaWJ1dGVyXCI7XHJcbiAgICAgICAgY29uc3QgUmV0YWlsZXIgPSBcIlJldGFpbGVyXCI7XHJcbiAgICAgICAgY29uc3QgQ3VzdG9tZXIgPSBcIkN1c3RvbWVyXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsgRmFybWVyLCBNYW51ZmFjdHVyZXIsIERpc3RyaWJ1dGVyLCBSZXRhaWxlciwgQ3VzdG9tZXIgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcygpe1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIEZhcm1lcixcclxuICAgICAgICAgICAgTWFudWZhY3R1cmVyLFxyXG4gICAgICAgICAgICBEaXN0cmlidXRlcixcclxuICAgICAgICAgICAgUmV0YWlsZXIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBcIi9GYXJtZXIvc2lnbkluT3JTaWduVXBcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogRmFybWVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvTWFuYWdlci9zaWduSW5PclNpZ25VcFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBNYW51ZmFjdHVyZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IERpc3RyaWJ1dGVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30sXHJcbiAgICAgICAgICAgICAgICBleHRyYTogWzxCdXR0b24gYmFzaWMgY29sb3I9J2JsdWUnPlNpZ24gVXA8L0J1dHRvbj4gLDxCdXR0b24gYmFzaWMgY29sb3I9J2dyZWVuJz5TaWduSW48L0J1dHRvbj5dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogUmV0YWlsZXIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IEN1c3RvbWVyLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ30gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBjZW50ZXJlZCBpdGVtcz17aXRlbXN9IC8+O1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlVzZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd0VudGl0eTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=