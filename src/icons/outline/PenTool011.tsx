import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPenTool011 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.974 15.704a4.3 4.3 0 0 0-.93 1.39l-.75 1.802c-.168.402-.252.603-.275.729a1.2 1.2 0 0 0 1.397 1.397c.126-.023.327-.107.73-.274l1.8-.75c.52-.216.993-.533 1.392-.931v0m-3.364-3.363L16.97 3.708a2.38 2.38 0 0 1 3.363 0v0a2.38 2.38 0 0 1 0 3.364L8.338 19.066m-3.364-3.363 3.364 3.363"
    />
  </svg>
);
export default SvgPenTool011;
