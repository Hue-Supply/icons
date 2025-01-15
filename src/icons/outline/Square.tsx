import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquare = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={2}
    />
  </svg>
);
export default SvgSquare;
