"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[1779],{3901:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>h,toc:()=>a});var o=s(5893),n=s(1151);const i={title:"Bastion/Jump Host Configuration"},r=void 0,h={id:"config-options/bastion-host/bastion-host",title:"Bastion/Jump Host Configuration",description:"Since RKE uses ssh to connect to nodes, you can configure the cluster.yml so RKE will use a bastion host. Keep in mind that the port requirements for the RKE node move to the configured bastion host. Our private SSH key(s) only needs to reside on the host running RKE. You do not need to copy your private SSH key(s) to the bastion host.",source:"@site/docs/config-options/bastion-host/bastion-host.md",sourceDirName:"config-options/bastion-host",slug:"/config-options/bastion-host/",permalink:"/config-options/bastion-host/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/bastion-host/bastion-host.md",tags:[],version:"current",lastUpdatedAt:1708018833,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"Bastion/Jump Host Configuration"},sidebar:"mySidebar",previous:{title:"Private Registries",permalink:"/config-options/private-registries/"},next:{title:"System Images",permalink:"/config-options/system-images/"}},c={},a=[{value:"Bastion Host Options",id:"bastion-host-options",level:2},{value:"Address",id:"address",level:3},{value:"SSH Port",id:"ssh-port",level:3},{value:"SSH Users",id:"ssh-users",level:3},{value:"SSH Key Path",id:"ssh-key-path",level:3},{value:"SSH Key",id:"ssh-key",level:3},{value:"SSH Certificate Path",id:"ssh-certificate-path",level:3},{value:"SSH Certificate",id:"ssh-certificate",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Since RKE uses ",(0,o.jsx)(t.code,{children:"ssh"})," to connect to ",(0,o.jsx)(t.a,{href:"/config-options/nodes/",children:"nodes"}),", you can configure the ",(0,o.jsx)(t.code,{children:"cluster.yml"})," so RKE will use a bastion host. Keep in mind that the ",(0,o.jsx)(t.a,{href:"/os/#ports",children:"port requirements"})," for the RKE node move to the configured bastion host. Our private SSH key(s) only needs to reside on the host running RKE. You do not need to copy your private SSH key(s) to the bastion host."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"bastion_host:\n    address: x.x.x.x\n    user: ubuntu\n    port: 22\n    ssh_key_path: /home/user/.ssh/bastion_rsa\n    # or\n    # ssh_key: |-\n    #   -----BEGIN RSA PRIVATE KEY-----\n    #\n    #   -----END RSA PRIVATE KEY-----\n    # Optionally using SSH certificates\n    # ssh_cert_path: /home/user/.ssh/id_rsa-cert.pub\n    # or\n    # ssh_cert: |-\n    #   ssh-rsa-cert-v01@openssh.com AAAAHHNza...\n"})}),"\n",(0,o.jsx)(t.h2,{id:"bastion-host-options",children:"Bastion Host Options"}),"\n",(0,o.jsx)(t.h3,{id:"address",children:"Address"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"address"})," directive will be used to set the hostname or IP address of the bastion host. RKE must be able to connect to this address."]}),"\n",(0,o.jsx)(t.h3,{id:"ssh-port",children:"SSH Port"}),"\n",(0,o.jsxs)(t.p,{children:["You specify which ",(0,o.jsx)(t.code,{children:"port"})," to be used when connecting to the bastion host. The default port is ",(0,o.jsx)(t.code,{children:"22"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"ssh-users",children:"SSH Users"}),"\n",(0,o.jsxs)(t.p,{children:["You specify the ",(0,o.jsx)(t.code,{children:"user"})," to be used when connecting to this node."]}),"\n",(0,o.jsx)(t.h3,{id:"ssh-key-path",children:"SSH Key Path"}),"\n",(0,o.jsxs)(t.p,{children:["You specify the path, i.e. ",(0,o.jsx)(t.code,{children:"ssh_key_path"}),", for the SSH private key to be used when connecting to the bastion host."]}),"\n",(0,o.jsx)(t.h3,{id:"ssh-key",children:"SSH Key"}),"\n",(0,o.jsxs)(t.p,{children:["Instead of setting the path to the SSH key, you can specify the actual key, i.e. ",(0,o.jsx)(t.code,{children:"ssh_key"}),", to be used to connect to the bastion host."]}),"\n",(0,o.jsx)(t.h3,{id:"ssh-certificate-path",children:"SSH Certificate Path"}),"\n",(0,o.jsxs)(t.p,{children:["You specify the path, i.e. ",(0,o.jsx)(t.code,{children:"ssh_cert_path"}),", for the signed SSH certificate to be used when connecting to the bastion host."]}),"\n",(0,o.jsx)(t.h3,{id:"ssh-certificate",children:"SSH Certificate"}),"\n",(0,o.jsxs)(t.p,{children:["Instead of setting the path to the signed SSH certificate, you can specify the actual certificate, i.e. ",(0,o.jsx)(t.code,{children:"ssh_cert"}),", to be used to connect to the bastion host."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>h,a:()=>r});var o=s(7294);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);