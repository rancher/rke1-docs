"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4984],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8498:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={title:"Metrics Server",weight:263},c=void 0,l={unversionedId:"config-options/add-ons/metrics-server/metrics-server",id:"config-options/add-ons/metrics-server/metrics-server",title:"Metrics Server",description:"By default, RKE deploys Metrics Server to provide metrics on resources in your cluster.",source:"@site/docs/config-options/add-ons/metrics-server/metrics-server.md",sourceDirName:"config-options/add-ons/metrics-server",slug:"/config-options/add-ons/metrics-server/",permalink:"/rke1-docs/config-options/add-ons/metrics-server/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/add-ons/metrics-server/metrics-server.md",tags:[],version:"current",lastUpdatedAt:1673916109,formattedLastUpdatedAt:"1/17/2023",frontMatter:{title:"Metrics Server",weight:263}},p={},u=[{value:"Tolerations",id:"tolerations",level:3},{value:"Metrics Server Priority Class Name",id:"metrics-server-priority-class-name",level:3},{value:"Disabling the Metrics Server",id:"disabling-the-metrics-server",level:3}],m={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, RKE deploys ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/metrics-server"},"Metrics Server")," to provide metrics on resources in your cluster."),(0,o.kt)("p",null,"RKE will deploy Metrics Server as a Deployment."),(0,o.kt)("p",null,"The image used for Metrics Server is under the ",(0,o.kt)("a",{parentName:"p",href:"config-options/system-images/"},(0,o.kt)("inlineCode",{parentName:"a"},"system_images")," directive"),". For each Kubernetes version, there is a default image associated with the Metrics Server, but these can be overridden by changing the image tag in ",(0,o.kt)("inlineCode",{parentName:"p"},"system_images"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tolerations"},"Tolerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#metrics-server-priority-class-name"},"Priority Class Name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#disabling-the-metrics-server"},"Disabling the Metrics Server"))),(0,o.kt)("h3",{id:"tolerations"},"Tolerations"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.2.4")),(0,o.kt)("p",null,"The configured tolerations apply to the ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics-server")," Deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'monitoring:\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n')),(0,o.kt)("p",null,"To check for applied tolerations on the ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics-server")," Deployment, use the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n kube-system get deploy metrics-server -o jsonpath='{.spec.template.spec.tolerations}'\n")),(0,o.kt)("h3",{id:"metrics-server-priority-class-name"},"Metrics Server Priority Class Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of RKE v1.2.6+")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority"},"pod priority")," is set by configuring a priority class name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"monitoring:\n  provider: metrics-server\n  metrics_server_priority_class_name: system-cluster-critical\n")),(0,o.kt)("h3",{id:"disabling-the-metrics-server"},"Disabling the Metrics Server"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,o.kt)("p",null,"You can disable the default controller by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," to the monitoring ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," directive in the cluster configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"monitoring:\n  provider: none\n")))}d.isMDXComponent=!0}}]);