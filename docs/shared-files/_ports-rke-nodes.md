**RKE node:**
Node that runs the `rke` commands

### RKE node - Outbound rules

| Protocol | Port | Source | Destination | Description |
| --- | --- | --- | --- | --- |
| TCP | 22 | RKE node | Any node configured in Cluster Configuration File | SSH provisioning of node by RKE |
| TCP | 6443 | RKE node | Control plane nodes | Kubernetes API server |
