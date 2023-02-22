"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 7438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAverage": () => (/* binding */ addAverage),
/* harmony export */   "fetchHistory": () => (/* binding */ fetchHistory)
/* harmony export */ });
/* harmony import */ var _api_transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_transport__WEBPACK_IMPORTED_MODULE_0__]);
_api_transport__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const fetchHistory = async ()=>{
    const response = await _api_transport__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.request */ .b.request({
        method: "get",
        url: "/average-numbers"
    });
    return response.data;
};
const addAverage = async (value)=>{
    const response = await _api_transport__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.request */ .b.request({
        method: "post",
        url: "/average-numbers",
        data: {
            value
        }
    });
    return response.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _messageBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8087);
/* harmony import */ var _averageNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7438);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_messageBoard__WEBPACK_IMPORTED_MODULE_0__, _averageNumbers__WEBPACK_IMPORTED_MODULE_1__]);
([_messageBoard__WEBPACK_IMPORTED_MODULE_0__, _averageNumbers__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const api = {
    messageBoard: _messageBoard__WEBPACK_IMPORTED_MODULE_0__,
    averageNumbers: _averageNumbers__WEBPACK_IMPORTED_MODULE_1__
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewMessage": () => (/* binding */ addNewMessage),
/* harmony export */   "fetchMessageList": () => (/* binding */ fetchMessageList)
/* harmony export */ });
/* harmony import */ var _api_transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_transport__WEBPACK_IMPORTED_MODULE_0__]);
_api_transport__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const fetchMessageList = async ()=>{
    const response = await _api_transport__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.request */ .b.request({
        method: "get",
        url: "/messages"
    });
    return response.data;
};
const addNewMessage = async (data)=>{
    const response = await _api_transport__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.request */ .b.request({
        method: "post",
        data,
        url: "/messages"
    });
    return response.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ axiosInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const BASE_URL = "http://89.108.88.53:7778" || 0;
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jW": () => (/* binding */ makeRequestCaseToBuilder),
/* harmony export */   "rq": () => (/* binding */ makeRequestSliceStateProperty),
/* harmony export */   "uG": () => (/* binding */ requestExecutor)
/* harmony export */ });
const makeRequestSliceStateProperty = (initialValues = {})=>({
        data: null,
        error: null,
        isLoading: false,
        ...initialValues
    });
const makeRequestCaseToBuilder = (builder, asyncThunk, requestPropertyName)=>{
    builder.addCase(asyncThunk.pending, (state)=>{
        state[requestPropertyName].isLoading = true;
        state[requestPropertyName].error = null;
    }).addCase(asyncThunk.fulfilled, (state, action)=>{
        state[requestPropertyName].isLoading = false;
        state[requestPropertyName].data = action.payload;
    }).addCase(asyncThunk.rejected, (state, { error , payload  })=>{
        state[requestPropertyName].isLoading = false;
        state[requestPropertyName].data = null;
        state[requestPropertyName].error = payload ?? error;
    });
};
const requestExecutor = async (cb, rejectWithValue)=>{
    try {
        return await cb();
    } catch (e) {
        const code = e?.response?.status;
        const responseBody = e?.response?.data;
        if (code && responseBody) {
            const errorPayload = {
                code,
                responseBody,
                isRequestError: true
            };
            return rejectWithValue(errorPayload);
        }
        throw e;
    }
};


/***/ }),

/***/ 2686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;