import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDryCleanShort1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.004 22 2 14.996m3.997-5.003a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
    />
  </svg>
);
export default SvgDryCleanShort1;
