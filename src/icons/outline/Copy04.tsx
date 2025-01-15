import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCopy04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 16v1.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C10.28 22 11.12 22 12.8 22h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 8 18.88 8 17.2 8H16m-9.2 8h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C16 13.72 16 12.88 16 11.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C13.72 2 12.88 2 11.2 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 16 5.12 16 6.8 16"
    />
  </svg>
);
export default SvgCopy04;
