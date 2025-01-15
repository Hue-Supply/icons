import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudOff01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.876 5.096q.495-.095 1.018-.096h.212a5.4 5.4 0 0 1 5.394 5.402c0 .02.017.037.037.037h.183a4.28 4.28 0 0 1 4.107 5.49m-14.5-8.4a5.4 5.4 0 0 0-.827 2.873c0 .02-.017.037-.037.037H6.28a4.28 4.28 0 0 0 0 8.561h11.44q.425 0 .828-.08M2 2l20 20"
    />
  </svg>
);
export default SvgCloudOff01;
