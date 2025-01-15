import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashDry011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={3}
    />
  </svg>
);
export default SvgWashDry011;
