import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuestionTriangle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.815 12.634a2.248 2.248 0 0 1 4.37.75c0 1.498-2.249 2.248-2.249 2.248v.207m.03 2.793h.01M4.114 22H19.9c1.524 0 2.488-1.637 1.749-2.97L13.341 4.054c-.78-1.407-2.82-1.363-3.538.077L2.325 19.107A2 2 0 0 0 4.115 22"
    />
  </svg>
);
export default SvgQuestionTriangle;
