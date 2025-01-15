import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDotsGrid = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 19a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 19a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 19a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
    />
  </svg>
);
export default SvgDotsGrid;
