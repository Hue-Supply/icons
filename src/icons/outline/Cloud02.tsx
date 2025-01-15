import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloud02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.463 10.44H6.28a4.28 4.28 0 0 0 0 8.56H18.5a3.5 3.5 0 1 0 0-7h-.963a.037.037 0 0 1-.037-.037V10.5c0-3.038-2.516-5.5-5.553-5.5C8.967 5 6.5 7.423 6.5 10.402c0 .02-.017.037-.037.037"
    />
  </svg>
);
export default SvgCloud02;
