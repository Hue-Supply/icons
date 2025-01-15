import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlightLand = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 22h20m-3.27-4.347L6.371 14.73c-1.635-.387-2.452-.58-3.001-1.046a3 3 0 0 1-.974-1.578c-.17-.7.023-1.517.41-3.152l.56-2.37a1.266 1.266 0 0 1 2.446-.066l.932 3.162 4.336 1.026.902-7.235a1.58 1.58 0 0 1 3.137.005l1.021 8.428 3.741.885a2.5 2.5 0 1 1-1.15 4.865"
    />
  </svg>
);
export default SvgFlightLand;
