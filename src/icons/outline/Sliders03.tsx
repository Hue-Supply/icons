import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSliders03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 21v-6m8-1V3m-8 8V3m0 8H6m2 0h2m6 10v-3m0 0h-2m2 0h2"
    />
  </svg>
);
export default SvgSliders03;
