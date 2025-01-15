import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStop = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 4 7.12 4 8.8 4h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 6.28 20 7.12 20 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 20 16.88 20 15.2 20H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 17.72 4 16.88 4 15.2z"
    />
  </svg>
);
export default SvgStop;
