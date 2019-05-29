- Added the support for multi level packages and their nav items grouping.
- This is necessary because without grouping the nested packages also falls in the root level flat structure in nav which makes package discoverability difficult.
- For the multi level packages to show up in the website, consumers need to specify packages: ['./packages/**/*'] in the docs.config.js
- This is being set as the default configuration of the website. If need to override consumers can specify packages: ['./packages/*']
  or any other location according to their requirements.
  