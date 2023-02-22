module.exports = {
  mySidebar: [
    'introduction',
    {
      type: 'category',
      label: 'RKE Kubernetes Installation',
      link: {type: 'doc', id: 'installation/installation'},
      items: ['installation/certs/certs'],
    },
    {
      type: 'category',
      label: 'Upgrades',
      link: {type: 'doc', id: 'upgrades/upgrades'},
      items:[
          'upgrades/how-upgrades-work/how-upgrades-work',
          'upgrades/maintaining-availability/maintaining-availability',
          'upgrades/configuring-strategy/configuring-strategy',
      ],
    },
    'kubeconfig/kubeconfig',
    {
      type: 'category',
      label: 'Backups and Disaster Recovery',
      link: {type: 'doc', id: 'etcd-snapshots/etcd-snapshots'},
      items:[
        'etcd-snapshots/one-time-snapshots/one-time-snapshots',
        'etcd-snapshots/recurring-snapshots/recurring-snapshots',
        'etcd-snapshots/restoring-from-backup/restoring-from-backup',
        'etcd-snapshots/example-scenarios/example-scenarios',
        'etcd-snapshots/troubleshooting/troubleshooting'
      ],
    },
    'cert-mgmt/cert-mgmt',
    'managing-clusters/managing-clusters',
    {
      type: 'category',
      label: 'Kubernetes Configuration Options',
      link: {type: 'doc', id: 'config-options/config-options'},
      items:[
        'config-options/nodes/nodes',
        'config-options/private-registries/private-registries',
        'config-options/bastion-host/bastion-host',
        'config-options/system-images/system-images',
        {
          type: 'category',
          label: 'Default Kubernetes Services',
          link: {type: 'doc', id: 'config-options/services/services'},
          items: [
            'config-options/services/services-extras/services-extras',
            'config-options/services/external-etcd/external-etcd'
          ]
        },
        'config-options/secrets-encryption/secrets-encryption',
        'config-options/authentication/authentication',
        'config-options/authorization/authorization',
        'config-options/rate-limiting/rate-limiting',
        {
          type: 'category',
          label: 'Cloud Providers',
          link: {type: 'doc', id: 'config-options/cloud-providers/cloud-providers'},
          items: [
            'config-options/cloud-providers/aws/aws',
            'config-options/cloud-providers/azure/azure',
            'config-options/cloud-providers/openstack/openstack',
            {
              type: 'category',
              label: 'vSphere Cloud Provider',
              link: {type: 'doc', id: 'config-options/cloud-providers/vsphere/vsphere'},
              items: [
                'config-options/cloud-providers/vsphere/enabling-uuid/enabling-uuid',
                'config-options/cloud-providers/vsphere/config-reference/config-reference',
                'config-options/cloud-providers/vsphere/troubleshooting/troubleshooting'
              ]
            },
            'config-options/cloud-providers/custom/custom',
          ]
        },
        'config-options/audit-log/audit-log',
        'config-options/dual-stack/dual-stack',
      ],
    },
    'example-yamls/example-yamls',
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {type: 'doc', id: 'troubleshooting/troubleshooting'},
      items:[
        'troubleshooting/ssh-connectivity-errors/ssh-connectivity-errors',
        'troubleshooting/provisioning-errors/provisioning-errors'
      ],
    },
  ],
};