;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["uni_modules/gtm-mobile-ui/components/g-popover/g-popover"],{

/***/ 579:
/*!********************************************************************************************************!*\
  !*** C:/Users/21000811/Desktop/vue2-temp/uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./g-popover.vue?vue&type=template&id=1a5f3878&scoped=true& */ 580);
/* harmony import */ var _g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./g-popover.vue?vue&type=script&lang=js& */ 582);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _g_popover_vue_vue_type_style_index_0_id_1a5f3878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./g-popover.vue?vue&type=style&index=0&id=1a5f3878&scoped=true&lang=css& */ 584);
/* harmony import */ var _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 28);

var renderjs





/* normalize component */

var component = Object(_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a5f3878",
  null,
  false,
  _g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 580:
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/21000811/Desktop/vue2-temp/uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue?vue&type=template&id=1a5f3878&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./g-popover.vue?vue&type=template&id=1a5f3878&scoped=true& */ 581);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_template_id_1a5f3878_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 581:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/21000811/Desktop/vue2-temp/uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue?vue&type=template&id=1a5f3878&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 582:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/21000811/Desktop/vue2-temp/uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./g-popover.vue?vue&type=script&lang=js& */ 583);
/* harmony import */ var _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 583:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/21000811/Desktop/vue2-temp/uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'gPopover',
  emits: ['close'],
  props: {
    //宽度
    width: {
      type: String,
      default: '300rpx'
    },
    //popup圆角
    radius: {
      type: String,
      default: '8rpx'
    },
    //popup 定位 left right top bottom值
    left: {
      type: String,
      default: 'auto'
    },
    right: {
      type: String,
      default: 'auto'
    },
    top: {
      type: String,
      default: 'auto'
    },
    bottom: {
      type: String,
      default: 'auto'
    },
    translateX: {
      type: String,
      default: '0'
    },
    translateY: {
      type: String,
      default: '0'
    },
    //背景颜色
    backgroundColor: {
      type: String,
      default: '#4c4c4c'
    },
    //字体颜色
    color: {
      type: String,
      default: '#fff'
    },
    //三角border-width
    borderWidth: {
      type: String,
      default: '12rpx'
    },
    //三角形方向 top left right bottom
    direction: {
      type: String,
      default: 'top'
    },
    //定位 left right top bottom值
    triangleLeft: {
      type: String,
      default: 'auto'
    },
    triangleRight: {
      type: String,
      default: 'auto'
    },
    triangleTop: {
      type: String,
      default: 'auto'
    },
    triangleBottom: {
      type: String,
      default: 'auto'
    },
    //定位 relative absolute  fixed
    position: {
      type: String,
      default: 'fixed'
    },
    //flex-end
    flexEnd: {
      type: Boolean,
      default: false
    },
    //是否需要mask
    mask: {
      type: Boolean,
      default: true
    },
    maskBgColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    //控制显示
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 三角形样式
    triangleStyle: function triangleStyle() {
      var borderWidth = this.borderWidth,
        triangleLeft = this.triangleLeft,
        triangleRight = this.triangleRight,
        triangleTop = this.triangleTop,
        triangleBottom = this.triangleBottom,
        direction = this.direction,
        backgroundColor = this.backgroundColor;
      var style = {
        borderWidth: borderWidth,
        left: triangleLeft,
        right: triangleRight,
        top: triangleTop,
        bottom: triangleBottom
      };
      switch (direction) {
        case 'top':
          style.borderColor = "transparent transparent ".concat(backgroundColor, " transparent");
          break;
        case 'bottom':
          style.borderColor = "".concat(backgroundColor, "  transparent transparent transparent");
          break;
        case 'left':
          style.borderColor = "transparent  ".concat(backgroundColor, " transparent transparent");
          break;
        case 'right':
          style.borderColor = "transparent transparent  transparent ".concat(backgroundColor);
          break;
      }
      return style;
    }
  },
  methods: {
    // 关闭propover
    handleClose: function handleClose() {
      if (!this.show) {
        return;
      }
      this.$emit('close', {});
    },
    stop: function stop() {
      return false;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 584:
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/21000811/Desktop/vue2-temp/uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue?vue&type=style&index=0&id=1a5f3878&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_style_index_0_id_1a5f3878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./g-popover.vue?vue&type=style&index=0&id=1a5f3878&scoped=true&lang=css& */ 585);
/* harmony import */ var _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_style_index_0_id_1a5f3878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_style_index_0_id_1a5f3878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_style_index_0_id_1a5f3878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_style_index_0_id_1a5f3878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_HBuilderX_3_2_3_20210825_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_g_popover_vue_vue_type_style_index_0_id_1a5f3878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 585:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/21000811/Desktop/vue2-temp/uni_modules/gtm-mobile-ui/components/g-popover/g-popover.vue?vue&type=style&index=0&id=1a5f3878&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'uni_modules/gtm-mobile-ui/components/g-popover/g-popover-create-component',
    {
        'uni_modules/gtm-mobile-ui/components/g-popover/g-popover-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(579))
        })
    },
    [['uni_modules/gtm-mobile-ui/components/g-popover/g-popover-create-component']]
]);
