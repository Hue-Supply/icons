import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsers02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 15.652a2.65 2.65 0 0 0-2.005-2.568 13.2 13.2 0 0 0-2.416-.372m1.614-4.197a2.93 2.93 0 0 0-.658-4.031M20 19.67a4.06 4.06 0 0 0-3.076-3.939 20.3 20.3 0 0 0-9.848 0A4.06 4.06 0 0 0 4 19.671V21h16zM16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUsers02;
