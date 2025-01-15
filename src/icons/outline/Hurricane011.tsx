import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHurricane011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.246 4.5H22m-18 0h3m4.246 10H22m-18 0h3m5.754-5H2m18 0h-2m-5.246 10H2m18 0h-2"
    />
  </svg>
);
export default SvgHurricane011;
