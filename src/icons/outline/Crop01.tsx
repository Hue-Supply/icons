import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrop01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 6h4m12 16v-4m4 0h-4M6 2v4m0 0v7.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C8.28 18 9.12 18 10.8 18H18M6 6h7.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C18 8.28 18 9.12 18 10.8V18"
    />
  </svg>
);
export default SvgCrop01;
