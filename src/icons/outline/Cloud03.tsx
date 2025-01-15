import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloud03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 14.25v-.277A4.473 4.473 0 0 0 17.527 9.5a.04.04 0 0 1-.036-.025l-.165-.496A5.82 5.82 0 0 0 11.806 5H9a7 7 0 0 0 0 14h8.25A4.75 4.75 0 0 0 22 14.25"
    />
  </svg>
);
export default SvgCloud03;
