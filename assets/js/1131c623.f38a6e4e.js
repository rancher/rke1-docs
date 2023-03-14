"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(4334);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(3117),r=n(7294),o=n(4334),l=n(2466),s=n(6775),i=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,p]=k({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},5246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"One-time Snapshots",weight:1},i=void 0,p={unversionedId:"etcd-snapshots/one-time-snapshots/one-time-snapshots",id:"etcd-snapshots/one-time-snapshots/one-time-snapshots",title:"One-time Snapshots",description:"One-time snapshots are handled differently depending on your version of RKE.",source:"@site/docs/etcd-snapshots/one-time-snapshots/one-time-snapshots.md",sourceDirName:"etcd-snapshots/one-time-snapshots",slug:"/etcd-snapshots/one-time-snapshots/",permalink:"/etcd-snapshots/one-time-snapshots/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/one-time-snapshots/one-time-snapshots.md",tags:[],version:"current",lastUpdatedAt:1678835092,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"One-time Snapshots",weight:1},sidebar:"mySidebar",previous:{title:"Backups and Disaster Recovery",permalink:"/etcd-snapshots/"},next:{title:"Recurring Snapshots",permalink:"/etcd-snapshots/recurring-snapshots/"}},u={},c=[{value:"Options for <code>rke etcd snapshot-save</code>",id:"options-for-rke-etcd-snapshot-save",level:3},{value:"Using a custom CA certificate for S3",id:"using-a-custom-ca-certificate-for-s3",level:5},{value:"IAM Support for Storing Snapshots in S3",id:"iam-support-for-storing-snapshots-in-s3",level:3},{value:"Options for <code>rke etcd snapshot-save</code>",id:"options-for-rke-etcd-snapshot-save-1",level:3}],d={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One-time snapshots are handled differently depending on your version of RKE."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"RKE v0.2.0+",mdxType:"TabItem"},(0,r.kt)("p",null,"To save a snapshot of etcd from each etcd node in the cluster config file, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-save")," command."),(0,r.kt)("p",null,"The snapshot is saved in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,"When running the command, an additional container is created to take the snapshot. When the snapshot is completed, the container is automatically removed."),(0,r.kt)("p",null,"The one-time snapshot can be uploaded to a S3 compatible backend by using the additional options to specify the S3 backend."),(0,r.kt)("p",null,"To create a local one-time snapshot, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save --config cluster.yml --name snapshot-name\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The snapshot is saved in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,"To save a one-time snapshot to S3, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save \\\n--config cluster.yml \\\n--name snapshot-name \\\n--s3 \\\n--access-key S3_ACCESS_KEY \\\n--secret-key S3_SECRET_KEY \\\n--bucket-name s3-bucket-name \\\n--folder s3-folder-name \\ # Optional - Available as of v0.3.0\n--s3-endpoint s3.amazonaws.com\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The snapshot is saved in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," as well as uploaded to the S3 backend."),(0,r.kt)("h3",{id:"options-for-rke-etcd-snapshot-save"},"Options for ",(0,r.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-save")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"S3 Specific"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify snapshot name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--s3")),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled backup to s3"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--s3-endpoint")," value"),(0,r.kt)("td",{parentName:"tr",align:null},'Specify s3 endpoint url (default: "s3.amazonaws.com")'),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--s3-endpoint-ca")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a path to a CA cert file to connect to a custom s3 endpoint (optional) ",(0,r.kt)("em",{parentName:"td"},"Available as of v0.2.5")),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--access-key")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify s3 accessKey"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--secret-key")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify s3 secretKey"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--bucket-name")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify s3 bucket name"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--folder")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify folder inside  bucket where backup will be stored. This is optional. ",(0,r.kt)("em",{parentName:"td"},"Available as of v0.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--region")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the s3 bucket location (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--access-key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--secret-key")," options are not required if the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," nodes are AWS EC2 instances that have been configured with a suitable IAM instance profile."),(0,r.kt)("h5",{id:"using-a-custom-ca-certificate-for-s3"},"Using a custom CA certificate for S3"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,r.kt)("p",null,"The backup snapshot can be stored on a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"S3")," backup like ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"minio"),". If the S3 backend uses a self-signed or custom certificate, provide a custom certificate using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--s3-endpoint-ca")," to connect to the S3 backend."),(0,r.kt)("h3",{id:"iam-support-for-storing-snapshots-in-s3"},"IAM Support for Storing Snapshots in S3"),(0,r.kt)("p",null,"In addition to API access keys, RKE supports using IAM roles for S3 authentication. The cluster etcd nodes must be assigned an IAM role that has read/write access to the designated backup bucket on S3. Also, the nodes must have network access to the S3 endpoint specified."),(0,r.kt)("p",null,"Below is an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"example IAM policy")," that would allow nodes to store and retrieve backups from S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "ListObjectsInBucket",\n            "Effect": "Allow",\n            "Action": ["s3:ListBucket"],\n            "Resource": ["arn:aws:s3:::bucket-name"]\n        },\n        {\n            "Sid": "AllObjectActions",\n            "Effect": "Allow",\n            "Action": "s3:*Object",\n            "Resource": ["arn:aws:s3:::bucket-name/*"]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"For details on giving an application access to S3, refer to the AWS documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},"Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances."))),(0,r.kt)(l.Z,{value:"RKE before v0.2.0",mdxType:"TabItem"},(0,r.kt)("p",null,"To save a snapshot of etcd from each etcd node in the cluster config file, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-save")," command."),(0,r.kt)("p",null,"When running the command, an additional container is created to take the snapshot. When the snapshot is completed, the container is automatically removed."),(0,r.kt)("p",null,"RKE saves a backup of the certificates, i.e. a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz"),", in the same location. The snapshot and pki bundle file are required for the restore process."),(0,r.kt)("p",null,"To create a local one-time snapshot, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save --config cluster.yml --name snapshot-name\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The snapshot is saved in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("h3",{id:"options-for-rke-etcd-snapshot-save-1"},"Options for ",(0,r.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-save")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify snapshot name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check"))))))))}k.isMDXComponent=!0}}]);