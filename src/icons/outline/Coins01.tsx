import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.5 15A6.5 6.5 0 1 1 15 8.5m7 7a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
    />
  </svg>
);
export default SvgCoins01;
