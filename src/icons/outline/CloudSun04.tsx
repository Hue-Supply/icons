import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudSun04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.127 8a4.002 4.002 0 0 1 6.599-1.928M2 9h1.5M10 2.5V1M5.404 4.404l-1.06-1.06m11.312 0-1.06 1.06m-8.927 9.258h.794c.02 0 .037-.016.037-.037A4.625 4.625 0 0 1 11.124 9h1.752a4.625 4.625 0 0 1 4.624 4.625c0 .02.017.037.037.037h.794a3.669 3.669 0 1 1 0 7.338H5.67a3.669 3.669 0 0 1 0-7.338"
    />
  </svg>
);
export default SvgCloudSun04;
