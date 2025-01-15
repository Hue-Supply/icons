import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 8v-.156c0-1.535 0-2.302.287-2.91a3 3 0 0 1 1.167-1.29c.577-.347 1.34-.424 2.868-.576l5.4-.54c1.83-.183 2.743-.275 3.45.026a3 3 0 0 1 1.46 1.32C21 4.547 21 5.466 21 7.304v9.392c0 1.838 0 2.757-.369 3.43a3 3 0 0 1-1.459 1.32c-.706.3-1.62.21-3.45.026l-5.4-.54c-1.528-.152-2.292-.229-2.869-.575a3 3 0 0 1-1.167-1.291c-.288-.609-.287-1.377-.287-2.912V16m9.498-4-4.27 4.27m4.27-4.27-4.27-4.27m4.27 4.27H3.02"
    />
  </svg>
);
export default SvgLogin05;
