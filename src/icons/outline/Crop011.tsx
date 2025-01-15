import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrop011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9 19 3 3m0 0 3-3m-3 3V12m3-7-3-3m0 0L9 5m3-3v10m7 3 3-3m0 0-3-3m3 3H12M5 9l-3 3m0 0 3 3m-3-3h10"
    />
  </svg>
);
export default SvgCrop011;
