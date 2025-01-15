import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAirpods = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m10.085 10.022-.5-.866m5.039-2.332-1.784 1.03M18 9.802v10a2 2 0 0 1-4 0v-5.5m-.116-.7 1.732-1a5.5 5.5 0 1 0-5.5-9.526l-1.732 1a5.5 5.5 0 1 0 5.5 9.526"
    />
  </svg>
);
export default SvgAirpods;
