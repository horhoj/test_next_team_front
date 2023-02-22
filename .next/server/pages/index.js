(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6236:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "AddNewMessageForm_wrap__Rd_3t",
	"field": "AddNewMessageForm_field__7pfGk",
	"fieldRow": "AddNewMessageForm_fieldRow__d4PTG",
	"controlPanelWrap": "AddNewMessageForm_controlPanelWrap__fi5SB",
	"msgError": "AddNewMessageForm_msgError__lElSR",
	"clientValidationCheckBox": "AddNewMessageForm_clientValidationCheckBox__WLTm2"
};


/***/ }),

/***/ 6938:
/***/ ((module) => {

// Exports
module.exports = {
	"ul": "MessageList_ul__56TVM",
	"li": "MessageList_li__uZ2Ye"
};


/***/ }),

/***/ 499:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "PageViewMessageBoard_wrap__FglQR"
};


/***/ }),

/***/ 6512:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "TextArea_wrap__Y_QqB"
};


/***/ }),

/***/ 4885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ AddNewMessageForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6236);
/* harmony import */ var _AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3306);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8836);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7058);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2686);
/* harmony import */ var _store_messageBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3522);
/* harmony import */ var _components_ErrorView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_messageBoard__WEBPACK_IMPORTED_MODULE_8__]);
_store_messageBoard__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const INITIAL_VALUES = {
    author: "",
    text: ""
};
const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object({
    author: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Не введено имя автора!"),
    text: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Не введено сообщение!")
});
const AddNewMessageForm = ()=>{
    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    const [isClientValidation, setIsClientValidation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const addNewMessageRequest = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(_store_messageBoard__WEBPACK_IMPORTED_MODULE_8__/* .messageBoardSlice.selectors.getAddNewMessageRequest */ .Z.selectors.getAddNewMessageRequest);
    const formikParams = isClientValidation ? {
        validationSchema
    } : {};
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
        initialValues: INITIAL_VALUES,
        onSubmit: (values)=>{
            dispatch(_store_messageBoard__WEBPACK_IMPORTED_MODULE_8__/* .messageBoardSlice.thunks.addNewMessageThunk */ .Z.thunks.addNewMessageThunk({
                data: values,
                successCb: ()=>{
                    formik.resetForm();
                }
            }));
        },
        ...formikParams
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrap),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: addNewMessageRequest.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ErrorView__WEBPACK_IMPORTED_MODULE_9__/* .ErrorView */ .o, {
                    error: addNewMessageRequest.error
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: formik.handleSubmit,
                noValidate: true,
                autoComplete: "off",
                className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrap),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().fieldRow),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                type: "checkbox",
                                className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().clientValidationCheckBox),
                                checked: isClientValidation,
                                onChange: (e)=>setIsClientValidation(e.target.checked)
                            }),
                            "Установите для предварительной клиентской валидации"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().field),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Автор"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                type: "text",
                                placeholder: "Введите имя",
                                ...formik.getFieldProps("author")
                            }),
                            Boolean(formik.touched.author) && Boolean(formik.errors.author) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().msgError),
                                children: formik.errors.author
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().field),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Текст сообщения"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__/* .TextArea */ .K, {
                                placeholder: "Введите текст сообщения",
                                ...formik.getFieldProps("text")
                            }),
                            Boolean(formik.touched.text) && Boolean(formik.errors.text) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().msgError),
                                children: formik.errors.text
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_AddNewMessageForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().controlPanelWrap),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                            type: "submit",
                            children: "Отправить"
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport safe */ _AddNewMessageForm__WEBPACK_IMPORTED_MODULE_0__.i)
/* harmony export */ });
/* harmony import */ var _AddNewMessageForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4885);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddNewMessageForm__WEBPACK_IMPORTED_MODULE_0__]);
_AddNewMessageForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ MessageList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/MessageList/MessageList.module.scss
var MessageList_module = __webpack_require__(6938);
var MessageList_module_default = /*#__PURE__*/__webpack_require__.n(MessageList_module);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"styles/fonts.ts","import":"Roboto","arguments":[{"subsets":["cyrillic"],"display":"auto","weight":"500"}],"variableName":"fontRoboto500"}
var fonts_ts_import_Roboto_arguments_subsets_cyrillic_display_auto_weight_500_variableName_fontRoboto500_ = __webpack_require__(6184);
var fonts_ts_import_Roboto_arguments_subsets_cyrillic_display_auto_weight_500_variableName_fontRoboto500_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Roboto_arguments_subsets_cyrillic_display_auto_weight_500_variableName_fontRoboto500_);
;// CONCATENATED MODULE: ./components/MessageList/MessageList.tsx




