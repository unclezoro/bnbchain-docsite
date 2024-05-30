"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Token Bind",s={unversionedId:"bcfusion/owners/bind",id:"bcfusion/owners/bind",title:"Token Bind",description:"Token binding was introduced to faciliate that one token can circulate in both BC and BSC with confirmed total supply.",source:"@site/docs/bcfusion/owners/bind.md",sourceDirName:"bcfusion/owners",slug:"/bcfusion/owners/bind",permalink:"/bnbchain-docsite/docs/bcfusion/owners/bind",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/owners/bind.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Governance with Tally",permalink:"/bnbchain-docsite/docs/bcfusion/users/gov"},next:{title:"Validator Migration Guide",permalink:"/bnbchain-docsite/docs/bcfusion/validators/migrations"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-bind"},"Token Bind"),(0,o.kt)("p",null,"Token binding was introduced to faciliate that one token can circulate in both BC and BSC with confirmed total supply. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a token is binded, then it can be transferred bewteen BC and BSC for different use cases.\nAfter ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bEPs/pull/333"},"the final sunset\nhardfork"),", the cross chain between BC and BSC will be shutdown.\nHowever, users still can use token recover tool to recover the binded assets on BSC (but it is much more complex compared to crosschain transfer)."),(0,o.kt)("li",{parentName:"ul"},"If a token is not binded, after the final sunset hardfork, the assets cannot be recovered anymore.\nToken owners or issuers should take actions to bind their valueable tokens.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE: The BC Fusion program is scheduled for implementation in April 2024. Please ensure careful planning for the\nasset migration and keep the fund safe."))),(0,o.kt)("p",null,"Please check the tutorial ",(0,o.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/bcfusion/users/assets"},(0,o.kt)("strong",{parentName:"a"},"Confirm if the Assets Support Cross-chain Transfers"))," to verify if the\ntoken allows cross-chain\ntransfers. If the answer is positive, congratulations! You don't need\nto do anything. Otherwise, it is highly recommended to follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/token-bind-tool"},"Token Bind Tool")," to\ndeploy a BEP20 token on BSC and enable cross-chain functionality."),(0,o.kt)("p",null,"Due to the time limitation, the Token Issuer should take actions as soon as possbile. It is\nrecommended that the Token Issuer use multiple channels to promptly\nnotify asset holders to migrate as soon as possible."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note: BEP2/BEP8 assets that do not support cross-chain functionality\nwill be permanently lost after BC Fusion. Users will be unable to\nrecover these assets forever."))))}d.isMDXComponent=!0}}]);