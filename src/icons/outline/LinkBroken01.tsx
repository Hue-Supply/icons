import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLinkBroken01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.072 11.343 4.956 12.46a4.656 4.656 0 0 0 6.585 6.585l1.116-1.116M11.34 6.075l1.072-1.072a4.656 4.656 0 1 1 6.585 6.585l-1.072 1.072M7 4V2m10 18v2M4 7H2m18 10h2"
    />
  </svg>
);
export default SvgLinkBroken01;
