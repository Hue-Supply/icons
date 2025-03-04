import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlginLeft1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.334 20V4m5.252 6.281h6.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.256.131-.592.131-1.265v-.16c0-.672 0-1.008-.13-1.264a1.2 1.2 0 0 0-.525-.525c-.257-.13-.593-.13-1.265-.13h-6.16c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525c-.131.256-.131.592-.131 1.264v.16c0 .673 0 1.009.13 1.265a1.2 1.2 0 0 0 .525.525c.257.13.593.13 1.265.13m0 7.437h3.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.256.131-.592.131-1.264v-.16c0-.673 0-1.009-.13-1.265a1.2 1.2 0 0 0-.525-.525c-.257-.13-.593-.13-1.265-.13h-3.16c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525c-.131.256-.131.592-.131 1.265v.16c0 .672 0 1.008.13 1.264a1.2 1.2 0 0 0 .525.525c.257.13.593.13 1.265.13"
    />
  </svg>
);
export default SvgAlginLeft1;
