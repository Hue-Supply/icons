import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSend0303 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <g clipPath="url(#send-03-03_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.987 14.051 21.58 2.457M2.817 8.737 19.98 2.118c1.214-.468 2.407.726 1.94 1.94L15.3 21.22c-.508 1.317-2.387 1.268-2.825-.074l-2.124-6.5a1.5 1.5 0 0 0-.96-.96l-6.5-2.124c-1.342-.438-1.39-2.318-.074-2.825"
      />
    </g>
    <defs>
      <clipPath id="send-03-03_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSend0303;
