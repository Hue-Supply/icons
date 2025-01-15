import * as React from 'react';
import type { SVGProps } from 'react';
const SvgModem03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 10v4.5m6-2.5v2M6 12v2m2-7s1.5-1.5 4-1.5S16 7 16 7M5 4s2.625-2 7-2 7 2 7 2M6 21v-1m4 1v-1m9-2h.008M3.92 22h16.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.257.131-.593.131-1.265v-3.16c0-.672 0-1.008-.13-1.265a1.2 1.2 0 0 0-.525-.524C21.088 15 20.752 15 20.08 15H3.92c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525C2 15.912 2 16.248 2 16.92v3.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524C2.912 22 3.248 22 3.92 22"
    />
  </svg>
);
export default SvgModem03;
