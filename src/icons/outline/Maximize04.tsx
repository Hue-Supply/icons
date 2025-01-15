import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaximize04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.532 3.5 3.565 20.467m17.42-12.15V3h-5.317M3.033 15.682V21H8.35"
    />
  </svg>
);
export default SvgMaximize04;
