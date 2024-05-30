"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Node Maintenance",hide_table_of_contents:!1,sidebar_position:2},i="Node Maintainence",l={unversionedId:"validator/node-maintenance",id:"validator/node-maintenance",title:"Node Maintainence",description:"Binary",source:"@site/docs/validator/node-maintenance.md",sourceDirName:"validator",slug:"/validator/node-maintenance",permalink:"/bnbchain-docsite/docs/validator/node-maintenance",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/node-maintenance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Node Maintenance",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BNB Smart Chain Boot Nodes",permalink:"/bnbchain-docsite/docs/boot-nodes"},next:{title:"Upgrading Geth",permalink:"/bnbchain-docsite/docs/validator/upgrade-fullnode"}},s={},d=[{value:"Binary",id:"binary",level:3},{value:"Storage",id:"storage",level:3},{value:"Prune State",id:"prune-state",level:4},{value:"How to Prune",id:"how-to-prune",level:5},{value:"Prune Ancient Data in Real Time",id:"prune-ancient-data-in-real-time",level:4},{value:"How to use the flag",id:"how-to-use-the-flag",level:5},{value:"Prune Block Tools",id:"prune-block-tools",level:4},{value:"How to prune",id:"how-to-prune-1",level:5},{value:"Light Storage",id:"light-storage",level:3},{value:"Upgrade Geth",id:"upgrade-geth",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-maintainence"},"Node Maintainence"),(0,r.kt)("h3",{id:"binary"},"Binary"),(0,r.kt)("p",null,"All the clients are suggested to upgrade to the latest release. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/latest"},"latest version")," is supposed to be more stable and has better performance."),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("h4",{id:"prune-state"},"Prune State"),(0,r.kt)("p",null,"According to the test, the performance of a full node will degrade when the storage size reaches a high volume(previously it was 1.5TB, which is an experimental value, the latest number needs to be updated). We suggest that the fullnode always keep light storage by pruning the storage."),(0,r.kt)("h5",{id:"how-to-prune"},"How to Prune"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the BSC node."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"nohup geth snapshot prune-state --datadir {the data dir of your bsc node} &"),". It will take 3-5 hours to finish."),(0,r.kt)("li",{parentName:"ol"},"Start the node once it is done.")),(0,r.kt)("p",null,"The maintainers should always have a few backup nodes in case one of the nodes is getting pruned.\nThe hardware is also important, ",(0,r.kt)("strong",{parentName:"p"},"make sure the SSD meets: 3 TB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 500 MB/S throughput, read latency <1ms (if node is started with snap sync, it will need NVMe SSD)"),"."),(0,r.kt)("h4",{id:"prune-ancient-data-in-real-time"},"Prune Ancient Data in Real Time"),(0,r.kt)("p",null,"Ancient data is block data that is already considered immutable. This is determined by a threshold which is currently set at 90000. This means that blocks older than 90000 are considered ancient data. We recommend the ",(0,r.kt)("inlineCode",{parentName:"p"},"--prunceancient")," flag to users who don't care about the ancient data. This is also advised for users who want to save disk space since this will only keep data for the latest 90000 blocks.  Note that once this flag is turned on, the ancient data will not be recovered again and you cannot go back running your node without this flag in the start-up command. "),(0,r.kt)("h5",{id:"how-to-use-the-flag"},"How to use the flag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./geth --tries-verify-mode none --config /server/config.toml --datadir /server/node --cache 8000 --rpc.allow-unprotected-txs --history.transactions 0 --pruneancient=true --syncmode=full\n")),(0,r.kt)("h4",{id:"prune-block-tools"},"Prune Block Tools"),(0,r.kt)("p",null,"A new offline feature introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/tag/v1.1.8"},"v1.1.8")," to prune undesired ancient block data. It will discard block, receipt, and header in the ancient database to save space."),(0,r.kt)("h5",{id:"how-to-prune-1"},"How to prune"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the BSC Node."),(0,r.kt)("li",{parentName:"ol"},"Run ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./geth snapshot prune-block --datadir /server/node --datadir.ancient ./chaindata/ancient --block-amount-reserved 1024\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"block-amount-reserved")," is the number of ancient data blocks that you want to keep after pruning. "),(0,r.kt)("h3",{id:"light-storage"},"Light Storage"),(0,r.kt)("p",null,"When the node crashes or been force killed, the node will sync from a block that was a few minutes or a few hours ago. This is because the state in memory is not persisted into the database in real time, and the node needs to replay blocks from the last checkpoint once it start. The replaying time depends on the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"TrieTimeout")," in the config.toml.  We suggest you raise it if you can tolerate with long replaying time, so the node can keep light storage."),(0,r.kt)("h2",{id:"upgrade-geth"},"Upgrade Geth"),(0,r.kt)("p",null,"Please read ",(0,r.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/upgrade-fullnode"},"this guide")))}p.isMDXComponent=!0}}]);