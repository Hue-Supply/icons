import * as React from 'react';
import type { SVGProps } from 'react';
const SvgX01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m6 6 6 6m0 0 6 6m-6-6 6-6m-6 6-6 6"
    />
  </svg>
);
export default SvgX01;
