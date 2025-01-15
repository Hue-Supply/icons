import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTv01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 21h12M6.8 18h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 15.72 22 14.88 22 13.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 18 5.12 18 6.8 18"
    />
  </svg>
);
export default SvgTv01;
