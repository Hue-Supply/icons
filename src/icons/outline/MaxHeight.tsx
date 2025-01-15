import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaxHeight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 21H3M21 3H3m6.389 12.457L12 17.99m0 0 2.612-2.533M12 17.99V5.924m0 0L9.389 8.457M12 5.924l2.612 2.533"
    />
  </svg>
);
export default SvgMaxHeight;
