import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTunnel = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12v10H2V12m20 0c0-5.523-4.477-10-10-10S2 6.477 2 12m20 0h-6M2 12h6m4-4a4 4 0 0 1 4 4m-4-4a4 4 0 0 0-4 4m4-4V3m4 9v10H8V12m11.154-6.892L15.01 9.252M4.846 5.108 8.99 9.252M22 17h-6m-8 0H2"
    />
  </svg>
);
export default SvgTunnel;
