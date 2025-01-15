import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCopy03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 16H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 13.72 2 12.88 2 11.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 2 5.12 2 6.8 2h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C16 4.28 16 5.12 16 6.8V8m-3.2 14h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 8 18.88 8 17.2 8h-4.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C8 10.28 8 11.12 8 12.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C10.28 22 11.12 22 12.8 22"
    />
  </svg>
);
export default SvgCopy03;
