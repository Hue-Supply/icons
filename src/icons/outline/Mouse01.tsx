import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMouse01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 2a7 7 0 0 1 7 7v6a7 7 0 1 1-14 0V9a7 7 0 0 1 7-7m0 0v9m0 0h7m-7 0H5"
    />
  </svg>
);
export default SvgMouse01;
