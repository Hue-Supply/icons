import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleFBrokenDownLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.218 14.814V8.776m0 6.038h6.037m-6.037 0L19.53 4.5m2.4 6.086a9.99 9.99 0 0 1-2.829 8.485c-3.905 3.906-10.237 3.906-14.142 0-3.905-3.905-3.905-10.237 0-14.142A9.99 9.99 0 0 1 13.446 2.1"
    />
  </svg>
);
export default SvgArrowCircleFBrokenDownLeft;
