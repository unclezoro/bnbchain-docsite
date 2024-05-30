"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={},r="Staking",l={unversionedId:"bcfusion/validators/staking",id:"bcfusion/validators/staking",title:"Staking",description:"BNB smart chain (BSC) is a Proof-of-Staked-Authority (PoSA) blockchain, which means that staking is one of the most",source:"@site/docs/bcfusion/validators/staking.md",sourceDirName:"bcfusion/validators",slug:"/bcfusion/validators/staking",permalink:"/bnbchain-docsite/docs/bcfusion/validators/staking",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/validators/staking.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Build-in System Contracts",permalink:"/bnbchain-docsite/docs/bcfusion/developers/system-contracts"},next:{title:"Slash",permalink:"/bnbchain-docsite/docs/bcfusion/validators/slash"}},s={},d=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Consensus Engine",id:"consensus-engine",level:3},{value:"Validator Set",id:"validator-set",level:3},{value:"Validator Election",id:"validator-election",level:3},{value:"Sytems Contracts",id:"sytems-contracts",level:3},{value:"Credit Contract",id:"credit-contract",level:3},{value:"Reward Distribution",id:"reward-distribution",level:3},{value:"Validator Operations",id:"validator-operations",level:2},{value:"Create Validator",id:"create-validator",level:3},{value:"Edit Validator",id:"edit-validator",level:3},{value:"Delegator Operations",id:"delegator-operations",level:2},{value:"Delegate",id:"delegate",level:3},{value:"Redelegate",id:"redelegate",level:3},{value:"Undelegate",id:"undelegate",level:3},{value:"Claim",id:"claim",level:3}],h={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"staking"},"Staking"),(0,i.kt)("p",null,"BNB smart chain (BSC) is a Proof-of-Staked-Authority (PoSA) blockchain, which means that staking is one of the most\nimportant parts of the system. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/294"},"BEP-294")," introduces the new native staking\nmechanism after BNB chain fusion, which has several differences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users are able to participate in staking on the BSC directly, without moving BNB to Beacon chain."),(0,i.kt)("li",{parentName:"ul"},"Staking credit, as the proof of BNB staked to a specified validator, cannot be transferred. Different validators issue\ndifferent staking credits."),(0,i.kt)("li",{parentName:"ul"},"Staking reward will not be distributed automatically.")),(0,i.kt)("p",null,"In this section, we will explain the basic concepts and operations of staking on the BSC."),(0,i.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,i.kt)("h3",{id:"consensus-engine"},"Consensus Engine"),(0,i.kt)("p",null,"BSC uses a consensus mechanism which combines DPoS and PoA for consensus, so that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blocks are produced by a limited set of validators."),(0,i.kt)("li",{parentName:"ul"},"Validators take turns to produce blocks in a PoA manner."),(0,i.kt)("li",{parentName:"ul"},"Validator set are elected in and out based on a staking based governance.")),(0,i.kt)("p",null,"To determinate which validators are eligible to produce blocks, that's why staking mechanism is needed."),(0,i.kt)("h3",{id:"validator-set"},"Validator Set"),(0,i.kt)("p",null,"The validator set is the group of nodes that are responsible for validating transactions and producing blocks on the\nBSC. The validator set is determined by the amount of staking credit each validator has, which reflects the amount of\nBNB staked by the validator and its delegators. The top validators with the most staking credit are selected as the\nactive validator set, and they take turns to propose and vote on blocks. The rest of the validators are in the standby\nvalidator set, and they can join the active validator set if their staking credit increases or if some active validators\ndrop out."),(0,i.kt)("p",null,"Validators can join or leave the validator set by creating or editing their validator information.\nValidators can also be removed from the validator set by slashing, which is a penalty for misbehaving or being offline."),(0,i.kt)("h3",{id:"validator-election"},"Validator Election"),(0,i.kt)("p",null,"There are different rols for validators:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cabinet: the top K (which is 21 currently) validators who get the most chance of producing blocks."),(0,i.kt)("li",{parentName:"ul"},"Candidate: the top (k, K+NumOfCandidates] validators who get a small chance of producing blocks."),(0,i.kt)("li",{parentName:"ul"},"Inactive: the reset validators who get no chance of producing blocks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(12834).Z,width:"796",height:"341"})),(0,i.kt)("p",null,"To determinate the roles of all validators, the validator set is updated every 24 hours,\nbased on the latest staking information. At the first block after UTC 00:00, the consensus engine\nwill sort all the validators and update the BSC validator set contract to save the ranking information.\nBe noted: during the BC fusion, the validators created on Beacon Chain and the validators created on BSC\nwill be sorted together to decide the top validators. However, the validators created on BSC will receive\ntriple voting power compared with the validators created on Beacon Chain for the same amount of BNB staked."),(0,i.kt)("h3",{id:"sytems-contracts"},"Sytems Contracts"),(0,i.kt)("p",null,"There are several built-in contracts (i.e., system contracts) to facilitate the BSC staking."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Validator Set Contract. The contract periodically elects a validator set.\nThe contract also serves as a vault for temporarily storing validator rewards.\nPeriodically, these rewards are sent back to the BC or transferred to the BSC native staking module.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"System Reward Contract. This contract acts as a vault to collect part of transaction fees. The funds are used for\nvarious public purposes, like distributing fast finality rewards.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Slash Contract. This contract is used to keep track of the number of times a validator becomes unavailable and\ntriggers penalties once a certain threshold is reached. Additionally, this contract also handles other types of slash\nevents, such as double signing and malicious voting in fast finality.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stake Hub Contract. This contract serves as the entry point for managing validators and delegations,\nwhile also implementing the logic for slashing specific validators. For delegation/undelegation/redelegation\noperations,\nit will call different validators' implementation contracts to manage a user's stake."))),(0,i.kt)("h3",{id:"credit-contract"},"Credit Contract"),(0,i.kt)("p",null,'Each validator has its own validator contract that manages staking credit and facilitates the exchange\nbetween credit and BNB. The token name of a staking credit is "stake {{validator moniker}} credit",\nand the symbol is "st{{validator moniker}}". The contract will be created by the Stake Hub Contract when a validator\nis created.'),(0,i.kt)("h3",{id:"reward-distribution"},"Reward Distribution"),(0,i.kt)("p",null,"The staking reward comes from transaction fee - when a block is produced, the majority of the block fee will be\ncollected as reward for the validator who proposed the block.\nEvery day, a portion of the rewards collected will be directly sent to the operator account of the validator as\ncommission, while the remaining portion will be sent to the corresponding validator credit contract. And when a user\nundelegates and claims his/her stakes, the accumulated reward and the original stake will be sent back to him/her."),(0,i.kt)("h2",{id:"validator-operations"},"Validator Operations"),(0,i.kt)("p",null,"Validators are the nodes that run the BNB smart chain software and participate in the consensus process. Validators need\nto have a minimum amount of BNB staked to their own validator address, and they can also accept delegations from other\nBNB holders who want to stake with them. Validators earn rewards from the transaction fees, and\nthey share a portion of their rewards with their delegators."),(0,i.kt)("h3",{id:"create-validator"},"Create Validator"),(0,i.kt)("p",null,"To create a validator, a BNB holder needs to send a ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateValidator")," transaction to the ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub")," contract,\nwhich is a system contract and the address is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000002002"),",\nwith minimum amount of BNB that the validator needs to stake to their own validator\naddress (2000 BNB), specifying the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operator address"),": The address of the validator, which will receive the staking credit and the rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consensus address"),": The consensus address of the validator's node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vote Address"),": The address for participating fast finality voting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BLS Proof"),": A BLS signature to prove that the validator owns the vote address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Commission"),": The commission rate defines the percentage of the rewards that the validator will keep for themselves,\nand the rest will be distributed to the delegators. It also contains the max commison rate, the max change rate during\na predefined timespan for validator to set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": The optional information about the validator, such as moniker, identiy, website, etc.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateValidator")," transaction will deduct the minimum self-delegation amount from the validator address and issue\nthe corresponding staking credit to the validator. The validator will then join the standby validator set, and wait for\nthe next validator set update to see if they can enter the active validator set."),(0,i.kt)("h3",{id:"edit-validator"},"Edit Validator"),(0,i.kt)("p",null,"A validator can edit their validator information by sending  ",(0,i.kt)("inlineCode",{parentName:"p"},"EditConsensusAddress"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EditCommissionRate"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"EditDescription"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EditVoteAddress")," transactions to the ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub")," contract, specifying the following information\naccordingly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New consensus address"),": The new consensus address of the validator's node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New commission"),": The new percentage of the rewards that the validator will keep for themselves, which can\nonly be increased within a maximum change rate limit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New description"),": The new information about the validator, such as moniker, identiy, website, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New vote address"),": The new vote address for participating fast finality.")),(0,i.kt)("p",null,"These transactions will update the validator information on the BNB smart chain, and the changes will take\neffect immediately. However, the new commission rate will only apply to the rewards earned after the transaction, and\nthe previous rewards will be distributed according to the previous commission rate."),(0,i.kt)("h2",{id:"delegator-operations"},"Delegator Operations"),(0,i.kt)("p",null,"Delegators are the BNB holders who stake their BNB to a validator of their choice, and share the rewards and the risks\nwith the validator. Delegators can choose any validator from the active or the standby validator set, and they can\nswitch between validators at any time. Delegators can also undelegate their BNB from a validator, and claim their\nrewards at any time."),(0,i.kt)("h3",{id:"delegate"},"Delegate"),(0,i.kt)("p",null,"To delegate BNB to a validator, a BNB holder needs to send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Delegate")," transaction to the ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub")," contract,\nspecifying\nthe following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operator address"),": The address of the validator, which will receive the BNB from the delegator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delegate Voting Power"),": The flag to indicate whether the delegator would like to delegate his/her voting power\nto the validator for governance.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Delegate")," transaction will deduct the amount of BNB from the delegator address and issue the corresponding staking\ncredit to the validator. The delegator will then share the rewards and the risks with the validator, according to the\ncommission rate and the slashing rate of the validator."),(0,i.kt)("p",null,"The credit tokens (or share) a delgator will get is calculated\nas - ",(0,i.kt)("inlineCode",{parentName:"p"},"delegation amount")," * ",(0,i.kt)("inlineCode",{parentName:"p"},"total supply of credit token")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"total pooled BNB"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"total pooled BNB")," includes the delegation BNB and unclaimed reaward BNB of of the vlidator. It means that a\ndelegator will get credit tokens based on the ratio of his/her delegation BNB amount to the total staked and reward BNB.\nWhen the validator gets block reward the ",(0,i.kt)("inlineCode",{parentName:"p"},"total pooled BNB")," amount will increase, which means that when unbonding\nthe delegator will get his delegation, as well as reward BNB from the pool."),(0,i.kt)("h3",{id:"redelegate"},"Redelegate"),(0,i.kt)("p",null,"To redelegate BNB from one validator to another, a delegator needs to send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Redelegate")," transaction to the ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub"),"\ncontract, specifying the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source operator address"),": The address of the source validator, which will send the BNB to the destination\nvalidator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destination operator address"),": The address of the destination validator, which will receive the BNB from the\nsource validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Amount"),": The amount of BNB that the delegator wants to redelegate from the source validator to the destination\nvalidator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delegate Voting Power"),": The flag to indicate whether the delegator would like to delegate his/her voting power\nto the destination validator for governance.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Redelegate")," transaction will deduct the amount of staking credit from the source validator and issue the\ncorresponding staking credit to the destination validator. The delegator will then share the rewards and the risks with\nthe destination validator, according to the commission rate and the slashing rate of the destination validator.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Redelegate")," transaction does not incur the unbonding period, but it will incur the redelegation fee,\nwhich is designed to prevent delegators from frequently switching between validators to chase\nthe highest rewards or avoid the highest risks. The current fee rate is 0.002%."),(0,i.kt)("h3",{id:"undelegate"},"Undelegate"),(0,i.kt)("p",null,"To undelegate BNB from a validator, a delegator needs to send an ",(0,i.kt)("inlineCode",{parentName:"p"},"Undelegate")," transaction to the ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub")," contract,\nspecifying the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operator address"),": The address of the validator, which will send the BNB to the delegator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Amount"),": The amount of BNB that the delegator wants to unstake from the validator.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Undelegate")," transaction will deduct the amount of staking credit from the validator and return the corresponding\nBNB to the delegator address. However, the BNB will be locked for a period of time, called the ",(0,i.kt)("strong",{parentName:"p"},"unbonding period"),",\nbefore the delegator can use it. The unbonding period is currently set to 7 days, and it is designed to prevent\ndelegators from quickly withdrawing their BNB in case of a validator misbehavior or a network attack."),(0,i.kt)("h3",{id:"claim"},"Claim"),(0,i.kt)("p",null,"To claim the unbond BNB and the rewards, a delegator should send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Claim")," transaction to the ",(0,i.kt)("inlineCode",{parentName:"p"},"StakeHub")," contract,\nspecifying the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delegator address"),": The BEP20 address of the delegator, which will receive the rewards from the validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Queued unbond number"),": The number of unbond requests to be claimed, and 0 means claim BNB and rewards from\nall the unbond requests.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Claim")," transaction will return the delegated BNB and rewards to the delegator. Be noted, a delegator can only get\nthe rewards after unbond. Before undelegation, the reward will be furthur staked to boost a delegator's income."))}p.isMDXComponent=!0},12834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/validator-election-8daf36f0fbea18c4889d533feed9e8f7.png"}}]);