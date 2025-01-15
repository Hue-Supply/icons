import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserCircle02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18 20v-1.034c0-1.45-.951-2.713-2.307-3.064a14.7 14.7 0 0 0-7.386 0C6.95 16.253 6 17.517 6 18.966V20m9.375-10.5c0 1.933-1.511 3.5-3.375 3.5s-3.375-1.567-3.375-3.5S10.136 6 12 6s3.375 1.567 3.375 3.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgUserCircle02;
