import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlginBot = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 18.666H4m6.281-5.252v-6.16c0-.672 0-1.008-.13-1.265a1.2 1.2 0 0 0-.525-.524c-.257-.131-.593-.131-1.265-.131h-.16c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525c-.13.257-.13.593-.13 1.265v6.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .524.524c.257.131.593.131 1.265.131h.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.257.131-.593.131-1.265m7.438 0v-3.16c0-.672 0-1.008-.131-1.265a1.2 1.2 0 0 0-.524-.524c-.257-.131-.593-.131-1.265-.131h-.16c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525c-.131.257-.131.593-.131 1.265v3.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524c.257.131.593.131 1.265.131h.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.13-.257.13-.593.13-1.265"
    />
  </svg>
);
export default SvgAlginBot;
