import * as React from 'react';
import type { SVGProps } from 'react';
const SvgModem02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11.5V16m5-11s1.5 1.5 1.5 4-1.5 4-1.5 4M7 5S5.5 6.5 5.5 9 7 13 7 13M20 2s2 2.625 2 7-2 7-2 7M4 2S2 4.625 2 9s2 7 2 7m12.5 3H19M3.92 22h16.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.257.131-.593.131-1.265v-2.16c0-.672 0-1.008-.13-1.265a1.2 1.2 0 0 0-.525-.524C21.088 16 20.752 16 20.08 16H3.92c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525C2 16.912 2 17.248 2 17.92v2.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524C2.912 22 3.248 22 3.92 22M14 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
  </svg>
);
export default SvgModem02;
