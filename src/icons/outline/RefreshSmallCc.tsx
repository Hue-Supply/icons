import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefreshSmallCc = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.64 14.667A8.06 8.06 0 0 1 12.04 20c-4.451 0-8.06-3.582-8.06-8s3.609-8 8.06-8c3.211 0 5.718 2.704 7.94 5.127m.996-1.952.037 2.984-2.984.037"
    />
  </svg>
);
export default SvgRefreshSmallCc;
