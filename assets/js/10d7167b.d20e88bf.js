"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(4334);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(3117),r=n(7294),o=n(4334),l=n(2466),s=n(6775),i=n(1980),d=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,d]=f({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==s&&(p(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:c},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"How Upgrades Work"},i=void 0,d={unversionedId:"upgrades/how-upgrades-work/how-upgrades-work",id:"upgrades/how-upgrades-work/how-upgrades-work",title:"How Upgrades Work",description:"In this section, you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster. The below sections describe how each type of node is upgraded by default when a cluster is upgraded using rke up.",source:"@site/docs/upgrades/how-upgrades-work/how-upgrades-work.md",sourceDirName:"upgrades/how-upgrades-work",slug:"/upgrades/how-upgrades-work/",permalink:"/upgrades/how-upgrades-work/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/how-upgrades-work/how-upgrades-work.md",tags:[],version:"current",lastUpdatedAt:1700067813,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{title:"How Upgrades Work"},sidebar:"mySidebar",previous:{title:"Upgrades",permalink:"/upgrades/"},next:{title:"Maintaining Availability for Applications During Upgrades",permalink:"/upgrades/maintaining-availability/"}},u={},p=[{value:"Upgrades of etcd Nodes",id:"upgrades-of-etcd-nodes",level:3},{value:"Upgrades of Controlplane Nodes",id:"upgrades-of-controlplane-nodes",level:3},{value:"Upgrades of Worker Nodes",id:"upgrades-of-worker-nodes",level:3},{value:"Upgrades of Addons",id:"upgrades-of-addons",level:3},{value:"Upgrades of Controlplane and etcd Nodes",id:"upgrades-of-controlplane-and-etcd-nodes",level:3},{value:"Upgrades of Worker Nodes",id:"upgrades-of-worker-nodes-1",level:3}],c={toc:p},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster. The below sections describe how each type of node is upgraded by default when a cluster is upgraded using ",(0,r.kt)("inlineCode",{parentName:"p"},"rke up"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"RKE v1.1.0+",mdxType:"TabItem"},(0,r.kt)("p",null,"The following features are new in RKE v1.1.0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ability to upgrade or edit a cluster without downtime for your applications."),(0,r.kt)("li",{parentName:"ul"},"The ability to manually upgrade nodes of a certain role without upgrading others."),(0,r.kt)("li",{parentName:"ul"},"The ability to restore a Kubernetes cluster to an older Kubernetes version by restoring it to a snapshot that includes the older Kubernetes version. This capability allows you to safely upgrade one type of node at a time, because if an upgrade cannot be completed by all nodes in the cluster, you can downgrade the Kubernetes version of the nodes that were already upgraded.")),(0,r.kt)("p",null,"When a cluster is upgraded with ",(0,r.kt)("inlineCode",{parentName:"p"},"rke up"),", using the default options, the following process is used:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The etcd plane gets get updated, one node at a time."),(0,r.kt)("li",{parentName:"ol"},"Controlplane nodes get updated, one node at a time. This includes the controlplane components and worker plane components of the controlplane nodes."),(0,r.kt)("li",{parentName:"ol"},"Worker plane components of etcd nodes get updated, one node at a time."),(0,r.kt)("li",{parentName:"ol"},"Worker nodes get updated in batches of a configurable size. The default configuration for the maximum number of unavailable nodes is ten percent, rounded down to the nearest node, with a minimum batch size of one node."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/config-options/add-ons/"},"Addons")," get upgraded one by one.")),(0,r.kt)("p",null,"The following sections break down in more detail what happens when etcd nodes, controlplane nodes, worker nodes, and addons are upgraded. This information is intended to be used to help you understand the update strategy for the cluster, and may be useful when troubleshooting problems with upgrading the cluster."),(0,r.kt)("h3",{id:"upgrades-of-etcd-nodes"},"Upgrades of etcd Nodes"),(0,r.kt)("p",null,"A cluster upgrade begins by upgrading the etcd nodes one at a time."),(0,r.kt)("p",null,"If an etcd node fails at any time, the upgrade will fail and no more nodes will be upgraded. The cluster will be stuck in an updating state and not move forward to upgrading controlplane or worker nodes."),(0,r.kt)("h3",{id:"upgrades-of-controlplane-nodes"},"Upgrades of Controlplane Nodes"),(0,r.kt)("p",null,"Controlplane nodes are upgraded one at a time by default. The maximum number of unavailable controlplane nodes can also be configured, so that they can be upgraded in batches."),(0,r.kt)("p",null,"As long as the maximum unavailable number or percentage of controlplane nodes has not been reached, Rancher will continue to upgrade other controlplane nodes, then the worker nodes."),(0,r.kt)("p",null,"If any controlplane nodes were unable to be upgraded, the upgrade will not proceed to the worker nodes."),(0,r.kt)("h3",{id:"upgrades-of-worker-nodes"},"Upgrades of Worker Nodes"),(0,r.kt)("p",null,"By default, worker nodes are upgraded in batches. The size of the batch is determined by the maximum number of unavailable worker nodes, configured as the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," directive in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," nodes is defined as 10 percent of all worker nodes. This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node."),(0,r.kt)("p",null,"For example, if you have 11 worker nodes and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," is 25%, two nodes will be upgraded at once because 25% of 11 is 2.75. If you have two worker nodes and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," is 1%, the worker nodes will be upgraded one at a time because the minimum batch size is one."),(0,r.kt)("p",null,"When each node in a batch returns to a Ready state, the next batch of nodes begins to upgrade. If ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-proxy")," have started, the node is Ready. As long as the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," number of nodes have not failed, Rancher will continue to upgrade other worker nodes."),(0,r.kt)("p",null,"RKE scans the cluster before starting the upgrade to find the powered down or unreachable hosts. The upgrade will stop if that number matches or exceeds the maximum number of unavailable nodes."),(0,r.kt)("p",null,"RKE will cordon each node before upgrading it, and uncordon the node afterward. RKE can also be configured to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"drain")," nodes before upgrading them."),(0,r.kt)("p",null,"RKE will handle all worker node upgrades before upgrading any add-ons. As long as the maximum number of unavailable worker nodes is not reached, RKE will attempt to upgrade the ",(0,r.kt)("a",{parentName:"p",href:"#upgrades-of-addons"},"addons.")," For example, if a cluster has two worker nodes and one worker node fails, but the maximum unavailable worker nodes is greater than one, the addons will still be upgraded."),(0,r.kt)("h3",{id:"upgrades-of-addons"},"Upgrades of Addons"),(0,r.kt)("p",null,"The availability of your applications partly depends on the availability of ",(0,r.kt)("a",{parentName:"p",href:"/config-options/add-ons/"},"RKE addons.")," Addons are used to deploy several cluster components, including network plug-ins, the Ingress controller, DNS provider, and metrics server."),(0,r.kt)("p",null,"Because RKE addons are necessary for allowing traffic into the cluster, they will need to be updated in batches to maintain availability. You will need to configure the maximum number of unavailable replicas for each addon in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," to ensure that your cluster will retain enough available replicas during an upgrade."),(0,r.kt)("p",null,"For more information on configuring the number of replicas for each addon, refer to ",(0,r.kt)("a",{parentName:"p",href:"/upgrades/configuring-strategy/"},"this section.")),(0,r.kt)("p",null,"For an example showing how to configure the addons, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/example-yamls/"},"example cluster.yml."))),(0,r.kt)(l.Z,{value:"RKE before v1.1.0",mdxType:"TabItem"},(0,r.kt)("p",null,"When a cluster is upgraded with ",(0,r.kt)("inlineCode",{parentName:"p"},"rke up"),", using the default options, the following process is used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"etcd nodes get updated first, one at a time."),(0,r.kt)("li",{parentName:"ul"},"Controlplane nodes get updated second, in batches of 50 or the total number of worker nodes, whichever is lower."),(0,r.kt)("li",{parentName:"ul"},"Worker nodes and addons get updated third, in batches of 50 or the total number of worker nodes, whichever is lower."),(0,r.kt)("li",{parentName:"ul"},"Addons get upgraded one by one.")),(0,r.kt)("h3",{id:"upgrades-of-controlplane-and-etcd-nodes"},"Upgrades of Controlplane and etcd Nodes"),(0,r.kt)("p",null,"Controlplane and etcd nodes would be upgraded in batches of 50 nodes or the total number of controlplane nodes, whichever is lower."),(0,r.kt)("p",null,"If a node fails at any time, the upgrade will stop upgrading any other nodes and fail."),(0,r.kt)("h3",{id:"upgrades-of-worker-nodes-1"},"Upgrades of Worker Nodes"),(0,r.kt)("p",null,"Worker nodes are upgraded simultaneously, in batches of either 50 or the total number of worker nodes, whichever is lower. If a worker node fails at any time, the upgrade stops."),(0,r.kt)("p",null,"When a worker node is upgraded, it restarts several Docker processes, including the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-proxy"),". When ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-proxy")," comes up, it flushes ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables"),". When this happens, pods on this node can\u2019t be accessed, resulting in downtime for the applications."))))}f.isMDXComponent=!0}}]);