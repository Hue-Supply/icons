import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTicket01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14 11.46v1.114m0 3.345v1.115M14 7v1.115M18.5 12c0 1.66 1.156 3.05 2.707 3.41.337.078.505.117.588.177a.43.43 0 0 1 .165.208c.04.094.04.23.04.505v.5c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 20 19.92 20 18.8 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 18.48 2 17.92 2 16.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v.5c0 .274 0 .411-.04.505a.43.43 0 0 1-.165.208c-.083.06-.251.1-.588.177A3.5 3.5 0 0 0 18.5 12"
    />
  </svg>
);
export default SvgTicket01;
