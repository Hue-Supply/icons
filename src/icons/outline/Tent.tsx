import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTent = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 5.333 4.18 18.365c-.713 1.19-1.07 1.785-1.024 2.274.04.427.26.816.605 1.07C4.158 22 4.851 22 6.24 22H17.76c1.388 0 2.081 0 2.477-.29a1.5 1.5 0 0 0 .606-1.07c.046-.49-.311-1.085-1.025-2.275zm0 0L14 2m-2 3.333L10 2m2 20V6.5"
    />
  </svg>
);
export default SvgTent;
