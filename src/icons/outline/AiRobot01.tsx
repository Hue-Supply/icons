import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiRobot01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 12h2M12 4v2m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2 12h2m3 6h10v4H7zm2.5 0h5a5.5 5.5 0 1 0 0-11h-5a5.5 5.5 0 1 0 0 11m.5-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgAiRobot01;
