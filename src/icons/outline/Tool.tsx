import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTool = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m14.43 8.822.774.775c.752.752 1.97.752 2.721 0l2.071-2.07c.48-.48 1.288-.319 1.423.347a6.737 6.737 0 0 1-9.355 7.485l-5.546 5.545a2.405 2.405 0 0 1-3.402-3.401l5.549-5.549a6.737 6.737 0 0 1 7.488-9.346c.665.134.827.943.347 1.423L14.43 6.1a1.924 1.924 0 0 0 0 2.721"
    />
  </svg>
);
export default SvgTool;
