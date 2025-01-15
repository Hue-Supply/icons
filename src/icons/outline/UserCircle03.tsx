import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserCircle03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 20s.667-4.523 6-4.523S18 20 18 20M15.375 9.5c0 1.933-1.511 3.5-3.375 3.5s-3.375-1.567-3.375-3.5S10.136 6 12 6s3.375 1.567 3.375 3.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgUserCircle03;
