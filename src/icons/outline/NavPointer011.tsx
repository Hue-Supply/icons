import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointer011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 6a3 3 0 0 0-3-3m3 3a3 3 0 0 1 3-3m-3 3v12m0 0a3 3 0 0 1-3 3m3-3a3 3 0 0 0 3 3m-5-9h4"
    />
  </svg>
);
export default SvgNavPointer011;
