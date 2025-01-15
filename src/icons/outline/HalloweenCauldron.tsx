import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenCauldron = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m21 22-2-3M3 22l2-3m6.005-15.247-.001-.01m2.497 2.267L13.5 6M17 7l1-2 2.5-1L22 2m-1 9.667C21 16.82 16.97 21 12 21s-9-4.179-9-9.333c0-1.555 0-2.332.281-2.935a3 3 0 0 1 1.451-1.45C5.335 7 6.112 7 7.667 7h8.666c1.555 0 2.332 0 2.935.281a3 3 0 0 1 1.45 1.451c.282.603.282 1.38.282 2.935M7.826 3.913a1.913 1.913 0 1 1-3.826 0 1.913 1.913 0 0 1 3.826 0"
    />
  </svg>
);
export default SvgHalloweenCauldron;
