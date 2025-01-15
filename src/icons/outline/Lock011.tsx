import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLock011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 10V7a5 5 0 0 1 9.331-2.5M12 14v2m7-1a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
    />
  </svg>
);
export default SvgLock011;
