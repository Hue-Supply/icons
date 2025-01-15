import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPenTool03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.465 18-2.313-2.312c-.44-.44-.66-.66-.773-.92a1.5 1.5 0 0 1-.12-.733c.026-.283.165-.561.443-1.118l4.151-8.301c.691-1.382 1.037-2.073 1.504-2.295A1.5 1.5 0 0 1 12 2.177M8.465 18h7.132m-7.132 0v4h7.132v-4m0 0 2.25-2.312c.44-.44.66-.66.774-.92a1.5 1.5 0 0 0 .119-.733c-.025-.283-.164-.561-.443-1.118l-4.15-8.301c-.691-1.382-1.037-2.073-1.504-2.295A1.5 1.5 0 0 0 12 2.177m0 0v7.935m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </svg>
);
export default SvgPenTool03;
