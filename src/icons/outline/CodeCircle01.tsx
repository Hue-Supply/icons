import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodeCircle01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.808 9.242-2.27 2.27a.69.69 0 0 0 0 .976l2.27 2.27m4.384-5.516 2.27 2.27a.69.69 0 0 1 0 .976l-2.27 2.27M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
);
export default SvgCodeCircle01;
