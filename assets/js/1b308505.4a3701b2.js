"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7397],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3447:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={title:"Restoring from Backup",weight:3},i=void 0,p={unversionedId:"etcd-snapshots/restoring-from-backup/restoring-from-backup",id:"etcd-snapshots/restoring-from-backup/restoring-from-backup",title:"Restoring from Backup",description:"The details of restoring your cluster from backup are different depending on your version of RKE.",source:"@site/docs/etcd-snapshots/restoring-from-backup/restoring-from-backup.md",sourceDirName:"etcd-snapshots/restoring-from-backup",slug:"/etcd-snapshots/restoring-from-backup/",permalink:"/rke1-docs/etcd-snapshots/restoring-from-backup/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/restoring-from-backup/restoring-from-backup.md",tags:[],version:"current",lastUpdatedAt:1673916109,formattedLastUpdatedAt:"1/17/2023",frontMatter:{title:"Restoring from Backup",weight:3},sidebar:"mySidebar",previous:{title:"Recurring Snapshots",permalink:"/rke1-docs/etcd-snapshots/recurring-snapshots/"},next:{title:"Example Scenarios",permalink:"/rke1-docs/etcd-snapshots/example-scenarios/"}},u={},d=[{value:"Example of Restoring from a Local Snapshot",id:"example-of-restoring-from-a-local-snapshot",level:3},{value:"Example of Restoring from a Snapshot in S3",id:"example-of-restoring-from-a-snapshot-in-s3",level:3},{value:"Options for <code>rke etcd snapshot-restore</code>",id:"options-for-rke-etcd-snapshot-restore",level:3},{value:"Example of Restoring from a Local Snapshot",id:"example-of-restoring-from-a-local-snapshot-1",level:3},{value:"Options for <code>rke etcd snapshot-restore</code>",id:"options-for-rke-etcd-snapshot-restore-1",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The details of restoring your cluster from backup are different depending on your version of RKE."),(0,o.kt)("p",null,'{{% tabs %}}\n{{% tab "RKE v0.2.0+"%}}'),(0,o.kt)("p",null,"If there is a disaster with your Kubernetes cluster, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," to recover your etcd. This command reverts etcd to a specific snapshot and should be run on an etcd node of the the specific cluster that has suffered the disaster. "),(0,o.kt)("p",null,"The following actions will be performed when you run the command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Syncs the snapshot or downloads the snapshot from S3, if necessary."),(0,o.kt)("li",{parentName:"ul"},"Checks snapshot checksum across etcd nodes to make sure they are identical."),(0,o.kt)("li",{parentName:"ul"},"Deletes your current cluster and cleans old data by running ",(0,o.kt)("inlineCode",{parentName:"li"},"rke remove"),". This removes the entire Kubernetes cluster, not just the etcd cluster."),(0,o.kt)("li",{parentName:"ul"},"Rebuilds the etcd cluster from the chosen snapshot."),(0,o.kt)("li",{parentName:"ul"},"Creates a new cluster by running ",(0,o.kt)("inlineCode",{parentName:"li"},"rke up"),"."),(0,o.kt)("li",{parentName:"ul"},"Restarts cluster system pods.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning:")," You should back up any important data in your cluster before running ",(0,o.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," because the command deletes your current Kubernetes cluster and replaces it with a new one.")),(0,o.kt)("p",null,"The snapshot used to restore your etcd cluster can either be stored locally in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," or from a S3 compatible backend."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.1.4")),(0,o.kt)("p",null,"If the snapshot contains the cluster state file, it will automatically be extracted and used for the restore. If you want to force the use of the local state file, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"--use-local-state")," to the command. If the snapshot was created using an RKE version before v1.1.4, or if the snapshot does not contain a state file, make sure the cluster state file (by default available as ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),") is present before executing the command."),(0,o.kt)("h3",{id:"example-of-restoring-from-a-local-snapshot"},"Example of Restoring from a Local Snapshot"),(0,o.kt)("p",null,"To restore etcd from a local snapshot, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-restore --config cluster.yml --name mysnapshot\n")),(0,o.kt)("p",null,"The snapshot is assumed to be located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," file is not needed because RKE v0.2.0 changed how the ",(0,o.kt)("a",{parentName:"p",href:"installation/#kubernetes-cluster-state"},"Kubernetes cluster state is stored"),"."),(0,o.kt)("h3",{id:"example-of-restoring-from-a-snapshot-in-s3"},"Example of Restoring from a Snapshot in S3"),(0,o.kt)("p",null,"When restoring etcd from a snapshot located in S3, the command needs the S3 information in order to connect to the S3 backend and retrieve the snapshot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ rke etcd snapshot-restore \\\n--config cluster.yml \\\n--name snapshot-name \\\n--s3 \\\n--access-key S3_ACCESS_KEY \\\n--secret-key S3_SECRET_KEY \\\n--bucket-name s3-bucket-name \\\n--folder s3-folder-name \\ # Optional - Available as of v0.3.0\n--s3-endpoint s3.amazonaws.com\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," if you were restoring a cluster that had Rancher installed, the Rancher UI should start up after a few minutes; you don't need to re-run Helm."),(0,o.kt)("h3",{id:"options-for-rke-etcd-snapshot-restore"},"Options for ",(0,o.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-restore")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"S3 Specific"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify snapshot name"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--use-local-state")),(0,o.kt)("td",{parentName:"tr",align:null},"Force the use of the local state file instead of looking for a state file in the snapshot ",(0,o.kt)("em",{parentName:"td"},"Available as of v1.1.4")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--s3")),(0,o.kt)("td",{parentName:"tr",align:null},"Enabled backup to s3"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--s3-endpoint")," value"),(0,o.kt)("td",{parentName:"tr",align:null},'Specify s3 endpoint url (default: "s3.amazonaws.com")'),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--access-key")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 accessKey"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--secret-key")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 secretKey"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--bucket-name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 bucket name"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--folder")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify folder inside  bucket where backup will be stored. This is optional.  This is optional. ",(0,o.kt)("em",{parentName:"td"},"Available as of v0.3.0")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--region")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the s3 bucket location (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,'{{% /tab %}}\n{{% tab "RKE before v0.2.0"%}}'),(0,o.kt)("p",null,"If there is a disaster with your Kubernetes cluster, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," to recover your etcd. This command reverts etcd to a specific snapshot and should be run on an etcd node of the the specific cluster that has suffered the disaster. "),(0,o.kt)("p",null,"The following actions will be performed when you run the command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removes the old etcd cluster"),(0,o.kt)("li",{parentName:"ul"},"Rebuilds the etcd cluster using the local snapshot")),(0,o.kt)("p",null,"Before you run this command, you must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"rke remove")," to remove your Kubernetes cluster and clean the nodes"),(0,o.kt)("li",{parentName:"ul"},"Download your etcd snapshot from S3, if applicable. Place the etcd snapshot and the ",(0,o.kt)("inlineCode",{parentName:"li"},"pki.bundle.tar.gz")," file in ",(0,o.kt)("inlineCode",{parentName:"li"},"/opt/rke/etcd-snapshots"),". Manually sync the snapshot across all ",(0,o.kt)("inlineCode",{parentName:"li"},"etcd")," nodes.")),(0,o.kt)("p",null,"After the restore, you must rebuild your Kubernetes cluster with ",(0,o.kt)("inlineCode",{parentName:"p"},"rke up"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning:")," You should back up any important data in your cluster before running ",(0,o.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-restore")," because the command deletes your current etcd cluster and replaces it with a new one.")),(0,o.kt)("h3",{id:"example-of-restoring-from-a-local-snapshot-1"},"Example of Restoring from a Local Snapshot"),(0,o.kt)("p",null,"To restore etcd from a local snapshot, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-restore --config cluster.yml --name mysnapshot\n")),(0,o.kt)("p",null,"The snapshot is assumed to be located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,o.kt)("p",null,"The snapshot must be manually synched across all ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," nodes."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," file is also expected to be in the same location."),(0,o.kt)("h3",{id:"options-for-rke-etcd-snapshot-restore-1"},"Options for ",(0,o.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-restore")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify snapshot name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check"))))),(0,o.kt)("p",null,"{{% /tab %}}\n{{% /tabs %}}"))}m.isMDXComponent=!0}}]);