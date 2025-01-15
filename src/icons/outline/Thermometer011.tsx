import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometer011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22a4.5 4.5 0 0 0 2.398-8.308V4.398a2.398 2.398 0 1 0-4.796 0v9.294A4.5 4.5 0 0 0 12 22"
    />
  </svg>
);
export default SvgThermometer011;
