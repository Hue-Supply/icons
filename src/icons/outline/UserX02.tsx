import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserX02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.013 21H4v-1.33a4.06 4.06 0 0 1 3.076-3.939 20.3 20.3 0 0 1 5.424-.6m3.69 1.068 2.4 2.4m0 0L20.992 21m-2.4-2.4 2.4-2.4m-2.4 2.4-2.4 2.4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
);
export default SvgUserX02;
