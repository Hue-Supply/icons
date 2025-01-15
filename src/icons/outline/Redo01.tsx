import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRedo01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.757 1.757 20 6l-4.243 4.243M18.448 6H11a6 6 0 1 0 0 12h9"
    />
  </svg>
);
export default SvgRedo01;
