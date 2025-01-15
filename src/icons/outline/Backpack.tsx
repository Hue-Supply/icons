import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBackpack = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14 5V4a2 2 0 1 0-4 0v1m1 5h2M7.217 22h9.566A2.217 2.217 0 0 0 19 19.783V12a7 7 0 1 0-14 0v7.783C5 21.007 5.993 22 7.217 22ZM15 22v-4.6c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.655C13.861 15 13.441 15 12.6 15h-1.2c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.656.655C9 16.139 9 16.559 9 17.4V22z"
    />
  </svg>
);
export default SvgBackpack;
