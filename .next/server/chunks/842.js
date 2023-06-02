"use strict";
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 5567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* binding */ firebaseLogOutUser),
/* harmony export */   "QY": () => (/* binding */ ResetUserPassword),
/* harmony export */   "Vf": () => (/* binding */ firebaseSignInUser),
/* harmony export */   "f1": () => (/* binding */ firebaseCreateUser)
/* harmony export */ });
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _config_firebase_config__WEBPACK_IMPORTED_MODULE_1__]);
([_firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _config_firebase_config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseCreateUser = async (email, password)=>{
    try {
        const userCredential = await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I, email, password);
        return {
            data: userCredential.user
        };
    } catch (error) {
        const firebaseError = error;
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        };
    }
};
const firebaseSignInUser = async (email, password)=>{
    try {
        const userCredential = await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I, email, password);
        return {
            data: userCredential.user
        };
    } catch (error) {
        const firebaseError = error;
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        };
    }
};
const firebaseLogOutUser = async ()=>{
    try {
        await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I);
        return {
            data: true
        };
    } catch (error) {
        const firebaseError = error;
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        };
    }
};
const ResetUserPassword = async (email)=>{
    try {
        await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail)(_config_firebase_config__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I, email);
        return {
            data: true
        };
    } catch (error) {
        const firebaseError = error;
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//
// Your web app's Firebase configuration
//  OLD SETUP
// const firebaseConfig = {
//
//     apiKey: "AIzaSyB8evXhjnYJ4vN636MqowHzjl_3jnowyRI",
//
//     authDomain: "projetnextmonkey.firebaseapp.com",
//
//     projectId: "projetnextmonkey",
//
//     storageBucket: "projetnextmonkey.appspot.com",
//
//     messagingSenderId: "1022447178884",
//
//     appId: "1:1022447178884:web:e9dcc10bea951c686eded1"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDku59EJ6XoGak8uvdQxeq1B3DMWbRpwFo",
    authDomain: "monkeytest1-ec597.firebaseapp.com",
    projectId: "monkeytest1-ec597",
    storageBucket: "monkeytest1-ec597.appspot.com",
    messagingSenderId: "218322387768",
    appId: "1:218322387768:web:b8fcd8233c13e72e60f7cd"
};
//
// const firebaseConfig = {
//
//     apiKey: process.env.API_KEY,
//
//     authDomain: process.env.AUTH_DOMAIN,
//
//     projectId: process.env.PROJECT_ID,
//
//     storageBucket: process.env.STORAGE_BUCKET,
//
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//
//     appId: process.env.APP_ID,
//
//     measurementId: process.env.MEASUREMENT_ID,
// };
//
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ LinkTypes)
/* harmony export */ });
const LinkTypes = {
    INTERNAL: "internal",
    EXTERNAL: "external"
};


/***/ }),

/***/ 2534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var _design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5241);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9194);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Breadcrumbs = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const asPath = router.asPath;
    const segments = asPath.split("/");
    const lastSegment = segments[segments.length - 1];
    segments[0] = "accueil";
    const view = segments.map((path, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                href: index > 0 ? `/ ${segments.slice(1, index + 1).join("/")}` : `/`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                        variant: "caption3",
                        component: "span",
                        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(path !== lastSegment ? "text-grey-600" : "text-grey", "capitalize hover:text-grey animate"),
                        children: path !== "accueil" ? path.replace(/-/g, " ") : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiHome3Line, {
                            className: "mb-1 inline"
                        })
                    }),
                    path !== lastSegment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                        variant: "caption2",
                        component: "span",
                        className: "ml-2 text-grey-600",
                        children: "/"
                    })
                ]
            })
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container_container__WEBPACK_IMPORTED_MODULE_7__/* .Container */ .W, {
        className: "flex items-center gap-2 py-7",
        children: [
            " ",
            view,
            " "
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const Container = ({ children , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "w-full max-w-7xl mx-auto px-5 lg:px-10"),
        children: children
    });
};


/***/ }),

/***/ 6559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(229);
/* harmony import */ var _navigation_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5217);
/* harmony import */ var _breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2534);
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9194);
/* harmony import */ var _navigation_user_account_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navigation_footer__WEBPACK_IMPORTED_MODULE_3__, _breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__, _navigation_user_account_navigation__WEBPACK_IMPORTED_MODULE_6__]);
([_navigation_footer__WEBPACK_IMPORTED_MODULE_3__, _breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__, _navigation_user_account_navigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Layout = ({ children , isdisplayBreadcrumbs =true , widthSideBar  })=>{
    let view = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: " "
    });
    if (widthSideBar) {
        view = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container_container__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
            className: "mb-14",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-12 gap-7",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navigation_user_account_navigation__WEBPACK_IMPORTED_MODULE_6__/* .UserAccountNavigation */ .L, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-9 bg-primary-200",
                        children: children
                    })
                ]
            })
        });
    } else {
        view = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                " ",
                children,
                " "
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W, {}),
            isdisplayBreadcrumbs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__/* .Breadcrumbs */ .O, {}),
            view,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navigation_footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ActiveLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const ActiveLink = ({ href , children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    console.log("router ::", router.pathname);
    console.log("href", href);
    const isActive = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        return router.pathname === href;
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(isActive && "text-primary font-medium"),
        children: children
    });
};


/***/ }),

/***/ 7206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ footerSocialNetworksLinks),
/* harmony export */   "d": () => (/* binding */ footerLinks)
/* harmony export */ });
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__);


const footerApplicationLinks = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    // {
    //     label:"Nouveau Lien",
    //     baseUrl: "/#",
    //     type: "internal",
    // },
    {
        label: "Projets",
        baseUrl: "https://masstodo.com",
        type: "external"
    },
    {
        label: "Formations",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    }
];
const footerUserLinks = [
    {
        label: "Mon Espace",
        baseUrl: "/mon-espace",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal"
    },
    {
        label: "Mot de Passe oubli\xe9",
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: "internal"
    }
];
const footerInformationLinks = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialit\xe9",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    }
];
const footerSocialNetworksLinks = [
    {
        label: "LinkedIn",
        baseUrl: "https://www.linkedin.com",
        type: "external",
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_0__.AiOutlineLinkedin
    },
    {
        label: "GitHub",
        baseUrl: "https://github.com/",
        type: "external",
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_0__.AiFillGithub
    },
    {
        label: "Mail",
        baseUrl: "/design-system",
        type: "internal",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiMail
    }
];
const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks
    },
    {
        label: "Utilisateurs",
        links: footerUserLinks
    },
    {
        label: "Informations",
        links: footerInformationLinks
    },
    {
        label: "R\xe9seaux",
        links: footerSocialNetworksLinks
    }
];


/***/ }),

/***/ 5217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _active_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4733);
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9194);
/* harmony import */ var _design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5241);
/* harmony import */ var _lib_link_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7354);
/* harmony import */ var _social_networks_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5684);
/* harmony import */ var _app_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7206);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6555);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_social_networks_buttons__WEBPACK_IMPORTED_MODULE_5__, uuid__WEBPACK_IMPORTED_MODULE_8__]);
([_social_networks_buttons__WEBPACK_IMPORTED_MODULE_5__, uuid__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

{}




{}
{}


const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const footerNavigationList = _app_links__WEBPACK_IMPORTED_MODULE_6__/* .footerLinks.map */ .d.map((colomnLinks)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLink, {
            data: colomnLinks
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)()));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col md:justify-center bg-grey",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container_container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
                className: "  md:flex lg:flex justify-between pt-16",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                variant: "caption1",
                                theme: "white",
                                weight: "medium",
                                children: "Lien Youtube"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                variant: "caption3",
                                theme: "grey",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("q", {
                                    children: "\xe7a sert \xe0 rien..."
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.youtube.com",
                                target: "_blank",
                                className: "underline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: "/assets/img/cameleonElippse.png",
                                    width: "170",
                                    height: "120",
                                    alt: "footer image"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center items-center justify-center justify-between gap-2 pt-5 text-primary sm:flex md:flex md:gap-7 w-full",
                        children: footerNavigationList
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-primary"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container_container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
                className: " pt-9 pb-11 space-y-11",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "text-grey-800"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                variant: "caption4",
                                theme: "grey",
                                children: [
                                    `Copyright ©  .${currentYear} |  Propulsed by `,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://masstodo.com",
                                        target: "_blank",
                                        className: "underline",
                                        children: "JuDV86"
                                    }),
                                    `@MassToDo.com`
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_social_networks_buttons__WEBPACK_IMPORTED_MODULE_5__/* .SocialNetworksButtons */ .v, {
                                    theme: "grey"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const FooterLink = ({ data  })=>{
    const linksList = data.links.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                link.type === _lib_link_types__WEBPACK_IMPORTED_MODULE_4__/* .LinkTypes.INTERNAL */ .a.INTERNAL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_1__/* .ActiveLink */ .O, {
                    href: link.baseUrl,
                    children: link.label
                }),
                link.type === _lib_link_types__WEBPACK_IMPORTED_MODULE_4__/* .LinkTypes.EXTERNAL */ .a.EXTERNAL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: link.baseUrl,
                    target: "_blank",
                    children: link.label
                })
            ]
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)()));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                theme: "white",
                variant: "caption2",
                weight: "medium",
                className: "pb-5 underline items-center",
                children: data.label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                theme: "grey",
                variant: "caption3",
                className: "flex flex-col justify-center space-y-4 mb-6",
                children: linksList
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9194);
/* harmony import */ var _design_system_logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8620);
/* harmony import */ var _design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5241);
/* harmony import */ var _design_system_buttons_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3572);
/* harmony import */ var _active_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4733);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







const Navigation = ({})=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full bg-grey-500 hover:bg-grey-400/50 animate border-b-2 border-500",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container_container__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W, {
            className: "flex items-center justify-between py-1.5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_5__/* .ActiveLink */ .O, {
                    href: "/",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invisible sm:visible",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_logo_logo__WEBPACK_IMPORTED_MODULE_2__/* .Logo */ .T, {
                                    size: "small"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col -ml-[70px] mr-[15px] sm:-ml-[9px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-grey font-bold text-[22x]",
                                        children: "TITLE"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                        variant: "caption4",
                                        component: "span",
                                        theme: "grey",
                                        className: "mr-[10px]",
                                        children: "SLOGAN slogan"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center gap-7 ml-1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                        variant: "caption5",
                        component: "div",
                        className: " ml-auto mr-auto font-bold flex items-center gap-3.5 sm:text-[0.8rem] sm:font-normal md:text-[1rem] lg:text-[1.3rem]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_5__/* .ActiveLink */ .O, {
                                href: "/design-system",
                                children: "Design System"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_5__/* .ActiveLink */ .O, {
                                href: "/projects",
                                children: "Projects"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_5__/* .ActiveLink */ .O, {
                                href: "/Formations",
                                children: "Formations"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_5__/* .ActiveLink */ .O, {
                                href: "/Contact",
                                children: "Contact"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center gap-7",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "ml-5  flex-col sm:flex-row md:flex-row lg:flex-row items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_buttons_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                size: "very-small",
                                baseUrl: "/connexion",
                                children: "Connexion"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_buttons_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                size: "very-small",
                                variant: "secondary",
                                baseUrl: "/connexion/inscription",
                                children: "Inscription"
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 5684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ SocialNetworksButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _app_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7206);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var _design_system_buttons_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3572);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SocialNetworksButtons = ({ className , theme ="accent"  })=>{
    const icoList = _app_links__WEBPACK_IMPORTED_MODULE_1__/* .footerSocialNetworksLinks.map */ .F.map((socialNetworks)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_buttons_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
            variant: "icon",
            iconTheme: theme,
            icon: {
                icon: socialNetworks.icon ? socialNetworks.icon : react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiMessageAltError
            },
            baseUrl: socialNetworks.baseUrl,
            linkType: socialNetworks.type
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(className, "flex items-center gap-2.5"),
        children: icoList
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ UserAccountNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _design_system_buttons_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3572);
/* harmony import */ var _design_system_typography_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5241);
/* harmony import */ var _design_system_box_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(687);
/* harmony import */ var _api_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5567);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _active_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4733);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_authentication__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
([_api_authentication__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UserAccountNavigation = ()=>{
    const handleLogOutUser = async ()=>{
        const { error  } = await (0,_api_authentication__WEBPACK_IMPORTED_MODULE_4__/* .firebaseLogOutUser */ .Lj)();
        if (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(error.message);
            return;
        }
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("D\xe9connexion r\xe9ussie.");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_design_system_box_box__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
        className: "flex flex-col gap-5 pb-5 py-3",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3 pb-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                        variant: "caption2",
                        weight: "medium",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_6__/* .ActiveLink */ .O, {
                            href: "/mon-espace",
                            children: "Mon Compte"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_typography_typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                        variant: "caption2",
                        weight: "medium",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_link__WEBPACK_IMPORTED_MODULE_6__/* .ActiveLink */ .O, {
                            href: "/mes-projets",
                            children: "Mes Projets"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_design_system_buttons_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                action: handleLogOutUser,
                variant: "danger",
                children: "Se D\xe9connecter"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Seo = ({ title , description  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://static.snoweb.io/snowebsvg/dist/css/core-<version>.css"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description \xe0 la zob",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            })
        ]
    });
};


/***/ }),

/***/ 687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const Box = ({ children , className , padding_x ="px-9" , padding_y ="px9"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("w-full border border-grey-400 rounded bg-white", className, padding_x, padding_y),
        children: children
    });
};


/***/ }),

/***/ 3572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7520);
/* harmony import */ var _lib_link_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7354);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






const Button = ({ size ="medium" , variant ="accent" , icon , iconTheme ="accent" , iconPosition ="right" , disabled , isLoading , children , baseUrl , linkType ="internal" , type ="button" , fullWidth =false , action =()=>{}  })=>{
    let variantStyles = "", sizeStyles = "", iconSize = 0;
    switch(variant){
        case "accent":
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-grey-400/50 border border-grey-500 text-grey-900 rounded";
            break;
        case "disabled":
            variantStyles = "bg-grey-400 border border-grey-500 text-grey-600 rounded cursor-not-allowed";
            break;
        case "success":
            variantStyles = "bg-secondary hover:bg-secondary-400 text-white rounded";
            break;
        case "danger":
            variantStyles = "bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
            break;
        case "icon":
            if (iconTheme === "accent") {
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = " text-primary bg-primary-200 hover:bg-primary-300/50 rounded-full";
            }
            if (iconTheme === "grey") {
                variantStyles = "bg-grey-800 hover:bg-grey-700 text-white rounded-full";
            }
            break;
    }
    switch(size){
        case "very-small":
            sizeStyles = `text-caption4 font-small ${variant === "icon" ? "flex items-center justify-center w-[25px] h-[25px]" : "px-[10px] py-[8px] mt-0.5 mb-2 ml-1"}`;
            iconSize = 14;
            break;
        case "small":
            sizeStyles = `text-caption3 font-medium ${variant === "icon" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"}`;
            iconSize = 18;
            break;
        case "medium":
            sizeStyles = `text-caption2 flex font-medium justify-center h-[50px] ${variant === "icon" ? "flex items-center justify-center w-[50px]" : "px-[20px] py-[15px]"}`;
            iconSize = 20;
            break;
        case "large":
            sizeStyles = `text-caption1 font-medium ${variant === "icon" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[24px] py-[18px]"}`;
            iconSize = 24;
            break;
    }
    const buttonContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: variant === "accent" || variant === "icon" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_3__/* .Spinner */ .$, {
                    size: "small",
                    variant: "accent"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_3__/* .Spinner */ .$, {
                    size: "small",
                    variant: "primary"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(isLoading && "invisible"),
                children: icon && variant === "icon" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(icon.icon, {
                    size: iconSize
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(icon && "flex items-center gap-2"),
                    children: [
                        icon && iconPosition === "left" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(icon.icon, {
                            size: iconSize
                        }),
                        children,
                        icon && iconPosition === "right" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(icon.icon, {
                            size: iconSize
                        })
                    ]
                })
            })
        ]
    });
    const handleClick = ()=>{
        if (action) {
            action();
        }
    };
    const buttonElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(variantStyles, iconSize, sizeStyles, isLoading && "cursor-not-allowed", fullWidth && "w-full", "relative animate"),
        onClick: handleClick,
        disabled: disabled || isLoading ? true : false,
        children: buttonContent
    });
    if (baseUrl) {
        if (linkType === _lib_link_types__WEBPACK_IMPORTED_MODULE_4__/* .LinkTypes.EXTERNAL */ .a.EXTERNAL) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: baseUrl,
                target: "_blank",
                children: buttonElement
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: baseUrl,
                children: buttonElement
            });
        }
    }
    return buttonElement;
};


