---
title: AWS Cloud Provider
---

:::note Important:

In Kubernetes 1.27 and later, you must use an out-of-tree AWS cloud provider. In-tree cloud providers have been deprecated, and the Amazon cloud provider has been removed completely, and won't work after an upgrade to Kubernetes 1.27. The steps listed below are still required to set up an Amazon cloud provider. You can [set up an out-of-tree cloud provider for RKE](#using-the-out-of-tree-aws-cloud-provider-for-rke) after creating an [appropriate IAM role](#iam-requirements) and [configuring the ClusterID](#tagging-aws-resources).

You can also [migrate from an in-tree to an out-of-tree AWS cloud provider](#migrating-to-the-out-of-tree-aws-cloud-provider-for-rke) on Kubernetes 1.26 and earlier. All existing clusters must migrate prior to upgrading to v1.27 in order to stay functional.

To enable the AWS cloud provider, there are no RKE configuration options. You only need to set the name as `aws`. In order to use the AWS cloud provider, all cluster nodes must have already been configured with an [appropriate IAM role](#iam-requirements) and your AWS resources must be [tagged with a cluster ID](#tagging-aws-resources).

:::

```yaml
cloud_provider:
    name: aws
```

## IAM Requirements

In a cluster with the AWS cloud provider enabled, nodes must have at least the `ec2:Describe*` action.

In order to use Elastic Load Balancers (ELBs) and EBS volumes with Kubernetes, the node(s) will need to have the an IAM role with appropriate permissions.

IAM policy for nodes with the `controlplane` role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "autoscaling:DescribeAutoScalingGroups",
        "autoscaling:DescribeLaunchConfigurations",
        "autoscaling:DescribeTags",
        "ec2:DescribeInstances",
        "ec2:DescribeRegions",
        "ec2:DescribeRouteTables",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeSubnets",
        "ec2:DescribeVolumes",
        "ec2:CreateSecurityGroup",
        "ec2:CreateTags",
        "ec2:CreateVolume",
        "ec2:ModifyInstanceAttribute",
        "ec2:ModifyVolume",
        "ec2:AttachVolume",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:CreateRoute",
        "ec2:DeleteRoute",
        "ec2:DeleteSecurityGroup",
        "ec2:DeleteVolume",
        "ec2:DetachVolume",
        "ec2:RevokeSecurityGroupIngress",
        "ec2:DescribeVpcs",
        "elasticloadbalancing:AddTags",
        "elasticloadbalancing:AttachLoadBalancerToSubnets",
        "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
        "elasticloadbalancing:CreateLoadBalancer",
        "elasticloadbalancing:CreateLoadBalancerPolicy",
        "elasticloadbalancing:CreateLoadBalancerListeners",
        "elasticloadbalancing:ConfigureHealthCheck",
        "elasticloadbalancing:DeleteLoadBalancer",
        "elasticloadbalancing:DeleteLoadBalancerListeners",
        "elasticloadbalancing:DescribeLoadBalancers",
        "elasticloadbalancing:DescribeLoadBalancerAttributes",
        "elasticloadbalancing:DetachLoadBalancerFromSubnets",
        "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
        "elasticloadbalancing:ModifyLoadBalancerAttributes",
        "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
        "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",
        "elasticloadbalancing:AddTags",
        "elasticloadbalancing:CreateListener",
        "elasticloadbalancing:CreateTargetGroup",
        "elasticloadbalancing:DeleteListener",
        "elasticloadbalancing:DeleteTargetGroup",
        "elasticloadbalancing:DescribeListeners",
        "elasticloadbalancing:DescribeLoadBalancerPolicies",
        "elasticloadbalancing:DescribeTargetGroups",
        "elasticloadbalancing:DescribeTargetHealth",
        "elasticloadbalancing:ModifyListener",
        "elasticloadbalancing:ModifyTargetGroup",
        "elasticloadbalancing:RegisterTargets",
        "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",
        "iam:CreateServiceLinkedRole",
        "kms:DescribeKey"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}
```

IAM policy for nodes with the `etcd` or `worker` role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:DescribeRegions",
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:GetRepositoryPolicy",
        "ecr:DescribeRepositories",
        "ecr:ListImages",
        "ecr:BatchGetImage"
      ],
      "Resource": "*"
    }
  ]
}
```

## Tagging AWS Resources

The AWS cloud provider uses tagging to discover and manage resources, the following resources are not automatically tagged by Kubernetes or RKE:

- **VPC**: The VPC used by the cluster
- **Subnet**: The subnets used by the cluster
- **EC2 instances**: All nodes launched for the cluster
- **Security Groups**: The security group(s) used by nodes in the cluster

  >**Note:** If creating a `LoadBalancer` service and there is more than one security group attached to nodes, you must tag only one of the security groups as `owned` so that Kubernetes knows which group to add and remove rules. A single untagged security group is allowed, however, sharing this between clusters is not recommended.

[AWS Documentation: Tagging Your Amazon EC2 Resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)

You must tag with one of the following:

| Key | Value |
|---|---|
| kubernetes.io/cluster/`<CLUSTERID>` | shared |

`<CLUSTERID>` can be any string you choose. However, the same string must be used on every resource you tag. Setting the tag value to `owned` informs the cluster that all resources tagged with the `<CLUSTERID>` are owned and managed by this cluster only.

If you do not share resources between clusters, you can change the tag to:

| Key | Value |
|---|---|
| kubernetes.io/cluster/`<CLUSTERID>` | owned |

## Tagging for Load Balancers

When provisioning a `LoadBalancer` service Kubernetes will attempt to discover the correct subnets, this is also achieved by tags and requires adding additional subnet tags to ensure internet-facing and internal ELBs are created in the correct subnets.

[AWS Documentation: Subnet tagging for load balancers](https://docs.aws.amazon.com/eks/latest/userguide/load-balancing.html#subnet-tagging-for-load-balancers)

### Using the Out-of-Tree AWS Cloud Provider for RKE

1. [Node name conventions and other prerequisites ](https://cloud-provider-aws.sigs.k8s.io/prerequisites/) must be followed so that the cloud provider can find the instance. RKE provisioned clusters don't support configuring `providerID`. 

:::note

If you use IP-based naming, the nodes must be named after the instance followed by the regional domain name (`ip-xxx-xxx-xxx-xxx.ec2.<region>.internal`). If you have a custom domain name set in the DHCP options, you must set `--hostname-override` on `kube-proxy` and `kubelet` to match this naming convention.

:::

2. Select the cloud provider. 

Selecting `external-aws` sets `--cloud-provider=external` and allows setting `useInstanceMetadataHostname`. Enabling `useInstanceMetadataHostname` will query the EC2 metadata service and set `http://169.254.169.254/latest/meta-data/hostname` as `hostname-override` for `kubelet` and `kube-proxy`. 

Enabling `useInstanceMetadataHostname` is required if `hostname-override` is empty or if `hostname-override` doesn't meet the node naming conventions mentioned above in step 1.

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

Existing clusters that use `external` cloud provider will set `--cloud-provider=external` for Kubernetes components but won't set the `hostname-override` by querying the EC2 metadata service.

3. Install the AWS cloud controller manager after the cluster finishes provisioning. Note that the cluster isn't successfully provisioned and nodes are still in an `uninitialized` state until you deploy the cloud controller manager. 

### Helm Chart Installation from CLI

Official upstream docs for [Helm chart installation](https://github.com/kubernetes/cloud-provider-aws/tree/master/charts/aws-cloud-controller-manager) can be found on GitHub.

1. Add the Helm repository:

```shell
helm repo add aws-cloud-controller-manager https://kubernetes.github.io/cloud-provider-aws
helm repo update
```

2. Create a `values.yaml` file with the following contents, to override the default `values.yaml`:

```yaml
# values.yaml
hostNetworking: true
tolerations:
  - effect: NoSchedule
    key: node.cloudprovider.kubernetes.io/uninitialized
    value: 'true'
  - effect: NoSchedule
    value: 'true'
    key: node-role.kubernetes.io/controlplane
nodeSelector:
  node-role.kubernetes.io/controlplane: 'true'
args:
  - --configure-cloud-routes=false
  - --use-service-account-credentials=true
  - --v=2
  - --cloud-provider=aws
clusterRoleRules:
  - apiGroups:
      - ""
    resources:
      - events
    verbs:
      - create
      - patch
      - update
  - apiGroups:
      - ""
    resources:
      - nodes
    verbs:
      - '*'
  - apiGroups:
      - ""
    resources:
      - nodes/status
    verbs:
      - patch
  - apiGroups:
      - ""
    resources:
      - services
    verbs:
      - list
      - patch
      - update
      - watch
  - apiGroups:
      - ""
    resources:
      - services/status
    verbs:
      - list
      - patch
      - update
      - watch
  - apiGroups:
     - ''
    resources:
      - serviceaccounts
    verbs:
    - create
    - get
  - apiGroups:
      - ""
    resources:
      - persistentvolumes
    verbs:
      - get
      - list
      - update
      - watch
  - apiGroups:
      - ""
    resources:
      - endpoints
    verbs:
      - create
      - get
      - list
      - watch
      - update
  - apiGroups:
      - coordination.k8s.io
    resources:
      - leases
    verbs:
      - create
      - get
      - list
      - watch
      - update
  - apiGroups:
      - ""
    resources:
      - serviceaccounts/token
    verbs:
      - create
```

3. Install the Helm chart:

```shell
helm upgrade --install aws-cloud-controller-manager -n kube-system aws-cloud-controller-manager/aws-cloud-controller-manager --values values.yaml
```

Verify that the Helm chart installed successfully:

```shell
helm status -n kube-system aws-cloud-controller-manager
```

4. If present, edit the DaemonSet to remove the default node selector `node-role.kubernetes.io/control-plane: ""`:

```shell
kubectl edit daemonset aws-cloud-controller-manager -n kube-system
```

5. (Optional) Verify that the cloud controller manager update succeeded:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

### Migrating to the Out-of-Tree AWS Cloud Provider for RKE

To migrate from an in-tree cloud provider to the out-of-tree AWS cloud provider, you must stop the existing cluster's kube controller manager and install the AWS cloud controller manager. There are many ways to do this. Refer to the official AWS documentation on the [external cloud controller manager](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for details.

If it's acceptable to have some downtime, you can [switch to an external cloud provider](#using-the-out-of-tree-aws-cloud-provider-for-rke), which removes in-tree components and then deploy charts to install the AWS cloud controller manager.

If your setup can't tolerate any control plane downtime, you must enable leader migration. This facilitates a smooth transition from the controllers in the kube controller manager to their counterparts in the cloud controller manager. Refer to the official AWS documentation on [Using Leader Migration](https://cloud-provider-aws.sigs.k8s.io/getting_started/#using-leader-migration) for more details.

:::note Important

The Kubernetes [cloud controller migration documentation](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin) mentions that it is possible to migrate with the same Kubernetes version, but assumes that migration is part of a Kubernetes upgrade.

Refer to the Kubernetes documentation on [migrating to use the cloud controller manager](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/) to see if you need to customize your setup before migrating. Confirm your [migration configuration values](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration). If your cloud provider provides an implementation of the Node IPAM controller, you also need to [migrate the IPAM controller](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration).

:::

1. Update the cluster config to enable leader migration in `cluster.yml`:

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

Note that the cloud provider is still `aws` at this step:

```yaml
cloud_provider:
  name: aws
```

2. Cordon the control plane nodes, so that the AWS cloud controller pods run on nodes only after upgrading to the external cloud provider.

```shell
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. To install the AWS cloud controller manager, you must enable leader migration in values.yaml and follow the same steps as when [installing chart on a new cluster](#helm-chart-installation-from-cli). To enable leader migration, add the following to the container arguments in values.yaml: 

```yaml
- '--enable-leader-migration=true' 
```

4. Confirm that the chart is installed but the new pods aren't running yet due to cordoned controlplane nodes. After updating the cluster in the next step, RKE will uncordon each node after upgrading and `aws-controller-manager` pods will be scheduled.

5. Update `cluster.yml` to change the cloud provider and remove the leader migration arguments from the kube-controller.

Selecting `external-aws` sets `--cloud-provider=external` and allows setting `useInstanceMetadataHostname`. Enabling `useInstanceMetadataHostname` will query the EC2 metadata service and set `http://169.254.169.254/latest/meta-data/hostname` as `hostname-override` for `kubelet` and `kube-proxy`. 

Enabling `useInstanceMetadataHostname` is required if `hostname-override` is empty or if `hostname-override` doesn't meet the [node naming conventions](https://cloud-provider-aws.sigs.k8s.io/prerequisites/). 

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

**Remove** `enable-leader-migration` from:

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

6. If you're upgrading the cluster's Kubernetes version, set the Kubernetes version as well.

7. Update the cluster. The `aws-cloud-controller-manager` pods should now be running. 

8. (Optional) After the upgrade, leader migration is no longer required due to only one cloud-controller-manager and can be removed. Upgrade the chart and remove the following section from the container arguments:

```shell
- --enable-leader-migration=true 
```

Verify the cloud controller manager update was successfully rolled out with the following command:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```