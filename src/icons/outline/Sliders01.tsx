import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSliders01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 12V3m7 18v-6m7-1V3M5 21v-5m0 0H3m2 0h2m5-5V3m0 8h-2m2 0h2m5 10v-3m0 0h-2m2 0h2"
    />
  </svg>
);
export default SvgSliders01;
