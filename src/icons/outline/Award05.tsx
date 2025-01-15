import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAward05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m6 3 6 8 6-8m-3 9.5 4.381-5.695A2.985 2.985 0 0 0 17.015 2H6.985a2.985 2.985 0 0 0-2.366 4.805L9 12.5m8 4.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default SvgAward05;
