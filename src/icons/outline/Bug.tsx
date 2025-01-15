import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBug = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M18 6a1 1 0 1 0 0 2zm3.503-.257.928.371zm1.425-.872a1 1 0 0 0-1.857-.742zM18 16a1 1 0 1 0 0 2zm3.503 2.257-.929.372zm-.431 1.614a1 1 0 0 0 1.857-.742zM18.5 11a1 1 0 1 0 0 2zm3.5 2a1 1 0 1 0 0-2zM6 8a1 1 0 0 0 0-2zM2.497 5.743l.929-.372zm.431-1.614a1 1 0 0 0-1.856.742zM6 18a1 1 0 1 0 0-2zm-3.503.257.929.372zm-1.425.872a1 1 0 0 0 1.856.742zM5.5 13a1 1 0 1 0 0-2zM2 11a1 1 0 1 0 0 2zm15-2v6h2V9zM7 15V9H5v6zm5 5a5 5 0 0 1-5-5H5a7 7 0 0 0 7 7zm5-5a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7zM12 4a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7zm0-2a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5zm6 7h-6v2h6zm-6 0H6v2h6zm-1 1v11h2V10zm7-2h1.646V6H18zm4.431-1.886.497-1.243-1.857-.742-.497 1.242zM19.646 8a3 3 0 0 0 2.785-1.886l-1.857-.743a1 1 0 0 1-.928.629zM18 18h1.646v-2H18zm2.574.629.497 1.242 1.857-.742-.497-1.243zM19.646 18a1 1 0 0 1 .928.629l1.857-.743A3 3 0 0 0 19.646 16zM18.5 13H22v-2h-3.5zM6 6H4.354v2H6zm-2.574-.629L2.928 4.13l-1.856.742.497 1.243zM4.354 6a1 1 0 0 1-.928-.629l-1.857.743A3 3 0 0 0 4.354 8zM6 16H4.354v2H6zm-4.431 1.886-.497 1.243 1.856.742.498-1.242zM4.354 16a3 3 0 0 0-2.785 1.886l1.857.743A1 1 0 0 1 4.354 18zM5.5 11H2v2h3.5z"
    />
  </svg>
);
export default SvgBug;
