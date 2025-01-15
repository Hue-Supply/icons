import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSignal01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 12.5V22M7 6S6 7.313 6 9.5 7 13 7 13m10-7s1 1.313 1 3.5-1 3.5-1 3.5M4 3S2 5.438 2 9.5C2 13.563 4 16 4 16M20 3s2 2.438 2 6.5c0 4.063-2 6.5-2 6.5m-6-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
  </svg>
);
export default SvgSignal01;
