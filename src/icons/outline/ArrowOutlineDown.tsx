import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowOutlineDown = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.9 3h-1.8a1.5 1.5 0 0 0-1.5 1.5V14H7.793c-1.36 0-2.018 1.664-1.026 2.594l4.207 3.944a1.5 1.5 0 0 0 2.052 0l4.207-3.944c.992-.93.334-2.594-1.026-2.594H14.4V4.5A1.5 1.5 0 0 0 12.9 3"
    />
  </svg>
);
export default SvgArrowOutlineDown;
