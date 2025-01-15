import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasBauble = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15 6V5a3 3 0 1 0-6 0v1m10.37 4.75-2.554 1.04a3 3 0 0 1-2.262 0l-1.423-.58a3 3 0 0 0-2.262 0l-1.423.58a3 3 0 0 1-2.262 0L4.63 10.75m14.74 5-2.554 1.04a3 3 0 0 1-2.262 0l-1.423-.58a3 3 0 0 0-2.262 0l-1.423.58a3 3 0 0 1-2.262 0L4.63 15.75M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
);
export default SvgChristmasBauble;
