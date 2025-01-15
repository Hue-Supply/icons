import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLaptop01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 17.333C2 16.597 2.597 16 3.333 16h17.334c.736 0 1.333.597 1.333 1.333A2.667 2.667 0 0 1 19.333 20H4.667A2.667 2.667 0 0 1 2 17.333M3 7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 5.52 21 6.08 21 7.2V16H3z"
    />
  </svg>
);
export default SvgLaptop01;
