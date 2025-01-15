import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDownload02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3m-8.99-1.757 4.968-4.52m-4.969 4.52-4.968-4.52m4.968 4.52V4"
    />
  </svg>
);
export default SvgDownload02;
