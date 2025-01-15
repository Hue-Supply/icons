import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaximize03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m14.97 9.015 5.483-5.484M9.048 14.984l-5.483 5.483m17.42-12.15V3h-5.317M3.033 15.682V21H8.35"
    />
  </svg>
);
export default SvgMaximize03;
