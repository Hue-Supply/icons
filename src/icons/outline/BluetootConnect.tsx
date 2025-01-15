import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBluetootConnect = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 12V2l7 5zm0 0v10l7-5zm0 0-5 4m5-4L2 8m11.756 4h7.324m-1.613-2.256L22 12l-2.533 2.256"
    />
  </svg>
);
export default SvgBluetootConnect;
