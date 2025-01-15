import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTerminal = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="m4 6 4.512 4.512a1.37 1.37 0 0 1 0 1.938L4 16.962M10 18h10"
    />
  </svg>
);
export default SvgTerminal;
