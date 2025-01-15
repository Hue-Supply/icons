import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRepeat03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.496 2 22 5.504l-3.504 3.504M6.504 14.992 3 18.496 6.504 22M20.5 5.5h-13c-1.398 0-2.097 0-2.648.228a3 3 0 0 0-1.624 1.624C3 7.903 3 8.602 3 10m1.451 8.492h13.057c1.39 0 2.086 0 2.634-.226a3 3 0 0 0 1.632-1.631C22 16.085 22 15.39 22 14"
    />
  </svg>
);
export default SvgRepeat03;
