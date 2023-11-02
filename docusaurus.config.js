
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RKE1',
  tagline: '',
  url: 'https://rke.docs.rancher.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'rancher', // Usually your GitHub org/user name.
  projectName: 'rke1-docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: "",
      logo: {
        alt: 'logo',
        src: 'img/logo-horizontal-rke.svg',
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Quick Links',
          position: 'right',
          items: [
            {
              href: 'https://github.com/rancher/rke',
              label: 'GitHub',
            },
            {
              href: 'https://github.com/rancher/rke1-docs',
              label: 'Docs GitHub',
            },
          ]
        },
        {
          type: 'dropdown',
          label: 'More from SUSE',
          position: 'right',
          items: [
            {
              href: 'https://www.rancher.com',
              label: 'Rancher',
              className: 'navbar__icon navbar__rancher',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://elemental.docs.rancher.com/',
              label: 'Elemental',
              className: 'navbar__icon navbar__elemental',
            },
            {
              href: 'https://epinio.io/',
              label: 'Epinio',
              className: 'navbar__icon navbar__epinio',
            },
            {
              href: 'https://fleet.rancher.io/',
              label: 'Fleet',
              className: 'navbar__icon navbar__fleet',
            },
            {
              href: 'https://harvesterhci.io',
              label: 'Harvester',
              className: 'navbar__icon navbar__harvester',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://opensource.suse.com',
              label: 'More Projects...',
              className: 'navbar__icon navbar__suse',
            },
          ]
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/rancher/rke1-docs/edit/main/',
        },
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        googleTagManager: {
          containerId: 'GTM-57KS2MW',
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        indexBaseUrl: true
      }
    ]
  ],
};
