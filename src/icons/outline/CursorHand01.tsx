import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCursorHand01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.857 13v.143a8.857 8.857 0 1 1-17.714 0v-2.405a1.771 1.771 0 1 1 3.542 0V13m3.543-2.926V6.033a1.771 1.771 0 1 0-3.543 0v7.712M10.23 10V3.771a1.771 1.771 0 0 1 3.542 0V10 4.756a1.771 1.771 0 0 1 3.543 0V10 7.771a1.771 1.771 0 0 1 3.543 0v5.288"
    />
  </svg>
);
export default SvgCursorHand01;
