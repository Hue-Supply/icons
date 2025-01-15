import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitCommit02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22v-7m0 0a3 3 0 1 0 0-6m0 6a3 3 0 1 1 0-6m0 0V2"
    />
  </svg>
);
export default SvgGitCommit02;
