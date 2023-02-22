"use strict";
exports.id = 522;
exports.ids = [522];
exports.modules = {

/***/ 3522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ messageBoardSlice)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3709);
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(934);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks__WEBPACK_IMPORTED_MODULE_0__, _slice__WEBPACK_IMPORTED_MODULE_1__]);
([_thunks__WEBPACK_IMPORTED_MODULE_0__, _slice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const messageBoardSlice = {
    actions: _slice__WEBPACK_IMPORTED_MODULE_1__/* .actions */ .N,
    reducer: _slice__WEBPACK_IMPORTED_MODULE_1__/* .reducer */ .I,
    selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
    thunks: _thunks__WEBPACK_IMPORTED_MODULE_0__
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAddNewMessageRequest": () => (/* binding */ getAddNewMessageRequest),
/* harmony export */   "getIsLoading": () => (/* binding */ getIsLoading),
/* harmony export */   "getMessagesAddedInTheCurrentSession": () => (/* binding */ getMessagesAddedInTheCurrentSession)
/* harmony export */ });
const getIsLoading = (state)=>state.messageBoard.addNewMessageRequest.isLoading;
const getMessagesAddedInTheCurrentSession = (state)=>state.messageBoard.messagesAddedInTheCurrentSession;
const getAddNewMessageRequest = (state)=>state.messageBoard.addNewMessageRequest;


/***/ }),

/***/ 7944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ reducer),
/* harmony export */   "N": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(934);
/* harmony import */ var _store_messageBoard_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(258);
/* harmony import */ var _store_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks__WEBPACK_IMPORTED_MODULE_1__]);
_thunks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const initialState = {
    addNewMessageRequest: (0,_store_helpers__WEBPACK_IMPORTED_MODULE_2__/* .makeRequestSliceStateProperty */ .rq)(),
    messagesAddedInTheCurrentSession: []
};
const { reducer , actions  } = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: _store_messageBoard_types__WEBPACK_IMPORTED_MODULE_3__/* .SLICE_NAME */ .Q,
    initialState,
    reducers: {
        clear: ()=>initialState,
        addNewMessageToLocalStore: (state, action)=>{
            state.messagesAddedInTheCurrentSession.push(action.payload);
        }
    },
    extraReducers: (builder)=>{
        (0,_store_helpers__WEBPACK_IMPORTED_MODULE_2__/* .makeRequestCaseToBuilder */ .jW)(builder, _thunks__WEBPACK_IMPORTED_MODULE_1__.addNewMessageThunk, "addNewMessageRequest");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewMessageThunk": () => (/* binding */ addNewMessageThunk)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_messageBoard_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(258);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1534);
/* harmony import */ var _store_messageBoard_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7944);
/* harmony import */ var _store_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_index__WEBPACK_IMPORTED_MODULE_1__, _store_messageBoard_slice__WEBPACK_IMPORTED_MODULE_2__]);
([_api_index__WEBPACK_IMPORTED_MODULE_1__, _store_messageBoard_slice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const addNewMessageThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${_store_messageBoard_types__WEBPACK_IMPORTED_MODULE_3__/* .SLICE_NAME */ .Q}/addNewMessageThunk`, async ({ data , successCb  }, { dispatch , rejectWithValue  })=>{
    return (0,_store_helpers__WEBPACK_IMPORTED_MODULE_4__/* .requestExecutor */ .uG)(async ()=>{
        const newMessage = await _api_index__WEBPACK_IMPORTED_MODULE_1__/* .api.messageBoard.addNewMessage */ .h.messageBoard.addNewMessage(data);
        dispatch(_store_messageBoard_slice__WEBPACK_IMPORTED_MODULE_2__/* .actions.addNewMessageToLocalStore */ .N.addNewMessageToLocalStore(newMessage));
        successCb();
    }, rejectWithValue);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SLICE_NAME)
/* harmony export */ });
const SLICE_NAME = "messageBoard";


/***/ })

};
;