"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5667],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>g});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(o),u=a,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return o?n.createElement(g,i(i({ref:t},h),{},{components:o})):n.createElement(g,i({ref:t},h))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},67091:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={},i="Governance",s={unversionedId:"bcfusion/validators/gov",id:"bcfusion/validators/gov",title:"Governance",description:"BEP-297 introduces the native governance module for BNB smart chain after",source:"@site/docs/bcfusion/validators/gov.md",sourceDirName:"bcfusion/validators",slug:"/bcfusion/validators/gov",permalink:"/bnbchain-docsite/docs/bcfusion/validators/gov",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/validators/gov.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Slash",permalink:"/bnbchain-docsite/docs/bcfusion/validators/slash"},next:{title:"BSC General FAQs",permalink:"/bnbchain-docsite/docs/BSC-FAQs-general"}},l={},p=[{value:"Workflow",id:"workflow",level:2},{value:"Submit Proposal",id:"submit-proposal",level:3},{value:"Cast Vote",id:"cast-vote",level:3},{value:"Execute Proposal",id:"execute-proposal",level:3},{value:"Voting Power Delegation",id:"voting-power-delegation",level:2}],h={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"governance"},"Governance"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/297"},"BEP-297")," introduces the native governance module for BNB smart chain after\nBNB chain fusion. The governance module is derived\nfrom ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/governance"},"OpenZeppelin Governor"),", with the following\nfeatures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any staking credit holder is allowed to propose and vote."),(0,a.kt)("li",{parentName:"ul"},"Voters can continue to earn staking rewards during the voting period."),(0,a.kt)("li",{parentName:"ul"},"Users can delegate someone else to participate in governance on their behalf."),(0,a.kt)("li",{parentName:"ul"},"A time lock period is introduced before the proposal is executed."),(0,a.kt)("li",{parentName:"ul"},"If the proposal is rejected, the proposer does not incur any financial losses.")),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"The workflow of the governance module consists of three stages: submit proposal, cast vote, and execute proposal. Each\nstage has its own requirements and parameters, which can be configured by the BNB smart chain governance parameters."),(0,a.kt)("h3",{id:"submit-proposal"},"Submit Proposal"),(0,a.kt)("p",null,"To submit a proposal, a staking credit holder needs to send a ",(0,a.kt)("inlineCode",{parentName:"p"},"propose")," transaction to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Governor")," contract,\nwhich is a system contract and the address is ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000002004"),",\nspecifying the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proposer address"),": The address of the proposer, who initiates the proposal and pays the proposal fee."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Targets"),": The list of addresses of the contracts or accounts that the proposal wants to interact with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Values"),": The list of amounts of BNB or other tokens that the proposal wants to transfer to the targets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Signatures"),": The list of function signatures of the contracts that the proposal wants to call on the targets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Calldatas"),": The list of encoded arguments of the functions that the proposal wants to call on the targets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": The description of the proposal, which provides more details and rationale for the proposal.")),(0,a.kt)("p",null,"A delegator should delegate more the 200 staked BNB as the minimal requirement for submitting a proposal.\nMeanwhile, a delegator can only submit a new propopal if there is no pending proposal created by him/her.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"propose")," transaction will create a new proposal on the BNB smart chain.\nThe proposal will have a unique proposal ID, and a proposal status of ",(0,a.kt)("inlineCode",{parentName:"p"},"Pending"),". The proposal will then\nenter the voting period, which is the time window for the staking credit holders to cast their votes on the proposal."),(0,a.kt)("h3",{id:"cast-vote"},"Cast Vote"),(0,a.kt)("p",null,"To cast a vote on a proposal, a staking credit holder needs to send a ",(0,a.kt)("inlineCode",{parentName:"p"},"castVote")," transaction to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Governor")," contract,\nspecifying the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Voter address"),": The address of the voter, who casts the vote on the proposal. The voter address can be the\nsame as the staking credit holder address, or a different address that is delegated by the staking credit holder to\nparticipate in governance on their behalf."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proposal ID"),": The ID of the proposal, which identifies the proposal that the voter wants to vote on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support"),": The boolean value of the vote, which indicates the voter's preference on the proposal. ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," means that\nthe voter supports the proposal, and ",(0,a.kt)("inlineCode",{parentName:"li"},"False")," means that the voter opposes the proposal.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"castVote")," transaction will record the support value and the voting power of the voter on the BNB smart chain. The\nvoting power is the amount of staking credit that the voter has at the time of the vote. The voting power can change due\nto staking operations, such as delegate, undelegate, or redelegate, but the support value will remain the same. The\nvoter can change their support value at any time during the voting period, by sending another ",(0,a.kt)("inlineCode",{parentName:"p"},"castVote")," transaction\nwith a different support value."),(0,a.kt)("p",null,"After submitting a proposal, the staking credit holders can cast their votes on the proposal until the voting period\nends. The voting period is one of the BNB smart chain governance parameters, and it is currently set to 7 days."),(0,a.kt)("h3",{id:"execute-proposal"},"Execute Proposal"),(0,a.kt)("p",null,"To execute a proposal, anyone can send an ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," transaction to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Governor")," contract, specifying the following\ninformation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proposal ID"),": The ID of the proposal, which identifies the proposal that wants to be executed.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," transaction will check the proposal status and the voting results on the BNB smart chain, and determine\nwhether the proposal can be executed or not. The proposal can be executed if the following conditions are met:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The proposal status is ",(0,a.kt)("inlineCode",{parentName:"li"},"Pending"),", which means that the proposal has not been executed or expired yet."),(0,a.kt)("li",{parentName:"ul"},"The voting period is over, which means that the time window for casting votes on the proposal has ended."),(0,a.kt)("li",{parentName:"ul"},"The proposal has reached the quorum, which means that the total voting power of the voters who cast ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),"\nvotes is greater than or equal to a certain percentage of the total staking credit on the BNB smart chain. The quorum\nis one of the BNB smart chain governance parameters, and it is currently set to 10%."),(0,a.kt)("li",{parentName:"ul"},"The proposal has reached the threshold, which means that the voting power of the voters who cast ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," votes is\ngreater than or equal to a certain percentage of the voting power of the voters who cast ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"False")," votes.")),(0,a.kt)("p",null,"Once the voting period is over, the proposal can be executed if it meets the required conditions. However, the proposal\ncannot be executed immediately, as there is a time lock period before the proposal is executed. The time lock period is\nanother BNB smart chain governance parameter, and it is currently set to 1 day. The time lock period is designed to\nprevent sudden and irreversible changes on the BNB smart chain, and to give the stakeholders a chance to react or\nprepare for the proposal execution."),(0,a.kt)("h2",{id:"voting-power-delegation"},"Voting Power Delegation"),(0,a.kt)("p",null,"In addition to casting votes, the staking credit holders can also delegate their voting power to someone else to\nparticipate in governance on their behalf. This can be useful for staking credit holders who do not have the time,\ninterest, or expertise to follow and vote on the proposals, but still want to have a say in the governance process. By\ndelegating their voting power to a trusted party, such as a validator, a friend, or a professional service, they can\nbenefit from their knowledge and experience, and also avoid the risk of losing their staking rewards due to abstaining\nfrom voting."),(0,a.kt)("p",null,"To delegate their voting power, a staking credit holder needs to send a ",(0,a.kt)("inlineCode",{parentName:"p"},"delegateVote")," transaction to the ",(0,a.kt)("inlineCode",{parentName:"p"},"GovToekn"),"\ncontract, which is a system contract and the address is ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000002005"),",\nspecifying the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delegator address"),": The address of the delegator, who delegates their voting power to another address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delegatee address"),": The address of the delegatee, who receives the voting power from the delegator and\nparticipates in governance on their behalf.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"delegateVote")," transaction will record the delegation relationship and the voting power of the delegator on\nthe BNB smart chain. The voting power is the amount of staking credit that the delegator has at the time of the\ndelegation. The voting power can change due to staking operations, such as delegate, undelegate, or redelegate, but the\ndelegation relationship will remain the same. The delegator can change their delegatee address at any time, by sending\nanother ",(0,a.kt)("inlineCode",{parentName:"p"},"delegateVote")," transaction with a different delegatee address."))}d.isMDXComponent=!0}}]);