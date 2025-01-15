import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPauseCircle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.105 10.442c0-.818 0-1.227.16-1.54a1.46 1.46 0 0 1 .638-.638c.312-.159.721-.159 1.54-.159h3.115c.818 0 1.227 0 1.54.16.274.14.498.363.638.638.159.312.159.721.159 1.539v3.116c0 .818 0 1.227-.16 1.54a1.46 1.46 0 0 1-.638.637c-.312.16-.721.16-1.54.16h-3.115c-.818 0-1.227 0-1.54-.16a1.46 1.46 0 0 1-.638-.638c-.159-.312-.159-.721-.159-1.54z"
    />
  </svg>
);
export default SvgPauseCircle;
