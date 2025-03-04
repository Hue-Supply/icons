import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLock02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 10V7A5 5 0 0 0 7 7v3m5 5v2m-2.2 5h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 19.72 19 18.88 19 17.2v-2.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 10 15.88 10 14.2 10H9.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C5 12.28 5 13.12 5 14.8v2.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C7.28 22 8.12 22 9.8 22"
    />
  </svg>
);
export default SvgLock02;
