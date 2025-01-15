import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinimize = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m20.015 4-5.483 5.483M4 20.014l5.483-5.483M14 4.698v5.316h5.317m-9.302 9.302V14H4.698"
    />
  </svg>
);
export default SvgMinimize;
