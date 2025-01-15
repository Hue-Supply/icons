import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBuilding02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 21h16M10 7h4m-4 4h4m-4 4h4m4 6V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 3 14.88 3 13.2 3h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C6 5.28 6 6.12 6 7.8V21z"
    />
  </svg>
);
export default SvgBuilding02;
