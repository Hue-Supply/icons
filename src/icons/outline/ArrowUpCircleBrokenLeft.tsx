import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpCircleBrokenLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.223 21.97a9.96 9.96 0 0 1-6.294-2.899c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0 3.905 10.237 0 14.142l-7.955-7.955m5.242-.758h-6v6"
    />
  </svg>
);
export default SvgArrowUpCircleBrokenLeft;
