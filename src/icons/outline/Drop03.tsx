import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDrop03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.5 14c0 4.418-3.358 8-7.5 8s-7.5-3.582-7.5-8m15 0c0-2.001-.7-3.858-1.853-5.265L12 2 6.352 8.737C5.198 10.143 4.5 12 4.5 14m15 0h-15"
    />
  </svg>
);
export default SvgDrop03;
