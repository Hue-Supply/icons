import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSlidersAlt05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 8h5m6 8h7m-5-8h3.579M16 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
);
export default SvgSlidersAlt05;
