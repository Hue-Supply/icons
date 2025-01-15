import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFactory02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 21h18M8.125 21H4s2.292-4 2.292-13h6.416c0 9 2.292 13 2.292 13h-4.125m2.626-9h3.832c0 6.23 1.667 9 1.667 9h-3m5-17.334c-1.126-.968-2.694-.968-3.82 0l-.135.116c-1.206 1.036-2.884 1.036-4.09 0l-.135-.116c-1.126-.968-2.694-.968-3.82 0"
    />
  </svg>
);
export default SvgFactory02;
