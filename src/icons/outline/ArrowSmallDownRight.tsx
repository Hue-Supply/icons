import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowSmallDownRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.343 6.343 16.949 16.95m-6.364.707h7.071v-7.071"
    />
  </svg>
);
export default SvgArrowSmallDownRight;
