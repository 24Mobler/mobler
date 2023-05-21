"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 5176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/layout/NavBar.jsx




const NavBar = ({ active  })=>{
    const setActive = (activeTab)=>{
        if (activeTab === active) {
            return true;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex lg:flex-col flex-row px-6 lg:mt-10 lg:space-y-4 justify-between py-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/home",
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: setActive("Home") ? "text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer" : "text-neutral-500 flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaHome, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lg:block hidden",
                                children: "Home"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/search",
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: setActive("Search") ? "text-[#E16A2E] cursor-pointer flex space-x-2 lg:text-[16px] text-[24px] items-center" : "text-neutral-500 flex space-x-2 cursor-pointer lg:text-[16px] text-[24px] items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSearch, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lg:block hidden",
                                children: "Search"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/cart",
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: setActive("Cart") ? "text-[#E16A2E] flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer" : "text-neutral-500 flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaCartPlus, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lg:block hidden",
                                children: "Cart"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/wishlist",
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: setActive("Wishlist") ? "text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer" : "text-neutral-500 cursor-pointer flex space-x-2 lg:text-[16px] text-[24px] items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaHeart, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lg:block hidden",
                                children: "Wishlist"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/profile",
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: setActive("Profile") ? "text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer" : "text-neutral-500 flex space-x-2 cursor-pointer lg:text-[16px] text-[24px] items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaUser, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lg:block hidden",
                                children: "Profile"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_NavBar = (NavBar);

;// CONCATENATED MODULE: ./components/layout/Container.jsx



const Container = ({ children , active  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full lg:mx-auto flex lg:flex-row flex-col lg:space-x-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[14vw] lg:border lg:flex hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_NavBar, {
                    active: active
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[100vh] lg:mb-0 mb-20 overflow-y-auto overflow-x-hidden w-[92vw] lg:w-[80vw] mx-auto",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:hidden w-full bottom-0 fixed lg:bg-inherit bg-gray-800",
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_NavBar, {
                    active: active
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Container = (Container);


/***/ })

};
;