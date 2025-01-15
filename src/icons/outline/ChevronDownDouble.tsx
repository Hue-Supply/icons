import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronDownDouble = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7 6 5 5 5-5M7 13l5 5 5-5"
    />
  </svg>
);
export default SvgChevronDownDouble;
