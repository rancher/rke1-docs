**etcd nodes:** Nodes with the role **etcd**

### etcd nodes - Inbound rules

| Protocol | Port | Source | Description |
| --- | --- | --- | --- |
| TCP | 2376 | Rancher nodes | Docker daemon TLS port used by Docker Machine (only needed when using Node Driver/Templates) |
| TCP | 2379 | <ul><li>etcd nodes</li><li>controlplane nodes</li></ul> | etcd client requests |
| TCP | 2380 | <ul><li>etcd nodes</li><li>controlplane nodes</li></ul> | etcd peer communication |
| UDP | 8472 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | Canal/Flannel VXLAN overlay networking |
| TCP | 9099 | <ul><li>etcd node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Canal/Flannel livenessProbe/readinessProbe |
| TCP | 10250 | <ul><li>Metrics server communications with all nodes</li></ul> | kubelet |

### etcd nodes - Outbound rules

| Protocol | Port | Destination | Description |
| --- | --- | --- | --- |
| TCP | 443 | <ul><li>Rancher nodes</li></ul> | Rancher agent |
| TCP | 379| <ul><li>etcd nodes</li></ul> | etcd client requests |
| TCP | 2380 | <ul><li>etcd nodes</li></ul> | etcd peer communication |
| TCP | 6443 | <ul><li>controlplane nodes</li></ul> | Kubernetes apiserver |
| UDP | 8472 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | Canal/Flannel VXLAN overlay networking |
| TCP | 9099 | <ul><li>etcd node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Canal/Flannel livenessProbe/readinessProbe |

**controlplane nodes:** Nodes with the role **controlplane**

### controlplane nodes - Inbound rules

| Protocol | Port | Source | Description |
| -------- | ---- | -------| ----------- |
| TCP | 80 | <ul><li>Any that consumes Ingress services</li></ul> | Ingress controller (HTTP) |
| TCP | 443 | <ul><li>Any that consumes Ingress services</li></ul> | Ingress controller (HTTPS) |
| TCP | 2376 | <ul><li>Rancher nodes</li></ul> | Docker daemon TLS port used by Docker Machine (only needed when using Node Driver/Templates) |
| TCP | 6443 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | Kubernetes apiserver |
| UDP | 472 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | Canal/Flannel VXLAN overlay networking |
| TCP | 9099 | <ul><li>controlplane node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Canal/Flannel livenessProbe/readinessProbe |
| TCP | 10250 | <ul><li>Metrics server communications with all nodes</li></ul> | kubelet |
| TCP | 10254 | <ul><li>controlplane node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Ingress controller livenessProbe/readinessProbe |
| TCP/UDP | 30000-32767 | <ul><li>Any source that consumes NodePort services</li></ul> | NodePort port range |

### controlplane nodes - Outbound rules

| Protocol | Port | Destination | Description |
| -------- | ---- | ----------- | ----------- |
| TCP | 443 | <ul><li>Rancher nodes</li></ul> | Rancher agent |
| TCP | 2379 | <ul><li>etcd nodes</li></ul> | etcd client requests |
| TCP | 2380 | <ul><li>etcd nodes</li></ul> | etcd peer communication |
| UDP | 8472 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | Canal/Flannel VXLAN overlay networking |
| TCP | 9099 | <ul><li>controlplane node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Canal/Flannel livenessProbe/readinessProbe |
| TCP | 10250 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | kubelet | TCP | 10254 | <ul><li>controlplane node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Ingress controller livenessProbe/readinessProbe |

**Worker nodes:** Nodes with the role **worker**

### Worker nodes - Inbound rules

| Protocol | Port | Source | Description |
| -------- | ---- | ------ | ----------- |
| TCP | 22 | <ul><li>**Linux worker nodes only**</li><li>Any network that you want to be able to remotely access this node from.</li></ul> | Remote access over SSH |
| TCP | 3389 | <ul><li>**Windows worker nodes only**</li><li>Any network that you want to be able to remotely access this node from.</li></ul> | Remote access over RDP |
| TCP | 80 | <ul><li>Any that consumes Ingress services</li></ul> | Ingress controller (HTTP) |
| TCP | 443 | <ul><li>Any that consumes Ingress services</li></ul> | Ingress controller (HTTPS) |
| TCP | 2376 | <ul><li>Rancher nodes</li></ul> | Docker daemon TLS port used by Docker Machine only needed when using Node Driver/Templates) |
| UDP | 8472 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | Canal/Flannel VXLAN overlay networking |
| TCP | 9099 | <ul><li>worker node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Canal/Flannel livenessProbe/readinessProbe |
| TCP | 10250 | <ul><li>Metrics server communications with all nodes</li></ul> | kubelet |
| TCP | 10254 | <ul><li>worker node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Ingress controller livenessProbe/readinessProbe |
| TCP/UDP | 30000-32767 | <ul><li>Any source that consumes NodePort services</li></ul> | NodePort port range |

### Worker nodes - Outbound rules

| Protocol | Port | Destination | Description |
| -------- | ---- | ----------- | ----------- |
| TCP | 443 | <ul><li>Rancher nodes</li></ul> | Rancher agent |
| TCP | 6443 | <ul><li>controlplane nodes</li></ul> | Kubernetes apiserver |
| UDP  | 8472 | <ul><li>etcd nodes</li><li>controlplane nodes</li><li>worker nodes</li></ul> | Canal/Flannel VXLAN overlay networking |
| TCP | 9099 | <ul><li>worker node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Canal/Flannel livenessProbe/readinessProbe |
| TCP | 10254 | <ul><li>worker node itself ([local traffic](#information-on-local-node-traffic), not across nodes)</li></ul> | Ingress controller livenessProbe/readinessProbe |

### Information on local node traffic

Kubernetes health checks (`livenessProbe` and `readinessProbe`) are executed on the host itself. On most nodes, this is allowed by default. When you have applied strict host firewall (i.e., `ptables`) policies on the node, or when you are using nodes that have multiple interfaces (multi-homed), this traffic gets blocked. In this case, you have to explicitly allow this traffic in your host firewall, or in case of public/private cloud hosted machines (i.e. AWS or OpenStack), in your security group configuration. Keep in mind that when using a security group as Source or Destination in your security group, that this only applies to the private interface of the nodes/instances.
