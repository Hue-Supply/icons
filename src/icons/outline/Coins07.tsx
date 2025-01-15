import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins07 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13 9.743c0 1.104-2.462 2-5.5 2s-5.5-.896-5.5-2m0 5.128c0 1.105 2.462 2 5.5 2 1.911 0 3.595-.354 4.58-.892M13 20c0 1.105-2.462 2-5.5 2S2 21.105 2 20M2 4.376V20.13M13 4.376v9.283M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0M13 4.43c0 1.342-2.462 2.43-5.5 2.43S2 5.772 2 4.43 4.464 2 7.5 2 13 3.088 13 4.43"
    />
  </svg>
);
export default SvgCoins07;
