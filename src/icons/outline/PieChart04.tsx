import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPieChart04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10m10-10a10 10 0 0 1-10 10m10-10H12m10 0A10 10 0 0 0 8.292 2.713L12 12m0 10V12"
    />
  </svg>
);
export default SvgPieChart04;
