import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUser02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 19.67a4.06 4.06 0 0 0-3.076-3.939 20.3 20.3 0 0 0-9.848 0A4.06 4.06 0 0 0 4 19.671V21h16zM16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUser02;