/***/ }),

/***/ 8620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Logo = ({ size ="medium"  })=>{
    let sizeLogo;
    switch(size){
        case "very-small":
            sizeLogo = 34;
            break;
        case "small":
            sizeLogo = 61;
            break;
        case "medium":
            sizeLogo = 88;
            break;
        case "large":
            sizeLogo = 140;
            break;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: sizeLogo,
            viewBox: "0 0 316 317",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.447",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M170.5 40.5C177.544 40.559 184.211 41.8923 190.5 44.5C183.671 43.3658 177.004 42.0325 170.5 40.5Z",
                    fill: "#998AA5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M140.5 40.5C138.438 41.7763 136.104 42.6097 133.5 43C135.154 43.6077 136.821 44.1077 138.5 44.5C134.319 45.6604 129.985 46.6604 125.5 47.5C133.63 44.3827 133.296 43.3827 124.5 44.5C129.542 42.538 134.875 41.2047 140.5 40.5Z",
                    fill: "#6D5C7E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.099",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M173.5 44.5C179.868 45.6753 186.201 47.0086 192.5 48.5C193.93 49.5375 195.597 50.2041 197.5 50.5C206.935 54.3839 215.935 59.0506 224.5 64.5C225.262 66.2624 226.596 67.2624 228.5 67.5C235.841 73.8416 242.508 80.8416 248.5 88.5C249.604 90.3885 250.937 92.0552 252.5 93.5C261.66 108.47 267.993 124.47 271.5 141.5C272.724 152.505 272.724 163.505 271.5 174.5C265.887 206.168 250.554 231.168 225.5 249.5C224.833 249.5 224.5 249.833 224.5 250.5C221.235 252.584 218.068 254.917 215 257.5C213.421 256.828 212.254 257.495 211.5 259.5C209.678 258.571 208.345 259.238 207.5 261.5C204.91 261.918 202.577 262.918 200.5 264.5C199.914 264.291 199.414 263.957 199 263.5C195.192 266.29 191.026 268.29 186.5 269.5C186.167 269.5 185.833 269.5 185.5 269.5C185.167 268.167 184.833 268.167 184.5 269.5C183.391 269.557 182.391 269.89 181.5 270.5C181.158 269.662 180.492 269.328 179.5 269.5C177.717 270.175 176.05 270.508 174.5 270.5C174.5 270.833 174.5 271.167 174.5 271.5C174.167 271.5 173.833 271.5 173.5 271.5C173.167 270.167 172.833 270.167 172.5 271.5C171.508 271.328 170.842 271.662 170.5 272.5C170.167 272.5 169.833 272.5 169.5 272.5C168.5 271.167 167.5 271.167 166.5 272.5C165.833 272.5 165.167 272.5 164.5 272.5C160.019 272.045 156.019 272.045 152.5 272.5C150.782 271.776 148.948 271.109 147 270.5C146.005 271.066 145.172 271.733 144.5 272.5C143.833 272.5 143.5 272.167 143.5 271.5C143.167 270.167 142.833 270.167 142.5 271.5C142.167 271.5 141.833 271.5 141.5 271.5C141.167 270.167 140.833 270.167 140.5 271.5C140.167 271.5 139.833 271.5 139.5 271.5C139.5 271.167 139.5 270.833 139.5 270.5C137.653 269.427 135.653 269.427 133.5 270.5C133.167 269.167 132.833 269.167 132.5 270.5C132.167 270.5 131.833 270.5 131.5 270.5C130.329 269.655 128.995 268.989 127.5 268.5C125.637 264.803 126.303 261.803 129.5 259.5C130.183 261.176 131.517 261.843 133.5 261.5C133.833 261.5 134.167 261.5 134.5 261.5C139.583 263.078 144.916 263.745 150.5 263.5C162.257 263.885 173.924 263.051 185.5 261C189.109 260.299 192.442 259.132 195.5 257.5C201.793 255.968 207.459 253.302 212.5 249.5C216.392 247.938 219.725 245.605 222.5 242.5C238.381 230.95 249.714 215.95 256.5 197.5C259.14 192.915 260.806 187.915 261.5 182.5C263.118 179.829 263.785 176.829 263.5 173.5C264.032 167.848 264.365 162.181 264.5 156.5C265.15 156.804 265.817 157.137 266.5 157.5C267.66 153.541 267.827 149.541 267 145.5C266.55 147.519 265.717 149.352 264.5 151C264.833 151.333 265.167 151.667 265.5 152C264.058 152.377 263.058 153.21 262.5 154.5C259.064 155.782 255.731 155.782 252.5 154.5C261.005 149.695 264.338 142.362 262.5 132.5C262.59 129.848 261.924 127.515 260.5 125.5C260.5 125.167 260.5 124.833 260.5 124.5C258.455 117.013 255.455 110.013 251.5 103.5C250.829 102.153 250.829 100.986 251.5 100C247.676 96.8307 244.51 92.9974 242 88.5C238.238 84.2305 234.071 80.5638 229.5 77.5C219.033 67.0727 206.7 59.406 192.5 54.5C190.898 52.9261 188.898 52.2594 186.5 52.5C186.133 57.0028 185.133 61.3361 183.5 65.5C182.599 66.2905 181.932 67.2905 181.5 68.5C180.833 68.1667 180.167 67.8333 179.5 67.5C180.931 65.2151 181.931 62.7151 182.5 60C182.745 58.0886 182.745 56.0886 182.5 54C145.909 46.3396 112.909 54.5063 83.5 78.5C82.5 78.8333 81.8333 79.5 81.5 80.5C81.631 81.2389 81.4643 81.9056 81 82.5C72.9398 88.6076 66.7731 96.2742 62.5 105.5C63.1667 105.167 63.8333 104.833 64.5 104.5C65.1667 104.5 65.5 104.833 65.5 105.5C58.172 114.161 53.5054 124.161 51.5 135.5C49.9462 139.567 49.2796 143.9 49.5 148.5C47.7336 184.18 60.067 214.18 86.5 238.5C91.3678 243.104 97.0345 246.437 103.5 248.5C105.515 249.924 107.848 250.59 110.5 250.5C118.117 252.12 125.45 251.454 132.5 248.5C137.358 247.404 141.691 245.238 145.5 242C148.118 239.894 150.118 237.394 151.5 234.5C155.121 230.929 157.454 226.596 158.5 221.5C161.294 214.374 160.96 207.374 157.5 200.5C157.672 199.508 157.338 198.842 156.5 198.5C156.5 197.833 156.5 197.167 156.5 196.5C158.074 196.937 159.241 197.937 160 199.5C166.744 217.776 163.244 233.942 149.5 248C135.52 258.159 120.187 261.326 103.5 257.5C102.833 257.5 102.5 257.167 102.5 256.5C102.5 255.833 102.167 255.5 101.5 255.5C100.075 253.969 99.4088 254.302 99.5 256.5C98.1667 255.833 96.8333 255.167 95.5 254.5C95.5 253.833 95.1667 253.5 94.5 253.5C93.8333 253.5 93.5 253.167 93.5 252.5C93.1583 251.662 92.4916 251.328 91.5 251.5C86.2602 248.681 81.2602 244.681 76.5 239.5C73.6549 236.156 70.6549 232.989 67.5 230C68.2797 228.927 68.113 227.76 67 226.5C66.6667 226.833 66.3333 227.167 66 227.5C62.8536 223.218 59.6869 218.385 56.5 213C57.1667 212 57.8333 211 58.5 210C57.2559 209.544 56.4226 210.044 56 211.5C50.1353 200.734 45.9686 189.401 43.5 177.5C42.1943 164.502 42.1943 151.502 43.5 138.5C53.8961 93.4347 80.8961 63.1014 124.5 47.5C124.833 47.5 125.167 47.5 125.5 47.5C129.985 46.6604 134.319 45.6604 138.5 44.5C138.833 44.5 139.167 44.5 139.5 44.5C150.841 43.2216 162.174 43.2216 173.5 44.5ZM179.5 67.5C178.197 69.1423 176.864 70.8089 175.5 72.5C174.29 72.9321 173.29 73.5987 172.5 74.5C171.5 74.8333 170.833 75.5 170.5 76.5C168.7 77.4734 166.866 78.4734 165 79.5C158.616 76.2078 151.782 74.2078 144.5 73.5C135.676 72.3427 126.676 72.176 117.5 73C113.573 73.7244 109.906 74.891 106.5 76.5C106.167 76.5 105.833 76.5 105.5 76.5C101.608 77.3836 97.9409 78.7169 94.5 80.5C93.8333 80.5 93.5 80.8333 93.5 81.5C88.9403 82.6029 85.2736 84.9363 82.5 88.5C80.5956 88.7376 79.2623 89.7376 78.5 91.5C72.5724 94.4259 67.9057 98.7592 64.5 104.5C63.8333 104.833 63.1667 105.167 62.5 105.5C66.7731 96.2742 72.9398 88.6076 81 82.5C81.4643 81.9056 81.631 81.2389 81.5 80.5C82.8333 80.5 83.5 79.8333 83.5 78.5C112.909 54.5063 145.909 46.3396 182.5 54C182.745 56.0886 182.745 58.0886 182.5 60C181.931 62.7151 180.931 65.2151 179.5 67.5ZM264.5 156.5C263.833 155.833 263.167 155.167 262.5 154.5C263.058 153.21 264.058 152.377 265.5 152C265.167 151.667 264.833 151.333 264.5 151C265.717 149.352 266.55 147.519 267 145.5C267.827 149.541 267.66 153.541 266.5 157.5C265.817 157.137 265.15 156.804 264.5 156.5ZM152.5 272.5C149.833 272.5 147.167 272.5 144.5 272.5C145.172 271.733 146.005 271.066 147 270.5C148.948 271.109 150.782 271.776 152.5 272.5Z",
                    fill: "#0C0C0C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M170.5 40.5C177.004 42.0325 183.671 43.3658 190.5 44.5C191.531 45.2485 192.698 45.9152 194 46.5C194.528 47.816 194.028 48.4827 192.5 48.5C186.201 47.0086 179.868 45.6753 173.5 44.5C172.737 43.7321 171.737 43.2321 170.5 43C161.5 42.3333 152.5 42.3333 143.5 43C141.942 43.21 140.609 43.71 139.5 44.5C139.167 44.5 138.833 44.5 138.5 44.5C136.821 44.1077 135.154 43.6077 133.5 43C136.104 42.6097 138.438 41.7763 140.5 40.5C150.543 39.2147 160.543 39.2147 170.5 40.5Z",
                    fill: "#31204A"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.373",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M173.5 44.5C162.174 43.2216 150.841 43.2216 139.5 44.5C140.609 43.71 141.942 43.21 143.5 43C152.5 42.3333 161.5 42.3333 170.5 43C171.737 43.2321 172.737 43.7321 173.5 44.5Z",
                    fill: "#897B95"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M125.5 47.5C125.167 47.5 124.833 47.5 124.5 47.5C120.627 47.666 119.96 46.666 122.5 44.5C123.167 44.5 123.833 44.5 124.5 44.5C133.296 43.3827 133.63 44.3827 125.5 47.5Z",
                    fill: "#1A0B3C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M190.5 44.5C195.572 45.2603 200.239 46.927 204.5 49.5C201.859 48.7369 199.192 48.5702 196.5 49C197.056 49.3826 197.389 49.8826 197.5 50.5C195.597 50.2041 193.93 49.5375 192.5 48.5C194.028 48.4827 194.528 47.816 194 46.5C192.698 45.9152 191.531 45.2485 190.5 44.5Z",
                    fill: "#695A78"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M204.5 49.5C205.117 49.3893 205.617 49.056 206 48.5C208.988 50.3991 211.821 52.3991 214.5 54.5C218.32 57.4702 222.32 60.3036 226.5 63C225.956 63.7172 225.289 64.2172 224.5 64.5C215.935 59.0506 206.935 54.3839 197.5 50.5C197.389 49.8826 197.056 49.3826 196.5 49C199.192 48.5702 201.859 48.7369 204.5 49.5Z",
                    fill: "#35234C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M192.5 54.5C191.178 54.33 190.011 54.6634 189 55.5C188.667 54.8333 188.333 54.1667 188 53.5C187.667 56.1667 187.333 58.8333 187 61.5C186.26 63.3187 185.093 64.6521 183.5 65.5C185.133 61.3361 186.133 57.0028 186.5 52.5C188.898 52.2594 190.898 52.9261 192.5 54.5Z",
                    fill: "#4E3E62"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M216.5 81.5C211.489 81.3341 206.489 81.5007 201.5 82C200.5 82.5 199.5 83 198.5 83.5C197.304 83.1543 197.304 82.6543 198.5 82C200.5 81 202.5 80 204.5 79C198.081 79.0858 192.414 81.2525 187.5 85.5C187.167 85.1667 186.833 84.8333 186.5 84.5C187.687 83.4805 188.687 82.3139 189.5 81C185.707 80.9776 182.541 82.4776 180 85.5C180.446 83.1171 181.612 80.9504 183.5 79C181.24 78.9558 179.24 79.7892 177.5 81.5C176.893 81.3764 176.56 81.0431 176.5 80.5C180.104 77.3985 183.604 74.0651 187 70.5C188.868 67.3949 190.035 64.0615 190.5 60.5C204.435 63.9668 216.435 70.8001 226.5 81C223.183 81.4983 219.85 81.665 216.5 81.5Z",
                    fill: "#F6F6F7"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M192.5 54.5C206.7 59.406 219.033 67.0727 229.5 77.5C228.033 76.7084 226.7 76.7084 225.5 77.5C226.95 78.8498 227.617 80.5165 227.5 82.5C223.833 82.5 220.167 82.5 216.5 82.5C216.5 82.1667 216.5 81.8333 216.5 81.5C219.85 81.665 223.183 81.4983 226.5 81C216.435 70.8001 204.435 63.9668 190.5 60.5C190.035 64.0615 188.868 67.3949 187 70.5C183.604 74.0651 180.104 77.3985 176.5 80.5C176.167 80.5 175.833 80.5 175.5 80.5C175.539 79.2438 175.039 78.2438 174 77.5C171.821 78.3961 169.988 79.7294 168.5 81.5C166.258 80.9128 164.091 80.5794 162 80.5C160.941 80.6301 160.108 81.1301 159.5 82C161.119 82.2355 162.119 83.0689 162.5 84.5C157.547 82.5166 152.547 80.8499 147.5 79.5C151.195 80.4603 154.861 80.4603 158.5 79.5C158.291 78.914 157.957 78.414 157.5 78C152.519 77.7316 148.186 76.2316 144.5 73.5C151.782 74.2078 158.616 76.2078 165 79.5C166.866 78.4734 168.7 77.4734 170.5 76.5C171.239 76.631 171.906 76.4643 172.5 76C173.738 75.31 173.738 74.81 172.5 74.5C173.29 73.5987 174.29 72.9321 175.5 72.5C175.435 72.9382 175.601 73.2716 176 73.5C178.191 72.1666 180.024 70.5 181.5 68.5C181.932 67.2905 182.599 66.2905 183.5 65.5C185.093 64.6521 186.26 63.3187 187 61.5C187.333 58.8333 187.667 56.1667 188 53.5C188.333 54.1667 188.667 54.8333 189 55.5C190.011 54.6634 191.178 54.33 192.5 54.5Z",
                    fill: "#2A1544"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.216",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M179.5 67.5C180.167 67.8333 180.833 68.1667 181.5 68.5C180.024 70.5 178.191 72.1666 176 73.5C175.601 73.2716 175.435 72.9382 175.5 72.5C176.864 70.8089 178.197 69.1423 179.5 67.5Z",
                    fill: "#6F6A73"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M122.5 44.5C119.96 46.666 120.627 47.666 124.5 47.5C80.8961 63.1014 53.8961 93.4347 43.5 138.5C43.6633 136.143 43.4966 133.81 43 131.5C42.6174 132.056 42.1174 132.389 41.5 132.5C44.2391 118.53 49.5724 105.697 57.5 94C56.944 93.6174 56.6107 93.1174 56.5 92.5C68.4367 75.1399 83.4367 61.8065 101.5 52.5C108.456 49.5138 115.456 46.8471 122.5 44.5Z",
                    fill: "#463658"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.8",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M144.5 73.5C136.16 73.3336 127.827 73.5003 119.5 74C115.347 75.3988 111.014 76.2321 106.5 76.5C109.906 74.891 113.573 73.7244 117.5 73C126.676 72.176 135.676 72.3427 144.5 73.5Z",
                    fill: "#5F4E6E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M172.5 74.5C173.738 74.81 173.738 75.31 172.5 76C171.906 76.4643 171.239 76.631 170.5 76.5C170.833 75.5 171.5 74.8333 172.5 74.5Z",
                    fill: "#F8F5F8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.947",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M248.5 88.5C242.508 80.8416 235.841 73.8416 228.5 67.5C228.047 66.5416 227.381 65.7083 226.5 65C227.5 64.3333 228.5 64.3333 229.5 65C238.507 71.6741 246.173 79.6741 252.5 89C251.181 89.195 249.847 89.0283 248.5 88.5Z",
                    fill: "#2A1845"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M270.5 116.5C270.167 117.833 269.833 119.167 269.5 120.5C266.387 112.343 262.72 104.343 258.5 96.5C256.95 94.5721 255.283 92.7387 253.5 91C252.833 90.3333 252.167 90.3333 251.5 91C252.252 91.6708 252.586 92.5041 252.5 93.5C250.937 92.0552 249.604 90.3885 248.5 88.5C249.847 89.0283 251.181 89.195 252.5 89C246.173 79.6741 238.507 71.6741 229.5 65C228.5 64.3333 227.5 64.3333 226.5 65C227.381 65.7083 228.047 66.5416 228.5 67.5C226.596 67.2624 225.262 66.2624 224.5 64.5C225.289 64.2172 225.956 63.7172 226.5 63C222.32 60.3036 218.32 57.4702 214.5 54.5C215.117 54.3893 215.617 54.056 216 53.5C220.784 57.4553 225.951 60.7886 231.5 63.5C237.255 69.3087 242.921 74.3087 248.5 78.5C253.426 86.9692 259.092 95.1359 265.5 103C265.167 103.333 264.833 103.667 264.5 104C267.656 107.643 269.656 111.81 270.5 116.5Z",
                    fill: "#443E49"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M83.5 78.5C83.5 79.8333 82.8333 80.5 81.5 80.5C81.8333 79.5 82.5 78.8333 83.5 78.5Z",
                    fill: "#DDDDDD"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.106",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M105.5 76.5C102.481 78.5243 99.1481 80.191 95.5 81.5C94.8933 81.3764 94.56 81.0431 94.5 80.5C97.9409 78.7169 101.608 77.3836 105.5 76.5Z",
                    fill: "#93869B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.612",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M93.5 81.5C90.106 84.2205 86.4394 86.5538 82.5 88.5C85.2736 84.9363 88.9403 82.6029 93.5 81.5Z",
                    fill: "#67606D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M140.5 86.5C140.5 89.5 140.5 92.5 140.5 95.5C136.785 95.423 133.119 95.7564 129.5 96.5C129.715 94.8212 129.048 93.8212 127.5 93.5C126.728 92.3065 125.728 91.3065 124.5 90.5C124.5 90.1667 124.5 89.8333 124.5 89.5C127.187 89.6641 129.854 89.4974 132.5 89C131.5 88 130.5 87 129.5 86C133.188 85.5499 136.854 85.7166 140.5 86.5Z",
                    fill: "#5F6195"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M161.5 92.5C161.737 93.791 161.404 94.791 160.5 95.5C160.5 94.1667 160.5 92.8333 160.5 91.5C154.227 89.6816 147.894 88.0149 141.5 86.5C141.5 85.8333 141.5 85.1667 141.5 84.5C141.56 83.9569 141.893 83.6236 142.5 83.5C148.61 84.5553 154.61 86.0553 160.5 88C161.38 89.3561 161.714 90.8561 161.5 92.5Z",
                    fill: "#F7DC9E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M147.5 79.5C152.547 80.8499 157.547 82.5166 162.5 84.5C166.385 85.4694 167.385 87.8028 165.5 91.5C164.528 93.4931 163.195 93.8264 161.5 92.5C161.714 90.8561 161.38 89.3561 160.5 88C154.61 86.0553 148.61 84.5553 142.5 83.5C141.893 83.6236 141.56 83.9569 141.5 84.5C135.907 83.4814 135.574 82.3147 140.5 81C134.833 80.3333 129.167 80.3333 123.5 81C121.347 81.0995 119.681 81.9328 118.5 83.5C114.491 83.8583 110.491 84.3583 106.5 85C104.119 85.2233 102.453 86.39 101.5 88.5C99.2166 88.6079 97.2166 89.4412 95.5 91C91.3162 93.7296 87.6496 96.8963 84.5 100.5C81.9438 101.543 79.7772 103.21 78 105.5C77.2825 104.549 76.4491 104.383 75.5 105C72.8681 106.738 71.8681 108.905 72.5 111.5C69.909 112.254 68.0757 113.921 67 116.5C66.1939 119.446 64.8605 122.112 63 124.5C62.433 127.168 61.933 129.834 61.5 132.5C63.099 132.232 64.4324 132.566 65.5 133.5C63.1667 133.5 60.8333 133.5 58.5 133.5C58.7373 134.791 58.404 135.791 57.5 136.5C65.9504 104.887 86.2838 85.72 118.5 79C128.194 78.2747 137.86 78.4414 147.5 79.5Z",
                    fill: "#F0EEEF"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M118.5 83.5C120.861 85.1939 122.861 87.1939 124.5 89.5C124.5 89.8333 124.5 90.1667 124.5 90.5C117.98 88.991 111.647 89.3243 105.5 91.5C105.167 91.5 104.833 91.5 104.5 91.5C103.306 90.7281 102.306 89.7281 101.5 88.5C102.453 86.39 104.119 85.2233 106.5 85C110.491 84.3583 114.491 83.8583 118.5 83.5Z",
                    fill: "#F9DFA5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M141.5 84.5C141.5 85.1667 141.5 85.8333 141.5 86.5C141.167 86.5 140.833 86.5 140.5 86.5C136.854 85.7166 133.188 85.5499 129.5 86C130.5 87 131.5 88 132.5 89C129.854 89.4974 127.187 89.6641 124.5 89.5C122.861 87.1939 120.861 85.1939 118.5 83.5C119.681 81.9328 121.347 81.0995 123.5 81C129.167 80.3333 134.833 80.3333 140.5 81C135.574 82.3147 135.907 83.4814 141.5 84.5Z",
                    fill: "#C3C3E6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M124.5 90.5C125.728 91.3065 126.728 92.3065 127.5 93.5C128.234 94.7079 128.567 96.0413 128.5 97.5C122.333 97.1009 116.333 97.7676 110.5 99.5C108.833 96.8333 107.167 94.1667 105.5 91.5C111.647 89.3243 117.98 88.991 124.5 90.5Z",
                    fill: "#F2B139"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M53.5 95.5C54.4387 96.3274 54.1054 96.9941 52.5 97.5C52.3284 96.5084 52.6618 95.8417 53.5 95.5Z",
                    fill: "#DDDDDD"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M101.5 88.5C102.306 89.7281 103.306 90.7281 104.5 91.5C100.372 93.0644 96.3716 94.8977 92.5 97C95.2889 97.2414 97.9556 97.908 100.5 99C97.1019 100.357 94.1019 102.19 91.5 104.5C90.8333 104.5 90.1667 104.5 89.5 104.5C87.3384 103.872 85.6718 102.539 84.5 100.5C87.6496 96.8963 91.3162 93.7296 95.5 91C97.2166 89.4412 99.2166 88.6079 101.5 88.5Z",
                    fill: "#C5C4E7"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M141.5 86.5C147.894 88.0149 154.227 89.6816 160.5 91.5C160.5 92.8333 160.5 94.1667 160.5 95.5C160.326 97.861 159.993 100.194 159.5 102.5C153.738 99.9613 147.738 97.9613 141.5 96.5C141.5 93.1667 141.5 89.8333 141.5 86.5Z",
                    fill: "#F5B133"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.247",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M78.5 91.5C74.1386 96.1927 69.8052 100.859 65.5 105.5C65.5 104.833 65.1667 104.5 64.5 104.5C67.9057 98.7592 72.5724 94.4259 78.5 91.5Z",
                    fill: "#747178"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M104.5 91.5C104.833 91.5 105.167 91.5 105.5 91.5C107.167 94.1667 108.833 96.8333 110.5 99.5C107.094 101.381 103.761 103.548 100.5 106C102.5 106.333 104.5 106.667 106.5 107C105.584 107.278 104.918 107.778 104.5 108.5C103.265 108.721 102.265 109.388 101.5 110.5C100.274 108.722 98.6075 107.722 96.5 107.5C94.4348 107.047 92.7682 106.047 91.5 104.5C94.1019 102.19 97.1019 100.357 100.5 99C97.9556 97.908 95.2889 97.2414 92.5 97C96.3716 94.8977 100.372 93.0644 104.5 91.5Z",
                    fill: "#616395"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M89.5 104.5C90.1667 104.5 90.8333 104.5 91.5 104.5C92.7682 106.047 94.4348 107.047 96.5 107.5C97.1408 108.482 97.8075 109.482 98.5 110.5C96.3761 112.121 94.3761 113.954 92.5 116C95.0977 115.578 97.7644 115.578 100.5 116C96.7709 118.231 92.7709 119.731 88.5 120.5C85.5342 118.012 82.2009 116.012 78.5 114.5C78.8588 112.629 79.8588 111.129 81.5 110C84.0472 107.946 86.7139 106.113 89.5 104.5Z",
                    fill: "#F2B037"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M269.5 120.5C272.082 126.827 273.748 133.493 274.5 140.5C272.694 137.662 271.694 137.995 271.5 141.5C267.993 124.47 261.66 108.47 252.5 93.5C252.586 92.5041 252.252 91.6708 251.5 91C252.167 90.3333 252.833 90.3333 253.5 91C255.283 92.7387 256.95 94.5721 258.5 96.5C262.72 104.343 266.387 112.343 269.5 120.5Z",
                    fill: "#3D2B55"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M84.5 100.5C85.6718 102.539 87.3384 103.872 89.5 104.5C86.7139 106.113 84.0472 107.946 81.5 110C79.8588 111.129 78.8588 112.629 78.5 114.5C77.8333 114.5 77.1667 114.5 76.5 114.5C75.7886 112.799 74.4553 111.799 72.5 111.5C71.8681 108.905 72.8681 106.738 75.5 105C76.4491 104.383 77.2825 104.549 78 105.5C79.7772 103.21 81.9438 101.543 84.5 100.5Z",
                    fill: "#F8E1A9"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M140.5 86.5C140.833 86.5 141.167 86.5 141.5 86.5C141.5 89.8333 141.5 93.1667 141.5 96.5C147.738 97.9613 153.738 99.9613 159.5 102.5C159.993 100.194 160.326 97.861 160.5 95.5C161.404 94.791 161.737 93.791 161.5 92.5C163.195 93.8264 164.528 93.4931 165.5 91.5C163.988 100.934 164.321 110.267 166.5 119.5C164.329 121.5 161.996 123.334 159.5 125C160.833 125.333 162.167 125.667 163.5 126C161.833 127.167 160.167 128.333 158.5 129.5C158.709 130.086 159.043 130.586 159.5 131C157.711 131.914 155.877 132.747 154 133.5C153.167 133.167 152.333 132.833 151.5 132.5C151.933 128.021 152.1 123.355 152 118.5C151.802 120.382 151.302 122.048 150.5 123.5C151.532 111.023 145.866 103.523 133.5 101C129.167 100.333 124.833 100.333 120.5 101C124.084 102.073 127.75 102.74 131.5 103C134.756 104.116 137.422 105.949 139.5 108.5C139.963 114.563 137.963 119.563 133.5 123.5C131.473 123.662 129.473 123.495 127.5 123C133.153 122.212 133.82 120.046 129.5 116.5C130.325 115.614 131.325 115.281 132.5 115.5C132.674 113.139 133.007 110.806 133.5 108.5C130.71 108.778 128.21 108.111 126 106.5C125.5 106.833 125 107.167 124.5 107.5C125.522 108.354 126.355 109.354 127 110.5C128.608 109.567 129.441 110.233 129.5 112.5C129.333 113.167 129.167 113.833 129 114.5C127.025 113.522 125.358 112.189 124 110.5C123.5 110.833 123 111.167 122.5 111.5C125.19 113.193 127.19 115.527 128.5 118.5C127.885 120.116 126.885 121.449 125.5 122.5C125.864 124.733 126.864 126.566 128.5 128C127.382 129.074 126.382 130.24 125.5 131.5C124.692 131.192 124.025 130.692 123.5 130C125.211 128.867 125.711 127.367 125 125.5C123.202 123.163 121.035 122.497 118.5 123.5C119.325 124.386 120.325 124.719 121.5 124.5C121.629 128.567 120.462 129.567 118 127.5C116.212 128.3 114.545 128.634 113 128.5C112.689 127.258 113.189 126.258 114.5 125.5C113.737 124.281 112.737 123.281 111.5 122.5C113.92 120.047 115.086 117.047 115 113.5C115.495 115.473 115.662 117.473 115.5 119.5C119.625 119.277 120.291 117.777 117.5 115C118.624 114.751 119.624 114.251 120.5 113.5C118.234 112.686 115.9 112.186 113.5 112C114.308 111.692 114.975 111.192 115.5 110.5C114.302 110.06 113.135 109.727 112 109.5C112.936 115.154 111.103 116.321 106.5 113C107.795 110.755 107.128 109.255 104.5 108.5C104.918 107.778 105.584 107.278 106.5 107C104.5 106.667 102.5 106.333 100.5 106C103.761 103.548 107.094 101.381 110.5 99.5C116.333 97.7676 122.333 97.1009 128.5 97.5C128.567 96.0413 128.234 94.7079 127.5 93.5C129.048 93.8212 129.715 94.8212 129.5 96.5C133.119 95.7564 136.785 95.423 140.5 95.5C140.5 92.5 140.5 89.5 140.5 86.5Z",
                    fill: "#4D4C70"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M76.5 114.5C77.1667 114.5 77.8333 114.5 78.5 114.5C82.2009 116.012 85.5342 118.012 88.5 120.5C82.8389 125.16 77.1722 129.827 71.5 134.5C70.1667 134.5 68.8333 134.5 67.5 134.5C67.5 134.167 67.5 133.833 67.5 133.5C70.0985 129.562 73.0985 125.895 76.5 122.5C74.5269 121.669 72.5269 121.502 70.5 122C72.3336 119.337 74.3336 116.837 76.5 114.5Z",
                    fill: "#616295"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M72.5 111.5C74.4553 111.799 75.7886 112.799 76.5 114.5C74.3336 116.837 72.3336 119.337 70.5 122C72.5269 121.502 74.5269 121.669 76.5 122.5C73.0985 125.895 70.0985 129.562 67.5 133.5C66.8333 133.5 66.1667 133.5 65.5 133.5C64.4324 132.566 63.099 132.232 61.5 132.5C61.933 129.834 62.433 127.168 63 124.5C64.8605 122.112 66.1939 119.446 67 116.5C68.0757 113.921 69.909 112.254 72.5 111.5Z",
                    fill: "#C3C4E8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.827",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M251.5 103.5C255.455 110.013 258.455 117.013 260.5 124.5C257.616 119.572 254.95 114.405 252.5 109C251.767 107.234 251.433 105.401 251.5 103.5Z",
                    fill: "#58466A"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M133.5 123.5C134.88 124.19 136.214 124.524 137.5 124.5C135.197 126.657 132.53 128.323 129.5 129.5C130.376 130.251 131.376 130.751 132.5 131C129.879 131.939 127.212 132.772 124.5 133.5C125.5 134.167 126.5 134.833 127.5 135.5C124.494 136.748 121.494 136.748 118.5 135.5C118.167 135.833 117.833 136.167 117.5 136.5C120.272 138.085 120.106 139.085 117 139.5C114.083 139.085 112.249 137.418 111.5 134.5C109.721 137.276 108.721 136.943 108.5 133.5C107.566 130.452 107.566 126.785 108.5 122.5C109.605 121.108 110.939 119.941 112.5 119C105.427 117.802 99.4266 119.802 94.5 125C95.938 125.219 97.2713 125.719 98.5 126.5C96.8872 127.427 95.2205 128.261 93.5 129C93.4057 130.422 93.0724 131.922 92.5 133.5C85.8973 137.137 80.5639 142.137 76.5 148.5C77.8333 148.833 79.1667 149.167 80.5 149.5C77.6051 152.232 75.2718 155.398 73.5 159C74.1021 160.563 74.9354 160.396 76 158.5C76.1667 159 76.3333 159.5 76.5 160C74.3891 164.713 72.7224 169.546 71.5 174.5C71.6667 175.833 71.8333 177.167 72 178.5C72.4419 176.321 73.4419 175.655 75 176.5C74.5684 181.564 74.735 186.564 75.5 191.5C71.6012 193.048 69.2679 191.715 68.5 187.5C71.7181 187.349 72.0515 186.516 69.5 185C70.6091 183.187 69.9424 182.354 67.5 182.5C68.069 178.671 67.4023 175.337 65.5 172.5C67.4026 170.26 68.4026 167.594 68.5 164.5C71.7794 163.969 73.1128 161.969 72.5 158.5C69.9552 158.849 67.9552 158.016 66.5 156C67.5853 153.828 68.9186 151.828 70.5 150C68.9419 149.79 67.6085 149.29 66.5 148.5C68.288 148.785 69.9547 148.452 71.5 147.5C73.5913 143.574 76.2579 140.074 79.5 137C74.4381 138.143 70.2714 140.976 67 145.5C68.453 141.912 69.953 138.245 71.5 134.5C77.1722 129.827 82.8389 125.16 88.5 120.5C92.7709 119.731 96.7709 118.231 100.5 116C97.7644 115.578 95.0977 115.578 92.5 116C94.3761 113.954 96.3761 112.121 98.5 110.5C97.8075 109.482 97.1408 108.482 96.5 107.5C98.6075 107.722 100.274 108.722 101.5 110.5C102.265 109.388 103.265 108.721 104.5 108.5C107.128 109.255 107.795 110.755 106.5 113C111.103 116.321 112.936 115.154 112 109.5C113.135 109.727 114.302 110.06 115.5 110.5C114.975 111.192 114.308 111.692 113.5 112C115.9 112.186 118.234 112.686 120.5 113.5C119.624 114.251 118.624 114.751 117.5 115C120.291 117.777 119.625 119.277 115.5 119.5C115.662 117.473 115.495 115.473 115 113.5C115.086 117.047 113.92 120.047 111.5 122.5C112.737 123.281 113.737 124.281 114.5 125.5C113.189 126.258 112.689 127.258 113 128.5C114.545 128.634 116.212 128.3 118 127.5C120.462 129.567 121.629 128.567 121.5 124.5C120.325 124.719 119.325 124.386 118.5 123.5C121.035 122.497 123.202 123.163 125 125.5C125.711 127.367 125.211 128.867 123.5 130C124.025 130.692 124.692 131.192 125.5 131.5C126.382 130.24 127.382 129.074 128.5 128C126.864 126.566 125.864 124.733 125.5 122.5C126.885 121.449 127.885 120.116 128.5 118.5C127.19 115.527 125.19 113.193 122.5 111.5C123 111.167 123.5 110.833 124 110.5C125.358 112.189 127.025 113.522 129 114.5C129.167 113.833 129.333 113.167 129.5 112.5C129.441 110.233 128.608 109.567 127 110.5C126.355 109.354 125.522 108.354 124.5 107.5C125 107.167 125.5 106.833 126 106.5C128.21 108.111 130.71 108.778 133.5 108.5C133.007 110.806 132.674 113.139 132.5 115.5C131.325 115.281 130.325 115.614 129.5 116.5C133.82 120.046 133.153 122.212 127.5 123C129.473 123.495 131.473 123.662 133.5 123.5Z",
                    fill: "#514F6E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M229.5 77.5C234.071 80.5638 238.238 84.2305 242 88.5C244.51 92.9974 247.676 96.8307 251.5 100C250.829 100.986 250.829 102.153 251.5 103.5C251.433 105.401 251.767 107.234 252.5 109C254.95 114.405 257.616 119.572 260.5 124.5C260.5 124.833 260.5 125.167 260.5 125.5C260.41 128.152 261.076 130.485 262.5 132.5C264.338 142.362 261.005 149.695 252.5 154.5C251.609 155.11 250.609 155.443 249.5 155.5C244.839 155.118 240.506 156.118 236.5 158.5C235.014 158.103 233.514 157.77 232 157.5C226.49 158.049 220.99 158.715 215.5 159.5C178.669 160.167 142.002 160.833 105.5 161.5C104.833 161.5 104.5 161.833 104.5 162.5C102.409 162.682 100.409 162.348 98.5 161.5C96.8888 162.32 96.2222 163.654 96.5 165.5C95.448 165.351 94.448 165.517 93.5 166C94.3366 167.011 94.67 168.178 94.5 169.5C92.4807 175.26 91.9807 181.26 93 187.5C95.6576 194.133 98.3242 200.8 101 207.5C104.755 211.426 108.589 215.092 112.5 218.5C113.302 219.885 113.969 219.718 114.5 218C114.43 217.235 114.097 216.735 113.5 216.5C113.334 211.156 113.501 205.823 114 200.5C115.421 198.595 116.588 196.595 117.5 194.5C120.19 191.815 123.19 189.482 126.5 187.5C131.797 186.725 137.13 186.392 142.5 186.5C145.088 188.832 148.088 190.666 151.5 192C153.03 194.352 154.697 196.519 156.5 198.5C157.338 198.842 157.672 199.508 157.5 200.5C158.341 207.465 158.674 214.465 158.5 221.5C157.454 226.596 155.121 230.929 151.5 234.5C149.384 236.062 147.051 237.396 144.5 238.5C142.977 238.207 141.643 238.207 140.5 238.5C143.965 235.375 146.632 231.708 148.5 227.5C152.266 222.772 154.266 217.272 154.5 211C154.472 209.93 154.139 209.097 153.5 208.5C153.768 206.901 153.434 205.568 152.5 204.5C146.18 190.688 136.514 187.855 123.5 196C122.117 197.271 121.117 198.771 120.5 200.5C119.778 200.918 119.278 201.584 119 202.5C118.502 205.482 118.335 208.482 118.5 211.5C118.971 217.273 121.638 221.773 126.5 225C133.971 226.367 137.638 223.201 137.5 215.5C137.727 213.067 136.727 211.401 134.5 210.5C132.436 209.132 130.102 208.132 127.5 207.5C131.355 206.108 135.022 206.441 138.5 208.5C139.864 210.191 141.197 211.858 142.5 213.5C144.128 218.475 143.461 223.142 140.5 227.5C137.957 229.94 134.957 231.606 131.5 232.5C123.968 232.268 117.302 229.768 111.5 225C95.0847 211.67 86.5847 194.503 86 173.5C87.7672 167.897 90.9339 163.23 95.5 159.5C92.0761 154.734 90.7428 149.401 91.5 143.5C92.1719 138.987 94.0052 134.987 97 131.5C99.1057 128.882 101.606 126.882 104.5 125.5C102.098 128.574 100.098 131.908 98.5 135.5C97.596 136.209 97.2627 137.209 97.5 138.5C96.3567 141.976 96.1901 145.642 97 149.5C98.2606 152.211 100.094 154.378 102.5 156C117.511 156.833 132.511 156.666 147.5 155.5C145.997 153.578 143.997 152.412 141.5 152C135.838 152.073 130.171 152.073 124.5 152C123.934 151.005 123.267 150.172 122.5 149.5C121.588 148.262 121.421 146.928 122 145.5C128.181 143.135 133.348 139.468 137.5 134.5C140.517 131.802 142.517 128.469 143.5 124.5C145.698 118.198 144.365 112.864 139.5 108.5C137.422 105.949 134.756 104.116 131.5 103C127.75 102.74 124.084 102.073 120.5 101C124.833 100.333 129.167 100.333 133.5 101C145.866 103.523 151.532 111.023 150.5 123.5C149.923 127.983 148.256 131.983 145.5 135.5C144.167 136.167 143.167 137.167 142.5 138.5C140.833 139.5 139.5 140.833 138.5 142.5C136.364 143.403 134.364 144.569 132.5 146C138.386 145.96 144.053 146.96 149.5 149C151.747 150.995 152.747 153.495 152.5 156.5C154.527 156.662 156.527 156.495 158.5 156C156.469 148.879 158.136 142.712 163.5 137.5C164.363 136.537 165.03 136.537 165.5 137.5C164.253 139.323 163.586 141.323 163.5 143.5C161.795 147.961 162.462 152.128 165.5 156C178.513 156.833 191.513 156.666 204.5 155.5C203.812 154.145 202.812 153.145 201.5 152.5C201.167 151.5 200.5 150.833 199.5 150.5C193.129 148.042 186.463 146.875 179.5 147C174.885 140.598 171.218 133.765 168.5 126.5C167.681 124.228 167.015 121.894 166.5 119.5C164.321 110.267 163.988 100.934 165.5 91.5C167.385 87.8028 166.385 85.4694 162.5 84.5C162.119 83.0689 161.119 82.2355 159.5 82C160.108 81.1301 160.941 80.6301 162 80.5C164.091 80.5794 166.258 80.9128 168.5 81.5C169.988 79.7294 171.821 78.3961 174 77.5C175.039 78.2438 175.539 79.2438 175.5 80.5C174.89 81.391 174.557 82.391 174.5 83.5C173.326 84.5137 172.66 85.847 172.5 87.5C169.662 95.4866 168.828 103.82 170 112.5C170.279 115.457 171.113 118.123 172.5 120.5C172.5 120.833 172.5 121.167 172.5 121.5C174.797 127.416 177.463 133.082 180.5 138.5C181.117 140.229 182.117 141.729 183.5 143C188.508 143.501 193.508 144.001 198.5 144.5C201.607 146.228 204.607 148.228 207.5 150.5C209.086 152.173 209.753 154.173 209.5 156.5C221.073 157.339 232.407 156.173 243.5 153C251.723 149.95 256.389 144.117 257.5 135.5C255.265 135.205 253.265 135.539 251.5 136.5C245.989 136.205 240.656 137.038 235.5 139C227.998 141.921 220.665 145.088 213.5 148.5C208.807 149.46 205.474 147.793 203.5 143.5C203.842 142.662 204.508 142.328 205.5 142.5C209.658 142.668 213.658 142.002 217.5 140.5C220.067 139.25 222.733 138.083 225.5 137C209.673 136.999 199.34 129.499 194.5 114.5C194.15 109.009 194.816 103.676 196.5 98.5C200.532 89.7944 207.199 84.461 216.5 82.5C220.167 82.5 223.833 82.5 227.5 82.5C227.617 80.5165 226.95 78.8498 225.5 77.5C226.7 76.7084 228.033 76.7084 229.5 77.5Z",
                    fill: "#1E0840"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M255.5 128.5C250.5 129.167 245.5 129.833 240.5 130.5C245.06 125.697 248.226 120.031 250 113.5C252.725 118.177 254.559 123.177 255.5 128.5Z",
                    fill: "#575376"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M242.5 100.5C246.493 110.792 244.159 119.625 235.5 127C227.322 131.234 218.988 131.567 210.5 128C204.494 124.153 201.161 118.653 200.5 111.5C203.588 114.263 205.922 117.597 207.5 121.5C214.801 121.445 222.135 121.112 229.5 120.5C237.052 115.944 241.386 109.277 242.5 100.5Z",
                    fill: "#0984CD"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M172.5 87.5C171.912 95.3655 172.745 103.032 175 110.5C175.75 106.581 177.083 102.915 179 99.5C179.333 104.167 179.667 108.833 180 113.5C180.249 116.177 181.249 118.51 183 120.5C183.862 118.913 184.529 117.246 185 115.5C185.66 120.484 187.66 124.817 191 128.5C191.333 126.833 191.667 125.167 192 123.5C194.387 125.355 196.054 127.688 197 130.5C196.25 125.231 195.416 119.898 194.5 114.5C199.34 129.499 209.673 136.999 225.5 137C222.733 138.083 220.067 139.25 217.5 140.5C215.316 139.734 212.982 139.067 210.5 138.5C207.722 140.659 205.389 139.992 203.5 136.5C203.167 136.833 202.833 137.167 202.5 137.5C203.26 139.36 204.26 141.027 205.5 142.5C204.508 142.328 203.842 142.662 203.5 143.5C203.167 143.5 202.833 143.5 202.5 143.5C202.737 142.209 202.404 141.209 201.5 140.5C198.566 137.642 195.233 136.142 191.5 136C190.809 134.933 190.309 133.766 190 132.5C189.692 133.308 189.192 133.975 188.5 134.5C187.167 132.5 185.833 130.5 184.5 128.5C183.575 129.641 182.741 129.641 182 128.5C181.71 126.956 181.044 125.623 180 124.5C179.667 125.167 179.333 125.833 179 126.5C177.7 123.568 175.7 121.234 173 119.5C172.601 119.728 172.435 120.062 172.5 120.5C171.113 118.123 170.279 115.457 170 112.5C168.828 103.82 169.662 95.4866 172.5 87.5Z",
                    fill: "#4F4D71"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M174.5 83.5C174.173 88.2137 174.507 92.8804 175.5 97.5C177.306 94.528 179.306 91.6947 181.5 89C182.167 88.3333 182.833 88.3333 183.5 89C182.62 90.3561 182.286 91.8561 182.5 93.5C181.23 97.7853 181.23 102.119 182.5 106.5C183.223 103.93 184.39 101.597 186 99.5C186.378 104.301 187.378 108.968 189 113.5C189.366 105.982 191.366 98.9816 195 92.5C195.464 93.0944 195.631 93.7611 195.5 94.5C195.232 96.099 195.566 97.4324 196.5 98.5C194.816 103.676 194.15 109.009 194.5 114.5C195.416 119.898 196.25 125.231 197 130.5C196.054 127.688 194.387 125.355 192 123.5C191.667 125.167 191.333 126.833 191 128.5C187.66 124.817 185.66 120.484 185 115.5C184.529 117.246 183.862 118.913 183 120.5C181.249 118.51 180.249 116.177 180 113.5C179.667 108.833 179.333 104.167 179 99.5C177.083 102.915 175.75 106.581 175 110.5C172.745 103.032 171.912 95.3655 172.5 87.5C172.66 85.847 173.326 84.5137 174.5 83.5Z",
                    fill: "#636597"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M195.5 94.5C195.631 93.7611 195.464 93.0944 195 92.5C191.366 98.9816 189.366 105.982 189 113.5C187.378 108.968 186.378 104.301 186 99.5C184.39 101.597 183.223 103.93 182.5 106.5C181.23 102.119 181.23 97.7853 182.5 93.5C184.129 92.3747 185.629 91.0414 187 89.5C187.492 90.549 187.326 91.549 186.5 92.5C187.522 93.354 188.355 94.354 189 95.5C190.016 92.4322 191.183 89.4322 192.5 86.5C193.167 87.1667 193.833 87.8333 194.5 88.5C196.884 86.9486 199.384 85.6153 202 84.5C202.5 84.6667 203 84.8333 203.5 85C200.22 87.7749 197.554 90.9416 195.5 94.5Z",
                    fill: "#F2F3F6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M242.5 100.5C241.386 109.277 237.052 115.944 229.5 120.5C222.135 121.112 214.801 121.445 207.5 121.5C205.922 117.597 203.588 114.263 200.5 111.5C199.542 100.296 204.209 92.4626 214.5 88C222.516 86.3422 229.849 87.6755 236.5 92C239.381 94.2787 241.381 97.112 242.5 100.5Z",
                    fill: "#1797E0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M223.5 98.5C233.285 102.508 234.951 108.675 228.5 117C222.133 121.091 216.966 119.924 213 113.5C212.204 110.961 212.371 108.628 213.5 106.5C220.985 109.714 224.318 107.047 223.5 98.5Z",
                    fill: "#1D0740"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M223.5 98.5C224.318 107.047 220.985 109.714 213.5 106.5C209.913 100.989 211.413 97.6553 218 96.5C219.939 96.9543 221.772 97.621 223.5 98.5Z",
                    fill: "#ECEFF2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M216.5 81.5C216.5 81.8333 216.5 82.1667 216.5 82.5C207.199 84.461 200.532 89.7944 196.5 98.5C195.566 97.4324 195.232 96.099 195.5 94.5C197.554 90.9416 200.22 87.7749 203.5 85C203 84.8333 202.5 84.6667 202 84.5C199.384 85.6153 196.884 86.9486 194.5 88.5C193.833 87.8333 193.167 87.1667 192.5 86.5C191.183 89.4322 190.016 92.4322 189 95.5C188.355 94.354 187.522 93.354 186.5 92.5C187.326 91.549 187.492 90.549 187 89.5C185.629 91.0414 184.129 92.3747 182.5 93.5C182.286 91.8561 182.62 90.3561 183.5 89C182.833 88.3333 182.167 88.3333 181.5 89C179.306 91.6947 177.306 94.528 175.5 97.5C174.507 92.8804 174.173 88.2137 174.5 83.5C174.557 82.391 174.89 81.391 175.5 80.5C175.833 80.5 176.167 80.5 176.5 80.5C176.56 81.0431 176.893 81.3764 177.5 81.5C179.24 79.7892 181.24 78.9558 183.5 79C181.612 80.9504 180.446 83.1171 180 85.5C182.541 82.4776 185.707 80.9776 189.5 81C188.687 82.3139 187.687 83.4805 186.5 84.5C186.833 84.8333 187.167 85.1667 187.5 85.5C192.414 81.2525 198.081 79.0858 204.5 79C202.5 80 200.5 81 198.5 82C197.304 82.6543 197.304 83.1543 198.5 83.5C199.5 83 200.5 82.5 201.5 82C206.489 81.5007 211.489 81.3341 216.5 81.5Z",
                    fill: "#C5C4E6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M139.5 108.5C144.365 112.864 145.698 118.198 143.5 124.5C140.5 128.167 137.167 131.5 133.5 134.5C128.246 137.36 122.912 140.027 117.5 142.5C117.167 142.5 116.833 142.5 116.5 142.5C107.509 144.007 103.675 140.34 105 131.5C105.642 129.238 106.475 127.071 107.5 125C106.251 124.26 105.251 124.427 104.5 125.5C101.606 126.882 99.1057 128.882 97 131.5C94.0052 134.987 92.1719 138.987 91.5 143.5C90.8333 143.5 90.5 143.833 90.5 144.5C84.7623 147.946 80.9289 152.946 79 159.5C77 167.833 77 176.167 79 184.5C82.4591 198.421 88.7925 210.754 98 221.5C99.9263 223.539 102.093 225.206 104.5 226.5C108.503 231.002 113.503 233.669 119.5 234.5C124.021 235.678 128.688 235.678 133.5 234.5C133.082 235.222 132.416 235.722 131.5 236C125.5 236.667 119.5 236.667 113.5 236C109.382 233.39 105.382 230.557 101.5 227.5C100.808 228.025 100.308 228.692 100 229.5C97.7709 226.5 96.1043 223.167 95 219.5C93.2161 216.997 91.5494 216.997 90 219.5C87.2982 215.628 85.9649 211.295 86 206.5C85.1667 205.667 84.3333 204.833 83.5 204C82.175 204.148 81.0084 203.982 80 203.5C78.3071 200.065 77.8071 196.565 78.5 193C77.5795 191.936 76.5795 191.436 75.5 191.5C74.735 186.564 74.5684 181.564 75 176.5C73.4419 175.655 72.4419 176.321 72 178.5C71.8333 177.167 71.6667 175.833 71.5 174.5C72.7224 169.546 74.3891 164.713 76.5 160C76.3333 159.5 76.1667 159 76 158.5C74.9354 160.396 74.1021 160.563 73.5 159C75.2718 155.398 77.6051 152.232 80.5 149.5C79.1667 149.167 77.8333 148.833 76.5 148.5C80.5639 142.137 85.8973 137.137 92.5 133.5C93.0724 131.922 93.4057 130.422 93.5 129C95.2205 128.261 96.8872 127.427 98.5 126.5C97.2713 125.719 95.938 125.219 94.5 125C99.4266 119.802 105.427 117.802 112.5 119C110.939 119.941 109.605 121.108 108.5 122.5C107.566 126.785 107.566 130.452 108.5 133.5C108.721 136.943 109.721 137.276 111.5 134.5C112.249 137.418 114.083 139.085 117 139.5C120.106 139.085 120.272 138.085 117.5 136.5C117.833 136.167 118.167 135.833 118.5 135.5C121.494 136.748 124.494 136.748 127.5 135.5C126.5 134.833 125.5 134.167 124.5 133.5C127.212 132.772 129.879 131.939 132.5 131C131.376 130.751 130.376 130.251 129.5 129.5C132.53 128.323 135.197 126.657 137.5 124.5C136.214 124.524 134.88 124.19 133.5 123.5C137.963 119.563 139.963 114.563 139.5 108.5Z",
                    fill: "#EBEFF0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.103",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M56.5 92.5C56.6107 93.1174 56.944 93.6174 57.5 94C49.5724 105.697 44.2391 118.53 41.5 132.5C40.3126 135.946 39.6459 139.613 39.5 143.5C38.0115 155.254 38.3449 166.92 40.5 178.5C48.6574 219.5 71.6574 249 109.5 267C116.301 269.879 123.301 272.045 130.5 273.5C131.167 273.5 131.833 273.5 132.5 273.5C134.515 274.924 136.848 275.59 139.5 275.5C150.133 276.596 160.8 276.763 171.5 276C178.14 275.255 184.473 273.755 190.5 271.5C228.426 259.791 254.593 235.458 269 198.5C270.972 192.944 272.472 187.278 273.5 181.5C276.745 167.889 277.078 154.222 274.5 140.5C273.748 133.493 272.082 126.827 269.5 120.5C269.833 119.167 270.167 117.833 270.5 116.5C279.151 136.219 281.984 156.886 279 178.5C271.568 222.057 247.568 254.057 207 274.5C194.612 278.841 182.279 282.174 170 284.5C161.799 284.397 153.632 284.397 145.5 284.5C115.264 280.633 89.0969 267.633 67 245.5C60.7785 237.374 54.9452 229.541 49.5 222C49.8333 221.667 50.1667 221.333 50.5 221C46.0029 214.699 43.0029 208.032 41.5 201C35.3655 184.425 33.1988 167.258 35 149.5C37.2307 130.638 43.0641 113.304 52.5 97.5C54.1054 96.9941 54.4387 96.3274 53.5 95.5C54.1667 94.1667 55.1667 93.1667 56.5 92.5ZM206.5 170.5C203.546 172.28 200.713 174.28 198 176.5C188.134 190.748 179.801 205.415 173 220.5C167.803 228.251 162.637 235.918 157.5 243.5C156.167 243.5 155.5 244.167 155.5 245.5C154.761 245.369 154.094 245.536 153.5 246C148.758 253.049 142.092 257.216 133.5 258.5C132.833 258.5 132.5 258.833 132.5 259.5C131.5 259.5 130.5 259.5 129.5 259.5C126.303 261.803 125.637 264.803 127.5 268.5C118.646 266.039 110.646 262.706 103.5 258.5C103.5 258.167 103.5 257.833 103.5 257.5C120.187 261.326 135.52 258.159 149.5 248C163.244 233.942 166.744 217.776 160 199.5C159.241 197.937 158.074 196.937 156.5 196.5C153.794 190.781 149.127 187.448 142.5 186.5C140.527 185.837 138.361 185.504 136 185.5C132.523 185.328 129.356 185.994 126.5 187.5C122.698 188.32 119.364 189.986 116.5 192.5C114.824 193.183 114.157 194.517 114.5 196.5C112.878 197.122 111.545 198.122 110.5 199.5C109.828 203.188 108.995 206.855 108 210.5C104.953 208.082 102.62 205.082 101 201.5C99.6918 197.24 98.1918 193.074 96.5 189C96.5775 185.395 96.5775 181.729 96.5 178C98.4049 176.185 100.072 174.185 101.5 172C103.78 171.767 105.78 170.934 107.5 169.5C141.954 169.96 174.954 170.293 206.5 170.5ZM264.5 156.5C263.833 155.833 263.167 155.167 262.5 154.5C263.058 153.21 264.058 152.377 265.5 152C265.167 151.667 264.833 151.333 264.5 151C265.717 149.352 266.55 147.519 267 145.5C267.827 149.541 267.66 153.541 266.5 157.5C265.817 157.137 265.15 156.804 264.5 156.5ZM152.5 272.5C149.833 272.5 147.167 272.5 144.5 272.5C145.172 271.733 146.005 271.066 147 270.5C148.948 271.109 150.782 271.776 152.5 272.5Z",
                    fill: "#0E0E0E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.263",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M263.5 173.5C263.785 176.829 263.118 179.829 261.5 182.5C261.676 179.273 262.343 176.273 263.5 173.5Z",
                    fill: "#978DA4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M62.5 172.5C63.5 172.5 64.5 172.5 65.5 172.5C67.4023 175.337 68.069 178.671 67.5 182.5C67.6716 183.492 67.3382 184.158 66.5 184.5C66.5 180.833 66.5 177.167 66.5 173.5C65.1667 173.5 63.8333 173.5 62.5 173.5C62.185 177.371 62.5184 181.038 63.5 184.5C63.1667 185.167 62.8333 185.833 62.5 186.5C61.5 186.5 60.5 186.5 59.5 186.5C58.2132 183.302 57.5465 179.969 57.5 176.5C58.9142 174.946 60.5808 173.612 62.5 172.5Z",
                    fill: "#EBCC90"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M90.5 149.5C88.1685 154.026 86.0018 158.693 84 163.5C83.2578 173.898 83.7578 184.231 85.5 194.5C83.3057 192.779 82.139 190.445 82 187.5C80 177.5 80 167.5 82 157.5C84.047 153.952 86.8803 151.285 90.5 149.5Z",
                    fill: "#0685CD"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M91.5 143.5C90.7428 149.401 92.0761 154.734 95.5 159.5C90.9339 163.23 87.7672 167.897 86 173.5C86.5847 194.503 95.0847 211.67 111.5 225C117.302 229.768 123.968 232.268 131.5 232.5C127.733 233.795 123.733 234.461 119.5 234.5C114.655 231.577 109.655 228.911 104.5 226.5C104.392 224.217 103.559 222.217 102 220.5C97.907 216.555 94.0737 212.555 90.5 208.5C88.7465 203.789 87.0798 199.123 85.5 194.5C83.7578 184.231 83.2578 173.898 84 163.5C86.0018 158.693 88.1685 154.026 90.5 149.5C90.5 147.833 90.5 146.167 90.5 144.5C90.5 143.833 90.8333 143.5 91.5 143.5Z",
                    fill: "#0C6EB6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M90.5 144.5C90.5 146.167 90.5 147.833 90.5 149.5C86.8803 151.285 84.047 153.952 82 157.5C80 167.5 80 177.5 82 187.5C82.139 190.445 83.3057 192.779 85.5 194.5C87.0798 199.123 88.7465 203.789 90.5 208.5C94.0737 212.555 97.907 216.555 102 220.5C103.559 222.217 104.392 224.217 104.5 226.5C102.093 225.206 99.9263 223.539 98 221.5C88.7925 210.754 82.4591 198.421 79 184.5C77 176.167 77 167.833 79 159.5C80.9289 152.946 84.7623 147.946 90.5 144.5Z",
                    fill: "#58D2F0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M61.5 147.5C63.2915 147.366 64.9582 147.699 66.5 148.5C67.6085 149.29 68.9419 149.79 70.5 150C68.9186 151.828 67.5853 153.828 66.5 156C67.9552 158.016 69.9552 158.849 72.5 158.5C73.1128 161.969 71.7794 163.969 68.5 164.5C68.4026 167.594 67.4026 170.26 65.5 172.5C64.5 172.5 63.5 172.5 62.5 172.5C62.1781 166.872 62.8447 161.372 64.5 156C64.1667 155.5 63.8333 155 63.5 154.5C62.1861 155.313 61.0195 156.313 60 157.5C59.1629 153.852 59.6629 150.519 61.5 147.5Z",
                    fill: "#5B5E90"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.138",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M104.5 162.5C142.67 162.168 180.67 162.501 218.5 163.5C214.354 165.073 210.687 167.407 207.5 170.5C207.167 170.5 206.833 170.5 206.5 170.5C174.954 170.293 141.954 169.96 107.5 169.5C105.78 170.934 103.78 171.767 101.5 172C100.072 174.185 98.4049 176.185 96.5 178C96.5775 181.729 96.5775 185.395 96.5 189C98.1918 193.074 99.6918 197.24 101 201.5C102.62 205.082 104.953 208.082 108 210.5C108.995 206.855 109.828 203.188 110.5 199.5C112.797 202.143 113.13 205.143 111.5 208.5C111.804 211.386 112.471 214.052 113.5 216.5C113.672 217.492 113.338 218.158 112.5 218.5C108.589 215.092 104.755 211.426 101 207.5C98.3242 200.8 95.6576 194.133 93 187.5C91.9807 181.26 92.4807 175.26 94.5 169.5C97.3253 166.325 100.659 163.992 104.5 162.5Z",
                    fill: "#111111"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M104.5 162.5C100.659 163.992 97.3253 166.325 94.5 169.5C94.67 168.178 94.3366 167.011 93.5 166C94.448 165.517 95.448 165.351 96.5 165.5C96.2222 163.654 96.8888 162.32 98.5 161.5C100.409 162.348 102.409 162.682 104.5 162.5Z",
                    fill: "#543E67"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.522",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M104.5 162.5C104.5 161.833 104.833 161.5 105.5 161.5C143.835 161.333 182.168 161.5 220.5 162C219.956 162.717 219.289 163.217 218.5 163.5C180.67 162.501 142.67 162.168 104.5 162.5Z",
                    fill: "#716280"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M56.5 138.5C56.5 141.167 56.5 143.833 56.5 146.5C58.1667 146.5 59.8333 146.5 61.5 146.5C61.5 146.833 61.5 147.167 61.5 147.5C59.6629 150.519 59.1629 153.852 60 157.5C61.0195 156.313 62.1861 155.313 63.5 154.5C63.8333 155 64.1667 155.5 64.5 156C62.8447 161.372 62.1781 166.872 62.5 172.5C60.5808 173.612 58.9142 174.946 57.5 176.5C56.0402 168.885 55.3735 161.051 55.5 153C55.5007 147.988 55.8341 143.155 56.5 138.5Z",
                    fill: "#C5C3E4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M43.5 138.5C42.1943 151.502 42.1943 164.502 43.5 177.5C43.326 183.574 42.326 183.907 40.5 178.5C38.3449 166.92 38.0115 155.254 39.5 143.5C41.217 140.155 41.8836 136.489 41.5 132.5C42.1174 132.389 42.6174 132.056 43 131.5C43.4966 133.81 43.6633 136.143 43.5 138.5Z",
                    fill: "#3F2B57"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.016",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M252.5 154.5C255.731 155.782 259.064 155.782 262.5 154.5C263.167 155.167 263.833 155.833 264.5 156.5C259.305 156.821 254.305 156.487 249.5 155.5C250.609 155.443 251.609 155.11 252.5 154.5Z",
                    fill: "#ECE9ED"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M163.5 143.5C162.846 147.683 164.512 150.516 168.5 152C179.63 153.693 190.63 153.86 201.5 152.5C202.812 153.145 203.812 154.145 204.5 155.5C191.513 156.666 178.513 156.833 165.5 156C162.462 152.128 161.795 147.961 163.5 143.5Z",
                    fill: "#0864AC"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M97.5 138.5C97.4571 141.91 97.9571 145.243 99 148.5C99.3333 148.167 99.6667 147.833 100 147.5C100.948 149.57 102.448 151.07 104.5 152C109.833 152.667 115.167 152.667 120.5 152C121.756 151.583 122.423 150.75 122.5 149.5C123.267 150.172 123.934 151.005 124.5 152C130.171 152.073 135.838 152.073 141.5 152C143.997 152.412 145.997 153.578 147.5 155.5C132.511 156.666 117.511 156.833 102.5 156C100.094 154.378 98.2606 152.211 97 149.5C96.1901 145.642 96.3567 141.976 97.5 138.5Z",
                    fill: "#0965AD"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M251.5 136.5C253.265 135.539 255.265 135.205 257.5 135.5C256.389 144.117 251.723 149.95 243.5 153C232.407 156.173 221.073 157.339 209.5 156.5C209.753 154.173 209.086 152.173 207.5 150.5C204.607 148.228 201.607 146.228 198.5 144.5C200.099 144.768 201.432 144.434 202.5 143.5C202.833 143.5 203.167 143.5 203.5 143.5C205.474 147.793 208.807 149.46 213.5 148.5C213.5 148.833 213.5 149.167 213.5 149.5C216.694 152.269 220.527 153.602 225 153.5C229.727 153.298 234.227 152.298 238.5 150.5C238.5 149.5 238.5 148.5 238.5 147.5C240.591 147.682 242.591 147.348 244.5 146.5C245.293 147.355 244.96 148.189 243.5 149C246.872 150.122 248.872 148.955 249.5 145.5C252.055 143.103 254.055 140.27 255.5 137C254.207 136.51 252.873 136.343 251.5 136.5Z",
                    fill: "#0D6AB1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M249.5 145.5C248.872 148.955 246.872 150.122 243.5 149C244.96 148.189 245.293 147.355 244.5 146.5C242.591 147.348 240.591 147.682 238.5 147.5C238.5 148.5 238.5 149.5 238.5 150.5C234.227 152.298 229.727 153.298 225 153.5C220.527 153.602 216.694 152.269 213.5 149.5C216.579 149.74 219.579 149.407 222.5 148.5C224.059 149.074 225.559 149.74 227 150.5C231.838 147.87 236.838 145.536 242 143.5C242.308 144.308 242.808 144.975 243.5 145.5C245.071 143.585 247.071 142.585 249.5 142.5C249.5 143.5 249.5 144.5 249.5 145.5Z",
                    fill: "#0889CE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M274.5 140.5C277.078 154.222 276.745 167.889 273.5 181.5C272.883 181.611 272.383 181.944 272 182.5C271.503 179.854 271.336 177.187 271.5 174.5C272.724 163.505 272.724 152.505 271.5 141.5C271.694 137.995 272.694 137.662 274.5 140.5Z",
                    fill: "#47335D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.663",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M51.5 135.5C51.7204 140.1 51.0538 144.433 49.5 148.5C49.2796 143.9 49.9462 139.567 51.5 135.5Z",
                    fill: "#6F5E7E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M160.5 136.5C161.609 136.557 162.609 136.89 163.5 137.5C158.136 142.712 156.469 148.879 158.5 156C156.527 156.495 154.527 156.662 152.5 156.5C152.747 153.495 151.747 150.995 149.5 149C144.053 146.96 138.386 145.96 132.5 146C134.364 144.569 136.364 143.403 138.5 142.5C141.701 144.26 145.367 145.094 149.5 145C150.966 145.635 152.3 146.469 153.5 147.5C156.272 144.072 158.606 140.405 160.5 136.5Z",
                    fill: "#0B65AC"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M116.5 142.5C116.833 142.5 117.167 142.5 117.5 142.5C123.128 142.352 128.128 140.518 132.5 137C133.252 136.329 133.586 135.496 133.5 134.5C134.833 134.5 136.167 134.5 137.5 134.5C133.348 139.468 128.181 143.135 122 145.5C121.421 146.928 121.588 148.262 122.5 149.5C122.423 150.75 121.756 151.583 120.5 152C115.167 152.667 109.833 152.667 104.5 152C102.448 151.07 100.948 149.57 100 147.5C99.6667 147.833 99.3333 148.167 99 148.5C97.9571 145.243 97.4571 141.91 97.5 138.5C97.2627 137.209 97.596 136.209 98.5 135.5C98.4346 135.938 98.6012 136.272 99 136.5C100.471 134.128 101.637 134.128 102.5 136.5C99.6446 139.481 100.311 141.481 104.5 142.5C105.386 143.325 105.719 144.325 105.5 145.5C108.518 145.665 111.518 145.498 114.5 145C115.756 144.583 116.423 143.75 116.5 142.5Z",
                    fill: "#0C89CE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M199.5 150.5C200.5 150.833 201.167 151.5 201.5 152.5C190.63 153.86 179.63 153.693 168.5 152C164.512 150.516 162.846 147.683 163.5 143.5C163.586 141.323 164.253 139.323 165.5 137.5C165.03 136.537 164.363 136.537 163.5 137.5C162.609 136.89 161.609 136.557 160.5 136.5C163.137 134.573 166.137 134.073 169.5 135C170.227 137.124 170.894 139.291 171.5 141.5C171.291 142.086 170.957 142.586 170.5 143C172.833 145 175.167 147 177.5 149C184.169 149.864 190.835 150.697 197.5 151.5C198.416 151.457 199.083 151.124 199.5 150.5Z",
                    fill: "#0887CC"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M168.5 126.5C171.218 133.765 174.885 140.598 179.5 147C186.463 146.875 193.129 148.042 199.5 150.5C199.083 151.124 198.416 151.457 197.5 151.5C190.835 150.697 184.169 149.864 177.5 149C175.167 147 172.833 145 170.5 143C170.957 142.586 171.291 142.086 171.5 141.5C170.894 139.291 170.227 137.124 169.5 135C166.137 134.073 163.137 134.573 160.5 136.5C156.772 138.145 152.939 139.479 149 140.5C146.516 140.503 144.349 139.837 142.5 138.5C143.167 137.167 144.167 136.167 145.5 135.5C155.161 137.826 162.828 134.826 168.5 126.5Z",
                    fill: "#3DC5EE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M251.5 136.5C252.873 136.343 254.207 136.51 255.5 137C254.055 140.27 252.055 143.103 249.5 145.5C249.5 144.5 249.5 143.5 249.5 142.5C247.071 142.585 245.071 143.585 243.5 145.5C242.808 144.975 242.308 144.308 242 143.5C236.838 145.536 231.838 147.87 227 150.5C225.559 149.74 224.059 149.074 222.5 148.5C219.579 149.407 216.579 149.74 213.5 149.5C213.5 149.167 213.5 148.833 213.5 148.5C220.665 145.088 227.998 141.921 235.5 139C240.656 137.038 245.989 136.205 251.5 136.5Z",
                    fill: "#3ACAF3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M202.5 143.5C201.432 144.434 200.099 144.768 198.5 144.5C193.508 144.001 188.508 143.501 183.5 143C182.117 141.729 181.117 140.229 180.5 138.5C181.222 138.082 181.722 137.416 182 136.5C183.543 138.378 185.376 139.878 187.5 141C192.513 141.836 197.513 142.669 202.5 143.5Z",
                    fill: "#1186C9"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M65.5 133.5C66.1667 133.5 66.8333 133.5 67.5 133.5C67.5 133.833 67.5 134.167 67.5 134.5C63.8993 137.701 61.8993 141.701 61.5 146.5C59.8333 146.5 58.1667 146.5 56.5 146.5C56.5 143.833 56.5 141.167 56.5 138.5C56.3284 137.508 56.6618 136.842 57.5 136.5C58.404 135.791 58.7373 134.791 58.5 133.5C60.8333 133.5 63.1667 133.5 65.5 133.5Z",
                    fill: "#FAE4AE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M217.5 140.5C213.658 142.002 209.658 142.668 205.5 142.5C204.26 141.027 203.26 139.36 202.5 137.5C202.833 137.167 203.167 136.833 203.5 136.5C205.389 139.992 207.722 140.659 210.5 138.5C212.982 139.067 215.316 139.734 217.5 140.5Z",
                    fill: "#EFEEF2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M160.5 136.5C158.606 140.405 156.272 144.072 153.5 147.5C152.3 146.469 150.966 145.635 149.5 145C145.367 145.094 141.701 144.26 138.5 142.5C139.5 140.833 140.833 139.5 142.5 138.5C144.349 139.837 146.516 140.503 149 140.5C152.939 139.479 156.772 138.145 160.5 136.5Z",
                    fill: "#0888CC"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M116.5 142.5C116.423 143.75 115.756 144.583 114.5 145C111.518 145.498 108.518 145.665 105.5 145.5C105.719 144.325 105.386 143.325 104.5 142.5C100.311 141.481 99.6446 139.481 102.5 136.5C101.637 134.128 100.471 134.128 99 136.5C98.6012 136.272 98.4346 135.938 98.5 135.5C100.098 131.908 102.098 128.574 104.5 125.5C105.251 124.427 106.251 124.26 107.5 125C106.475 127.071 105.642 129.238 105 131.5C103.675 140.34 107.509 144.007 116.5 142.5Z",
                    fill: "#45D0F4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M67.5 134.5C68.8333 134.5 70.1667 134.5 71.5 134.5C69.953 138.245 68.453 141.912 67 145.5C70.2714 140.976 74.4381 138.143 79.5 137C76.2579 140.074 73.5913 143.574 71.5 147.5C69.9547 148.452 68.288 148.785 66.5 148.5C64.9582 147.699 63.2915 147.366 61.5 147.5C61.5 147.167 61.5 146.833 61.5 146.5C61.8993 141.701 63.8993 137.701 67.5 134.5Z",
                    fill: "#EBAF3F"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M172.5 121.5C178.927 130.425 187.26 136.925 197.5 141C199.066 141.765 200.399 141.598 201.5 140.5C202.404 141.209 202.737 142.209 202.5 143.5C197.513 142.669 192.513 141.836 187.5 141C185.376 139.878 183.543 138.378 182 136.5C181.722 137.416 181.222 138.082 180.5 138.5C177.463 133.082 174.797 127.416 172.5 121.5Z",
                    fill: "#48CCEF"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M41.5 132.5C41.8836 136.489 41.217 140.155 39.5 143.5C39.6459 139.613 40.3126 135.946 41.5 132.5Z",
                    fill: "#725D7F"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M133.5 134.5C133.586 135.496 133.252 136.329 132.5 137C128.128 140.518 123.128 142.352 117.5 142.5C122.912 140.027 128.246 137.36 133.5 134.5Z",
                    fill: "#5FD7EE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M201.5 140.5C200.399 141.598 199.066 141.765 197.5 141C187.26 136.925 178.927 130.425 172.5 121.5C172.5 121.167 172.5 120.833 172.5 120.5C172.435 120.062 172.601 119.728 173 119.5C175.7 121.234 177.7 123.568 179 126.5C179.333 125.833 179.667 125.167 180 124.5C181.044 125.623 181.71 126.956 182 128.5C182.741 129.641 183.575 129.641 184.5 128.5C185.833 130.5 187.167 132.5 188.5 134.5C189.192 133.975 189.692 133.308 190 132.5C190.309 133.766 190.809 134.933 191.5 136C195.233 136.142 198.566 137.642 201.5 140.5Z",
                    fill: "#DCE6EA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M166.5 119.5C167.015 121.894 167.681 124.228 168.5 126.5C162.828 134.826 155.161 137.826 145.5 135.5C148.256 131.983 149.923 127.983 150.5 123.5C151.302 122.048 151.802 120.382 152 118.5C152.1 123.355 151.933 128.021 151.5 132.5C152.333 132.833 153.167 133.167 154 133.5C155.877 132.747 157.711 131.914 159.5 131C159.043 130.586 158.709 130.086 158.5 129.5C160.167 128.333 161.833 127.167 163.5 126C162.167 125.667 160.833 125.333 159.5 125C161.996 123.334 164.329 121.5 166.5 119.5Z",
                    fill: "#E3EAED"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M143.5 124.5C142.517 128.469 140.517 131.802 137.5 134.5C136.167 134.5 134.833 134.5 133.5 134.5C137.167 131.5 140.5 128.167 143.5 124.5Z",
                    fill: "#52CCE8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M255.5 128.5C249.675 130.449 243.508 132.116 237 133.5C235.278 133.389 235.112 132.889 236.5 132C237.745 131.209 239.078 130.709 240.5 130.5C245.5 129.833 250.5 129.167 255.5 128.5Z",
                    fill: "#D4D0DB"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.769",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M260.5 125.5C261.924 127.515 262.59 129.848 262.5 132.5C261.076 130.485 260.41 128.152 260.5 125.5Z",
                    fill: "#7B6A86"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M66.5 184.5C65.5 184.5 64.5 184.5 63.5 184.5C62.5184 181.038 62.185 177.371 62.5 173.5C63.8333 173.5 65.1667 173.5 66.5 173.5C66.5 177.167 66.5 180.833 66.5 184.5Z",
                    fill: "#F9B430"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M256.5 166.5C258.176 167.183 258.843 168.517 258.5 170.5C257.339 181.163 254.339 191.163 249.5 200.5C247.543 204.683 245.21 208.683 242.5 212.5C240.813 211.274 239.313 211.608 238 213.5C236.97 213.164 236.47 212.497 236.5 211.5C239.645 206.946 242.145 201.946 244 196.5C245.964 188.808 248.464 181.308 251.5 174C250.906 173.536 250.239 173.369 249.5 173.5C251.527 170.806 253.861 168.473 256.5 166.5Z",
                    fill: "#66950B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.643",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M142.5 186.5C137.13 186.392 131.797 186.725 126.5 187.5C129.356 185.994 132.523 185.328 136 185.5C138.361 185.504 140.527 185.837 142.5 186.5Z",
                    fill: "#6E607B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.951",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M142.5 186.5C149.127 187.448 153.794 190.781 156.5 196.5C156.5 197.167 156.5 197.833 156.5 198.5C154.697 196.519 153.03 194.352 151.5 192C148.088 190.666 145.088 188.832 142.5 186.5Z",
                    fill: "#52475D"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M116.5 192.5C116.833 193.167 117.167 193.833 117.5 194.5C116.5 195.167 115.5 195.833 114.5 196.5C114.157 194.517 114.824 193.183 116.5 192.5Z",
                    fill: "black"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M126.5 187.5C123.19 189.482 120.19 191.815 117.5 194.5C117.167 193.833 116.833 193.167 116.5 192.5C119.364 189.986 122.698 188.32 126.5 187.5Z",
                    fill: "#908B95"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M152.5 204.5C152.607 206.379 152.107 206.712 151 205.5C150.333 206.167 149.667 206.833 149 207.5C149.086 203.953 147.92 200.953 145.5 198.5C144.808 199.025 144.308 199.692 144 200.5C141.617 196.223 138.117 194.556 133.5 195.5C135.274 196.187 136.941 197.02 138.5 198C136.167 198.333 133.833 198.667 131.5 199C128.588 199.845 127.588 201.512 128.5 204C131.692 204.197 134.692 205.03 137.5 206.5C138.298 206.957 138.631 207.624 138.5 208.5C135.022 206.441 131.355 206.108 127.5 207.5C130.102 208.132 132.436 209.132 134.5 210.5C134.047 211.458 133.381 212.292 132.5 213C126.109 214.631 122.276 212.131 121 205.5C120.506 203.866 120.34 202.199 120.5 200.5C121.117 198.771 122.117 197.271 123.5 196C136.514 187.855 146.18 190.688 152.5 204.5Z",
                    fill: "#EEEEF0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M249.5 173.5C250.239 173.369 250.906 173.536 251.5 174C248.464 181.308 245.964 188.808 244 196.5C242.145 201.946 239.645 206.946 236.5 211.5C236.5 210.167 236.5 208.833 236.5 207.5C236.298 205.05 236.631 202.717 237.5 200.5C238.924 198.485 239.59 196.152 239.5 193.5C240.371 185.524 243.704 178.858 249.5 173.5Z",
                    fill: "#93CF13"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M67.5 182.5C69.9424 182.354 70.6091 183.187 69.5 185C72.0515 186.516 71.7181 187.349 68.5 187.5C69.2679 191.715 71.6012 193.048 75.5 191.5C76.5795 191.436 77.5795 191.936 78.5 193C77.8071 196.565 78.3071 200.065 80 203.5C81.0084 203.982 82.175 204.148 83.5 204C84.3333 204.833 85.1667 205.667 86 206.5C85.9649 211.295 87.2982 215.628 90 219.5C91.5494 216.997 93.2161 216.997 95 219.5C96.1043 223.167 97.7709 226.5 100 229.5C100.308 228.692 100.808 228.025 101.5 227.5C105.382 230.557 109.382 233.39 113.5 236C119.5 236.667 125.5 236.667 131.5 236C132.416 235.722 133.082 235.222 133.5 234.5C136.833 233.167 139.167 230.833 140.5 227.5C143.461 223.142 144.128 218.475 142.5 213.5C143.5 213.5 144.5 213.5 145.5 213.5C145.5 212.167 145.5 210.833 145.5 209.5C146.822 209.67 147.989 209.337 149 208.5C149.595 209.899 149.428 211.232 148.5 212.5C149.5 213.833 150.5 215.167 151.5 216.5C152.622 214.956 152.289 213.623 150.5 212.5C151.325 211.614 152.325 211.281 153.5 211.5C153.5 210.5 153.5 209.5 153.5 208.5C154.139 209.097 154.472 209.93 154.5 211C154.266 217.272 152.266 222.772 148.5 227.5C148.649 226.448 148.483 225.448 148 224.5C146.454 230.878 142.621 235.211 136.5 237.5C134.565 238.15 132.565 238.483 130.5 238.5C130.5 239.5 130.5 240.5 130.5 241.5C125.985 242.982 121.319 243.648 116.5 243.5C116.5 242.5 116.5 241.5 116.5 240.5C114.833 240.5 113.167 240.5 111.5 240.5C110.849 241.091 110.182 241.757 109.5 242.5C106.917 241.191 104.25 240.191 101.5 239.5C101.5 239.167 101.5 238.833 101.5 238.5C104.101 236.003 103.435 234.337 99.5 233.5C98.4777 233.855 97.811 234.522 97.5 235.5C93.51 232.909 89.51 230.242 85.5 227.5C88.5174 222.522 87.184 220.522 81.5 221.5C78.6771 218.525 76.3437 215.192 74.5 211.5C75.877 208.364 75.5437 205.364 73.5 202.5C72.2613 202.942 71.2613 203.609 70.5 204.5C68.6652 201.158 67.4985 197.491 67 193.5C65.2676 191.2 63.7676 188.867 62.5 186.5C62.8333 185.833 63.1667 185.167 63.5 184.5C64.5 184.5 65.5 184.5 66.5 184.5C67.3382 184.158 67.6716 183.492 67.5 182.5Z",
                    fill: "#57567C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M59.5 186.5C60.5 186.5 61.5 186.5 62.5 186.5C63.7676 188.867 65.2676 191.2 67 193.5C67.4985 197.491 68.6652 201.158 70.5 204.5C69.8902 205.391 69.5569 206.391 69.5 207.5C67.5259 205.572 66.0259 203.239 65 200.5C63.2567 195.765 61.4234 191.098 59.5 186.5Z",
                    fill: "#B8B6DA"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M249.5 155.5C254.305 156.487 259.305 156.821 264.5 156.5C264.365 162.181 264.032 167.848 263.5 173.5C262.343 176.273 261.676 179.273 261.5 182.5C260.806 187.915 259.14 192.915 256.5 197.5C254.431 199.292 253.097 201.626 252.5 204.5C251.5 204.5 250.5 204.5 249.5 204.5C249.5 203.167 249.5 201.833 249.5 200.5C254.339 191.163 257.339 181.163 258.5 170.5C259.451 169.081 259.784 167.415 259.5 165.5C258.209 165.263 257.209 165.596 256.5 166.5C253.861 168.473 251.527 170.806 249.5 173.5C243.704 178.858 240.371 185.524 239.5 193.5C238.076 195.515 237.41 197.848 237.5 200.5C236.631 202.717 236.298 205.05 236.5 207.5C235.332 211.826 234.332 216.326 233.5 221C233.833 221.833 234.167 222.667 234.5 223.5C235.107 223.376 235.44 223.043 235.5 222.5C236.525 223.374 237.192 224.541 237.5 226C235.403 227.395 233.736 229.229 232.5 231.5C231.702 229.922 231.202 228.256 231 226.5C229.264 229.064 228.098 228.731 227.5 225.5C229.265 211.506 232.098 197.839 236 184.5C232.558 187.432 229.725 190.765 227.5 194.5C224.448 197.576 221.614 200.91 219 204.5C214.888 213.625 211.388 222.959 208.5 232.5C205.586 240.593 200.253 246.759 192.5 251C193.793 251.49 195.127 251.657 196.5 251.5C196.539 252.583 196.873 253.583 197.5 254.5C196.388 255.265 195.721 256.265 195.5 257.5C192.442 259.132 189.109 260.299 185.5 261C173.924 263.051 162.257 263.885 150.5 263.5C145.402 262.043 140.069 261.376 134.5 261.5C134.167 261.5 133.833 261.5 133.5 261.5C133.167 260.833 132.833 260.167 132.5 259.5C132.5 258.833 132.833 258.5 133.5 258.5C138.256 259.317 142.922 258.484 147.5 256C149.667 252.5 152.5 249.667 156 247.5C156.692 246.563 156.525 245.897 155.5 245.5C155.5 244.167 156.167 243.5 157.5 243.5C157.369 244.239 157.536 244.906 158 245.5C160.965 240.57 164.631 236.237 169 232.5C176.985 218.027 184.818 203.527 192.5 189C194.958 186.589 196.791 183.755 198 180.5C201.709 177.626 204.875 174.293 207.5 170.5C210.687 167.407 214.354 165.073 218.5 163.5C219.289 163.217 219.956 162.717 220.5 162C182.168 161.5 143.835 161.333 105.5 161.5C142.002 160.833 178.669 160.167 215.5 159.5C220.99 158.715 226.49 158.049 232 157.5C233.514 157.77 235.014 158.103 236.5 158.5C240.506 156.118 244.839 155.118 249.5 155.5Z",
                    fill: "#1F063A"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M239.5 193.5C239.59 196.152 238.924 198.485 237.5 200.5C237.41 197.848 238.076 195.515 239.5 193.5Z",
                    fill: "#69812C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M249.5 164.5C249.5 164.833 249.5 165.167 249.5 165.5C238.256 176.558 225.256 185.058 210.5 191C205.164 197.498 198.497 200.998 190.5 201.5C192.803 197.208 195.47 193.208 198.5 189.5C198.369 190.239 198.536 190.906 199 191.5C214.452 180.023 231.285 171.023 249.5 164.5Z",
                    fill: "#66930E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M244.5 162.5C246.857 162.337 249.19 162.503 251.5 163C250.956 163.717 250.289 164.217 249.5 164.5C231.285 171.023 214.452 180.023 199 191.5C198.536 190.906 198.369 190.239 198.5 189.5C209.251 172.788 224.584 163.788 244.5 162.5Z",
                    fill: "#96D411"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M256.5 166.5C257.209 165.596 258.209 165.263 259.5 165.5C259.784 167.415 259.451 169.081 258.5 170.5C258.843 168.517 258.176 167.183 256.5 166.5Z",
                    fill: "#3E412B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M244.5 162.5C246.948 161.527 249.615 161.194 252.5 161.5C252.912 163.973 251.912 165.306 249.5 165.5C249.5 165.167 249.5 164.833 249.5 164.5C250.289 164.217 250.956 163.717 251.5 163C249.19 162.503 246.857 162.337 244.5 162.5Z",
                    fill: "#444D24"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M144.5 73.5C148.186 76.2316 152.519 77.7316 157.5 78C157.957 78.414 158.291 78.914 158.5 79.5C154.861 80.4603 151.195 80.4603 147.5 79.5C137.86 78.4414 128.194 78.2747 118.5 79C86.2838 85.72 65.9504 104.887 57.5 136.5C56.6618 136.842 56.3284 137.508 56.5 138.5C55.8341 143.155 55.5007 147.988 55.5 153C55.3735 161.051 56.0402 168.885 57.5 176.5C57.5465 179.969 58.2132 183.302 59.5 186.5C61.4234 191.098 63.2567 195.765 65 200.5C66.0259 203.239 67.5259 205.572 69.5 207.5C70.1103 209.434 71.1103 211.101 72.5 212.5C74.7376 217.071 77.7376 221.071 81.5 224.5C82.1667 225.5 82.8333 226.5 83.5 227.5C87.5149 231.513 91.8482 235.179 96.5 238.5C96.8417 239.338 97.5084 239.672 98.5 239.5C102.237 242.527 106.57 244.193 111.5 244.5C118.399 246.198 125.066 245.531 131.5 242.5C133.284 242.107 134.95 241.441 136.5 240.5C137.391 239.89 138.391 239.557 139.5 239.5C140.626 240.858 140.626 242.192 139.5 243.5C137.774 245.03 135.774 246.03 133.5 246.5C132.702 246.957 132.369 247.624 132.5 248.5C125.45 251.454 118.117 252.12 110.5 250.5C108.485 249.076 106.152 248.41 103.5 248.5C99.8772 246.241 96.3772 243.574 93 240.5C90.8458 239.726 88.6792 239.059 86.5 238.5C60.067 214.18 47.7336 184.18 49.5 148.5C51.0538 144.433 51.7204 140.1 51.5 135.5C53.5054 124.161 58.172 114.161 65.5 105.5C69.8052 100.859 74.1386 96.1927 78.5 91.5C79.2623 89.7376 80.5956 88.7376 82.5 88.5C86.4394 86.5538 90.106 84.2205 93.5 81.5C93.5 80.8333 93.8333 80.5 94.5 80.5C94.56 81.0431 94.8933 81.3764 95.5 81.5C99.1481 80.191 102.481 78.5243 105.5 76.5C105.833 76.5 106.167 76.5 106.5 76.5C111.014 76.2321 115.347 75.3988 119.5 74C127.827 73.5003 136.16 73.3336 144.5 73.5Z",
                    fill: "#291144"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M74.5 211.5C73.8333 211.833 73.1667 212.167 72.5 212.5C71.1103 211.101 70.1103 209.434 69.5 207.5C69.5569 206.391 69.8902 205.391 70.5 204.5C71.2613 203.609 72.2613 202.942 73.5 202.5C75.5437 205.364 75.877 208.364 74.5 211.5Z",
                    fill: "#EFB84F"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M117.5 194.5C116.588 196.595 115.421 198.595 114 200.5C113.501 205.823 113.334 211.156 113.5 216.5C112.471 214.052 111.804 211.386 111.5 208.5C113.13 205.143 112.797 202.143 110.5 199.5C111.545 198.122 112.878 197.122 114.5 196.5C115.5 195.833 116.5 195.167 117.5 194.5Z",
                    fill: "#695E75"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M152.5 204.5C153.434 205.568 153.768 206.901 153.5 208.5C153.5 209.5 153.5 210.5 153.5 211.5C152.325 211.281 151.325 211.614 150.5 212.5C152.289 213.623 152.622 214.956 151.5 216.5C150.5 215.167 149.5 213.833 148.5 212.5C149.428 211.232 149.595 209.899 149 208.5C147.989 209.337 146.822 209.67 145.5 209.5C145.5 210.833 145.5 212.167 145.5 213.5C144.5 213.5 143.5 213.5 142.5 213.5C141.197 211.858 139.864 210.191 138.5 208.5C138.631 207.624 138.298 206.957 137.5 206.5C134.692 205.03 131.692 204.197 128.5 204C127.588 201.512 128.588 199.845 131.5 199C133.833 198.667 136.167 198.333 138.5 198C136.941 197.02 135.274 196.187 133.5 195.5C138.117 194.556 141.617 196.223 144 200.5C144.308 199.692 144.808 199.025 145.5 198.5C147.92 200.953 149.086 203.953 149 207.5C149.667 206.833 150.333 206.167 151 205.5C152.107 206.712 152.607 206.379 152.5 204.5Z",
                    fill: "#5B5771"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M206.5 201.5C207.525 201.897 207.692 202.563 207 203.5C199.086 213.879 189.586 222.546 178.5 229.5C178.167 229.167 177.833 228.833 177.5 228.5C179.005 227.158 179.672 225.492 179.5 223.5C181.695 218.944 184.028 214.444 186.5 210C193.443 207.767 200.11 204.934 206.5 201.5Z",
                    fill: "#94D311"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M227.5 194.5C224.694 203.104 221.861 212.104 219 221.5C216.904 227.274 213.571 232.274 209 236.5C208.51 235.207 208.343 233.873 208.5 232.5C211.388 222.959 214.888 213.625 219 204.5C221.614 200.91 224.448 197.576 227.5 194.5Z",
                    fill: "#94D013"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M157.5 200.5C160.96 207.374 161.294 214.374 158.5 221.5C158.674 214.465 158.341 207.465 157.5 200.5Z",
                    fill: "#776685"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M120.5 200.5C120.34 202.199 120.506 203.866 121 205.5C122.276 212.131 126.109 214.631 132.5 213C133.381 212.292 134.047 211.458 134.5 210.5C136.727 211.401 137.727 213.067 137.5 215.5C134.741 216.885 131.741 217.552 128.5 217.5C124.576 217.894 122.076 216.227 121 212.5C120.329 211.748 119.496 211.414 118.5 211.5C118.335 208.482 118.502 205.482 119 202.5C119.278 201.584 119.778 200.918 120.5 200.5Z",
                    fill: "#49CFF2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M74.5 211.5C76.3437 215.192 78.6771 218.525 81.5 221.5C81.5 222.5 81.5 223.5 81.5 224.5C77.7376 221.071 74.7376 217.071 72.5 212.5C73.1667 212.167 73.8333 211.833 74.5 211.5Z",
                    fill: "#B4AFD4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M118.5 211.5C119.496 211.414 120.329 211.748 121 212.5C122.076 216.227 124.576 217.894 128.5 217.5C131.741 217.552 134.741 216.885 137.5 215.5C137.638 223.201 133.971 226.367 126.5 225C121.638 221.773 118.971 217.273 118.5 211.5Z",
                    fill: "#0C7BC2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M236.5 207.5C236.5 208.833 236.5 210.167 236.5 211.5C236.47 212.497 236.97 213.164 238 213.5C239.313 211.608 240.813 211.274 242.5 212.5C240.167 215.833 237.833 219.167 235.5 222.5C235.44 223.043 235.107 223.376 234.5 223.5C234.167 222.667 233.833 221.833 233.5 221C234.332 216.326 235.332 211.826 236.5 207.5Z",
                    fill: "#62851B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.125",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M113.5 216.5C114.097 216.735 114.43 217.235 114.5 218C113.969 219.718 113.302 219.885 112.5 218.5C113.338 218.158 113.672 217.492 113.5 216.5Z",
                    fill: "#B4A5BE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M179.5 223.5C179.672 225.492 179.005 227.158 177.5 228.5C177.833 228.833 178.167 229.167 178.5 229.5C189.586 222.546 199.086 213.879 207 203.5C207.692 202.563 207.525 201.897 206.5 201.5C209.31 198.864 212.31 196.364 215.5 194C217.65 192.41 219.983 191.743 222.5 192C216.559 198.608 211.392 205.775 207 213.5C198.434 225.396 187.1 233.396 173 237.5C172.5 237.167 172 236.833 171.5 236.5C173.941 231.935 176.608 227.602 179.5 223.5Z",
                    fill: "#669011"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M85.5 227.5C84.8333 227.5 84.1667 227.5 83.5 227.5C82.8333 226.5 82.1667 225.5 81.5 224.5C81.5 223.5 81.5 222.5 81.5 221.5C87.184 220.522 88.5174 222.522 85.5 227.5Z",
                    fill: "#ECB657"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M227.5 225.5C224.619 231.375 220.619 236.541 215.5 241C209.073 244.542 202.739 248.042 196.5 251.5C195.127 251.657 193.793 251.49 192.5 251C200.253 246.759 205.586 240.593 208.5 232.5C208.343 233.873 208.51 235.207 209 236.5C213.571 232.274 216.904 227.274 219 221.5C221.861 212.104 224.694 203.104 227.5 194.5C229.725 190.765 232.558 187.432 236 184.5C232.098 197.839 229.265 211.506 227.5 225.5Z",
                    fill: "#66920F"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.011",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M206.5 170.5C206.833 170.5 207.167 170.5 207.5 170.5C204.875 174.293 201.709 177.626 198 180.5C196.791 183.755 194.958 186.589 192.5 189C184.818 203.527 176.985 218.027 169 232.5C164.631 236.237 160.965 240.57 158 245.5C157.536 244.906 157.369 244.239 157.5 243.5C162.637 235.918 167.803 228.251 173 220.5C179.801 205.415 188.134 190.748 198 176.5C200.713 174.28 203.546 172.28 206.5 170.5Z",
                    fill: "#38353B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M104.5 226.5C109.655 228.911 114.655 231.577 119.5 234.5C113.503 233.669 108.503 231.002 104.5 226.5Z",
                    fill: "#6BD5EC"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M140.5 227.5C139.167 230.833 136.833 233.167 133.5 234.5C128.688 235.678 124.021 235.678 119.5 234.5C123.733 234.461 127.733 233.795 131.5 232.5C134.957 231.606 137.957 229.94 140.5 227.5Z",
                    fill: "#5FC4E3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M83.5 227.5C84.1667 227.5 84.8333 227.5 85.5 227.5C89.51 230.242 93.51 232.909 97.5 235.5C97.5 235.833 97.5 236.167 97.5 236.5C96.6618 236.842 96.3284 237.508 96.5 238.5C91.8482 235.179 87.5149 231.513 83.5 227.5Z",
                    fill: "#B8B4D9"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M148.5 227.5C146.632 231.708 143.965 235.375 140.5 238.5C139.833 238.5 139.5 238.833 139.5 239.5C138.391 239.557 137.391 239.89 136.5 240.5C136.5 239.5 136.5 238.5 136.5 237.5C142.621 235.211 146.454 230.878 148 224.5C148.483 225.448 148.649 226.448 148.5 227.5Z",
                    fill: "#A6A1CC"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M101.5 238.5C99.847 238.34 98.5137 237.674 97.5 236.5C97.5 236.167 97.5 235.833 97.5 235.5C97.811 234.522 98.4777 233.855 99.5 233.5C103.435 234.337 104.101 236.003 101.5 238.5Z",
                    fill: "#ECB13C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M179.5 252.5C181.654 249.195 184.654 246.695 188.5 245C192.5 241 196.5 237 200.5 233C199.906 232.536 199.239 232.369 198.5 232.5C200.334 230.495 202.001 228.328 203.5 226C204.332 225.312 204.998 225.479 205.5 226.5C201.122 239.544 192.456 248.211 179.5 252.5Z",
                    fill: "#669016"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M97.5 236.5C98.5137 237.674 99.847 238.34 101.5 238.5C101.5 238.833 101.5 239.167 101.5 239.5C100.5 239.5 99.5 239.5 98.5 239.5C97.5084 239.672 96.8417 239.338 96.5 238.5C96.3284 237.508 96.6618 236.842 97.5 236.5Z",
                    fill: "#E3CBA1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M151.5 234.5C150.118 237.394 148.118 239.894 145.5 242C141.691 245.238 137.358 247.404 132.5 248.5C132.369 247.624 132.702 246.957 133.5 246.5C135.774 246.03 137.774 245.03 139.5 243.5C140.626 242.192 140.626 240.858 139.5 239.5C139.5 238.833 139.833 238.5 140.5 238.5C141.643 238.207 142.977 238.207 144.5 238.5C147.051 237.396 149.384 236.062 151.5 234.5Z",
                    fill: "#3E2955"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M86.5 238.5C88.6792 239.059 90.8458 239.726 93 240.5C96.3772 243.574 99.8772 246.241 103.5 248.5C97.0345 246.437 91.3678 243.104 86.5 238.5Z",
                    fill: "#4C3B61"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M136.5 237.5C136.5 238.5 136.5 239.5 136.5 240.5C134.95 241.441 133.284 242.107 131.5 242.5C130.833 242.5 130.5 242.167 130.5 241.5C130.5 240.5 130.5 239.5 130.5 238.5C132.565 238.483 134.565 238.15 136.5 237.5Z",
                    fill: "#E2C38A"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M98.5 239.5C99.5 239.5 100.5 239.5 101.5 239.5C104.25 240.191 106.917 241.191 109.5 242.5C110.182 241.757 110.849 241.091 111.5 240.5C111.5 241.833 111.5 243.167 111.5 244.5C106.57 244.193 102.237 242.527 98.5 239.5Z",
                    fill: "#B4AFCC"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M111.5 240.5C113.167 240.5 114.833 240.5 116.5 240.5C116.5 241.5 116.5 242.5 116.5 243.5C115.081 244.451 113.415 244.784 111.5 244.5C111.5 243.167 111.5 241.833 111.5 240.5Z",
                    fill: "#EEBB52"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M130.5 241.5C130.5 242.167 130.833 242.5 131.5 242.5C125.066 245.531 118.399 246.198 111.5 244.5C113.415 244.784 115.081 244.451 116.5 243.5C121.319 243.648 125.985 242.982 130.5 241.5Z",
                    fill: "#B2ADD1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.951",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M271.5 174.5C271.336 177.187 271.503 179.854 272 182.5C272.383 181.944 272.883 181.611 273.5 181.5C272.472 187.278 270.972 192.944 269 198.5C254.593 235.458 228.426 259.791 190.5 271.5C191.303 270.577 191.47 269.577 191 268.5C189.644 269.38 188.144 269.714 186.5 269.5C191.026 268.29 195.192 266.29 199 263.5C199.414 263.957 199.914 264.291 200.5 264.5C202.577 262.918 204.91 261.918 207.5 261.5C209.153 261.34 210.486 260.674 211.5 259.5C212.254 257.495 213.421 256.828 215 257.5C218.068 254.917 221.235 252.584 224.5 250.5C225.167 250.5 225.5 250.167 225.5 249.5C250.554 231.168 265.887 206.168 271.5 174.5Z",
                    fill: "#46335B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M174.5 241.5C176.199 241.34 177.866 241.506 179.5 242C174.186 244.632 168.853 247.299 163.5 250C162.5 250.667 161.5 250.667 160.5 250C164.365 245.592 169.032 242.759 174.5 241.5Z",
                    fill: "#7AA321"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M222.5 242.5C219.725 245.605 216.392 247.938 212.5 249.5C213.32 247.86 214.153 246.193 215 244.5C216.84 245.833 217.34 245.666 216.5 244C218.076 243.56 219.41 242.727 220.5 241.5C221.183 241.863 221.85 242.196 222.5 242.5Z",
                    fill: "#4B395F"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M256.5 197.5C249.714 215.95 238.381 230.95 222.5 242.5C221.85 242.196 221.183 241.863 220.5 241.5C219.41 242.727 218.076 243.56 216.5 244C217.34 245.666 216.84 245.833 215 244.5C214.153 246.193 213.32 247.86 212.5 249.5C207.459 253.302 201.793 255.968 195.5 257.5C195.721 256.265 196.388 255.265 197.5 254.5C196.873 253.583 196.539 252.583 196.5 251.5C202.739 248.042 209.073 244.542 215.5 241C220.619 236.541 224.619 231.375 227.5 225.5C228.098 228.731 229.264 229.064 231 226.5C231.202 228.256 231.702 229.922 232.5 231.5C233.736 229.229 235.403 227.395 237.5 226C237.192 224.541 236.525 223.374 235.5 222.5C237.833 219.167 240.167 215.833 242.5 212.5C245.21 208.683 247.543 204.683 249.5 200.5C249.5 201.833 249.5 203.167 249.5 204.5C250.5 204.5 251.5 204.5 252.5 204.5C253.097 201.626 254.431 199.292 256.5 197.5Z",
                    fill: "#291341"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.58",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M103.5 248.5C106.152 248.41 108.485 249.076 110.5 250.5C107.848 250.59 105.515 249.924 103.5 248.5Z",
                    fill: "#786987"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M198.5 232.5C199.239 232.369 199.906 232.536 200.5 233C196.5 237 192.5 241 188.5 245C184.654 246.695 181.654 249.195 179.5 252.5C175.105 254.453 170.439 255.786 165.5 256.5C164.508 256.672 163.842 256.338 163.5 255.5C177.064 250.581 188.731 242.915 198.5 232.5Z",
                    fill: "#85B71C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M101.5 255.5C101.5 255.833 101.5 256.167 101.5 256.5C100.833 256.5 100.167 256.5 99.5 256.5C99.4088 254.302 100.075 253.969 101.5 255.5Z",
                    fill: "#FEFFFE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.678",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M95.5 254.5C96.8333 255.167 98.1667 255.833 99.5 256.5C100.167 256.5 100.833 256.5 101.5 256.5C101.833 256.5 102.167 256.5 102.5 256.5C102.5 257.167 102.833 257.5 103.5 257.5C103.5 257.833 103.5 258.167 103.5 258.5C102.883 258.611 102.383 258.944 102 259.5C99.2428 258.397 97.0762 256.731 95.5 254.5Z",
                    fill: "#9D94A3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M155.5 245.5C156.525 245.897 156.692 246.563 156 247.5C152.5 249.667 149.667 252.5 147.5 256C142.922 258.484 138.256 259.317 133.5 258.5C142.092 257.216 148.758 253.049 153.5 246C154.094 245.536 154.761 245.369 155.5 245.5Z",
                    fill: "#51445E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M163.5 255.5C163.842 256.338 164.508 256.672 165.5 256.5C163.086 257.933 160.419 258.433 157.5 258C159.287 256.681 161.287 255.848 163.5 255.5Z",
                    fill: "#6B812E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M43.5 177.5C45.9686 189.401 50.1353 200.734 56 211.5C56.4226 210.044 57.2559 209.544 58.5 210C57.8333 211 57.1667 212 56.5 213C59.6869 218.385 62.8536 223.218 66 227.5C66.3333 227.167 66.6667 226.833 67 226.5C68.113 227.76 68.2797 228.927 67.5 230C70.6549 232.989 73.6549 236.156 76.5 239.5C81.2602 244.681 86.2602 248.681 91.5 251.5C91.8417 252.338 92.5084 252.672 93.5 252.5C93.5 253.167 93.8333 253.5 94.5 253.5C95.1667 253.5 95.5 253.833 95.5 254.5C97.0762 256.731 99.2428 258.397 102 259.5C102.383 258.944 102.883 258.611 103.5 258.5C110.646 262.706 118.646 266.039 127.5 268.5C128.995 268.989 130.329 269.655 131.5 270.5C125.189 270.147 124.855 271.147 130.5 273.5C123.301 272.045 116.301 269.879 109.5 267C71.6574 249 48.6574 219.5 40.5 178.5C42.326 183.907 43.326 183.574 43.5 177.5Z",
                    fill: "#443259"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.306",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M129.5 259.5C130.5 259.5 131.5 259.5 132.5 259.5C132.833 260.167 133.167 260.833 133.5 261.5C131.517 261.843 130.183 261.176 129.5 259.5Z",
                    fill: "#9C91A4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.447",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M211.5 259.5C210.486 260.674 209.153 261.34 207.5 261.5C208.345 259.238 209.678 258.571 211.5 259.5Z",
                    fill: "#A195A6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.635",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M134.5 261.5C140.069 261.376 145.402 262.043 150.5 263.5C144.916 263.745 139.583 263.078 134.5 261.5Z",
                    fill: "#736380"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.01",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M139.5 270.5C139.167 270.5 138.833 270.5 138.5 270.5C136.716 271.72 135.05 271.72 133.5 270.5C135.653 269.427 137.653 269.427 139.5 270.5Z",
                    fill: "#D4D1D6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.596",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M174.5 270.5C176.05 270.508 177.717 270.175 179.5 269.5C179.842 270.338 180.508 270.672 181.5 270.5C178.091 271.903 174.425 272.57 170.5 272.5C170.842 271.662 171.508 271.328 172.5 271.5C172.833 271.5 173.167 271.5 173.5 271.5C173.833 271.5 174.167 271.5 174.5 271.5C175.833 271.167 175.833 270.833 174.5 270.5Z",
                    fill: "#8E8497"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M190.5 271.5C184.473 273.755 178.14 275.255 171.5 276C160.8 276.763 150.133 276.596 139.5 275.5C137.485 274.076 135.152 273.41 132.5 273.5C131.833 273.5 131.167 273.5 130.5 273.5C124.855 271.147 125.189 270.147 131.5 270.5C131.833 270.5 132.167 270.5 132.5 270.5C132.833 270.5 133.167 270.5 133.5 270.5C135.05 271.72 136.716 271.72 138.5 270.5C138.5 271.167 138.833 271.5 139.5 271.5C139.833 271.5 140.167 271.5 140.5 271.5C140.833 271.5 141.167 271.5 141.5 271.5C141.833 271.5 142.167 271.5 142.5 271.5C142.833 271.5 143.167 271.5 143.5 271.5C143.5 272.167 143.833 272.5 144.5 272.5C151.167 273.833 157.833 273.833 164.5 272.5C165.167 272.5 165.833 272.5 166.5 272.5C167.5 272.5 168.5 272.5 169.5 272.5C169.833 272.5 170.167 272.5 170.5 272.5C174.425 272.57 178.091 271.903 181.5 270.5C182.391 269.89 183.391 269.557 184.5 269.5C184.833 269.5 185.167 269.5 185.5 269.5C185.833 269.5 186.167 269.5 186.5 269.5C188.144 269.714 189.644 269.38 191 268.5C191.47 269.577 191.303 270.577 190.5 271.5ZM152.5 272.5C149.833 272.5 147.167 272.5 144.5 272.5C145.172 271.733 146.005 271.066 147 270.5C148.948 271.109 150.782 271.776 152.5 272.5Z",
                    fill: "#35234E"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.154",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M164.5 272.5C157.833 273.833 151.167 273.833 144.5 272.5C147.167 272.5 149.833 272.5 152.5 272.5C156.019 272.045 160.019 272.045 164.5 272.5Z",
                    fill: "#B7AFC0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    opacity: "0.392",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M132.5 273.5C135.152 273.41 137.485 274.076 139.5 275.5C136.848 275.59 134.515 274.924 132.5 273.5Z",
                    fill: "#8F839B"
                })
            ]
        })
    });
};


