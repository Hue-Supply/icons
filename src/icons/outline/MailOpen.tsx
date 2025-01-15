import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailOpen = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 7.5V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7.5m0-.199 8.738 5.519a1.5 1.5 0 0 0 1.545.034L22 7.301l-9.768-5.116a1.5 1.5 0 0 0-1.447.03z"
    />
  </svg>
);
export default SvgMailOpen;
