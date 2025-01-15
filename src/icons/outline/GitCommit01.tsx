import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitCommit01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 12h7m0 0a3 3 0 1 0 6 0m-6 0a3 3 0 1 1 6 0m0 0h7"
    />
  </svg>
);
export default SvgGitCommit01;
