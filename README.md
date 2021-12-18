### Components

##### Home

-   `Menu` component: a list of all the `MenuSection` components for `Home` page
-   `MenuSection` component: same structure and styles for all the 5 sections - reuse

##### Shop

-   `Preview` component: a list of `PreviewSection` component for `Shop` page
-   `PreviewSection` component: for each `MenuSection` component, render some preview items - reuse
    -   a list of `Item` component
-   `Item` component: keep the same structure and styles across `Shop` and `Detail` page - rreuse
    -   each has a functionality to direct to the checkout process
