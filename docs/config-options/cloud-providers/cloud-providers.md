---
title: Cloud Providers
weight: 250
---

RKE supports the ability to set your specific cloud provider for your Kubernetes cluster. There are specific cloud configurations for these cloud providers.
To enable a cloud provider its name as well as any required configuration options must be provided under the `cloud_provider` directive in the cluster YML.

* [AWS](config-options/cloud-providers/aws)
* [Azure](config-options/cloud-providers/azure)
* [OpenStack](config-options/cloud-providers/openstack)
* [vSphere](config-options/cloud-providers/vsphere)

Outside of this list, RKE also supports the ability to handle any [custom cloud provider](config-options/cloud-providers/custom).
