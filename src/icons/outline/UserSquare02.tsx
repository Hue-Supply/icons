import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserSquare02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18 20v-1.034c0-1.45-.951-2.713-2.307-3.064a14.7 14.7 0 0 0-7.386 0C6.95 16.253 6 17.517 6 18.966V20m9.375-10.5c0 1.933-1.511 3.5-3.375 3.5s-3.375-1.567-3.375-3.5S10.136 6 12 6s3.375 1.567 3.375 3.5M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21"
    />
  </svg>
);
export default SvgUserSquare02;
