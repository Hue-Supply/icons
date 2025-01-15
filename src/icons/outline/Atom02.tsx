import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAtom02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.851 19.851c-2.396 2.397-7.854.824-12.19-3.512S1.75 6.545 4.148 4.149c2.396-2.397 7.854-.824 12.19 3.512 4.337 4.336 5.91 9.794 3.513 12.19"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.851 4.148c2.396 2.397.824 7.855-3.513 12.19-4.336 4.337-9.794 5.91-12.19 3.513-2.396-2.396-.823-7.854 3.513-12.19s9.794-5.909 12.19-3.513"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgAtom02;
