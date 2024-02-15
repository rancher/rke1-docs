"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8022],{7363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(5893),s=n(1151);const c={title:"External etcd"},i=void 0,o={id:"config-options/services/external-etcd/external-etcd",title:"External etcd",description:"By default, RKE will launch etcd servers, but RKE also supports being able to use an external etcd. RKE only supports connecting to a TLS enabled etcd setup.",source:"@site/docs/config-options/services/external-etcd/external-etcd.md",sourceDirName:"config-options/services/external-etcd",slug:"/config-options/services/external-etcd/",permalink:"/config-options/services/external-etcd/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/services/external-etcd/external-etcd.md",tags:[],version:"current",lastUpdatedAt:1708018833,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"External etcd"},sidebar:"mySidebar",previous:{title:"Extra Args, Extra Binds, and Extra Environment Variables",permalink:"/config-options/services/services-extras/"},next:{title:"Encrypting Secret Data at Rest",permalink:"/config-options/secrets-encryption/"}},a={},l=[{value:"External etcd Options",id:"external-etcd-options",level:2},{value:"Path",id:"path",level:3},{value:"External URLs",id:"external-urls",level:3},{value:"CA Cert/Cert/KEY",id:"ca-certcertkey",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"By default, RKE will launch etcd servers, but RKE also supports being able to use an external etcd. RKE only supports connecting to a TLS enabled etcd setup."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["RKE will not accept having external etcd servers in conjunction with ",(0,r.jsx)(t.a,{href:"/config-options/nodes/",children:"nodes"})," with the ",(0,r.jsx)(t.code,{children:"etcd"})," role."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"services:\n    etcd:\n      path: /etcdcluster\n      external_urls:\n        - https://etcd-example.com:2379\n      ca_cert: |-\n        -----BEGIN CERTIFICATE-----\n        xxxxxxxxxx\n        -----END CERTIFICATE-----\n      cert: |-\n        -----BEGIN CERTIFICATE-----\n        xxxxxxxxxx\n        -----END CERTIFICATE-----\n      key: |-\n        -----BEGIN PRIVATE KEY-----\n        xxxxxxxxxx\n        -----END PRIVATE KEY-----\n"})}),"\n",(0,r.jsx)(t.h2,{id:"external-etcd-options",children:"External etcd Options"}),"\n",(0,r.jsx)(t.h3,{id:"path",children:"Path"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"path"})," defines the location of where the etcd cluster is on the endpoints."]}),"\n",(0,r.jsx)(t.h3,{id:"external-urls",children:"External URLs"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"external_urls"})," are the endpoints of where the etcd cluster is hosted. There can be multiple endpoints for the etcd cluster."]}),"\n",(0,r.jsx)(t.h3,{id:"ca-certcertkey",children:"CA Cert/Cert/KEY"}),"\n",(0,r.jsx)(t.p,{children:"The certificates and private keys used to authenticate and access the etcd service."})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(7294);const s={},c=r.createContext(s);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);