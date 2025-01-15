import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSun03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 13.207a5 5 0 0 1 10 0m-5-10v2m-10 8h2m16 0h2M4.93 6.136 6.344 7.55m11.312 0 1.415-1.414M22 17.178H2m15.898 3.615H6.102"
    />
  </svg>
);
export default SvgSun03;
