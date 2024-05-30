"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Asset Management",s={unversionedId:"tokens",id:"tokens",title:"Asset Management",description:"Introduction",source:"@site/docs/tokens.md",sourceDirName:".",slug:"/tokens",permalink:"/bnbchain-docsite/docs/tokens",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/tokens.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Issue",id:"issue",level:2},{value:"Mint",id:"mint",level:2},{value:"Burn",id:"burn",level:2},{value:"Freeze &amp; Unfreeze",id:"freeze--unfreeze",level:2},{value:"TransferOwnership",id:"transferownership",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"asset-management"},"Asset Management"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Assets are stored as ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," on BNB Beacon Chain, and the below management actions are available. All the assets are complied with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP2.md"},"BEP2"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/trading-spec#fees"},"fees")," that are due must be paid in BNB before any of these operations can be executed. The fees for testnet and mainnet are different."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note:")," Before you run any command examples on this page, and if you have not done so already, you must ",(0,o.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/keys"},"generate or add a key to bnbcli"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Also remember:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," parameters passed to bnbcli may vary, and the",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," for mainnet is ",(0,o.kt)("inlineCode",{parentName:"p"},"Binance-Chain-Tigris"),", and is ",(0,o.kt)("inlineCode",{parentName:"p"},"Binance-Chain-Ganges")," for testnet. To find the latest list of  endpoints for the mainnet, please check ",(0,o.kt)("a",{parentName:"p",href:"https://dex.binance.org/api/v1/peers"},"the peers list"),". To find the latest endpoints for the testnet, please check ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-dex.binance.org/api/v1/peers"},"the peers list"),"."),(0,o.kt)("h2",{id:"issue"},"Issue"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Issue")," is a transaction used to create a new asset. Anyone can issue a new token with fee paid. After issuing, the token would appear in the issuer's account as free balance."),(0,o.kt)("p",null,"An issuance transaction contains:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/87"},"BEP87")," is implemented after Lagrange Upgrade. It changes the minimal symbol length to ",(0,o.kt)("strong",{parentName:"p"},"two"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source Address: the sender address of the transaction and it will become the ",(0,o.kt)("inlineCode",{parentName:"li"},"owner")," of the token, all created tokens will be in this account."),(0,o.kt)("li",{parentName:"ul"},'Token Name: it is the long official name, such as "BNB Coin". It is limited to 32 characters.'),(0,o.kt)("li",{parentName:"ul"},'Symbol: identifier of the token, limited to alphanumeric characters and is case insensitive, for example, "BNB". The length of symbol should be between 2 and 8. ',(0,o.kt)("br",null),'\n"B" suffixed symbol is also allowed for migrating tokens that already exist on other chains.',(0,o.kt)("br",null),'\nThe symbol doesn\'t have to be unique, "-" followed by random 3 letters will be appended to the provided symbol to avoid uniqueness constraint.',(0,o.kt)("br",null),"\nThose 3 letters are the first three letters of tx hash of the ",(0,o.kt)("inlineCode",{parentName:"li"},"issue")," transaction.",(0,o.kt)("br",null),'\nFor example, "NNB-B90". ',(0,o.kt)("strong",{parentName:"li"},"Only BNB does not have this suffix."),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},"Total Supply: an int64 boosted by ",(0,o.kt)("strong",{parentName:"li"},"1e8")," for decimal part. The max total supply is 90 billion."),(0,o.kt)("li",{parentName:"ul"},"Mintable: that means whether this token can be minted in the future. To set the tokes to be mintable, you need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"--mintable"),", otherwise just omit this field to set this token to be non-mintable.")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# To issue a NNB mintable token with total-supply 1 billion on mainnet\n> ./bnbcli token issue --token-name "new token" --total-supply 100000000000000000 --symbol NNB --mintable --from alice  --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443 --trust-node\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# To issue a NNB non-mintable token with total-supply 1 billion on mainnet\n> ./bnbcli token issue --token-name "new token" --total-supply 100000000000000000 --symbol NNB --from alice  --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443 --trust-node\n')),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# To issue a NNB mintable token with total-supply 1 billion on testnet\n> ./tbnbcli token issue --token-name "new bnb" --total-supply 100000000000000000 --symbol NNB --mintable --from alice --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80 --trust-node\n\nCommitted at block 1887 (tx hash: B90A055DDD570AE42A7050182993A0B4DBC81A0D, ... Issued NNB-B90...)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# To issue a NNB non-mintable token with total-supply 1 billion on testnet\n> ./tbnbcli token issue --token-name "new bnb" --total-supply 100000000000000000 --symbol NNB --from alice --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80 --trust-node\n\nCommitted at block 1887 (tx hash: B90A055DDD570AE42A7050182993A0B4DBC81A0D, ... Issued NNB-B90...)\n')),(0,o.kt)("h2",{id:"mint"},"Mint"),(0,o.kt)("p",null,'Tokens that is "mintable"(specified when issue) can use this function. The amount is  boosted by ',(0,o.kt)("strong",{parentName:"p"},"1e8")," for decimal part. The total supply after mint is still restricted by 90 billion. Note only the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," of the token can use this transaction."),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," > ./bnbcli token mint --amount 100000000000000000 --symbol NNB-B90 --from alice --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443  --trust-node\n")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," > ./tbnbcli token mint --amount 100000000000000000 --symbol NNB-B90 --from alice --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80 --trust-node\n")),(0,o.kt)("h2",{id:"burn"},"Burn"),(0,o.kt)("p",null,"Burn is to destroy certain amount of token, after which that amount of tokens will be subtracted from the operator's balance. The total supply will be updated at the same time. Notice that only the owner of the token has the permission to burn token. The amount is  boosted by ",(0,o.kt)("strong",{parentName:"p"},"1e8")," for decimal part."),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," > ./bnbcli token burn --amount 100000000000000000 --symbol NNB-B90 --from alice --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443  --trust-node\n")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," > ./tbnbcli token burn --amount 100000000000000000 --symbol NNB-B90 --from alice --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80 --trust-node\n")),(0,o.kt)("h2",{id:"freeze--unfreeze"},"Freeze & Unfreeze"),(0,o.kt)("p",null,'Freeze would move the specified amount of token into "frozen" status, so that these tokens can not transferred, spent in orders or any other transaction until they are unfreezed.'),(0,o.kt)("p",null,'Anyone can (only) freeze or unfreeze tokens on their account with status in "free". The amount is  boosted by ',(0,o.kt)("strong",{parentName:"p"},"1e8")," for decimal part."),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> ./bnbcli token freeze --amount 20000000000000000 --symbol NNB-B90 --from alice --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443 --trust-node\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> ./bnbcli token unfreeze --amount 20000000000000000 --symbol NNB-B90 --from alice --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443  --trust-node\n")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> ./tbnbcli token freeze --amount 20000000000000000 --symbol NNB-B90 --from alice --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80 --trust-node\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> ./tbnbcli token unfreeze --amount 20000000000000000 --symbol NNB-B90 --from alice --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80 --trust-node\n")),(0,o.kt)("h2",{id:"transferownership"},"TransferOwnership"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/82"},"BEP82")," is implemented after Lagrange Upgrade to add this new transactionn type.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"0.01 BNB")," will be charged on ",(0,o.kt)("strong",{parentName:"p"},"TransferOwnership")," transactions."),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./bnbcli token transfer-ownership --from  $current-owner --symbol $symbol --new-owner $new-owner  --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443 --trust-node\n")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./tbnbcli token transfer-ownership --from  $current-owner --symbol $symbol --new-owner $new-owner --chain-id Binance-Chain-Nile  --node=data-seed-pre-2-s1.bnbchain.org:80--trust-node\n")))}u.isMDXComponent=!0}}]);