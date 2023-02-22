exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 6184:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_48f839', '__Roboto_Fallback_48f839'","fontWeight":500,"fontStyle":"normal"},
	"className": "__className_48f839"
};


/***/ }),

/***/ 5499:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_472343', '__Roboto_Fallback_472343'","fontWeight":700,"fontStyle":"normal"},
	"className": "__className_472343"
};


/***/ }),

/***/ 2369:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__30ukX"
};


/***/ }),

/***/ 3389:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ErrorView_wrap__gVGTr"
};


/***/ }),

/***/ 6686:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__lvORT"
};


/***/ }),

/***/ 7058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Button/Button.module.scss
var Button_module = __webpack_require__(2369);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./components/Button/Button.tsx



const Button = ({ children , className , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: external_classnames_default()((Button_module_default()).button, className),
        ...props,
        children: children
    });
};

;// CONCATENATED MODULE: ./components/Button/index.ts



/***/ }),

/***/ 1170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ ErrorView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/ErrorView/ErrorView.module.scss
var ErrorView_module = __webpack_require__(3389);
var ErrorView_module_default = /*#__PURE__*/__webpack_require__.n(ErrorView_module);
;// CONCATENATED MODULE: ./components/ErrorView/ErrorView.tsx


const ErrorView = ({ error  })=>{
    let errorMsg = null;
    if (error?.isRequestError) {
        errorMsg = error?.responseBody;
    } else {
        errorMsg = error?.message;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ErrorView_module_default()).wrap,
        children: JSON.stringify(errorMsg)
    });
};

;// CONCATENATED MODULE: ./components/ErrorView/index.ts



/***/ }),

/***/ 3306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ Input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Input/Input.module.scss
var Input_module = __webpack_require__(6686);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
;// CONCATENATED MODULE: ./components/Input/Input.tsx



const Input = ({ className , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        className: external_classnames_default()((Input_module_default()).input, className),
        ...props
    });
};

;// CONCATENATED MODULE: ./components/Input/index.ts



/***/ })

};
;