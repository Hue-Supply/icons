import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockRefresh03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.29 8.521a9 9 0 0 1-12.098 11.68M18.505 9.518l1.006-2.603 2.576 1.076M3.969 15.48a9 9 0 0 1 12.098-11.68M5.755 14.482l-1.007 2.603-2.576-1.076M12 7v5.177L15 15"
    />
  </svg>
);
export default SvgClockRefresh03;
