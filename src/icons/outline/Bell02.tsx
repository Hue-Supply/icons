import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBell02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 25 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.784 21.506h5.005M12.093 2.494h.576a5.48 5.48 0 0 1 5.09 3.447c.414 1.032.708 2.108.877 3.207l.443 2.88a6.08 6.08 0 0 0 1.709 3.373c.957.957.28 2.593-1.074 2.593H5.049c-1.354 0-2.031-1.636-1.074-2.593a6.08 6.08 0 0 0 1.709-3.373l.443-2.88a14.6 14.6 0 0 1 .876-3.207 5.48 5.48 0 0 1 5.09-3.447"
    />
  </svg>
);
export default SvgBell02;
