import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingCart02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 5 13.514-.11c1.333-.012 2-.017 2.47.253a2 2 0 0 1 .887 1.06c.182.51.06 1.165-.186 2.476l-.696 3.71c-.174.93-.26 1.394-.5 1.742a2 2 0 0 1-.841.699c-.386.17-.859.17-1.804.17H6.5M5 5l1.5 10M5 5l-.5-3H2m4.5 13 .171 1.004c.121.71.182 1.064.36 1.33a1.5 1.5 0 0 0 .634.535c.292.131.652.131 1.372.131H18.5m-2 3.5h.01m-8.01 0h.01m8.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-8 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgShoppingCart02;
