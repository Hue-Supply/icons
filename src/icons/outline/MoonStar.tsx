import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoonStar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.814 5.175h.012m-6.624 16.797c-5.537 0-10.026-4.488-10.026-10.026 0-5.13 3.853-9.36 8.824-9.954a10 10 0 0 0-.803 3.939c0 5.537 4.488 10.026 10.025 10.026q.61 0 1.202-.071a10.03 10.03 0 0 1-9.222 6.086M18.826 2l.857 2.318 2.318.857-2.318.858-.857 2.318-.858-2.318-2.318-.858 2.318-.857zm.602 3.175a.615.615 0 1 1-1.23 0 .615.615 0 0 1 1.23 0"
    />
  </svg>
);
export default SvgMoonStar;
