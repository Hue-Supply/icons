import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenPoison = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m14.09 17.84-1.59-1.59m0 0-1.59-1.59m1.59 1.59-1.59 1.59m1.59-1.59 1.59-1.59M11 6h3a2 2 0 1 0 0-4h-3a2 2 0 1 0 0 4Zm8 9v1.5a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 6 16.5V15c0-1.371.69-2.581 1.741-3.302 1.192-.817 1.788-1.225 1.926-1.396.2-.247.18-.208.27-.512C10 9.58 10 9.253 10 8.6V6h5v2.6c0 .653 0 .98.063 1.19.09.304.07.265.27.512.138.17.734.58 1.926 1.396A4 4 0 0 1 19 15Z"
    />
  </svg>
);
export default SvgHalloweenPoison;
