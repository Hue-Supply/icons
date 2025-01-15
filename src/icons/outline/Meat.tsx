import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMeat = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m3.225 12.305 2.34-2.34a6.144 6.144 0 1 1 8.689 8.69l-2.34 2.34m-8.69-8.69c-1.107 1.108-.06 3.95 2.34 6.35s5.243 3.447 6.35 2.34m-8.69-8.69c1.108-1.107 3.95-.06 6.35 2.34s3.448 5.242 2.34 6.35m1.32-12.384 1.738-1.738a2.607 2.607 0 1 1 4.513-2.139 2.607 2.607 0 1 1-2.14 4.514l-1.737 1.738m-8.373 5.33.668.668"
    />
  </svg>
);
export default SvgMeat;
