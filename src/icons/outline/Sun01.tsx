import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSun01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.929l1.414 1.414m11.312 11.314 1.415 1.414m-14.141 0 1.414-1.414M17.656 6.343l1.415-1.414M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default SvgSun01;
