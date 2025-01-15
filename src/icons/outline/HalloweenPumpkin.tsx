import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenPumpkin = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.5 5.5A1.5 1.5 0 0 0 15 4H9a1.5 1.5 0 0 0-1.5 1.5m9 0A1.5 1.5 0 0 0 18 7a3 3 0 0 1 3 3v6.5c0 .464 0 .697-.02.892a4 4 0 0 1-3.588 3.589c-.195.019-.428.019-.892.019h-9c-.464 0-.697 0-.892-.02a4 4 0 0 1-3.589-3.588C3 17.197 3 16.964 3 16.5V10a3 3 0 0 1 3-3 1.5 1.5 0 0 0 1.5-1.5m9 0V9m-9-3.5V9M12 3V2m4.5 17.137V20.5m-9-1.363V20.5m.25-7.93 1-1 1.5 1.5m6-.5-1-1-1.5 1.5M15 16.31l-1.5 1-1.5-1-1.5 1-1.5-1"
    />
  </svg>
);
export default SvgHalloweenPumpkin;
