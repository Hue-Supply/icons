import * as React from 'react';
import type { SVGProps } from 'react';
const SvgJpg = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-2.5a.5.5 0 0 0-.5-.5H20m-10 0V8.16a.16.16 0 0 1 .16-.16H12a2 2 0 1 1 0 4zm0 0v4M3 8h3.5a.5.5 0 0 1 .5.5v6A1.5 1.5 0 0 1 5.5 16h-1A1.5 1.5 0 0 1 3 14.5"
    />
  </svg>
);
export default SvgJpg;
