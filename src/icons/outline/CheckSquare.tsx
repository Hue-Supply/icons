import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckSquare = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#check-square_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v5m0 3h.01m2.63 4.36 5.72-5.72c.924-.924 1.386-1.386 1.56-1.919a2.33 2.33 0 0 0 0-1.442c-.174-.533-.636-.995-1.56-1.919l-5.72-5.72c-.924-.924-1.386-1.386-1.919-1.56a2.33 2.33 0 0 0-1.442 0c-.533.174-.995.636-1.919 1.56L3.64 9.36c-.924.924-1.386 1.386-1.56 1.919a2.33 2.33 0 0 0 0 1.442c.174.533.636.995 1.56 1.919l5.72 5.72c.924.924 1.386 1.386 1.919 1.56.469.152.973.152 1.442 0 .533-.174.995-.636 1.919-1.56"
      />
    </g>
    <defs>
      <clipPath id="check-square_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckSquare;
