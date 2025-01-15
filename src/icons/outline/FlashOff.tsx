import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlashOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.75 15.5 11 22v-8.5H6l2.572-4.41m8.053 3.16L18.5 9h-5L13 1.5l-2.652 4.547M1.75 2l20 20"
    />
  </svg>
);
export default SvgFlashOff;
