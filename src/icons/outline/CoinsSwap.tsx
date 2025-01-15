import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinsSwap = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.336 5.418 4.174 7.649 2 5.418m15.664 13.164 2.162-2.231L22 18.582M4.168 7.649V6.52c0-1.416 0-2.124.234-2.681a3 3 0 0 1 1.604-1.604C6.563 2 7.27 2 8.688 2m11.144 14.35v1.13c0 1.417 0 2.125-.234 2.682a3 3 0 0 1-1.604 1.604C17.437 22 16.73 22 15.313 22m1.187-9A5.5 5.5 0 1 0 11 7.5m2 9a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
    />
  </svg>
);
export default SvgCoinsSwap;
