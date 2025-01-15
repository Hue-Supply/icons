import * as React from 'react';
import type { SVGProps } from 'react';
const SvgToggleLeft1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.896 8.49h8.594a3.51 3.51 0 0 1 0 7.02H9.896M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
    />
  </svg>
);
export default SvgToggleLeft1;
