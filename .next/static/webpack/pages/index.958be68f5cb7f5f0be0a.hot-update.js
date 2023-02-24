self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var routes = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js")();

routes.add('/Manager/signInOrSignUp', '/Manager/signInOrSignUp').add('/Manager/signIn', '/Manager/signIn').add('/Manager/:address/viewItems', '/Manager/viewItems').add('/Manager/:address/viewPurchasedItems', '/Manager/viewPurchasedItems').add('/Manager/signUp', '/Manager/signUp').add("/Manager/:id", "/Manager/item").add('/Farmer/signInOrSignUp', '/Farmer/signInOrSignUp').add('/Farmer/signIn', '/Farmer/signIn').add('/Farmer/signUp', '/Farmer/signUp').add("/Farmer/:address", "/Farmer/viewItems").add("/Farmer/:address/new", "/Farmer/new");
module.exports = routes;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkRBQUQsQ0FBUCxFQUFmOztBQUVBRCxNQUFNLENBQ0RFLEdBREwsQ0FDUyx5QkFEVCxFQUNvQyx5QkFEcEMsRUFFS0EsR0FGTCxDQUVTLGlCQUZULEVBRTJCLGlCQUYzQixFQUdLQSxHQUhMLENBR1MsNkJBSFQsRUFHdUMsb0JBSHZDLEVBSUtBLEdBSkwsQ0FJUyxzQ0FKVCxFQUlnRCw2QkFKaEQsRUFLS0EsR0FMTCxDQUtTLGlCQUxULEVBSzJCLGlCQUwzQixFQU1LQSxHQU5MLENBTVMsY0FOVCxFQU15QixlQU56QixFQU9LQSxHQVBMLENBT1Msd0JBUFQsRUFPbUMsd0JBUG5DLEVBUUtBLEdBUkwsQ0FRUyxnQkFSVCxFQVEwQixnQkFSMUIsRUFTS0EsR0FUTCxDQVNTLGdCQVRULEVBUzBCLGdCQVQxQixFQVVLQSxHQVZMLENBVVMsa0JBVlQsRUFVNkIsbUJBVjdCLEVBV0tBLEdBWEwsQ0FXUyxzQkFYVCxFQVdnQyxhQVhoQztBQWNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk1OGJlNjhmNWNiN2Y1ZjBiZTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XHJcblxyXG5yb3V0ZXNcclxuICAgIC5hZGQoJy9NYW5hZ2VyL3NpZ25Jbk9yU2lnblVwJywgJy9NYW5hZ2VyL3NpZ25Jbk9yU2lnblVwJylcclxuICAgIC5hZGQoJy9NYW5hZ2VyL3NpZ25JbicsJy9NYW5hZ2VyL3NpZ25JbicpXHJcbiAgICAuYWRkKCcvTWFuYWdlci86YWRkcmVzcy92aWV3SXRlbXMnLCcvTWFuYWdlci92aWV3SXRlbXMnKVxyXG4gICAgLmFkZCgnL01hbmFnZXIvOmFkZHJlc3Mvdmlld1B1cmNoYXNlZEl0ZW1zJywnL01hbmFnZXIvdmlld1B1cmNoYXNlZEl0ZW1zJylcclxuICAgIC5hZGQoJy9NYW5hZ2VyL3NpZ25VcCcsJy9NYW5hZ2VyL3NpZ25VcCcpXHJcbiAgICAuYWRkKFwiL01hbmFnZXIvOmlkXCIsIFwiL01hbmFnZXIvaXRlbVwiKVxyXG4gICAgLmFkZCgnL0Zhcm1lci9zaWduSW5PclNpZ25VcCcsICcvRmFybWVyL3NpZ25Jbk9yU2lnblVwJylcclxuICAgIC5hZGQoJy9GYXJtZXIvc2lnbkluJywnL0Zhcm1lci9zaWduSW4nKVxyXG4gICAgLmFkZCgnL0Zhcm1lci9zaWduVXAnLCcvRmFybWVyL3NpZ25VcCcpXHJcbiAgICAuYWRkKFwiL0Zhcm1lci86YWRkcmVzc1wiLCBcIi9GYXJtZXIvdmlld0l0ZW1zXCIpXHJcbiAgICAuYWRkKFwiL0Zhcm1lci86YWRkcmVzcy9uZXdcIixcIi9GYXJtZXIvbmV3XCIpO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyJdLCJzb3VyY2VSb290IjoiIn0=