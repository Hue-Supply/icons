import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSupport = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m6.5 20.328 3.633-3.633m-2.907-2.75L3.76 17.412m3.467-7.357L3.672 6.5m2.876-2.78L9.828 7m7.556 13.212-3.36-3.36m2.75-2.907 3.457 3.458M17.5 3.671l-3.477 3.477M16.828 10l3.427-3.427M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default SvgSupport;
