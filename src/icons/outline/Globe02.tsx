import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlobe02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2m0 20C6.477 22 2 17.523 2 12S6.477 2 12 2m0 20c2.21 0 4-4.477 4-10S14.21 2 12 2m0 20c-2.21 0-4-4.477-4-10S9.79 2 12 2M3 15h18M3 9h18"
    />
  </svg>
);
export default SvgGlobe02;
