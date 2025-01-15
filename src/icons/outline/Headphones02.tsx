import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeadphones02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 18v-5c0-5.523-4.477-10-10-10S2 7.477 2 13v5M9 6.68s1 .5 2.75.5 2.75-.5 2.75-.5M7.5 21A2.5 2.5 0 0 1 5 18.5v-3a2.5 2.5 0 0 1 5 0v3A2.5 2.5 0 0 1 7.5 21m9 0a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-2.5 2.5"
    />
  </svg>
);
export default SvgHeadphones02;
