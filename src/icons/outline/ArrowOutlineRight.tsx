import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowOutlineRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.028 11.072v1.8a1.5 1.5 0 0 0 1.5 1.5h9.5v1.807c0 1.36 1.665 2.018 2.595 1.026l3.944-4.207a1.5 1.5 0 0 0 0-2.052l-3.944-4.207c-.93-.992-2.595-.334-2.595 1.026v1.807h-9.5a1.5 1.5 0 0 0-1.5 1.5"
    />
  </svg>
);
export default SvgArrowOutlineRight;
