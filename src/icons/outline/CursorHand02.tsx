import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCursorHand02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.857 13v.143a8.857 8.857 0 1 1-17.714 0v-1.77a1.771 1.771 0 0 1 3.542 0V13m3.543-3.802V3.771a1.771 1.771 0 0 0-3.542 0v9.974m7.085-5.769v2.71m0-2.71a1.771 1.771 0 0 0-3.543 0v2.71m3.543-2.71a1.772 1.772 0 0 1 3.543 0v2.71m3.543 3.06V9.223a1.771 1.771 0 0 0-3.543 0v.924"
    />
  </svg>
);
export default SvgCursorHand02;
