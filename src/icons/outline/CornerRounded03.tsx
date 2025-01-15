import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCornerRounded03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 4h-1.6c-5.04 0-7.56 0-9.486.98a9 9 0 0 0-3.933 3.934C4 10.84 4 13.36 4 18.4V20"
    />
  </svg>
);
export default SvgCornerRounded03;
