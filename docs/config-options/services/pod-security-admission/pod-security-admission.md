---
title: Configuring Pod Security Admission (PSA)
---

As of RKE v1.4.4, [Pod Security admissions (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) support has been added for clusters with Kubernetes v1.23 and above. PSA defines security restrictions for a broad set of workloads and replace [Pod Security Policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above. The Pod Security Admission controller is enabled by default in Kubernetes clusters v1.23 and above. To configure its default behavior, you must provide an admission configuration file to the `kube-apiserver` when provisioning the cluster.

RKE provides three methods for configuring the Pod Security Admission controller.

## Method 1: Using `pod_security_configuration` option

To use the built-in PSA configuration, you can set the `services.kube-api.pod_security_configuration` field in the `cluster.yml` file. Valid values for `services.kube-api.pod_security_configuration` are either `restricted` or `privileged`.

```yaml
services:
  kube-api:
    pod_security_configuration: <VALUE> # restricted or privileged
```

If set to `restricted`, the PodSecurityConfiguration section from the admission configuration file below is applied:

```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: AdmissionConfiguration
plugins:
- configuration:
    apiVersion: pod-security.admission.config.k8s.io/v1
    defaults:
      audit: restricted
      audit-version: latest
      enforce: restricted
      enforce-version: latest
      warn: restricted
      warn-version: latest
    exemptions:
      namespaces:
      - ingress-nginx
      - kube-system
    kind: PodSecurityConfiguration
  name: PodSecurity
  path: ""
```

If set to `privileged`, the PodSecurityConfiguration section from the admission configuration file below is applied:

```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: AdmissionConfiguration
plugins:
- configuration:
    apiVersion: pod-security.admission.config.k8s.io/v1
    defaults:
      enforce: privileged
      enforce-version: latest
    exemptions: {}
    kind: PodSecurityConfiguration
  name: PodSecurity
  path: ""
```

## Method 2: Using `admission_configuration` to pass a customized admission configuration file

You can directly pass your customized admission configuration file in the `cluster.yml` file by setting the `services.kube-api.admission_configuration` field.

:::note

[`pod-security.admission.config.k8s.io/v1`](https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/) configuration requires Kubernetes v1.25 and above. For Kubernetes v1.23 and v1.24, use [v1beta1](https://v1-24.docs.kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/) instead.

:::

```yaml
services:
  kube-api:
    admission_configuration:
      apiVersion: apiserver.config.k8s.io/v1
      kind: AdmissionConfiguration
      plugins:
        - name: PodSecurity
          configuration:
            apiVersion: pod-security.admission.config.k8s.io/v1
            kind: PodSecurityConfiguration
            defaults:
              enforce: "restricted"
              enforce-version: "latest"
            exemptions:
              namespaces: ["cattle-system", "cattle-monitoring", "kube-system"]
              runtimeClasses: []
              usernames: []
```

## Method 3:  Using `extra_args` to pass customized admission configuration file

If you want to use an external admission configuration file in the control plane node, you can use the `services.kube-api.extra_args` option to set the path to the file in the `kube-apiserver`.

:::note

[`pod-security.admission.config.k8s.io/v1`](https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/) configuration requires Kubernetes v1.25 and above. For Kubernetes v1.23 and v1.24, use [v1beta1](https://v1-24.docs.kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-controller/) instead.

:::

```yaml
services:
  kube-api:
    extra_args:
      admission-control-config-file: <PATH> # path to the file
```
