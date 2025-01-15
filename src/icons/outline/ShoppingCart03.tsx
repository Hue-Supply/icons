import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingCart03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m5 6.142 13.503-.11c1.337-.011 2.005-.016 2.475.254a2 2 0 0 1 .887 1.063c.183.511.058 1.168-.192 2.48l-.678 3.569c-.176.926-.264 1.39-.503 1.736a2 2 0 0 1-.841.696c-.386.17-.857.17-1.8.17H6.5M5 6.142 6.5 16M5 6.142l-.5-3H2M6.5 16l.615 3.073c.137.686.206 1.03.385 1.287a1.5 1.5 0 0 0 .628.515c.287.126.637.126 1.337.127l9.023.01"
    />
  </svg>
);
export default SvgShoppingCart03;
