"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(4334);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(3117),a=n(7294),o=n(4334),l=n(2466),s=n(6775),i=n(1980),d=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=u(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,d]=k({queryString:n,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),r=d[n].value;r!==s&&(c(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:u},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(N,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(3117),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"Example Scenarios"},i=void 0,d={unversionedId:"etcd-snapshots/example-scenarios/example-scenarios",id:"etcd-snapshots/example-scenarios/example-scenarios",title:"Example Scenarios",description:"These example scenarios for backup and restore are different based on your version of RKE.",source:"@site/docs/etcd-snapshots/example-scenarios/example-scenarios.md",sourceDirName:"etcd-snapshots/example-scenarios",slug:"/etcd-snapshots/example-scenarios/",permalink:"/etcd-snapshots/example-scenarios/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/example-scenarios/example-scenarios.md",tags:[],version:"current",lastUpdatedAt:1700067813,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{title:"Example Scenarios"},sidebar:"mySidebar",previous:{title:"Restoring from Backup",permalink:"/etcd-snapshots/restoring-from-backup/"},next:{title:"Troubleshooting",permalink:"/etcd-snapshots/troubleshooting/"}},p={},c=[{value:"1. Back Up the Cluster",id:"1-back-up-the-cluster",level:3},{value:"2. Simulate a Node Failure",id:"2-simulate-a-node-failure",level:3},{value:"3. Add a New etcd Node to the Kubernetes Cluster",id:"3-add-a-new-etcd-node-to-the-kubernetes-cluster",level:3},{value:"4. Restore etcd on the New Node from the Backup",id:"4-restore-etcd-on-the-new-node-from-the-backup",level:3},{value:"5. Confirm that Cluster Operations are Restored",id:"5-confirm-that-cluster-operations-are-restored",level:3},{value:"Example Scenario of restoring from a Local Snapshot",id:"example-scenario-of-restoring-from-a-local-snapshot",level:3}],u={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These example scenarios for backup and restore are different based on your version of RKE."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"RKE v0.2.0+",mdxType:"TabItem"},(0,a.kt)("p",null,"This walkthrough will demonstrate how to restore an etcd cluster from a local snapshot with the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-back-up-the-cluster"},"Back up the cluster")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-simulate-a-node-failure"},"Simulate a node failure")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-add-a-new-etcd-node-to-the-kubernetes-cluster"},"Add a new etcd node to the cluster")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#4-restore-etcd-on-the-new-node-from-the-backup"},"Restore etcd on the new node from the backup")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#5-confirm-that-cluster-operations-are-restored"},"Confirm that cluster operations are restored"))),(0,a.kt)("p",null,"In this example, the Kubernetes cluster was deployed on two AWS nodes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"IP"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Role"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"node1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[controlplane, worker]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"node2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10.0.0.2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[etcd]")))),(0,a.kt)("h3",{id:"1-back-up-the-cluster"},"1. Back Up the Cluster"),(0,a.kt)("p",null,"Take a local snapshot of the Kubernetes cluster."),(0,a.kt)("p",null,"You can upload this snapshot directly to an S3 backend with the ",(0,a.kt)("a",{parentName:"p",href:"/etcd-snapshots/one-time-snapshots/#options-for-rke-etcd-snapshot-save"},"S3 options"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save --name snapshot.db --config cluster.yml\n")),(0,a.kt)("h3",{id:"2-simulate-a-node-failure"},"2. Simulate a Node Failure"),(0,a.kt)("p",null,"To simulate the failure, let's power down ",(0,a.kt)("inlineCode",{parentName:"p"},"node2"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"root@node2:~# poweroff\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"IP"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Role"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"node1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[controlplane, worker]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("del",{parentName:"td"},"node2")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("del",{parentName:"td"},"10.0.0.2")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("del",{parentName:"td"},"[etcd]"))))),(0,a.kt)("h3",{id:"3-add-a-new-etcd-node-to-the-kubernetes-cluster"},"3. Add a New etcd Node to the Kubernetes Cluster"),(0,a.kt)("p",null,"Before updating and restoring etcd, you will need to add the new node into the Kubernetes cluster with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", comment out the old node and add in the new node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n    - address: 10.0.0.1\n      hostname_override: node1\n      user: ubuntu\n      role:\n        - controlplane\n        - worker\n#    - address: 10.0.0.2\n#      hostname_override: node2\n#      user: ubuntu\n#      role:\n#       - etcd\n    - address: 10.0.0.3\n      hostname_override: node3\n      user: ubuntu\n      role:\n        - etcd\n")),(0,a.kt)("h3",{id:"4-restore-etcd-on-the-new-node-from-the-backup"},"4. Restore etcd on the New Node from the Backup"),(0,a.kt)("admonition",{title:"Prerequisite",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the snapshot was created using RKE v1.1.4 or higher, the cluster state file should be included in the snapshot. The cluster state file will be automatically extracted and used for the restore. If the snapshot was created using RKE v1.1.3 or lower, please ensure your ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.rkestate")," is present before starting the restore, because this contains your certificate data for the cluster.")),(0,a.kt)("p",null,"After the new node is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", run the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," to launch ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," from the backup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-restore --name snapshot.db --config cluster.yml\n")),(0,a.kt)("p",null,"The snapshot is expected to be saved at ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,a.kt)("p",null,"If you want to directly retrieve the snapshot from S3, add in the ",(0,a.kt)("a",{parentName:"p",href:"/etcd-snapshots/restoring-from-backup/#options-for-rke-etcd-snapshot-restore"},"S3 options"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As of v0.2.0, the file ",(0,a.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," is no longer required for the restore process because the certificates required to restore are preserved within the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),".")),(0,a.kt)("h3",{id:"5-confirm-that-cluster-operations-are-restored"},"5. Confirm that Cluster Operations are Restored"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," command triggers ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," using the new ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". Confirm that your Kubernetes cluster is functional by checking the pods on your cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> kubectl get pods\nNAME                     READY     STATUS    RESTARTS   AGE\nnginx-65899c769f-kcdpr   1/1       Running   0          17s\nnginx-65899c769f-pc45c   1/1       Running   0          17s\nnginx-65899c769f-qkhml   1/1       Running   0          17s\n"))),(0,a.kt)(l.Z,{value:"RKE before v0.2.0",mdxType:"TabItem"},(0,a.kt)("p",null,"This walkthrough will demonstrate how to restore an etcd cluster from a local snapshot with the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#take-a-local-snapshot-of-the-cluster-rke-before-v0.2.0"},"Take a local snapshot of the cluster")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#store-the-snapshot-externally-rke-before-v0.2.0"},"Store the snapshot externally")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#simulate-a-node-failure-rke-before-v0.2.0"},"Simulate a node failure")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#remove-the-kubernetes-cluster-and-clean-the-nodes-rke-before-v0.2.0"},"Remove the Kubernetes cluster and clean the nodes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-the-backup-and-place-it-on-a-new-node-rke-before-v0.2.0"},"Retrieve the backup and place it on a new node")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#add-a-new-etcd-node-to-the-kubernetes-cluster-rke-before-v0.2.0"},"Add a new etcd node to the Kubernetes cluster")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#restore-etcd-on-the-new-node-from-the-backup-rke-before-v0.2.0"},"Restore etcd on the new node from the backup")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#restore-operations-on-the-cluster-rke-before-v0.2.0"},"Restore Operations on the Cluster"))),(0,a.kt)("h3",{id:"example-scenario-of-restoring-from-a-local-snapshot"},"Example Scenario of restoring from a Local Snapshot"),(0,a.kt)("p",null,"In this example, the Kubernetes cluster was deployed on two AWS nodes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"IP"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Role"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"node1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[controlplane, worker]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"node2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10.0.0.2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[etcd]")))),(0,a.kt)("a",{id:"take-a-local-snapshot-of-the-cluster-rke-before-v0.2.0"}),"### 1. Take a Local Snapshot of the Cluster",(0,a.kt)("p",null,"Back up the Kubernetes cluster by taking a local snapshot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save --name snapshot.db --config cluster.yml\n")),(0,a.kt)("a",{id:"store-the-snapshot-externally-rke-before-v0.2.0"}),"### 2. Store the Snapshot Externally",(0,a.kt)("p",null,"After taking the etcd snapshot on ",(0,a.kt)("inlineCode",{parentName:"p"},"node2"),", we recommend saving this backup in a persistent place. One of the options is to save the backup and ",(0,a.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," file on an S3 bucket or tape backup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# If you're using an AWS host and have the ability to connect to S3\nroot@node2:~# s3cmd mb s3://rke-etcd-backup\nroot@node2:~# s3cmd \\\n  /opt/rke/etcd-snapshots/snapshot.db \\\n  /opt/rke/etcd-snapshots/pki.bundle.tar.gz \\\n  s3://rke-etcd-backup/\n")),(0,a.kt)("a",{id:"simulate-a-node-failure-rke-before-v0.2.0"}),"### 3. Simulate a Node Failure",(0,a.kt)("p",null,"To simulate the failure, let's power down ",(0,a.kt)("inlineCode",{parentName:"p"},"node2"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"root@node2:~# poweroff\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"IP"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Role"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"node1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"[controlplane, worker]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("del",{parentName:"td"},"node2")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("del",{parentName:"td"},"10.0.0.2")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("del",{parentName:"td"},"[etcd]"))))),(0,a.kt)("a",{id:"remove-the-kubernetes-cluster-and-clean-the-nodes-rke-before-v0.2.0"}),"### 4. Remove the Kubernetes Cluster and Clean the Nodes",(0,a.kt)("p",null,"The following command removes your cluster and cleans the nodes so that the cluster can be restored without any conflicts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rke remove --config rancher-cluster.yml\n")),(0,a.kt)("a",{id:"retrieve-the-backup-and-place-it-on-a-new-node-rke-before-v0.2.0"}),"### 5. Retrieve the Backup and Place it On a New Node",(0,a.kt)("p",null,"Before restoring etcd and running ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),", we need to retrieve the backup saved on S3 to a new node, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"node3"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Make a Directory\nroot@node3:~# mkdir -p /opt/rke/etcdbackup\n\n# Get the Backup from S3\nroot@node3:~# s3cmd get \\\n  s3://rke-etcd-backup/snapshot.db \\\n  /opt/rke/etcd-snapshots/snapshot.db\n\n# Get the pki bundle from S3\nroot@node3:~# s3cmd get \\\n  s3://rke-etcd-backup/pki.bundle.tar.gz \\\n  /opt/rke/etcd-snapshots/pki.bundle.tar.gz\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you had multiple etcd nodes, you would have to manually sync the snapshot and ",(0,a.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," across all of the etcd nodes in the cluster.")),(0,a.kt)("a",{id:"add-a-new-etcd-node-to-the-kubernetes-cluster-rke-before-v0.2.0"}),"###  6. Add a New etcd Node to the Kubernetes Cluster",(0,a.kt)("p",null,"Before updating and restoring etcd, you will need to add the new node into the Kubernetes cluster with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", comment out the old node and add in the new node. `"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n    - address: 10.0.0.1\n      hostname_override: node1\n      user: ubuntu\n      role:\n        - controlplane\n        - worker\n#    - address: 10.0.0.2\n#      hostname_override: node2\n#      user: ubuntu\n#      role:\n#       - etcd\n    - address: 10.0.0.3\n      hostname_override: node3\n      user: ubuntu\n      role:\n        - etcd\n")),(0,a.kt)("a",{id:"restore-etcd-on-the-new-node-from-the-backup-rke-before-v0.2.0"}),"###  7. Restore etcd on the New Node from the Backup",(0,a.kt)("p",null,"After the new node is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", run the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," command to launch ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," from the backup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-restore --name snapshot.db --config cluster.yml\n")),(0,a.kt)("p",null,"The snapshot and ",(0,a.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," file are expected to be saved at ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," on each etcd node."),(0,a.kt)("a",{id:"restore-operations-on-the-cluster-rke-before-v0.2.0"}),"### 8. Restore Operations on the Cluster",(0,a.kt)("p",null,"Finally, we need to restore the operations on the cluster. We will make the Kubernetes API point to the new ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," again using the new ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke up --config cluster.yml\n")),(0,a.kt)("p",null,"Confirm that your Kubernetes cluster is functional by checking the pods on your cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> kubectl get pods\nNAME                     READY     STATUS    RESTARTS   AGE\nnginx-65899c769f-kcdpr   1/1       Running   0          17s\nnginx-65899c769f-pc45c   1/1       Running   0          17s\nnginx-65899c769f-qkhml   1/1       Running   0          17s\n")))))}k.isMDXComponent=!0}}]);