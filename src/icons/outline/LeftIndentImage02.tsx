import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeftIndentImage02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.012 14.25h-6m5.994-9H3.994m16.012 4.5h-6m6.006 9H4M8.08 15H5.92c-.672 0-1.008 0-1.265-.13a1.2 1.2 0 0 1-.524-.525C4 14.088 4 13.752 4 13.08v-2.16c0-.672 0-1.008.13-1.265a1.2 1.2 0 0 1 .525-.524C4.912 9 5.248 9 5.92 9h2.16c.672 0 1.008 0 1.265.13a1.2 1.2 0 0 1 .524.525c.131.257.131.593.131 1.265v2.16c0 .672 0 1.008-.13 1.265a1.2 1.2 0 0 1-.525.524C9.088 15 8.752 15 8.08 15"
    />
  </svg>
);
export default SvgLeftIndentImage02;
