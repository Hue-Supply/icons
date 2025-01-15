import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBrush02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.248 12.653a7 7 0 0 1 .632-1.25l.979-1.535a15 15 0 0 1 2.853-3.298l.086-.075a14.64 14.64 0 0 1 7.83-3.45.296.296 0 0 1 .33.328 14.64 14.64 0 0 1-3.451 7.83l-.075.087a15 15 0 0 1-3.298 2.854l-1.536.979c-.238.151-.74.423-1.253.612m-3.097-3.082a3.98 3.98 0 0 0-3.421 1.135c-1.538 1.539-2.383 5.974-1.485 6.871s5.333.054 6.871-1.485a3.98 3.98 0 0 0 1.132-3.44m-3.097-3.08a3.71 3.71 0 0 1 3.097 3.08"
    />
  </svg>
);
export default SvgBrush02;
