import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortHorizontal = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m16 7 5 5-5 5M8 7l-5 5 5 5"
    />
  </svg>
);
export default SvgSortHorizontal;
