import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh031 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.973 21.973c-2.943-2.765-7-5.858-7-10 0-4.633 3.5-8.448 8-8.946m-1 18.946h-6m6 0v-6m5-12.946c2.942 2.765 7 5.858 7 10 0 4.633-3.5 8.448-8 8.946m1-18.946h6m-6 0v6"
    />
  </svg>
);
export default SvgRefresh031;
