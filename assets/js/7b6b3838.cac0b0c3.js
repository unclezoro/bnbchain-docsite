"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Ledger Nano S Usage Guide",s={unversionedId:"wallets/tutorial/ledger-nano-s-usage-guide",id:"wallets/tutorial/ledger-nano-s-usage-guide",title:"Ledger Nano S Usage Guide",description:"This guide will show you how to use your Ledger Nano S hardware wallet with BNB Beacon Chain and Binance DEX.",source:"@site/docs/wallets/tutorial/ledger-nano-s-usage-guide.md",sourceDirName:"wallets/tutorial",slug:"/wallets/tutorial/ledger-nano-s-usage-guide",permalink:"/bnbchain-docsite/docs/wallets/tutorial/ledger-nano-s-usage-guide",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/wallets/tutorial/ledger-nano-s-usage-guide.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"App Installation Instructions",id:"app-installation-instructions",level:2},{value:"Setup/Login Instructions",id:"setuplogin-instructions",level:2},{value:"How to send BNB Beacon Chain crypto assets",id:"how-to-send-bnb-beacon-chain-crypto-assets",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ledger-nano-s-usage-guide"},"Ledger Nano S Usage Guide"),(0,r.kt)("p",null,"This guide will show you how to use your Ledger Nano S hardware wallet with BNB Beacon Chain and Binance DEX."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please Note: When using a Ledger to secure your BNB Chain wallet, your private keys are not exposed and never leave the device, guarding you against loss, malware and phishing attacks.\nTherefore, using a hardware wallet device such as the Ledger Nano S is strongly recommended over using a less secure wallet storage method that relies on your computer\u2019s local storage, such as Keystore File.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"In order to use a Ledger device with BNB Beacon Chain and Binance DEX, you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supported web browser: Chrome (including Brave, Vivaldi, and other Chromium variants), Opera or Firefox"),(0,r.kt)("li",{parentName:"ul"},"Access to the Binance Extension Web Wallet (",(0,r.kt)("a",{parentName:"li",href:"https://binance.org/unlock"},"https://binance.org/unlock"),") using your web browser"),(0,r.kt)("li",{parentName:"ul"},"Initialized Ledger Nano S device with firmware version 1.5.5 or newer"),(0,r.kt)("li",{parentName:"ul"},"The Ledger Live application installed on your computer for app installation")),(0,r.kt)("h2",{id:"app-installation-instructions"},"App Installation Instructions"),(0,r.kt)("p",null,'1) Plug in and unlock your Ledger device, open Ledger Live on your computer, then open the "Manager" panel.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(31174).Z,width:"1015",height:"757"})),(0,r.kt)("p",null,'2) Within the "Manager" pane, type in "BNB" in the search field.',(0,r.kt)("br",null),'\nLocate "BNB Beacon Chain", then click on "Install".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(59798).Z,width:"1012",height:"757"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(95512).Z,width:"1013",height:"760"})),(0,r.kt)("p",null,"3) The Binance app will now install on your Ledger device."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(86885).Z,width:"1008",height:"750"})),(0,r.kt)("p",null,'4) When you see a popup message indicating "Successfully installed BNB Beacon Chain", the installation is complete.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(53190).Z,width:"1012",height:"756"})),(0,r.kt)("p",null,'5) Check that the "BNB Beacon Chain" app is shown on your Ledger device dashboard as in the photo below.',(0,r.kt)("br",null),"\nIf it is, the installation has been successful."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(15836).Z,width:"863",height:"454"})),(0,r.kt)("h2",{id:"setuplogin-instructions"},"Setup/Login Instructions"),(0,r.kt)("p",null,"6) Go to ",(0,r.kt)("a",{parentName:"p",href:"http://www.binance.org/"},"www.binance.org")),(0,r.kt)("p",null,'Go to "Unlock wallet" ',(0,r.kt)("a",{parentName:"p",href:"https://www.binance.org/en/unlock"},"page"),"."),(0,r.kt)("p",null,'Choose "Ledger Device" and verify your address.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(79714).Z,width:"602",height:"429"})),(0,r.kt)("p",null,'Choose one address to use for this session and click on "Confirm".',(0,r.kt)("br",null),"\nYou will then be redirected to the Trading Interface."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(15953).Z,width:"602",height:"459"})),(0,r.kt)("p",null,"For your security, please read the information displayed in the following popup and confirm that the address shown on your Ledger device matches the one shown on-screen.",(0,r.kt)("br",null),"\nPress the right button on your device to confirm that the address matches (You must do this to continue)."),(0,r.kt)("h2",{id:"how-to-send-bnb-beacon-chain-crypto-assets"},"How to send BNB Beacon Chain crypto assets"),(0,r.kt)("p",null,"Confirming a trade on a Ledger Wallet:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(6732).Z,width:"428",height:"276"})),(0,r.kt)("p",null,"You can view the transaction info and confirm it on Ledger:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(6389).Z,width:"860",height:"645"})),(0,r.kt)("p",null,"Once the transaction has successfully been signed and broadcasted, your Ledger device will display this screen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(62101).Z,width:"810",height:"415"})))}p.isMDXComponent=!0},15953:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/address-b7a53120c761e9f41a1b274adc262f90.png"},15836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-7d401db852db9abef5bfd5d914c3dbaa.png"},59798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-f3f5d96cd6dc79a1f42032f23e335110.png"},86885:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installing-0a548833d4c990c5d3a9ef6c14127015.png"},79714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ledger-166ffb670b09f2c62588911989326309.png"},31174:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/manage-7bdf91cd667998256e55c86cdb30c330.png"},6389:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/preview-07954d2057417ddfac9712ce67a57b35.png"},95512:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-bd1ce4fb9e7571a2eaef83823409ca6a.png"},62101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign-890440d291010deda0d62c3c95692640.png"},53190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/success-44c58c95994b7d1868562ade0a2f62c7.png"},6732:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-83759895e4b07ed477726ebc9cce3e9f.png"}}]);