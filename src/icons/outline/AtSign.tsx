import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAtSign = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 20.662A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1a3 3 0 0 1-6 0V7.763M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
    />
  </svg>
);
export default SvgAtSign;
