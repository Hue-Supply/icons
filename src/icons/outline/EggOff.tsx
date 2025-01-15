import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEggOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 14c0-5.799-3.582-12-8-12-1.06 0-2.074.358-3 .981m10 15.747C17.635 21.512 15.012 23 12 23c-4.418 0-8-3.201-8-9 0-2.826.85-5.747 2.234-8M2.5 2l20 20"
    />
  </svg>
);
export default SvgEggOff;
