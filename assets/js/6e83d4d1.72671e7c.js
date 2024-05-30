"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Using Web3.js Library on BNB Smart Chain",sidebar_position:2,hide_table_of_contents:!1},i="Using Web3.js Library on BNB Smart Chain",l={unversionedId:"dapp-dev/web3js-tutorial",id:"dapp-dev/web3js-tutorial",title:"Using Web3.js Library on BNB Smart Chain",description:"Designed for anyone wanting to learn development on the BNB Smart Chain, this tutorial provides a step-by-step guide on how to use web3.js library along with Nodereal API to fetch transaction details from the BNB Smart Chain blockchain for the given transaction hash. The technology stack used in this tutorial includes Web3.js, Nodereal MegaNode, and http-server.",source:"@site/docs/dapp-dev/web3js-tutorial.md",sourceDirName:"dapp-dev",slug:"/dapp-dev/web3js-tutorial",permalink:"/bnbchain-docsite/docs/dapp-dev/web3js-tutorial",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/dapp-dev/web3js-tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using Web3.js Library on BNB Smart Chain",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Full Stack Hello World dApp",permalink:"/bnbchain-docsite/docs/dapp-dev/Hello-World"},next:{title:"Oracles",permalink:"/bnbchain-docsite/docs/oracles"}},s={},c=[{value:"Learning Takeaways:",id:"learning-takeaways",level:2},{value:"Technology Stack Details",id:"technology-stack-details",level:2},{value:"Setting up the development environment",id:"setting-up-the-development-environment",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-web3js-library-on-bnb-smart-chain"},"Using Web3.js Library on BNB Smart Chain"),(0,r.kt)("p",null,"Designed for anyone wanting to learn development on the BNB Smart Chain, this tutorial provides a step-by-step guide on how to use web3.js library along with Nodereal API to fetch transaction details from the BNB Smart Chain blockchain for the given transaction hash. The technology stack used in this tutorial includes Web3.js, Nodereal MegaNode, and http-server. "),(0,r.kt)("h2",{id:"learning-takeaways"},"Learning Takeaways:"),(0,r.kt)("p",null,"This tutorial will help you gain knowledge on the following learning points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using Web3.js library to fetch blockchain data;"),(0,r.kt)("li",{parentName:"ul"},"Using Nodereal\u2019s Meganode API;"),(0,r.kt)("li",{parentName:"ul"},"Deploying static pages onto localhost using http-server.")),(0,r.kt)("h2",{id:"technology-stack-details"},"Technology Stack Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"node v16.13.0"),(0,r.kt)("li",{parentName:"ul"},"npm v8.1.0"),(0,r.kt)("li",{parentName:"ul"},"Web3.js"),(0,r.kt)("li",{parentName:"ul"},"http-server ")),(0,r.kt)("h2",{id:"setting-up-the-development-environment"},"Setting up the development environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install http-server: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install -g http-server"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177191619-12099c27-bd4e-414b-8fda-b3bdd52c5d51.png",alt:"image"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Clone the BNBChain-Tutorial repository: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/bnb-chain/bnb-chain-tutorial.git")),(0,r.kt)("li",{parentName:"ol"},"Change the current directory: ",(0,r.kt)("inlineCode",{parentName:"li"},'cd "02-BSC-Block-Explorer"')),(0,r.kt)("li",{parentName:"ol"},"Install all the dependencies (node modules): ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")),(0,r.kt)("li",{parentName:"ol"},"Before running the application, make sure that you have included the HTTP link for the Nodereal Meganode API in the ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html")," as shown in the figure below.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177191680-2c9b530a-21fa-448b-bf88-e0d6558ada6a.png",alt:"image"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"For this project, we have used the BSC Testnet public API key, as shown in the figure below. For a complete list of Nodereal Meganode Public API keys, refer ",(0,r.kt)("a",{parentName:"li",href:"https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key"},"here"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177192584-f76dd7dd-ba44-461a-aac7-568703a4f78d.png",alt:"image"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Run the application by using the command ",(0,r.kt)("inlineCode",{parentName:"li"},"http-server")," from the project directory.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177192648-29422ee0-c8d5-42ff-91e6-5db1bd4c985e.png",alt:"image"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Open your web browser and navigate to any of the ports indicated by the ",(0,r.kt)("inlineCode",{parentName:"li"},"http-server")," command.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177192746-0d9953dd-d398-4e19-b630-30ed90f5e30a.png",alt:"image"})),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Since we have used the HTTP reference of Nodereal\u2019s Meganode API for BSC testnet, open ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com/"},"BSCscan for Testnet"),", and copy the transaction hash of any transaction of your choice."),(0,r.kt)("li",{parentName:"ol"},"Paste this transaction hash into the input field in our block explorer.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177192831-677e01c7-c3b9-4d11-b0df-4cdb47029cb0.png",alt:"image"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"}," Click on the Fetch Details button to fetch details of this transaction. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177192858-7e04af6b-980c-4e19-8fa2-4af70752fc1c.png",alt:"image"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"You can also display other details from the received transaction receipt by changing the code block shown in the figure below as we have displayed the minimum.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177192885-67184a5e-2bf9-479d-b9ab-e00693020ee9.png",alt:"image"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"The received transaction receipt has several fields as shown in the figure below.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177192924-78c07184-8222-4f0c-9eff-bf8fb0972f12.png",alt:"image"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, we developed a dapp that has both backend and front-end integration that uses Web3.js library that can be used for fetching details of transactions on the BSC testnet by given a transaction hash. The tech stack includes Web3.js, Nodereal MegaNode, and http-server. Check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bnb-chain-tutorial"},"GitHub")," for more tutorials on how to develop on BSC. If you have any questions or are stuck, reach out to us on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/789402563035660308/912296662834241597"},"Discord Channel"),"."))}h.isMDXComponent=!0}}]);