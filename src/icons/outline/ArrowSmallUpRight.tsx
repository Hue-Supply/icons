import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowSmallUpRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.343 17.657 16.949 7.05m.707 6.364v-7.07h-7.07"
    />
  </svg>
);
export default SvgArrowSmallUpRight;
