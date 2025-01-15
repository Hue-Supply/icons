import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEraser1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m4.313 19.707-1.147 1.127m1.147-1.128c.234.229.556.367.91.358l1.06-.026a2.37 2.37 0 0 0 1.615-.694l8.89-8.889M4.312 19.706a1.25 1.25 0 0 1-.377-.928l.027-1.06a2.37 2.37 0 0 1 .693-1.616l8.889-8.889m-1.877-1.877 1.877 1.877m5.118 5.118-1.876-1.876m-3.242-3.242 3.31-3.31a2.293 2.293 0 1 1 3.243 3.242l-3.31 3.31m-3.243-3.242 3.242 3.242"
    />
  </svg>
);
export default SvgEraser1;
