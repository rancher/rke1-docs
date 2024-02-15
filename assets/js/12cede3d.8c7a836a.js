"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5924],{8102:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=o(5893),i=o(1151);const r={title:"Authorization"},s=void 0,a={id:"config-options/authorization/authorization",title:"Authorization",description:"Kubernetes supports multiple Authorization Modules. Currently, RKE only supports the RBAC module.",source:"@site/docs/config-options/authorization/authorization.md",sourceDirName:"config-options/authorization",slug:"/config-options/authorization/",permalink:"/config-options/authorization/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/authorization/authorization.md",tags:[],version:"current",lastUpdatedAt:1708018833,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"Authorization"},sidebar:"mySidebar",previous:{title:"Authentication",permalink:"/config-options/authentication/"},next:{title:"Configuring Pod Security Admission (PSA)",permalink:"/config-options/services/pod-security-admission/"}},c={},u=[];function d(t){const e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Kubernetes supports multiple ",(0,n.jsx)(e.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authorization/#authorization-modules",children:"Authorization Modules"}),". Currently, RKE only supports the ",(0,n.jsx)(e.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"RBAC module"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["By default, RBAC is already enabled. If you wanted to turn off RBAC support, ",(0,n.jsx)(e.strong,{children:"which isn't recommended"}),", you set the authorization mode to ",(0,n.jsx)(e.code,{children:"none"})," in your ",(0,n.jsx)(e.code,{children:"cluster.yml"}),"."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-yaml",children:"authorization:\n    # Use `mode: none` to disable authorization\n    mode: rbac\n"})})]})}function l(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},1151:(t,e,o)=>{o.d(e,{Z:()=>a,a:()=>s});var n=o(7294);const i={},r=n.createContext(i);function s(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);