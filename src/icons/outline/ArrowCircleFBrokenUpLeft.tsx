import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenUpLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.218 9.187h6.037m-6.037 0v6.037m0-6.037L19.53 19.5m-6.085 2.4a9.99 9.99 0 0 1-8.486-2.829c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0a9.99 9.99 0 0 1 2.83 8.486"
    />
  </svg>
);
export default SvgArrowCircleFBrokenUpLeft;
