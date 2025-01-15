import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWind01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 6.056s4 2 9 0 9 0 9 0M3 11.944s4 2 9 0 9 0 9 0m-18 6s4 2 9 0 9 0 9 0"
    />
  </svg>
);
export default SvgWind01;
