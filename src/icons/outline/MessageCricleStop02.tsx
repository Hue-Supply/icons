import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCricleStop02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 12a9 9 0 1 0-17.521 2.903c.256.753.34 1.569.092 2.324l-.75 2.276a1.5 1.5 0 0 0 1.747 1.934l3.55-.778c.551-.12 1.122-.072 1.668.067.709.179 1.45.274 2.214.274m4.383-4.617 4.494 4.494M22 18.63a3.37 3.37 0 1 1-6.74 0 3.37 3.37 0 0 1 6.74 0Z"
    />
  </svg>
);
export default SvgMessageCricleStop02;
