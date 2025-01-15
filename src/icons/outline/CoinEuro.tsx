import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinEuro = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.813 7.522a5.87 5.87 0 0 0-3.633-1.247c-3.22 0-5.83 2.563-5.83 5.725s2.61 5.725 5.83 5.725a5.87 5.87 0 0 0 3.633-1.247M4.896 10.374h5.36m-5.36 3.252h5.36M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgCoinEuro;
