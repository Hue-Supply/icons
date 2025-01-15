import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserCheck02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M11.013 21H4v-1.33a4.06 4.06 0 0 1 3.076-3.939 20.3 20.3 0 0 1 8.941-.205m-1.64 3.11 1.92 2.17a.537.537 0 0 0 .826 0L21.377 16M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
);
export default SvgUserCheck02;
