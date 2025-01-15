import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockSnooze = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.636 3c.852.567 1.628 1.24 2.309 2M5.309 3A12 12 0 0 0 3 5m7-3.634h2m0 0h2m-2 0V4m-3 6h6l-6 6h6m5.947-2.947a8.947 8.947 0 1 1-17.894 0 8.947 8.947 0 0 1 17.894 0"
    />
  </svg>
);
export default SvgClockSnooze;
