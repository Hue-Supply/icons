import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSettings02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.865 4.05H5.5a2.5 2.5 0 1 0 0 5h9.365m-5.618 5.988h9.298a2.5 2.5 0 0 1 0 5H9.247M21.045 6.529a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M3 17.517a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0"
    />
  </svg>
);
export default SvgSettings02;
