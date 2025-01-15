import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometer01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 17.473h.016m4.484.027a4.5 4.5 0 1 1-6.898-3.808V4.398a2.398 2.398 0 0 1 4.796 0v9.294A4.5 4.5 0 0 1 16.5 17.5m-3.718-.027a.782.782 0 1 1-1.563 0 .782.782 0 0 1 1.563 0"
    />
  </svg>
);
export default SvgThermometer01;
