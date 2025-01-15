import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrop02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18 14v-3.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 6 14.88 6 13.2 6H10M2 6h4m0 0v7.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C8.28 18 9.12 18 10.8 18H18M6 6V2m12 16v4m0-4h4"
    />
  </svg>
);
export default SvgCrop02;
