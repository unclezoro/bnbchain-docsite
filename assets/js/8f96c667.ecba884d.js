"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,u=m["".concat(o,".").concat(p)]||m[p]||c[p]||i;return a?n.createElement(u,l(l({ref:t},h),{},{components:a})):n.createElement(u,l({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},l="Monitoring",s={unversionedId:"validator/monitor-and-query-slash",id:"validator/monitor-and-query-slash",title:"Monitoring",description:"Monitoring Slash Contract",source:"@site/docs/validator/monitor-and-query-slash.md",sourceDirName:"validator",slug:"/validator/monitor-and-query-slash",permalink:"/bnbchain-docsite/docs/validator/monitor-and-query-slash",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/monitor-and-query-slash.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Submit Slash Evidence",permalink:"/bnbchain-docsite/docs/validator/send-slash-evidence"},next:{title:"Architecture",permalink:"/bnbchain-docsite/docs/migration/non-evm-chains/solana/architecture-comparison"}},o={},d=[{value:"Monitoring Slash Contract",id:"monitoring-slash-contract",level:2},{value:"Query Side Chain Signing Info",id:"query-side-chain-signing-info",level:2},{value:"Parameters for Slashing <code>side-signing-info</code>",id:"parameters-for-slashing-side-signing-info",level:3},{value:"Example",id:"example",level:4},{value:"Query Side Chain Slash History",id:"query-side-chain-slash-history",level:2},{value:"Parameters for Slashing <code>side-slash-history [validator-sideConsAddr]</code>",id:"parameters-for-slashing-side-slash-history-validator-sideconsaddr",level:3},{value:"Example",id:"example-1",level:4},{value:"Query Side Chain Slash Histories",id:"query-side-chain-slash-histories",level:2},{value:"Parameters for Slashing <code>side-slash-histories</code>",id:"parameters-for-slashing-side-slash-histories",level:3},{value:"Example",id:"example-2",level:4},{value:"Query All Side Chain Slash Histories(for internal)",id:"query-all-side-chain-slash-historiesfor-internal",level:2},{value:"Parameters for Slashing <code>side-all-slash-histories</code>",id:"parameters-for-slashing-side-all-slash-histories",level:3},{value:"Example",id:"example-3",level:4}],h={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monitoring"},"Monitoring"),(0,r.kt)("h2",{id:"monitoring-slash-contract"},"Monitoring Slash Contract"),(0,r.kt)("p",null,"As best practice, it is advisable to  keep monitoring the event log of the slash contract on the BSC scanner at\n",(0,r.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001001#events"},"https://bscscan.com/address/0x0000000000000000000000000000000000001001#events"),". Additionally, you can also check the slash indicator by reading the contract and pay attention to those above 30. Once it exceeds 150, the validator contract will be jailed."),(0,r.kt)("h2",{id:"query-side-chain-signing-info"},"Query Side Chain Signing Info"),(0,r.kt)("h3",{id:"parameters-for-slashing-side-signing-info"},"Parameters for Slashing ",(0,r.kt)("inlineCode",{parentName:"h3"},"side-signing-info")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of bnb chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"chain-id of the side  chain the validator belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-signing-info 0x625448c3f21AB4636bBCef84Baaf8D6cCdE13c3F --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")),(0,r.kt)("h2",{id:"query-side-chain-slash-history"},"Query Side Chain Slash History"),(0,r.kt)("h3",{id:"parameters-for-slashing-side-slash-history-validator-sideconsaddr"},"Parameters for Slashing ",(0,r.kt)("inlineCode",{parentName:"h3"},"side-slash-history [validator-sideConsAddr]")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of bnb chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--infraction-height"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"infraction height"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--infraction-type"),(0,r.kt)("td",{parentName:"tr",align:null},"DoubleSign"),(0,r.kt)("td",{parentName:"tr",align:null},"infraction type, 'DoubleSign;Downtime;MaliciousVote'"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"chain-id of the side chain the validator belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-slash-history 0x625448c3f21AB4636bBCef84Baaf8D6cCdE13c3F --infraction-height 100 --infraction-type DoubleSign --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")),(0,r.kt)("h2",{id:"query-side-chain-slash-histories"},"Query Side Chain Slash Histories"),(0,r.kt)("h3",{id:"parameters-for-slashing-side-slash-histories"},"Parameters for Slashing ",(0,r.kt)("inlineCode",{parentName:"h3"},"side-slash-histories")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of bnb chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--infraction-type"),(0,r.kt)("td",{parentName:"tr",align:null},"DoubleSign"),(0,r.kt)("td",{parentName:"tr",align:null},"infraction type, 'DoubleSign;Downtime;MaliciousVote'"),(0,r.kt)("td",{parentName:"tr",align:null},"Option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"chain-id of the side chain the validator belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-slash-histories 0x625448c3f21AB4636bBCef84Baaf8D6cCdE13c3F --infraction-type DoubleSign --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")),(0,r.kt)("h2",{id:"query-all-side-chain-slash-historiesfor-internal"},"Query All Side Chain Slash Histories(for internal)"),(0,r.kt)("h3",{id:"parameters-for-slashing-side-all-slash-histories"},"Parameters for Slashing ",(0,r.kt)("inlineCode",{parentName:"h3"},"side-all-slash-histories")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Comments")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"the chain id of bnb chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,r.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,r.kt)("td",{parentName:"tr",align:null},"chain-id of the side chain the validator belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bnbcli slashing side-all-slash-histories --side-chain-id=bsc --chain-id=test-chain-8d7sJz --home ~/home_cli\n")))}c.isMDXComponent=!0}}]);