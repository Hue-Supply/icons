import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTxt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 8h2m0 0h2M5 8v8m12-8h2m0 0h2m-2 0v8m-9-8 2 4m0 0 2 4m-2-4-2 4m2-4 2-4"
    />
  </svg>
);
export default SvgTxt;
