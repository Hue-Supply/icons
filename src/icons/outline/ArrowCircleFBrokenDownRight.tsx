import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenDownRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.845 14.814H8.807m6.038 0V8.776m0 6.038L4.53 4.5m6.086-2.4a9.99 9.99 0 0 1 8.485 2.828c3.906 3.905 3.906 10.237 0 14.142-3.905 3.906-10.237 3.906-14.142 0a9.99 9.99 0 0 1-2.829-8.486"
    />
  </svg>
);
export default SvgArrowCircleFBrokenDownRight;
