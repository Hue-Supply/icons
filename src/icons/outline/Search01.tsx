import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearch01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m21 21-3-3m2-6.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
    />
  </svg>
);
export default SvgSearch01;
