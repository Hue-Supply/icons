import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwapHorizontal04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.039 8.263H4.919M4 15.76h15.12M6.531 6.007 3.999 8.263l2.533 2.256m10.974 2.984 2.532 2.256-2.532 2.256"
    />
  </svg>
);
export default SvgSwapHorizontal04;
