import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHurricane02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.768 11.64c-1 .86-3.842 1.815-8.444 1.815S4.768 12.5 3.768 11.64m14.5 5.03c-.867.612-2.996 1.257-6.453 1.257s-5.68-.645-6.547-1.257m11.5 4.472c-.77.43-2.36.858-4.957.858s-4.274-.429-5.043-.858M21 5.333c0 1.841-4.228 3.334-9.444 3.334S2.11 7.174 2.11 5.333 6.34 2 11.556 2 21 3.492 21 5.333"
    />
  </svg>
);
export default SvgHurricane02;
