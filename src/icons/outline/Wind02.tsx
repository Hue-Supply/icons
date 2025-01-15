import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWind02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 12h17a3 3 0 1 0-.001-6c-1.11 0-2.08.603-2.599 1.5M2 8.04h9.046m0 0h.122m-.122 0a2.04 2.04 0 1 0-1.782-3.06m1.782 3.06h-.015M2 15.96h14.186m.077 0a2.04 2.04 0 1 1-1.767 3.06"
    />
  </svg>
);
export default SvgWind02;
