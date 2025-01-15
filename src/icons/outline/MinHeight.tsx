import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinHeight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 12H3m6.389-5.533L12 9m0 0 2.612-2.533M12 9 12 2M9.389 17.533 12 15m0 0 2.612 2.533M12 15 12 22"
    />
  </svg>
);
export default SvgMinHeight;
