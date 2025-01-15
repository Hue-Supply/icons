import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlginCenterHorizontal = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 6.23V4m0 6.498v3.032M12 20v-2m-5.08-7.719h10.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525C19 9.37 19 9.034 19 8.361v-.16c0-.672 0-1.008-.13-1.264a1.2 1.2 0 0 0-.525-.525c-.257-.13-.593-.13-1.265-.13H6.92c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525C5 7.193 5 7.529 5 8.2v.16c0 .673 0 1.009.13 1.265a1.2 1.2 0 0 0 .525.525c.257.13.593.13 1.265.13m2.5 7.437h5.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.256.131-.592.131-1.264v-.16c0-.673 0-1.009-.13-1.265a1.2 1.2 0 0 0-.525-.525c-.257-.13-.593-.13-1.265-.13H9.42c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525c-.131.256-.131.592-.131 1.265v.16c0 .672 0 1.008.13 1.264a1.2 1.2 0 0 0 .525.525c.257.13.593.13 1.265.13"
    />
  </svg>
);
export default SvgAlginCenterHorizontal;
