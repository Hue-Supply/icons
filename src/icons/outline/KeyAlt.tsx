import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKeyAlt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.083 10.92a2.444 2.444 0 1 1-3.38-3.53 2.444 2.444 0 0 1 3.38 3.53"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.981 4.76a6.354 6.354 0 0 0-10.516 6.688l-4.267 4.086c-.606.582-.91.872-1.028 1.212a1.5 1.5 0 0 0-.02.927c.104.345.394.648.975 1.255l1.72 1.796c.561.585 1.49.605 2.074.045l2.471-2.366-1.014-1.06 2.47-2.365A6.356 6.356 0 0 0 18.98 4.76"
    />
  </svg>
);
export default SvgKeyAlt;
