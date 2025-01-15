import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicrophoneFf = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13.5 13.599A3 3 0 0 0 15 11V5a3 3 0 1 0-6 0v4m-4 2a7 7 0 0 0 3.214 5.889C10.07 18.085 12 19.79 12 22v0m7-11a6.99 6.99 0 0 1-2.5 5.362M12 22h4m-4 0H8M1.75 2l20 20"
    />
  </svg>
);
export default SvgMicrophoneFf;
