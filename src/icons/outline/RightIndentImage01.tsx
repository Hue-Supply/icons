import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRightIndentImage01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.994 5.25h6.001M4 9.75h6m-6.006 4.5h16.012m-16.012 4.5h16.012m-4.08-8.255h2.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.13-.257.13-.593.13-1.265v-2.16c0-.672 0-1.008-.13-1.265a1.2 1.2 0 0 0-.524-.524c-.257-.13-.593-.13-1.265-.13h-2.16c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.524c-.131.257-.131.593-.131 1.265v2.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524c.257.131.593.131 1.265.131"
    />
  </svg>
);
export default SvgRightIndentImage01;
