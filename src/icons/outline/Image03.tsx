import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImage03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 21 6.291-8.512c.762-1.03 1.142-1.545 1.624-1.76a2 2 0 0 1 1.346-.1c.508.141.96.594 1.867 1.5L21 14m-9.82-4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgImage03;
