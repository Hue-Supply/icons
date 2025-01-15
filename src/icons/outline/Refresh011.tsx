import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 10c2.765-2.943 5.858-7 10-7 4.633 0 8.448 3.5 8.945 8M2 10V4m0 6h6m12.945 5c-2.765 2.943-5.858 7-10 7A9 9 0 0 1 2 14m18.945 1v6m0-6h-6"
    />
  </svg>
);
export default SvgRefresh011;
