import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrane = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.5 21h6m-3 0V3m0 0L2 9h18.5m-11-6 11 6M22 9h-1.5m-5.35 3.189A2 2 0 1 0 18 14V9"
    />
  </svg>
);
export default SvgCrane;
