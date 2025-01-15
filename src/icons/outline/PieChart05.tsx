import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPieChart05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 12c0 5.523 4.477 10 10 10M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M2 12a10 10 0 0 0 10 10M2 12h10M2 12a10 10 0 0 1 13.708-9.287L12 12m0 10V12"
    />
  </svg>
);
export default SvgPieChart05;
