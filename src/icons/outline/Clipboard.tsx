import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClipboard = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M16.5 4c.464 0 .697 0 .892.026a3 3 0 0 1 2.582 2.582c.026.195.026.428.026.892v9.7c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V7.5c0-.464 0-.697.026-.892a3 3 0 0 1 2.582-2.582C6.803 4 7.036 4 7.5 4m2.056 2h4.888c.465 0 .698 0 .889-.051a1.5 1.5 0 0 0 1.06-1.06c.051-.192.051-.424.051-.889s0-.697-.05-.888a1.5 1.5 0 0 0-1.061-1.06C15.142 2 14.909 2 14.444 2H9.556c-.465 0-.698 0-.889.051a1.5 1.5 0 0 0-1.06 1.06c-.051.192-.051.424-.051.889s0 .697.05.888a1.5 1.5 0 0 0 1.061 1.06C8.858 6 9.091 6 9.556 6Z"
    />
  </svg>
);
export default SvgClipboard;
