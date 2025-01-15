import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDotpoints = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 7h11M8 12h11M8 17h11M5 7l.009.005M5 12l.009.005M5 17l.009.005"
    />
  </svg>
);
export default SvgDotpoints;
