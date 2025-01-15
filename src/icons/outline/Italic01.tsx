import * as React from 'react';
import type { SVGProps } from 'react';
const SvgItalic01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15 4 9 20m6-16h4m-4 0h-5M9 20h5m-5 0H5"
    />
  </svg>
);
export default SvgItalic01;
