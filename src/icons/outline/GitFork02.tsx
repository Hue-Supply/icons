import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitFork02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.5 5.5h-.7c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C10 7.78 10 8.62 10 10.3v1.2m5.5-6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 12h-.7c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C10 15.22 10 14.38 10 12.7v-1.2m5.5 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-5.5-6H2.5"
    />
  </svg>
);
export default SvgGitFork02;
