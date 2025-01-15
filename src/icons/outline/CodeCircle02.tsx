import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodeCircle02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.01 9.242-2.27 2.27a.69.69 0 0 0 0 .976l2.27 2.27m7.876-5.516 2.27 2.27a.69.69 0 0 1 0 .976l-2.27 2.27M12.874 7.5l-1.824 9.018M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
);
export default SvgCodeCircle02;
