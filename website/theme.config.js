// theme.config.js
export default {
  github: 'https://github.com/sidwebworks/js-modules-workshop', // GitHub link in the navbar
  docsRepositoryBase:
    'https://github.com/sidwebworks/js-modules-workshop/blob/master/website/pages', // base URL for the docs repository
  nextLinks: true,
  prevLinks: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  logo: <strong>📦 Understanding JS Modules</strong>,
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Nextra: the next docs builder' />
      <meta name='og:title' content='Nextra: the next docs builder' />
      <title>JS MODULES</title>
    </>
  ),
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Sidwebworks.</>,
};
