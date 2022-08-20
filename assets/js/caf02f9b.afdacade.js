"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4153],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"Troubleshooting",weight:5},c=void 0,l={unversionedId:"etcd-snapshots/troubleshooting/troubleshooting",id:"etcd-snapshots/troubleshooting/troubleshooting",title:"Troubleshooting",description:"As of v0.1.9, the rke-bundle-cert container is removed on both success and failure of a restore. To debug any issues, you will need to look at the logs generated from rke.",source:"@site/docs/etcd-snapshots/troubleshooting/troubleshooting.md",sourceDirName:"etcd-snapshots/troubleshooting",slug:"/etcd-snapshots/troubleshooting/",permalink:"/rke1-docs/etcd-snapshots/troubleshooting/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/etcd-snapshots/troubleshooting/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1660995383,formattedLastUpdatedAt:"8/20/2022",frontMatter:{title:"Troubleshooting",weight:5},sidebar:"mySidebar",previous:{title:"Example Scenarios",permalink:"/rke1-docs/etcd-snapshots/example-scenarios/"},next:{title:"Certificate Management",permalink:"/rke1-docs/cert-mgmt/"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As of ",(0,a.kt)("strong",{parentName:"p"},"v0.1.9"),", the ",(0,a.kt)("strong",{parentName:"p"},"rke-bundle-cert")," container is removed on both success and failure of a restore. To debug any issues, you will need to look at the ",(0,a.kt)("strong",{parentName:"p"},"logs")," generated from rke."),(0,a.kt)("p",null,"As of ",(0,a.kt)("strong",{parentName:"p"},"v0.1.8")," and below, the ",(0,a.kt)("strong",{parentName:"p"},"rke-bundle-cert")," container is left over from a failed etcd restore. If you are having an issue with restoring an ",(0,a.kt)("strong",{parentName:"p"},"etcd snapshot")," then you can do the following on each etcd nodes before attempting to do another restore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker container rm --force rke-bundle-cert\n")),(0,a.kt)("p",null,"The rke-bundle-cert container is usually removed when a backup or restore of ",(0,a.kt)("strong",{parentName:"p"},"etcd")," succeeds. Whenever something goes wrong, the ",(0,a.kt)("strong",{parentName:"p"},"rke-bundle-cert")," container will be left over. You can look\nat the logs or inspect the container to see what the issue is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker container logs --follow rke-bundle-cert\ndocker container inspect rke-bundle-cert\n")),(0,a.kt)("p",null,"The important thing to note is the mounts of the container and location of the ",(0,a.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz"),"."))}f.isMDXComponent=!0}}]);