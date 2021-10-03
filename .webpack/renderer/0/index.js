(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6cf2a88a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6cf2a88a","scoped":true,"sourceMap":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n.home_content[data-v-6cf2a88a] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n  color: #ffffff;\n  font-weight: bold;\n}\n.home_content > *[data-v-6cf2a88a]:not(:last-child) {\n  margin-right: 5px;\n}\n.home_content > *[data-v-6cf2a88a] {\n  display: flex;\n  flex-shrink: 0;\n}\n.home_content > * > *[data-v-6cf2a88a]:not(:last-child) {\n  margin-right: 5px;\n}\n", "",{"version":3,"sources":["home.vue"],"names":[],"mappings":";AAAA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,cAAA;EACA,iBAAA;AAEF;AAAA;EACE,iBAAA;AAEF;AAAA;EACE,aAAA;EACA,cAAA;AAEF;AAAA;EACE,iBAAA;AAEF","file":"home.vue","sourcesContent":[".home_content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n  color: #ffffff;\n  font-weight: bold;\n}\n.home_content > *:not(:last-child) {\n  margin-right: 5px;\n}\n.home_content > * {\n  display: flex;\n  flex-shrink: 0;\n}\n.home_content > * > *:not(:last-child) {\n  margin-right: 5px;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/renderer/views/home/home.vue":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/renderer/views/home/home.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/renderer/views/home/home.js");
/* harmony import */ var os_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os-utils */ "./node_modules/os-utils/lib/osutils.js");
/* harmony import */ var os_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os_utils__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      mointorTimes: 1000,
      monitorInfo: [
        {
          title: "CPU",
          data: "--",
          show: true,
          interval: true,
          get: (r) => {
            os_utils__WEBPACK_IMPORTED_MODULE_1___default.a.cpuUsage(function (v) {
              r.data=`${(v*100).toFixed(0)}%`
            });
          },
        },
        {
          title: "RAM",
          data: "--",
          show: true,
          interval: true,
          get: (r) => {
            r.data=`${((1-os_utils__WEBPACK_IMPORTED_MODULE_1___default.a.freememPercentage())*100).toFixed(0)}%`
          },
        },
      ],
    };
  },
  methods: _home_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  created() {
    this.init();
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6cf2a88a\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/renderer/views/home/home.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6cf2a88a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/renderer/views/home/home.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home_content" },
    _vm._l(_vm.monitorInfo, function(item, i) {
      return _c("div", { key: "moitorItem_" + i }, [
        _c("div", { staticClass: "title" }, [_vm._v(_vm._s(item.title))]),
        _vm._v(" "),
        _c("div", { staticClass: "content" }, [_vm._v(_vm._s(item.data))])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(/*! vue-hot-reload-api */ "./node_modules/vue-hot-reload-api/dist/index.js")      .rerender("data-v-6cf2a88a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6cf2a88a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6cf2a88a","scoped":true,"sourceMap":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6cf2a88a","scoped":true,"sourceMap":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6cf2a88a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6b342278", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6cf2a88a","scoped":true,"sourceMap":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6cf2a88a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-6cf2a88a","scoped":true,"sourceMap":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6cf2a88a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/renderer/views/home/home.js":
/*!*****************************************!*\
  !*** ./src/renderer/views/home/home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
    init() {
        setInterval(this.getMonitorInfo, this.mointorTimes)

    },
    getMonitorInfo() {
        this.monitorInfo.forEach(item => {
            if (item.show && item.interval && typeof item.get === "function") {
                item.get(item)
            }
        })
    }
});

/***/ }),

/***/ "./src/renderer/views/home/home.vue":
/*!******************************************!*\
  !*** ./src/renderer/views/home/home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./home.vue */ "./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/renderer/views/home/home.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6cf2a88a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6cf2a88a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./home.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6cf2a88a\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/renderer/views/home/home.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-6cf2a88a","scoped":true,"sourceMap":true}!less-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./home.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6cf2a88a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/renderer/views/home/home.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6cf2a88a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6cf2a88a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6cf2a88a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\renderer\\views\\home\\home.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(/*! vue-hot-reload-api */ "./node_modules/vue-hot-reload-api/dist/index.js")
  hotAPI.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6cf2a88a", Component.options)
  } else {
    hotAPI.reload("data-v-6cf2a88a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvdmlld3MvaG9tZS9ob21lLnZ1ZT9iM2Q5Iiwid2VicGFjazovLy9zcmMvcmVuZGVyZXIvdmlld3MvaG9tZS9ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvdmlld3MvaG9tZS9ob21lLnZ1ZT8xODJhIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci92aWV3cy9ob21lL2hvbWUudnVlPzExNDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL3ZpZXdzL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvdmlld3MvaG9tZS9ob21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHFDQUFxQyxnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsbUNBQW1DLG9CQUFvQixtQkFBbUIsc0JBQXNCLEdBQUcsdURBQXVELHNCQUFzQixHQUFHLHNDQUFzQyxrQkFBa0IsbUJBQW1CLEdBQUcsMkRBQTJELHNCQUFzQixHQUFHLFNBQVMsMkRBQTJELEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsMERBQTBELGdCQUFnQixpQkFBaUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsb0JBQW9CLG1CQUFtQixzQkFBc0IsR0FBRyxzQ0FBc0Msc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsR0FBRywwQ0FBMEMsc0JBQXNCLEdBQUcsS0FBSztBQUM1bUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHZ0M7QUFDTjtBQUNYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDM0NGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssOEJBQThCO0FBQ25DO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRCxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQSxJQUFJLG1CQUFPLENBQUMsMkVBQW9CLHFDQUFxQyxtREFBbUQ7QUFDeEg7QUFDQSxDOzs7Ozs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxncUJBQWtXO0FBQ3hYO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxJQUFVO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixncUJBQWtXO0FBQ3ZYLHNCQUFzQixtQkFBTyxDQUFDLGdxQkFBa1c7QUFDaFk7QUFDQSx1REFBdUQsUUFBUztBQUNoRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQTJCO0FBQ1o7QUFDZjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsbXBCQUFtUztBQUM3UztBQUNBO0FBQ2tHO0FBQ2E7QUFDL0c7QUFDNFU7QUFDNVU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRztBQUN0RyxnQkFBZ0IseUdBQWtCO0FBQ2xDLEVBQUUsMEdBQWM7QUFDaEIsRUFBRSw4TkFBYztBQUNoQixFQUFFLHVPQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLElBQVUsR0FBRztBQUNqQixlQUFlLG1CQUFPLENBQUMsMkVBQW9CO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLHVEQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRWMsZ0ZBQWlCIiwiZmlsZSI6IjAvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZV9jb250ZW50W2RhdGEtdi02Y2YyYTg4YV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5ob21lX2NvbnRlbnQgPiAqW2RhdGEtdi02Y2YyYTg4YV06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmhvbWVfY29udGVudCA+ICpbZGF0YS12LTZjZjJhODhhXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5ob21lX2NvbnRlbnQgPiAqID4gKltkYXRhLXYtNmNmMmE4OGFdOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImhvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUY7QUFBQTtFQUNFLGlCQUFBO0FBRUY7QUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBRUY7QUFBQTtFQUNFLGlCQUFBO0FBRUZcIixcImZpbGVcIjpcImhvbWUudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob21lX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5ob21lX2NvbnRlbnQgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ob21lX2NvbnRlbnQgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmhvbWVfY29udGVudCA+ICogPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaG9tZV9jb250ZW50XCI+XHJcbiAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGkpIGluIG1vbml0b3JJbmZvXCIgOmtleT1cImBtb2l0b3JJdGVtXyR7aX1gXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57eyBpdGVtLmRhdGEgfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbWV0aG9kcyBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBvcyBmcm9tIFwib3MtdXRpbHNcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtb2ludG9yVGltZXM6IDEwMDAsXHJcbiAgICAgIG1vbml0b3JJbmZvOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQ1BVXCIsXHJcbiAgICAgICAgICBkYXRhOiBcIi0tXCIsXHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgaW50ZXJ2YWw6IHRydWUsXHJcbiAgICAgICAgICBnZXQ6IChyKSA9PiB7XHJcbiAgICAgICAgICAgIG9zLmNwdVVzYWdlKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgci5kYXRhPWAkeyh2KjEwMCkudG9GaXhlZCgwKX0lYFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJSQU1cIixcclxuICAgICAgICAgIGRhdGE6IFwiLS1cIixcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICBpbnRlcnZhbDogdHJ1ZSxcclxuICAgICAgICAgIGdldDogKHIpID0+IHtcclxuICAgICAgICAgICAgci5kYXRhPWAkeygoMS1vcy5mcmVlbWVtUGVyY2VudGFnZSgpKSoxMDApLnRvRml4ZWQoMCl9JWBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiBtZXRob2RzLFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IHVybChcIi4vaG9tZS5sZXNzXCIpO1xyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWVfY29udGVudFwiIH0sXG4gICAgX3ZtLl9sKF92bS5tb25pdG9ySW5mbywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBcIm1vaXRvckl0ZW1fXCIgKyBpIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGl0bGUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbX3ZtLl92KF92bS5fcyhpdGVtLmRhdGEpKV0pXG4gICAgICBdKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmNmMmE4OGFcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmNmMmE4OGFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaG9tZS52dWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNmIzNDIyNzhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02Y2YyYTg4YVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ob21lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmNmMmE4OGFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaG9tZS52dWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IGxvZGFzaCBmcm9tIFwibG9kYXNoXCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLmdldE1vbml0b3JJbmZvLCB0aGlzLm1vaW50b3JUaW1lcylcclxuXHJcbiAgICB9LFxyXG4gICAgZ2V0TW9uaXRvckluZm8oKSB7XHJcbiAgICAgICAgdGhpcy5tb25pdG9ySW5mby5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5zaG93ICYmIGl0ZW0uaW50ZXJ2YWwgJiYgdHlwZW9mIGl0ZW0uZ2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0KGl0ZW0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmNmMmE4OGFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hbGVzcy1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ob21lLnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9ob21lLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaG9tZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmNmMmE4OGFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ob21lLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi02Y2YyYTg4YVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxyZW5kZXJlclxcXFx2aWV3c1xcXFxob21lXFxcXGhvbWUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZjZjJhODhhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmNmMmE4OGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==