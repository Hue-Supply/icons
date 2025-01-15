import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarmClockPlus02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="m17 19.5 2.5 2.5M6.998 19.5l-2.5 2.5M3.696 8.5a3.5 3.5 0 1 1 4.676-5m11.932 5a3.5 3.5 0 1 0-4.676-5M11.923 9v2.924m0 0v2.925m0-2.925h2.925m-2.925 0H9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgAlarmClockPlus02;
