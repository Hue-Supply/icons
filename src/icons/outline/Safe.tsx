import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSafe = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.51 7.456v6.088M7.8 18h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 18 6.12 18 7.8 18m4.2-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M5 18h14v1.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C18.24 21 17.96 21 17.4 21H6.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C5 20.24 5 19.96 5 19.4z"
    />
  </svg>
);
export default SvgSafe;