const MessageList = ({ messageList  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (MessageList_module_default()).ul,
        children: messageList.map((messageItem, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: (MessageList_module_default()).li,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "#",
                            index + 1
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: external_classnames_default()((MessageList_module_default()).author),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (fonts_ts_import_Roboto_arguments_subsets_cyrillic_display_auto_weight_500_variableName_fontRoboto500_default()).className,
                                children: "автор: "
                            }),
                            messageItem.author
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (MessageList_module_default()).text,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (fonts_ts_import_Roboto_arguments_subsets_cyrillic_display_auto_weight_500_variableName_fontRoboto500_default()).className,
                                children: "сообщение: "
                            }),
                            messageItem.text
                        ]
                    })
                ]
            }, messageItem.id))
    });
};

;// CONCATENATED MODULE: ./components/MessageList/index.ts



/***/ }),

/***/ 4913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PageViewMessageBoard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageViewMessageBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(499);
/* harmony import */ var _PageViewMessageBoard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PageViewMessageBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MessageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3870);
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5499);
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AddNewMessageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1150);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2686);
/* harmony import */ var _store_messageBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3522);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AddNewMessageForm__WEBPACK_IMPORTED_MODULE_3__, _store_messageBoard__WEBPACK_IMPORTED_MODULE_5__]);
([_components_AddNewMessageForm__WEBPACK_IMPORTED_MODULE_3__, _store_messageBoard__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PageViewMessageBoard = ({ messageFromServer  })=>{
    const messagesAddedInTheCurrentSession = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(_store_messageBoard__WEBPACK_IMPORTED_MODULE_5__/* .messageBoardSlice.selectors.getMessagesAddedInTheCurrentSession */ .Z.selectors.getMessagesAddedInTheCurrentSession);
    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>{
            dispatch(_store_messageBoard__WEBPACK_IMPORTED_MODULE_5__/* .messageBoardSlice.actions.clear */ .Z.actions.clear());
        }, [
        dispatch
    ]);
    const messageList = [
        ...messageFromServer,
        ...messagesAddedInTheCurrentSession
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_PageViewMessageBoard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrap),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_fonts__WEBPACK_IMPORTED_MODULE_7___default().className),
                children: "Список сообщений"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MessageList__WEBPACK_IMPORTED_MODULE_2__/* .MessageList */ .r, {
                messageList: messageList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_fonts__WEBPACK_IMPORTED_MODULE_7___default().className),
                children: "Добавить новое сообщение"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AddNewMessageForm__WEBPACK_IMPORTED_MODULE_3__/* .AddNewMessageForm */ .i, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4913);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_0__]);
_PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* reexport */ TextArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/TextArea/TextArea.module.scss
var TextArea_module = __webpack_require__(6512);
var TextArea_module_default = /*#__PURE__*/__webpack_require__.n(TextArea_module);
;// CONCATENATED MODULE: ./components/TextArea/TextArea.tsx


const TextArea = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
        className: (TextArea_module_default()).wrap,
        ...props
    });
};

;// CONCATENATED MODULE: ./components/TextArea/index.ts



/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1583);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1534);
/* harmony import */ var _components_ErrorView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_2__, _api_index__WEBPACK_IMPORTED_MODULE_3__]);
([_components_PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_2__, _api_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





async function getServerSideProps() {
    let messageFromServer = null;
    try {
        messageFromServer = await _api_index__WEBPACK_IMPORTED_MODULE_3__/* .api.messageBoard.fetchMessageList */ .h.messageBoard.fetchMessageList();
    } catch (e) {
        messageFromServer = null;
    }
    return {
        props: {
            messageFromServer
        }
    };
}
function Home({ messageFromServer  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            messageFromServer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageViewMessageBoard__WEBPACK_IMPORTED_MODULE_2__/* .PageViewMessageBoard */ .t, {
                messageFromServer: messageFromServer
            }),
            messageFromServer === null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ErrorView__WEBPACK_IMPORTED_MODULE_4__/* .ErrorView */ .o, {
                error: {
                    message: "ошибка обращения к АПИ для получения предварительных данных"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

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
var __webpack_exports__ = __webpack_require__.X(0, [501,522,880], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();