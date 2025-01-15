import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRoute04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 5h3.914c1.93 0 2.74 2.465 1.187 3.61l-9.202 6.78C6.345 16.535 7.155 19 9.086 19H12m10 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgRoute04;
