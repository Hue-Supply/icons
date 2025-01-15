import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwapHorizontal03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.999 8.263h15.12m.92 7.496H4.919m12.587-9.752 2.532 2.256-2.532 2.256M6.532 13.503l-2.533 2.256 2.533 2.256"
    />
  </svg>
);
export default SvgSwapHorizontal03;
