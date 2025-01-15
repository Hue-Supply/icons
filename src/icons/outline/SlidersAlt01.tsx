import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSlidersAlt01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 9V3m0 18v-4m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7-9V3m0 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 13v-5m7-6V3m0 18v-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgSlidersAlt01;
