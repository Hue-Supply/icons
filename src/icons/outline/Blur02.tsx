import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlur02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.444 3.446 14.19 4.7m6.265 3.757L19.203 9.71m-.254-4.757-.373.373m-6.888 1.879-1.253 1.252m6.26 3.758-1.252 1.252M11.061 2.82 9.81 4.073M16.07 7.83l-1.253 1.253m6.265 3.757-1.253 1.252m-11.9-3.13-1.252 1.252m6.262 3.757-1.252 1.253M7.305 6.578 6.053 7.83m6.26 3.758L11.06 12.84m6.263 3.758L16.07 17.85M4.172 14.719 2.92 15.97m6.262 3.758L7.93 20.98M3.545 10.335l-1.252 1.253m6.264 3.757-1.252 1.253m6.262 3.757-1.252 1.252M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgBlur02;
