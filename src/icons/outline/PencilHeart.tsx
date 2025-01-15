import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPencilHeart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.03 14.677 16.026 2.682a2.378 2.378 0 1 1 3.363 3.363L7.393 18.04M4.03 14.677l3.363 3.363M4.03 14.677a4.3 4.3 0 0 0-.931 1.391l-.75 1.801c-.167.402-.25.603-.274.73a1.2 1.2 0 0 0 1.397 1.396c.126-.023.327-.107.73-.274l1.8-.75c.52-.216.993-.533 1.391-.931m10.603-2.098c-.8-.91-2.133-1.154-3.135-.321-1.002.832-1.143 2.224-.356 3.208.787.985 3.491 3.282 3.491 3.282s2.705-2.297 3.492-3.282a2.256 2.256 0 0 0-.356-3.208c-1.02-.824-2.336-.588-3.136.32"
    />
  </svg>
);
export default SvgPencilHeart;
