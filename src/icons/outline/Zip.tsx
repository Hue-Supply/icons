import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZip = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 8h3.191a.5.5 0 0 1 .447.724l-3.276 6.552a.5.5 0 0 0 .447.724H8m4-8v8m4-4V8.16a.16.16 0 0 1 .16-.16H18a2 2 0 1 1 0 4zm0 0v4"
    />
  </svg>
);
export default SvgZip;
