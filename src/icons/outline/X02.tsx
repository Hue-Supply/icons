import * as React from 'react';
import type { SVGProps } from 'react';
const SvgX02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7 7 5 5m0 0 5 5m-5-5 5-5m-5 5-5 5"
    />
  </svg>
);
export default SvgX02;
