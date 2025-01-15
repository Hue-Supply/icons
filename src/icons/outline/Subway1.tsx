import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSubway1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.5 15.358h.01m6.99 0h.01M5 11.858h14M8 19.402 6 22m10-2.598L18 22m-7 0h2M12 5V3M8 2h8M8.8 19h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 16.72 20 15.88 20 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 5 16.88 5 15.2 5H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 7.28 4 8.12 4 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 19 7.12 19 8.8 19m.2-3.642a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgSubway1;
