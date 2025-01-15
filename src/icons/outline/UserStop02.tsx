import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserStop02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 21H4v-1.33a4.06 4.06 0 0 1 3.076-3.939A20.3 20.3 0 0 1 11 15.15m4.77.018 4.667 4.666M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm5.104 10a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
  </svg>
);
export default SvgUserStop02;
