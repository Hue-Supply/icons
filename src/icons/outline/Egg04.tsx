import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEgg04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.619 13.429c0 5.522-3.411 8.571-7.62 8.571-4.207 0-7.618-3.049-7.618-8.571S7.792 2 12 2s7.619 5.906 7.619 11.429"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.726 13.713c0 2.394-1.668 4.334-3.726 4.334s-3.726-1.94-3.726-4.334S9.942 9.38 12 9.38s3.726 1.94 3.726 4.334"
    />
  </svg>
);
export default SvgEgg04;
