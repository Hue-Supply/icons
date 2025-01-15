import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilm01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 2v10m0 0v10m0-10h10m0-10v10m0 0v10M3 7h3m12 0h3M3 17h3m12 0h3M3 12h3m12 0h3M5 22h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3"
    />
  </svg>
);
export default SvgFilm01;
