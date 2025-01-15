import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleCode = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9.894 9.982 7.82 12.055a.63.63 0 0 0 0 .89l2.074 2.073m4.212-5.036 2.074 2.073a.63.63 0 0 1 0 .89l-2.074 2.073M21 12a9 9 0 0 1-11.214 8.726c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 21 12Z"
    />
  </svg>
);
export default SvgMessageCircleCode;
