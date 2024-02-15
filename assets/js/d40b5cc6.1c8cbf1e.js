"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3545],{7798:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var n=t(5893),o=t(1151);const a={title:"Backups and Disaster Recovery"},r=void 0,i={id:"etcd-snapshots/etcd-snapshots",title:"Backups and Disaster Recovery",description:"Available as of v0.1.7",source:"@site/docs/etcd-snapshots/etcd-snapshots.md",sourceDirName:"etcd-snapshots",slug:"/etcd-snapshots/",permalink:"/etcd-snapshots/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/etcd-snapshots.md",tags:[],version:"current",lastUpdatedAt:1708018833,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"Backups and Disaster Recovery"},sidebar:"mySidebar",previous:{title:"Kubeconfig File",permalink:"/kubeconfig/"},next:{title:"One-time Snapshots",permalink:"/etcd-snapshots/one-time-snapshots/"}},c={},h=[{value:"Backing Up a Cluster",id:"backing-up-a-cluster",level:2},{value:"Restoring a Cluster from Backup",id:"restoring-a-cluster-from-backup",level:2},{value:"Example Scenarios",id:"example-scenarios",level:2},{value:"How Snapshots Work",id:"how-snapshots-work",level:2},{value:"Snapshot Naming",id:"snapshot-naming",level:3},{value:"How Restoring from a Snapshot Works",id:"how-restoring-from-a-snapshot-works",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Available as of v0.1.7"})}),"\n",(0,n.jsxs)(s.p,{children:["RKE clusters can be configured to automatically take snapshots of etcd. In a disaster scenario, you can restore these snapshots, which are stored on other nodes in the cluster. Snapshots are always saved locally in ",(0,n.jsx)(s.code,{children:"/opt/rke/etcd-snapshots"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Available as of v0.2.0"})}),"\n",(0,n.jsx)(s.p,{children:"RKE can upload your snapshots to a S3 compatible backend."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," As of RKE v0.2.0, the ",(0,n.jsx)(s.code,{children:"pki.bundle.tar.gz"})," file is no longer required because of a change in how the ",(0,n.jsx)(s.a,{href:"/installation/#kubernetes-cluster-state",children:"Kubernetes cluster state is stored"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"backing-up-a-cluster",children:"Backing Up a Cluster"}),"\n",(0,n.jsxs)(s.p,{children:["You can create ",(0,n.jsx)(s.a,{href:"/etcd-snapshots/one-time-snapshots/",children:"one-time snapshots"})," to back up your cluster, and you can also configure ",(0,n.jsx)(s.a,{href:"/etcd-snapshots/recurring-snapshots/",children:"recurring snapshots"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"restoring-a-cluster-from-backup",children:"Restoring a Cluster from Backup"}),"\n",(0,n.jsxs)(s.p,{children:["You can use RKE to ",(0,n.jsx)(s.a,{href:"/etcd-snapshots/restoring-from-backup/",children:"restore your cluster from backup"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"example-scenarios",children:"Example Scenarios"}),"\n",(0,n.jsxs)(s.p,{children:["These ",(0,n.jsx)(s.a,{href:"/etcd-snapshots/example-scenarios/",children:"example scenarios"})," for backup and restore are different based on your version of RKE."]}),"\n",(0,n.jsx)(s.h2,{id:"how-snapshots-work",children:"How Snapshots Work"}),"\n",(0,n.jsx)(s.p,{children:"For each etcd node in the cluster, the etcd cluster health is checked. If the node reports that the etcd cluster is healthy, a snapshot is created from it and optionally uploaded to S3."}),"\n",(0,n.jsxs)(s.p,{children:["The snapshot is stored in ",(0,n.jsx)(s.code,{children:"/opt/rke/etcd-snapshots"}),". If the directory is configured on the nodes as a shared mount, it will be overwritten. On S3, the snapshot will always be from the last node that uploads it, as all etcd nodes upload it and the last will remain."]}),"\n",(0,n.jsx)(s.p,{children:"In the case when multiple etcd nodes exist, any created snapshot is created after the cluster has been health checked, so it can be considered a valid snapshot of the data in the etcd cluster."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Available as of v1.1.4"})}),"\n",(0,n.jsx)(s.p,{children:"Each snapshot will include the cluster state file in addition to the etcd snapshot file."}),"\n",(0,n.jsx)(s.h3,{id:"snapshot-naming",children:"Snapshot Naming"}),"\n",(0,n.jsxs)(s.p,{children:["The name of the snapshot is auto-generated. The ",(0,n.jsx)(s.code,{children:"--name"})," option can be used to override the name of the snapshot when creating one-time snapshots with the RKE CLI."]}),"\n",(0,n.jsxs)(s.p,{children:["An example one-time snapshot name is ",(0,n.jsx)(s.code,{children:"rke_etcd_snapshot_2020-10-15T16:47:24+02:00"}),". An example recurring snapshot name is ",(0,n.jsx)(s.code,{children:"2020-10-15T14:53:26Z_etcd"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"how-restoring-from-a-snapshot-works",children:"How Restoring from a Snapshot Works"}),"\n",(0,n.jsx)(s.p,{children:"On restore, the following process is used:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The snapshot is retrieved from S3, if S3 is configured."}),"\n",(0,n.jsx)(s.li,{children:"The snapshot is unzipped (if zipped)."}),"\n",(0,n.jsxs)(s.li,{children:["It is checked if the cluster state file is included in the snapshot, if it is included, it will be used instead of the local cluster state file (",(0,n.jsx)(s.em,{children:"Available as of v1.1.4"}),")"]}),"\n",(0,n.jsx)(s.li,{children:"One of the etcd nodes in the cluster serves that snapshot file to the other nodes."}),"\n",(0,n.jsx)(s.li,{children:"The other etcd nodes download the snapshot and validate the checksum so that they all use the same snapshot for the restore."}),"\n",(0,n.jsx)(s.li,{children:"The cluster is restored and post-restore actions will be done in the cluster."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(s.p,{children:["If you have trouble restoring your cluster, you can refer to the ",(0,n.jsx)(s.a,{href:"/etcd-snapshots/troubleshooting/",children:"troubleshooting"})," page."]})]})}function d(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>r});var n=t(7294);const o={},a=n.createContext(o);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);