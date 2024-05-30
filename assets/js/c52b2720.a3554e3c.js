"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2691],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_label:"Introduction",sidebar_position:2},i="Introduction",s={unversionedId:"learn/beaconIntro",id:"learn/beaconIntro",title:"Introduction",description:"BNB Beacon Chain is a blockchain developed by its community that implements the staking and governance layer of BNB ecosystem. It has a flexible set of native assets and pluggable modules for governance, staking and etc. It uses Tendermint for consensus and app logic is built upon Cosmos SDK. It targets fast block times, a native dApp layer and multi-token support with no smart contract VM.",source:"@site/docs/learn/beaconIntro.md",sourceDirName:"learn",slug:"/learn/beaconIntro",permalink:"/bnbchain-docsite/docs/learn/beaconIntro",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/beaconIntro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Introduction",sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Token Migration",permalink:"/bnbchain-docsite/docs/migration/evm-chains/token-migration"},next:{title:"Tutorials",permalink:"/bnbchain-docsite/docs/beaconchain/bc-tutorials"}},c={},l=[{value:"BFT Consensus",id:"bft-consensus",level:2},{value:"Native Token",id:"native-token",level:2},{value:"Security and Finality",id:"security-and-finality",level:2},{value:"Governance",id:"governance",level:2},{value:"Participate",id:"participate",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"BNB Beacon Chain is a blockchain developed by its community that implements the staking and governance layer of BNB ecosystem. It has a flexible set of native assets and pluggable modules for governance, staking and etc. It uses Tendermint for consensus and app logic is built upon Cosmos SDK. It targets fast block times, a native dApp layer and multi-token support with no smart contract VM."),(0,o.kt)("p",null,"BNB Beacon Chain implements the following features now:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sending and receiving BNB and digital assets"),(0,o.kt)("li",{parentName:"ul"},"Issuing new digital assets (we have a standard called BEP-2 and BEP-8)"),(0,o.kt)("li",{parentName:"ul"},"Mint/burn, freeze/unfreeze, lock/unlock of digital assets"),(0,o.kt)("li",{parentName:"ul"},"Goverenance for BNB Beacon Chain and side chains"),(0,o.kt)("li",{parentName:"ul"},"Staking of side chains"),(0,o.kt)("li",{parentName:"ul"},"Cross chain transfers and communications")),(0,o.kt)("p",null,"BNB Beacon Chain also includes efforts to implement ",(0,o.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/beaconchain/atomic-swap"},"listing assets from other chains"),", and cryptographic primitives such as ",(0,o.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/beaconchain/learn/threshold-signature-scheme"},"threshold signatures"),"."),(0,o.kt)("h2",{id:"bft-consensus"},"BFT Consensus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tendermint.com/core/"},"Tendermint Core"),", which is a Byzantine fault-tolerant (BFT) consensus engine, is adopted in BNB Beacon Chain.\nIt is robust against double-spend attacks and is tolerant against a set of up to \u2153 (~33%) Byzantine actors in the network. "),(0,o.kt)("p",null,"In the protocol, validators take turns proposing blocks of transactions and voting on them.\nTwo stages of voting are required to successfully commit a block, i.e., pre-vote and pre-commit.\nA block is committed when more than 2/3 of validators pre-commit for the same block in the same round.\nA block may fail to be committed, e.g., the current proposer may be offline, or the network may be slow, in which case the protocol moves to the next round, and a new validator gets to propose a block for that height. "),(0,o.kt)("p",null,"Currently, there are ",(0,o.kt)("strong",{parentName:"p"},"11")," validators in BNB Beacon Chain mainnet, and more participants can join as validators after the launch of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP159.md"},"BEP159"),"."),(0,o.kt)("h2",{id:"native-token"},"Native Token"),(0,o.kt)("p",null,"BNB is the native token for both BNB Beacon Chain and BNB Smart Chain. On BNB Beacon Chain"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BNB is used as the token for staking and goverenance"),(0,o.kt)("li",{parentName:"ul"},"transactions fees are paid in BNB"),(0,o.kt)("li",{parentName:"ul"},"transactions burns BNB, according to a fee schedule"),(0,o.kt)("li",{parentName:"ul"},"there is a native support for cross chain transfers of BNB between BNB Beacon Chain and side chains.")),(0,o.kt)("h2",{id:"security-and-finality"},"Security and Finality"),(0,o.kt)("p",null,"As mentioned earlier, Tendermint Core is robust against double-spend attacks and is tolerant against a set of up to \u2153 Byzantine actors in the network.\nFurthermore, Cosmos SDK will also halt if the validators can't come to consensus on a single block to avoid a fork and related attacks."),(0,o.kt)("p",null,"BNB Beacon Chain guarantees finality on transactions, which means that once agreement is found upon a block, the block becomes final and transactions within that block cannot be reverted.\nIn summary, ",(0,o.kt)("strong",{parentName:"p"},"one block finality")," is achieved on BNB Beacon Chain, and it usually takes less than ",(0,o.kt)("strong",{parentName:"p"},"a second"),"."),(0,o.kt)("h2",{id:"governance"},"Governance"),(0,o.kt)("p",null,"BNB Beacon Chain implements a powerful and complex module to govern itself and related side chains (e.g., BSC).\nUsers can submit different kinds of proposals for signaling, changing consensus parameters on chains, for example, text proposals, fee parameter change proposals, staking parameter change proposals, and so on.\nFor each on-chain proposal, there are deposit period for depositing BNB and voting period for voters to make votes.\nOnce the proposal passes, it will make effect on BNB Beacon Chain and side chains via cross chain communications. "),(0,o.kt)("h2",{id:"participate"},"Participate"),(0,o.kt)("p",null,"There are different ways to participate in the network, from light nodes to full validators. BNB Beacon Chain follows a philosophy of progressive decentralization. We envision a future where organizations and individuals can run validator nodes, and BNB can be staked to join governance."))}u.isMDXComponent=!0}}]);