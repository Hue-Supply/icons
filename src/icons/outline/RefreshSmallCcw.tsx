import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefreshSmallCcw = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.34 14.667A8.06 8.06 0 0 0 11.941 20c4.45 0 8.06-3.582 8.06-8s-3.61-8-8.06-8c-3.212 0-5.719 2.704-7.94 5.127m-.996-1.952-.037 2.984 2.984.037"
    />
  </svg>
);
export default SvgRefreshSmallCcw;
