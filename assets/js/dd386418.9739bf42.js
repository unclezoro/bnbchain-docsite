"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},i="Crosschain Redelgation",s={unversionedId:"bcfusion/developers/crosschain-redelegation",id:"bcfusion/developers/crosschain-redelegation",title:"Crosschain Redelgation",description:"To migrate the exisiting delegation from BNB Beacon chain (the old BSC staking) to the new BNB smart chain native",source:"@site/docs/bcfusion/developers/crosschain-redelegation.md",sourceDirName:"bcfusion/developers",slug:"/bcfusion/developers/crosschain-redelegation",permalink:"/docs/bcfusion/developers/crosschain-redelegation",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/developers/crosschain-redelegation.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Governance",permalink:"/docs/bcfusion/developers/gov"},next:{title:"Build-in System Contracts",permalink:"/docs/bcfusion/developers/system-contracts"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crosschain-redelgation"},"Crosschain Redelgation"),(0,a.kt)("p",null,"To migrate the exisiting delegation from BNB Beacon chain (the old BSC staking) to the new BNB smart chain native\nstaking, crosschain redelegation can be used.\nA user can submit a message called ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSideChainStakeMigration")," to the Beacon chain. Underlying, it will unbound\nthe delegation immediately on BC (without wating unbond period), sends a cross-chain transaction to BSC to delegate\nto a native BSC validator."),(0,a.kt)("p",null,"The defination of ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSideChainStakeMigration")," is as the blow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type MsgSideChainStakeMigration struct {\n    ValidatorSrcAddr sdk.ValAddress        `json:"validator_src_addr"`\n    ValidatorDstAddr sdk.SmartChainAddress `json:"validator_dst_addr"`\n    DelegatorAddr    sdk.SmartChainAddress `json:"delegator_addr"`\n    RefundAddr       sdk.AccAddress        `json:"refund_addr"`\n    Amount           sdk.Coin              `json:"amount"`\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorSrcAddr"),": validator address on the BC (bech32 format)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorDstAddr"),": new validator operator address on the BSC (eth format)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DelegatorAddr"),": delegation beneficiary address on the BSC (eth format)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RefundAddr"),": delegator (message sender) address on the BC (bech32 format)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Amount"),": the BNB amount for redelgation (decimal 8)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Be noted"),": please make sure input the ",(0,a.kt)("inlineCode",{parentName:"p"},"DelegatorAddr")," correctly, otherwise you will lose the fund permanently."),(0,a.kt)("p",null,"For more details, please refer to the codes:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bnc-cosmos-sdk/blob/bc-fusion/x/stake/types/stake_migration.go#L29"},"https://github.com/bnb-chain/bnc-cosmos-sdk/blob/bc-fusion/x/stake/types/stake_migration.go#L29")))}u.isMDXComponent=!0}}]);