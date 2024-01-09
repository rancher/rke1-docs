---
title: vSphere Cloud Provider
---

This section describes how to enable the vSphere cloud provider. You will need to use the `cloud_provider` directive in the cluster YAML file. For more details on configuring the file structure refer to the [configuration reference](./config-reference/config-reference.md).

The [vSphere Cloud Provider](https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/) interacts with VMware infrastructure (vCenter or standalone ESXi server) to provision and manage storage for persistent volumes in a Kubernetes cluster.

## Prerequisites

- **Credentials:** You'll need to have credentials of a vCenter/ESXi user account with privileges allowing the cloud provider to interact with the vSphere infrastructure to provision storage. Refer to [this document](https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/vcp-roles.html) to create and assign a role with the required permissions in vCenter.
- **VMware Tools** must be running in the Guest OS for all nodes in the cluster.
- **Disk UUIDs:** All nodes must be configured with disk UUIDs. This is required so that attached VMDKs present a consistent UUID to the VM, allowing the disk to be mounted properly. See the section on [enabling disk UUIDs.](./enabling-uuid/enabling-uuid.md)

## Enabling the vSphere Provider with the RKE CLI

To enable the vSphere Cloud Provider in the cluster, you must add the top-level `cloud_provider` directive to the cluster configuration file, set the `name` property to `vsphere` and add the `vsphereCloudProvider` directive containing the configuration matching your infrastructure. See the [configuration reference](./config-reference/config-reference.md) for more details.

## Enabling the vSphere Provider in Rancher

When provisioning Kubernetes using [RKE clusters](https://ranchermanager.docs.rancher.com/pages-for-subheaders/launch-kubernetes-with-rancher) in Rancher, the vSphere Cloud Provider can be enabled by configuring the `cloud_provider` directive nested under the `rancher_kubernetes_engine_config` directive in the cluster config YAML file. For more information on the configuration file structure please see the [Rancher RKE Cluster Configuration Reference](https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#config-file-structure-in-rancher).

## Related Links

- **Configuration:** For details on vSphere configuration in RKE, refer to the [configuration reference.](./config-reference/config-reference.md)
- **Troubleshooting:** For guidance on troubleshooting a cluster with the vSphere cloud provider enabled, refer to the [troubleshooting section.](./troubleshooting/troubleshooting.md)
- **Storage:** If you are setting up storage, see the [official vSphere documentation on storage for Kubernetes,](https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/) or the [official Kubernetes documentation on persistent volumes.](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) If you are using Rancher, refer to the [Rancher documentation on provisioning storage in vSphere.](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage#docusaurus_skipToContent_fallback)
- **For Rancher users:** Refer to the Rancher documentation on [creating vSphere Kubernetes clusters](https://ranchermanager.docs.rancher.com/pages-for-subheaders/vsphere) and [provisioning storage.](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage#docusaurus_skipToContent_fallback)
