import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExam011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.83 8.107 6 3m8.273 4.97L18 3m-.9 6.77 2.281-2.965A2.985 2.985 0 0 0 17.015 2H6.985a2.985 2.985 0 0 0-2.366 4.805l2.28 2.964M10.468 12h1.932v6m0 0h1.134M12.4 18h-1.366M19 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
    />
  </svg>
);
export default SvgExam011;
