import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleDownRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.813 14.813H8.776m6.037 0V8.776m0 6.037L9.525 9.524M4.929 4.93c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142-10.237 3.905-14.142 0-3.905-10.237 0-14.142"
    />
  </svg>
);
export default SvgArrowCircleDownRight;
