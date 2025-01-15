import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckCircle02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.627 2.678A9.9 9.9 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q-.001-.892-.151-1.742M7.907 12l2.729 3.122L21 4"
    />
  </svg>
);
export default SvgCheckCircle02;
