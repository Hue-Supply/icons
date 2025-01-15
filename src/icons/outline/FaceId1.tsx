import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFaceId1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 3h.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8V8M8 3h-.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V8m0 8v.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21H8m8 0h.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V16M6.156 12c0-.7 1.948-4.206 5.844-4.206S17.844 11.3 17.844 12 15.896 16.206 12 16.206 6.156 12.7 6.156 12m6.848 0a1.004 1.004 0 1 1-2.008 0 1.004 1.004 0 0 1 2.008 0"
    />
  </svg>
);
export default SvgFaceId1;
