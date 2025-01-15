import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitFork01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 8v.7c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327H12M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m12 0v.7c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H12M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-6 5.5V21"
    />
  </svg>
);
export default SvgGitFork01;
