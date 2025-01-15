import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBluetoothOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.23 17.55 11 22V12l-5 4m5-10V2l7 5-3 2.143M1.75 2l20 20"
    />
  </svg>
);
export default SvgBluetoothOff;
