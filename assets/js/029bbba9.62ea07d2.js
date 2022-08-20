"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8756],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5237:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Adding and Removing Nodes",description:"RKE supports adding/removing nodes for worker and controlplane hosts. Learn about the changes you need to make to the cluster.yml in order to add/remove nodes",weight:175,aliases:["/rke/latest/en/installation/managing-clusters/"]},s=void 0,d={unversionedId:"managing-clusters/managing-clusters",id:"managing-clusters/managing-clusters",title:"Adding and Removing Nodes",description:"RKE supports adding/removing nodes for worker and controlplane hosts. Learn about the changes you need to make to the cluster.yml in order to add/remove nodes",source:"@site/docs/managing-clusters/managing-clusters.md",sourceDirName:"managing-clusters",slug:"/managing-clusters/",permalink:"/rke1-docs/managing-clusters/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/managing-clusters/managing-clusters.md",tags:[],version:"current",lastUpdatedAt:1660995383,formattedLastUpdatedAt:"8/20/2022",frontMatter:{title:"Adding and Removing Nodes",description:"RKE supports adding/removing nodes for worker and controlplane hosts. Learn about the changes you need to make to the cluster.yml in order to add/remove nodes",weight:175,aliases:["/rke/latest/en/installation/managing-clusters/"]},sidebar:"mySidebar",previous:{title:"Certificate Management",permalink:"/rke1-docs/cert-mgmt/"},next:{title:"Kubernetes Configuration Options",permalink:"/rke1-docs/config-options/"}},u={},p=[{value:"Adding/Removing Nodes",id:"addingremoving-nodes",level:3},{value:"Adding/Removing Worker Nodes",id:"addingremoving-worker-nodes",level:3},{value:"Removing Kubernetes Components from Nodes",id:"removing-kubernetes-components-from-nodes",level:3}],c={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"addingremoving-nodes"},"Adding/Removing Nodes"),(0,a.kt)("p",null,"RKE supports adding/removing ",(0,a.kt)("a",{parentName:"p",href:"config-options/nodes/"},"nodes")," for worker and controlplane hosts."),(0,a.kt)("p",null,"In order to add additional nodes, you update the original ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file with any additional nodes and specify their role in the Kubernetes cluster."),(0,a.kt)("p",null,"In order to remove nodes, remove the node information from the nodes list in the original ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,a.kt)("p",null,"After you've made changes to add/remove nodes, run ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," with the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,a.kt)("h3",{id:"addingremoving-worker-nodes"},"Adding/Removing Worker Nodes"),(0,a.kt)("p",null,"You can add/remove only worker nodes, by running ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up --update-only"),". This will ignore everything else in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml")," except for any worker nodes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," When using ",(0,a.kt)("inlineCode",{parentName:"p"},"--update-only"),", other actions that do not specifically relate to nodes may be deployed or updated, for example ","[addons]","({{< baseurl >}}/rke/latest/en/config-options/add-ons).")),(0,a.kt)("h3",{id:"removing-kubernetes-components-from-nodes"},"Removing Kubernetes Components from Nodes"),(0,a.kt)("p",null,"In order to remove the Kubernetes components from nodes, you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke remove")," command."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," This command is irreversible and will destroy the Kubernetes cluster, including etcd snapshots on S3. If there is a disaster and your cluster is inaccessible, refer to the process for ",(0,a.kt)("a",{parentName:"p",href:"etcd-snapshots/#etcd-disaster-recovery"},"restoring your cluster from a snapshot"),".")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rke remove")," command does the following to each node in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove the Kubernetes component deployed on it",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nginx-proxy"))))),(0,a.kt)("p",null,"The cluster's etcd snapshots are removed, including both local snapshots and snapshots that are stored on S3."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Pods are not removed from the nodes. If the node is re-used, the pods will automatically be removed when the new Kubernetes cluster is created.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clean each host from the directories left by the services:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/etc/kubernetes/ssl"),(0,a.kt)("li",{parentName:"ul"},"/var/lib/etcd"),(0,a.kt)("li",{parentName:"ul"},"/etc/cni"),(0,a.kt)("li",{parentName:"ul"},"/opt/cni"),(0,a.kt)("li",{parentName:"ul"},"/var/run/calico")))))}m.isMDXComponent=!0}}]);