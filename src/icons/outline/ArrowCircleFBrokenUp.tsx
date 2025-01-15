import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenUp = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m12 8.272 4.269 4.269m-4.27-4.27-4.269 4.27M12 8.27v13.48m-6-1.5a9.99 9.99 0 0 1-4-8.001c0-5.523 4.477-10 10-10s10 4.477 10 10a9.99 9.99 0 0 1-4 8"
    />
  </svg>
);
export default SvgArrowCircleFBrokenUp;
