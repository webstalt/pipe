(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{29693:function(e,n,t){"use strict";t.d(n,{z:function(){return u}});var r=t(85893),a=t(41332),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e){var n=e.children,t=s(e,["children"]);return(0,r.jsx)("button",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},t,{className:i().button,children:n}))}},53074:function(e,n,t){"use strict";t.d(n,{p:function(){return h}});var r=t(34051),a=t.n(r),i=t(85893),o=t(67294),s=t(9473),u=t(3283),c=t.n(u),p=t(92270),l=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}],d=function(e){return new e.eth.Contract(l,"0x1c4BD1FFE801AdB274d230F4CD6A821637BA1d78")},y=t(29693);function m(e,n,t,r,a,i,o){try{var s=e[i](o),u=s.value}catch(c){return void t(c)}s.done?n(u):Promise.resolve(u).then(r,a)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){m(i,r,a,o,s,"next",e)}function s(e){m(i,r,a,o,s,"throw",e)}o(void 0)}))}}function h(){var e=(0,o.useState)({}),n=e[0],t=e[1],r=(0,o.useState)({}),u=r[0],l=r[1],m=(0,o.useState)(null),h=m[0],b=m[1],w=(0,s.v9)((function(e){return e.user.isWalletConnected})),v=(0,o.useState)(!0),x=v[0],g=v[1],T=(0,s.I0)();(0,o.useEffect)((function(){h&&u&&T((0,p.Sj)(!0))}),[h,u]);var _=function(){var e=f(a().mark((function e(){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("connectWalletHandler Called"),"undefined"===typeof window.ethereum){e.next=22;break}return console.log("MetaMask Detected"),e.prev=3,e.next=6,window.web3.currentProvider.enable();case 6:return n=new(c())(window.ethereum),t(n),e.next=10,n.eth.getAccounts();case 10:r=e.sent,l(r[0]),i=d(n),b(i),"4"==window.ethereum.networkVersion?(console.log(window.ethereum.networkVersion,"window.ethereum.networkVersion"),g(!1)):(console.log("ERROR: Initial window.ethereum.networkVersion:",window.ethereum.networkVersion),g(!0)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0.message);case 20:e.next=23;break;case 22:alert("Please Install The Metamask Wallet");case 23:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.ethereum.on("accountsChanged",(function(e){l(e[0]),console.log("Account changed to:",e[0]),null==e[0]&&(T((0,p.Sj)(!1)),console.log("User disconnected all addresses"))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ethereum.on("chainChanged",(function(e){"0x4"!=e?(g(!0),console.log("setting Switch Network to True")):(g(!1),console.log("setting Switch Network to False"))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x4"}]});case 3:null==e.sent&&g(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return e.next=4,k();case 4:return e.next=6,j();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return w?(0,i.jsx)("div",{className:"button_connect_switched",children:x?(0,i.jsx)(y.z,{className:"button_network",onClick:N,children:"Switch Network"}):(0,i.jsx)(y.z,{onClick:function(){navigator.clipboard.writeText(u),console.log("User address copied to clipboard")},className:"button_address",children:u.substring(0,5).concat("...").concat(u.substring(38,43))})}):(0,i.jsx)(y.z,{onClick:O,className:"button_connect",children:"Connect Wallet"})}},68066:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(85893),a=t(9008),i=t(56920),o=t.n(i);function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:o().wrapper,children:[(0,r.jsx)("div",{className:o().name,children:"Pando"}),(0,r.jsx)("div",{className:o().adding,children:"Finance"}),(0,r.jsx)("div",{className:o().dot})]})})}var u=t(53074),c=t(14792),p=t.n(c);function l(){return(0,r.jsxs)("div",{className:p().header,children:[(0,r.jsx)("div",{className:p().logo,children:(0,r.jsx)(s,{})}),(0,r.jsx)("div",{className:p().navigation,children:(0,r.jsx)(u.p,{})})]})}var d=t(35078),y=t.n(d);function m(e){var n=e.children,t=e.title,i=void 0===t?"":t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsxs)("title",{children:[i," | Pando Finance"]}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"})]}),(0,r.jsxs)("div",{className:y().container,children:[(0,r.jsx)(l,{}),(0,r.jsx)("main",{children:n})]})]})}},41332:function(e){e.exports={button:"button_button__eJwei"}},14792:function(e){e.exports={header:"header_header__GSKJx",logo:"header_logo__d4jIK",navigation:"header_navigation__YgNBr"}},56920:function(e){e.exports={wrapper:"logo_wrapper__Kuyp9",name:"logo_name__n_ybq",dot:"logo_dot__b6wGg",adding:"logo_adding__Z5US7"}},35078:function(e){e.exports={container:"mainLayout_container__YtVU9"}},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}}]);