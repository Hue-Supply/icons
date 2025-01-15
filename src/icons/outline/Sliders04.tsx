import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSliders04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 16h-6m-1-8H3m8 8H3m8 0v2m0-2v-2m10-6h-3m0 0v2m0-2V6"
    />
  </svg>
);
export default SvgSliders04;
