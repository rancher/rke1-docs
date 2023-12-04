---
title: vSphere Cloud Provider
---

This section describes how to enable the vSphere cloud provider. You will need to use the `cloud_provider` directive in the cluster YAML file.

The [vSphere Cloud Provider](https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/) interacts with VMware infrastructure (vCenter or standalone ESXi server) to provision and manage storage for persistent volumes in a Kubernetes cluster.

When provisioning Kubernetes using RKE CLI or using [RKE clusters](https://ranchermanager.docs.rancher.com/pages-for-subheaders/launch-kubernetes-with-rancher) in Rancher, the vSphere Cloud Provider can be enabled by configuring the `cloud_provider` directive in the cluster YAML file.

### Related Links

- **Configuration:** For details on vSphere configuration in RKE, refer to the [configuration reference.](./config-reference/config-reference.md)
- **Troubleshooting:** For guidance on troubleshooting a cluster with the vSphere cloud provider enabled, refer to the [troubleshooting section.](./troubleshooting/troubleshooting.md)
- **Storage:** If you are setting up storage, see the [official vSphere documentation on storage for Kubernetes,](https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/) or the [official Kubernetes documentation on persistent volumes.](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) If you are using Rancher, refer to the [Rancher documentation on provisioning storage in vSphere.](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage#docusaurus_skipToContent_fallback)
- **For Rancher users:** Refer to the Rancher documentation on [creating vSphere Kubernetes clusters](https://ranchermanager.docs.rancher.com/pages-for-subheaders/vsphere) and [provisioning storage.](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage#docusaurus_skipToContent_fallback)

## Prerequisites

- **Credentials:** You'll need to have credentials of a vCenter/ESXi user account with privileges allowing the cloud provider to interact with the vSphere infrastructure to provision storage. Refer to [this document](https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/vcp-roles.html) to create and assign a role with the required permissions in vCenter.
- **VMware Tools** must be running in the Guest OS for all nodes in the cluster.
- **Disk UUIDs:** All nodes must be configured with disk UUIDs. This is required so that attached VMDKs present a consistent UUID to the VM, allowing the disk to be mounted properly. See the section on [enabling disk UUIDs.](./enabling-uuid/enabling-uuid.md)

## Enabling the vSphere Provider with the RKE CLI

To enable the vSphere Cloud Provider in the cluster, you must add the top-level `cloud_provider` directive to the cluster configuration file, set the `name` property to `vsphere` and add the `vsphereCloudProvider` directive containing the configuration matching your infrastructure. See the [configuration reference](./config-reference/config-reference.md) for the gory details.
