import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDownCircleBrokenLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.97 12.778a9.96 9.96 0 0 1-2.899 6.293c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142 10.237-3.905 14.142 0l-7.955 7.955m-.758-5.242v6h6"
    />
  </svg>
);
export default SvgArrowDownCircleBrokenLeft;
