import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 17V8m6 5V4m6 16v-9M5 11h2v3H5zm6-4h2v3h-2zm6 7h2v3h-2z"
    />
  </svg>
);
export default SvgChart04;
