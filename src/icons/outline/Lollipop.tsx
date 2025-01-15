import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLollipop = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.281 12.176c1.69 1.296 4.454 2.274 7.22-1.676m0 0c2.694-3.85 5.389-3.018 7.088-1.775M13.5 10.5c-3.812-2.668-3.035-5.337-1.812-7.038m1.812 7.038c3.824 2.677 3.028 5.355 1.798 7.055M3 21s2.295-2.252 4.922-4.92M21 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
    />
  </svg>
);
export default SvgLollipop;
