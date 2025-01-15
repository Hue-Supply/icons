import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefreshCw = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 10c-2.765-2.943-5.858-7-10-7a9 9 0 1 0 8.488 12M21 10V4m0 6h-6"
    />
  </svg>
);
export default SvgRefreshCw;
