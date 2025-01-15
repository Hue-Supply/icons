import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMugOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.327 15.764A6 6 0 0 1 11 19H9a6 6 0 0 1-6-6V6.5A1.5 1.5 0 0 1 4.5 5H5m12 6.113V6.5A1.5 1.5 0 0 0 15.5 5h-4.623M17 8h3a2 2 0 0 1 2 2v1a4 4 0 0 1-1.644 3.233M2.5 1.697l20 20"
    />
  </svg>
);
export default SvgMugOff;
