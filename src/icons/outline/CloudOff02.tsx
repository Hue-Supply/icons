import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudOff02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.5 19H6.28a4.28 4.28 0 0 1 0-8.56h.183c.02 0 .037-.017.037-.038 0-1.092.331-2.108.898-2.959m3.799-2.391a5.5 5.5 0 0 1 .75-.052c3.037 0 5.553 2.462 5.553 5.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 0 1 3.458 4.045M2 2l20 20"
    />
  </svg>
);
export default SvgCloudOff02;
