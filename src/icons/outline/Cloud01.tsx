import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloud01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.463 10.44H6.28a4.28 4.28 0 0 0 0 8.56h11.44a4.28 4.28 0 0 0 0-8.56h-.183a.037.037 0 0 1-.037-.038A5.4 5.4 0 0 0 12.106 5h-.212A5.4 5.4 0 0 0 6.5 10.402c0 .02-.017.037-.037.037"
    />
  </svg>
);
export default SvgCloud01;
