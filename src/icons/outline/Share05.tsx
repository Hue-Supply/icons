import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.293 6.295 8.705 10.7m6.588-4.405a3 3 0 1 0 5.413-2.591 3 3 0 0 0-5.413 2.591M8.705 10.7A3 3 0 1 0 8.5 13.66m.204-2.959c.19.393.296.834.296 1.3 0 .613-.184 1.184-.5 1.659m6.802 4.028L8.5 13.66m6.802 4.028a3 3 0 1 0 5.396 2.626 3 3 0 0 0-5.396-2.626"
    />
  </svg>
);
export default SvgShare05;
