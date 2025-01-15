import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m15.979 12-4.27 4.269m4.27-4.27-4.27-4.268M15.98 12H2.5M4 6a9.99 9.99 0 0 1 8-4c5.524 0 10 4.477 10 10s-4.476 10-10 10a9.99 9.99 0 0 1-8-4"
    />
  </svg>
);
export default SvgArrowCircleFBrokenRight;
