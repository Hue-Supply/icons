import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpacingHorizontal = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 21V3m18 18V3m-6 5v8c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C13.398 19 12.932 19 12 19s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 17.398 9 16.932 9 16V8c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 5 11.068 5 12 5s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 6.602 15 7.068 15 8"
    />
  </svg>
);
export default SvgSpacingHorizontal;
