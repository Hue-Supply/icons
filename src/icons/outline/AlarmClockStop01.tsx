import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarmClockStop01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.5 20.294A9 9 0 0 1 3.706 8.5M18.708 18A9 9 0 0 0 5.775 5.5M18.635 2c.853.567 1.63 1.24 2.31 2M5.309 2c-.66.44-1.275.942-1.835 1.5m3.524 16-2.5 2.5M2 2l20 20"
    />
  </svg>
);
export default SvgAlarmClockStop01;
