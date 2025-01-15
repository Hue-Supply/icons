import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGoogle1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.944 10.644c.232 2.071-.263 4.515-1.4 6.263A9 9 0 1 1 17.66 5.003l-2.655 2.392A5.5 5.5 0 1 0 17.125 14h-4.126v-3.356z"
    />
  </svg>
);
export default SvgGoogle1;
