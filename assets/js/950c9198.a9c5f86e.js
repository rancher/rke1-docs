"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7839],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7340:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Add-Ons",weight:260},d=void 0,s={unversionedId:"config-options/add-ons/add-ons",id:"config-options/add-ons/add-ons",title:"Add-Ons",description:"RKE supports configuring pluggable add-ons in the cluster YML. Add-ons are used to deploy several cluster components including:",source:"@site/docs/config-options/add-ons/add-ons.md",sourceDirName:"config-options/add-ons",slug:"/config-options/add-ons/",permalink:"/config-options/add-ons/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/config-options/add-ons/add-ons.md",tags:[],version:"current",lastUpdatedAt:1660909784,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Add-Ons",weight:260}},p={},u=[],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RKE supports configuring pluggable add-ons in the cluster YML. Add-ons are used to deploy several cluster components including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/network-plugins/"},"Network plug-ins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/ingress-controllers/"},"Ingress controller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/dns/"},"DNS provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/metrics-server/"},"Metrics Server"))),(0,o.kt)("p",null,"These add-ons require images that can be found under the ",(0,o.kt)("a",{parentName:"p",href:"config-options/system-images/"},(0,o.kt)("inlineCode",{parentName:"a"},"system_images")," directive"),". For each Kubernetes version, there are default images associated with each add-on, but these can be overridden by changing the image tag in ",(0,o.kt)("inlineCode",{parentName:"p"},"system_images"),"."),(0,o.kt)("p",null,"There are a few things worth noting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In addition to these pluggable add-ons, you can specify an add-on that you want deployed after the cluster deployment is complete."),(0,o.kt)("li",{parentName:"ul"},"As of v0.1.8, RKE will update an add-on if it is the same name."),(0,o.kt)("li",{parentName:"ul"},"Before v0.1.8, update any add-ons by using ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl edit"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#critical-and-non-critical-add-ons"},"Critical and Non-Critical Add-ons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#add-on-deployment-jobs"},"Add-on Deployment Jobs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#add-on-placement"},"Add-on Placement")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tolerations"},"Tolerations"))),(0,o.kt)("h1",{id:"critical-and-non-critical-add-ons"},"Critical and Non-Critical Add-ons"),(0,o.kt)("p",null,"As of version v0.1.7, add-ons are split into two categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Critical add-ons:")," If these add-ons fail to deploy for any reason, RKE will error out. All system add-ons, such as the ",(0,o.kt)("a",{parentName:"p",href:"config-options/add-ons/network-plugins/"},"network plug-in"),", KubeDNS, and ",(0,o.kt)("a",{parentName:"p",href:"config-options/add-ons/ingress-controllers/"},"ingress controllers"),", are considered critical.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non-critical add-ons:")," If these add-ons fail to deploy, RKE will only log a warning and continue deploying any other add-ons. ",(0,o.kt)("a",{parentName:"p",href:"config-options/add-ons/user-defined-add-ons/"},"User-defined add-ons")," are considered non-critical."))),(0,o.kt)("h1",{id:"add-on-deployment-jobs"},"Add-on Deployment Jobs"),(0,o.kt)("p",null,"RKE uses Kubernetes jobs to deploy add-ons. In some cases, add-ons deployment takes longer than expected. As of with version v0.1.7, RKE provides an option to control the job check timeout in seconds. This timeout is set at the cluster level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"addon_job_timeout: 30\n")),(0,o.kt)("h1",{id:"add-on-placement"},"Add-on Placement"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Applies to v0.2.3 and higher")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,o.kt)("th",{parentName:"tr",align:null},"Tolerations"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Calico"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoSchedule:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoExecute:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"CriticalAddonsOnly:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Flannel"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"operator:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Canal"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoSchedule:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoExecute:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"CriticalAddonsOnly:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Weave"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoSchedule:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoExecute:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CoreDNS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node-role.kubernetes.io/worker:Exists")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:linux")),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoSchedule:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoExecute:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"CriticalAddonsOnly:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-dns"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"node-role.kubernetes.io/worker")," ",(0,o.kt)("inlineCode",{parentName:"td"},"Exists")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoSchedule:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoExecute:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"CriticalAddonsOnly:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nginx-ingress"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"node-role.kubernetes.io/worker")," ",(0,o.kt)("inlineCode",{parentName:"td"},"Exists")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoSchedule:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoExecute:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metrics-server"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"node-role.kubernetes.io/worker")," ",(0,o.kt)("inlineCode",{parentName:"td"},"Exists")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoSchedule:Exists"),(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"NoExecute:Exists"))))),(0,o.kt)("h1",{id:"tolerations"},"Tolerations"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.2.4")),(0,o.kt)("p",null,"Tolerations can be configured per add-on and apply to Deployment resources. The configured tolerations will replace the existing tolerations so make sure you configure all the tolerations you need. See the specific add-on doc pages for more information."))}m.isMDXComponent=!0}}]);