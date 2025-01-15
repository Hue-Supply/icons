import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeading01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 4h2M6 4H4m2 0v8m0 8h2m-2 0H4m2 0v-8m0 0h12m0 0V4m0 8v8m0-16h2m-2 0h-2m2 16h2m-2 0h-2"
    />
  </svg>
);
export default SvgHeading01;
