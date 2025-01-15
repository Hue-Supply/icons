import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockRefresh02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.459 9.78a9 9 0 1 0 4.804-5.56m-2.92 6.353L4.054 8.099l-2.44 1.354M12 7v5.177L15 15"
    />
  </svg>
);
export default SvgClockRefresh02;
