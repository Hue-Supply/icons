import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweeNtomb = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 21h18M9 14h6m-6-3h6m-1.7-9L13 3.5l-1 2L14 4m5 17V9c0-.88-.163-1.724-.46-2.5l-1.91-.81c-.604-.255-.905-.383-1.166-.567a3 3 0 0 1-.616-.578c-.2-.249-.346-.542-.64-1.128L13.5 2H12a7 7 0 0 0-7 7v12z"
    />
  </svg>
);
export default SvgHalloweeNtomb;
