import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCornerRounded02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 4h-8c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73C4 7.8 4 9.2 4 12v8"
    />
  </svg>
);
export default SvgCornerRounded02;
