"use strict";
exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 1965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ averageNumbersSlice)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3801);
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1484);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks__WEBPACK_IMPORTED_MODULE_0__, _slice__WEBPACK_IMPORTED_MODULE_1__]);
([_thunks__WEBPACK_IMPORTED_MODULE_0__, _slice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const averageNumbersSlice = {
    actions: _slice__WEBPACK_IMPORTED_MODULE_1__/* .actions */ .N,
    reducer: _slice__WEBPACK_IMPORTED_MODULE_1__/* .reducer */ .I,
    selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
    thunks: _thunks__WEBPACK_IMPORTED_MODULE_0__
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAddAverageRequest": () => (/* binding */ getAddAverageRequest),
/* harmony export */   "getFetchHistoryRequest": () => (/* binding */ getFetchHistoryRequest),
/* harmony export */   "getIsLoading": () => (/* binding */ getIsLoading),
/* harmony export */   "getLocalHistory": () => (/* binding */ getLocalHistory)
/* harmony export */ });
const getIsLoading = (state)=>state.averageNumbers.fetchHistoryRequest.isLoading || state.averageNumbers.addAverageRequest.isLoading;
const getFetchHistoryRequest = (state)=>state.averageNumbers.fetchHistoryRequest;
const getAddAverageRequest = (state)=>state.averageNumbers.addAverageRequest;
const getLocalHistory = (state)=>state.averageNumbers.localHistory;


/***/ }),

/***/ 6415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ reducer),
/* harmony export */   "N": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1484);
/* harmony import */ var _store_averageNumbers_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4204);
/* harmony import */ var _store_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks__WEBPACK_IMPORTED_MODULE_1__]);
_thunks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const initialState = {
    fetchHistoryRequest: (0,_store_helpers__WEBPACK_IMPORTED_MODULE_2__/* .makeRequestSliceStateProperty */ .rq)(),
    addAverageRequest: (0,_store_helpers__WEBPACK_IMPORTED_MODULE_2__/* .makeRequestSliceStateProperty */ .rq)(),
    localHistory: []
};
const { reducer , actions  } = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: _store_averageNumbers_types__WEBPACK_IMPORTED_MODULE_3__/* .SLICE_NAME */ .Q,
    initialState,
    reducers: {
        clear: ()=>initialState,
        addToLocalHistory: (state, action)=>{
            state.localHistory.push(action.payload);
        }
    },
    extraReducers: (builder)=>{
        (0,_store_helpers__WEBPACK_IMPORTED_MODULE_2__/* .makeRequestCaseToBuilder */ .jW)(builder, _thunks__WEBPACK_IMPORTED_MODULE_1__.fetchHistoryThunk, "fetchHistoryRequest");
        (0,_store_helpers__WEBPACK_IMPORTED_MODULE_2__/* .makeRequestCaseToBuilder */ .jW)(builder, _thunks__WEBPACK_IMPORTED_MODULE_1__.addAverageThunk, "addAverageRequest");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAverageThunk": () => (/* binding */ addAverageThunk),
/* harmony export */   "fetchHistoryThunk": () => (/* binding */ fetchHistoryThunk)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_averageNumbers_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4204);
/* harmony import */ var _store_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3308);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1534);
/* harmony import */ var _store_averageNumbers_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_index__WEBPACK_IMPORTED_MODULE_1__, _store_averageNumbers_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_api_index__WEBPACK_IMPORTED_MODULE_1__, _store_averageNumbers_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const fetchHistoryThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${_store_averageNumbers_types__WEBPACK_IMPORTED_MODULE_3__/* .SLICE_NAME */ .Q}/fetchHistoryThunk`, async (_, { rejectWithValue  })=>{
    return (0,_store_helpers__WEBPACK_IMPORTED_MODULE_4__/* .requestExecutor */ .uG)(async ()=>{
        return _api_index__WEBPACK_IMPORTED_MODULE_1__/* .api.averageNumbers.fetchHistory */ .h.averageNumbers.fetchHistory();
    }, rejectWithValue);
});
const addAverageThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${_store_averageNumbers_types__WEBPACK_IMPORTED_MODULE_3__/* .SLICE_NAME */ .Q}/addAverageThunk`, async ({ value , successCb  }, { rejectWithValue , dispatch  })=>{
    return (0,_store_helpers__WEBPACK_IMPORTED_MODULE_4__/* .requestExecutor */ .uG)(async ()=>{
        const result = await _api_index__WEBPACK_IMPORTED_MODULE_1__/* .api.averageNumbers.addAverage */ .h.averageNumbers.addAverage(value);
        dispatch(_store_averageNumbers_slice__WEBPACK_IMPORTED_MODULE_2__/* .actions.addToLocalHistory */ .N.addToLocalHistory(result));
        successCb();
        return result;
    }, rejectWithValue);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SLICE_NAME)
/* harmony export */ });
const SLICE_NAME = "averageNumbers";


/***/ })

};
;