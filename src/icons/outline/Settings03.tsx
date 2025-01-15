import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSettings03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m0 0h11m-7-10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m0 0H3"
    />
  </svg>
);
export default SvgSettings03;
