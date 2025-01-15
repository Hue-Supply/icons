import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScooter = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 15h.385A4.615 4.615 0 0 1 9 19.615c0 .213.172.385.385.385h5.23a.385.385 0 0 0 .385-.385A4.615 4.615 0 0 1 19.615 15H21L17.5 2H15M8.5 17h7M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgScooter;
