import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerspective03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 8a2 2 0 1 0-2-2m2 2a2 2 0 0 1-2-2m2 2v8M18 6 6 4m0 0a2 2 0 0 1-2 2m2-2a2 2 0 1 0-2 2m0 0v12m2 2a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2 12-2m0 0a2 2 0 1 0 2-2m-2 2a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgPerspective03;
