import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSecurityCamera01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 6.5c0-.464 0-.697.026-.892a3 3 0 0 1 2.582-2.582C4.803 3 5.036 3 5.5 3h13c.464 0 .697 0 .892.026a3 3 0 0 1 2.582 2.582c.026.195.026.428.026.892s0 .697-.026.892a3 3 0 0 1-2.582 2.582c-.195.026-.428.026-.892.026h-13c-.464 0-.697 0-.892-.026a3 3 0 0 1-2.582-2.582C2 7.197 2 6.964 2 6.5M5 10h14v4a7 7 0 1 1-14 0z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 15.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgSecurityCamera01;
