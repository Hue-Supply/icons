import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 19.453A5.27 5.27 0 0 1 4.547 12l2.236-2.236a3.69 3.69 0 0 1 5.217 0m0-5.217A5.27 5.27 0 0 1 19.453 12l-2.236 2.236a3.69 3.69 0 0 1-5.217 0"
    />
  </svg>
);
export default SvgLink04;
