import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSort = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.708 20.033V4.025m0 0 4.316 4.316m-4.316-4.316L12.392 8.34M6.996 4.025v16.008m0 0L2.68 15.717m4.316 4.316 4.317-4.316"
    />
  </svg>
);
export default SvgSort;
