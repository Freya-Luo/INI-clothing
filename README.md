## Cloud Clothing Shopping Site

### Project Overview

![Project Overview](./src/assets/clothing.gif)

This a full-stack progressive web application which is just ike any traditional e-commerce sites. Users can browser categories, toggle cart items, and their identities are verified by Firebase authentication mechanism. By integrating Stripe API and Netlify hosting platform, any payment requests initiated in frontend, even mock ones, would be taken over by backend for the security purpose. (Need to carry SECRET KEY)

Some extended features:

- Mobile responsiveness support
- GraphQL server and Apollo client are applied to replace REST API
- Service Worker is added into the existing project to convert it to PWA

#### How To Auto Deployed

Deployed demo can be checked here: [Netlify hosting - cloud clouthing](https://tangerine-panda-aed6e8.netlify.app/)

- `npm netlify login` to authenticate and get an access token
- any code changes will be auto-deployed by Netlify once `git push` the commits
