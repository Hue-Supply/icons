import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSlidersAlt02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 19H3m18 0h-4m0 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-9-7H3m5 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m13 0h-5m-6-7H3m18 0h-3m0 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
  </svg>
);
export default SvgSlidersAlt02;
