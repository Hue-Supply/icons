import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlightStart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 22h20m-1.473-8.83L6.521 16.923A3 3 0 0 1 2.847 14.8l-1.096-4.09a1.266 1.266 0 0 1 2.121-1.218l2.321 2.341 4.304-1.153-2.638-6.798A1.58 1.58 0 0 1 10.623 2.4l4.897 6.935 3.713-.995a2.5 2.5 0 0 1 1.294 4.83"
    />
  </svg>
);
export default SvgFlightStart;
