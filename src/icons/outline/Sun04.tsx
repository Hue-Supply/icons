import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSun04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.238 15.955a5.762 5.762 0 0 1 11.525 0M12 4.43v2.305m-8.148 1.07 1.63 1.63m13.038 0 1.63-1.63m1.85 8.15H2m15.898 3.615H6.102"
    />
  </svg>
);
export default SvgSun04;
