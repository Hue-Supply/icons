import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaxWidth = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 21V3m18 18V3M8.543 9.388 6.01 12m0 0 2.533 2.612M6.01 12h12.066m0 0-2.533-2.612M18.076 12l-2.533 2.612"
    />
  </svg>
);
export default SvgMaxWidth;
