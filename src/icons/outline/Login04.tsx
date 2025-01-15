import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.022 8v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.742 3 14.902 3 13.222 3H7.819c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.327.642-.327 1.482-.327 3.162v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311C5.3 21 6.14 21 7.82 21h5.403c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V16m-9.498-4 4.269 4.27M8.523 12l4.27-4.27M8.523 12h12.478"
    />
  </svg>
);
export default SvgLogin04;
