import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSkipForward = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 4.48v15.04M9.437 17.46l3.136-2.156c1.614-1.109 2.42-1.663 2.703-2.357a2.5 2.5 0 0 0 0-1.894c-.283-.694-1.09-1.248-2.703-2.357L9.437 6.539C7.4 5.14 6.383 4.44 5.537 4.482a2.5 2.5 0 0 0-1.868.983c-.514.673-.514 1.908-.514 4.378v4.314c0 2.47 0 3.705.514 4.378.448.587 1.131.946 1.868.983.846.042 1.864-.658 3.9-2.057"
    />
  </svg>
);
export default SvgSkipForward;
