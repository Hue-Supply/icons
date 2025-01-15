import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClock03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 9.8A10.01 10.01 0 0 1 9.8 2m4.4 20a10.01 10.01 0 0 0 7.8-7.8M12 8.15V12l2.1 2.1M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
    />
  </svg>
);
export default SvgClock03;
