"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1595],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||h[c]||i;return a?n.createElement(g,l(l({ref:e},d),{},{components:a})):n.createElement(g,l({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19369:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_label:"Governance of BSC",sidebar_position:2,hide_table_of_contents:!1},l="Governance of BSC",o={unversionedId:"learn/bsc-gov",id:"learn/bsc-gov",title:"Governance of BSC",description:"Introduction",source:"@site/docs/learn/bsc-gov.md",sourceDirName:"learn",slug:"/learn/bsc-gov",permalink:"/bnbchain-docsite/docs/learn/bsc-gov",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/bsc-gov.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Governance of BSC",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Cross-Chain API",permalink:"/bnbchain-docsite/docs/learn/cross-chain-api"},next:{title:"Wallet Guide",permalink:"/bnbchain-docsite/docs/Wallet"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"What kind of changes are made via on-chain governance with BSC?",id:"what-kind-of-changes-are-made-via-on-chain-governance-with-bsc",level:5},{value:"Workflow",id:"workflow",level:2},{value:"Deposit Stage",id:"deposit-stage",level:3},{value:"Voting Stage",id:"voting-stage",level:3},{value:"Tallying &amp; Execution Stage",id:"tallying--execution-stage",level:3},{value:"Contract Interface",id:"contract-interface",level:2},{value:"Parameters that control the behavior of BSC",id:"parameters-that-control-the-behavior-of-bsc",level:2},{value:"Fee Table",id:"fee-table",level:2},{value:"Commands",id:"commands",level:2},{value:"Query side chain proposals",id:"query-side-chain-proposals",level:3},{value:"Query side chain proposal",id:"query-side-chain-proposal",level:3},{value:"Query side chain parameters",id:"query-side-chain-parameters",level:3},{value:"Submit cross chain param change proposal",id:"submit-cross-chain-param-change-proposal",level:3},{value:"Submit cross chain channel management proposal",id:"submit-cross-chain-channel-management-proposal",level:3},{value:"Submit side chain module param change proposal",id:"submit-side-chain-module-param-change-proposal",level:3},{value:"Vote for side chain proposal",id:"vote-for-side-chain-proposal",level:3},{value:"Deposit for side chain proposal",id:"deposit-for-side-chain-proposal",level:3}],d={toc:s},m="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"governance-of-bsc"},"Governance of BSC"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The BNB Smart Chain (BSC) network is not only a Proof of Staked Authority (PoSA) blockchain network but also one that utilizes on-chain governance. Ideally, such governance logic should be built into the blockchain and automatically executed as the blocking happens. Cosmos Hub, which shares the same Tendermint consensus and libraries with BNB Beacon Chain, works in this way.\nThe BNB Beacon Chain has been preparing to enable governance logic since the design days. In order to keep the compatibility and reuse the good foundation of BC, the governance logic of BSC is implemented on BC."),(0,r.kt)("h5",{id:"what-kind-of-changes-are-made-via-on-chain-governance-with-bsc"},"What kind of changes are made via on-chain governance with BSC?"),(0,r.kt)("p",null,"Right now, there are many system parameters to control the behavior of the BSC, e.g. slash amount, cross-chain transfer fees. All these parameters will be determined by BSC Validator Set together through a proposal-vote process based on their staking. Such process will be carried on BC, and the new parameter values will be picked up by either the management module on BC or corresponding system contracts via a cross-chain communication. The proposals can be classified into two groups: 1. Param Change Proposal if the parameter takes effect on the BNB Beacon Chain; 2. Cross Param Change Proposal if the parameter takes effect on the BNB Smart Chain."),(0,r.kt)("p",null,"To understand process-wise how BSC governance works, it\u2019s best to think of these network upgrades in the following stages which are enforced on the protocol level."),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("h3",{id:"deposit-stage"},"Deposit Stage"),(0,r.kt)("p",null,"Anyone can submit a proposal on the BNB Beacon Chain for others to view. The only cost associated with submitting a proposal is the transaction fee as little as 1 BNB.\nHowever, over the course of the voting period, a proposal must have at least 2000 BNB deposited to it in order for it to proceed to a vote.\nThis period lasts at most 2 weeks, but if the minimum amount of 2000 BNB is reached sooner the proposal will pass to voting immediately.\nCurrently, there is no penalty for delegators and validators who do not participate in governance, though there is a risk to individuals who deposit BNB to a proposal if the proposal does not pass the voting stage,\nin such case the deposited BNB will be distributed to the validator set."),(0,r.kt)("h3",{id:"voting-stage"},"Voting Stage"),(0,r.kt)("p",null,"The next stage in the governance process is the voting stage which lasts a customized period. Rather than depositing BNB,\nvalidator operators in this governance stage are actually voting Yes, No, or Abstain.\nIf a proposal reaches quorum or the minimum threshold defined by the protocol it will pass to the next stage for tallying."),(0,r.kt)("h3",{id:"tallying--execution-stage"},"Tallying & Execution Stage"),(0,r.kt)("p",null,"After voting stage, the following condition will be taken into consideration to determine if it passes or not:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Quorum:")," more than ",(0,r.kt)("strong",{parentName:"li"},"50%")," of the total staked tokens at the end of the voting period need to have voted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Threshold:")," More than ",(0,r.kt)("strong",{parentName:"li"},"50%"),' or a majority of the tokens that participated in the vote, excluding "',(0,r.kt)("em",{parentName:"li"},"Abstain"),'" votes must have voted "Yes"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Veto:")," Less than ",(0,r.kt)("strong",{parentName:"li"},"33.4%"),' of the tokens that participated in the vote, not counting "',(0,r.kt)("em",{parentName:"li"},"Abstain"),'" votes, have vetoed the decision "',(0,r.kt)("em",{parentName:"li"},"No (With Veto)"),'".')),(0,r.kt)("p",null,"If any of these conditions are not met, the deposit associated with the denied proposal will not be refunded. These funds will be sent to the validator set."),(0,r.kt)("p",null,"Once a parameter change is voted on and passes all conditions, the upgrade will take effect automatically in the whole network. And this is how you would have seen the BSC evolve to the current version today!"),(0,r.kt)("h2",{id:"contract-interface"},"Contract Interface"),(0,r.kt)("p",null,"Every contract that wants to subscribe param change event, should implement the following interface: ",(0,r.kt)("strong",{parentName:"p"},"function updateParam(string key, bytes calldata value) external")),(0,r.kt)("p",null,"Some following check must be done inside the interface:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The msg sender must be the gov contract."),(0,r.kt)("li",{parentName:"ul"},"Basic check of value. (length, value range)")),(0,r.kt)("p",null,"An example implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'modifier onlyGov() {\n    require(msg.sender == GOV_CONTRACT_ADDR, "the msg sender must be the gov contract");\n    _;\n}\n\nfunction updateParam(string key, bytes calldata value) external onlyGov{\n    if (key == "relayerReward"){\n        require(value.length == 32, "the length of value is not 32 when update relayer_reward param");\n        uint256 memory paramValue = TypesToBytes.ToUint256(0, value);\n        require(paramValue >= MIN_RELAYER_REWARD, "the relayerReward is smaller than the minimum value");\n        require(paramValue <= MAX_RELAYER_REWARD, "the relayerReward is bigger than the maximal value");\n        relayerReward = paramValue\uff1b\n    }else{\n        require(false, "receive unknown param");\n    }\n}\n')),(0,r.kt)("h2",{id:"parameters-that-control-the-behavior-of-bsc"},"Parameters that control the behavior of BSC"),(0,r.kt)("p",null," There are many system parameters to control the behavior of the BSC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All these parameters of BSC system contracts is governable: slashing threshold, cross-chain transfer fees, relayer reward amount and so on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"params of Staking/Slash/Oracle/IBC modules on BC"))),(0,r.kt)("p",null,"All these parameters will be determined by BSC Validator Set together through a proposal-vote process based on their staking.\nSuch processes will be carried on BC, and the new parameter values will be picked up by corresponding system contracts via cross-chain communication when needed."),(0,r.kt)("h2",{id:"fee-table"},"Fee Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Fee"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit Smart Chain Proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"1 BNBs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00025 BNB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Vote"),(0,r.kt)("td",{parentName:"tr",align:null},"0 BNB")))),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"query-side-chain-proposals"},"Query side chain proposals"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of BNB Beacon Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--status"),(0,r.kt)("td",{parentName:"tr",align:null},"passed"),(0,r.kt)("td",{parentName:"tr",align:null},"filter proposals by proposal status, status: deposit_period/voting_period/passed/rejected"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--voter"),(0,r.kt)("td",{parentName:"tr",align:null},"bnb1h9ymecpakr8p8lhchtah2xxx7x4xq099umclqu"),(0,r.kt)("td",{parentName:"tr",align:null},"filter by proposals voted on by voted"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n./bnbcli gov  query-proposals --side-chain-id  bsc  --node http://dataseed2.defibit.io:80 --trust-node --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli gov  query-proposals --side-chain-id  chapel --node http://data-seed-pre-1-s1.bnbchain.org:80 --trust-node --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"query-side-chain-proposal"},"Query side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of BNB Beacon Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n./bnbcli gov  query-proposal  --proposal-id  1  --side-chain-id  bsc --node http://dataseed2.defibit.io:80 --trust-node --chain-id Binance-Chain-Tigris\n\n## testnet\n./tbnbcli gov  query-proposal  --proposal-id  1  --side-chain-id  chapel --trust-node --node http://data-seed-pre-1-s1.bnbchain.org:80 --chain-id Binance-Chain-Ganges\n")),(0,r.kt)("h3",{id:"query-side-chain-parameters"},"Query side chain parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli params side-params --side-chain-id bsc  --trust-node --node http://dataseed2.defibit.io:80 \n\n## testnet\n ./tbnbcli params side-params --side-chain-id chapel  --trust-node --node http://data-seed-pre-1-s1.bnbchain.org:80\n")),(0,r.kt)("h3",{id:"submit-cross-chain-param-change-proposal"},"Submit cross chain param change proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of BNB Beacon Chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"felonyThreshold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the parameter name on the side chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--target"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0x0000000000000000000000000000000000001001"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the address of the contract on side chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0x000000000000000000000000000000000000000000000000000000000000001b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the specified value of the parameter on side chain, should encoded in hex"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainet\n./bnbcli params  submit-cscParam-change-proposal  --key "felonyThreshold" --value "0x000000000000000000000000000000000000000000000000000000000000001b"   --target 0x0000000000000000000000000000000000001001   --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  bsc  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Tigris --node http://dataseed2.defibit.io:80 \n\n## testnet\n./tbnbcli params  submit-cscParam-change-proposal  --key "felonyThreshold" --value "0x000000000000000000000000000000000000000000000000000000000000001b"   --target 0x0000000000000000000000000000000000001001   --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  chapel  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Ganges --node http://data-seed-pre-1-s1.bnbchain.org:80\n')),(0,r.kt)("h3",{id:"submit-cross-chain-channel-management-proposal"},"Submit cross chain channel management proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"parameter name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of BNB Beacon Chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000:BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--channel-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the the channel id that want to manage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--enable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enable the channel or not (default true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainnet\n./bnbcli side-chain  submit-channel-manage-proposal  --channel-id  2 --enable=true  --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  bsc  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Tigris --node http://dataseed2.defibit.io:80 \n\n## testnet\n./tbnbcli side-chain  submit-channel-manage-proposal  --channel-id  2 --enable=true  --deposit 200000000000:BNB     --voting-period 100   --side-chain-id  chapel  --title "test csc change"  --from alice  --trust-node   --chain-id Binance-Chain-Ganges --node http://data-seed-pre-1-s1.bnbchain.org:80\n')),(0,r.kt)("h3",{id:"submit-side-chain-module-param-change-proposal"},"Submit side chain module param change proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Comments")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the chain id of BNB Beacon Chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chapel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200000000000 BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name or address of private key with which to sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--title"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"test csc change"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"title of proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--sc-param-file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"param.json"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the file of Side Chain params (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"--voting-period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"604800"),(0,r.kt)("td",{parentName:"tr",align:"left"},"voting period in seconds (default 604800)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## mainnet\n./bnbcli params  submit-sc-change-proposal  --sc-param-file param.json  --deposit 200000000000:BNB  --voting-period 100   --side-chain-id  bsc  --title "test proposal"  --from delegator1  --trust-node  --chain-id Binance-Chain-Tigris --node http://dataseed2.defibit.io:80 \n\n## testnet\n./tbnbcli params  submit-sc-change-proposal  --sc-param-file param.json  --deposit 200000000000:BNB  --voting-period 100   --side-chain-id  chapel  --title "test proposal"  --from delegator1  --trust-node  --chain-id Binance-Chain-Ganges --node http://data-seed-pre-1-s1.bnbchain.org:80\n')),(0,r.kt)("h3",{id:"vote-for-side-chain-proposal"},"Vote for side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of BNB Beacon Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--option"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"vote option {yes, no, no_with_veto, abstain}"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli gov vote --from alice   --side-chain-id  bsc    --proposal-id 1 --option Yes  --chain-id Binance-Chain-Tigris --node http://dataseed2.defibit.io:80 \n\n## testnet\n ./tbnbcli gov vote --from alice   --side-chain-id  chapel    --proposal-id 1 --option Yes  --chain-id Binance-Chain-Ganges --node http://data-seed-pre-1-s1.bnbchain.org:80\n")),(0,r.kt)("h3",{id:"deposit-for-side-chain-proposal"},"Deposit for side chain proposal"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of BNB Beacon Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"chapel"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of side chain, default is native chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--proposal-id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"proposalID of proposal being queried"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\n ./bnbcli gov deposit --from alice   --side-chain-id  bsc    --proposal-id 1 --deposit 1000000000:BNB --chain-id Binance-Chain-Tigris --node http://data-seed-pre-1-s1.bnbchain.org:80\n\n## testnet\n ./tbnbcli gov deposit --from alice   --side-chain-id  chapel    --proposal-id 1 --deposit 1000000000:BNB --chain-id Binance-Chain-Ganges --node http://data-seed-pre-1-s1.bnbchain.org:80\n")))}h.isMDXComponent=!0}}]);