/***/ }),

/***/ 7520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const Spinner = ({ size ="medium" , variant ="primary"  })=>{
    let variantStyles = "", sizeStyles = "";
    switch(size){
        case "small":
            sizeStyles = "w-5 h-5";
            break;
        case "medium":
            sizeStyles = "w-10 h-10";
            break;
        case "large":
            sizeStyles = "w-16 h-16";
            break;
    }
    switch(variant){
        case "primary":
            variantStyles = "text-primary";
            break;
        case "white":
            variantStyles = "text-white";
            break;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(sizeStyles, variantStyles, "animate-spin"),
        role: "spinner",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
        ]
    });
};


/***/ }),

/***/ 5241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Typography)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Typography = ({ variant ="h3" , children , component: Component = "div" , theme ="black" , weight ="regular" , className  })=>{
    let variantStyles = "", colorStyles = "";
    switch(variant){
        case "display":
            variantStyles = "text-8xl";
            break;
        case "h1":
            variantStyles = "text-7xl";
            break;
        case "h2":
            variantStyles = "text-6xl";
            break;
        case "h3":
            variantStyles = "text-5xl";
            break;
        case "h4":
            variantStyles = "text-4xl";
            break;
        case "h5":
            variantStyles = "text-3xl";
            break;
        case "h6":
            variantStyles = "text-1xl";
            break;
        case "lead":
            variantStyles = "text-2xl";
            break;
        case "body-lg":
            variantStyles = "text-4xl";
            break;
        case "body-base":
            variantStyles = "text-base";
            break;
        case "body-sm":
            variantStyles = "text-sm";
            break;
        case "caption1":
            variantStyles = "text-caption1";
            break;
        case "caption2":
            variantStyles = "text-caption2";
            break;
        case "caption3":
            variantStyles = "text-caption3";
            break;
        case "caption4":
            variantStyles = "text-caption4";
            break;
        case "caption5":
            variantStyles = "text-caption5";
            break;
        case "caption6":
            variantStyles = "text-caption6";
            break;
    }
    switch(theme){
        case "black":
            colorStyles = "text-grey";
            break;
        case "grey":
            colorStyles = "text-grey-700";
            break;
        case "white":
            colorStyles = "text-white";
            break;
        case "primary":
            colorStyles = "text-primary";
            break;
        case "secondary":
            colorStyles = "text-secondary";
            break;
        case "danger":
            colorStyles = "text-alert-danger";
            break;
        case "warning":
            colorStyles = "text-alert-warning";
            break;
        case "success":
            colorStyles = "text-alert-success";
            break;
        default:
            break;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(variantStyles, colorStyles, weight === "medium" && "font-medium", className),
        children: children
    });
};


/***/ })

};
;