import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSketch = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m3.262 10.878 8 8.789c.4.44 1.091.44 1.491 0l8-8.79c.313-.344.349-.859.087-1.243L17.303 4.44a1 1 0 0 0-.823-.436H7.554a1 1 0 0 0-.823.436l-3.54 5.192c-.263.385-.227.901.087 1.246z"
    />
  </svg>
);
export default SvgSketch;
