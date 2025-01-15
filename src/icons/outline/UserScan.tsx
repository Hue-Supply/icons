import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserScan = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18 19v-.333c0-2.394-1.87-4.334-4.179-4.334H10.18C7.87 14.333 6 16.273 6 18.667V19M18 2h1a3 3 0 0 1 3 3v1M6 2H5a3 3 0 0 0-3 3v1m4 16H5a3 3 0 0 1-3-3v-1m16 4h1a3 3 0 0 0 3-3v-1m-6.625-9.5c0 1.933-1.511 3.5-3.375 3.5s-3.375-1.567-3.375-3.5S10.136 5 12 5s3.375 1.567 3.375 3.5"
    />
  </svg>
);
export default SvgUserScan;
