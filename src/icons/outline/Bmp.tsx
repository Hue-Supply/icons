import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBmp = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 12V8.16A.16.16 0 0 1 3.16 8H5a2 2 0 1 1 0 4m-2 0v4m0-4h2m-2 0v3.84c0 .088.072.16.16.16H5a2 2 0 1 0 0-4m-2 0V8m7 8V8l2 4 2-4v8m3-4V8.16a.16.16 0 0 1 .16-.16H19a2 2 0 1 1 0 4zm0 0v4"
    />
  </svg>
);
export default SvgBmp;
