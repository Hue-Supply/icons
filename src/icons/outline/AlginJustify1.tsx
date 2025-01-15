import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlginJustify1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 7h16M4 12h13.5a2.5 2.5 0 0 1 0 5h-3.214M4 17h4m5.948-2L12 17.102l2 2.048"
    />
  </svg>
);
export default SvgAlginJustify1;
