"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8022],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,x=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(x,c(c({ref:t},p),{},{components:n})):r.createElement(x,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={title:"External etcd",weight:232},l=void 0,s={unversionedId:"config-options/services/external-etcd/external-etcd",id:"config-options/services/external-etcd/external-etcd",title:"External etcd",description:"By default, RKE will launch etcd servers, but RKE also supports being able to use an external etcd. RKE only supports connecting to a TLS enabled etcd setup.",source:"@site/docs/config-options/services/external-etcd/external-etcd.md",sourceDirName:"config-options/services/external-etcd",slug:"/config-options/services/external-etcd/",permalink:"/config-options/services/external-etcd/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/config-options/services/external-etcd/external-etcd.md",tags:[],version:"current",lastUpdatedAt:1660909784,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"External etcd",weight:232},sidebar:"mySidebar",previous:{title:"System Images",permalink:"/config-options/system-images/"},next:{title:"Extra Args, Extra Binds, and Extra Environment Variables",permalink:"/config-options/services/services-extras/"}},p={},u=[{value:"External etcd Options",id:"external-etcd-options",level:2},{value:"Path",id:"path",level:3},{value:"External URLs",id:"external-urls",level:3},{value:"CA Cert/Cert/KEY",id:"ca-certcertkey",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, RKE will launch etcd servers, but RKE also supports being able to use an external etcd. RKE only supports connecting to a TLS enabled etcd setup."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," RKE will not accept having external etcd servers in conjunction with ",(0,a.kt)("a",{parentName:"p",href:"config-options/nodes/"},"nodes")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n    etcd:\n      path: /etcdcluster\n      external_urls:\n        - https://etcd-example.com:2379\n      ca_cert: |-\n        -----BEGIN CERTIFICATE-----\n        xxxxxxxxxx\n        -----END CERTIFICATE-----\n      cert: |-\n        -----BEGIN CERTIFICATE-----\n        xxxxxxxxxx\n        -----END CERTIFICATE-----\n      key: |-\n        -----BEGIN PRIVATE KEY-----\n        xxxxxxxxxx\n        -----END PRIVATE KEY-----\n")),(0,a.kt)("h2",{id:"external-etcd-options"},"External etcd Options"),(0,a.kt)("h3",{id:"path"},"Path"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," defines the location of where the etcd cluster is on the endpoints."),(0,a.kt)("h3",{id:"external-urls"},"External URLs"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"external_urls")," are the endpoints of where the etcd cluster is hosted. There can be multiple endpoints for the etcd cluster."),(0,a.kt)("h3",{id:"ca-certcertkey"},"CA Cert/Cert/KEY"),(0,a.kt)("p",null,"The certificates and private keys used to authenticate and access the etcd service."))}f.isMDXComponent=!0}}]);