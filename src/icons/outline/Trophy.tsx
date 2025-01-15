import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrophy = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 15a6 6 0 0 1-6-6V3.696C6 2.759 6.76 2 7.696 2h8.608C17.241 2 18 2.76 18 3.696V9a6 6 0 0 1-6 6m0 0v3m-3.41 4h6.82a1.09 1.09 0 0 0 1.09-1.09A2.91 2.91 0 0 0 13.59 18h-3.18a2.91 2.91 0 0 0-2.91 2.91c0 .602.488 1.09 1.09 1.09M18 4h2.364c.126 0 .19 0 .243.004a1.5 1.5 0 0 1 1.39 1.389c.003.053.003.117.003.243V6a4 4 0 0 1-4 4zM6 4H3.636c-.126 0-.19 0-.243.004a1.5 1.5 0 0 0-1.39 1.389C2 5.446 2 5.51 2 5.636V6a4 4 0 0 0 4 4z"
    />
  </svg>
);
export default SvgTrophy;
