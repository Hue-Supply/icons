import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileLock = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14 11V9a2 2 0 1 0-4 0v2m10-4.2v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8ZM9.92 17h4.16c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .524-.525c.131-.257.131-.593.131-1.265v-2.16c0-.672 0-1.008-.13-1.265a1.2 1.2 0 0 0-.525-.524C15.088 11 14.752 11 14.08 11H9.92c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525C8 11.912 8 12.248 8 12.92v2.16c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524C8.912 17 9.248 17 9.92 17Z"
    />
  </svg>
);
export default SvgFileLock;
