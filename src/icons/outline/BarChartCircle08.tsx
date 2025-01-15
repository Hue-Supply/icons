import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarChartCircle08 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.95 11q.05.493.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2q1.03.002 2 .2m-6 9.3v5m4-9v9m4-3v3m0-10.89 1.646 1.736a.48.48 0 0 0 .708 0L22 3.5"
    />
  </svg>
);
export default SvgBarChartCircle08;
