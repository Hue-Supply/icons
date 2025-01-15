import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowSmallUpLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.657 17.657 7.05 7.05m-.707 6.364v-7.07h7.07"
    />
  </svg>
);
export default SvgArrowSmallUpLeft;
