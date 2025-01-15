import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAirdrop = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.463 15.534a5 5 0 1 1 7.122-.048M6.343 19a9 9 0 1 1 11.315 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.559 10h3.118a1.1 1.1 0 0 0 .953-1.65l-1.56-2.7a1.1 1.1 0 0 0-1.905 0l-1.558 2.7A1.1 1.1 0 0 0 10.44 22"
    />
  </svg>
);
export default SvgAirdrop;
