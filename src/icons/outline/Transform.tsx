import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTransform = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 7c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C3 5.696 3 5.464 3 5s0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C4.304 3 4.536 3 5 3s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C7 4.304 7 4.536 7 5M5 7c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C7 5.696 7 5.464 7 5M5 7v10M7 5h10m2 2c-.465 0-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C17 5.696 17 5.464 17 5m2 2c.465 0 .698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C21 5.696 21 5.464 21 5s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C19.697 3 19.464 3 19 3s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C17 4.304 17 4.536 17 5m2 2v10m-2 2c0 .465 0 .698.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C21 19.697 21 19.464 21 19s0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06C19.697 17 19.464 17 19 17m-2 2c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06C18.303 17 18.536 17 19 17m-2 2H7m0 0c0 .465 0 .698-.051.888a1.5 1.5 0 0 1-1.06 1.06C5.696 21 5.464 21 5 21s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C3 19.697 3 19.464 3 19s0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06C4.304 17 4.536 17 5 17m2 2c0-.465 0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06C5.696 17 5.464 17 5 17"
    />
  </svg>
);
export default SvgTransform;
