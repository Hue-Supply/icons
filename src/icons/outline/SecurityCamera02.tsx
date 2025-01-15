import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSecurityCamera02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 16.746v2.127m0 0V21m0-2.127h-2.5a1.5 1.5 0 0 1-1.5-1.5V13.5m-8.576.437.16.288c.2.358.3.538.402.677.738 1.01 2.04 1.372 3.166.881.155-.068.328-.171.673-.378l5.447-3.266c1.298-.778 1.947-1.167 2.296-1.726a2.86 2.86 0 0 0 .428-1.658c-.033-.666-.408-1.34-1.157-2.687l-.13-.236c-.75-1.347-1.124-2.02-1.663-2.384a2.6 2.6 0 0 0-1.597-.444c-.642.035-1.29.424-2.588 1.202l-9.914 5.943-.302.182c-1.358.87-.375 3.033 1.135 2.497l.327-.127.074-.029c1.205-.45 2.548.05 3.203 1.193z"
    />
  </svg>
);
export default SvgSecurityCamera02;
