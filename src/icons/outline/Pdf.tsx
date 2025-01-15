import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPdf = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 12V8.16A.16.16 0 0 1 3.16 8H5a2 2 0 1 1 0 4zm0 0v4m18.5-8h-4a.5.5 0 0 0-.5.5V12m0 0v4m0-4h4M10 8.5v7a.5.5 0 0 0 .5.5H12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1.5a.5.5 0 0 0-.5.5"
    />
  </svg>
);
export default SvgPdf;
