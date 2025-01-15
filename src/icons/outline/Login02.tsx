import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.02 3h-2.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3.02 5.28 3.02 6.12 3.02 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311C5.3 21 6.14 21 7.82 21h2.2m-.499-9 4.27 4.27M9.52 12l4.27-4.27M9.52 12H21"
    />
  </svg>
);
export default SvgLogin02;
