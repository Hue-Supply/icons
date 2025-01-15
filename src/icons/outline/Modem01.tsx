import * as React from 'react';
import type { SVGProps } from 'react';
const SvgModem01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.5 9 2.5 2.625m0 0L14.5 9M12 11.625V16m5-11s1.5 1.5 1.5 4-1.5 4-1.5 4M7 5S5.5 6.5 5.5 9 7 13 7 13M20 2s2 2.625 2 7-2 7-2 7M4 2S2 4.625 2 9s2 7 2 7m1.162 3h.008m-1.25 3h16.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.257.131-.593.131-1.265v-2.16c0-.672 0-1.008-.13-1.265a1.2 1.2 0 0 0-.525-.524C21.088 16 20.752 16 20.08 16H3.92c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525C2 16.912 2 17.248 2 17.92v2.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524C2.912 22 3.248 22 3.92 22"
    />
  </svg>
);
export default SvgModem01;
