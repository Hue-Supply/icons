import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLaptop06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 17.333C2 16.597 2.597 16 3.333 16h17.334c.736 0 1.333.597 1.333 1.333A2.667 2.667 0 0 1 19.333 20H4.667A2.667 2.667 0 0 1 2 17.333M3 16h18v-3.5l-3.425-2.997c-.212-.186-.318-.278-.439-.34a1.1 1.1 0 0 0-.341-.11c-.135-.019-.275-.005-.555.023l-2.305.23c-.67.068-1.006.101-1.265-.009a1.1 1.1 0 0 1-.535-.484C12 8.566 12 8.229 12 7.555V5.76c0-.616 0-.924-.12-1.16a1.1 1.1 0 0 0-.48-.48C11.163 4 10.855 4 10.24 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2zM22.5 8.5 23 3l-7-.5-.5 3.5 4.5.5z"
    />
  </svg>
);
export default SvgLaptop06;
