import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh021 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.945 10c-2.765-2.943-5.858-7-10-7A9 9 0 0 0 2 11m18.945-1V4m0 6h-6M2 15c2.765 2.943 5.858 7 10 7 4.633 0 8.448-3.5 8.945-8M2 15v6m0-6h6"
    />
  </svg>
);
export default SvgRefresh021;
