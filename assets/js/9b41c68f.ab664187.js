"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),f=a,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||r;return n?s.createElement(d,o(o({ref:t},p),{},{components:n})):s.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var s=n(87462),a=(n(67294),n(3905)),r=n(85346),o=n(67012),i=n(51943),l=n(56513);const c={},p="Asset Management",h={unversionedId:"bcfusion/users/assets",id:"bcfusion/users/assets",title:"Asset Management",description:"The BNB Chain community recently introduced [BEP333: BNB Chain",source:"@site/docs/bcfusion/users/assets.md",sourceDirName:"bcfusion/users",slug:"/bcfusion/users/assets",permalink:"/bnbchain-docsite/docs/bcfusion/users/assets",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/users/assets.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Overview",permalink:"/bnbchain-docsite/docs/bcfusion/overview"},next:{title:"Atomic Swap Management",permalink:"/bnbchain-docsite/docs/bcfusion/users/swaps"}},u={},f=[{value:"Before BC Fusion",id:"before-bc-fusion",level:2},{value:"After BC Fusion",id:"after-bc-fusion",level:2}],d={toc:f},m="wrapper";function b(e){let{components:t,...c}=e;return(0,a.kt)(m,(0,s.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"asset-management"},"Asset Management"),(0,a.kt)("p",null,"The BNB Chain community recently introduced ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/333"},"BEP333: BNB Chain\nFusion"),". This\nBEP aims to retire the BNB Beacon Chain from the BNB Chain ecosystem.\nThe goal is to enhance the development efficiency, security, and asset\nutilization efficiency of BSC. It also aims to reduce the maintenance\ncosts of legacy services. This tutorial aims to help digital asset\nissuers and holders on the BNB Beacon Chain transfer the value of their\nassets,\nincluding ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP2.md"},"BEP2"),"/",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP8.md"},"BEP8"),"\ntokens, before and after BC Fusion. By following this guide, users can\navoid any potential losses of their valuable digital assets."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE: The BC Fusion program is scheduled for implementation in April 2024. Please ensure careful planning for the\nasset migration and keep the fund safe."))),(0,a.kt)("h2",{id:"before-bc-fusion"},"Before BC Fusion"),(0,a.kt)("p",null,"Most valuable BEP2/BEP8 tokens such as BNB, BTC, and BUSD can freely\nmove between the Beacon Chain and BSC networks. Users are strongly\nadvised to transfer their assets to the BSC network to ensure a seamless\nand lossless transition, maintaining a 1:1 ratio. Of course, there are\nalternative channels available for asset transfers, such as utilizing\ncentralized exchanges or decentralized cross-chain exchanges like\nBinance.com and ",(0,a.kt)("a",{parentName:"p",href:"https://thorswap.finance/"},"Thorswap"),".\nHowever, these options are beyond the scope of this tutorial."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step1: Confirm if the Assets Support Cross-chain Transfers")),(0,a.kt)("p",null,"Open the Beacon Chain blockchain explorer, go to the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.bnbchain.org/assets/bep2"},"BEP2\nAsset")," page or\n",(0,a.kt)("a",{parentName:"p",href:"https://explorer.bnbchain.org/assets/bep8"},"BEP8 Asset"),"\npage, and search for the token name to query it. Using BTC as an\nexample, it is linked to a BSC Contract address, allowing for\ncross-chain transfers."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(84290).Z,width:"2048",height:"542"})),(0,a.kt)("p",null,"In contrast to GTEX-71B, which lacks a BSC Contract address and thus\ndoes not support cross-chain transfers."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(98163).Z,width:"2048",height:"592"})),(0,a.kt)("p",null,"If a user needs to transfer assets that don't support cross-chain\ntransfers, it's strongly recommended to contact the token owner/issuer\nas soon as possible. ",(0,a.kt)("strong",{parentName:"p"},"Ask the token issuer to refer to ",(0,a.kt)("a",{parentName:"strong",href:"/bnbchain-docsite/docs/bcfusion/owners/bind"},"the token bind tutorial")," for issuing BEP20\ntokens on BSC and\nenabling cross-chain transfers. If the token issuer does not enable\ncross-chain transfer for the token before the sunset of BNB Beacon\nChain, the funds will be lost forever and can not be recovered.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step2: Simply Transfer the Assets to the BSC Network")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chromewebstore.google.com/detail/bnb-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp"},"BNB Chain Wallet"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://trustwallet.com/"},"Trust Wallet"),' mobile are suggested for this case. Taking BNB Chain Wallet as an example,\nonce users import the accounts that have the tokens, they need to switch the\nnetwork to "BNB Beacon Chain Network":'),(0,a.kt)("img",{src:r.Z,width:"400"}),(0,a.kt)("p",null,"Then, select the asset to transfer, enter the BSC account and the token\namount."),(0,a.kt)("img",{src:o.Z,width:"400"}),(0,a.kt)("p",null,"The BSC wallet will receive the token after approximately one minute."),(0,a.kt)("p",null,"For Trust Wallet mobile multi-chain wallet users, they can transfer their assets in the following way."),(0,a.kt)("img",{src:i.Z,width:"400"}),(0,a.kt)("p",null,"Firstly, you need to open the ",(0,a.kt)("inlineCode",{parentName:"p"},"Swap")," tab, choose From network as ",(0,a.kt)("inlineCode",{parentName:"p"},"BNB Beacon Chain")," and To network as ",(0,a.kt)("inlineCode",{parentName:"p"},"BNB Smart Chain"),",\nthen find the asset you want to transfer and input the transfer amount.\nAfter you click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Continue")," button, it will redirect you to the approval page as below."),(0,a.kt)("img",{src:l.Z,width:"400"}),(0,a.kt)("p",null,"Finally, the related asset will be transferred to BSC after you confirm the transaction."),(0,a.kt)("h2",{id:"after-bc-fusion"},"After BC Fusion"),(0,a.kt)("p",null,"Following the retirement of Beacon Chain, it is believed that some users\nhave not yet transferred their assets to the BSC network. BNB Chain is\nstill providing relief measures for these users: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/299"},"BEP299-Token\nMigration after BC\nFusion"),"."),(0,a.kt)("p",null,"Although this solution has its limitations, it is important to note the\nfollowing key points:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It is only applicable to assets that have enabled cross-chain features. ",(0,a.kt)("strong",{parentName:"p"},"The BEP2/BEP8 assets will be permanently\nlost")," ",(0,a.kt)("strong",{parentName:"p"},"if not the case."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Users are still responsible for securely storing their private keys on the Beacon Chain and using them for signing as\nproof.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The process of recovering assets will take up to 7 days to complete.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This solution is operated through the command line and does not provide any UI."))),(0,a.kt)("p",null,"Considering these limitations, it is highly recommended that users\ncomplete the token transfer before BC fusion as much as possible."),(0,a.kt)("p",null,"The detailed guide for this solution will be published after the BC\nFusion.\nStay tuned for the update."))}b.isMDXComponent=!0},51943:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/tw1-75015626f4664513181f8b6c94e420e0.PNG"},56513:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/tw2-c72d662eb18af05d4c393d5758eeaa1b.PNG"},85346:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/user-asset-management3-47d2b7c75150f1db089ed250bbd84cc6.png"},67012:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/user-asset-management4-ccfe8d003e6542299479e6b417e080d5.png"},84290:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/user-asset-management1-3b5d5898b5d04061747fa73092e42ee7.png"},98163:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/user-asset-management2-d02dd2b8fc97c1fc95170e04dca3636e.png"}}]);