import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFacebook02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.846 9.778v4.444h3.272V22h4.364v-7.778h3.273l1.09-4.444h-4.363V7.556c0-.295.115-.578.32-.786a1.08 1.08 0 0 1 .771-.326h3.273V2h-3.273a5.4 5.4 0 0 0-3.857 1.627 5.6 5.6 0 0 0-1.598 3.929v2.222z"
    />
  </svg>
);
export default SvgFacebook02;
