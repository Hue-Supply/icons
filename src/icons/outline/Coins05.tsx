import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.965 14a6.5 6.5 0 1 0-8.944-9m-3 7.75h1.5v5.5m-1.5 0h3M2 15.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0"
    />
  </svg>
);
export default SvgCoins05;
