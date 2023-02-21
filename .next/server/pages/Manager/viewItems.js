(function() {
var exports = {};
exports.id = "pages/Manager/viewItems";
exports.ids = ["pages/Manager/viewItems"];
exports.modules = {

/***/ "./pages/Manager/viewItems.js":
/*!************************************!*\
  !*** ./pages/Manager/viewItems.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\Blockchain\\fsc\\pages\\Manager\\viewItems.js";





class ItemList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    // const address = '0xA2Ec9c4c87769748D2E4DB8E4647f2e793bc5eFf';
    //const fsc = FoodSupplyChain(address);
    const states = ["ProduceByFarmer", "RequestByManufacturer", "AcceptRequestByFarmer", "RejectRequestByFarmer", "PurchasedByManufacturer", "PurchasedByDistributor", "ShippedByFarmer", "ReceivedByDistributor", "ProcessedByDistributor", "PackageByDistributor", "ForSaleByDistributor", "PurchasedByRetailer", "ShippedByDistributor", "ReceivedByRetailer", "ForSaleByRetailer", "PurchasedByConsumer"];
    const item_length = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__.default.methods.getItemsLength().call();
    const items = await Promise.all(Array(parseInt(item_length)).fill().map((element, index) => {
      return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__.default.methods.items(index).call();
    }));
    return {
      items,
      item_length,
      states
    };
  }

  renderItems() {
    const item_data = this.props.items.map(item => {
      return {
        href: `/Manager/${item.id}`,
        header: item.productName,
        description: "Rs. " + item.productPrice + "===>" + item.quantity + " Kg.",
        meta: this.props.states[item.itemState],
        fluid: true
      };
    });
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {
      items: item_data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 14
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: " Available Items "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), this.renderItems()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ItemList);

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

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js","ethereum_factory_js"], function() { return __webpack_exec__("./pages/Manager/viewItems.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9NYW5hZ2VyL3ZpZXdJdGVtcy5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiSXRlbUxpc3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJzdGF0ZXMiLCJpdGVtX2xlbmd0aCIsImZhY3RvcnkiLCJjYWxsIiwiaXRlbXMiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJyZW5kZXJJdGVtcyIsIml0ZW1fZGF0YSIsInByb3BzIiwiaXRlbSIsImhyZWYiLCJpZCIsImhlYWRlciIsInByb2R1Y3ROYW1lIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0UHJpY2UiLCJxdWFudGl0eSIsIm1ldGEiLCJpdGVtU3RhdGUiLCJmbHVpZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsNENBQXZCLENBQWlDO0FBQzdCLGVBQWFDLGVBQWIsR0FBK0I7QUFDN0I7QUFDQTtBQUNBLFVBQU1DLE1BQU0sR0FBRyxDQUFDLGlCQUFELEVBQW1CLHVCQUFuQixFQUEyQyx1QkFBM0MsRUFBbUUsdUJBQW5FLEVBQ2YseUJBRGUsRUFDVyx3QkFEWCxFQUNvQyxpQkFEcEMsRUFDc0QsdUJBRHRELEVBRWYsd0JBRmUsRUFFVSxzQkFGVixFQUVpQyxzQkFGakMsRUFHZixxQkFIZSxFQUdPLHNCQUhQLEVBRzhCLG9CQUg5QixFQUlmLG1CQUplLEVBSUsscUJBSkwsQ0FBZjtBQU1BLFVBQU1DLFdBQVcsR0FBRyxNQUFNQyw2RUFBQSxHQUFpQ0MsSUFBakMsRUFBMUI7QUFFQSxVQUFNQyxLQUFLLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQ2xCQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ1AsV0FBRCxDQUFULENBQUwsQ0FDR1EsSUFESCxHQUVHQyxHQUZILENBRU8sQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQ3ZCLGFBQU9WLG9FQUFBLENBQXNCVSxLQUF0QixFQUE2QlQsSUFBN0IsRUFBUDtBQUNELEtBSkgsQ0FEa0IsQ0FBcEI7QUFRQSxXQUFPO0FBQUVDLFdBQUY7QUFBU0gsaUJBQVQ7QUFBc0JEO0FBQXRCLEtBQVA7QUFDRDs7QUFDRGEsYUFBVyxHQUFHO0FBQ1osVUFBTUMsU0FBUyxHQUFHLEtBQUtDLEtBQUwsQ0FBV1gsS0FBWCxDQUFpQk0sR0FBakIsQ0FBc0JNLElBQUQsSUFBVTtBQUUvQyxhQUFPO0FBQ0xDLFlBQUksRUFBRyxZQUFXRCxJQUFJLENBQUNFLEVBQUcsRUFEckI7QUFFTEMsY0FBTSxFQUFFSCxJQUFJLENBQUNJLFdBRlI7QUFHTEMsbUJBQVcsRUFBRSxTQUFPTCxJQUFJLENBQUNNLFlBQVosR0FBeUIsTUFBekIsR0FBZ0NOLElBQUksQ0FBQ08sUUFBckMsR0FBOEMsTUFIdEQ7QUFJTEMsWUFBSSxFQUFFLEtBQUtULEtBQUwsQ0FBV2YsTUFBWCxDQUFrQmdCLElBQUksQ0FBQ1MsU0FBdkIsQ0FKRDtBQUtMQyxhQUFLLEVBQUU7QUFMRixPQUFQO0FBUUQsS0FWaUIsQ0FBbEI7QUFXQSx3QkFBTyw4REFBQyx5REFBRDtBQUFZLFdBQUssRUFBRVo7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0RhLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHLEtBQUtkLFdBQUwsRUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFRRDs7QUE3QzRCOztBQStDakMsK0RBQWVoQixRQUFmLEU7Ozs7Ozs7Ozs7O0FDcERBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL01hbmFnZXIvdmlld0l0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNsYXNzIEl0ZW1MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgIC8vIGNvbnN0IGFkZHJlc3MgPSAnMHhBMkVjOWM0Yzg3NzY5NzQ4RDJFNERCOEU0NjQ3ZjJlNzkzYmM1ZUZmJztcclxuICAgICAgLy9jb25zdCBmc2MgPSBGb29kU3VwcGx5Q2hhaW4oYWRkcmVzcyk7XHJcbiAgICAgIGNvbnN0IHN0YXRlcyA9IFtcIlByb2R1Y2VCeUZhcm1lclwiLFwiUmVxdWVzdEJ5TWFudWZhY3R1cmVyXCIsXCJBY2NlcHRSZXF1ZXN0QnlGYXJtZXJcIixcIlJlamVjdFJlcXVlc3RCeUZhcm1lclwiLFxyXG4gICAgICBcIlB1cmNoYXNlZEJ5TWFudWZhY3R1cmVyXCIsXCJQdXJjaGFzZWRCeURpc3RyaWJ1dG9yXCIsXCJTaGlwcGVkQnlGYXJtZXJcIixcIlJlY2VpdmVkQnlEaXN0cmlidXRvclwiLFxyXG4gICAgICBcIlByb2Nlc3NlZEJ5RGlzdHJpYnV0b3JcIixcIlBhY2thZ2VCeURpc3RyaWJ1dG9yXCIsXCJGb3JTYWxlQnlEaXN0cmlidXRvclwiLFxyXG4gICAgICBcIlB1cmNoYXNlZEJ5UmV0YWlsZXJcIixcIlNoaXBwZWRCeURpc3RyaWJ1dG9yXCIsXCJSZWNlaXZlZEJ5UmV0YWlsZXJcIixcclxuICAgICAgXCJGb3JTYWxlQnlSZXRhaWxlclwiLFwiUHVyY2hhc2VkQnlDb25zdW1lclwiXVxyXG4gICAgICBcclxuICAgICAgY29uc3QgaXRlbV9sZW5ndGggPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0SXRlbXNMZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIEFycmF5KHBhcnNlSW50KGl0ZW1fbGVuZ3RoKSlcclxuICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5Lm1ldGhvZHMuaXRlbXMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICAgIHJldHVybiB7IGl0ZW1zLCBpdGVtX2xlbmd0aCwgc3RhdGVzIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXJJdGVtcygpIHtcclxuICAgICAgY29uc3QgaXRlbV9kYXRhID0gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaHJlZjogYC9NYW5hZ2VyLyR7aXRlbS5pZH1gLFxyXG4gICAgICAgICAgaGVhZGVyOiBpdGVtLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiUnMuIFwiK2l0ZW0ucHJvZHVjdFByaWNlK1wiPT09PlwiK2l0ZW0ucXVhbnRpdHkrXCIgS2cuXCIgLFxyXG4gICAgICAgICAgbWV0YTogdGhpcy5wcm9wcy5zdGF0ZXNbaXRlbS5pdGVtU3RhdGVdLFxyXG4gICAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtX2RhdGF9IC8+O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAgPGgzPiBBdmFpbGFibGUgSXRlbXMgPC9oMz4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcygpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=