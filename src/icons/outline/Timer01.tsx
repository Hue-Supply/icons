import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimer01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.636 3c.852.567 1.628 1.24 2.309 2M5.309 3A12 12 0 0 0 3 5m9 3.132v4.921l2.684 2.684M10 1.366h2m0 0h2m-2 0V4m8.947 9.053a8.947 8.947 0 1 1-17.894 0 8.947 8.947 0 0 1 17.894 0"
    />
  </svg>
);
export default SvgTimer01;
