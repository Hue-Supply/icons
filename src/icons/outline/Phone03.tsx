import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhone03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.627 4v.08c0 .672 0 1.008.13 1.265a1.2 1.2 0 0 0 .525.524c.257.131.593.131 1.265.131h.906c.672 0 1.008 0 1.265-.13a1.2 1.2 0 0 0 .525-.525c.13-.257.13-.593.13-1.265V4M10.8 21h2.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 18.72 18 17.88 18 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 3 14.88 3 13.2 3h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C6 5.28 6 6.12 6 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C8.28 21 9.12 21 10.8 21"
    />
  </svg>
);
export default SvgPhone03;
