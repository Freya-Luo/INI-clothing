/**
 * Custom type for svg files. Just for TS to realize the "svg".
 *
 * Register any path ends with .svg by declaring modules. TS will import the appropriate
 * modules according to the following rules.
 */
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
