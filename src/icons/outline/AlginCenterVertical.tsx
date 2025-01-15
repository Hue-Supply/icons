import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlginCenterVertical = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.23 12H4m6.498 0h3.032M20 12h-2m-7.719 5.08V6.92c0-.672 0-1.008-.13-1.265a1.2 1.2 0 0 0-.525-.524C9.369 5 9.033 5 8.361 5h-.16c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525c-.13.257-.13.593-.13 1.265v10.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .524.524C7.193 19 7.53 19 8.201 19h.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.257.131-.593.131-1.265m7.438-2.5V9.42c0-.672 0-1.008-.131-1.265a1.2 1.2 0 0 0-.524-.524c-.257-.131-.593-.131-1.265-.131h-.16c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525c-.131.257-.131.593-.131 1.265v5.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524c.257.131.593.131 1.265.131h.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.13-.257.13-.593.13-1.265"
    />
  </svg>
);
export default SvgAlginCenterVertical;
