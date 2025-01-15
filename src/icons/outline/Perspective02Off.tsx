import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerspective02Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.8 19.05c-.42.113-1.015.211-1.731.344l-.721.134m2.452-.478-2.452-2.452M18.8 19.05 21.75 22m-.761-6.31c.005-.294.005-.628.005-1.016V9.326c0-1.42 0-2.131-.256-2.71a3 3 0 0 0-1.051-1.264c-.523-.358-1.222-.487-2.618-.746l-.721-.134M7.62 2.858q.477.084 1.06.194l1.668.309m6 16.167v-2.93m0 2.93-6 1.112m6-4.042L11.75 12m-1.402-5.621V3.36m0 0 6 1.111m-6 7.528h1.402m-1.402 0v8.64m0-8.64v-1.402m0 1.402H3.006m8.744 0-1.402-1.402m6-6.126V12h4.641m-10.641 8.64-1.668.308c-1.948.361-2.922.542-3.683.27A3 3 0 0 1 3.412 19.9c-.406-.699-.406-1.69-.406-3.671V12m7.342-1.402L3.627 3.877M1.75 2l1.877 1.877m0 0a1.6 1.6 0 0 0-.35.502c-.271.685-.271 1.66-.271 3.392V12"
    />
  </svg>
);
export default SvgPerspective02Off;
