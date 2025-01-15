import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSend01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.629 2.971 3.173 19.787c-.572 1.29.792 2.584 2.05 1.945l6.098-3.094a1.5 1.5 0 0 1 1.358 0l6.098 3.094c1.258.639 2.622-.655 2.05-1.945L13.371 2.97c-.527-1.19-2.215-1.19-2.742 0"
    />
  </svg>
);
export default SvgSend01;
