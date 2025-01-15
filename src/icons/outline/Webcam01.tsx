import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWebcam01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 21s1.5-1 3.938-1S16 21 16 21M6.75 7.5h.007M8.5 17h7a6.5 6.5 0 1 0 0-13h-7a6.5 6.5 0 0 0 0 13m6.5-6.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgWebcam01;
