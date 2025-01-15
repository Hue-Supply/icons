import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStorm = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.683 7.585C23.246 13.556 21.678 20.5 21.242 22M5.316 16.415C.753 10.444 2.321 3.5 2.757 2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m4 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    />
  </svg>
);
export default SvgStorm;
