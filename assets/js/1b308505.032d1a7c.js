"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(4334);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(3117),r=n(7294),o=n(4334),l=n(2466),s=n(6775),i=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=k({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"Restoring from Backup"},i=void 0,u={unversionedId:"etcd-snapshots/restoring-from-backup/restoring-from-backup",id:"etcd-snapshots/restoring-from-backup/restoring-from-backup",title:"Restoring from Backup",description:"The details of restoring your cluster from backup are different depending on your version of RKE.",source:"@site/docs/etcd-snapshots/restoring-from-backup/restoring-from-backup.md",sourceDirName:"etcd-snapshots/restoring-from-backup",slug:"/etcd-snapshots/restoring-from-backup/",permalink:"/etcd-snapshots/restoring-from-backup/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/restoring-from-backup/restoring-from-backup.md",tags:[],version:"current",lastUpdatedAt:1679521353,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{title:"Restoring from Backup"},sidebar:"mySidebar",previous:{title:"Recurring Snapshots",permalink:"/etcd-snapshots/recurring-snapshots/"},next:{title:"Example Scenarios",permalink:"/etcd-snapshots/example-scenarios/"}},p={},c=[{value:"Example of Restoring from a Local Snapshot",id:"example-of-restoring-from-a-local-snapshot",level:3},{value:"Example of Restoring from a Snapshot in S3",id:"example-of-restoring-from-a-snapshot-in-s3",level:3},{value:"Options for <code>rke etcd snapshot-restore</code>",id:"options-for-rke-etcd-snapshot-restore",level:3},{value:"Example of Restoring from a Local Snapshot",id:"example-of-restoring-from-a-local-snapshot-1",level:3},{value:"Options for <code>rke etcd snapshot-restore</code>",id:"options-for-rke-etcd-snapshot-restore-1",level:3}],d={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The details of restoring your cluster from backup are different depending on your version of RKE."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"RKE v0.2.0+",mdxType:"TabItem"},(0,r.kt)("p",null,"If there is a disaster with your Kubernetes cluster, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," to recover your etcd. This command reverts etcd to a specific snapshot and should be run on an etcd node of the the specific cluster that has suffered the disaster."),(0,r.kt)("p",null,"The following actions will be performed when you run the command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Syncs the snapshot or downloads the snapshot from S3, if necessary."),(0,r.kt)("li",{parentName:"ul"},"Checks snapshot checksum across etcd nodes to make sure they are identical."),(0,r.kt)("li",{parentName:"ul"},"Deletes your current cluster and cleans old data by running ",(0,r.kt)("inlineCode",{parentName:"li"},"rke remove"),". This removes the entire Kubernetes cluster, not just the etcd cluster."),(0,r.kt)("li",{parentName:"ul"},"Rebuilds the etcd cluster from the chosen snapshot."),(0,r.kt)("li",{parentName:"ul"},"Creates a new cluster by running ",(0,r.kt)("inlineCode",{parentName:"li"},"rke up"),"."),(0,r.kt)("li",{parentName:"ul"},"Restarts cluster system pods.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You should back up any important data in your cluster before running ",(0,r.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," because the command deletes your current Kubernetes cluster and replaces it with a new one.")),(0,r.kt)("p",null,"The snapshot used to restore your etcd cluster can either be stored locally in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," or from a S3 compatible backend."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.1.4")),(0,r.kt)("p",null,"If the snapshot contains the cluster state file, it will automatically be extracted and used for the restore. If you want to force the use of the local state file, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-local-state")," to the command. If the snapshot was created using an RKE version before v1.1.4, or if the snapshot does not contain a state file, make sure the cluster state file (by default available as ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),") is present before executing the command."),(0,r.kt)("h3",{id:"example-of-restoring-from-a-local-snapshot"},"Example of Restoring from a Local Snapshot"),(0,r.kt)("p",null,"To restore etcd from a local snapshot, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-restore --config cluster.yml --name mysnapshot\n")),(0,r.kt)("p",null,"The snapshot is assumed to be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," file is not needed because RKE v0.2.0 changed how the ",(0,r.kt)("a",{parentName:"p",href:"installation/#kubernetes-cluster-state"},"Kubernetes cluster state is stored"),"."),(0,r.kt)("h3",{id:"example-of-restoring-from-a-snapshot-in-s3"},"Example of Restoring from a Snapshot in S3"),(0,r.kt)("p",null,"When restoring etcd from a snapshot located in S3, the command needs the S3 information in order to connect to the S3 backend and retrieve the snapshot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ rke etcd snapshot-restore \\\n--config cluster.yml \\\n--name snapshot-name \\\n--s3 \\\n--access-key S3_ACCESS_KEY \\\n--secret-key S3_SECRET_KEY \\\n--bucket-name s3-bucket-name \\\n--folder s3-folder-name \\ # Optional - Available as of v0.3.0\n--s3-endpoint s3.amazonaws.com\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," if you were restoring a cluster that had Rancher installed, the Rancher UI should start up after a few minutes; you don't need to re-run Helm."),(0,r.kt)("h3",{id:"options-for-rke-etcd-snapshot-restore"},"Options for ",(0,r.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-restore")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"S3 Specific"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify snapshot name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--use-local-state")),(0,r.kt)("td",{parentName:"tr",align:null},"Force the use of the local state file instead of looking for a state file in the snapshot ",(0,r.kt)("em",{parentName:"td"},"Available as of v1.1.4")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--s3")),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled backup to s3"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--s3-endpoint")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'Specify s3 endpoint url (default: "s3.amazonaws.com")'),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--access-key")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify s3 accessKey"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--secret-key")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify s3 secretKey"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--bucket-name")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify s3 bucket name"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--folder")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify folder inside  bucket where backup will be stored. This is optional.  This is optional. ",(0,r.kt)("em",{parentName:"td"},"Available as of v0.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--region")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the s3 bucket location (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check")),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(l.Z,{value:"RKE before v0.2.0",mdxType:"TabItem"},(0,r.kt)("p",null,"If there is a disaster with your Kubernetes cluster, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," to recover your etcd. This command reverts etcd to a specific snapshot and should be run on an etcd node of the the specific cluster that has suffered the disaster."),(0,r.kt)("p",null,"The following actions will be performed when you run the command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removes the old etcd cluster"),(0,r.kt)("li",{parentName:"ul"},"Rebuilds the etcd cluster using the local snapshot")),(0,r.kt)("p",null,"Before you run this command, you must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"rke remove")," to remove your Kubernetes cluster and clean the nodes"),(0,r.kt)("li",{parentName:"ul"},"Download your etcd snapshot from S3, if applicable. Place the etcd snapshot and the ",(0,r.kt)("inlineCode",{parentName:"li"},"pki.bundle.tar.gz")," file in ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/rke/etcd-snapshots"),". Manually sync the snapshot across all ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," nodes.")),(0,r.kt)("p",null,"After the restore, you must rebuild your Kubernetes cluster with ",(0,r.kt)("inlineCode",{parentName:"p"},"rke up"),"."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You should back up any important data in your cluster before running ",(0,r.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," because the command deletes your current etcd cluster and replaces it with a new one.")),(0,r.kt)("h3",{id:"example-of-restoring-from-a-local-snapshot-1"},"Example of Restoring from a Local Snapshot"),(0,r.kt)("p",null,"To restore etcd from a local snapshot, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-restore --config cluster.yml --name mysnapshot\n")),(0,r.kt)("p",null,"The snapshot is assumed to be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,"The snapshot must be manually synched across all ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," nodes."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," file is also expected to be in the same location."),(0,r.kt)("h3",{id:"options-for-rke-etcd-snapshot-restore-1"},"Options for ",(0,r.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-restore")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify snapshot name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check"))))))))}k.isMDXComponent=!0}}]);