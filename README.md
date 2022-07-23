## Cloud Clouthing Shopping Site

### Project Overview

#### How to Start

Deployed demo address: [Netlify hosting](https://tangerine-panda-aed6e8.netlify.app/)

##### Home

- `Menu` component: a list of all the `MenuSection` components for `Home` page
- `MenuSection` component: same structure and styles for all the 5 sections - reuse

##### Shop

- `Preview` component: a list of `PreviewSection` component for `Shop` page
- `PreviewSection` component: for each `MenuSection` component, render some preview items - reuse
  - a list of `Item` component
- `Item` component: keep the same structure and styles across `Shop` and `Detail` page - rreuse

  - each has a functionality to direct to the checkout process

- `Header` component: Cross all pages, so put it in `App.js`
