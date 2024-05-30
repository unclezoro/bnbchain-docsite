"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||s;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={},o="Atomic Swap Management",i={unversionedId:"bcfusion/users/swaps",id:"bcfusion/users/swaps",title:"Atomic Swap Management",description:"HTLC based atomic swaps are introduced in",source:"@site/docs/bcfusion/users/swaps.md",sourceDirName:"bcfusion/users",slug:"/bcfusion/users/swaps",permalink:"/bnbchain-docsite/docs/bcfusion/users/swaps",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/users/swaps.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Asset Management",permalink:"/bnbchain-docsite/docs/bcfusion/users/assets"},next:{title:"TimeLock Management",permalink:"/bnbchain-docsite/docs/bcfusion/users/timelocks"}},c={},p=[{value:"Query Atomic Swaps",id:"query-atomic-swaps",level:2},{value:"Handle Atomic Swaps",id:"handle-atomic-swaps",level:2},{value:"Before BC Fusion",id:"before-bc-fusion",level:3},{value:"After BC Fusion",id:"after-bc-fusion",level:3},{value:"For Atomic Swap Project Owers",id:"for-atomic-swap-project-owers",level:2},{value:"Other Useful References",id:"other-useful-references",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"atomic-swap-management"},"Atomic Swap Management"),(0,r.kt)("p",null,"HTLC based atomic swaps are introduced in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP3.md"},"BEP3"),",\nto facilitate payment and asset exchanges between different blockchains.\nFor BC fusion, in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bEPs/pull/333"},"the first sunset\nhardfork"),", the\ncreation and deposit of atomic swaps will be disabled, project owners\n(e.g., cross-chain exchanges, bridges) and users should be aware of this\nand take proactive steps."),(0,r.kt)("h2",{id:"query-atomic-swaps"},"Query Atomic Swaps"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/beaconchain/develop/api-reference/dex-api/paths#apiv1atomic-swaps"},"atomic swap api"),"\nis provided to query existing atomic swaps. Usually, user can provide a\nfrom address to query the related atomic swaps, for example:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dex.bnbchain.org/api/v1/atomic-swaps?fromAddress=bnb1xz3xqf4p2ygrw9lhp5g5df4ep4nd20vsywnmpr"},"https://dex.bnbchain.org/api/v1/atomic-swaps?fromAddress=bnb1xz3xqf4p2ygrw9lhp5g5df4ep4nd20vsywnmpr")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(29054).Z,width:"1680",height:"758"})),(0,r.kt)("p",null,"The response will contain a lot of useful information, such as id of the\nswap, the asset of the swap, and other information."),(0,r.kt)("h2",{id:"handle-atomic-swaps"},"Handle Atomic Swaps"),(0,r.kt)("h3",{id:"before-bc-fusion"},"Before BC Fusion"),(0,r.kt)("p",null,"A user can proactively refund his/her atomic swaps by sending ",(0,r.kt)("strong",{parentName:"p"},"HTLC Refund")," transactions to Beacon Chain. The command\nto send such\ntransaction is looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bnbcli token refund --swap-id <swapID> --from <from-key> --chain-id Binance-Chain-Tigris --trust-node --node http://dataseed1.bnbchain.org:80\n")),(0,r.kt)("p",null,"For more information about the command, please refer to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/beaconchain/atomic-swap#refund-htlt"},"Refund HTLC section"),"."),(0,r.kt)("p",null,"If no proactive refunds are submitted, in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bEPs/pull/333"},"the second sunset hardfork"),", all\nexisting atomic swaps will be automatically refunded to the creators'\naccounts on Beacon Chain. The refund will proceed in many Beacon Chain\nblocks, depending on how many atomic swaps still exist on the\nblockchain. After refund, users should be able to find the assets in\ntheir accounts. Then users can handle the assets as other BEP2/BEP8\ntokens. For how to cross transfer them to BNB Smart Chain, please\nrefer to ",(0,r.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/bcfusion/users/assets"},"this tutorial"),"."),(0,r.kt)("h3",{id:"after-bc-fusion"},"After BC Fusion"),(0,r.kt)("p",null,"If the refunded assets are not transferred to BSC\nbefore ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bEPs/pull/333"},"the final sunset fork"),",\nusers need to use the token-recover tool to get their binded BEP2/BEP8\nassets. For more information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1rMWwYGt-s6FXcRiUrBSN8dtOU96HDz0T3GaZyzbo7VQ/edit?pli=1#heading=h.df0svx3bznak"},"this\ntutorial"),"."),(0,r.kt)("h2",{id:"for-atomic-swap-project-owers"},"For Atomic Swap Project Owers"),(0,r.kt)("p",null,"Because in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bEPs/pull/333"},"the first sunset hardfork"),", the\ncreation and deposit of atomic swaps will be disabled, so project owners\nneed to disable related functions in their projects IN ADVANCE and\nnotify their uses to take proactive actions to refund their tokens."),(0,r.kt)("h2",{id:"other-useful-references"},"Other Useful References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/beaconchain/atomic-swap#refund-htlt"},"Refund Atomic Swap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/beaconchain/develop/api-reference/dex-api/paths#apiv1atomic-swaps"},"Query Atomic Swap")))))}d.isMDXComponent=!0},29054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user-atomic-swap1-72b8e80860142286aad25e8eb4a8280f.png"}}]);