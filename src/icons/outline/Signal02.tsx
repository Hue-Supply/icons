import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSignal02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 8s-1 1.313-1 3.5S7 15 7 15m10-7s1 1.313 1 3.5-1 3.5-1 3.5M4 5s-2 2.438-2 6.5C2 15.563 4 18 4 18M20 5s2 2.438 2 6.5c0 4.063-2 6.5-2 6.5m-6-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
  </svg>
);
export default SvgSignal02;
