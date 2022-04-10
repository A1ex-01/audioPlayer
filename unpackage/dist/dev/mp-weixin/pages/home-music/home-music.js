(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home-music/home-music"],{

/***/ 140:
/*!***********************************************************************************!*\
  !*** D:/前端开发/uni_app/AXplayer/main.js?{"page":"pages%2Fhome-music%2Fhome-music"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _homeMusic = _interopRequireDefault(__webpack_require__(/*! ./pages/home-music/home-music.vue */ 141));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_homeMusic.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 141:
/*!****************************************************************!*\
  !*** D:/前端开发/uni_app/AXplayer/pages/home-music/home-music.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-music.vue?vue&type=template&id=4f7576e6&scoped=true& */ 142);
/* harmony import */ var _home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-music.vue?vue&type=script&lang=js& */ 146);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _home_music_vue_vue_type_style_index_0_id_4f7576e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-music.vue?vue&type=style&index=0&id=4f7576e6&lang=scss&scoped=true& */ 150);
/* harmony import */ var _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f7576e6",
  null,
  false,
  _home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/home-music/home-music.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 142:
/*!***********************************************************************************************************!*\
  !*** D:/前端开发/uni_app/AXplayer/pages/home-music/home-music.vue?vue&type=template&id=4f7576e6&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home-music.vue?vue&type=template&id=4f7576e6&scoped=true& */ 143);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_template_id_4f7576e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 143:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/前端开发/uni_app/AXplayer/pages/home-music/home-music.vue?vue&type=template&id=4f7576e6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSearch: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-search/u-search */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-search/u-search")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-search/u-search.vue */ 194))
    },
    Recommend: function() {
      return __webpack_require__.e(/*! import() | components/Recommend/Recommend */ "components/Recommend/Recommend").then(__webpack_require__.bind(null, /*! @/components/Recommend/Recommend.vue */ 202))
    },
    HotList: function() {
      return __webpack_require__.e(/*! import() | components/HotList/HotList */ "components/HotList/HotList").then(__webpack_require__.bind(null, /*! @/components/HotList/HotList.vue */ 209))
    },
    Recommendsong: function() {
      return __webpack_require__.e(/*! import() | components/Recommendsong/Recommendsong */ "components/Recommendsong/Recommendsong").then(__webpack_require__.bind(null, /*! @/components/Recommendsong/Recommendsong.vue */ 216))
    },
    BandCard: function() {
      return __webpack_require__.e(/*! import() | components/BandCard/BandCard */ "components/BandCard/BandCard").then(__webpack_require__.bind(null, /*! @/components/BandCard/BandCard.vue */ 223))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 =
    _vm.swiperList && _vm.recommendList && _vm.src && _vm.isPlayer
      ? __webpack_require__(/*! ../../static/imgs/music/pause_icon.png */ 144)
      : null
  var m1 =
    _vm.swiperList && _vm.recommendList && _vm.src && !_vm.isPlayer
      ? __webpack_require__(/*! ../../static/imgs/music/play_icon.png */ 145)
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 146:
/*!*****************************************************************************************!*\
  !*** D:/前端开发/uni_app/AXplayer/pages/home-music/home-music.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home-music.vue?vue&type=script&lang=js& */ 147);
/* harmony import */ var _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 147:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/前端开发/uni_app/AXplayer/pages/home-music/home-music.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));























































