import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGif = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.25 8h-4a.5.5 0 0 0-.5.5V12m0 0v4m0-4h4m-12-4h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-2.5a.5.5 0 0 0-.5-.5h-.5m5-4v8"
    />
  </svg>
);
export default SvgGif;
