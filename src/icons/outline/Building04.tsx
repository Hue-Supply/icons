import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBuilding04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13 21V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C10.72 3 9.88 3 8.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8V21zm0 0h9v-9.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 7 18.88 7 17.2 7H13zm-9 0h16M6 7h3m-3 4h3m7.547 0h1.906M6 15h3m7.547 0h1.906"
    />
  </svg>
);
export default SvgBuilding04;
