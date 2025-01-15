import * as React from 'react';
import type { SVGProps } from 'react';
const SvgParagraphSpacing = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.547 5.25H20m-7.447 4.5h7.453m-7.453 4.5h7.453m-7.453 4.5h7.453m-13.732.289V3.919M4.018 5.533 6.274 3 8.53 5.533m0 12.937-2.256 2.533-2.256-2.533"
    />
  </svg>
);
export default SvgParagraphSpacing;
