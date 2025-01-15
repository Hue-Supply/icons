import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEggFried = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.981 12.601c0 4.593-4.324 8.327-9.511 8.327S2.082 17.446 2.082 12.256 4.888 3.1 8.818 3.1c4.284 0 3.984 2.96 6.84 4.388 2.857 1.428 6.323.52 6.323 5.113"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.568 13.093a3.455 3.455 0 1 1-6.91 0 3.455 3.455 0 0 1 6.91 0"
    />
  </svg>
);
export default SvgEggFried;
