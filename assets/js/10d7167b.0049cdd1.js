"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5038],{5929:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var r=n(5893),a=n(1151);const d={title:"How Upgrades Work"},s=void 0,t={id:"upgrades/how-upgrades-work/how-upgrades-work",title:"How Upgrades Work",description:"In this section, you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster. The below sections describe how each type of node is upgraded by default when a cluster is upgraded using rke up.",source:"@site/docs/upgrades/how-upgrades-work/how-upgrades-work.md",sourceDirName:"upgrades/how-upgrades-work",slug:"/upgrades/how-upgrades-work/",permalink:"/upgrades/how-upgrades-work/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/how-upgrades-work/how-upgrades-work.md",tags:[],version:"current",lastUpdatedAt:1708018833,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"How Upgrades Work"},sidebar:"mySidebar",previous:{title:"Upgrades",permalink:"/upgrades/"},next:{title:"Maintaining Availability for Applications During Upgrades",permalink:"/upgrades/maintaining-availability/"}},i={},l=[{value:"Upgrades of etcd Nodes",id:"upgrades-of-etcd-nodes",level:3},{value:"Upgrades of Controlplane Nodes",id:"upgrades-of-controlplane-nodes",level:3},{value:"Upgrades of Worker Nodes",id:"upgrades-of-worker-nodes",level:3},{value:"Upgrades of Addons",id:"upgrades-of-addons",level:3},{value:"Upgrades of Controlplane and etcd Nodes",id:"upgrades-of-controlplane-and-etcd-nodes",level:3},{value:"Upgrades of Worker Nodes",id:"upgrades-of-worker-nodes-1",level:3}];function c(e){const o={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components},{TabItem:n,Tabs:d}=o;return n||h("TabItem",!0),d||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["In this section, you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster. The below sections describe how each type of node is upgraded by default when a cluster is upgraded using ",(0,r.jsx)(o.code,{children:"rke up"}),"."]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(n,{value:"RKE v1.1.0+",children:[(0,r.jsx)(o.p,{children:"The following features are new in RKE v1.1.0:"}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"The ability to upgrade or edit a cluster without downtime for your applications."}),"\n",(0,r.jsx)(o.li,{children:"The ability to manually upgrade nodes of a certain role without upgrading others."}),"\n",(0,r.jsx)(o.li,{children:"The ability to restore a Kubernetes cluster to an older Kubernetes version by restoring it to a snapshot that includes the older Kubernetes version. This capability allows you to safely upgrade one type of node at a time, because if an upgrade cannot be completed by all nodes in the cluster, you can downgrade the Kubernetes version of the nodes that were already upgraded."}),"\n"]}),(0,r.jsxs)(o.p,{children:["When a cluster is upgraded with ",(0,r.jsx)(o.code,{children:"rke up"}),", using the default options, the following process is used:"]}),(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"The etcd plane gets get updated, one node at a time."}),"\n",(0,r.jsx)(o.li,{children:"Controlplane nodes get updated, one node at a time. This includes the controlplane components and worker plane components of the controlplane nodes."}),"\n",(0,r.jsx)(o.li,{children:"Worker plane components of etcd nodes get updated, one node at a time."}),"\n",(0,r.jsx)(o.li,{children:"Worker nodes get updated in batches of a configurable size. The default configuration for the maximum number of unavailable nodes is ten percent, rounded down to the nearest node, with a minimum batch size of one node."}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/config-options/add-ons/",children:"Addons"})," get upgraded one by one."]}),"\n"]}),(0,r.jsx)(o.p,{children:"The following sections break down in more detail what happens when etcd nodes, controlplane nodes, worker nodes, and addons are upgraded. This information is intended to be used to help you understand the update strategy for the cluster, and may be useful when troubleshooting problems with upgrading the cluster."}),(0,r.jsx)(o.h3,{id:"upgrades-of-etcd-nodes",children:"Upgrades of etcd Nodes"}),(0,r.jsx)(o.p,{children:"A cluster upgrade begins by upgrading the etcd nodes one at a time."}),(0,r.jsx)(o.p,{children:"If an etcd node fails at any time, the upgrade will fail and no more nodes will be upgraded. The cluster will be stuck in an updating state and not move forward to upgrading controlplane or worker nodes."}),(0,r.jsx)(o.h3,{id:"upgrades-of-controlplane-nodes",children:"Upgrades of Controlplane Nodes"}),(0,r.jsx)(o.p,{children:"Controlplane nodes are upgraded one at a time by default. The maximum number of unavailable controlplane nodes can also be configured, so that they can be upgraded in batches."}),(0,r.jsx)(o.p,{children:"As long as the maximum unavailable number or percentage of controlplane nodes has not been reached, Rancher will continue to upgrade other controlplane nodes, then the worker nodes."}),(0,r.jsx)(o.p,{children:"If any controlplane nodes were unable to be upgraded, the upgrade will not proceed to the worker nodes."}),(0,r.jsx)(o.h3,{id:"upgrades-of-worker-nodes",children:"Upgrades of Worker Nodes"}),(0,r.jsxs)(o.p,{children:["By default, worker nodes are upgraded in batches. The size of the batch is determined by the maximum number of unavailable worker nodes, configured as the ",(0,r.jsx)(o.code,{children:"max_unavailable_worker"})," directive in the ",(0,r.jsx)(o.code,{children:"cluster.yml"}),"."]}),(0,r.jsxs)(o.p,{children:["By default, the ",(0,r.jsx)(o.code,{children:"max_unavailable_worker"})," nodes is defined as 10 percent of all worker nodes. This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node."]}),(0,r.jsxs)(o.p,{children:["For example, if you have 11 worker nodes and ",(0,r.jsx)(o.code,{children:"max_unavailable_worker"})," is 25%, two nodes will be upgraded at once because 25% of 11 is 2.75. If you have two worker nodes and ",(0,r.jsx)(o.code,{children:"max_unavailable_worker"})," is 1%, the worker nodes will be upgraded one at a time because the minimum batch size is one."]}),(0,r.jsxs)(o.p,{children:["When each node in a batch returns to a Ready state, the next batch of nodes begins to upgrade. If ",(0,r.jsx)(o.code,{children:"kubelet"})," and ",(0,r.jsx)(o.code,{children:"kube-proxy"})," have started, the node is Ready. As long as the ",(0,r.jsx)(o.code,{children:"max_unavailable_worker"})," number of nodes have not failed, Rancher will continue to upgrade other worker nodes."]}),(0,r.jsx)(o.p,{children:"RKE scans the cluster before starting the upgrade to find the powered down or unreachable hosts. The upgrade will stop if that number matches or exceeds the maximum number of unavailable nodes."}),(0,r.jsxs)(o.p,{children:["RKE will cordon each node before upgrading it, and uncordon the node afterward. RKE can also be configured to ",(0,r.jsx)(o.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",children:"drain"})," nodes before upgrading them."]}),(0,r.jsxs)(o.p,{children:["RKE will handle all worker node upgrades before upgrading any add-ons. As long as the maximum number of unavailable worker nodes is not reached, RKE will attempt to upgrade the ",(0,r.jsx)(o.a,{href:"#upgrades-of-addons",children:"addons."})," For example, if a cluster has two worker nodes and one worker node fails, but the maximum unavailable worker nodes is greater than one, the addons will still be upgraded."]}),(0,r.jsx)(o.h3,{id:"upgrades-of-addons",children:"Upgrades of Addons"}),(0,r.jsxs)(o.p,{children:["The availability of your applications partly depends on the availability of ",(0,r.jsx)(o.a,{href:"/config-options/add-ons/",children:"RKE addons."})," Addons are used to deploy several cluster components, including network plug-ins, the Ingress controller, DNS provider, and metrics server."]}),(0,r.jsxs)(o.p,{children:["Because RKE addons are necessary for allowing traffic into the cluster, they will need to be updated in batches to maintain availability. You will need to configure the maximum number of unavailable replicas for each addon in the ",(0,r.jsx)(o.code,{children:"cluster.yml"})," to ensure that your cluster will retain enough available replicas during an upgrade."]}),(0,r.jsxs)(o.p,{children:["For more information on configuring the number of replicas for each addon, refer to ",(0,r.jsx)(o.a,{href:"/upgrades/configuring-strategy/",children:"this section."})]}),(0,r.jsxs)(o.p,{children:["For an example showing how to configure the addons, refer to the ",(0,r.jsx)(o.a,{href:"/example-yamls/",children:"example cluster.yml."})]})]}),(0,r.jsxs)(n,{value:"RKE before v1.1.0",children:[(0,r.jsxs)(o.p,{children:["When a cluster is upgraded with ",(0,r.jsx)(o.code,{children:"rke up"}),", using the default options, the following process is used:"]}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"etcd nodes get updated first, one at a time."}),"\n",(0,r.jsx)(o.li,{children:"Controlplane nodes get updated second, in batches of 50 or the total number of worker nodes, whichever is lower."}),"\n",(0,r.jsx)(o.li,{children:"Worker nodes and addons get updated third, in batches of 50 or the total number of worker nodes, whichever is lower."}),"\n",(0,r.jsx)(o.li,{children:"Addons get upgraded one by one."}),"\n"]}),(0,r.jsx)(o.h3,{id:"upgrades-of-controlplane-and-etcd-nodes",children:"Upgrades of Controlplane and etcd Nodes"}),(0,r.jsx)(o.p,{children:"Controlplane and etcd nodes would be upgraded in batches of 50 nodes or the total number of controlplane nodes, whichever is lower."}),(0,r.jsx)(o.p,{children:"If a node fails at any time, the upgrade will stop upgrading any other nodes and fail."}),(0,r.jsx)(o.h3,{id:"upgrades-of-worker-nodes-1",children:"Upgrades of Worker Nodes"}),(0,r.jsx)(o.p,{children:"Worker nodes are upgraded simultaneously, in batches of either 50 or the total number of worker nodes, whichever is lower. If a worker node fails at any time, the upgrade stops."}),(0,r.jsxs)(o.p,{children:["When a worker node is upgraded, it restarts several Docker processes, including the ",(0,r.jsx)(o.code,{children:"kubelet"})," and ",(0,r.jsx)(o.code,{children:"kube-proxy"}),". When ",(0,r.jsx)(o.code,{children:"kube-proxy"})," comes up, it flushes ",(0,r.jsx)(o.code,{children:"iptables"}),". When this happens, pods on this node can\u2019t be accessed, resulting in downtime for the applications."]})]})]})]})}function u(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function h(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,o,n)=>{n.d(o,{Z:()=>t,a:()=>s});var r=n(7294);const a={},d=r.createContext(a);function s(e){const o=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);