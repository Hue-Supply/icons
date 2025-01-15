import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRainbow = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 17C2 11.477 6.477 7 12 7s10 4.477 10 10M5.637 17a6.364 6.364 0 1 1 12.727 0m-9.09 0a2.727 2.727 0 1 1 5.454 0"
    />
  </svg>
);
export default SvgRainbow;
