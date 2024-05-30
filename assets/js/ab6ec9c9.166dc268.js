"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5766],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||a;return t?o.createElement(m,r(r({ref:n},d),{},{components:t})):o.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const a={sidebar_label:"Types",sidebar_position:2,hide_table_of_contents:!1},r="Encoding",s={unversionedId:"beaconchain/learn/encoding/encoding",id:"beaconchain/learn/encoding/encoding",title:"Encoding",description:"The Cosmos SDK utilizes two binary wire encoding protocols, BNB Beacon Chain  Amino",source:"@site/docs/beaconchain/learn/encoding/encoding.md",sourceDirName:"beaconchain/learn/encoding",slug:"/beaconchain/learn/encoding/",permalink:"/bnbchain-docsite/docs/beaconchain/learn/encoding/",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/learn/encoding/encoding.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Types",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Transaction Encoding Specification",permalink:"/bnbchain-docsite/docs/encoding"},next:{title:"Encoding Examples",permalink:"/bnbchain-docsite/docs/beaconchain/learn/encoding/amino-example"}},c={},l=[{value:"Amino",id:"amino",level:2},{value:"Gogoproto",id:"gogoproto",level:2}],d={toc:l},p="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"encoding"},"Encoding"),(0,i.kt)("p",null,"The Cosmos SDK utilizes two binary wire encoding protocols, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bnc-go-amino"},"BNB Beacon Chain  Amino"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers"),", where Amino is an object encoding specification. It is a subset of Proto3 with an extension for interface support. See the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"Proto3 spec"),"\nfor more information on Proto3, which Amino is largely compatible with (but not with Proto2)."),(0,i.kt)("p",null,"Due to Amino having significant performance drawbacks, being reflection-based, and not having any meaningful cross-language/client support, Protocol Buffers, specifically ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gogo/protobuf/"},"gogoprotobuf"),", is being used in place of Amino. Note, this process of using Protocol Buffers over Amino is still an ongoing process."),(0,i.kt)("p",null,"Binary wire encoding of types in the Cosmos SDK can be broken down into two main categories, client encoding and store encoding. Client encoding mainly revolves around transaction processing and signing, whereas store encoding revolves around types used in state-machine transitions and what is ultimately stored in the Merkle tree."),(0,i.kt)("p",null,'For store encoding, protobuf definitions can exist for any type and will typically have an Amino-based "intermediary" type. Specifically, the protobuf-based type definition is used for serialization and persistence, whereas the Amino-based type is used for business logic in the state-machine where they may converted back-n-forth. Note, the Amino-based types may slowly be phased-out in the future so developers should take note to use the protobuf message definitions where possible.'),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"codec")," package, there exists two core interfaces, ",(0,i.kt)("inlineCode",{parentName:"p"},"Marshaler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ProtoMarshaler"),", where the former encapsulates the current Amino interface except it operates on types implementing the latter instead of generic ",(0,i.kt)("inlineCode",{parentName:"p"},"interface{}")," types."),(0,i.kt)("p",null,"In addition, there exists three implementations of ",(0,i.kt)("inlineCode",{parentName:"p"},"Marshaler"),". The first being ",(0,i.kt)("inlineCode",{parentName:"p"},"AminoCodec"),", where both binary and JSON serialization is handled via Amino. The second being ",(0,i.kt)("inlineCode",{parentName:"p"},"ProtoCodec"),", where both binary and JSON serialization is handled via Protobuf. Finally, ",(0,i.kt)("inlineCode",{parentName:"p"},"HybridCodec"),", a codec that utilizes Protobuf for binary serialization and Amino for JSON serialization. The ",(0,i.kt)("inlineCode",{parentName:"p"},"HybridCodec")," is typically the codec that used in majority in situations as it's easier to use for client and state serialization."),(0,i.kt)("p",null,"This means that modules may use Amino or Protobuf encoding but the types must implement ",(0,i.kt)("inlineCode",{parentName:"p"},"ProtoMarshaler"),". If modules wish to avoid implementing this interface for their types, they may use an Amino codec directly."),(0,i.kt)("h2",{id:"amino"},"Amino"),(0,i.kt)("p",null,"Every module uses an Amino codec to serialize types and interfaces. This codec typically\nhas types and interfaces registered in that module's domain only (e.g. messages),\nbut there are exceptions like ",(0,i.kt)("inlineCode",{parentName:"p"},"x/gov"),". Each module exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterCodec")," function\nthat allows a user to provide a codec and have all the types registered. An application\nwill call this method for each necessary module."),(0,i.kt)("p",null,"Where there is no protobuf-based type definition for a module (see below), Amino\nis used to encode and decode raw wire bytes to the concrete type or interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"bz := keeper.cdc.MustMarshalBinaryBare(typeOrInterface)\nkeeper.cdc.MustUnmarshalBinaryBare(bz, &typeOrInterface)\n")),(0,i.kt)("p",null,"Note, there are length-prefixed variants of the above functionality and this is\ntypically used for when the data needs to be streamed or grouped together\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"ResponseDeliverTx.Data"),")"),(0,i.kt)("p",null,"Another important use of the Amino is the encoding and decoding of\n",(0,i.kt)("a",{parentName:"p",href:"/bnbchain-docsite/docs/beaconchain/learn/transaction"},"transactions"),". Transactions are defined by the application or\nthe SDK, but passed to the underlying consensus engine in order to be relayed to\nother peers. Since the underlying consensus engine is agnostic to the application,\nit only accepts transactions in the form of raw bytes. The encoding is done by an\nobject called ",(0,i.kt)("inlineCode",{parentName:"p"},"TxEncoder")," and the decoding by an object called ",(0,i.kt)("inlineCode",{parentName:"p"},"TxDecoder"),"."),(0,i.kt)("p",null,"A standard implementation of both these objects can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/master/x/auth"},(0,i.kt)("inlineCode",{parentName:"a"},"auth")," module"),":"),(0,i.kt)("h2",{id:"gogoproto"},"Gogoproto"),(0,i.kt)("p",null,"Modules are encouraged to utilize Protobuf encoding for their respective types.\nIf modules do not contain any interfaces (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Content"),"), then they\nmay simply accept a ",(0,i.kt)("inlineCode",{parentName:"p"},"Marshaler")," as the codec which is implemented via the ",(0,i.kt)("inlineCode",{parentName:"p"},"HybridCodec"),"\nwithout any further customization."),(0,i.kt)("p",null,"However, if modules are to handle type interfaces, they should seek to extend the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Marshaler")," interface contract for these types (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"MarshalAccount"),"). Note, they\nshould still use a ",(0,i.kt)("inlineCode",{parentName:"p"},"HybridCodec")," internally. These extended contracts will typically\nuse concrete types with unique ",(0,i.kt)("inlineCode",{parentName:"p"},"oneof")," messages."))}h.isMDXComponent=!0}}]);