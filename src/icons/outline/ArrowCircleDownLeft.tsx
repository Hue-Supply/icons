import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleDownLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.187 14.813V8.776m0 6.037h6.037m-6.037 0 5.289-5.289M19.07 4.93c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142 10.237-3.905 14.142 0"
    />
  </svg>
);
export default SvgArrowCircleDownLeft;
