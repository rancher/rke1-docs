"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[2972],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),d=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),k=d(n),s=a,u=k["".concat(l,".").concat(s)]||k[s]||m[s]||i;return n?r.createElement(u,o(o({ref:e},c),{},{components:n})):r.createElement(u,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6957:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"OpenStack Cloud Provider",weight:253},l=void 0,d={unversionedId:"config-options/cloud-providers/openstack/openstack",id:"config-options/cloud-providers/openstack/openstack",title:"OpenStack Cloud Provider",description:"To enable the OpenStack cloud provider, besides setting the name as openstack, there are specific configuration options that must be set. The OpenStack configuration options are grouped into different sections.",source:"@site/docs/config-options/cloud-providers/openstack/openstack.md",sourceDirName:"config-options/cloud-providers/openstack",slug:"/config-options/cloud-providers/openstack/",permalink:"/rke1-docs/config-options/cloud-providers/openstack/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/config-options/cloud-providers/openstack/openstack.md",tags:[],version:"current",lastUpdatedAt:1660995383,formattedLastUpdatedAt:"8/20/2022",frontMatter:{title:"OpenStack Cloud Provider",weight:253},sidebar:"mySidebar",previous:{title:"Custom Cloud Provider",permalink:"/rke1-docs/config-options/cloud-providers/custom/"},next:{title:"vSphere Cloud Provider",permalink:"/rke1-docs/config-options/cloud-providers/vsphere/"}},c={},m=[{value:"Overriding the hostname",id:"overriding-the-hostname",level:2},{value:"OpenStack Configuration Options",id:"openstack-configuration-options",level:2},{value:"Global",id:"global",level:3},{value:"Load Balancer",id:"load-balancer",level:3},{value:"Block Storage",id:"block-storage",level:3},{value:"Route",id:"route",level:3},{value:"Metadata",id:"metadata",level:3}],k={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To enable the OpenStack cloud provider, besides setting the name as ",(0,i.kt)("inlineCode",{parentName:"p"},"openstack"),", there are specific configuration options that must be set. The OpenStack configuration options are grouped into different sections."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cloud_provider:\n    name: openstack\n    openstackCloudProvider:\n      global:\n        username: xxxxxxxxxxxxxx\n        password: xxxxxxxxxxxxxx\n        auth-url: https://1.2.3.4/identity/v3\n        tenant-id: xxxxxxxxxxxxxx\n        domain-id: xxxxxxxxxxxxxx\n      load_balancer:\n        subnet-id: xxxxxxxxxxxxxx\n      block_storage:\n        ignore-volume-az: true\n      route:\n        router-id: xxxxxxxxxxxxxx\n      metadata:\n        search-order: xxxxxxxxxxxxxx\n")),(0,i.kt)("h2",{id:"overriding-the-hostname"},"Overriding the hostname"),(0,i.kt)("p",null,"The OpenStack cloud provider uses the instance name (as determined from OpenStack metadata) as the name of the Kubernetes Node object, you must override the Kubernetes name on the node by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname_override")," for each node. If you do not set the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname_override"),", the Kubernetes node name will be set as the ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),", which will cause the OpenStack cloud provider to fail."),(0,i.kt)("h2",{id:"openstack-configuration-options"},"OpenStack Configuration Options"),(0,i.kt)("p",null,"The OpenStack configuration options are divided into 5 groups."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Global"),(0,i.kt)("li",{parentName:"ul"},"Load Balancer"),(0,i.kt)("li",{parentName:"ul"},"Block Storage"),(0,i.kt)("li",{parentName:"ul"},"Route"),(0,i.kt)("li",{parentName:"ul"},"Metadata")),(0,i.kt)("h3",{id:"global"},"Global"),(0,i.kt)("p",null,"These are the options that are available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," directive."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Global Configuration Options"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"auth_url"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"user-id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"tenant-id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"tenant-name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"trust-id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"domain-id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"domain-name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"region"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ca-file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h3",{id:"load-balancer"},"Load Balancer"),(0,i.kt)("p",null,"These are the options that are available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"load_balancer")," directive."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Load Balancer Configuration Options"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"lb-version"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"use-octavia"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"subnet-id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"floating-network-id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"lb-method"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"lb-provider"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"manage-security-groups"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"create-monitor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"monitor-delay"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"* if ",(0,i.kt)("inlineCode",{parentName:"td"},"create-monitor")," is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"monitor-timeout"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"* if ",(0,i.kt)("inlineCode",{parentName:"td"},"create-monitor")," is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"monitor-max-retries"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"* if ",(0,i.kt)("inlineCode",{parentName:"td"},"create-monitor")," is true")))),(0,i.kt)("h3",{id:"block-storage"},"Block Storage"),(0,i.kt)("p",null,"These are the options that are available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"block_storage")," directive."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Block Storage Configuration Options"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"bs-version"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"trust-device-path"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ignore-volume-az"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h3",{id:"route"},"Route"),(0,i.kt)("p",null,"This is the option that is available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," directive."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Route Configuration Option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"router-id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h3",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"These are the options that are available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," directive."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Metadata Configuration Options"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"search-order"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"request-timeout"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("p",null,"For more information of OpenStack configurations options please refer to the official Kubernetes ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#openstack"},"documentation"),"."))}s.isMDXComponent=!0}}]);