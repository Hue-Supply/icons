import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTemperatureFahrenheit = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.5 5h-6.6c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656c-.164.32-.164.74-.164 1.581V12m0 0v7m0-7h7.364M7.5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgTemperatureFahrenheit;
