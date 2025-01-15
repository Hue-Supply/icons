import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinPound = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.28 16.425H8.766c-.278 0-.418 0-.48-.03a.3.3 0 0 1-.13-.417c.035-.061.15-.14.38-.297l.446-.307c.108-.074.162-.11.212-.147a4 4 0 0 0 1.631-2.992l.368-3.976a2.047 2.047 0 0 1 2.038-1.86h.172c1.036 0 1.875.84 1.875 1.876m-7.447 4.47h4.624M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgCoinPound;
