import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 9.743c0 1.104 2.462 2 5.5 2s5.5-.896 5.5-2m0 5.128c0 1.105-2.462 2-5.5 2-1.91 0-3.594-.354-4.58-.892M11 20c0 1.105 2.462 2 5.5 2s5.5-.895 5.5-2m0-15.608V20.13M11 4.392v9.461M2 17a5 5 0 1 0 10 0 5 5 0 0 0-10 0m9-12.57c0 1.342 2.462 2.43 5.5 2.43S22 5.772 22 4.43 19.538 2 16.5 2 11 3.088 11 4.43"
    />
  </svg>
);
export default SvgCoins06;
