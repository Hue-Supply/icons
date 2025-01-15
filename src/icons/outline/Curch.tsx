import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCurch = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 13v9H4v-9m-2 1 10-6.5m0 0L22 14M12 7.5V2M2 22h20M10 4h4m.4 18v-4.753a2.4 2.4 0 0 0-4.8 0V22z"
    />
  </svg>
);
export default SvgCurch;
