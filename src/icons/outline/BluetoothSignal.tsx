import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBluetoothSignal = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 12V2l7 5zm0 0v10l7-5zm0 0-5 4m5-4L2 8m15 0s1.5 1.5 1.5 4-1.5 4-1.5 4m3-11s2 2.625 2 7-2 7-2 7"
    />
  </svg>
);
export default SvgBluetoothSignal;
