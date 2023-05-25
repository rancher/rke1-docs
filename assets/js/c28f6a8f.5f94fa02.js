"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[9003],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>m});var t=i(7294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=t.createContext({}),d=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},u=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(i),f=o,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||r;return i?t.createElement(m,s(s({ref:n},u),{},{components:i})):t.createElement(m,s({ref:n},u))}));function m(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=i.length,s=new Array(r);s[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<r;d++)s[d]=i[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}f.displayName="MDXCreateElement"},2744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(3117),o=(i(7294),i(3905));const r={title:"Configuring Pod Security Admission (PSA)"},s=void 0,a={unversionedId:"config-options/services/pod-security-admission/pod-security-admission",id:"config-options/services/pod-security-admission/pod-security-admission",title:"Configuring Pod Security Admission (PSA)",description:"As of RKE v1.4.4, Pod Security admissions (PSA) support has been added for clusters with Kubernetes v1.23 and above. PSA defines security restrictions for a broad set of workloads and replace Pod Security Policies in Kubernetes v1.25 and above. The Pod Security Admission controller is enabled by default in Kubernetes clusters v1.23 and above. To configure its default behavior, you must provide an admission configuration file to the kube-apiserver when provisioning the cluster.",source:"@site/docs/config-options/services/pod-security-admission/pod-security-admission.md",sourceDirName:"config-options/services/pod-security-admission",slug:"/config-options/services/pod-security-admission/",permalink:"/config-options/services/pod-security-admission/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/services/pod-security-admission/pod-security-admission.md",tags:[],version:"current",lastUpdatedAt:1685049943,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Configuring Pod Security Admission (PSA)"},sidebar:"mySidebar",previous:{title:"Authorization",permalink:"/config-options/authorization/"},next:{title:"Rate Limiting",permalink:"/config-options/rate-limiting/"}},c={},d=[{value:"Method 1: Using <code>pod_security_configuration</code> option",id:"method-1-using-pod_security_configuration-option",level:2},{value:"Method 2: Using <code>admission_configuration</code> to pass a customized admission configuration file",id:"method-2-using-admission_configuration-to-pass-a-customized-admission-configuration-file",level:2},{value:"Method 3:  Using <code>extra_args</code> to pass customized admission configuration file",id:"method-3--using-extra_args-to-pass-customized-admission-configuration-file",level:2}],u={toc:d},p="wrapper";function l(e){let{components:n,...i}=e;return(0,o.kt)(p,(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As of RKE v1.4.4, ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security admissions (PSA)")," support has been added for clusters with Kubernetes v1.23 and above. PSA defines security restrictions for a broad set of workloads and replace ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/"},"Pod Security Policies")," in Kubernetes v1.25 and above. The Pod Security Admission controller is enabled by default in Kubernetes clusters v1.23 and above. To configure its default behavior, you must provide an admission configuration file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," when provisioning the cluster."),(0,o.kt)("p",null,"RKE provides three methods for configuring the Pod Security Admission controller."),(0,o.kt)("h2",{id:"method-1-using-pod_security_configuration-option"},"Method 1: Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"pod_security_configuration")," option"),(0,o.kt)("p",null,"To use the built-in PSA configuration, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"services.kube-api.pod_security_configuration")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file. Valid values for ",(0,o.kt)("inlineCode",{parentName:"p"},"services.kube-api.pod_security_configuration")," are either ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"privileged"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    pod_security_configuration: <VALUE> # restricted or privileged\n")),(0,o.kt)("p",null,"If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted"),", the PodSecurityConfiguration section from the admission configuration file below is applied:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1\n    defaults:\n      audit: restricted\n      audit-version: latest\n      enforce: restricted\n      enforce-version: latest\n      warn: restricted\n      warn-version: latest\n    exemptions:\n      namespaces:\n      - ingress-nginx\n      - kube-system\n    kind: PodSecurityConfiguration\n  name: PodSecurity\n  path: ""\n')),(0,o.kt)("p",null,"If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"privileged"),", the PodSecurityConfiguration section from the admission configuration file below is applied:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1\n    defaults:\n      enforce: privileged\n      enforce-version: latest\n    exemptions: {}\n    kind: PodSecurityConfiguration\n  name: PodSecurity\n  path: ""\n')),(0,o.kt)("h2",{id:"method-2-using-admission_configuration-to-pass-a-customized-admission-configuration-file"},"Method 2: Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"admission_configuration")," to pass a customized admission configuration file"),(0,o.kt)("p",null,"You can directly pass your customized admission configuration file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"services.kube-api.admission_configuration")," field."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/"},(0,o.kt)("inlineCode",{parentName:"a"},"pod-security.admission.config.k8s.io/v1"))," configuration requires Kubernetes v1.25 and above. For Kubernetes v1.23 and v1.24, use ",(0,o.kt)("a",{parentName:"p",href:"https://v1-24.docs.kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/"},"v1beta1")," instead.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  kube-api:\n    admission_configuration:\n      apiVersion: apiserver.config.k8s.io/v1\n      kind: AdmissionConfiguration\n      plugins:\n        - name: PodSecurity\n          configuration:\n            apiVersion: pod-security.admission.config.k8s.io/v1\n            kind: PodSecurityConfiguration\n            defaults:\n              enforce: "restricted"\n              enforce-version: "latest"\n            exemptions:\n              namespaces: ["cattle-system", "cattle-monitoring", "kube-system"]\n              runtimeClasses: []\n              usernames: []\n')),(0,o.kt)("h2",{id:"method-3--using-extra_args-to-pass-customized-admission-configuration-file"},"Method 3:  Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"extra_args")," to pass customized admission configuration file"),(0,o.kt)("p",null,"If you want to use an external admission configuration file in a control plane node, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"services.kube-api.extra_args")," option to set the path to the file and the ",(0,o.kt)("inlineCode",{parentName:"p"},"services.kube-api.extra_binds")," option to mount the file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/"},(0,o.kt)("inlineCode",{parentName:"a"},"pod-security.admission.config.k8s.io/v1"))," configuration requires Kubernetes v1.25 and above. For Kubernetes v1.23 and v1.24, use ",(0,o.kt)("a",{parentName:"p",href:"https://v1-24.docs.kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/"},"v1beta1")," instead.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  kube-api:\n    extra_args:\n      admission-control-config-file: <PATH> # path to the file\n    extra_binds:\n      - "<PATH-IN-NODES>:<PATH-IN-CONTAINER>"\n')))}l.isMDXComponent=!0}}]);