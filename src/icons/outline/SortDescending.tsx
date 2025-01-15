import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortDescending = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 12h9M2 6h12M2 18h9m7.644-9v11.292m-3.357-2.685 3.357 3.356L22 17.607"
    />
  </svg>
);
export default SvgSortDescending;
