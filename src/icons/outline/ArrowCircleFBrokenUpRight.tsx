import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenUpRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.813 9.187v6.037m0-6.037H8.776m6.037 0L4.5 19.5m-2.4-6.085a9.99 9.99 0 0 1 2.829-8.486c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142a9.99 9.99 0 0 1-8.486 2.829"
    />
  </svg>
);
export default SvgArrowCircleFBrokenUpRight;
