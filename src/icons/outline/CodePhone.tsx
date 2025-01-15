import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodePhone = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.377 16.636c0 1.855 0 2.782.36 3.49.318.624.825 1.13 1.448 1.448.708.36 1.636.36 3.49.36h2.65c1.854 0 2.782 0 3.49-.36a3.3 3.3 0 0 0 1.447-1.448c.361-.708.361-1.635.361-3.49m0-9.272c0-1.855 0-2.782-.36-3.49a3.3 3.3 0 0 0-1.448-1.448c-.708-.36-1.636-.36-3.49-.36h-2.65c-1.854 0-2.782 0-3.49.36a3.3 3.3 0 0 0-1.447 1.448c-.361.708-.361 1.635-.361 3.49m5.52-1.987h2.207M9.792 9.792 7.975 11.61a.55.55 0 0 0 0 .78l1.817 1.818m4.416-4.416 1.817 1.818a.55.55 0 0 1 0 .78l-1.817 1.818"
    />
  </svg>
);
export default SvgCodePhone;
