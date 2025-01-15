import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcecream03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m17.422 10.403-3.172 8.54c-.695 1.872-1.043 2.808-1.55 3.075a1.5 1.5 0 0 1-1.4 0c-.507-.267-.855-1.203-1.55-3.075l-3.172-8.54M18 8c0 3.314-2.686 4.5-6 4.5S6 11.314 6 8a6 6 0 1 1 12 0"
    />
  </svg>
);
export default SvgIcecream03;
