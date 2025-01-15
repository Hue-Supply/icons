import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.5 15A6.5 6.5 0 1 0 9 8.5m-7 7a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0"
    />
  </svg>
);
export default SvgCoins011;
