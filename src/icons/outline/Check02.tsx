import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 12.458c2.188 1.375 3.358 2.637 4.667 5.042 1.458-3.667 4.958-9.167 9.333-11"
    />
  </svg>
);
export default SvgCheck02;
