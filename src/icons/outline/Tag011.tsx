import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTag011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.017 2.037h.774a3 3 0 0 1 2.123.879l10.242 10.242a3 3 0 0 1 .815 2.737M3.14 2.726A3 3 0 0 0 2.05 5.037L2.05 8.78a3 3 0 0 0 .879 2.123L13.17 21.144a3 3 0 0 0 4.242 0l1.872-1.871M7.134 7.113h.01M2.75 2l20 20M7.635 7.113a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgTag011;
