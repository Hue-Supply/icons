import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTriangleCheck = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.84 14.86 1.479 1.584c.148.16.4.16.549 0l3.23-3.46m-9.983 8.504H19.9c1.524 0 2.488-1.637 1.749-2.97L13.341 3.541c-.78-1.408-2.82-1.363-3.538.076L2.325 18.595a2 2 0 0 0 1.79 2.893"
    />
  </svg>
);
export default SvgTriangleCheck;
