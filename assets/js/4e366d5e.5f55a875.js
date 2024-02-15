"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3595],{2798:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=r(5893),i=r(1151);const t={title:"Upgrades"},o=void 0,a={id:"upgrades/upgrades",title:"Upgrades",description:"After RKE has deployed Kubernetes, you can upgrade the versions of the components in your Kubernetes cluster, the definition of the Kubernetes services or the add-ons.",source:"@site/docs/upgrades/upgrades.md",sourceDirName:"upgrades",slug:"/upgrades/",permalink:"/upgrades/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/upgrades.md",tags:[],version:"current",lastUpdatedAt:1708018833,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"Upgrades"},sidebar:"mySidebar",previous:{title:"Custom Certificates",permalink:"/installation/certs/"},next:{title:"How Upgrades Work",permalink:"/upgrades/how-upgrades-work/"}},d={},l=[{value:"How Upgrades Work",id:"how-upgrades-work",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Upgrading Kubernetes",id:"upgrading-kubernetes",level:3},{value:"Configuring the Upgrade Strategy",id:"configuring-the-upgrade-strategy",level:3},{value:"Maintaining Availability for Applications During Upgrades",id:"maintaining-availability-for-applications-during-upgrades",level:3},{value:"Listing Supported Kubernetes Versions",id:"listing-supported-kubernetes-versions",level:3},{value:"Kubernetes Version Precedence",id:"kubernetes-version-precedence",level:3},{value:"Using an Unsupported Kubernetes Version",id:"using-an-unsupported-kubernetes-version",level:3},{value:"Mapping the Kubernetes Version to Services",id:"mapping-the-kubernetes-version-to-services",level:3},{value:"Service Upgrades",id:"service-upgrades",level:3},{value:"Upgrading Nodes Manually",id:"upgrading-nodes-manually",level:3},{value:"Rolling Back the Kubernetes Version",id:"rolling-back-the-kubernetes-version",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{TabItem:r,Tabs:t}=n;return r||h("TabItem",!0),t||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["After RKE has deployed Kubernetes, you can upgrade the versions of the components in your Kubernetes cluster, the ",(0,s.jsx)(n.a,{href:"/config-options/services/",children:"definition of the Kubernetes services"})," or the ",(0,s.jsx)(n.a,{href:"/config-options/add-ons/",children:"add-ons"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The default Kubernetes version for each RKE version can be found in the release notes accompanying ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/rke/releases/",children:"the RKE download"}),". These can also be checked with the ",(0,s.jsx)(n.a,{href:"#listing-supported-kubernetes-versions",children:"rke CLI"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can also select a newer version of Kubernetes to install for your cluster but please avoid skipping minor versions, as this can increase the chances of an issue due to accumulated changes, as per the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/releases/version-skew-policy/",children:"upstream Kubernetes documentation"})]}),"\n",(0,s.jsxs)(n.p,{children:["In case the Kubernetes version is defined in the ",(0,s.jsx)(n.code,{children:"kubernetes_version"})," directive and under the ",(0,s.jsx)(n.code,{children:"system-images"})," directive, the ",(0,s.jsx)(n.code,{children:"system-images"})," configuration will take precedence over the ",(0,s.jsx)(n.code,{children:"kubernetes_version"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"how-upgrades-work",children:"How Upgrades Work"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"/upgrades/how-upgrades-work/",children:"this section,"})," you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure that any ",(0,s.jsx)(n.code,{children:"system_images"})," configuration is absent from the ",(0,s.jsx)(n.code,{children:"cluster.yml"}),". The Kubernetes version should only be listed under the ",(0,s.jsx)(n.code,{children:"system_images"})," directive if an ",(0,s.jsx)(n.a,{href:"#using-an-unsupported-kubernetes-version",children:"unsupported version"})," is being used. Refer to ",(0,s.jsx)(n.a,{href:"#kubernetes-version-precedence",children:"Kubernetes version precedence"})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure that the correct files to manage ",(0,s.jsx)(n.a,{href:"/installation/#kubernetes-cluster-state",children:"Kubernetes cluster state"})," are present in the working directory. Refer to the tabs below for the required files, which differ based on the RKE version."]}),"\n"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)(r,{value:"RKE v0.2.0+",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"cluster.rkestate"})," file contains the current state of the cluster including the RKE configuration and the certificates."]}),(0,s.jsxs)(n.p,{children:["This file is created in the same directory that has the cluster configuration file ",(0,s.jsx)(n.code,{children:"cluster.yml"}),"."]}),(0,s.jsxs)(n.p,{children:["It is required to keep the ",(0,s.jsx)(n.code,{children:"cluster.rkestate"})," file to perform any operation on the cluster through RKE, or when upgrading a cluster last managed via RKE v0.2.0 or later."]})]}),(0,s.jsxs)(r,{value:"RKE before v0.2.0",children:[(0,s.jsxs)(n.p,{children:["Ensure that the ",(0,s.jsx)(n.code,{children:"kube_config_cluster.yml"})," file is present in the working directory."]}),(0,s.jsxs)(n.p,{children:["RKE saves the Kubernetes cluster state as a secret. When updating the state, RKE pulls the secret, updates or changes the state, and saves a new secret. The ",(0,s.jsx)(n.code,{children:"kube_config_cluster.yml"})," file is required for upgrading a cluster last managed via RKE v0.1.x."]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"upgrading-kubernetes",children:"Upgrading Kubernetes"}),"\n",(0,s.jsxs)(n.p,{children:["To upgrade the Kubernetes version of an RKE-provisioned cluster, set the ",(0,s.jsx)(n.code,{children:"kubernetes_version"})," string in the ",(0,s.jsx)(n.code,{children:"cluster.yml"})," to the desired version from the ",(0,s.jsx)(n.a,{href:"#listing-supported-kubernetes-versions",children:"list of supported Kubernetes versions"})," for the specific version of RKE:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'kubernetes_version: "v1.15.5-rancher1-1"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then invoke ",(0,s.jsx)(n.code,{children:"rke up"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ rke up --config cluster.yml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configuring-the-upgrade-strategy",children:"Configuring the Upgrade Strategy"}),"\n",(0,s.jsxs)(n.p,{children:["As of v0.1.8, upgrades to add-ons are supported. ",(0,s.jsx)(n.a,{href:"/config-options/add-ons/",children:"Add-ons"})," can also be upgraded by changing any of the add-ons and running ",(0,s.jsx)(n.code,{children:"rke up"})," again with the updated configuration file."]}),"\n",(0,s.jsx)(n.p,{children:"As of v1.1.0, additional upgrade options became available to give you more granular control over the upgrade process. These options can be used to maintain availability of your applications during a cluster upgrade."}),"\n",(0,s.jsxs)(n.p,{children:["For details on upgrade configuration options, refer to ",(0,s.jsx)(n.a,{href:"/upgrades/configuring-strategy/",children:"Configuring the Upgrade Strategy."})]}),"\n",(0,s.jsx)(n.h3,{id:"maintaining-availability-for-applications-during-upgrades",children:"Maintaining Availability for Applications During Upgrades"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"/upgrades/maintaining-availability/",children:"this section,"})," you'll learn the requirements to prevent downtime for your applications when you upgrade the cluster using ",(0,s.jsx)(n.code,{children:"rke up"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"listing-supported-kubernetes-versions",children:"Listing Supported Kubernetes Versions"}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/rke/releases",children:"release notes"})," of the RKE version that you are running, to find the list of supported Kubernetes versions as well as the default Kubernetes version. Note: RKE v1.x should be used."]}),"\n",(0,s.jsx)(n.p,{children:"You can also list the supported versions and system images of specific version of RKE release with a quick command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ rke config --list-version --all\nv1.15.3-rancher2-1\nv1.13.10-rancher1-2\nv1.14.6-rancher2-1\nv1.16.0-beta.1-rancher1-1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kubernetes-version-precedence",children:"Kubernetes Version Precedence"}),"\n",(0,s.jsxs)(n.p,{children:["In case both ",(0,s.jsx)(n.code,{children:"kubernetes_version"})," and ",(0,s.jsx)(n.code,{children:"system_images"})," are defined, the ",(0,s.jsx)(n.code,{children:"system_images"})," configuration will take precedence over ",(0,s.jsx)(n.code,{children:"kubernetes_version"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In addition, if neither ",(0,s.jsx)(n.code,{children:"kubernetes_version"})," nor ",(0,s.jsx)(n.code,{children:"system_images"})," are configured in the ",(0,s.jsx)(n.code,{children:"cluster.yml"}),", RKE will apply the default Kubernetes version for the specific version of RKE used to invoke ",(0,s.jsx)(n.code,{children:"rke up"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"using-an-unsupported-kubernetes-version",children:"Using an Unsupported Kubernetes Version"}),"\n",(0,s.jsxs)(n.p,{children:["As of v0.2.0, if a version is defined in ",(0,s.jsx)(n.code,{children:"kubernetes_version"})," and is not found in the specific list of supported Kubernetes versions, then RKE will error out."]}),"\n",(0,s.jsxs)(n.p,{children:["Before v0.2.0, if a version is defined in ",(0,s.jsx)(n.code,{children:"kubernetes_version"})," and is not found in the specific list of supported Kubernetes versions,  the default version from the supported list is used."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use a different version from the supported list, please use the ",(0,s.jsx)(n.a,{href:"/config-options/system-images/",children:"system images"})," option."]}),"\n",(0,s.jsx)(n.h3,{id:"mapping-the-kubernetes-version-to-services",children:"Mapping the Kubernetes Version to Services"}),"\n",(0,s.jsxs)(n.p,{children:["In RKE, ",(0,s.jsx)(n.code,{children:"kubernetes_version"})," is used to map the version of Kubernetes to the default services, parameters, and options."]}),"\n",(0,s.jsxs)(n.p,{children:["For RKE v0.3.0+, the service defaults are located ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/kontainer-driver-metadata/blob/master/rke/k8s_service_options.go",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For RKE before v0.3.0, the service defaults are located ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/types/blob/release/v2.2/apis/management.cattle.io/v3/k8s_defaults.go",children:"here"}),". Note: The version in the path of the service defaults file corresponds to a Rancher version. Therefore, for Rancher v2.1.x, ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/types/blob/release/v2.1/apis/management.cattle.io/v3/k8s_defaults.go",children:"this file"})," should be used."]}),"\n",(0,s.jsx)(n.h3,{id:"service-upgrades",children:"Service Upgrades"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/config-options/services/",children:"Services"})," can be upgraded by changing any of the services arguments or ",(0,s.jsx)(n.code,{children:"extra_args"})," and running ",(0,s.jsx)(n.code,{children:"rke up"})," again with the updated configuration file."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The following arguments, ",(0,s.jsx)(n.code,{children:"service_cluster_ip_range"})," or ",(0,s.jsx)(n.code,{children:"cluster_cidr"}),", cannot be changed as any changes to these arguments will result in a broken cluster. Currently, network pods are not automatically upgraded."]})}),"\n",(0,s.jsx)(n.h3,{id:"upgrading-nodes-manually",children:"Upgrading Nodes Manually"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Available as of v1.1.0"})}),"\n",(0,s.jsx)(n.p,{children:"You can manually update each type of node separately. As a best practice, upgrade the etcd nodes first, followed by controlplane and then worker nodes."}),"\n",(0,s.jsx)(n.h3,{id:"rolling-back-the-kubernetes-version",children:"Rolling Back the Kubernetes Version"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Available as of v1.1.0"})}),"\n",(0,s.jsx)(n.p,{children:"A cluster can be restored back to a snapshot that uses a previous Kubernetes version."}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Applies to v1.1.0+"})}),"\n",(0,s.jsxs)(n.p,{children:["If a node doesn't come up after an upgrade, the ",(0,s.jsx)(n.code,{children:"rke up"})," command errors out."]}),"\n",(0,s.jsx)(n.p,{children:"No upgrade will proceed if the number of unavailable nodes exceeds the configured maximum."}),"\n",(0,s.jsx)(n.p,{children:"If an upgrade stops, you may need to fix an unavailable node or remove it from the cluster before the upgrade can continue."}),"\n",(0,s.jsx)(n.p,{children:"A failed node could be in many different states:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Powered off"}),"\n",(0,s.jsx)(n.li,{children:"Unavailable"}),"\n",(0,s.jsx)(n.li,{children:"User drains a node while upgrade is in process, so there are no kubelets on the node"}),"\n",(0,s.jsx)(n.li,{children:"The upgrade itself failed"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Some expected failure scenarios include the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the maximum unavailable number of nodes is reached during an upgrade, the RKE CLI will error out and exit the CLI with a failure code."}),"\n",(0,s.jsx)(n.li,{children:"If some nodes fail to upgrade, but the number of failed nodes doesn't reach the maximum unavailable number of nodes, the RKE CLI logs the nodes that were unable to upgrade and continues to upgrade the add-ons. After the add-ons are upgraded, RKE will error out and exit the CLI with a failure code regardless of add-on upgrade status."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var s=r(7294);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);