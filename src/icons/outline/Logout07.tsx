import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogout07 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m22 12-4.27 4.27M22 12l-4.27-4.27M22 12H11.38m3.747-8c-1.236-.64-2.64-1-4.127-1a9 9 0 1 0 4.127 17"
    />
  </svg>
);
export default SvgLogout07;
