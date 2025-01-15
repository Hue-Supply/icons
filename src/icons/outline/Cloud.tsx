import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloud = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 14.154C2 16.83 4.015 19 6.5 19h11c2.485 0 4.5-2.17 4.5-4.846s-2.015-4.846-4.5-4.846c-.463 0-.91.075-1.331.215C15.969 6.99 13.997 5 11.593 5 9.246 5 7.31 6.895 7.034 9.341a4 4 0 0 0-.534-.033c-2.485 0-4.5 2.17-4.5 4.846"
    />
  </svg>
);
export default SvgCloud;
