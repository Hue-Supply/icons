import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVariant = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <rect
      width={14.185}
      height={14.185}
      x={1.97}
      y={12.031}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={1.5}
      transform="rotate(-45 1.97 12.03)"
    />
  </svg>
);
export default SvgVariant;
