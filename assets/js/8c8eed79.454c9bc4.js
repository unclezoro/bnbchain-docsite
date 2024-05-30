"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3311],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(b,c(c({ref:n},u),{},{components:t})):a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={},c="Account and Balance",l={unversionedId:"beaconchain/account",id:"beaconchain/account",title:"Account and Balance",description:"Each account contains cryptographic authentication info. It is created by a user of the blockchain. It also includes public key, address, and account number/sequence number for replay protection. Whenever a new address receives an asset, the corresponding transaction would create an Account for that address, which contains balances across all assets that are owned on this address.",source:"@site/docs/beaconchain/account.md",sourceDirName:"beaconchain",slug:"/beaconchain/account",permalink:"/bnbchain-docsite/docs/beaconchain/account",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/account.md",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"Create Account",id:"create-account",level:2},{value:"Web Wallet",id:"web-wallet",level:3},{value:"Account Management With Bnbcli",id:"account-management-with-bnbcli",level:3},{value:"Query Account Balance",id:"query-account-balance",level:3},{value:"Get Testnet BNB",id:"get-testnet-bnb",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account-and-balance"},"Account and Balance"),(0,o.kt)("p",null,"Each account contains cryptographic authentication info. It is created by a user of the blockchain. It also includes public key, address, and account number/sequence number for replay protection. Whenever a new address receives an asset, the corresponding transaction would create an ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," for that address, which contains balances across all assets that are owned on this address."),(0,o.kt)("p",null,"The balance (the amount of tokens) of each asset is composed of 3 different parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Available: the amount of tokens that can be transferred, and spent to swap (buy) other assets"),(0,o.kt)("li",{parentName:"ul"},"Locked: the amount of tokens that has been used in any outstanding orders. Once the order terminates (either filled, canceled or expired), the locked amount will decrease."),(0,o.kt)("li",{parentName:"ul"},"Frozen: the amount of tokens that has been frozen via ",(0,o.kt)("inlineCode",{parentName:"li"},"Freeze")," transactions.")),(0,o.kt)("p",null,"You can query the account info with the following command on mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./bnbcli account <your-address> --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443 --indent --trust-node\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("p",null,"Please note that the amount is boosted by ",(0,o.kt)("strong",{parentName:"p"},"e^8")," for the decimal part."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"type":"bnbchain/Account","value":{"base":{"address":"tbnb1sylyjw032eajr9cyllp26n04300qzzre38qyv5","coins":[{"denom":"000-0E1","amount":"10530"},{"denom":"BNB","amount":"247349863800"},{"denom":"BTC.B-918","amount":"113218800"},{"denom":"COSMOS-587","amount":"50000101983748977"},{"denom":"EDU-DD0","amount":"139885964"},{"denom":"MFH-9B5","amount":"1258976083286"},{"denom":"NASC-137","amount":"0"},{"denom":"PPC-00A","amount":"205150260"},{"denom":"TGT-9FC","amount":"33251102828"},{"denom":"UCX-CC8","amount":"1398859649"},{"denom":"USDT.B-B7C","amount":"140456966268"},{"denom":"YLC-D8B","amount":"210572645"},{"denom":"ZZZ-21E","amount":"13988596"}],"public_key":{"type":"tendermint/PubKeySecp256k1","value":"AhOb3ZXecsIqwqKw+HhTscyi6K35xYpKaJx10yYwE0Qa"},"account_number":"406226","sequence":"29"},"name":"","frozen":null,"locked":[{"denom":"KOGE48-35D","amount":"10000000000"}]}}\n')),(0,o.kt)("p",null,"From the output you can see that this account ",(0,o.kt)("inlineCode",{parentName:"p"},"account_number")," is 406226 and its ",(0,o.kt)("inlineCode",{parentName:"p"},"sequence")," is 29.\nThis is the important information about this account."),(0,o.kt)("h2",{id:"create-account"},"Create Account"),(0,o.kt)("p",null,"There are two ways of creating an account on BNB Chain : creating a key in a web wallet and creating a key via ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli"),". Please make sure you backup your mnemonic."),(0,o.kt)("h3",{id:"web-wallet"},"Web Wallet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can create a key via ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.binance.org/create"},"web wallet"))),(0,o.kt)("p",null,"Follow the instructions and set your password (password is used to unlock the keystore file that you will get here):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create key",src:t(58169).Z,width:"1776",height:"1650"})),(0,o.kt)("p",null,"Then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Download Keystore File")," and you will get a keystore file and be directed to mnemonic page. Make sure to back up mnemonic here as it will be used to restore your key."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create key",src:t(35333).Z,width:"1836",height:"1558"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can restore your key ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.binance.org/unlock"},"here"))),(0,o.kt)("p",null,"Choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Mnenomic Phrase"),", paste the mnemonic you get above and set your session password:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create key",src:t(41982).Z,width:"1990",height:"1696"})),(0,o.kt)("p",null,"Your wallet will be unlocked and you can get your address here (for this example it is ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnb14m2gcdjq7aqkdtu2m9qrqrl8eevzpqfj9xc0uu"),"):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create key",src:t(47661).Z,width:"1054",height:"520"})),(0,o.kt)("h3",{id:"account-management-with-bnbcli"},"Account Management With Bnbcli"),(0,o.kt)("p",null,"You can get ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli")," by following instructions ",(0,o.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/api-reference/cli"},"here"),"."),(0,o.kt)("p",null,"You should get ",(0,o.kt)("inlineCode",{parentName:"p"},"mnemonic")," if you follow the instructions above. You can restore you key via ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Restore your key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys add test --recover\nEnter a passphrase for your key:\nRepeat the passphrase:\n> Enter your recovery seed phrase:\nmore advice achieve mass clap nose bike bird busy section rigid model doll exchange guard theme catalog junior patrol valley depart decade convince master\nNAME:   TYPE:   ADDRESS:                        PUBKEY:\ntest    local   tbnb14m2gcdjq7aqkdtu2m9qrqrl8eevzpqfj9xc0uu bnbp1addwnpepqt7nf2dwgfxv6kmzgwhzlp556yhdfeakfdejc6lp8xcddsv83kq552m63s9\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new key")),(0,o.kt)("p",null,"You can also create a new key and you will get a new mnemonic with ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys add new_key\nEnter a passphrase for your key:\nRepeat the passphrase:\nNAME:   TYPE:   ADDRESS:                        PUBKEY:\nnew_key local   tbnb1c5dxrdn9xuw0njwcyevzyjrza550z5au8v0hyz bnbp1addwnpepqwdsud63f5rq2wkgrezlvzdauf4x7wp3defzvhrzkwdzl7p0n6uk666ghpa\n**Important** write this seed phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nnapkin degree boring custom differ smart bundle ball length lyrics auto forest jeans awake entry vocal there repeat rule churn picnic promote screen skull\n")),(0,o.kt)("h3",{id:"query-account-balance"},"Query Account Balance"),(0,o.kt)("p",null,"Please note that the amount is boosted by ",(0,o.kt)("strong",{parentName:"p"},"e^8")," for the decimal part."),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$  ./bnbcli account bnc1wwgakqy32m7vdnlf00pctf9hnaak37eh7wkmqa --trust-node --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443\n")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$  ./tbnbcli account bnc1wwgakqy32m7vdnlf00pctf9hnaak37eh7wkmqa --trust-node --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80\n{\n   "type":"bnbchain/Account",\n   "value":{\n      "base":{\n         "address":"bnc1wwgakqy32m7vdnlf00pctf9hnaak37eh7wkmqa",\n         "coins":[\n            {\n               "denom":"AAA-254",\n               "amount":"19500000000000000"\n            }\n         ],\n         "public_key":{\n            "type":"tendermint/PubKeySecp256k1",\n            "value":"A1V88I61gCbF2V1RqdCxb0UN/8g95mNUlJGH5htNNC70"\n         },\n         "account_number":"0",\n         "sequence":"337"\n      },\n      "name":"node0",\n      "frozen":null,\n      "locked":null\n   }\n}\n')),(0,o.kt)("h2",{id:"get-testnet-bnb"},"Get Testnet BNB"),(0,o.kt)("p",null,"You can get test BNB by following ",(0,o.kt)("a",{parentName:"p",href:"https://www.binance.vision/tutorials/binance-dex-funding-your-testnet-account"},"this guide"),"."))}d.isMDXComponent=!0},58169:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create_key_1-fd9559a107b24cf93b1ca8d4a57a4a5a.png"},35333:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create_key_2-a075e3d1e5906367e390b1c572344bb3.png"},41982:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create_key_3-bd68f07473934e83750349a4f20e5e3e.png"},47661:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create_key_4-a8214042f753712e0d7445d917a41142.png"}}]);