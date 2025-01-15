import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudMinus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.032 13.645h-5M6.5 19C4.015 19 2 16.83 2 14.154s2.015-4.846 4.5-4.846q.27 0 .534.033C7.311 6.895 9.246 5 11.593 5c2.404 0 4.377 1.99 4.576 4.523.42-.14.868-.215 1.331-.215 2.485 0 4.5 2.17 4.5 4.846S19.985 19 17.5 19z"
    />
  </svg>
);
export default SvgCloudMinus;
