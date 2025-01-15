import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserArrowLeft03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M4 21s.889-5.815 8-5.815q.932.002 1.727.126m7.305 3.312H15.36m0 0h-.032m.032 0q0 .028.022.048L17.99 21m-2.63-2.377q0-.026.022-.048l2.608-2.328M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
);
export default SvgUserArrowLeft03;
