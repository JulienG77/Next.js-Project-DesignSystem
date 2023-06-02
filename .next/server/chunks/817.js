"use strict";
exports.id = 817;
exports.ids = [817];
exports.modules = {

/***/ 3275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useToggle = ({ initial =false  } = {})=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
    const toggle = ()=>{
        setValue(!value);
    };
    return {
        value,
        setValue,
        toggle
    };
};


/***/ }),

/***/ 2163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5241);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Input = ({ isLoading , placeholder , type ="text" , register , errors , errorMsg ="Merci de renseigner ce champs." , id , required =true , isAutoCompleted =false  })=>{
    // console.log("errors", errors[id]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: type,
                placeholder: placeholder,
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(isLoading && "cursor-not-allowed", errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-alert-grey-600", "w-full placeholder-grey-600 p-4 font-light border border-grey-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"),
                disabled: isLoading,
                ...register(id, {
                    required: {
                        value: required,
                        message: errorMsg
                    }
                }),
                autoComplete: isAutoCompleted ? "on" : "off"
            }),
            errors[id] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_typography_typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                variant: "caption4",
                component: "div",
                theme: "danger",
                children: errors[id]?.message
            })
        ]
    });
};


/***/ })

};
;