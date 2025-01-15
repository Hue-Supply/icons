import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarmClockSnooze = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.636 2c.852.567 1.628 1.24 2.309 2M5.309 2A12 12 0 0 0 3 4m14 15.5 2.5 2.5M6.998 19.5l-2.5 2.5M9 9h6l-6 6h6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </svg>
);
export default SvgAlarmClockSnooze;
