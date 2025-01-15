import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudMoon02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.4 6.964A5 5 0 0 1 16.801 2 5 5 0 0 0 22 8.929a5 5 0 0 1-4.292 3.026m-11.715 1.06h.47c.02 0 .037-.018.037-.038a5.036 5.036 0 0 1 5.032-5.037H12a5.5 5.5 0 0 1 5.5 5.5v.993c0 .02.017.037.037.037h1.198a3.265 3.265 0 0 1 0 6.53H5.993a3.993 3.993 0 0 1 0-7.986M4 2l.54 1.46L6 4l-1.46.54L4 6l-.54-1.46L2 4l1.46-.54z"
    />
  </svg>
);
export default SvgCloudMoon02;
