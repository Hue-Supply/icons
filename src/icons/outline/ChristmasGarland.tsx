import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasGarland = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M2 6s3 4 10 4 10-4 10-4m-10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0v-3m8 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8M4 8v3m2 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgChristmasGarland;
