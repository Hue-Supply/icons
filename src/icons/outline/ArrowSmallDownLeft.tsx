import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowSmallDownLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.656 6.343 7.05 16.95m6.364.707H6.343v-7.071"
    />
  </svg>
);
export default SvgArrowSmallDownLeft;
