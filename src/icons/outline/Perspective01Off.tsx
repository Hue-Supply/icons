import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerspective01Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.68 3.052 8.389 1.554c1.396.259 2.095.388 2.618.746a3 3 0 0 1 1.051 1.263c.256.58.256 1.29.256 2.71v5.35M3.412 4.1c-.406.699-.406 1.69-.406 3.671v8.458c0 1.981 0 2.972.406 3.67a3 3 0 0 0 1.585 1.32c.761.271 1.735.09 3.683-.27l8.389-1.555c.685-.127 1.202-.223 1.613-.33M1.75 2l20 20"
    />
  </svg>
);
export default SvgPerspective01Off;
