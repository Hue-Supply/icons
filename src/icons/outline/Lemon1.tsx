import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLemon1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <g clipPath="url(#lemon-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17.283 3.697-.22.22c-3.32-1.793-7.859-1.025-11.016 2.131-3.156 3.157-3.924 7.697-2.13 11.016l-.221.22a2.135 2.135 0 1 0 3.02 3.02l.22-.221c3.319 1.793 7.858 1.025 11.015-2.131 3.157-3.157 3.924-7.697 2.131-11.015l.22-.22a2.135 2.135 0 1 0-3.019-3.02"
      />
    </g>
    <defs>
      <clipPath id="lemon-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLemon1;
