(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3029:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Nav_wrap__XlS8C",
	"link": "Nav_link__1bnM8",
	"active": "Nav_active__glkwW"
};


/***/ }),

/***/ 8879:
/***/ ((module) => {

// Exports
module.exports = {
	"Spinner": "Spinner_Spinner__lJT7i",
	"progressBar": "Spinner_progressBar__JdghL",
	"enter": "Spinner_enter__pFe57",
	"enterActive": "Spinner_enterActive__HbCDs",
	"exit": "Spinner_exit__lTybL",
	"exitActive": "Spinner_exitActive__JSgE6"
};


/***/ }),

/***/ 8979:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "AppLayout_wrap__RhpIx",
	"header": "AppLayout_header__8j8Lh",
	"main": "AppLayout_main__Jjre4"
};


/***/ }),

/***/ 7586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ Nav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Nav/Nav.module.scss
var Nav_module = __webpack_require__(3029);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./config/routes.ts
var AppRoutes;
(function(AppRoutes) {
    AppRoutes["MESSAGE_BOARDS"] = "/";
    AppRoutes["AVERAGE_NUMBERS"] = "/average-numbers";
})(AppRoutes || (AppRoutes = {}));

// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"styles/fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"display":"auto","weight":"700"}],"variableName":"fontRoboto700"}
var fonts_ts_import_Roboto_arguments_subsets_latin_display_auto_weight_700_variableName_fontRoboto700_ = __webpack_require__(5499);
var fonts_ts_import_Roboto_arguments_subsets_latin_display_auto_weight_700_variableName_fontRoboto700_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Roboto_arguments_subsets_latin_display_auto_weight_700_variableName_fontRoboto700_);
;// CONCATENATED MODULE: ./components/Nav/Nav.tsx







const Nav = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const getLinkProps = (link)=>({
            href: link,
            className: external_classnames_default()((Nav_module_default()).link, router.asPath === link && (Nav_module_default()).active, router.asPath === link && (fonts_ts_import_Roboto_arguments_subsets_latin_display_auto_weight_700_variableName_fontRoboto700_default()).className)
        });
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Nav_module_default()).wrap,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        ...getLinkProps(AppRoutes.MESSAGE_BOARDS),
                        children: "Доска сообщений"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        ...getLinkProps(AppRoutes.AVERAGE_NUMBERS),
                        children: "Средние числа"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Nav/index.ts



/***/ }),

/***/ 8599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ Portal)
});

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
;// CONCATENATED MODULE: ./components/Portal/Portal.tsx

const Portal = ({ children  })=> false ? /*#__PURE__*/ 0 : null;

;// CONCATENATED MODULE: ./components/Portal/index.ts



/***/ }),

/***/ 1953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8879);
/* harmony import */ var _Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8599);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2686);
/* harmony import */ var _store_messageBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3522);
/* harmony import */ var _store_averageNumbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_messageBoard__WEBPACK_IMPORTED_MODULE_5__, _store_averageNumbers__WEBPACK_IMPORTED_MODULE_6__]);
([_store_messageBoard__WEBPACK_IMPORTED_MODULE_5__, _store_averageNumbers__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Spinner = ()=>{
    const messageBoardIsLoading = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(_store_messageBoard__WEBPACK_IMPORTED_MODULE_5__/* .messageBoardSlice.selectors.getIsLoading */ .Z.selectors.getIsLoading);
    const averageNumbersIsLoading = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(_store_averageNumbers__WEBPACK_IMPORTED_MODULE_6__/* .averageNumbersSlice.selectors.getIsLoading */ ._.selectors.getIsLoading);
    const isLoading = messageBoardIsLoading || averageNumbersIsLoading;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Portal__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .h, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
            in: isLoading,
            nodeRef: ref,
            timeout: 100,
            unmountOnExit: true,
            classNames: {
                enter: (_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7___default().enter),
                enterActive: (_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7___default().enterActive),
                exit: (_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7___default().exit),
                exitActive: (_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7___default().exitActive)
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Spinner),
                ref: ref
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _Spinner__WEBPACK_IMPORTED_MODULE_0__.$)
/* harmony export */ });
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Spinner__WEBPACK_IMPORTED_MODULE_0__]);
_Spinner__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8979);
/* harmony import */ var _AppLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AppLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5216);
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7586);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Spinner__WEBPACK_IMPORTED_MODULE_3__]);
_components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AppLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_3__/* .Spinner */ .$, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_AppLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrap), (_styles_fonts__WEBPACK_IMPORTED_MODULE_5___default().className)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: (_AppLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__/* .Nav */ .J, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: (_AppLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),
                        children: children
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _AppLayout__WEBPACK_IMPORTED_MODULE_0__.L)
/* harmony export */ });
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2814);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppLayout__WEBPACK_IMPORTED_MODULE_0__]);
_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3716);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8407);
/* harmony import */ var _layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__, _layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__]);
([_store_store__WEBPACK_IMPORTED_MODULE_3__, _layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: _store_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__/* .AppLayout */ .L, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_messageBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3522);
/* harmony import */ var _store_averageNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_messageBoard__WEBPACK_IMPORTED_MODULE_1__, _store_averageNumbers__WEBPACK_IMPORTED_MODULE_2__]);
([_store_messageBoard__WEBPACK_IMPORTED_MODULE_1__, _store_averageNumbers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    devTools: true,
    reducer: {
        messageBoard: _store_messageBoard__WEBPACK_IMPORTED_MODULE_1__/* .messageBoardSlice.reducer */ .Z.reducer,
        averageNumbers: _store_averageNumbers__WEBPACK_IMPORTED_MODULE_2__/* .averageNumbersSlice.reducer */ ._.reducer
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 4466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,36,501,965,522], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();