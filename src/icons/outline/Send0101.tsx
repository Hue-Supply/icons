import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSend0101 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <g clipPath="url(#send-01-01_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.963 2.156 2.801 8.774c-1.317.508-1.268 2.387.073 2.826l6.5 2.124a1.5 1.5 0 0 1 .96.96l2.125 6.5c.438 1.341 2.317 1.39 2.825.074l6.618-17.163c.468-1.214-.725-2.407-1.939-1.939"
      />
    </g>
    <defs>
      <clipPath id="send-01-01_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSend0101;
