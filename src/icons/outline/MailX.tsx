import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailX = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M22 12.5V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7.5m-9-14.415 7.508 6.625a1.5 1.5 0 0 0 1.984 0L20.5 5.585m-4.295 10.62 2.4 2.4m0 0 2.4 2.4m-2.4-2.4 2.4-2.4m-2.4 2.4-2.4 2.4"
    />
  </svg>
);
export default SvgMailX;
