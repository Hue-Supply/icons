import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDrop041 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.648 10.44A5.51 5.51 0 0 1 21 15.5a5.5 5.5 0 0 1-8.941 4.29l-.054-.051m5.643-9.299a5.5 5.5 0 1 0-10.398-.294m10.398.294a5.51 5.51 0 0 1-3.904 3.419M7.25 10.146C4.822 10.716 3 12.897 3 15.5a5.5 5.5 0 0 0 9.005 4.239M7.25 10.146a5.5 5.5 0 0 0 6.494 3.713m0 0 .022.048c.152.504.234 1.039.234 1.593 0 1.706-.776 3.23-1.995 4.239"
    />
  </svg>
);
export default SvgDrop041;
