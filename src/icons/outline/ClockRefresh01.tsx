import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockRefresh01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.327 8.775a9 9 0 1 1-5.43-4.95m3.653 5.961.986-2.611L22.12 8.23M12 7v5.177L15 15"
    />
  </svg>
);
export default SvgClockRefresh01;
