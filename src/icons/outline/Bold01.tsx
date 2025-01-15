import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBold01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.5 4h8a4 4 0 0 1 0 8h-8m0-8v8m0-8h-2m2 8h9a4 4 0 0 1 0 8h-9m0-8v8m-2 0h2"
    />
  </svg>
);
export default SvgBold01;
