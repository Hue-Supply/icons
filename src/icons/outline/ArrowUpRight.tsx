import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7 17.071 9.9-9.9m.1 9.9v-10H7"
    />
  </svg>
);
export default SvgArrowUpRight;
