
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
          href: 'https://github.com/rancher/rke1-docs',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__github',
        },
        {
          href: 'https://www.rancher.com',
          label: 'Rancher Home',
          position: 'right',
        },
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
