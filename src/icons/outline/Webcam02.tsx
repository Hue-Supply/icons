import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWebcam02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.75 7.5h.007M12 18v3m0 0h4m-4 0H8m.5-4h7a6.5 6.5 0 1 0 0-13h-7a6.5 6.5 0 0 0 0 13m6.5-6.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgWebcam02;
