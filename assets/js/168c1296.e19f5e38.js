"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,h=u["".concat(c,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},38956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"BNB Smart Chain Docker",hide_table_of_contents:!1,sidebar_position:2},l="How to Run A Fullnode Using BSC Docker Image",i={unversionedId:"validator/docker",id:"validator/docker",title:"How to Run A Fullnode Using BSC Docker Image",description:"Resources",source:"@site/docs/validator/docker.md",sourceDirName:"validator",slug:"/validator/docker",permalink:"/bnbchain-docsite/docs/validator/docker",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Docker",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Upgrading Geth",permalink:"/bnbchain-docsite/docs/validator/upgrade-fullnode"},next:{title:"Using ChainIDE",permalink:"/bnbchain-docsite/docs/chainide"}},c={},s=[{value:"Resources",id:"resources",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Steps to Run a Fullnode in Docker",id:"steps-to-run-a-fullnode-in-docker",level:2},{value:"Install Docker",id:"install-docker",level:3},{value:"Post install:",id:"post-install",level:4},{value:"Pull BSC Node Image",id:"pull-bsc-node-image",level:3},{value:"Download BSC Node Config Files",id:"download-bsc-node-config-files",level:3},{value:"Running Docker Container",id:"running-docker-container",level:3},{value:"How to access the container",id:"how-to-access-the-container",level:3},{value:"How to Check Node Running Status",id:"how-to-check-node-running-status",level:3},{value:"Check Synchronization",id:"check-synchronization",level:4},{value:"Check Geth Logs",id:"check-geth-logs",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-run-a-fullnode-using-bsc-docker-image"},"How to Run A Fullnode Using BSC Docker Image"),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker image: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc/pkgs/container/bsc"},"https://github.com/bnb-chain/bsc/pkgs/container/bsc")),(0,a.kt)("li",{parentName:"ul"},"Dockerfile: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc/blob/master/Dockerfile"},"https://github.com/bnb-chain/bsc/blob/master/Dockerfile"))),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("p",null,"We support running a BSC docker image on ",(0,a.kt)("strong",{parentName:"p"},"Mac OS X"),", ",(0,a.kt)("strong",{parentName:"p"},"Linux"),", and ",(0,a.kt)("strong",{parentName:"p"},"Windows"),"."),(0,a.kt)("h2",{id:"steps-to-run-a-fullnode-in-docker"},"Steps to Run a Fullnode in Docker"),(0,a.kt)("h3",{id:"install-docker"},"Install Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Desktop Users: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")),(0,a.kt)("li",{parentName:"ul"},"Ubuntu Linux: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/"))),(0,a.kt)("h4",{id:"post-install"},"Post install:"),(0,a.kt)("p",null,"Start docker during boot up:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl enable docker.service\nsystemctl enable containerd.service\n")),(0,a.kt)("p",null,'Add user "ubuntu" to group docker so the user has privileges to run docker commands:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usermod -aG docker ubuntu\n")),(0,a.kt)("h3",{id:"pull-bsc-node-image"},"Pull BSC Node Image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get latest version: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc/pkgs/container/bsc"},"https://github.com/bnb-chain/bsc/pkgs/container/bsc"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull ghcr.io/bnb-chain/bsc:1.1.18_hf\n")),(0,a.kt)("h3",{id:"download-bsc-node-config-files"},"Download BSC Node Config Files"),(0,a.kt)("p",null,"Download ",(0,a.kt)("strong",{parentName:"p"},"genesis.json")," and ",(0,a.kt)("strong",{parentName:"p"},"config.toml")," by:"),(0,a.kt)("p",null,"Mainnet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n')),(0,a.kt)("p",null,"Testnet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep testnet |cut -d\\" -f4)\nunzip testnet.zip\n')),(0,a.kt)("h3",{id:"running-docker-container"},"Running Docker Container"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Dockers Variables and Config file Location")),(0,a.kt)("p",null,"Important ",(0,a.kt)("strong",{parentName:"p"},"Environment Variables")," to note: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$BSC_HOME = /bsc\n$DATA_DIR = /data\n")),(0,a.kt)("p",null,"File location:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BSC_CONFIG=${BSC_HOME}/config/config.toml"),(0,a.kt)("li",{parentName:"ul"},"BSC_GENESIS=${BSC_HOME}/config/genesis.json")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Docker Volumes to Mount")),(0,a.kt)("p",null,"Essentially we need to bind mount two directories: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Mount"),(0,a.kt)("th",{parentName:"tr",align:null},"Local"),(0,a.kt)("th",{parentName:"tr",align:null},"Docker"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blockchain data"),(0,a.kt)("td",{parentName:"tr",align:null},"data/node"),(0,a.kt)("td",{parentName:"tr",align:null},"/bsc/node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Config files"),(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},"/bsc/config")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download data on local host\nDownload latest chaindata snapshot from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-snapshots"},"here"),". Follow the guide to structure your files.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start container"))),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("em",{parentName:"p"},"ETHEREUM OPTIONS")," to overwrite settings in the configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v $(pwd)/config:/bsc/config -v $(pwd)/data/node:/bsc/node -p 8575:8575 --rm --name bsc -it ghcr.io/bnb-chain/bsc:1.1.18_hr --http.addr 0.0.0.0 --http.port 8575 --http.vhosts '*' --verbosity 5\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"-p 8575:8575"),": This will map port 8575 from host to container, so it exposes 8575 on host node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"--http --http.addr 0.0.0.0"),": Extra Geth flags to enable RPC and listen on all network interfaces of the container.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": port ",(0,a.kt)("strong",{parentName:"p"},"8575")," is the default port for the RPC service on TESTNET. If you are using mainnet the default port is ",(0,a.kt)("strong",{parentName:"p"},"8545"),"."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Start Geth console")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"geth attach http://localhost:8575\n")),(0,a.kt)("h3",{id:"how-to-access-the-container"},"How to access the container"),(0,a.kt)("p",null,"Execute bash (shell/terminal) on the container named bsc:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec -it bsc bash\n")),(0,a.kt)("p",null,"Once logged in you can perform regular tasks you would do on a node without docker."),(0,a.kt)("h3",{id:"how-to-check-node-running-status"},"How to Check Node Running Status"),(0,a.kt)("h4",{id:"check-synchronization"},"Check Synchronization"),(0,a.kt)("p",null,"Start Geth Console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"geth attach ipc:node/geth.ipc\n")),(0,a.kt)("p",null,"Once started, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">eth.syncing\n")),(0,a.kt)("h4",{id:"check-geth-logs"},"Check Geth Logs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tail -f node/bsc.log\n")))}d.isMDXComponent=!0}}]);