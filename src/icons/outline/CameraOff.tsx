import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameraOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 6h.354a3 3 0 0 0 2-.764l.542-.484a3 3 0 0 1 2-.764h2.208a3 3 0 0 1 2 .764l.542.484a3 3 0 0 0 2 .764H18a3 3 0 0 1 3 3v7.5a3 3 0 0 1-1.834 2.765M14.5 19.5H6a3 3 0 0 1-3-3V9q0-.233.034-.455m11.713 6.125a3.5 3.5 0 0 0-5.005-4.844m1.338 6.052a3.5 3.5 0 0 1-2.492-2.597M1.75 2l20 20"
    />
  </svg>
);
export default SvgCameraOff;
