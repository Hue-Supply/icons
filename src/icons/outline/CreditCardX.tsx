import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardX = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M13.468 19H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 16.72 2 15.88 2 14.2V9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 5 5.12 5 6.8 5h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 7.28 22 8.12 22 9.8v1.7M2 10h20m-4.8 5 2.4 2.4m0 0 2.4 2.4m-2.4-2.4L22 15m-2.4 2.4-2.4 2.4"
    />
  </svg>
);
export default SvgCreditCardX;
