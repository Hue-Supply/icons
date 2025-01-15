import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZoomIn1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M20.29 21.704a1 1 0 0 0 1.42-1.408zM14.18 12a1 1 0 1 0 0-2zm-6.362-2a1 1 0 1 0 0 2zM11 18a7 7 0 0 1-7-7H2a9 9 0 0 0 9 9zm-7-7a7 7 0 0 1 7-7V2a9 9 0 0 0-9 9zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9zm10.71 16.296-4.323-4.363-1.42 1.407 4.323 4.364zM14.18 10H7.818v2h6.362zM18 11a6.97 6.97 0 0 1-2.033 4.932l1.42 1.41A8.98 8.98 0 0 0 20 11zm-2.033 4.932A6.98 6.98 0 0 1 11 18v2a8.98 8.98 0 0 0 6.387-2.659z"
    />
  </svg>
);
export default SvgZoomIn1;
