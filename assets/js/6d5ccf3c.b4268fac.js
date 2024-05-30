"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={},l="Run Full Node to Join BNB Beacon Chain",r={unversionedId:"beaconchain/fullnode",id:"beaconchain/fullnode",title:"Run Full Node to Join BNB Beacon Chain",description:"A full node of BNB Beacon Chain  is a witness, which observes the consensus messaging, downloads blocks from data seed nodes and executes business logic to achieve the consistent state as validator node (and other full node). Full nodes also help the network by accepting transactions from other nodes and then relaying them to the core BNB Chain network.",source:"@site/docs/beaconchain/fullnode.md",sourceDirName:"beaconchain",slug:"/beaconchain/fullnode",permalink:"/docs/beaconchain/fullnode",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/fullnode.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Minimum System Requirements",id:"minimum-system-requirements",level:2},{value:"Steps to Run a Full Node",id:"steps-to-run-a-full-node",level:2},{value:"Initialize Home Folder",id:"initialize-home-folder",level:3},{value:"Setup Configuration",id:"setup-configuration",level:3},{value:"Add Seed Nodes",id:"add-seed-nodes",level:3},{value:"Config Syncing",id:"config-syncing",level:3},{value:"Additional Configuration",id:"additional-configuration",level:4},{value:"Start your node",id:"start-your-node",level:3},{value:"Details on Sync Mode",id:"details-on-sync-mode",level:4},{value:"Fast Sync",id:"fast-sync",level:5},{value:"State Sync",id:"state-sync",level:5},{value:"Hot Sync",id:"hot-sync",level:5},{value:"Monitor Syncing Process",id:"monitor-syncing-process",level:5},{value:"Upgrading Full Node",id:"upgrading-full-node",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Get Extra Data From Your Full Node",id:"get-extra-data-from-your-full-node",level:2},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-full-node-to-join-bnb-beacon-chain"},"Run Full Node to Join BNB Beacon Chain"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"full node")," of BNB Beacon Chain  is a ",(0,a.kt)("inlineCode",{parentName:"p"},"witness"),", which observes the consensus messaging, downloads blocks from ",(0,a.kt)("inlineCode",{parentName:"p"},"data seed nodes")," and executes business logic to achieve the consistent state as ",(0,a.kt)("inlineCode",{parentName:"p"},"validator node")," (and other ",(0,a.kt)("inlineCode",{parentName:"p"},"full node"),"). Full nodes also help the network by accepting transactions from other nodes and then relaying them to the core BNB Chain network."),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("p",null,"We support running a full node on ",(0,a.kt)("inlineCode",{parentName:"p"},"Mac OS X"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Windows")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Linux"),"."),(0,a.kt)("h2",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,a.kt)("p",null,"The hardware must meet certain requirements to run a full node."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Desktop or laptop hardware running recent versions of Mac OS X, Windows, or Linux."),(0,a.kt)("li",{parentName:"ul"},"500 GB of free disk space, accessible at a minimum read/write speed of 100 MB/s."),(0,a.kt)("li",{parentName:"ul"},"4 cores of CPU and 8 gigabytes of memory (RAM)."),(0,a.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of at least 1 megabyte per second"),(0,a.kt)("li",{parentName:"ul"},"Your full node has to run at least 4 hours per 24 hours in order to catch up with BNB Beacon Chain\nMore hours will be better, run your node continuously for best results.")),(0,a.kt)("h2",{id:"steps-to-run-a-full-node"},"Steps to Run a Full Node"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download Binary")),(0,a.kt)("p",null,"Open the following page and download the binaries for your platform, as well as configuration files for mainnet or testnet ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/bnb-chain/node/releases\n")),(0,a.kt)("p",null,"Please go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases"},"changelog")," to get the information about the latest release of full node version."),(0,a.kt)("p",null,"Download the configuration files according to the network you want to join in (mainnet_config.zip/testnet_config.zip)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"upzip linux_binary.zip\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Copy the executables (i.e.",(0,a.kt)("inlineCode",{parentName:"li"},"bnbchaind")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"bnbcli"),") to ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin"))),(0,a.kt)("h3",{id:"initialize-home-folder"},"Initialize Home Folder"),(0,a.kt)("p",null,"First you need to choose a home folder ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME")," (i.e. ~/.bnbchaind) for BNB Beacon Chain .",(0,a.kt)("br",null),"\nYou can setup this by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir ~/.bnbchaind\nmkdir ~/.bnbchaind/config\n")),(0,a.kt)("h3",{id:"setup-configuration"},"Setup Configuration"),(0,a.kt)("p",null,"Put ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," from mainnet_config.zip/testnet_config.zip into ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config")),(0,a.kt)("h3",{id:"add-seed-nodes"},"Add Seed Nodes"),(0,a.kt)("p",null,"For a full node to function, it must connect to one or more known nodes to join BNB Beacon Chain .",(0,a.kt)("br",null),"\nThere are several famous ",(0,a.kt)("inlineCode",{parentName:"p"},"seed nodes")," that offer known node addresses in the network to newly joined full nodes.",(0,a.kt)("br",null),"\nThey are already in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," file, which sits in mainnet_config.zip/testnet_config.zip."),(0,a.kt)("p",null,"You cat also get seeds info through a simple python script (replace domain name depending on which network you are using):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import requests, json\nd = requests.get(\'https://dex.binance.org/api/v1/peers\').text # replace dex.binance.org with testnet-dex.binance.org for testnet\nl = json.loads(d)\nseeds = ",".join([ (seed["id"]+"@"+seed["original_listen_addr"]) for seed in l if seed["accelerated"] == False])\nprint (seeds)\n')),(0,a.kt)("p",null,"If you want to add seed nodes, please feel free to edit the field ",(0,a.kt)("inlineCode",{parentName:"p"},"seeds")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/config.yaml")," with returned seed node info from previous request."),(0,a.kt)("h3",{id:"config-syncing"},"Config Syncing"),(0,a.kt)("p",null,"BNB Beacon Chain  is making blocks at a very fast pace and its block height is over 60 million. As a result, it will take a long time to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#fast-sync"},"fast-sync"))," (download all the blocks from genesis block). To decrease the waiting time, an innovative way of syncing a fullnode is introduced and it's called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#state-sync"},"state-sync")),". ",(0,a.kt)("strong",{parentName:"p"},"State Sync")," is the default way of syncing in the published config files. If you need to switch to ",(0,a.kt)("strong",{parentName:"p"},"Fast Sync"),", you need to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," accordingly. You can read more in the following sections."),(0,a.kt)("h4",{id:"additional-configuration"},"Additional Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log: The log file is under ",(0,a.kt)("inlineCode",{parentName:"li"},"home"),"- the directory specified when starting ",(0,a.kt)("inlineCode",{parentName:"li"},"bnbchaind"),".",(0,a.kt)("br",null),"\nThe latest log file is ",(0,a.kt)("inlineCode",{parentName:"li"},"bnc.log"),". The process will create a new log file every one hour.",(0,a.kt)("br",null),"\nTo make sure you have sufficient disk space to keep the log files, we strongly recommend you to change the log location by changing ",(0,a.kt)("inlineCode",{parentName:"li"},"logFileRoot")," option in ",(0,a.kt)("inlineCode",{parentName:"li"},"$BNCHOME/config/app.toml"),".",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"Service Port: RPC service listens on port ",(0,a.kt)("inlineCode",{parentName:"li"},"27147")," and P2P service listens on port ",(0,a.kt)("inlineCode",{parentName:"li"},"27146")," by default.",(0,a.kt)("br",null),"\nMake sure these two ports are open before starting a full node, unless the full node has to listen on other ports."),(0,a.kt)("li",{parentName:"ul"},"Store: All the state and block data will store under ",(0,a.kt)("inlineCode",{parentName:"li"},"$BNCHOME/data"),", do not delete or edit any of these files.")),(0,a.kt)("h3",{id:"start-your-node"},"Start your node"),(0,a.kt)("p",null,"Start the full node according to the place of your executables.",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bnbchaind start --home $BNCHOME&\n")),(0,a.kt)("p",null,"Only after catching up with BNB Beacon Chain , the fullnode can handle requests correctly."),(0,a.kt)("h4",{id:"details-on-sync-mode"},"Details on Sync Mode"),(0,a.kt)("p",null,"There are three ways for you to get synced with other peers in blockchain network:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fast Sync"),(0,a.kt)("li",{parentName:"ul"},"State Sync"),(0,a.kt)("li",{parentName:"ul"},"Hot Sync")),(0,a.kt)("p",null,"These methods can be used together."),(0,a.kt)("h5",{id:"fast-sync"},"Fast Sync"),(0,a.kt)("p",null,"The default way for syncing with other data seed node is fast sync.",(0,a.kt)("br",null),"\nIn fast sync, you need to download all the blocks from the genesis block and execute all the transaction in every block until it is synced with its peers.",(0,a.kt)("br",null),"\nThe sync speed is about 20 blocks/s, which is slower than state sync."),(0,a.kt)("p",null,"Configuration is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/config.toml"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fast_sync")," Must be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state_sync_reactor")," Can be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state_sync")," Can be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state_sync_height")," should be less than 0, like ",(0,a.kt)("inlineCode",{parentName:"li"},"-1"))),(0,a.kt)("h5",{id:"state-sync"},"State Sync"),(0,a.kt)("p",null,"As explained in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP18.md"},"BEP18"),", State sync will get the application state of your full node to be up to date without downloading all of the blocks.The sync speed is faster than fast sync.",(0,a.kt)("br",null),"\nNow you do not need to allocate more memories to your full node for this feature to work."),(0,a.kt)("p",null,"Configuration is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/config.toml"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state_sync_reactor")," Must be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recv_rate")," Must set to ",(0,a.kt)("inlineCode",{parentName:"li"},"102428800")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ping_interval")," Recommendation is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"10m30s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pong_timeout")," Recommendation is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"450s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state_sync_height")," Recommendation is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),", so it allows to state sync from the peers's latest height. Please do not change the height to other number, unless you are doing some debug.")),(0,a.kt)("p",null,"State sync can help fullnode in same status with other peers within short time (according to our test, a one month ~800M DB snapshot in BNB Beacon Chain  testnet can be synced in around 45 minutes) so that you can receive latest blocks/transactions and query latest status of orderbook, account balances etc.. But state sync DOES NOT download historical blocks before state sync height, if you start your node with state sync and it synced at height 10000, then your local database would only have blocks after height 10000."),(0,a.kt)("p",null,"If full node has already started, suggested way is to delete the (after backup) ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data")," directory and ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/priv_validator_key.json")," before enabling state sync."),(0,a.kt)("p",null,"State sync will run only once after you start your full node. Once state sync succeeds, later fullnode restart would not state sync anymore. But if you do want state sync again, you need to delete ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data/STATESYNC.LOCK"),"."),(0,a.kt)("p",null,"If you turn on the ",(0,a.kt)("inlineCode",{parentName:"p"},"state_sync_reactor"),", the snapshots of heights will be saved at ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/data/snapshot/<height>")," automatically. To save disk space, you can delete the directory or turn off the  ",(0,a.kt)("inlineCode",{parentName:"p"},"state_sync_reactor"),"."),(0,a.kt)("h5",{id:"hot-sync"},"Hot Sync"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note that this feature is still expreimental and is not recommended.")),(0,a.kt)("p",null,"In BNB Beacon Chain  network, almost every fullnode operator will first enable ",(0,a.kt)("inlineCode",{parentName:"p"},"state-sync")," to get synced with peers. After downloading all the state machine changes, the fullnode will go back to ",(0,a.kt)("inlineCode",{parentName:"p"},"fast-sync")," mode and eventually in ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus")," mode.  In fast-sync mode, the fullnode will have high delay because it needs to be aware of peers\u2019 heights. It downloads all the blocks in parallel and verifying their commits. On the other hand, when a fullnode is under ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus")," state, it will consume a lot of bandwidth and CPU resources because it receives a lot of redundant messages for consensus engine and writes more WAL.\nTo increase the efficiency for fullnodes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"hot-sync")," protocol is introduced. A fullnode under ",(0,a.kt)("inlineCode",{parentName:"p"},"hot-sync")," protocol will pull the blocks from its peers and it will subscribe these blocks in advance. It will skip the message for prevotes and only subscribe to maj23 precommit and block proposal messages. At the same time, it will put its peers in different buckets and subscribe to peers in active buckets. ",(0,a.kt)("inlineCode",{parentName:"p"},"Hot-Sync")," can help fullnodes gossip blocks in low latency, while cost less network, memory, cpu and disk resources than Tendermint consensus protocol. Even cheap hardware can easily run a fullnode, and a  fullnode can connect with more peers than before by saving network and CPU resources."),(0,a.kt)("p",null,"The state transition of a hot sync reactor can be of three part:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                              Hot --\x3e Consensus\n                                 ^    ^\n                                 |   /\n                                 |  /\n                                Mute\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Mute"),": will only answer subscribe requests from others, will not sync from others or from consensus reactor. The Hot Sync reactor stays in ",(0,a.kt)("inlineCode",{parentName:"li"},"Mute")," when it is fast syncing."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Hot"),":  handle subscribe requests from other peers as a publisher, also subscribe block messages from other peers as a subscriber. A non-validators will stay in ",(0,a.kt)("inlineCode",{parentName:"li"},"Hot")," when the peer have catch up after fast syncing."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Consensus"),": handle subscribes requests from other peers as a publisher, but get block/commit message from consensus reactor. A sentry node should stay in ",(0,a.kt)("inlineCode",{parentName:"li"},"Consensus"),". Or a non-validator should switch from ",(0,a.kt)("inlineCode",{parentName:"li"},"Hot")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Consensus")," when it become a validator.")),(0,a.kt)("p",null,"Configuration is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/config.toml"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hot_sync_reactor")," Must be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hot_sync")," Can be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hot_sync_timeout")," is the max wait time for subscribe a block. It only takes effect when hot_sync is true")),(0,a.kt)("h5",{id:"monitor-syncing-process"},"Monitor Syncing Process"),(0,a.kt)("p",null,"You can verify if state sync is done by ",(0,a.kt)("inlineCode",{parentName:"p"},"curl localhost:27147/status")," several times and see whether ",(0,a.kt)("inlineCode",{parentName:"p"},"latest_block_height")," is increasing in response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"sync_info": {\n  ...\n  "latest_block_height": "878092",\n  "latest_block_time": "2019-04-15T00:01:22.610803768Z",\n  ...\n}\n')),(0,a.kt)("p",null,"If state sync did not succeed, please repeat deletion of ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data")," directory and ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/priv_validator_key.json")," before starting full node next time in case of data inconsistency."),(0,a.kt)("p",null,"Once state sync succeeded, later full node restart would not state sync anymore (in case the local blocks are not continuous).",(0,a.kt)("br",null),"\nBut if you do want state sync again (don't care that there are missing blocks between last stop and latest state sync snapshot) and you want to keep already synced blocks, you can just delete ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data/STATESYNC.LOCK"),"."),(0,a.kt)("p",null,"For example, you start your full node at Jan 1st with state sync at height 10000 and after a while you shut it down at height 22000 on Feb 10th.",(0,a.kt)("br",null),"\nNow its Mar 1st, latest sync-able block height is 50000, you don't care blocks between 22000 and 50000, you can delete ",(0,a.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data/STATESYNC.LOCK")," before start your node.",(0,a.kt)("br",null),"\nThen the full node would continue state sync from height 50000."),(0,a.kt)("p",null,"Turning off ",(0,a.kt)("inlineCode",{parentName:"p"},"state_sync_reactor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"state_sync")," can save your memory after you successfully state synced."),(0,a.kt)("h2",{id:"upgrading-full-node"},"Upgrading Full Node"),(0,a.kt)("p",null,"In most cases, download the new binary and replace it, then restart the full node.",(0,a.kt)("br",null),"\nIn special cases, you may have to do extra steps for an incompatible version (hard fork)."),(0,a.kt)("h2",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"Prometheus is enabled on port ",(0,a.kt)("inlineCode",{parentName:"p"},"28660")," by default, and the endpoint is ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics"),"."),(0,a.kt)("h2",{id:"get-extra-data-from-your-full-node"},"Get Extra Data From Your Full Node"),(0,a.kt)("p",null,"Full node has the same RPC interface as the one listed here ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/node-rpc"},"rpc-api")),(0,a.kt)("p",null,"If you want to get extra information about order book, balance changes or block fee changes from blocks, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-extra-data-from-fullnode"},"getting extra data from fullnode"),"."),(0,a.kt)("h2",{id:"common-issues-and-solutions"},"Common Issues and Solutions"),(0,a.kt)("p",null,"Please refer to this ",(0,a.kt)("a",{parentName:"p",href:"/docs/fullnodeissue"},"doc")," to find answers to common issues."))}p.isMDXComponent=!0}}]);