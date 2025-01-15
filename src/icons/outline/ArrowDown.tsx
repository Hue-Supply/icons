import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDown = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 5v14m-7.071-6.929 7.07 7.071 7.072-7.07"
    />
  </svg>
);
export default SvgArrowDown;
