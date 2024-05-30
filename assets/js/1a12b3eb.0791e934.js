"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[78],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="How does Add Account Work",c={unversionedId:"wallet/extension/add-account",id:"wallet/extension/add-account",title:"How does Add Account Work",description:"BIP39",source:"@site/docs/wallet/extension/add-account.md",sourceDirName:"wallet/extension",slug:"/wallet/extension/add-account",permalink:"/bnbchain-docsite/docs/wallet/extension/add-account",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/wallet/extension/add-account.md",tags:[],version:"current",frontMatter:{}},l={},s=[{value:"BIP39",id:"bip39",level:2},{value:"BIP32",id:"bip32",level:2},{value:"Add Account in Binance Extension Wallet",id:"add-account-in-binance-extension-wallet",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-does-add-account-work"},"How does Add Account Work"),(0,a.kt)("h2",{id:"bip39"},"BIP39"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"Bitcoin Improvement Proposal (BIP) 39")," defines a formula for the generation of a mnemonic sentence (also referred to as mnemonic words, seed phrase, recovery phrase, etc.)the generation of a seed from that mnemonic sentence. That seed is used to produce your private and public keys, but those details will be covered in the next post in this series."),(0,a.kt)("h2",{id:"bip32"},"BIP32"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP 32")," is a specification for creating ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"Hierarchical Deterministic wallets"),". They are wallets that, from a root it can generate multiple \"child\" private keys in a deterministic way. You only need to remember the \"path\" of the child key.For example hardware wallets use them from a single root you can generate separate keys for Bitcoin (with path m/44'/0'/0'/0) and Ethereum (path m/44'/60'/0'/0)."),(0,a.kt)("h2",{id:"add-account-in-binance-extension-wallet"},"Add Account in Binance Extension Wallet"),(0,a.kt)("p",null,"Binance Extension wallet would use a similar way to generate keys as Ethereum, i.e. derive the private key using BIP32/BIP44 with HD prefix as \"44'/60'/\", which is the same as Ethereum's derivation path."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/sPkp8aP0i3AavnavPbUG4Ywzff2FIiLrOuKsrcj4pcehz9ALqouSp_aq_T1STHYS2MCANaEwcghq5yPv7oJxAO9GmMXifmz96QJ-DWIcP3pcC-xcUsm1z7cAo1EnK_Tpz_1dkd7B",alt:"img"})),(0,a.kt)("p",null,"Whenever you click on \u201c",(0,a.kt)("strong",{parentName:"p"},"Add Account"),"\u201d, your seed is extended at the end by a counter value which makes it possible to automatically derive an unlimited number of new addresses in your extension wallet."))}d.isMDXComponent=!0}}]);