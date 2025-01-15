import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaximize05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.985 8.316V4.5a1.5 1.5 0 0 0-1.5-1.5h-3.817M3.033 15.682v3.816a1.5 1.5 0 0 0 1.5 1.5H8.35"
    />
  </svg>
);
export default SvgMaximize05;
