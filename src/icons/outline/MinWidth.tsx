import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinWidth = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 21V3m5.533 6.388L15 12m0 0 2.533 2.612M15 12h7M6.467 9.388 9 12m0 0-2.533 2.612M9 12H2"
    />
  </svg>
);
export default SvgMinWidth;
