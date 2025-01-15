import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlur011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.077 19.666A11.74 11.74 0 0 1 12 22.025c-2.655 0-5.106-.878-7.077-2.359m15.334-9.435a8.256 8.256 0 1 1-16.512 0 8.256 8.256 0 0 1 16.512 0"
    />
  </svg>
);
export default SvgBlur011;
