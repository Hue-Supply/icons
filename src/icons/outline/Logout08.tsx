import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogout08 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m2 12 4.27 4.27M2 12l4.27-4.27M2 12h10.621M8.873 4c1.236-.64 2.64-1 4.127-1a9 9 0 1 1-4.127 17"
    />
  </svg>
);
export default SvgLogout08;
