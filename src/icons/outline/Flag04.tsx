import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlag04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 21V3m0 1.39 12.045 3.706c2.247.691 3.371 1.037 3.664 1.563a1.5 1.5 0 0 1 0 1.461c-.293.526-1.417.872-3.664 1.564L4 16.39z"
    />
  </svg>
);
export default SvgFlag04;
