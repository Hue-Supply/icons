import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearchOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.5 6.335A8 8 0 1 0 6.335 17.5M18.938 10q.062.492.062 1a8 8 0 0 1-9 7.938M21 21l-4-4M2 22 22 2"
    />
  </svg>
);
export default SvgSearchOff;
