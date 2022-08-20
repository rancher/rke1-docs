"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[505],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,k=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4338:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],d={title:"Azure Cloud Provider",weight:252},c=void 0,l={unversionedId:"config-options/cloud-providers/azure/azure",id:"config-options/cloud-providers/azure/azure",title:"Azure Cloud Provider",description:"To enable the Azure cloud provider, besides setting the name as azure, there are specific configuration options that must be set. Additionally, the Azure node name must also match the Kubernetes node name.",source:"@site/docs/config-options/cloud-providers/azure/azure.md",sourceDirName:"config-options/cloud-providers/azure",slug:"/config-options/cloud-providers/azure/",permalink:"/rke1-docs/config-options/cloud-providers/azure/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/config-options/cloud-providers/azure/azure.md",tags:[],version:"current",lastUpdatedAt:1660995383,formattedLastUpdatedAt:"8/20/2022",frontMatter:{title:"Azure Cloud Provider",weight:252},sidebar:"mySidebar",previous:{title:"AWS Cloud Provider",permalink:"/rke1-docs/config-options/cloud-providers/aws/"},next:{title:"Cloud Providers",permalink:"/rke1-docs/config-options/cloud-providers/"}},s={},p=[{value:"Overriding the hostname",id:"overriding-the-hostname",level:2},{value:"Azure Configuration Options",id:"azure-configuration-options",level:2}],m={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To enable the Azure cloud provider, besides setting the name as ",(0,i.kt)("inlineCode",{parentName:"p"},"azure"),", there are specific configuration options that must be set. Additionally, the Azure node name must also match the Kubernetes node name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cloud_provider:\n    name: azure\n    azureCloudProvider:\n      aadClientId: xxxxxxxxx\n      aadClientSecret: xxxxxxxxx\n      location: xxxxxxxxx\n      resourceGroup: xxxxxxxxx\n      subnetName: xxxxxxxxx\n      subscriptionId: xxxxxxxxx\n      vnetName: xxxxxxxxx\n      tenantId: xxxxxxxxx\n      securityGroupName: xxxxxxxxx\n")),(0,i.kt)("h2",{id:"overriding-the-hostname"},"Overriding the hostname"),(0,i.kt)("p",null,"Since the Azure node name must match the Kubernetes node name, you override the Kubernetes name on the node by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname_override")," for each node. If you do not set the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname_override"),", the Kubernetes node name will be set as the ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),", which will cause the Azure cloud provider to fail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n    - address: x.x.x.x\n      hostname_override: azure-rke1\n      user: ubuntu\n      role:\n        - controlplane\n        - etcd\n        - worker\n")),(0,i.kt)("h2",{id:"azure-configuration-options"},"Azure Configuration Options"),(0,i.kt)("p",null,"Besides the minimum set of options, there are many other options that are supported in RKE:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Azure Configuration Options"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"tenantId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The Azure Active Directory (Azure AD) tenant ID for the subscription that the cluster is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"subscriptionId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The ID of the Azure subscription that the cluster is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"aadClientId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The client ID for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Azure/aks-engine/blob/master/docs/topics/service-principals.md"},"service principal")," authentication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"aadClientSecret"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"*"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The client secret for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Azure/aks-engine/blob/master/docs/topics/service-principals.md"},"service principal")," authentication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloud"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The cloud environment identifier. Takes values from ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Azure/go-autorest/blob/ec5f4903f77ed9927ac95b19ab8e44ada64c1356/autorest/azure/environments.go#L13"},"here"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"resourceGroup"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the resource group that the Vnet is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"location"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The location of the resource group that the cluster is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"vnetName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the virtual network that the cluster is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"vnetResourceGroup"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the resource group that the virtual network is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"subnetName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the subnet that the cluster is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"securityGroupName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the security group attached to the cluster's subnet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"routeTableName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the route table attached to the subnet that the cluster is deployed in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"primaryAvailabilitySetName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the availability set that should be used as the load balancer backend. If this is set, the Azure cloud provider will only add nodes from that availability set to the load balancer backend pool. If this is not set, and multiple agent pools (availability sets) are used, then the cloud provider will try to add all nodes to a single backend pool which is forbidden. In other words, if you use multiple agent pools (availability sets), you ",(0,i.kt)("strong",{parentName:"td"},"must")," set this field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"vmType"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The type of Azure nodes. Candidate values are: ",(0,i.kt)("inlineCode",{parentName:"td"},"vmss")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"standard"),". If not set, it will be default to ",(0,i.kt)("inlineCode",{parentName:"td"},"standard"),". Set to ",(0,i.kt)("inlineCode",{parentName:"td"},"vmss")," if the cluster is running on ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview"},"Azure virtual machine scale sets")," instead of standard machines.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"primaryScaleSetName"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the scale set that should be used as the load balancer backend. If this is set, the Azure cloud provider will only add nodes from that scale set to the load balancer backend pool. If this is not set, and multiple agent pools (scale sets) are used, then the cloud provider will try to add all nodes to a single backend pool which is forbidden. In other words, if you use multiple agent pools (scale sets), you ",(0,i.kt)("strong",{parentName:"td"},"must")," set this field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"aadClientCertPath"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The path of a client certificate for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-service-to-service"},"client certificate authentication"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"aadClientCertPassword"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The password of the client certificate for an Azure AD application with RBAC access to talk to Azure Resource Manager APIs. This is used for ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-service-to-service"},"client certificate authentication"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderBackoff"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enable exponential backoff to manage resource request retries.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderBackoffRetries"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Backoff retry limit.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderBackoffExponent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Backoff exponent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderBackoffDuration"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Backoff duration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderBackoffJitter"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Backoff jitter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderRateLimit"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enable rate limiting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderRateLimitQPS"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rate limit QPS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"cloudProviderRateLimitBucket"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rate limit bucket Size.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"useInstanceMetadata"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Use instance metadata service where possible.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"useManagedIdentityExtension"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Use managed service identity for the virtual machine to access Azure Resource Manager APIs. This is used for ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview"},"managed identity authentication"),". For user-assigned managed identity, ",(0,i.kt)("inlineCode",{parentName:"td"},"UserAssignedIdentityID")," needs to be set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"UserAssignedIdentityID"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The client ID of the user assigned Managed Service Identity (MSI) which is assigned to the underlying VMs. This is used for ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview"},"managed identity authentication"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"maximumLoadBalancerRuleCount"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"The limit enforced by Azure Load balancer. The default is ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," and maximum is ",(0,i.kt)("inlineCode",{parentName:"td"},"148"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"LoadBalancerSku"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"SKU of the load balancer and public IP. Valid values are  ",(0,i.kt)("inlineCode",{parentName:"td"},"basic")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"standard"),". Default(blank) to ",(0,i.kt)("inlineCode",{parentName:"td"},"basic"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ExcludeMasterFromStandardLB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Excludes master nodes (labeled with ",(0,i.kt)("inlineCode",{parentName:"td"},"node-role.kubernetes.io/master"),") from the backend pool of Azure standard loadbalancer. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"nil"),".")))))}u.isMDXComponent=!0}}]);