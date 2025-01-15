import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPencilLine = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m4.974 15.704 3.363 3.363m-3.363-3.363a4.3 4.3 0 0 0-.932 1.39l-.75 1.802c-.167.402-.25.603-.274.729a1.2 1.2 0 0 0 1.397 1.397c.127-.023.327-.107.73-.274l1.8-.75c.52-.216.993-.533 1.392-.931m-3.363-3.363L16.969 3.708a2.378 2.378 0 0 1 3.363 3.364L8.337 19.067m3.686 1.977h8.981"
    />
  </svg>
);
export default SvgPencilLine;
