import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPincode1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.5 15.589h-4c-1.398 0-2.097 0-2.648-.228a3 3 0 0 1-1.624-1.624C3 13.186 3 12.487 3 11.089s0-2.097.228-2.648a3 3 0 0 1 1.624-1.624c.551-.228 1.25-.228 2.648-.228h9c1.398 0 2.097 0 2.648.228a3 3 0 0 1 1.624 1.624C21 8.992 21 9.69 21 11.089m-13.515 0h.01m4.5 0h.01m4.5 0h.01m-1.894 5.878 1.75 1.978a.49.49 0 0 0 .752 0L21 14.564"
    />
  </svg>
);
export default SvgPincode1;
