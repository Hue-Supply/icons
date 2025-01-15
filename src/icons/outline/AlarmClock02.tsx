import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarmClock02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 7.132v4.921l2.684 2.684M17 19.5l2.5 2.5M6.998 19.5l-2.5 2.5M3.696 8.5a3.5 3.5 0 1 1 4.676-5m11.932 5a3.5 3.5 0 1 0-4.676-5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </svg>
);
export default SvgAlarmClock02;
