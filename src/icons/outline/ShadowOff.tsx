import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShadowOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.728 17A8.256 8.256 0 0 1 5.233 5.5M19.346 14A8.256 8.256 0 0 0 8.5 2.751m10.577 16.915A11.74 11.74 0 0 1 12 22.025c-2.655 0-5.106-.878-7.077-2.359M1.75 2l20 20"
    />
  </svg>
);
export default SvgShadowOff;
