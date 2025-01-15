import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpotify = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.872 12.512c2.58-1.52 5.678-1.004 7.742.544m-6.71 2.581c1.549-1.032 4.13-1.032 5.162.516M6.84 9.443c2.064-1.032 6.194-2.064 10.323.516M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </svg>
);
export default SvgSpotify;
