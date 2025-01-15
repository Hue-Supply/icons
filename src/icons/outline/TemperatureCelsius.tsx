import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTemperatureCelsius = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 16a3 3 0 0 1-3 3h-1.25a4.25 4.25 0 0 1-4.25-4.25v-5.5A4.25 4.25 0 0 1 15.75 5H17a3 3 0 0 1 3 3M7.5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgTemperatureCelsius;
