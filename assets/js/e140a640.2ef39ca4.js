"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[6719],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Default Kubernetes Services",description:"To deploy Kubernetes, RKE deploys several default Kubernetes services. Read about etcd, kube-api server, kubelet, kube-proxy and more",weight:230},l=void 0,u={unversionedId:"config-options/services/services",id:"config-options/services/services",title:"Default Kubernetes Services",description:"To deploy Kubernetes, RKE deploys several default Kubernetes services. Read about etcd, kube-api server, kubelet, kube-proxy and more",source:"@site/docs/config-options/services/services.md",sourceDirName:"config-options/services",slug:"/config-options/services/",permalink:"/config-options/services/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/config-options/services/services.md",tags:[],version:"current",lastUpdatedAt:1660909784,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Default Kubernetes Services",description:"To deploy Kubernetes, RKE deploys several default Kubernetes services. Read about etcd, kube-api server, kubelet, kube-proxy and more",weight:230},sidebar:"mySidebar",previous:{title:"Extra Args, Extra Binds, and Extra Environment Variables",permalink:"/config-options/services/services-extras/"},next:{title:"Encrypting Secret Data at Rest",permalink:"/config-options/secrets-encryption/"}},p={},c=[{value:"etcd",id:"etcd",level:2},{value:"Kubernetes API Server",id:"kubernetes-api-server",level:2},{value:"Kubernetes API Server Options",id:"kubernetes-api-server-options",level:3},{value:"Kubernetes Controller Manager",id:"kubernetes-controller-manager",level:2},{value:"Kubernetes Controller Manager Options",id:"kubernetes-controller-manager-options",level:3},{value:"Kubelet",id:"kubelet",level:2},{value:"Kubelet Options",id:"kubelet-options",level:3},{value:"Kubelet Serving Certificate Requirements",id:"kubelet-serving-certificate-requirements",level:3},{value:"Kubernetes Scheduler",id:"kubernetes-scheduler",level:2},{value:"Kubernetes Network Proxy",id:"kubernetes-network-proxy",level:2}],d={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To deploy Kubernetes, RKE deploys several core components or services in Docker containers on the nodes. Based on the roles of the node, the containers deployed may be different."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," All services support ",(0,i.kt)("b",null,"additional custom arguments, Docker mount binds, and extra environment variables.")," "),(0,i.kt)("p",{parentName:"blockquote"},"To configure advanced options for Kubernetes services such as ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-controller"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," that are not documented below, see the ",(0,i.kt)("a",{parentName:"p",href:"config-options/services/services-extras/"},(0,i.kt)("inlineCode",{parentName:"a"},"extra_args")," documentation")," for more details.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component"),(0,i.kt)("th",{parentName:"tr",align:null},"Services key name in cluster.yml"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"etcd"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"etcd"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kube-apiserver"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kube-api"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kube-controller-manager"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kube-controller"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kubelet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kubelet"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kube-scheduler"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scheduler"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kube-proxy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kubeproxy"))))),(0,i.kt)("h2",{id:"etcd"},"etcd"),(0,i.kt)("p",null,"Kubernetes uses ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/"},"etcd")," as a store for cluster state and data. Etcd is a reliable, consistent and distributed key-value store."),(0,i.kt)("p",null,"RKE supports running etcd in a single node mode or in HA cluster mode. It also supports adding and removing etcd nodes to the cluster."),(0,i.kt)("p",null,"You can enable etcd to ",(0,i.kt)("a",{parentName:"p",href:"etcd-snapshots/#recurring-snapshots"},"take recurring snapshots"),". These snapshots can be used to ",(0,i.kt)("a",{parentName:"p",href:"etcd-snapshots/#etcd-disaster-recovery"},"restore etcd"),"."),(0,i.kt)("p",null,"By default, RKE will deploy a new etcd service, but you can also run Kubernetes with an ",(0,i.kt)("a",{parentName:"p",href:"config-options/services/external-etcd/"},"external etcd service"),"."),(0,i.kt)("h2",{id:"kubernetes-api-server"},"Kubernetes API Server"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note for Rancher 2 users")," If you are configuring Cluster Options using a ",(0,i.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v2.x/en/cluster-provisioning/rke-clusters/options/#cluster-config-file"},"Config File")," when creating ",(0,i.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v2.x/en/cluster-provisioning/rke-clusters/"},"Rancher Launched Kubernetes"),", the names of services should contain underscores only: ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_api"),". This only applies to Rancher v2.0.5 and v2.0.6.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"},"Kubernetes API")," REST service, which handles requests and data for all Kubernetes objects and provide shared state for all the other Kubernetes components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    # IP range for any services created on Kubernetes\n    # This must match the service_cluster_ip_range in kube-controller\n    service_cluster_ip_range: 10.43.0.0/16\n    # Expose a different port range for NodePort services\n    service_node_port_range: 30000-32767\n    pod_security_policy: false\n    # Enable AlwaysPullImages Admission controller plugin\n    # Available as of v0.2.0\n    always_pull_images: false\n    secrets_encryption_config:\n      enabled: true\n")),(0,i.kt)("h3",{id:"kubernetes-api-server-options"},"Kubernetes API Server Options"),(0,i.kt)("p",null,"RKE supports the following options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-api")," service :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service Cluster IP Range")," (",(0,i.kt)("inlineCode",{parentName:"li"},"service_cluster_ip_range"),") - This is the virtual IP address that will be assigned to services created on Kubernetes. By default, the service cluster IP range is ",(0,i.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),". If you change this value, then it must also be set with the same value on the Kubernetes Controller Manager (",(0,i.kt)("inlineCode",{parentName:"li"},"kube-controller"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node Port Range")," (",(0,i.kt)("inlineCode",{parentName:"li"},"service_node_port_range"),") - The port range to be used for Kubernetes services created with the ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"type")," ",(0,i.kt)("inlineCode",{parentName:"li"},"NodePort"),". By default, the port range is ",(0,i.kt)("inlineCode",{parentName:"li"},"30000-32767"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pod Security Policy")," (",(0,i.kt)("inlineCode",{parentName:"li"},"pod_security_policy"),") - An option to enable the ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Kubernetes Pod Security Policy"),". By default, we do not enable pod security policies as it is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"pod_security_policy")," value to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", RKE will configure an  open policy to allow any pods to work on the cluster. You will need to configure your own policies to fully utilize PSP."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Always Pull Images")," (",(0,i.kt)("inlineCode",{parentName:"li"},"always_pull_images"),") - Enable ",(0,i.kt)("inlineCode",{parentName:"li"},"AlwaysPullImages")," Admission controller plugin.  Enabling ",(0,i.kt)("inlineCode",{parentName:"li"},"AlwaysPullImages")," is a security best practice. It forces Kubernetes to validate the image and pull credentials with the remote image registry. Local image layer cache will still be used, but it does add a small bit of overhead when launching containers to pull and compare image hashes. ",(0,i.kt)("em",{parentName:"li"},"Note: Available as of v0.2.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secrets Encryption Config")," (",(0,i.kt)("inlineCode",{parentName:"li"},"secrets_encryption_config"),") - Manage Kubernetes at-rest data encryption. Documented ",(0,i.kt)("a",{parentName:"li",href:"%7B%7B%3Cbaseurl%3E%7D%7D//rke/latest/en/config-options/secrets-encryption"},"here"))),(0,i.kt)("h2",{id:"kubernetes-controller-manager"},"Kubernetes Controller Manager"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note for Rancher 2 users")," If you are configuring Cluster Options using a ",(0,i.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v2.x/en/cluster-provisioning/rke-clusters/options/#cluster-config-file"},"Config File")," when creating ",(0,i.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v2.x/en/cluster-provisioning/rke-clusters/"},"Rancher Launched Kubernetes"),", the names of services should contain underscores only: ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_controller"),". This only applies to Rancher v2.0.5 and v2.0.6.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"Kubernetes Controller Manager")," service is the component responsible for running Kubernetes main control loops. The controller manager monitors the cluster desired state through the Kubernetes API server and makes the necessary changes to the current state to reach the desired state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n    kube-controller:\n      # CIDR pool used to assign IP addresses to pods in the cluster\n      cluster_cidr: 10.42.0.0/16\n      # IP range for any services created on Kubernetes\n      # This must match the service_cluster_ip_range in kube-api\n      service_cluster_ip_range: 10.43.0.0/16\n")),(0,i.kt)("h3",{id:"kubernetes-controller-manager-options"},"Kubernetes Controller Manager Options"),(0,i.kt)("p",null,"RKE supports the following options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-controller")," service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cluster CIDR")," (",(0,i.kt)("inlineCode",{parentName:"li"},"cluster_cidr"),") - The CIDR pool used to assign IP addresses to pods in the cluster. By default, each node in the cluster is assigned a ",(0,i.kt)("inlineCode",{parentName:"li"},"/24")," network from this pool for pod IP assignments. The default value for this option is ",(0,i.kt)("inlineCode",{parentName:"li"},"10.42.0.0/16"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service Cluster IP Range")," (",(0,i.kt)("inlineCode",{parentName:"li"},"service_cluster_ip_range"),") - This is the virtual IP address that will be assigned to services created on Kubernetes. By default, the service cluster IP range is ",(0,i.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),". If you change this value, then it must also be set with the same value on the Kubernetes API server (",(0,i.kt)("inlineCode",{parentName:"li"},"kube-api"),").")),(0,i.kt)("h2",{id:"kubelet"},"Kubelet"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"kubelet"),' services acts as a "node agent" for Kubernetes. It runs on all nodes deployed by RKE, and gives Kubernetes the ability to manage the container runtime on the node.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n    kubelet:\n     # Base domain for the cluster\n     cluster_domain: cluster.local\n     # IP address for the DNS service endpoint\n     cluster_dns_server: 10.43.0.10\n     # Fail if swap is on\n     fail_swap_on: false\n     # Generate per node serving certificate\n     generate_serving_certificate: false\n")),(0,i.kt)("h3",{id:"kubelet-options"},"Kubelet Options"),(0,i.kt)("p",null,"RKE supports the following options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet")," service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cluster Domain")," (",(0,i.kt)("inlineCode",{parentName:"li"},"cluster_domain"),") - The ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"},"base domain")," for the cluster. All services and DNS records created on the cluster. By default, the domain is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster.local"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cluster DNS Server")," (",(0,i.kt)("inlineCode",{parentName:"li"},"cluster_dns_server"),") - The IP address assigned to the DNS service endpoint within the cluster. DNS queries will be sent to this IP address which is used by KubeDNS. The default value for this option is ",(0,i.kt)("inlineCode",{parentName:"li"},"10.43.0.10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fail if Swap is On")," (",(0,i.kt)("inlineCode",{parentName:"li"},"fail_swap_on"),") - In Kubernetes, the default behavior for the kubelet is to ",(0,i.kt)("strong",{parentName:"li"},"fail")," if swap is enabled on the node. RKE does ",(0,i.kt)("strong",{parentName:"li"},"not")," follow this default and allows deployments on nodes with swap enabled. By default, the value is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". If you'd like to revert to the default kubelet behavior, set this option to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Generate Serving Certificate")," (",(0,i.kt)("inlineCode",{parentName:"li"},"generate_serving_certificate"),") - Generate a certificate signed by the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-ca")," Certificate Authority for the kubelet to use as a server certificate. The default value for this option is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". Before enabling this option, please read ",(0,i.kt)("a",{parentName:"li",href:"#kubelet-serving-certificate-requirements"},"the requirements"))),(0,i.kt)("h3",{id:"kubelet-serving-certificate-requirements"},"Kubelet Serving Certificate Requirements"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname_override")," is configured for one or more nodes in ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", please make sure the correct IP address is configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," (and the internal address in ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_address"),") to make sure the generated certificate contains the correct IP address(es)."),(0,i.kt)("p",null,"An example of an error situation is an EC2 instance where the the public IP address is configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname_override")," is used, the connection between ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet")," will fail because the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet")," will be contacted on the private IP address and the generated certificate will not be valid (the error ",(0,i.kt)("inlineCode",{parentName:"p"},"x509: certificate is valid for value_in_address, not private_ip")," will be seen). The resolution is to provide the internal IP address in ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_address"),"."),(0,i.kt)("p",null,"For more information on host overrides, refer to the ",(0,i.kt)("a",{parentName:"p",href:"config-options/nodes/#overriding-the-hostname"},"node configuration page.")),(0,i.kt)("h2",{id:"kubernetes-scheduler"},"Kubernetes Scheduler"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/"},"Kubernetes Scheduler")," service is responsible for scheduling cluster workloads based on various configurations, metrics, resource requirements and workload-specific requirements."),(0,i.kt)("p",null,"Currently, RKE doesn't support any specific options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduler")," service."),(0,i.kt)("h2",{id:"kubernetes-network-proxy"},"Kubernetes Network Proxy"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"},"Kubernetes network proxy")," service runs on all nodes and manages endpoints created by Kubernetes for TCP/UDP ports."),(0,i.kt)("p",null,"Currently, RKE doesn't support any specific options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeproxy")," service."))}k.isMDXComponent=!0}}]);