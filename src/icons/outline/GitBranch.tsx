import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitBranch = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 12h8c.93 0 1.395 0 1.777-.102a3 3 0 0 0 2.12-2.122C18 9.395 18 8.93 18 8M6 12v4m0-4V8m0 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgGitBranch;
