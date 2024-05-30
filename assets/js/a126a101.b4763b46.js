"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Full Stack Hello World dApp",sidebar_position:2,hide_table_of_contents:!1},l="Develop Full Stack dApp on BNB Smart Chain in 5 minutes",i={unversionedId:"dapp-dev/Hello-World",id:"dapp-dev/Hello-World",title:"Develop Full Stack dApp on BNB Smart Chain in 5 minutes",description:"Designed for anyone wanting to learn blockchain development, this tutorial provides a step-by-step guide on how to develop a full-stack Hello World Smart dApp that is used for storing and retrieving data from the BSC blockchain. The technology stack used in this tutorial includes Solidity, Truffle, Ganache, Web3.js, and Node js. We also cover how to deploy smart contracts on the BNB Smart Chain Testnet.",source:"@site/docs/dapp-dev/Hello-World.md",sourceDirName:"dapp-dev",slug:"/dapp-dev/Hello-World",permalink:"/docs/dapp-dev/Hello-World",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/dapp-dev/Hello-World.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Full Stack Hello World dApp",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Verify Proxy Contracts",permalink:"/docs/verify-proxy"},next:{title:"Using Web3.js Library on BNB Smart Chain",permalink:"/docs/dapp-dev/web3js-tutorial"}},s={},p=[{value:"<strong>Learning Takeaways:</strong>",id:"learning-takeaways",level:2},{value:"Technology Stack Details",id:"technology-stack-details",level:2},{value:"Brief Introduction Tech Stack",id:"brief-introduction-tech-stack",level:3},{value:"<strong>Setting up the development environment</strong>",id:"setting-up-the-development-environment",level:2},{value:"<strong>Smart Contract in Action: Compile and Deploy</strong>",id:"smart-contract-in-action-compile-and-deploy",level:2},{value:"<strong>Using the dApp</strong>",id:"using-the-dapp",level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"develop-full-stack-dapp-on-bnb-smart-chain-in-5-minutes"},"Develop Full Stack dApp on BNB Smart Chain in 5 minutes"),(0,r.kt)("p",null,"Designed for anyone wanting to learn blockchain development, this tutorial provides a step-by-step guide on how to develop a full-stack ",(0,r.kt)("em",{parentName:"p"},"Hello World Smart dApp")," that is used for storing and retrieving data from the BSC blockchain. The technology stack used in this tutorial includes Solidity, Truffle, Ganache, Web3.js, and Node js. We also cover how to deploy smart contracts on the BNB Smart Chain Testnet."),(0,r.kt)("h2",{id:"learning-takeaways"},(0,r.kt)("strong",{parentName:"h2"},"Learning Takeaways:")),(0,r.kt)("p",null,"This tutorial will help you gain knowledge on the following learning points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MetaMask Wallet connectivity to BSC Testnet;"),(0,r.kt)("li",{parentName:"ul"},"Smart-contract development;"),(0,r.kt)("li",{parentName:"ul"},"Using truffle and ganache for local development and testing;"),(0,r.kt)("li",{parentName:"ul"},"Unit testing of smart contracts;"),(0,r.kt)("li",{parentName:"ul"},"Deploying smart contracts on BSC Testnet;"),(0,r.kt)("li",{parentName:"ul"},"Front-end integration with the smart contract using web3.js library;")),(0,r.kt)("h2",{id:"technology-stack-details"},"Technology Stack Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"node v16.13.0"),(0,r.kt)("li",{parentName:"ul"},"npm v8.1.0"),(0,r.kt)("li",{parentName:"ul"},"Truffle v5.5.19 (core: 5.5.19)"),(0,r.kt)("li",{parentName:"ul"},"Ganache CLI v6.12.2 (ganache-core: 2.13.2)"),(0,r.kt)("li",{parentName:"ul"},"Solidity ^0.8.0 (solc-js)"),(0,r.kt)("li",{parentName:"ul"},"Web3.js v1.5.3"),(0,r.kt)("li",{parentName:"ul"},"MetaMask Wallet v10.16.1")),(0,r.kt)("h3",{id:"brief-introduction-tech-stack"},"Brief Introduction Tech Stack"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Truffle Framework:"))," set of tools for smart contract development, testing, and asset pipelining for any blockchain that uses the Ethereum Virtual Machine (EVM)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Ganache:"))," available as both desktop application and CLI, it is a personal blockchain that can be used for local blockchain development."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Solidity:"))," one of the most popular object-oriented high-level smart contract programming languages. For more details on Solidity, refer ",(0,r.kt)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/v0.8.15/"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"MetaMask Wallet Browser Extension:"))," we recommend using the Metamask Chrome extension. It is a web wallet that allows connecting the chrome browser to any valid blockchain network."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Node JS:"))," this is used for UI or Front end development."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Web3.js:"))," JavaScript library that allows communication with the EVM-based blockchains. This is the magic tool that turns our web application into a blockchain-enabled application.")),(0,r.kt)("h2",{id:"setting-up-the-development-environment"},(0,r.kt)("strong",{parentName:"h2"},"Setting up the development environment")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Truffle: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g truffle"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Ganache-CLI: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g ganache-cli"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the BNBChain-Tutorial repository: ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/bnb-chain/bnb-chain-tutorial.git"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the current directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"cd 01- Hello World Full Stack dApp on BSC"),";")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install all the dependencies (node modules): ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install and configure MetaMask Chrome Extension to use with BSC Testnet. Refer",(0,r.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"here"),"for a detailed guide.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a .secret file with the secret phrase of MetaMask. Refer ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase"},"here")," for details on how to get MetaMask secret phrase."))),(0,r.kt)("h2",{id:"smart-contract-in-action-compile-and-deploy"},(0,r.kt)("strong",{parentName:"h2"},"Smart Contract in Action: Compile and Deploy")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Compile Smart Contracts.")," Use the commandtrufflecompile to compile your smart contracts.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177171360-8066812a-a309-43c9-b2df-f5a1fedcdcd2.png",alt:"image"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Migrate Smart Contracts.")," Use the following command to deploy/migrate your smart contracts onto the BSC Testnet ",(0,r.kt)("inlineCode",{parentName:"li"},"truffle migrate --reset --network bscTestnet"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177171461-f92f9f2a-17cb-43e2-bcca-cdd69eb6a9ff.png",alt:"image"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unit Test Your Smart Contracts.")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Open a terminal and move into the root directory of the project. Run the ganache-cli using the command ",(0,r.kt)("inlineCode",{parentName:"li"},"ganache-cli"),".")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177171537-8a77135e-9750-4800-aa4f-918b7b82dc43.png",alt:"image"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  2. Make sure that the terminal is not closed, i.e., ganache-cli is running in the background. This is important because testing is done on the local network.\n\n  3. From the root directory of the project, in a new terminal, run the command ```truffle test``` to run the tests.\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177171621-f884d615-e65e-46fb-9e3d-edaa9a8c26bf.png",alt:"image"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create the build.")," Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," to create the build files for your web application using the webpack library.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177171669-b8bd829f-81ec-45ec-951a-c9920ef2c1b3.png",alt:"image"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Run the application.")," Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev")," to start the application on the localhost. ",(0,r.kt)("strong",{parentName:"li"},"Note:")," ",(0,r.kt)("em",{parentName:"li"},"before running the application make sure nothing is running on localhost:3000"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177171781-2a2eba8c-eea9-4af5-8b02-fc9bdd88e9d6.png",alt:"image"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Navigate to localhost:3000 on Chrome Browser to see the dApp in action")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177171856-abaf323d-c35c-4d3a-bfd0-ec1270fa333e.png",alt:"image"})),(0,r.kt)("h2",{id:"using-the-dapp"},(0,r.kt)("strong",{parentName:"h2"},"Using the dApp")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure that your MetaMask wallet is correctly installed and configured to connect to BSC Testnet. Refer to this ",(0,r.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"guide")," for details. To use the dApp successfully make sure that your MetaMask wallet is connected to the site.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177172042-75583f4d-588e-49c0-9e13-ef13bf53610d.png",alt:"image"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Greet Button"))," to display a message, by default it","'","s ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Hello, World")),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177172075-f19f48e4-2802-4bc0-8017-5febd412c06a.png",alt:"image"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enter a name in the input field, Click ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Save Name"))," button to save the name.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177172100-eb80c577-2898-47cf-8b57-89b0e478c765.png",alt:"image"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Confirm the transaction when MetaMask notification pops up.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177172154-5662d3ae-9039-4034-81cf-e90d2b427ec2.png",alt:"image"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Upon successful transaction confirmation you will see the ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Save successful"))," message.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177172193-b21c70d9-fc3a-4201-afc8-9a1ae978e18b.png",alt:"image"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Greet Button"))," to display a message along with the last name saved with the current account.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177172207-d7b890de-c603-463d-ab39-a78e3cd56a63.png",alt:"image"})),(0,r.kt)("h2",{id:"conclusion"},(0,r.kt)("strong",{parentName:"h2"},"Conclusion")),(0,r.kt)("p",null,"In this post, we developed both the backend and front-end for a decentralized application developed in Node.js that can be used for interacting with smart contracts deployed on the BSC Testnet. The tech stack includes Web3.js, Truffle, Ganache-cli, Node js, MetaMask, and jQuery. Check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bnb-chain-tutorial"},"GitHub")," for more tutorials on how to develop on BSC. If you have any questions or are stuck, reach out to us on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/789402563035660308/912296662834241597"},"Discord Channel"),"."))}u.isMDXComponent=!0}}]);