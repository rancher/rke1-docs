---
title: Cloud Providers
---

RKE supports the ability to set your specific cloud provider for your Kubernetes cluster. There are specific cloud configurations for these cloud providers.
To enable a cloud provider its name as well as any required configuration options must be provided under the `cloud_provider` directive in the cluster YML.

* [AWS](./aws/aws.md)
* [Azure](./azure/azure.md)
* [OpenStack](./openstack/openstack.md)
* [vSphere](./vsphere/vsphere.md)

Outside of this list, RKE also supports the ability to handle any [custom cloud provider](./custom/custom.md).
