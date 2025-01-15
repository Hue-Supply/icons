import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 7H7a5 5 0 0 0 0 10h1m8-10h1a5 5 0 0 1 0 10h-1m-8-5h8"
    />
  </svg>
);
export default SvgLink01;
