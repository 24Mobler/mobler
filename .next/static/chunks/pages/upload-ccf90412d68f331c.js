(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{1004:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return l(7372)}])},4249:function(e,s,l){"use strict";var t=l(5893),r=(l(7294),l(2183));s.Z=function(e){var s=e.children,l=e.active;return(0,t.jsxs)("div",{className:"w-full lg:mx-auto flex lg:flex-row flex-col lg:space-x-8",children:[(0,t.jsx)("div",{className:"w-[14vw] lg:border lg:flex hidden",children:(0,t.jsx)(r.Z,{active:l})}),(0,t.jsx)("div",{className:"h-[100vh] lg:mb-0 mb-20 overflow-y-auto overflow-x-hidden w-[92vw] lg:w-[80vw] mx-auto",children:s}),(0,t.jsx)("div",{className:"lg:hidden w-full bottom-0 fixed lg:bg-inherit bg-gray-800",children:(0,t.jsx)(r.Z,{active:l})})]})}},2183:function(e,s,l){"use strict";var t=l(5893),r=l(1664),c=l.n(r),a=(l(7294),l(9583));s.Z=function(e){var s=e.active,l=function(e){if(e===s)return!0};return(0,t.jsx)("div",{className:"",children:(0,t.jsxs)("div",{className:"flex lg:flex-col flex-row px-6 lg:mt-10 lg:space-y-4 justify-between py-3",children:[(0,t.jsx)(c(),{href:"/home",passHref:!0,children:(0,t.jsxs)("div",{className:l("Home")?"text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer":"text-neutral-500 flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer",children:[(0,t.jsx)(a.xng,{}),(0,t.jsx)("span",{className:"lg:block hidden",children:"Home"})]})}),(0,t.jsx)(c(),{href:"/search",passHref:!0,children:(0,t.jsxs)("div",{className:l("Search")?"text-[#E16A2E] cursor-pointer flex space-x-2 lg:text-[16px] text-[24px] items-center":"text-neutral-500 flex space-x-2 cursor-pointer lg:text-[16px] text-[24px] items-center",children:[(0,t.jsx)(a.U41,{}),(0,t.jsx)("span",{className:"lg:block hidden",children:"Search"})]})}),(0,t.jsx)(c(),{href:"/cart",passHref:!0,children:(0,t.jsxs)("div",{className:l("Cart")?"text-[#E16A2E] flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer":"text-neutral-500 flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer",children:[(0,t.jsx)(a.rI6,{}),(0,t.jsx)("span",{className:"lg:block hidden",children:"Cart"})]})}),(0,t.jsx)(c(),{href:"/wishlist",passHref:!0,children:(0,t.jsxs)("div",{className:l("Wishlist")?"text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer":"text-neutral-500 cursor-pointer flex space-x-2 lg:text-[16px] text-[24px] items-center",children:[(0,t.jsx)(a.$0H,{}),(0,t.jsx)("span",{className:"lg:block hidden",children:"Wishlist"})]})}),(0,t.jsx)(c(),{href:"/profile",passHref:!0,children:(0,t.jsxs)("div",{className:l("Profile")?"text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer":"text-neutral-500 flex space-x-2 cursor-pointer lg:text-[16px] text-[24px] items-center",children:[(0,t.jsx)(a.Xws,{}),(0,t.jsx)("span",{className:"lg:block hidden",children:"Profile"})]})})]})})}},7372:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return f}});var t=l(5893),r=(l(7294),l(4249)),c=l(1664),a=l.n(c),n=l(9583),i=l(8670),o=l.n(i),x=l(6105);function d(e,s,l){return s in e?Object.defineProperty(e,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[s]=l,e}function h(e){for(var s=1;s<arguments.length;s++){var l=null!=arguments[s]?arguments[s]:{},t=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),t.forEach((function(s){d(e,s,l[s])}))}return e}var u=[{value:"Red",label:"Red",color:"#FF0000"},{value:"Green",label:"Green",color:"#00FF00"},{value:"Blue",label:"Blue",color:"#0000FF"},{value:"Purple",label:"Purple",color:"#FF00FF"},{value:"Yellow",label:"Yellow",color:"#FFFF00"},{value:"Indigo",label:"Indigo",color:"#00FFFF"},{value:"brown",label:"brown",color:"#FFA500"}],p={control:function(e){return h({},e,{backgroundColor:"#F3F6F8",border:"none",boxShadow:"none"})},option:function(e,s){var l=s.data,t=s.isDisabled,r=s.isFocused,c=s.isSelected,a=o()(l.color);return h({},e,{backgroundColor:t?void 0:c?l.color:r?a.alpha(.1).css():void 0,color:t?"#ccc":c?o().contrast(a,"white")>2?"white":"black":l.color,cursor:t?"not-allowed":"default",":active":h({},e[":active"],{backgroundColor:t?void 0:c?l.color:a.alpha(.3).css()})})},multiValue:function(e,s){var l=s.data;return h({},e,{backgroundColor:o()(l.color).alpha(.1).css()})},multiValueLabel:function(e,s){return h({},e,{color:s.data.color})},multiValueRemove:function(e,s){var l=s.data;return h({},e,{color:l.color,":hover":{backgroundColor:l.color,color:"white"}})}},m=function(){return(0,t.jsxs)("div",{className:" space-y-4",children:[(0,t.jsx)("div",{className:" flex-col mt-1",children:(0,t.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,t.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,t.jsxs)("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 rounded-lg cursor-pointer bg-[#E29547] ",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,t.jsx)("svg",{className:"w-10 h-10 mb-2 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-2-3m0 0l-2 3m3-3v12"})}),(0,t.jsxs)("p",{className:"mb-2 text-sm text-white dark:text-gray-400",children:[(0,t.jsx)("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),(0,t.jsx)("p",{className:"text-xs text-white dark:text-gray-400",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)"})]}),(0,t.jsx)("input",{id:"dropzone-file",type:"file",className:"hidden"})]})})})}),(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("h1",{className:"font-bold",children:"Category*"}),(0,t.jsxs)("div",{className:"flex justify-between bg-white p-5 rounded",children:[(0,t.jsx)("img",{src:"https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/chairCategory_ehob0j.png"}),(0,t.jsxs)("div",{className:" ",children:[(0,t.jsx)("h1",{className:"font-bold",children:"Furniture & home decore"}),(0,t.jsx)("h1",{children:"chair"})]})]})]}),(0,t.jsx)("h1",{className:"font-bold",children:"Price*"}),(0,t.jsx)("div",{className:"flex justify-between text-[ #4F4F4F]",children:(0,t.jsx)("input",{type:"text",className:"border p-2 w-full lg:w-2/5 rounded",placeholder:"$50"})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h1",{className:"font-bold",children:"Conditions*"}),(0,t.jsxs)("div",{className:"flex justify-between text-[ #4F4F4F] items-center",children:[(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsxs)("div",{className:"flex space-x-1",children:[(0,t.jsx)("h1",{children:"Used"}),(0,t.jsx)("input",{className:"w-6 h-6",type:"checkbox",id:"myCheckbox"})]}),(0,t.jsxs)("div",{className:"flex space-x-1",children:[(0,t.jsx)("h1",{children:"New"}),(0,t.jsx)("input",{className:"w-6 h-6",type:"checkbox",id:"myCheckbox"})]})]}),(0,t.jsx)(x.ZP,{closeMenuOnSelect:!1,defaultValue:[u[0],u[1]],isMulti:!0,options:u,styles:p,placeholder:"colors"})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h1",{className:"font-bold",children:"Items Detail*"}),(0,t.jsxs)("div",{className:"flex justify-between text-[ #4F4F4F] space-x-2",children:[(0,t.jsxs)("div",{className:"flex-col space-y-1",children:[(0,t.jsx)("h1",{className:"font-bold",children:"Height*"}),(0,t.jsx)("input",{type:"text",className:"border p-2 w-full lg:w-2/5 rounded"})]}),(0,t.jsxs)("div",{className:"flex-col space-y-1",children:[(0,t.jsx)("h1",{className:"font-bold",children:"Width*"}),(0,t.jsx)("input",{type:"text",className:"border p-2 w-full lg:w-2/5 rounded"})]}),(0,t.jsxs)("div",{className:"flex-col space-y-1",children:[(0,t.jsx)("h1",{className:"font-bold",children:"Model*"}),(0,t.jsx)("input",{type:"text",className:"border p-2 w-full lg:w-2/5 rounded"})]})]})]}),(0,t.jsx)("hr",{className:"mb-2"}),(0,t.jsx)("h1",{className:"font-bold",children:"Location*"}),(0,t.jsxs)("div",{className:"flex justify-between items-center text-[ #4F4F4F]",children:[(0,t.jsx)("h1",{className:"text-neutral-400 text-bold",children:"Choose"}),(0,t.jsxs)("div",{className:"relative inline-block",children:[(0,t.jsxs)("select",{className:"block appearance-none bg-transparent border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500",children:[(0,t.jsx)("option",{children:"USA"}),(0,t.jsx)("option",{children:"SWEEDEN"}),(0,t.jsx)("option",{children:"AMERICA"})]}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,t.jsx)("svg",{className:"fillCurrent h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,t.jsx)("path",{d:"M10 12l-6-6 1.5-1.5L10 9.5 16.5 3 18 4.5z"})})})]})]}),(0,t.jsx)("hr",{className:"mb-2 "}),(0,t.jsx)("h1",{className:"font-bold",children:"Ad Title*"}),(0,t.jsx)("div",{className:"flex text-[ #4F4F4F]",children:(0,t.jsx)("input",{type:"text",className:"border p-4 w-full rounded lg:w-3/5",placeholder:""})}),(0,t.jsx)("h1",{className:"font-bold",children:"Describe what are you selling*"}),(0,t.jsx)("div",{className:"flex font-bold",children:(0,t.jsx)("input",{type:"text",className:"border p-4 w-full rounded lg:w-3/5",placeholder:""})}),(0,t.jsxs)("div",{className:"flex gap-x-2",children:[(0,t.jsx)("input",{className:"w-6 h-6",type:"checkbox",id:"myCheckbox"}),(0,t.jsxs)("p",{children:["Please check to acknowledge our ",(0,t.jsx)("span",{className:" text-[#317BE0]",children:" Privacy & Terms Policy"})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{className:"justify-center text-[17px] text-white font-bold flex items-center py-2 w-full mb-5 space-x-2 rounded-full bg-[#E16A2E]",type:"submit",onClick:function(){setShowModal(!0)},children:"Submit"})})]})},f=function(){return(0,t.jsx)("main",{className:"bg-[#F3F6F8] mt-0",children:(0,t.jsx)(r.Z,{className:"",children:(0,t.jsxs)("div",{className:"lg:w-[50vw] mx-auto",children:[(0,t.jsx)(a(),{href:"/home",passHref:!0,children:(0,t.jsx)("div",{className:"mt-10",children:(0,t.jsx)(n.x_l,{})})}),(0,t.jsxs)("div",{className:"mt-6",children:[(0,t.jsx)("h2",{className:"text-[18px] font-bold",children:"Include some details "}),(0,t.jsx)("div",{className:"flex flex-col space-y-3 mt-4",children:(0,t.jsx)(m,{})})]})]})})})}}},function(e){e.O(0,[445,949,219,774,888,179],(function(){return s=1004,e(e.s=s);var s}));var s=e.O();_N_E=s}]);