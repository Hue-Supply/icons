import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 18a9.99 9.99 0 0 1-8 4C6.477 22 2 17.523 2 12S6.477 2 12 2a9.99 9.99 0 0 1 8 4M8.023 12l4.269-4.269m-4.27 4.27 4.27 4.268M8.02 12H21.5"
    />
  </svg>
);
export default SvgArrowCircleFBrokenLeft;
