import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScissorsCut = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m18 12 .009.005M22 12l.009.005M3.63 8.845a2.5 2.5 0 1 0 1.738-4.69 2.5 2.5 0 0 0-1.738 4.69m0 0 6.336 3.157M22 18 9.967 12.002m-6.282 3.134a2.501 2.501 0 1 0 1.633 4.728 2.501 2.501 0 0 0-1.633-4.728m0 0 6.282-3.133M22 6 9.967 12.002"
    />
  </svg>
);
export default SvgScissorsCut;
