import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRadar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 8.5 13 12m4.26-2.538A5 5 0 1 0 13 17.023m8.192-8.653a9 9 0 0 0-.694-1.274A9 9 0 1 0 13 21.025m.225-9.968a1 1 0 1 1-.518 1.931 1 1 0 0 1 .518-1.931"
    />
  </svg>
);
export default SvgRadar;
