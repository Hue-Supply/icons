import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowOutlineUp = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.1 20.944h1.8a1.5 1.5 0 0 0 1.5-1.5v-9.5h1.807c1.36 0 2.018-1.664 1.026-2.594l-4.207-3.944a1.5 1.5 0 0 0-2.052 0L6.767 7.35c-.992.93-.334 2.594 1.026 2.594H9.6v9.5a1.5 1.5 0 0 0 1.5 1.5"
    />
  </svg>
);
export default SvgArrowOutlineUp;
