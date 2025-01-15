import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserVoice = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 21s.889-5.815 8-5.815S18 21 18 21m0-17.652a3.51 3.51 0 0 1 1.37 2.786A3.51 3.51 0 0 1 18 8.92M20.643 2a5.74 5.74 0 0 1 1.749 4.134c0 1.622-.67 3.087-1.75 4.134M14.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUserVoice;
