import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEaseInControl = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 20c4.889 0 11.378-6.756 16-16m-5 16 .009.005M12 20l.009.005M18 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
);
export default SvgEaseInControl;
