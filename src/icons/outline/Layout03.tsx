import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayout03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 9h18M3 9v7.2c0 1.68 0 2.52.328 3.162a3 3 0 0 0 1.31 1.311C5.282 21 6.122 21 7.802 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V9M3 9V7.8c0-1.68 0-2.52.328-3.162a3 3 0 0 1 1.31-1.311C5.282 3 6.122 3 7.802 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.31 1.311c.328.642.328 1.482.328 3.162V9M7 13h10M7 17h10"
    />
  </svg>
);
export default SvgLayout03;
