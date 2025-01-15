import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicrophone02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 18a7 7 0 0 1-7-7m7 7a7 7 0 0 0 7-7m-7 7v3m-4 1s1.5-1 4-1m0 0c2.5 0 4 1 4 1m-4-8a3 3 0 0 1-3-3V5a3 3 0 1 1 6 0v6a3 3 0 0 1-3 3"
    />
  </svg>
);
export default SvgMicrophone02;
