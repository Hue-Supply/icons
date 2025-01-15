import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowOutlineLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.972 12.872v-1.8a1.5 1.5 0 0 0-1.5-1.5h-9.5V7.765c0-1.36-1.664-2.018-2.594-1.026l-3.944 4.207a1.5 1.5 0 0 0 0 2.052l3.944 4.207c.93.992 2.594.334 2.594-1.026v-1.807h9.5a1.5 1.5 0 0 0 1.5-1.5"
    />
  </svg>
);
export default SvgArrowOutlineLeft;
