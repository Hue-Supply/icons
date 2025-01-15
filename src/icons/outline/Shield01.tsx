import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShield01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 7.906c0-1.268 0-1.901.214-2.438a3 3 0 0 1 .892-1.212c.448-.365 1.053-.554 2.262-.932l3.2-1c.532-.166.798-.25 1.07-.282a3 3 0 0 1 .725 0c.27.033.537.116 1.069.282l3.2 1c1.21.378 1.814.567 2.262.932a3 3 0 0 1 .892 1.212C20 6.005 20 6.638 20 7.906v.878c0 2.345 0 3.518-.254 4.623a10 10 0 0 1-1.332 3.165c-.612.954-1.45 1.774-3.128 3.414v0c-1.111 1.087-1.667 1.63-2.299 1.85a3 3 0 0 1-1.974 0c-.632-.22-1.188-.763-2.3-1.85v0c-1.676-1.64-2.515-2.46-3.127-3.414a10 10 0 0 1-1.332-3.165C4 12.302 4 11.129 4 8.784z"
    />
  </svg>
);
export default SvgShield01;
