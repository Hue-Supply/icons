import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersCheck03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 21s.889-5.815 8-5.815c1.156 0 2.147.153 2.997.41m-.62 3.042 1.92 2.17a.537.537 0 0 0 .826 0L21.377 16M19 4c1.22.825 2 2.086 2 3.5s-.78 2.675-2 3.5m-2.5-3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUsersCheck03;
