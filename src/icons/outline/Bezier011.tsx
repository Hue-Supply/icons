import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBezier011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 19c0 .465 0 .698-.051.888a1.5 1.5 0 0 1-1.06 1.06C5.696 21 5.464 21 5 21s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C3 19.697 3 19.464 3 19s0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06C4.304 17 4.536 17 5 17m2 2c0-.465 0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06C5.696 17 5.464 17 5 17m2 2h10M5 17l5.5-10 .139-.272M17 19c0 .465 0 .698.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C21 19.697 21 19.464 21 19s0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06C19.697 17 19.464 17 19 17m-2 2c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06C18.303 17 18.536 17 19 17m0 0L13.5 7l-.139-.272m0 0a1.5 1.5 0 0 0 .588-.84C14 5.698 14 5.465 14 5s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C12.697 3 12.464 3 12 3s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C10 4.304 10 4.536 10 5s0 .697.051.888a1.5 1.5 0 0 0 .588.84m2.722 0q-.213.151-.473.22C12.698 7 12.465 7 12 7s-.697 0-.888-.051a1.5 1.5 0 0 1-.473-.22"
    />
  </svg>
);
export default SvgBezier011;
