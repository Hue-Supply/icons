import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefreshCcw = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 10c2.765-2.943 5.858-7 10-7a9 9 0 1 1 0 18 9 9 0 0 1-8.488-6M2 10V4m0 6h6"
    />
  </svg>
);
export default SvgRefreshCcw;
