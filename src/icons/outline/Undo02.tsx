import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUndo02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.243 1.757 5 6l4.243 4.243M6.552 6H14a6 6 0 0 1 0 12h-.5"
    />
  </svg>
);
export default SvgUndo02;
