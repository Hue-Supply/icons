import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortAscending = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 12h9M2 6h9M2 18h12m4.644-3V3.708M22 6.393l-3.356-3.356-3.357 3.356"
    />
  </svg>
);
export default SvgSortAscending;
