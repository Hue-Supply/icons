import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpacingHorizontal1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 21H3M21 3H3m5 6h8c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C19 10.602 19 11.068 19 12s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C17.398 15 16.932 15 16 15H8c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C5 13.398 5 12.932 5 12s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C6.602 9 7.068 9 8 9"
    />
  </svg>
);
export default SvgSpacingHorizontal1;
