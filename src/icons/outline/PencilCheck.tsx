import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPencilCheck = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.03 14.677 16.026 2.682a2.378 2.378 0 1 1 3.363 3.363L7.393 18.04M4.03 14.677l3.363 3.363M4.03 14.677a4.3 4.3 0 0 0-.931 1.391l-.75 1.801c-.167.402-.25.603-.274.73a1.2 1.2 0 0 0 1.397 1.396c.126-.023.327-.107.73-.274l1.8-.75c.52-.216.993-.533 1.391-.931M15 19.637l1.921 2.17a.537.537 0 0 0 .825 0L21.999 17"
    />
  </svg>
);
export default SvgPencilCheck;
