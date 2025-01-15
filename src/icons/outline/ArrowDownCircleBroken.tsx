import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDownCircleBroken = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.6 5.5A9.96 9.96 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2v11.25m-4.243-3.17L12 14.322l4.243-4.242"
    />
  </svg>
);
export default SvgArrowDownCircleBroken;
