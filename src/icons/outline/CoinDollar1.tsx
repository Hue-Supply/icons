import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinDollar1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.182 7.226h5.25a2.387 2.387 0 0 1 0 4.774m0 0H9.615m3.819 0a2.387 2.387 0 0 1 0 4.774H8.182m.955-10.502v11.456m4.084-.954v.954m0-11.456v.954M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgCoinDollar1;
