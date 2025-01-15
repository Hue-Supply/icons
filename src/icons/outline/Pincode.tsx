import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPincode = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.485 12h.01m4.5 0h.01m4.5 0h.01M7.5 16.5h9c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 14.097 21 13.398 21 12s0-2.097-.228-2.648a3 3 0 0 0-1.624-1.624C18.597 7.5 17.898 7.5 16.5 7.5h-9c-1.398 0-2.097 0-2.648.228a3 3 0 0 0-1.624 1.624C3 9.903 3 10.602 3 12s0 2.097.228 2.648a3 3 0 0 0 1.624 1.624c.551.228 1.25.228 2.648.228"
    />
  </svg>
);
export default SvgPincode;
