import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDryCleanReduced = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M1.994 9.003 9 1.998M14 5.995a8 8 0 1 1 0 16 8 8 0 0 1 0-16"
    />
  </svg>
);
export default SvgDryCleanReduced;
