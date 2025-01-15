import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin081 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.93 12 4.27 3.867M8.93 12l4.27-3.867M8.93 12H21m-1.515-5a9 9 0 1 0 0 10"
    />
  </svg>
);
export default SvgLogin081;
