import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlur012 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.894 18.322a6.6 6.6 0 0 0 0-12.644c-.453-.135-.68-.203-1.011-.112a1.4 1.4 0 0 0-.7.521C12 6.38 12 6.694 12 7.322v9.356c0 .628 0 .943.182 1.235.135.215.456.454.7.521.332.091.559.023 1.012-.112"
    />
  </svg>
);
export default SvgBlur012;
