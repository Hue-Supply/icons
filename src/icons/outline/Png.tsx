import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPng = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-2.5a.5.5 0 0 0-.5-.5H20M3 12V8.16A.16.16 0 0 1 3.16 8H5a2 2 0 1 1 0 4zm0 0v4m7 0V8l4 8V8"
    />
  </svg>
);
export default SvgPng;
