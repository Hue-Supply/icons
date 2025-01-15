import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasFirework = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6.06 14.324h8.486m-6.01-3.182h9.192m-6.02-3.172h7.07M2 21.071l1.414-.354a2.43 2.43 0 0 0 1.768-1.767 2.43 2.43 0 0 1 1.768-1.768l.839-.21m-1.092-1.304 1.556 1.555c.594.594.89.891 1.233 1.003.301.098.626.098.927 0 .343-.112.64-.409 1.234-1.003l6.505-6.505c.594-.594.891-.891 1.002-1.234a1.5 1.5 0 0 0 0-.927c-.11-.342-.408-.64-1.002-1.233l-1.555-1.556c-.594-.594-.892-.89-1.234-1.002a1.5 1.5 0 0 0-.927 0c-.342.111-.64.408-1.234 1.002l-6.505 6.506c-.594.594-.891.89-1.002 1.233a1.5 1.5 0 0 0 0 .927c.111.343.408.64 1.002 1.234ZM16.67 5.84l1.409 1.41c1.23 1.229 1.844 1.843 2.386 1.892a1.5 1.5 0 0 0 1.249-.49c.364-.405.396-1.273.46-3.01l.054-1.464c.034-.897.05-1.346-.116-1.685a1.5 1.5 0 0 0-.686-.686c-.339-.166-.787-.15-1.685-.116l-1.463.054c-1.737.064-2.606.097-3.01.46a1.5 1.5 0 0 0-.49 1.25c.048.541.662 1.156 1.892 2.385Z"
    />
  </svg>
);
export default SvgChristmasFirework;
