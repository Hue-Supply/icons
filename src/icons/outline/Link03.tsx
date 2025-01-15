import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 17A5 5 0 0 1 7 7h3a3.5 3.5 0 0 1 3.5 3.5M17 7a5 5 0 0 1 0 10h-3a3.5 3.5 0 0 1-3.5-3.5"
    />
  </svg>
);
export default SvgLink03;
