import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.929 12.071h14m-6.93 7.071 7.072-7.07L12 5"
    />
  </svg>
);
export default SvgArrowRight;
