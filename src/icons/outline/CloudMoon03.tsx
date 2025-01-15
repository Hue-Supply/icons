import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudMoon03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.4 11.965A5 5 0 0 0 22 8.929 5 5 0 0 1 16.8 2a5 5 0 0 0-4.4 4.964m5.125 5.296h.104a4.37 4.37 0 1 1 0 8.74H8.44a6.44 6.44 0 0 1 0-12.88h3.445a5.87 5.87 0 0 1 5.517 3.869l.09.246q.008.024.034.025M4 2l.54 1.46L6 4l-1.46.54L4 6l-.54-1.46L2 4l1.46-.54z"
    />
  </svg>
);
export default SvgCloudMoon03;
