import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSalad = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 10.647a3.5 3.5 0 0 1 7 0m-.5-2.197 1.99-.912c.528-.242.792-.363 1.06-.384a1.5 1.5 0 0 1 .693.113c.247.103.46.302.885.698L19 10.647M12.27 7.82a5.526 5.526 0 0 1 5.74-4.067l1.418.105-.125 1.69c-.029.39-.043.585-.067.75a4.78 4.78 0 0 1-1.428 2.777m-5.355-3.953a5.5 5.5 0 0 0-4.215-1.368l-1.414.14.167 1.688c.039.389.058.583.086.746q.07.417.209.805m4.135 13.514h1.158c.39 0 .586 0 .752-.007a8 8 0 0 0 7.662-7.663c.007-.165.007-.36.007-.751l-.001-.141a1.5 1.5 0 0 0-1.437-1.437l-.14-.001H4.437a1.5 1.5 0 0 0-1.437 1.438l-.001.14c0 .392 0 .587.007.752a8 8 0 0 0 7.662 7.663c.166.007.361.007.752.007"
    />
  </svg>
);
export default SvgSalad;
