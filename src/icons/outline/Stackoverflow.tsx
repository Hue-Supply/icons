import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStackoverflow = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 16.775c0 .31 0 .464.011.595a3 3 0 0 0 2.728 2.727c.13.011.285.011.594.011h13.334c.31 0 .464 0 .595-.011a3 3 0 0 0 2.727-2.728c.011-.13.011-.285.011-.594m-15.943-.45h11.908m-12.02-4.132 11.851 1.092M6.221 7.837l11.578 2.634M7.678 3.892l11.154 3.945"
    />
  </svg>
);
export default SvgStackoverflow;
