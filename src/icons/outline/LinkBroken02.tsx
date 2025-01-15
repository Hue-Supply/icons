import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLinkBroken02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.783 20.127a5.27 5.27 0 1 1-5.27-9.128L8.25 9.418a3.69 3.69 0 0 1 5.04 1.35m-2.292-5.255a5.27 5.27 0 1 1 9.128 5.27l-1.581 2.738a3.69 3.69 0 0 1-5.04 1.35M17 20v2m3-5h2M7 4V2M4 7H2"
    />
  </svg>
);
export default SvgLinkBroken02;
