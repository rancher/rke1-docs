"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8788],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),u=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,g=d["".concat(a,".").concat(h)]||d[h]||p[h]||i;return r?o.createElement(g,l(l({ref:t},c),{},{components:r})):o.createElement(g,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2098:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],s={title:"Troubleshooting vSphere Clusters",weight:4},a=void 0,u={unversionedId:"config-options/cloud-providers/vsphere/troubleshooting/troubleshooting",id:"config-options/cloud-providers/vsphere/troubleshooting/troubleshooting",title:"Troubleshooting vSphere Clusters",description:"If you are experiencing issues while provisioning a cluster with enabled vSphere Cloud Provider or while creating vSphere volumes for your workloads, you should inspect the logs of the following K8s services:",source:"@site/docs/config-options/cloud-providers/vsphere/troubleshooting/troubleshooting.md",sourceDirName:"config-options/cloud-providers/vsphere/troubleshooting",slug:"/config-options/cloud-providers/vsphere/troubleshooting/",permalink:"/config-options/cloud-providers/vsphere/troubleshooting/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/config-options/cloud-providers/vsphere/troubleshooting/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1660909784,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Troubleshooting vSphere Clusters",weight:4},sidebar:"mySidebar",previous:{title:"Enabling Disk UUIDs for vSphere VMs",permalink:"/config-options/cloud-providers/vsphere/enabling-uuid/"},next:{title:"Audit Log",permalink:"/config-options/audit-log/"}},c={},p=[],d={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are experiencing issues while provisioning a cluster with enabled vSphere Cloud Provider or while creating vSphere volumes for your workloads, you should inspect the logs of the following K8s services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"controller-manager (Manages volumes in vCenter)"),(0,i.kt)("li",{parentName:"ul"},"kubelet: (Mounts vSphere volumes to pods)")),(0,i.kt)("p",null,"If your cluster is not configured with external ",(0,i.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v2.x//en/cluster-admin/tools//logging/"},"Cluster Logging"),", you will need to SSH into nodes to get the logs of the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," (running on one of the control plane nodes) and the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet")," (pertaining to the node where the stateful pod has been scheduled)."),(0,i.kt)("p",null,"The easiest way to create a SSH session with a node is the Rancher CLI tool."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v2.x/en/cli/"},"Configure the Rancher CLI")," for your cluster."),(0,i.kt)("li",{parentName:"ol"},"Run the following command to get a shell to the corresponding nodes:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ rancher ssh <nodeName>\n\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Inspect the logs of the controller-manager and kubelet containers looking for errors related to the vSphere cloud provider:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"    $ docker logs --since 15m kube-controller-manager\n    $ docker logs --since 15m kubelet\n")))}h.isMDXComponent=!0}}]);