var _store = _interopRequireDefault(__webpack_require__(/*! ../../store */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var Recommend = function Recommend() {__webpack_require__.e(/*! require.ensure | components/Recommend/Recommend */ "components/Recommend/Recommend").then((function () {return resolve(__webpack_require__(/*! ../../components/Recommend/Recommend.vue */ 202));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
// import {
//   getBanner,
//   getrecommend,
//   getHotList,
//   getRemmendList,
// } from "../../utils/api";
var _default = {
  components: { Recommend: Recommend },
  data: function data() {
    return {
      swiperList: null,
      swiperHeight: "120",
      recommendList: null,
      hotList: null,
      recommends: null,
      newList: null,
      createrList: null,
      upperList: null };

  },
  computed: {
    src: function src() {
      if (_store.default.state.ids) {
        return "https://music.163.com/song/media/outer/url?id=".concat(_store.default.state.ids, ".mp3");
      } else {
        return null;
      }
    },
    songInfo: function songInfo() {return _store.default.state.songInfo;},
    isPlayer: function isPlayer() {return _store.default.state.isPlayer;} },

  onLoad: function onLoad() {
    this.getMyBanner();
    this.getCommendList();
    this.getMyHotList();
    this.getMyRemmendList();
    this.getNewList();
    this.getCreaterList();
    this.getUpperList();
  },
  methods: {
    getMyBanner: function getMyBanner() {var _this = this;
      uniCloud.callFunction({
        name: "getBanners",
        success: function success(res) {
          _this.swiperList = res.result.data;
        } });

      // const data = await getBanner();
      //    this.swiperList = data.banners;
      // console.log(this.swiperList)
    },
    getCommendList: function getCommendList() {var _this2 = this;
      // const { playlist } = await getrecommend(2);
      // console.log("base",playlist)
      uniCloud.callFunction({
        name: "getTopList",
        data: {
          type: 3 },

        success: function success(res) {
          // this.recommendList = res.result.data.data[0].tracks.slice(0, 6);
          _this2.recommendList = res.result.data.data[0].tracks.slice(0, 6);
        } });

      // this.recommendList = playlist.tracks.slice(0, 6);
    },
    getMyHotList: function getMyHotList() {var _this3 = this;
      //    const { playlists } = await getHotList(10);
      // console.log("base",playlists);
      uniCloud.callFunction({
        name: "getHotSongMeauList",
        success: function success(res) {
          _this3.hotList = res.result.data;
        } });

      // this.hotList = playlists;
    },
    getMyRemmendList: function getMyRemmendList() {var _this4 = this;
      //    const { playlists } = await getRemmendList(10);
      // console.log(playlists)
      uniCloud.callFunction({
        name: "getRemmendSongMeau",
        success: function success(res) {
          // this.hotList = res.result.data
          _this4.recommends = res.result.data;
        } });

      // this.recommends = playlists;
    },
    getNewList: function getNewList() {var _this5 = this;
      //    const { playlist } = await getrecommend(0);
      // console.log("base",playlist)
      uniCloud.callFunction({
        name: "getTopList",
        data: {
          type: 1 },

        success: function success(res) {
          _this5.newList = res.result.data.data[0];
        } });

      // this.newList = playlist;
    },
    getCreaterList: function getCreaterList() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                // const { playlist } = await getrecommend(3);
                uniCloud.callFunction({
                  name: "getTopList",
                  data: {
                    type: 0 },

                  success: function success(res) {
                    _this6.createrList = res.result.data.data[0];
                  } });

                // this.createrList = playlist;
              case 1:case "end":return _context.stop();}}}, _callee);}))();},
    getUpperList: function getUpperList() {var _this7 = this;
      uniCloud.callFunction({
        name: "getTopList",
        data: {
          type: 2 },

        success: function success(res) {
          _this7.upperList = res.result.data.data[0];
        } });

      // const { playlist } = await getrecommend(2);
      // this.upperList = playlist;
    },
    goSearch: function goSearch() {
      uni.navigateTo({
        url: "/pages/music-search/music-search" });

    },
    changeStatus: function changeStatus() {
      console.log(1);
      _store.default.commit("changeIsPlayer", !this.isPlayer);
      !this.isPlayer ? _store.default.commit("pause") : _store.default.commit("start");
    },
    goMusic: function goMusic() {
      uni.navigateTo({
        url: "/pages/music-player/music-player" });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 148)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 150:
/*!**************************************************************************************************************************!*\
  !*** D:/前端开发/uni_app/AXplayer/pages/home-music/home-music.vue?vue&type=style&index=0&id=4f7576e6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_style_index_0_id_4f7576e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home-music.vue?vue&type=style&index=0&id=4f7576e6&lang=scss&scoped=true& */ 151);
/* harmony import */ var _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_style_index_0_id_4f7576e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_style_index_0_id_4f7576e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_style_index_0_id_4f7576e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_style_index_0_id_4f7576e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuildx_HBuilderX_3_3_3_20211225_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_music_vue_vue_type_style_index_0_id_4f7576e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 151:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/前端开发/uni_app/AXplayer/pages/home-music/home-music.vue?vue&type=style&index=0&id=4f7576e6&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[140,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home-music/home-music.js.map